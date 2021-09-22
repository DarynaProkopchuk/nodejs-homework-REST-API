// const express = require('express')
// const router = express.Router()
// const contacts = require('../../model/index')
// router.get('/', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// router.get('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// router.post('/', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// router.delete('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// router.patch('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// module.exports = router;

const express = require('express')
// const contacts = require('../../model/index')
// const contacts = require('../../controllers')
const router = express.Router()

router.get('/', listContact) 

router.get('/:contactId', getContactById)

router.post('/', express.json(), addContact)

router.delete('/:contactId', removeContact)

router.patch('/:contactId', express.json(), updateContact)

module.exports = router;