var testObj = {
    "1stKey": "1stValue",
    "blue": "sky",
    "red": "carpet",
    5 : "fifthValue"
};
testObj.red = "Apple"
console.log(typeof testObj)
console.log(testObj["red"])

console.log("--------------------------")


testObj["4thKey"] = "4thValue"
delete testObj[5]
console.log(testObj)

