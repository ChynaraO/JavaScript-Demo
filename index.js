
//Bitwise Operators

// 1 = 00000001
// 2 = 00000010
// R = 00000011

// 8 = 00001000
// 2 = 00000010
// R = 00001010

console.log(1 | 2); //bitwise or. 3
console.log(8 & 2); // bitwise &. 0

//Read, Write, Execute
// 00000001
// 00000010
// 00000100

let role = 'gues';

switch(role){
    case 'guest':
        console.log('Guest User');
        break;
    
    case 'moderator':
        console.log('Moderator User');
        break;

    default :
    console.log("Unknown User");
}

