const transactionModel = require('../models/transactionModel');

const defaultController = async (req, res) => {

    const transactions = await transactionModel.find({});
    res.render('index.ejs', { transactions });
}

const addController = async (req, res) => {

    const transactions = new transactionModel({
        type: req.body.type,
        category: req.body.category,
        amount: req.body.amount,
        description: req.body.description,
        date: req.body.date
    })
    await transactions.save();
    console.log(transactions);
    res.redirect('/');
}

const editController = async (req, res) => {
    const { id } = req.params;

    const editTransaction = await transactionModel.findOne({ _id: id });
    console.log(editTransaction);
    res.render('edit.ejs', { transactions: editTransaction });
}

const updateController = async (req, res) => {
    const { id } = req.params;

    const updateTransaction = await transactionModel.findOneAndUpdate({ _id: id }, { type, category, amount, description, date } = req.body, { new: true });

    res.redirect('/');
}

const deleteController = async (req, res) => {
    const { id } = req.params;

    const deleteTransaction = await transactionModel.findOneAndDelete({ _id: id });

    res.redirect('/');
}

module.exports = { defaultController, addController, editController, updateController, deleteController };