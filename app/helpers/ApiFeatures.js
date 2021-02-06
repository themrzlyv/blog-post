export default class Apifeaturing{
    constructor(query,queryString){
        this.query = query;
        this.queryString = queryString;
    }
    filtering(){
        if(this.queryString.category)
            this.query = this.query.find({category: this.queryString.category})

        this.query = this.query.find()
        return this
    }

    searching(){
        console.log(this.queryString)
        if(this.queryString.title)
            this.query = this.query.find({title: this.queryString.title})

        this.query = this.query.find()
        return this
    }
}
