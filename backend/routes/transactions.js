
const {addIncome, getIncome, deleteIncome} =require('../controllers/income');
const {addExpense, getExpense, deleteExpense} =require('../controllers/expense');

const router=require('express').Router()

 
router.post('/add-income', addIncome)
        .get('/get-income', getIncome)
//   /:id - thats how we take params
        .delete('/delete-income/:id', deleteIncome)
        .post('/add-expense', addExpense)
        .get('/get-expense', getExpense)
        .delete('/delete-expense/:id', deleteExpense)
module.exports=router