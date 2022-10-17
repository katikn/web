class BlogController{
    constructor() {
        this.blogs = [{
            title: "1 blog",
            text: "oh my god it's my first blog",
            date: "11.10.2022",
            name: "ktiknn"
        },
        {
            title: "minecraft",
            text: "minecraft 1.30 version",
            date: "01.01.2077",
            name: "minecrafter"
        },
        {
            title: "xz kaif",
            text: "xz kaif text!!!!!!!!!",
            date: "29.02.2016",
            name: "kaifer"
        }
    ]
    }
    async allblogs(req, res){
        let a = {main: this.blogs}
        console.log(a['main']);
        res.render('index.njk', {main: this.blogs})
    }

    async getblog(req, res){
        res.render('blogs.njk', this.blogs[req.params['id'] - 1])
    }

}

module.exports = BlogController;