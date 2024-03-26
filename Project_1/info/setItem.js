// sessionStorage.bestcolor = "blue"; // the three satements create the same thing just in a different way
// sessionStorage["bestcolor"] = "blue"
// sessionStorage.setItem("bestcolor", "blue");// but this one is recommended because it setItem method is the web storage's method 

// setItem // usefull to know when you're accessing local storage 
// key()
// getItem()
// length
// removeItem()
// clear()

// setItem()
// webStorageObject.setItem(key, value);

// example 1

sessionStorage.setItem("color", "pink");

console.log(sessionStorage);

//example 2 

localStorage.setItem("color", "blue")
console.log(localStorage);

//example 3 

sessionStorage.setItem("myBio", {name: "eddie"});
console.log(sessionStorage);

// example 4


sessionStorage.setItem("myBio", JSON.stringify({name: "eddie"})); //JSON.stringify tells you what is in the object 
console.log(sessionStorage);


