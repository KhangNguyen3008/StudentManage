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
import Role from '#models/role'
import Roles from '../app/Enum/Roles.js'

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
}).prefix('/api')
