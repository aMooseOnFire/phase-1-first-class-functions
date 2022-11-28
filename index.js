function receivesAFunction (callback) {
    callback();
}

function returnsANamedFunction () { 
    const something = function () {
        console.log(`Something`);
    }
    return something; 
}

function returnsAnAnonymousFunction () {
    return function () {
        
    }
}
