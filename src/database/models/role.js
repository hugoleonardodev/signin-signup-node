module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define(
        'roles',
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
            },
            name: {
                type: Sequelize.STRING,
            },
        },
        // {
        //     sequelize,
        //     modelName: 'Role',
        // },
    )
    // Role.associate = function (models) {
    //     Role.belongsToMany(models.users, {
    //         through: 'user_roles',
    //         foreignKey: 'roleId',
    //         otherKey: 'userId',
    //     })
    // }
    return Role
}
