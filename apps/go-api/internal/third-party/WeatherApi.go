package main

import (
	"fmt"
	"io"
	"net/http"
)

func get() {
	url := "https://weatherapi-com.p.rapidapi.com/ip.json?q=%3CREQUIRED%3E"

	req, err := http.NewRequest("GET", url, nil)

	req.Header.Add("X-RapidAPI-Host", "weatherapi-com.p.rapidapi.com")
	req.Header.Add("X-RapidAPI-Key", "8f89637800msh1c0ab6a3d2accefp1ec93ejsnfb9bc7fd006b")

	res, err := http.DefaultClient.Do(req)

	if err != nil {
		// process error
		return
	}

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))
}
