#!/bin/bash

#curl "http://localhost:3000/sign-in" \
curl "https://aqueous-atoll-85096.herokuapp.com/post" \
  --include \
  --request POST \
  --data-urlencode ""

echo
