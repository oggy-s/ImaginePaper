module.exports = (sequelize, DataTypes) => {
    return sequelize.define('comment', {
        writer: {
            type: DataTypes.STRING(64),
            allowNull: false,
            unique: true
        },
        paper_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
        paranoid: true 
    })
};
