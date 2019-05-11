module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tb_imgp_member', {
        email: {
            type: DataTypes.STRING(64),
            allowNull: false,
            unique: true
        },
        nickname: {
            type: DataTypes.STRING(64),
            allowNull: false,
            unique: true
        }, 
        social: {
            type: DataTypes.STRING(16),
            allowNull: false
        }
    },
    {
        timestamps: true,
        paranoid: true,
        underscored: true
    })
};
