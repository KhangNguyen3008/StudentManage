import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'submissions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title')
      table.string('content')
      table.integer('user_id').references('id').inTable('users').notNullable().unsigned().onDelete('CASCADE')
      table.integer('deadline_id').references('id').inTable('deadlines').notNullable().unsigned().onDelete('CASCADE')
      table.integer('status_id').references('id').inTable('statuses').notNullable().unsigned().onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}