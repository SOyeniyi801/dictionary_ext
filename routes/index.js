const { error } = require("console");
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
        res.status(404).json({error: "No matching word was found"})
    }
  });

  router.get("/:word/synonyms", async(req, res) => {
    try {
        const word = req.params.word;
        const options ={ 
            headers: {
                [API_KEY_NAME]: API_KEY_VALUE,
                [API_KEY_HOST_NAME]: API_KEY_HOST_VALUE
            }
        }
        const apiRes = await needle('get', `${API_BASE_URL}/${word}/synonyms`, options)
    const data =  apiRes.body
    res.status(200).json(data)
    }catch {
        res.status(404).json({error: "No matching word was found"})
    }
})

router.get("/:word/antonyms", async(req, res) => {
    try {
        const word = req.params.word;
        const options ={ 
            headers: {
                [API_KEY_NAME]: API_KEY_VALUE,
                [API_KEY_HOST_NAME]: API_KEY_HOST_VALUE
            }
        }
        const apiRes = await needle('get', `${API_BASE_URL}/${word}/antonyms`, options)
    const data =  apiRes.body
    res.status(200).json(data)
    }catch {
        res.status(404).json({error: "No matching word was found"})
    }
})

module.exports = router;
