const { Model } = require('objection');
const Role = require('./Role.js');

class User extends Model {
    static get tableName() {
        return 'users';
    }

    
    static relationMappings = {
        role: {
          relation: Model.BelongsToOneRelation,
          modelClass: Role,
          join: {
            from: 'users.role_id',
            to: 'roles.id'
          }
        }
      };
      
}

module.exports = User;