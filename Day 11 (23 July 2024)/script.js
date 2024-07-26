// Day 11 (23 July 2024)

// Promises & Async Await

// Activity 01
// Understanding Promises

// Task 01
// Create a promise that resolves with a message after a 2 second timeout and log the message to the console

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(`Promise has been resolved !!! `);
//   }, 2000);
// });

// console.log(promise);

// promise.then((res) => console.log(res));

// Task 02
// Create a promise that rejects with a message after a 2 second timeout and log the message to the console

// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     reject(`Promise has been rejected`);
//   }, 2000);
// });

// promise.catch(function (err) {
//   console.log(`The error is : ${err}`);
// });

// Activity 02
// Chaining Promises

// Task 03
// Create a sequence of promises that simulate fetching data from a server. Chain the promises to log message in a specific order

// let FetchData = (api, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       fetch(api)
//         .then((response) => response.json())
//         .then((data) => resolve(data))
//         .catch((error) => reject(error));
//     }, delay);
//   });
// };

// FetchData("https://fakestoreapi.com/products", 1000)
//   .then((owais) => {
//     console.log(owais);
//     return FetchData(
//       "https://fakestoreapi.com/products/category/jewelery",
//       2000
//     );
//   })
//   .then((hamza) => {
//     console.log(hamza);
//     return FetchData("https://fakestoreapi.com/carts?sort=desc", 4000);
//   })
//   .then((ali) => {
//     console.log(ali);
//   })
//   .catch((err) => {
//     console.log(err, " Error a gya !");
//   });

// Activity 03
// Using Async/Await

// Task # 04
// Write an async function that will wait for the promise to get completed and then logs the resolved value

// let task_4 = (api) => {
//   return new Promise(async (resolve, reject) => {
//     let data = await fetch(api);
//     let result = await data.json();
//     resolve(result);
//   });
// };

// task_4("https://fakestoreapi.com/carts?sort=desc").then((res) => {
//   console.log(
//     "Promise has been resolved with the use of async await function .... "
//   );
//   console.log(res);
// });

// Task # 05

// Write an async function that handles a rejected promise using try catch and then logs the error value

// let task_5 = (api) => {
//   return new Promise(async (res, rej) => {
//     let api_variable = await fetch(api);

//     let data = await api_variable.json();

//     rej("Promise has been rejected ! ");
//   });
// };

// task_5("https://fakestoreapi.com/carts?sort=desc")
//   .then((response) => console.log("Promise resolved ! ", response))
//   .catch((err) => console.log(err));

// Activity 04
// Fetching Data from an API

// Task # 06

// Use the fetch api to get data from a public API and log the response data to the console using promises

// let getData = async (api) => {
//   return new Promise(async (resolve, reject) => {
//     let data = await fetch(api);
//     let result = await data.json();
//     resolve(result);
//     reject("error fetching");
//   });
// };

// getData("https://jsonplaceholder.typicode.com/todos/1")
//   .then((owais) => {
//     console.log(owais);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Task # 07

// Use the fetch api to get data from a public API and log the response data to the console using async await

// let fetchData = async () => {
//   try {
//     let getData = await fetch("https://fakestofdfdreapi.com/carts?sort=desc");

//     let jsonData = await getData.json();

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     console.log(getData);
//     console.log(jsonData);
//   } catch (err) {
//     console.log("Data Fetched Error ", err);
//   }
// };

// fetchData();

// Activity 05
// Concurrent Promises

// Task 08
// Use Promise.all to wait for mulitple promises to resolve and then log all their values

// let func = async () => {
//   // Fetch Data from multiple URLs

//   let [api1, api2, api3] = await Promise.all([
//     fetch("https://fakestoreapi.com/carts?sort=desc"),
//     fetch("https://fakestoreapi.com/"),
//     fetch("https://fakestoreapi.com/products"),
//   ]);

//   // Convert this data into json format

//   let json1 = await api1.json();
//   let json2 = await api2.json();
//   let json3 = await api3.json();

//   // console.log(data1);
//   // console.log(data2);
//   // console.log(data3);

//   console.log(json1);
//   console.log(json2);
//   console.log(json3);
// };

// func();

// Task 09
// Use Promise.race to the value of first promise that got resolved and then log it's value their values

// let FetchData1 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("FetchData1: Promise has been resolved after 2 seconds.");
//     }, 2000);
//   });
// };

// let FetchData2 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("FetchData2: Promise has been resolved after 1 seconds.");
//     }, 1000);
//   });
// };

// let FetchData3 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("FetchData3: Promise has been resolved after 1 seconds.");
//     }, 1000);
//   });
// };

// let racePromises = async () => {
//   let racePromise = await Promise.race([
//     FetchData1(),
//     FetchData2(),
//     FetchData3(),
//   ]);

//   // Log the result of the first resolved promise
//   console.log("Result of the first resolved promise:", racePromise);
// };

// racePromises();

// ------------------------------------ Completed !!!------------------------------------
