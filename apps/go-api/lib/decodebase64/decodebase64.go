package decodebase64

import (
	"encoding/base64"
	"fmt"
)

func DecodeBase64Value(k string) (keyValue string) {
	sDec, err := base64.StdEncoding.DecodeString(k)

	if err != nil {
		fmt.Print(err.Error())
	}

	keyValue = string(sDec)

	return
}
