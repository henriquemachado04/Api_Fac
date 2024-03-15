const userService = require('../service/user.js');

async function getALLUser(req, res) {
    try{
        const rows = await userService.getALLUser();

        res.status(200).json(rows);
    }catch(error){  
        res.status(500).send ({
            messafe: "Error getting users",
            body: error.message
        })

    }
}

module.exports = {
    getALLUser,
}