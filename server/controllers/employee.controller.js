const express = require('express')
const router = express.Router()
const {validateDbId, raiseRecord404Error} = require('../middleware/')

const Employee = require('../models/employee.model')
const {generateCrudMethods} = require('../services')
const employeeCrud = generateCrudMethods(Employee)


router.get('/', (req, res) => {
    employeeCrud.getAll()
        .then(data => res.send(data))
        .catch(err => console.log(err))
})

router.get('/:id', validateDbId, (req, res) => {
        employeeCrud.getById(req.params.id)
            .then(data => {
                if (data){
                res.send(data)
                }
                else
                    res.status(404).json({ error: 'no record with given _id : ' + req.params.id 
                    })
            })
            .catch(err => console.log(err))
})

router.post('/', (req, res) => {
    employeeCrud.create(req.body)
        .then(data => res.send(data))
        .catch(err => console.log(err))
})


router.put('/:id', validateDbId, (req, res)=>{
    employeeCrud.getById(req.params.id)
        .then()
        .catch()
})

router.delete('/:id', validateDbId, (req, res) => {
    employeeCrud.getById(req.params.id)
        .then(data => {
            if(data){
                res.status(201).json(data)
            }
            else
                raiseRecord404Error(req,res)
        }) 
        .catch(err => console.log(err))
})



module.exports = router