import { BaseSchema } from '@adonisjs/lucid/schema';


export default class extends BaseSchema {
  protected tableName = 'contributions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.integer('faculty_id').references('id').inTable('faculties').notNullable().unsigned().onDelete('CASCADE')
      table.string('description')
      table.integer('academicyear_id').references('id').inTable('academicyears').notNullable().unsigned().onDelete('CASCADE')
      table.integer('status_id').references('id').inTable('statuses').notNullable().unsigned().onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}