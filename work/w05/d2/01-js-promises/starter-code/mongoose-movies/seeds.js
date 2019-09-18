// utility to initialize database


const p = new Promise(function(resolve, reject) {
    let value = 42;
    resolve(value);
})
p
    .then(function(result) {
        console.log(result);
        return 42;
    })
    .then(function(result) {
        console.log(result);
        return 'Done!'
    })
    .then(function(result) {
        console.log(result);
    });