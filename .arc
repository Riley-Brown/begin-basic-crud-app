@app
begin-app

@http
get  /todos
get /repos
post /todos
post /todos/delete


@tables
data
  scopeID *String
  dataID **String
  ttl TTL
