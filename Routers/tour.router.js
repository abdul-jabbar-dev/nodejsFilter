const express = require('express')
const { getTours, postTours, getATour, updateATour, getTrendingTour, getCheapestTour } = require('../Controllers/tour.controllers')
const tourRouter = express.Router()

tourRouter
.get('/', getTours)
.post('/', postTours)
.get('/trending', getTrendingTour)
.get('/cheapest', getCheapestTour)
.get('/:id', getATour)
.patch('/:id', updateATour)

module.exports = tourRouter