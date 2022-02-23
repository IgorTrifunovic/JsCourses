//                                    YT:   The Net Ninja

//retirning values

// const speak = function(name='luigi', time='night'){
// console.log(`good ${time} ${name}`);
// };

// speak('mario', 'morrning');
// speak(); 

// regular Fn
// const calcArea = function(radius){
//     let area = 3.14 * radius **2;
//     return area
// };

// shorter
// const calcArea = function(radius){
//     return 3.14 * radius **2;
// };

// arrow Fn

// const calcArea = (radius) => {
//     return 3.14 * radius**2;
// };

//shorter arrow

const calcArea = radius => 3.14 * radius**2;                // 0 or multiple parameters ()
                                            // if we have simple return we can remove {} as the return word
const area = calcArea(5);
console.log(area);




const greet = () => 'hello, world';

const greetVar = greet();
console.log(greetVar);



const bill = (products, tax) => {
    let total = 0
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}

console.log(bill([20, 50, 30], 0.2));

// this is comment for new git commit
