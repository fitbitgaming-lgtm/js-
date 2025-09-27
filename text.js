console.log("aryan")
const x = 10
console.log(x)
// primitive data type they  are generaally call by value 
// 7 types string ,number , boolean , null, undefined ,symbol ,big int 
 // java script is dynamicly typed language 


// refrence type (non primitive ) memoey mai inke refrence directly allocate kia ja skata ha 
// array, objects ,functions ,


const score = 100
const isloggedin = false
let useremail ;
const id = Symbol("123")
const antid = Symbol ("123")
console.log(id===antid)


// u can use type of to knoww the type of datatype 
    

// java script lecture 10 


// stack memory and heap memory
// jitne bhi primitive type ha wha pr stack memory use hoti  hai 
 // auee jitninbbhi non primitive typ eh  wha pr humari hesp memory useb hoti ha 



// stack --> copy // chagens applies in copy 
// heap--> refrence // refrence milta hai 



// lecture 11 strings 

// string interpolation technique ( important)

 const name = "aryan"
const repocount = 90

console.log(`hello my name is ${name} and my repo count is ${repocount}`);
 

//  lecture 12 numbers and math 

// maths 
// math.random ki value humesa 0 aur 1 ke bich mai hi aygi ..

const min  = 10
const max = 20
 
console.log (Math.floor(Math.random()*(max-min+1))+min)


 

 



