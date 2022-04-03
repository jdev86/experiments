package main

import (
	"encoding/base64"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
)

type Response struct {
	LOCATION Location           `json:"location"`
	CURRENT  Current_Conditions `json:"current"`
}

type Location struct {
	CITY       string `json:"name"`
	REGION     string `json:"region"`
	COUNTRY    string `json:"country"`
	LOCAL_TIME string `json:"localtime"`
}

type Current_Conditions struct {
	LAST_UPDATED string `json:"last_updated"`
	TEMP         string `json:"temp_f"`
	CONDITIONS   struct {
		CONDITION          string `json:"text"`
		CONDITION_ICON_URL string `json:"icon"`
	} `json:"condition"`
}

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}

// use godot package to load/read the .env file and
// return the value of the key
func goDotEnvVariable(key string) string {

	// load .env file
	err := godotenv.Load(".env")

	if err != nil {
		log.Fatalf("Error loading .env file")
	}

	return os.Getenv(key)
}

func decodeApiKey(k string) (apiKey string) {
	sDec, err := base64.StdEncoding.DecodeString(k)

	if err != nil {
		fmt.Print(err.Error())
	}

	fmt.Println(string(sDec))

	apiKey = string(sDec)

	return
}

func weatherInfo(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)

	fmt.Println("Calling API...")

	w.WriteHeader(http.StatusCreated)
	w.Header().Set("Content-Type", "application/json")

	url := "https://weatherapi-com.p.rapidapi.com/forecast.json?q=76226&days=3"

	req, err := http.NewRequest("GET", url, nil)

	if err != nil {
		fmt.Print(err.Error())
	}

	req.Header.Add("X-RapidAPI-Host", "weatherapi-com.p.rapidapi.com")
	req.Header.Add("X-RapidAPI-Key", decodeApiKey(goDotEnvVariable("API_KEY")))

	res, _ := http.DefaultClient.Do(req)

	if err != nil {
		log.Fatalf("Error happened in JSON marshal. Err: %s", err)
	}

	defer res.Body.Close()
	bodyBytes, _ := ioutil.ReadAll(res.Body)

	if err != nil {
		fmt.Print(err.Error())
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(bodyBytes)

	fmt.Println("API Called Successfully")

	return
}

func handleRequest() {
	http.HandleFunc("/", weatherInfo)
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func main() {
	handleRequest()
}
