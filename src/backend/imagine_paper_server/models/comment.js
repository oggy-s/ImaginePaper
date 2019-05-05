module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tb_imgp_comment', {
        writer: {
            type: DataTypes.STRING(64),
            allowNull: false,
            unique: true
        },
        paper_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // primaryKey: true,
            unique: true
        }, 
        parent_id: {
            type: DataTypes.INTEGER,
        },
        anonymity: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        comments: {
            type: DataTypes.STRING(512)
        }
    },
    {
        timestamps: true,
        paranoid: true,
        underscored: true
    })
};
