# Hacktivpres - A simple blogging app
 * menggunakan Express Js untuk api server.
 * menggunakan mongoDB dan mongoose untuk database serta ODM
 * Vue.js untuk front-end.

 # SERVER 
 ## How to install
 ``` sh
 $ npm install
 ```

 ## basic route
|  Route |  HTTP  | Description |
| -------| ------ | --------- |
| / | GET | Welcome express |

## list User routes
| Route | HTTP | Description |
| ------| ----- | ---------- |
| /api/users| GET | get all user |
| /api/users/signup | POST | Sign Up with new user info |
| /api/users/signin | POST | Sign In while get an access token based on credential  |


## list Blog
| Route | HTTP | Description |
| ------ | ----- | --------- |
| /api/articles | GET | get all articles |
| /api/articles/:id | GET | get detail articles |
| /api/articles/:id | PUT | edit blog user authorization only |
| /api/articles/:id | DELETE | delete blog user authorization only |
| /api/articles/category | GET | get article by category |

## usage 
``` sh
$ npm run dev
$ npm start
```
## ACCESS API VIA
`http://localhost:3000/api` .