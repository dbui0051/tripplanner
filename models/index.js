const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost/tripplanner', {
  logging: false
});

module.exports = db

const Place = db.define('place',  {
  address: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  },
  location: {
    type: Sequelize.ARRAY(sequelize.FLOAT)
  },
})

const Hotel = db.define ('hotel', {
  name: {
    type: Sequelize.STRING
  },
  num_stars: {
    type: Sequelize.FLOAT
  },
  amenities: {
    type: Sequelize.STRING
  }
});

const Activity = db.define('activity', {
  name: {
    type: Sequelize.STRING
  },
  age_range: {
    type: Sequelize.STRING
  },
});

const Restaurant = db.define('restaurant', {
  name: {

  },
  cuisine: {

  },
  price: {

  }
});

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);


module.exports = {
  Place,
  Hotel,
  Activity,
  Restaurant
}
