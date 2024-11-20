class Book{
    title;
    author;
    ISBN;
    constuctor(title,author,ISBN){
        this.title=title;
       this. author=author;
       this. ISBN=ISBN;
    }
    checkOut(){
        console.log(this.title ,"is chceked ");
    }
    returnBook(){
        console.log("the retired book author is",this.author);
    }
    updateTitle(newTitle){
        console.log("title is updated as",newTitle)
    }
}
var b1=new Book ("Vampire","Danniel","2120");
b1.checkOut();
b1.returnBook();
b1.updateTitle("Vampire Diaries");
console.log(b1);

// Question 2
 class Product{
    name;
    price;
    category;
    constructor(name,price,category){
        this.name=name;
        this.price=price;
        this.category=category;
    }
    discount(amount){
      console.log("discount amount is",amount );
    }
    getPriceafterDiscount(){
        console.log("price after discount is",this.price-200);
    }
 }
 var p1=new Product("Fastrack","1000","watch")
p1.discount("200");
p1.getPriceafterDiscount();
console.log(p1);

// Question 3
class BankAccount{
    accountHolderName;
    accountNumber;
    balance;
    constructor(accountHolderName,accountNumber,balance)
    {
         this.accountHolderName=accountHolderName;
         this.accountNumber=accountNumber;
         this.balance=balance;
    }
    deposit(amount)
    {
        console.log(amount ,"is deposited to",this.accountNumber);
        this.balance  = this.balance + amount;
        console.log("after deposit the total balance is ", this.balance);
    }
    withdraw(amount)
    {
        console.log(amount ,"is withdraw from ",this.accountNumber);
        this.balance = this.balance - amount;
        console.log("after withdraw total balance is ",this.balance);
    }
    getBalance()
    {
        console.log("total balance is",this.balance);
    }
  }
  var acc1=new BankAccount("kaveri","UNIB1234","2000");
  acc1.deposit(1000);
  acc1.withdraw(500);
  acc1.getBalance();
  console.log(acc1);

// Question 4
class Vehicle{
    model;
    licencePlate;
    mileage;
    constructor(model,licencePlate,mileage){
    this.model=model;
    this.licencePlate=licencePlate;
    this.mileage=mileage;
    }
    drive(miles){
        this.mileage=miles + this.mileage;
        console.log("milage after increasing",this.mileage);
    }
    getMilage(){
        console.log(this.mileage);
    }
}
var v1=new Vehicle("RX100","TS1234","35");
v1.drive("20");
v1.getMilage();
v1.mileage;

// Question 5
class Student{
    studentName;
    grade;
    constuctor(studentName,grade){
        this.studentName=studentName;
        this.grade=grade;
    }
    setGrade(newGrade){
        this.grade=newGrade;
        console.log("new grade after updating is",newGrade);
    }
    getGrade(){
        console.log(" current grade is",this.grade);
    }
}
var s1=new Student("Nithya","B+");
s1.setGrade("A")
s1.getGrade();
console.log(s1);

