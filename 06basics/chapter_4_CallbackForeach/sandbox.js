//  Callback and Foreach

const myFunction = (callbackFunction) => {
    //do something
    let value = 50;
    callbackFunction(value);
};

myFunction(function (value){
    // fo something
    console.log(value);
});



// let people ['mario', 'luigi', 'shaun', 'chun-li'];