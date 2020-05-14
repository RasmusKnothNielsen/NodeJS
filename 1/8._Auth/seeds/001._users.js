
exports.seed = function(knex) {

  return knex('roles').select().then(roles => {
    console.log(roles[0].id);

    // Inserts seed entries
    return knex('users').insert([
      {username: 'admin', password: '$2b$10$QPLR8foTJYkWVK3x2ws0tuNc3OCrUjkBmW9/R.wDVDrPzixJzx7ca', role_id: roles[0].id, email: "admin@email.com"},
      {username: 'user', password: '$2b$10$zeqXl5kf.yZfkY2N3gvaUusMysTCYt1CkdSO1yg0xqZyQfuL66YJm', role_id: roles[2].id, email: "user@email.com"},
      {username: 'anon', password: '$2b$10$FuNaKHcZD.3OdXFZacUMbeedX8T7rKkavTeMPHpwUSkqFcOcec2tO', role_id: roles[1].id,}
    ]);
  });
};
