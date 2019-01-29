export class Quotes {
    public showDescription:boolean;
    public showfan:boolean;
    constructor(
        public id:number,
         public name:string,
         public Author:string,
         public description:string,
         public completeDate:Date,
         public upvotes:number,
         public downvotes:number,
         ){
         
        this.showDescription=false

    }
}
