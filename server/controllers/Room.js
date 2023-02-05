const Room = require("../models/Room.js")


const createRoom = async(req,res) => {
    const name = req.body.groupName
    try{
        const newRoom = await Room.create({name})
        res.status(201).json(newRoom)

    }catch (error){
        res.status(500).json({err: error})
    }
};

module.exports = {createRoom};