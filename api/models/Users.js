/**
 * Articles.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

 
     username:{
       type:'string',
     },
     password:{
       type:'string',
     }, 
    
     name: {
      type:'string',
    }, 
    email: {
      type:'string',
    }, 
     address:{
      type:'string',
    }
  

  },

  datastore:'mongodb'

};

