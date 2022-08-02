const cors = require('cors')
const corsOptions: Object = {
    origins: '*',
    methods: [
        'POST',
        'GET'
    ],
    credentials: true, 
    optionSuccessStatus: 200,
}

export default cors(corsOptions)