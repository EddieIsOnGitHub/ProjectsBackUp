// // Define three functions
// function firstTask() {
//     console.log("Task 1");
//   }
  
//   function secondTask() {
//     console.log("Task 2");
//   }
  
//   function thirdTask() {
//   console.log("Task 3");  
//   }
  
//   // Execute the functions
//   thirdTask();
//   firstTask();
//   secondTask();



// function someLongRunningFunction() {
//     let start = Date.now();
//     while (Date.now() - start < 5000) {
//         // do nothing
//     }
//     return "Hello";
// }

// console.log('Starting...');

// let result = someLongRunningFunction();
// console.log(result);

// console.log('...Finishing');




// console.log("Start of script");

// setTimeout(function() {
//   console.log("First timeout completed");
// }, 2000);

// console.log("End of script");



// // Declare function
// function fetchData(callback) {
//     setTimeout(() => {
//       const data = {name: "John", age: 30};
//       const data2 = {name: "eddie", age: 90};
//       callback(data, data2);
//     }, 3000);
//   }
  
//   // Execute function with a callback
//   fetchData(function(data,data2 ) {
//     console.log(data,data2);
//   });
  
//   console.log("Data is being fetched...");
  

//   // Initialize a promise
// const myPromise = new Promise(function(resolve, reject) => {});
// console.log(myPromise);

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Hello from the promise!");
//     }, 2000);
// });
// // console.log(myPromise)

//  myPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     //code here will be executed regardless of the status
//     //of a promise (fulfilled or rejected)
//   });

// console.log(myPromise)



// fetch('https://example.com/data')
//     .then(response => response.json())
//     .then(data => processData(data))
//     .then(processedData => {
//         // do something with the processed data
//     })
//     .catch(error => console.log(error))


// fetch("https://api.github.com/users/octocat")
//     .then((response) => response.json())
//     .then((data) => {
//       try {
//         //processing received data
//         console.log(data);
//       } catch (error) {
//         console.log(error);
//       }
//     })
// //     .catch((error) => console.log(error));


// let promise1 = fetch('https://jsonplaceholder.typicode.com/posts/1');
// let promise2 = fetch('https://jsonplaceholder.typicode.com/posts/2');
// let promise3 = fetch('https://jsonplaceholder.typicode.com/posts/3');

// Promise.all([promise1, promise2, promise3])
// .then((values) => {
//   console.log(values);
// })

// fetch('https://some-api.com/data')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });


// async function getData() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     const data = await response.json();
//     console.log(data);
//   }
  
//   getData();
  