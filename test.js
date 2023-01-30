const myPromise = new Promise((resolve, reject) => {
  // resolve("Hello");
  reject('Error')
});

myPromise.then(
  foo => {
    console.log('hi');
  },
  bar => {
    console.log('bar');
  }
)