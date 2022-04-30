function Dog(breed, someShit) {
    this.breed = breed;
    this.someShit = someShit;
}

function Ha(mat, e) {
    this.mat = mat;
    this.e = e;
}

let something = new Ha('plastic', 'eeeee');
console.log(something);

console.log(something instanceof Ha);