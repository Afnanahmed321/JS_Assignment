var car=
{
    company: "Maruti suzuki",
    founder: "V.Krishnamurthy",
    carname: "maruthi 800",
    year: 1981,
    printcardata: function()
    {
        console.log("This is the car " + this.company + " founded by " + this.founder + " started " + this.carname + " in the year " + this.year);
    }
};
console.log(car.printcardata());