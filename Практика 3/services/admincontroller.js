class AdminController{
    constructor(){
        this.a = 'при'
    }

    async showpage(req, res){
        res.send('Проверьте и отправьте на сайт анекдоты!')
    }
}

module.exports = AdminController;