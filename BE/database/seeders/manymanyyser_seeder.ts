import Faculty from '#models/faculty'
import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    let user = await User.find(1)
    let user1 = await User.find(2)
    let user2 = await User.find(3)
    let user3 = await User.find(4)
    let user4 = await User.find(5)
    let faculty = await Faculty.find(1)
    let faculty2 = await Faculty.find(2)

    if (faculty && faculty2) {
      await user?.related('faculty').create(faculty)
      await user1?.related('faculty').create(faculty)
      await  user2?.related('faculty').create(faculty)
      await user3?.related('faculty').create(faculty2)
      await user4?.related('faculty').create(faculty)
    }
  }
}