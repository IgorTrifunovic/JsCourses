function multiplyAll(arr) {
    var product = 1;

    for (var i=0; i < arr.length; i++){
        for (var j=0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }

    return product;
}

var product = multiplyAll([[1,2],[3,4],[5, 6, 7]]);

console.log(product);


let x = 3;
y = x++;

console.log(x,y);

//If used prefix, with operator before operand 
//(for example, ++x), the increment operator increments and 
//returns the value after incrementing.

let a = 3;
b = ++a;

console.log(a,b);