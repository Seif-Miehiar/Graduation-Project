const { db, Sequelize } = require('./seq.js');


const User = db.define('user', {
    id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
    username: {type: Sequelize.STRING, required: true, unique: true},
    password: {type: Sequelize.STRING, required: true},
    userEmail: {type: Sequelize.STRING, required: true},
    phonenumber: {type:Sequelize.INTEGER, required:true}
});

const Address = db.define('address', {
    id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
    area:{type:Sequelize.STRING, required:true},
    streetName:{type:Sequelize.STRING, required:true},
    buildingNumber:{type:Sequelize.INTEGER, required:true},
    phoneNumber:{type:Sequelize.INTEGER, required:true}
    // location: {type: Sequelize.STRING, required: true},
    // distance: {type: Sequelize.INTEGER, required: false}
})

const Products = db.define("products", {
    id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
    role:{type: Sequelize.STRING, required:true},
    name:{type:Sequelize.STRING, required:true},
    price:{type:Sequelize.INTEGER, required:true},
    image:{type:Sequelize.STRING, required:true},
    description:{type: Sequelize.STRING, required:true}

})

const Carts = db.define("cart", {
    itemId: {type: Sequelize.BIGINT, autoIncrement: true, primaryKey: true},
    itemName: {type: Sequelize.STRING},
    itemImage: {type: Sequelize.STRING },
    quantity: {type: Sequelize.INTEGER},
    itemDescription: {type:Sequelize.STRING},
    price: {type : Sequelize.INTEGER},
    availableQuantity : { type: Sequelize.INTEGER}
})

Address.belongsTo(User); //Add userId foreign key to Place
// User.hasMany(Place); //Add userId foreign key to Place


module.exports.Address = Address;
module.exports.User = User;
module.exports.Products = Products
module.exports.Carts = Carts;
