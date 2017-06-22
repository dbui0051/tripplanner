const router = require('express').Router()
var Hotel = require('../models').Hotel;
var Restaurant = require('../models').Restaurant;
var Activity = require('../models').Activity;
module.exports = router

router.get('/', (req, res, next) => {
	const outerScopeContainer = {};
	Hotel.findAll({})
	.then(foundHotels => {
		outerScopeContainer.hotels = foundHotels;
		return Restaurant.findAll({})
	})
	.then(foundRestaurants => {
		outerScopeContainer.restaurants = foundRestaurants
		return Activity.findAll({})
	})
	.then(foundActivities => {
		outerScopeContainer.activities = foundActivities
		res.render('index', {
			hotels: outerScopeContainer.hotels,
			restaurants: outerScopeContainer.restaurants,
			activities: outerScopeContainer.activities
		})
	})
	.catch(next)

})
