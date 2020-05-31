const getDataCallBack = (num, callback) => {
  setTimeout(() => {
    if (typeof num === 'number') {
      callback(undefined, num * 2)
    } else {
      callback('Number must be provided');
    }
  }, 2000);
};

getDataCallBack(2, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    getDataCallBack(data, (err, data) => {
      if (err) {
        console.log(err)
      }
      else {
        console.log(data);
      }
    })
  }
});

//Promise

const getDataPromise = (num) => new Promise((resolve, reject) => {
  setTimeout(() => {
    typeof num === 'number' ? resolve(num * 2) : reject('NUmber must be prvided')
  }, 2000);
})




const myPromise = getDataPromise(2);

myPromise.then(data => {
  getDataPromise(data).then(data => {
    console.log("Promise ==" + data)
  }, err => {
    console.log(err)
  })
}, err => {
  console.log(err)
})


getDataPromise(10).then(data => {
  return getDataPromise(data)
}).then(data => {
  return getDataPromise(data)
}).then(data => {
  console.log("New Version =" + data)
}).catch(err => {
  console.log(err)
})


fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error('Unable to fetch the puzzle')
  }
}).then((data) => {
  console.log(data);
}).catch(err => {
  console.log(error);
})