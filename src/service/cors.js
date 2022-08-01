const cors = require('cors')
const corsOptions = {
    origins: '*',
    methods: [
        'POST',
        'GET'
    ],
    credentials: true, 
    optionSuccessStatus: 200,
}

module.exports = cors(corsOptions)