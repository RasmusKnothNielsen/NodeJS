
exports.up = function(knex) {
  return knex.schema
        .createTable('roles', (table) => {
            table.increments('id').notNullable();
            table.string('role').unique().notNullable();
        })
        .createTable('users', (table) => {
            table.increments('id').notNullable();     //Using increments, promotes it to primary key
            table.string('username').unique().notNullable();
            table.string('password').notNullable();
            table.integer('age');

            // Make the role_id compatible with roles.id
            // and make it a foreign key that references roles.id
            table.integer('role_id').unsigned().notNullable();
            table.foreign('role_id').references('roles.id');

            table.dateTime('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
            table.dateTime('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        })
};

exports.down = function(knex) {
  // Rollback, like undoing some changes
  return knex.schema
        .dropTableIfExists('users')
        .dropTableIfExists('roles');

};
