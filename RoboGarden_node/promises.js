// pending, fulfilled, rejected
// a promis is asyncronous

// const promise3 = new Promise((resolve, rejected) => {
//     setTimeout(() => {
//  console.log('4');
//         reject(new Error("i no have money"));
//     }, 2000)
// });

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
         reject(new Error("I dont have money."));
    }, 1000)
});

promise.then((data) => {
   console.log('coming in the then condition');
    console.log(data);
}).catch((error) => {
      console.log('coming in the catch condition');
    console.log(error);
});