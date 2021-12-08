const myArr = [1,2,3,4];

//map():
const mappedArr = myArr.map(item => item**2);
console.log(`this is a mappedArr: ${mappedArr}`)

//filter();
const filteredArr = myArr.filter(elem => elem > 2);
console.log(`this is a filteredArr; ${filteredArr}`)

//reduce();
const include = myArr.includes(3);
console.log(include)

//find();

//includes();
