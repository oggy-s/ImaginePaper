module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tb_imgp_paper', {
        writer: {
            type: DataTypes.STRING(64),
            allowNull: false,
            // primaryKey: true,
            // unique: true
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // primaryKey: true,
            // unique: true
        },
        title: {
            type: DataTypes.STRING(64)
        }, 
        hit: {
            type: DataTypes.INTEGER.UNSIGNED,
            defaultValue: 0
        },
        like: {
            type: DataTypes.INTEGER.UNSIGNED,
            defaultValue: 0
        },
        dislike: {
            type: DataTypes.INTEGER.UNSIGNED,
            defaultValue: 0
        },        
        contents: {
            type: DataTypes.TEXT
        }
    },
    {
        timestamps: true,
        paranoid: true,
        underscored: true
    })
};
