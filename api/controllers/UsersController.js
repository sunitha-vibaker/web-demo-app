/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    list: (req,res) =>{
        Users.find().exec((err,users)=>{
            if(err){
                res.send(500,{err:err});
            }
           // res.send(users);
            res.view("users/users",{users:users});
        });
       
    },
    
    add: (req,res) =>{
        console.log(req.body);
        const username = req.body.username;
        const password = req.body.password;
        const name = req.body.name;
        const temp_id = req.body.temp_id;
        const email = req.body.email;
        const address = req.body.address;

        Users.create({username:username,password:password,name:name,email:email,address:address,temp_id:temp_id}).exec((err) => {
            if(err){
                res.send(500,{err:err});
            }

            res.redirect('/users/list');
        });

    },
    edit: (req,res) => {
        Users.findOne({_id: req.params.id}).exec(function(err, user){
            if(err){
                res.send(500,{err:err});
            }

            res.view('users/edit',{user:user});
        })
    },
    /*details: (req,res) => {
        Users.findOne({_id: req.params.id}).exec(function(err, user){
            if(err){
                res.send(500,{err:err});
            }
            console.log(user);
            res.send(user)
           // res.view('users/details',{user:user});
        })
    },*/
    details: (req,res) => {

        console.log(req.params);
        Users.findOne({username: req.params.id}).exec(function(err, user){
            if(err){
                res.send(500,{err:err});
            }
            console.log(user);
            res.send(user)
           // res.view('users/details',{user:user});
        })
    },
    delete: (req,res) => {
        Users.destroy({id: req.params.id}).exec(function(err){
            if(err){
                res.send(500, {err:err});
            }

            res.redirect('/users/list');
        })
    },
    update: (req,res) =>{
        const username = req.body.username;
        const password = req.body.password;
        const name = req.body.name;
        const email = req.body.email;
        const address = req.body.address;

        Users.update({id:req.params.id},{username:username,password:password,name:name,email:email,address:address}).exec((err, article) => {
            if(err){
                res.send(500,{err:err});
            }

            res.redirect('/users/list');
        });

    }
};

