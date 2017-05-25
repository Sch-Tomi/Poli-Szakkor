'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.get('/').render('welcome')
Route.get('/hello').render('hello')

Route.get('/login', 'SessionController.login')
Route.get('/logout', 'SessionController.logout')
Route.get('/register', 'SessionController.register')

Route.post('/login', 'SessionController.doLogin')
Route.post('/register', 'SessionController.doRegister')
