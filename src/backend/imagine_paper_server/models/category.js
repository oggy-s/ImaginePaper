module.exports = (sequelize, DataTypes) => {
    return sequelize.define('category', {
        name: {
            type: DataTypes.STRING(32),
            allowNull: false
        }
    },
    {
        timestamps: true,
        paranoid: true 
    })
};
