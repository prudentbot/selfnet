
# Usage

A user that wants to register their API makes a POST request to this server with the parameter "api" set to the url of the API they want to register.  

This server then grabs the JSON object at the provided URL and stores it in the database.

Should we store what the provided API endpoint is?  And where?  Can we replace the api field of their API to avoid self-reference? ;)
