# Apollo Client 2.0 Error Stream Issue

This project demonstrates the Apollo Client Error Stream Issue that
causes Apps to crash whenever the HTTP status code from a GraphQL 
query response is above HTTP 300 and has the errors response field set.

More on this issue can be found [here](https://github.com/apollographql/apollo-link/issues/542)

## Building and Running this project:

```bash
npm install
./run.sh
```

Use Ctrl-C to stop.


## Demo

An Ionic browser window should be automatically displayed.
If not, click [here](http://localhost:8100).

Notice that the Red button will cause app to crash.
Reloading the page will restore app.


## Mountebank imposters used to test client

Open browser window with [Mountebank Imposters](http://localhost:2525/imposters)

