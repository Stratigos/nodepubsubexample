## Under Construction ##

Example Use:

// run: redis-server

// run: node app

make request with curl:

````
curl -X POST http://localhost:8000 \
> -H "content-type: application/json" \
> -d '[{"badge_id":"foo bar badge"}]'
````