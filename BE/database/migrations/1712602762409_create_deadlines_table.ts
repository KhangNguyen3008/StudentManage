import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'deadlines'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.timestamp('closure_date')
      table.timestamp('finalclosure_date')
      table.integer('contribution_id').references('id').inTable('contributions').notNullable().unsigned().onDelete('CASCADE')
      table.string('description')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}