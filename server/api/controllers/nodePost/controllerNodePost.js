import pug from 'pug';
import mongoose from 'mongoose';
import nodePostSchema from '../../../../models/nodePost.model';
const nodePost = mongoose.model('nodePost', nodePostSchema);

export class ControllerNodePost {
    
    remove(req, res) {
        const id = req.params.id
        console.log('id', id);
        nodePost.remove({'id':id },(err) => {
            if (err) console.log('err',err)
        });
        res.json({success:true});
    }

    all(req, res) {
        nodePost.find({},null,{sort:{date:-1}}, (error,docs) => {
            res.render('index',{ title: 'Node Post', message: 'Welcome!', 'posts': docs})
        })
    }
    
    byId(req, res) {
        const id = req.params.id
        nodePost.find({'id': id}, (error,doc) => {
            res.json({succes: true, data: doc})
        })
    }

  }
  export default new ControllerNodePost();