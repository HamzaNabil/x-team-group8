# JavaScript Part 11

# OOP

- What is OOP : group every releated variables and funcs into unit

- Procedure programming

- Creating Objects

- Factory Function

- Function Constructor

- Concepts:

# Encapsulation: The process of wrapping property and function within a single unit is known as encapsulation.

function person(){
this.name = name;
this.id = id;
this.add_Address = function(add){
this.add = add;
}
this.getDetails = function(){
console.log(`Name is ${this.name},Address is: ${this.add}`);
}
}

# Abstraction: which means representing essential features hiding the background detail

function person(fname,lname){
let firstname = fname;
let lastname = lname;

    let getDetails_noaccess = function(){
        return (`First name is: ${firstname} Last
            name is: ${lastname}`);
    }

    this.getDetails_access = function(){
        return (`First name is: ${firstname}, Last
            name is: ${lastname}`);
    }

}

# Inheritance :

class person{
constructor(name){
this.name = name;
}
}
class student extends person{
constructor(name,id){
super(name);
this.id = id;
}
}
