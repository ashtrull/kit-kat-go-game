#!/bin/bash

#curl "http://localhost:3000/sign-up" \
curl "https://aqueous-atoll-85096.herokuapp.com/post" \
  --include \
  --request POST \
  --data-urlencode ""

# --header "Content-Type: application/x-www-form-urlencoded"

# data output from curl doesn't have a trailing newline
echo
