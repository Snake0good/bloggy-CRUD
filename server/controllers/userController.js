const UserModel = require("../models/userModel")


// get the page of all blogs?
const getAllBlogs = async (req, res) => {
    const allBlogs = await UserModel.find()

    if (!allBlogs || allBlogs.length === 0) {
        res.status(404).json({ message: "Sorry, the blog was not found!" })
    } else {
        res.status(302).json(allBlogs)
    }
}

// post a blog
const postBlog = async (req, res) => {
    const { name, title, text } = req.body

    try {
        const user = new UserModel({ name, title, text });
        const response = await user.save()
        res.status(201).json(response)
    } catch (err) {
        res.status(400).json({ message: "Sorry, something went wrong!" })
    }
}

// reads a blog
const readBlog = async (req, res) => {
    const {id} = req.params;

    const foundUser = await UserModel.findOne({_id: id})

    if (!foundUser || foundUser.length === 0) {
        res.status(404).json({ message: "Sorry, the blog was not found!" })
    } else {
        res.status(302).json(foundUser)
    }

}

// update a blog
const updateBlog = async (req, res) => {
    const {id, name, title, text} = req.body  
    try {
        let foundUser = await UserModel.findOneAndUpdate( {_id: id} , 
            {
            name,
            title,
            text
        })
        res.status(201).json(foundUser)
    } catch(err) {
        res.stats(400).json({ message: "there seems to have been an error" })
    }
}

// delete a blog
const deleteBlog = (req, res) => {
    const {id} = req.params;
    
    UserModel.findOneAndDelete( {_id: id} , (err, docs) => {
        if (err) {
            res.status(400).json({ message: "Looks like there was no blog to delete." })
        } else {
            res.status(200).json({ message: 'Deleted Blog: ', docs })
        }
    })

}

module.exports = {
    getAllBlogs,
    postBlog,
    readBlog,
    updateBlog,
    deleteBlog
}