package main

import (
        "encoding/json"
        "fmt"
        "log"
        "net/http"
        "net/url"

        "github.com/gorilla/mux"
)

const (
        apiKey = "20b62700aa6d001e1d74d02cee934163"
)

type TrackResponse struct {
        Success bool `json:"success"`
}

func trackHandler(w http.ResponseWriter, r *http.Request) {
        trackCode := r.URL.Query().Get("trackCode")
        if trackCode == "" {
                http.Error(w, "Track code is required", http.StatusBadRequest)
                return
        }

        apiUrl := fmt.Sprintf("https://api.track24.ru/tracking.json.php?apiKey=%s&trackCode=%s", apiKey, url.QueryEscape(trackCode))

        resp, err := http.Get(apiUrl)
        if err != nil {
                log.Println("Error fetching from API:", err)
                http.Error(w, "Failed to check track code", http.StatusInternalServerError)
                return
        }
        defer resp.Body.Close()

        var trackResp TrackResponse
        if err := json.NewDecoder(resp.Body).Decode(&trackResp); err != nil {
                log.Println("Error decoding API response:", err)
                http.Error(w, "Failed to decode API response", http.StatusInternalServerError)
                return
        }

        if trackResp.Success {
                w.WriteHeader(http.StatusOK)
                fmt.Fprint(w, "Track code exists")
        } else {
                w.WriteHeader(http.StatusNotFound)
                fmt.Fprint(w, "Track code does not exist")
        }
}

func main() {
        r := mux.NewRouter()
        r.HandleFunc("/track", trackHandler).Methods("GET")

        log.Println("Server is starting on :8080")
        log.Fatal(http.ListenAndServe(":8080", r))
}