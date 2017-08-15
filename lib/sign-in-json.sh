#!/bin/bash

curl "https://aqueous-atoll-85096.herokuapp.com" \
# curl "http://tic-tac-toe.wdibos.com" \
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
