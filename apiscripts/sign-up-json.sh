#!/bin/bash


#curl "http://httpbin.org/post" \
curl "https://aqueous-atoll-85096.herokuapp.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data "{
    \"credentials\": {
      \"email\": \"${EMAIL}\",
      \"password\": \"${PASSWORD}\",
      \"password_confirmation\": \"${PASSWORD}\"
    }
  }"

# data output from curl doesn't have a trailing newline
echo
