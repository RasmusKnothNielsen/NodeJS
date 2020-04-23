
exports.up = function(knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments('id');     //Using increments, promotes it to primary key
    table.string('username').unique().notNullable();
    table.string('password').notNullable();
    table.integer('age');
    table.timestamp('updated_at');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    
  })
};

exports.down = function(knex) {
  // Rollback, like undoing some changes

};
