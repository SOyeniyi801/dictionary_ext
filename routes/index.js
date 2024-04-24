const { error } = require("console");
// const url = require('url')
const express = require("express");
const router = express.Router();
const needle = require('needle')

// Env variables
const API_BASE_URL = process.env.API_BASE_URL
const API_KEY_NAME = process.env.API_KEY_NAME
const API_KEY_VALUE = process.env.API_KEY_VALUE
const API_KEY_HOST_NAME = process.env.API_KEY_HOST_NAME
const API_KEY_HOST_VALUE = process.env.API_KEY_HOST_VALUE

router.get("/:word", async (req, res) => {
    try{
        
        const word = req.params.word;
        const options = {
            headers: {
                [API_KEY_NAME]: API_KEY_VALUE,
                [API_KEY_HOST_NAME]: API_KEY_HOST_VALUE
            }
        }

        const apiRes = await needle('get', `${API_BASE_URL}/${word}`, options)
        const data =  apiRes.body
        res.status(200).json(data)
    } catch {
        res.status(500).json({error: error.message})
    }
  

 
});

module.exports = router;
