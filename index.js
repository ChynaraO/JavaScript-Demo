
//Constructor
function Address(street, city, zipCode){
    this.street = street,
    this.city = city;
    this.zipCode =zipCode
}
let address1 = new Address('a', 'f', 'd');
let address2 = new Address('a', 'f', 'd');
console.log(address2);

function areEqual (address1, address2){
    // === if these objects's properties reference are same
return address1.street === address2.street &&
address1.city === address2.city &&
address1.zipCode === address2.zipCode
}

function areSame(address1, address2){
    // === if these objects's reference are same
    return address1 === address2;
}
console.log(areSame(address1, address2));
console.log(areEqual(address1, address2));