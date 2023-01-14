const route = require('express').Router()
const jobController = require('../controller/jobController')

route.get(`/`,jobController.getAll)
route.get(`/:id`,jobController.getSingle)

route.post(`/`,jobController.create)

route.patch(`/:id`,jobController.update)

route.delete(`/:id`,jobController.delete)

module.exports = route