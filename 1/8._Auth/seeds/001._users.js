
exports.seed = function(knex) {

  // Inserts seed entries
  return knex('users').insert([
    {username: 'admin', password: 'Hunter2', role_id: 1},
    {username: 'user', password: 'Hunter2', role_id: 2},
    {username: 'anon', password: 'Hunter2', role_id: 3}
  ]);
};
