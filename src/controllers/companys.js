const companyModels = require('../models/companys')
const uuid = require('uuid/v4')

module.exports = {  
    getCompany: function(req,res){
        companyModels.getCompany()
        .then(result=>{
            res.json(result)
        })
        .catch(err=>{
            console.log(err)
        })
    },
    addCompany: function(req,res){
        const id = uuid()
        const {name,logo,location,description} = req.body
        const data = {
            id,
            name,
            logo,
            location,
            description
        }
        companyModels.addCompany(data)
        .then(result => {
            res.json(result)
          })
          .catch(err => {
            console.log(err)
          })
    }
   
}