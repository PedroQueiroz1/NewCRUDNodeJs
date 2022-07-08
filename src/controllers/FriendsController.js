const Friend = require('../models/Friend.js');

const { validationResult } = require('express-validator');

const allFriends = async (req,res)=>{
    const friends = await Friend.findAll({
        raw:true
    }).catch(error=>console.log(error));
    await res.render('home.hbs',{friends});
}



const friendForm = async (req,res)=>{
    await res.render('create.hbs');
}



const saveFriend = async (req,res)=>{
    const {name, email, phone} = await req.body;
    const friend = await Friend.create({
        name:name,
        email:email,
        phone:phone
    }).catch(error=>console.log(error));

 // ----- VALIDAÇÃO -------
 //   body('name').notEmpty();
    
    const validacaoErros = validationResult(req);

    if(validacaoErros){
        console.log(validacaoErros);
        res.status(400).json({ errors: validacaoErros.array()});
        return;
    }else{
    console.log(friend)
    await res.redirect('/');
    }

// ---------------------------

}



const editFriend = async (req,res)=>{
    const {id} = await req.params;
    const friend = await Friend.findOne({
        where:{
            id:id
        },
        raw:true
    }).catch(error=>console.log(error))
    res.render('edit',{friend}) 
}



const updateFriend = async (req,res)=>{
    const {id} = req.params;
    const data = req.body;
    const selector = {where:{id:id}}
    await Friend.update(data, selector).catch(error=>console.log(error))
    res.redirect('/');
}



const viewFriend = async (req,res)=>{
    const {id} = req.params;
    const friend = await Friend.findOne({
        where:{
            id:id
        },
        raw:true
    }).catch(error=>console.log(error))
    res.render('friend',{friend});
}

const deleteFriend = async (req,res)=>{
    const {id} = req.params;
    const friend = await Friend.destroy({
        where:{
            id:id
        },
        raw:true
    }).catch(error=>console.log(error));

    res.redirect('/');
}

module.exports = {
    allFriends, friendForm, saveFriend, editFriend, updateFriend, viewFriend, deleteFriend
}