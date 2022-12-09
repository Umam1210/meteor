import UserBook from '../models/UserBook.js'
import path from 'path'
import fs from 'fs'

export const getBookUsers = async (req, res) =>{
    try {
        const response = await UserBook.findAll()
        res.json(response)
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getBookUserId = async(req, res) =>{
    try {
        const response = await BookUser.findOne({
            where:{
                id : req.params.id
            }
        })
        res.json(response)
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createBookUser = (req, res) =>{
    

}

export const updateBookUser = async(req, res) =>{
}

export const deleteBookUser = async(req, res) =>{
    const book = await UserBook.findOne({
        where:{
            id: req.params.id
        }
    })
    try {
        const filePath = `./public/images/${book.image}`
        fs.unlinkSync(filePath)
        await UserBook.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({msg:'succes'})
    } catch (error) {
        console.log(error.message);
    }
    if(!book) return res.status(404).json({msg:"no data found"})
}