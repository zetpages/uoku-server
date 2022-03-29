// const sequelize = require('../db');
// const { DataTypes } = require('sequelize');
//
// const User = sequelize.define('user', {
//     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     email: { type: DataTypes.STRING, unique: true },
//     password: { type: DataTypes.STRING },
//     role: { type: DataTypes.STRING, defaultValue: "USER" }
// });
//
// const Basket = sequelize.define('basket', {
//     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
// });
//
// const BasketDevice = sequelize.define('basket_device', {
//     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
// });
//
// const Device = sequelize.define('device', {
//     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     name: { type: DataTypes.STRING, unique: true, allowNull: false },
//     price: { type: DataTypes.INTEGER, allowNull: false },
//     rating: { type: DataTypes.INTEGER, defaultValue: 0 },
//     img: { type: DataTypes.STRING, allowNull: false }
// });
//
//
// const Type = sequelize.define('type', {
//     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     name: { type: DataTypes.STRING, unique: true, allowNull: false }
// });
//
// const Brand = sequelize.define('brand', {
//     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     name: { type: DataTypes.STRING, unique: true, allowNull: false }
// });
//
// const Rating = sequelize.define('rating', {
//     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     rate: { type: DataTypes.INTEGER, allowNull: false }
// });
//
// const DeviceInfo = sequelize.define('device_info', {
//     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     title: { type: DataTypes.STRING, allowNull: false },
//     description: { type: DataTypes.STRING, allowNull: false }
// });
//
// const TypeBrand = sequelize.define('type_brand', {
//     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
// });
//
// User.hasOne(Basket);
// Basket.belongsTo(User);
//
// User.hasMany(Rating);
// Rating.belongsTo(User);
//
// Basket.hasMany(BasketDevice);
// BasketDevice.belongsTo(Basket);
//
// Type.hasMany(Device);
// Device.belongsTo(Brand);
//
// Brand.hasMany(Device);
// Device.belongsTo(Brand);
//
// Device.hasMany(Rating);
// Rating.belongsTo(Device);
//
// Device.hasMany(BasketDevice);
// BasketDevice.belongsTo(Device);
//
// Device.hasMany(DeviceInfo, { as: 'info' });
// DeviceInfo.belongsTo(Device);
//
// Type.belongsToMany(Brand, { through: TypeBrand });
// Brand.belongsToMany(Type, { through: TypeBrand });
//
// module.exports = {
//     User,
//     Basket,
//     BasketDevice,
//     Device,
//     DeviceInfo,
//     Rating,
//     Type,
//     Brand,
//     TypeBrand
// };


const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
});


const Role = sequelize.define('role', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name:{ type:  DataTypes.STRING, unique: true, allowNull: false }
});

const UserRole = sequelize.define('user_role',{
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Admin = sequelize.define('admin', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name:{ type:  DataTypes.STRING, unique: true, allowNull: false }
});

// const Gender = sequelize.define('gender', {
//     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     name:{ type:  DataTypes.STRING, unique: true, allowNull: false }
// });

const Teacher = sequelize.define('teacher', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name:{ type:  DataTypes.STRING, unique: true, allowNull: false }
});


const Student = sequelize.define('student', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name:{ type:  DataTypes.STRING, unique: true, allowNull: false }
});

const Lead = sequelize.define('student', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name:{ type:  DataTypes.STRING, unique: true, allowNull: false }
});




//     name: { type: DataTypes.STRING, unique: true, allowNull: false },
//     price: { type: DataTypes.INTEGER, allowNull: false },
//     rating: { type: DataTypes.INTEGER, defaultValue: 0 },
//     img: { type: DataTypes.STRING, allowNull: false }

User.belongsToMany(Role, {through: UserRole });
Role.belongsToMany(User, {through: UserRole});
// User.hasMany(UserRole);
// UserRole.belongsTo(User);
// Role.hasMany(UserRole);
// UserRole.belongsTo(Role);

User.hasMany(Admin)
Admin.belongsTo(User);

Role.hasMany(Admin);
Admin.belongsTo(Role);

// Gender.hasMany(Admin);
// Admin.belongsTo(Gender);
// Admin.hasMany(Gender);
// Gender.belongsTo(Admin);



module.exports = {
    User,
    Role,
    UserRole,
    Admin,
    Teacher,
    Student,
    Lead
};
