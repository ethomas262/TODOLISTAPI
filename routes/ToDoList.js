const express = require('express')

const router = express.Router()
const item = require('../models/Item')

//Getting all
router.get('/', async (req, res) => {
    try{
        const items = await item.find()
        res.json(items)

    } catch(error){
        res.status(500).json({message: error.message})

    }

})
//Getting One
router.get('/:id',  getItem, (req, res) => {
    res.send(res.item.name)

})
//Creating one
router.post('/', async (req, res) => {
    const item = new item({
        name: req.body.name,
        time : req.date
    })
    try{
        const newItem = await item.save()
        res.status(201).json(newItem)

    } catch(error){
        res.status(400).json({message: error.message})
    }
})
//Updating One
router.patch('/', (req, res) => {

})
//Deleting One
router.delete('/:id', (req,res) => {

})
async function getItem(req, res, next){
    try{
        Item = await item.findById(req.params.id)
        if (item == null){
            return res.status(404).json({message: "Cannot find task"})
        }

    } catch(err){
        return res.status(500).json({message: err.message})

    }
}

module.exports = router