#!/bin/bash

# curl "http://localhost:3000/sign-out/$ID" \
curl "https://aqueous-atoll-85096.herokuapp.com/delete?id=$ID" \
  --include \
  --request DELETE

# data output from curl doesn't have a trailing newline
echo
