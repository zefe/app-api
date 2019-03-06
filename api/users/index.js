
const express = require("express")
const usersRouter = express.Router()
const getUsers = require('./getList')
const createUser = require('./create')
const findOneUser = require('./find-one')

usersRouter.get('/', getUsers)
usersRouter.post('/', createUser)
usersRouter.get('/:userId', findOneUser)


module.exports = usersRouter;