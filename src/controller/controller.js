const upload = async (req, res) =>{
    try{
        console.log(req.file)
        return res.send("Image uploaded successfully!")
    }catch(error){
        console.error(error.message)
        return res.status(500).send(error.message)
    }
}

const fetch = async (req, res) =>{
    try{
        return res.send("Images!")
    }catch(error){
        console.error(error.message)
        return res.status(500).send(error.message)
    }
}

module.exports = {
    upload,
    fetch
}