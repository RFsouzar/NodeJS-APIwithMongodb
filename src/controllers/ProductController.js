const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req,res){
        //busca os registros
        //usa o mongoose-paginate para fazer a paginação e dentro das chaves poderiam ficar as clausulas Where 
        const {page = 1} = req.query;
        const products = await Product.paginate({}, {page, limit:10});
        return res.json(products);
    },
    async show(req, res){
        //busca por id de registros
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },
    async store(req, res){
        //criação de novos registros
        const product = await Product.create(req.body);
        return res.json(product);
    },

    async update(req, res){
        //com o {new: true} pegamos o valor atualizado da requisição e inserimos em product
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(product);
    },
    async destroy(req, res){
         await Product.findByIdAndRemove(req.params.id);
         return res.send();
    }
}
