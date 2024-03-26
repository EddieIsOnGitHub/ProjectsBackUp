// webStorageObject.removeItem(key);

// Store carColor: "Pink" inside the browser's session storage object:
sessionStorage.setItem("carColor", "Pink");

// Store pcColor: "Yellow" inside the session storage object:
sessionStorage.setItem("pcColor", "Yellow");

// Store laptopColor: "White" inside the session storage object:
sessionStorage.setItem("laptopColor", "White");

// Remove the pcColor item from the session storage:
sessionStorage.removeItem("pcColor");

// Confirm whether the pcColor item still exists in the session storage:
sessionStorage.getItem("pcColor");
console.log(sessionStorage)

// example 2

// Store carColor: "Pink" inside the browser's local storage object:
localStorage.setItem("carColor", "Pink");

// Store pcColor: "Yellow" inside the local storage object:
localStorage.setItem("pcColor", "Yellow");

// Store laptopColor: "White" inside the local storage object:
localStorage.setItem("laptopColor", "White");

// Remove the pcColor item from the local storage:
localStorage.removeItem("pcColor");

// Confirm whether the pcColor item still exists in the local storage:
localStorage.getItem("pcColor");
console.log(localStorage)