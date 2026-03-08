//street
//city
//zipCode
//showAddress(address);

let address = {
    stree: 'a',
    city: 'b',
    zipCode: 'c'
};

//Factory function
function createAddress(street, city, zipCode){
    return {street, city, zipCode};
}
let address1 = createAddress('a', 'n', 'f');
console.log(address1);

//Constructor
function Address(street, city, zipCode){
    this.street = street,
    this.city = city;
    this.zipCode =zipCode
}
let address2 = new Address('a', 'f', 'd');
console.log(address2);