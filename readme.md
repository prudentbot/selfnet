
# What's in here?

Some code prototyping the replication web-application functionality via aggregation of data from personal APIs.  

/twitter is an example aggregator that replicates Twitter functionality
twitter.js is also a twitter clone, but is completely decentralized, and relies on users to maintain the service themselves

# Some hints on how to develop

All the stuff here relies on running a personal API that serves JSON data.

example-personal is an simple personal API that can be run with the api-server utility.  Here's how to use it

1. Navigate to api-server directory
2. Install using `npm install -g`
3. run using `api-server [port] [directory location]`
