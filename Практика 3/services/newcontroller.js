class NewController{
    constructor(){
        this.a = 'при'
    }

    async showpage(req, res){
        res.send('Напишите свой анекдот!')
    }
}

module.exports = NewController;