#!/bin/bash

# curl "http://httpbin.org/post" \
curl "http://localhost:4741/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data "{
    \"credentials\": {
      \"email\": \"${EMAIL}\",
      \"password\": \"${PASSWORD}\"
    }
  }"

# data output from curl doesn't have a trailing newline
echo
