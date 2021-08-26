const express = require('express')
const router = express.Router()
const contacts = require('../model/contacts.json')
router.get('/', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.get('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.post('/', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.patch('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router;
// const express = require('express')

// const { contacts: ctrl } = require('../../controllers')
// const router = express.Router()

// router.get('/', ctrl.listContact)

// router.get('/:contactId', ctrl.getContactById)

// router.post('/', express.json(), ctrl.addContact)

// router.delete('/:contactId', ctrl.removeContact)

// router.patch('/:contactId', express.json(), ctrl.updateContact)

// module.exports = router;