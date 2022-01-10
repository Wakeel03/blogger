import express from 'express';
import db_config from '../db/db_config.js'
import sql from 'mssql'

const router = express.Router();

export const getUsers = async (req, res) => {
    try {
        let pool = await sql.connect(db_config);
        let users = await pool.request().query("SELECT * from tbl_users");
        res.status(200).json({data: {
            username: users.recordset.username
        }});
    }
    catch (error) {
        console.log(error);
    }
}

export const getUser = async (req, res) => {
    try {
       let pool = await sql.connect(db_config);
       let user = await pool.request().query("SELECT * from tbl_users where username = '" + req.body.username + "'");

       if (user.recordset.length > 0) {
           if (user.recordset[0].password === req.body.password) {
               const data = user.recordset[0]
               res.status(200).json({data: {
                     username: data.username
               }});
           }
           else {
               res.status(401).json({message: "Invalid Password"});
           }
       }
       else {
              res.status(401).json({message: "Invalid Credentials"});
       }
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

// export const createPost = async (req, res) => {
//     const { title, message, selectedFile, creator, tags } = req.body;

//     const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags })

//     try {
//         await newPostMessage.save();

//         res.status(201).json(newPostMessage );
//     } catch (error) {
//         res.status(409).json({ message: error.message });
//     }
// }

// export const updatePost = async (req, res) => {
//     const { id } = req.params;
//     const { title, message, creator, selectedFile, tags } = req.body;
    
//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

//     const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

//     await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

//     res.json(updatedPost);
// }

// export const deletePost = async (req, res) => {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

//     await PostMessage.findByIdAndRemove(id);

//     res.json({ message: "Post deleted successfully." });
// }

// export const likePost = async (req, res) => {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
//     const post = await PostMessage.findById(id);

//     const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    
//     res.json(updatedPost);
// }


export default router;