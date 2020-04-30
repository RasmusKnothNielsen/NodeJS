
exports.seed = function(knex) {

  return knex('roles').select().then(roles => {
    console.log(roles[0].id);

    // Inserts seed entries
    return knex('users').insert([
      {username: 'admin', password: 'Hunter2', role_id: roles[0].id},
      {username: 'user', password: 'Hunter2', role_id: roles[2].id},
      {username: 'anon', password: 'Hunter2', role_id: roles[1].id}
    ]);
  });
};
