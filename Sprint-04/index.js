//Task 1
// function getPromise(delay, message) {
//     return new Promise((resolve, reject) => {
//         resolve (message);
//     });
// }

// getPromise(2000, "hello").then(function(data) {
//     console.log(data);
// });
// const end = Date.now() + 3000;
//   while (Date.now() < end) {
//     const muchCompute = 1 + 2 + 3;
//   }

  //hello

//Task 2
// function add(x, y) {
//     return new Promise((resolve, reject) => {
//       if (typeof x == "number" && typeof y == "number") {
//         resolve(x + y);
//         return;
//       }
//       reject("Error!");
//     });
//   }

//   add(2,2).catch(err => console.log(err));
//   const end = Date.now() + 1000;
//   while (Date.now() < end) {
//       const muchCompute = 1 + 2 + 3;
//   }

//Task 3
// const {getUser, getUserProfile} = require('./Helper.js');

// async function getAge() {
//     const user = await getUser();
//     const profile = await getUserProfile(user.id);
//     return profile.age;
// } 

// getAge().then(a => console.log(a));
// const end = Date.now() + 1000;
// while (Date.now() < end) {
//     const muchCompute = 1 + 2 + 3;
// }

//Task 4
// function* take(n, iterable) {
//     for (let i = 0; i < n; i++) {
//         yield iterable[i];
//       }
// }

// const arr = ['a', 'b', 'c', 'd'];
// for (const x of take(2, arr)) {
//     console.log(x);
// }
// a
// b
// const arr2 = ['a', 'b', 'c', 'd'];
// for (const x of take(3, arr)) {
//     console.log(x);
// }
// a
// b
// c

