import Books from "../models/Book.js";
import path from 'path'
import fs from 'fs'

export const getBooks = async (req, res) =>{
    try {
        const response = await Books.findAll()
        res.json(response)
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getBookById = async(req, res) =>{
    try {
        const response = await Books.findOne({
            where:{
                id : req.params.id
            }
        })
        res.json(response)
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createBook = (req, res) =>{
    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    const name = req.body.title;
    const desc = req.body.desc
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

    file.mv(`./public/images/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await Books.create({title: name, image: fileName, url: url, desc: desc});
            res.status(201).json({msg: "Created Successfuly"});
        } catch (error) {
            console.log(error.message);
        }
    })


}

export const updateBook = async(req, res) =>{
    const book = await Books.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!book) return res.status(404).json({msg: "No Data Found"});
    
    let fileName = "";
    if(req.files === null){
        fileName = book.image;
    }else{
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png','.jpg','.jpeg'];

        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
        if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

        const filepath = `./public/images/${book.image}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/images/${fileName}`, (err)=>{
            if(err) return res.status(500).json({msg: err.message});
        });
    }
    const name = req.body.title;
    const desc = req.body.desc
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    
    try {
        await Product.update({name: name, image: fileName, url: url, desc: desc},{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Product Updated Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteBook = async(req, res) =>{
    const book = await Books.findOne({
        where:{
            id: req.params.id
        }
    })
    try {
        const filePath = `./public/images/${book.image}`
        fs.unlinkSync(filePath)
        await Books.destroy({
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