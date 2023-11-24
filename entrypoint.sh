#!/bin/sh

if [ -z "$API_HOST" ]
then
    API_HOST='/api'
fi

echo "REACT_APP_API_HOST=$API_HOST" >> ./.env
npm run build
exec serve -s ./build
