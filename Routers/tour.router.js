const express = require('express')
const { getTours, postTours, getATour, updateATour, getTrendingTour, getCheapestTour } = require('../Controllers/tour.controllers')
const tourRouter = express.Router()

tourRouter.get('/', getTours)
tourRouter.post('/', postTours)
tourRouter.get('/trending', getTrendingTour)
tourRouter.get('/cheapest', getCheapestTour)

tourRouter.get('/:id', getATour)
tourRouter.patch('/:id', updateATour)

module.exports = tourRouter