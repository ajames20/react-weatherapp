//Call back example 
// function getTempCallback(locaction, callback) {
//   callback(undefined, 78);
//   callback('City Not Found')
// }

// getTempCallback('Phoenix', function (error, temp) {
//   if (error) {
//     console.log('error', error)// This log will display 
//   } else {
//     console.log('success', temp)// This log will also display
//   }
// });

// Promise Example
// Only one log statement will display

// function getTempPromise(location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(90)
//       reject('City not Found')
//     }, 1000);

//   })
// }

// getTempPromise('Phoenix').then(function (temp) {
//   console.log('promise success', temp)
// }, function (error) {
//   console.error('promise error', error)
// })

// Challenge Promise 

function addPromise(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b)
    } else {
      reject('A and B need to be numbers')
    }
  })
}

// Returns sum of A + b
addPromise(4, 7).then((sum) => {
  console.log('nailed it', sum)
}), (error) => {
  console.log('failed', error)
}

// Returns Invalid input
addPromise(4, 'shit').then((sum) => {
  console.log('nailed it', sum)
}), (error) => {
  console.log('failed', error)
}