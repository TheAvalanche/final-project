# final-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with backend and hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test

# stop execution
CTRL + C
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Test Backend
(Use POSTMAN or RESTLET CLIENT extensions in chrome)

* Create new user (unique id will be created at backend):

```
POST
http://localhost:8091/api/users

Headers:
Content-Type: application/json

Body:
{
  "name":"Anna",
  "surname": "Smith"
  "login": "anna123",
  "age": 23,
  "occupation": "Lead Test Specialist"
}
```

* Update user (use user id in request path):

```
PUT
http://localhost:8091/api/users/{userId}

Headers:
Content-Type: application/json

Body:
{
  "name":"Anna Updated",
  "surname": "Smith Updated"
  "login": "anna123",
  "age": 23,
  "occupation": "Lead Test Specialist"
}
```

* Delete user (use user id in request path):

```
DELETE
http://localhost:8091/api/users/{userId}

Headers:
Content-Type: application/json
```

* Get user (use user id in request path):

```
GET
http://localhost:8091/api/users/{userId}

Headers:
Content-Type: application/json
```

* Get ALL users:

```
GET
http://localhost:8091/api/users

Headers:
Content-Type: application/json
```
