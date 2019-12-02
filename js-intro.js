// // ASSESSMENT 1: INTRO TO JAVASCRIPT
// // Coding practical questions

// // --------------------------- Consider the following variable:

var mantra = "Be the dev"
var lowMantra = mantra.toLowerCase();

// // 1a. Write the code that determines if there is a 'B' in mantra.
        
        if (lowMantra.includes("b")){
            console.log("true")
        } else {
            console.log("false")
        }
        
        
// // 1b. Write the code that determines if there is an 'x' in mantra.

    if(lowMantra.includes("x")){
        console.log("true")
    } else {
        console.log("false")
    }

// // 1c. Write the code that determines if there is a 'v' in mantra.

    if(lowMantra.includes("v")){
        console.log("true")
    } else {
        console.log("false")
    }

// // 1d. STRETCH: Write a function that can take two arguments - a string and a letter and returns a sentence telling the user if the letter exists within the string.

    if(lowMantra.includes("b")){
        console.log("There is a B in this sentence")
    } else {
        console.log("There is no B in this sentence")
    }

// // ------------------------------ Consider the following variables:

var myDog = "Snoopy"
var myCat = "Garfield"

// // 2a. Create a function that returns the longer of the two variables. Expected output: "Garfield"
    
    var combine = myDog + " " + myCat;
    console.log(combine)
    
    function findLongest(str) {
        const stringArray = str.split(" ");
        const longestWord = stringArray.reduce((a,b) =>{
            if(b.length > a.length){
                return b;
            } else {
                return a;
            }
        });
        return longestWord;
    }
    
    console.log(findLongest(combine))
    



// // 2b. Create a function that takes in two arguments and returns an array containing the two variables. Expected output: ["Snoopy", "Garfield"]

var arrayCombine = combine.split(" ");
console.log(arrayCombine)

// // 2c. STRETCH: Write a function that accepts two variables and returns a string in all lowercase letters. Expected output: "snoopy garfield"

var lowerCombine = combine.toLocaleLowerCase();
console.log(lowerCombine);


// // ------------------------------ Consider the following variable:

var myMessage = "Learning is fun!"

// // 3a. Write the code that logs each letter of the message using a for loop.
// //hint: "logs" in this case means "prints to the terminal console."  This is typically done with a console.log(x), where x is the string, function, etc that you wish to see in the terminal.

var myArray = myMessage.split("");

for (let index = 0 ; index < myArray.length; index ++)
console.log(myArray[index])

// // 3b. Write the code that logs each letter of the message using map.

    const mapMap = (array) =>{
        return array.map((value, index) => {
            return value
        })
    }
console.log(mapMap(myArray));

// // 3c. STRETCH: Write the code that logs each letter of the message using a while loop.

    var i = 0;
    var text = "";
    
    while (myArray[i]) {
        text += myArray[i];
    }
    console.log([i])

// // 3d. SUPER STRETCH: Write the code that logs each letter of the message using forEach().




// // ---------------------------- Consider the following variable:

var testString = "thisisateststring"

// // 4a. Write a function that takes the variable as an argument and returns the string without vowels. Expected output: "thsstststrng"

const noVowels = (string) => {
    return string.split("").filter(value => {
        return value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u"
    }) .join("")
}
console.log(noVowels(testString));


// // 4b. STRETCH: Update your function to return an error message if the variable is not a string. Copy and paste your function to add these changes.

if (typeof testString !== "string"){
    console.log("error")
} else {
    console.log("okay, no error")
}




// // ------------------------------- Consider the following variable:

var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

// // 5a. Write a function that takes in the toonimals array as an argument and returns an array with only the toon objects that are cats. Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

const onlyCats = (array) => {
    return array.filter((value) => {
        if (value.animal === "cat"){
            console.log(value.name)
        }
    })
}
onlyCats(toonimals);

// //5b. Write a function that returns only the names of all the non-cats. Expected output: "Itchy" "Daffy" "Ren"

const notCats = (array) => {
    return array.filter((value) => {
        if (value.animal !== "cat"){
            console.log(value.name)
        }
    })
}
notCats(toonimals);


// //5c. STRETCH: Create a function that will print a sentence for every toon stating their name and their animal type. Use string interpolation. Expected output: "Itchy is a mouse" "Stimpy is a cat" "Daffy is a duck" "Scratchy is a cat" "Ren is a dog" "Felix is a cat"

const describeAnimal = (array) => {
    let describe = array.split("")
    var {name, animal} = describe 
    return `${name} is a ${animal}`
}
console.log(describeAnimal(toonimals));