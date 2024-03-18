/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import AuthController from '#controllers/auth_controller'

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
import RolesController from '#controllers/roles_controller'
import UsersController from '#controllers/users_controller'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})
router.group(() => {
  router.group(() => {
    router.post('/login', [AuthController, 'Login'])
    router.post('/register', [AuthController, 'Register'])
    router.get('/profile', [AuthController, 'Profile']).use([middleware.auth()])
  }).prefix('/auth')
  router.group(() => {
    router.get('/', [RolesController, 'Get'])
  }).prefix('/role')
  router.group(() => {
    router.get('/', [UsersController, 'Get'])
    router.get('/:id', [UsersController, 'GetById'])
    router.post('/', [UsersController, 'Post'])
    router.put('/', [UsersController, 'Put'])
    router.delete('/', [UsersController, 'Delete'])
  }).prefix('/user')

}).prefix('/api')
