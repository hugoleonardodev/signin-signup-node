module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define(
        'users',
        {
            username: {
                type: Sequelize.STRING,
            },
            email: {
                type: Sequelize.STRING,
            },
            password: {
                type: Sequelize.STRING,
            },
        },
        // {
        //     sequelize,
        //     modelName: 'User',
        // },
    )
    // User.associate = function (models) {
    //     User.belongsToMany(models.roles, {
    //         through: 'user_roles',
    //         foreignKey: 'userId',
    //         otherKey: 'roleId',
    //     })
    // }
    return User
}
