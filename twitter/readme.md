
# Registering as a user

A user that wants to register their API makes a POST request to this server with the parameter "api" set to the url of the API they want to register.  

This server then grabs the JSON object at the provided URL and stores it in the database.

Should we store what the provided API endpoint is?  And where?  Can we replace the api field of their API to avoid self-reference? ;)

##This may be helpful

```
curl --data "api=http://localhost:3000/api" localhost:3001/register
```

# Pushing new data

There an endpoint exposed for pushing new data as well, but we haven't written that yet.
