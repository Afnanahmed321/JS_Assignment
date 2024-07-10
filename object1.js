var book=
{
    title:"My Experiments with truth",
    author:"Gandhi",
    yearpublished:1940,
    printBookdata:function()
    {
        console.log("The book titled" + this.title + "is written by" + this.author);
    }
};
console.log(book.printBookdata());