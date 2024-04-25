const express = require('express')
const cors = require('cors')
require('dotenv').config()

const PORT = process.env.PORT || 3000

const app = express()

// Set Static folder
app.use(express.static('public'))

// Root route handler
app.get('/', (req, res) => {
    res.send('Hello, this is the root route!');
  });

// Routes
app.use('/api', require('./routes'))

// Enable Cors
app.use(cors())

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))