const express = require('express')
const router = express.Router()
const {getAllHistory} = require('../../controllers/v1/history/HistoryController')


router.get('/', getAllHistory);
// TO-DO // add endpoint for posting new histiry for a patient
module.exports = router;