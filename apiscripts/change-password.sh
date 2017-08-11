#!/bin/bash

#curl "http://localhost:3000/change-password/${ID}" \
curl "https://aqueous-atoll-85096.herokuapp.com/patch?id=${ID}" \
  --include \
  --request PATCH \
  --data-urlencode ""

# data output from curl doesn't have a trailing newline
echo
