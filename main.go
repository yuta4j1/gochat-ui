package main

import (
	"fmt"

	"github.com/Equanox/gotron"
)

func main() {
	fmt.Println("test")

	window, err := gotron.New()
	if err != nil {
		panic(err)
	}

	done, err := window.Start()
	if err != nil {
		panic(err)
	}

	<-done
}
