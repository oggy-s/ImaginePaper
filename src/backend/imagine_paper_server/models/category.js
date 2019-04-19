module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tb_imgp_category', {
        // key: {
        //     type: DataTypes.STRING(32),
        //     allowNull: false,
        //     unique: true
        // },
        name: {
            type: DataTypes.STRING(64),
            allowNull: false
        }
    },
    {
        timestamps: true,
        paranoid: true,
        underscored: true
    })
};
