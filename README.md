### nodejs pubsub socket broadcasting example ###

Example Use:

// run: redis-server

// run: node app

make request with curl:

````
curl -X POST http://localhost:8000 \
> -H "content-type: application/json" \
> -d '[{"badge_id":"foo bar badge"}]'
````

check by running `redis-cli`

````
LRANGE badges 0 -1
````

also check via GET request:

````
curl http://localhost:8000/badges
````

@see revision log for sequential steps to construct this broadcasting server

@see https://github.com/Stratigos/nodepubsubexamplesubscriber for subscription example