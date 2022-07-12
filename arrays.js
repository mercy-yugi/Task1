// let b=["Mango","Apple"];
// b.push("orange")//end of array
// b.unshift("Pineapple");//start of array
// b.pop()//deletes last element.
// b.shift()//removes first element.
// let c=new Array("Banana","KIwi");
// console.log(b)
// console.log(c)
//mapping
// let d=c.map(item=>`i love ${item}`);
// let e=c.map(function(item))
// console.log(d)

// function people(){
//     return "You guys";
// }

// function students(a,callback){
// console.log(a);
// console.log(callback);
// }
// students(25,people())

// splice
// let c=new Array("Mercy","YUgi","Achieng","Kirigo","zuena")
// console.log(c.splice(1,1))
// console.log(c.splice(1,2))
// console.log(c.splice(0,1))

// // OBJECTS.
// var people={
//     name:"Mercy YUgi",
//     country:"Kenya",
//     age:23
// };
// console.log(people['age'])
// console.log(people['country'])
// console.log(people.name)

// // creating object using akeyword.
// var person=new Object(people);
// console.log(person.name);
// person['age']=35;
// person['name']="consolate";
// person['country']="Uganda";
// console.log(person)

// // for (key in Object.entries(person)){
// // console.log(key,values)
// // }
// //freeze
// Object.freeze(person)
// person['school']="Akirachix";
// //seal
// Object.seal(person);
// console.log(person)

// // delete
// delete(person.age);
// console.log(person);

// // methods-properties whose value sare functions
// var student={
//     name:"Anita",
//     country:"Kenya",
//     hobby:function(){
//         console.log(`My name is ${this.name} and my hobby is cooking`);
//         return'I love swimming';
//     },
//     friends:{
//         name:"Joy",
//         age:20,
//         hobby:{
//             first:"Dancing",
//             play:function(){
//                 return "I love playing"
//             }

//         }
//     }
// }
// console.log(student.country);
// console.log(student.hobby());
// console.log(student.friends.name);
// console.log(student.friends.hobby);

// CLASSES.
// constructor helps in creating the objects.
// class Students{
//     constructor(name,age,school){
//         this.name=name
//         this.age=age
//         this.school=school
//         this.hobby=function (){
//             return "I love A kirachix"
//         }
//     }
// }
// Students.prototype.country=function(){
//     return "I love my country Kenya"
// }
// var firstStudent=new Students("Mercy",30,"Akirachix");
// console.log(firstStudent);
// console.log(firstStudent.age);
// console.log(firstStudent.country())

// function constuctors.
// function Students(name,age,school){
//     this.name=name
//     this.age=age
//     this.school=school
//     this.hobby=function (){
//         return "I love A kirachix"
//          }
// }
// var secondStudent=Students("Mercy",20,"Kabianga");
// console.log(secondStudent)

// var names=["chiri","Shamim","Zippora"]
// var [Consolate, ...others]=names
// console.log(Consolate);
// console.log(others);

// var names=["chiri","Shamim","Zippora"]
// var [Consolate,susan,nancy]=["chiri","Shamim","Zippora"]
// console.log(Consolate);
// console.log(susan);
// console.log(nancy)