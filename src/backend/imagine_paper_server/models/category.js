module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tb_imgp_category', {
        name: {
            type: DataTypes.STRING(32),
            allowNull: false
        }
    },
    {
        timestamps: true,
        paranoid: true,
        underscored: true
    })
};

