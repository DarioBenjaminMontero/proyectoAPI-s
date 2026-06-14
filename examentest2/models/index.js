const { User } = require('./userModel');
const { Hobby } = require('./hobbyModel');

// Relación muchos a muchos
User.belongsToMany(Hobby, { through: 'UserHobbies', foreignKey: 'userId' });
Hobby.belongsToMany(User, { through: 'UserHobbies', foreignKey: 'hobbyId' });

module.exports = {
    User,
    Hobby
};