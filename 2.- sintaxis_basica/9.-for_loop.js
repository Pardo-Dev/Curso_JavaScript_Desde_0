
/* For Loop */

for(let i = 0; i <= 10; i++){
    console.log(`Numero: ${i}`)
}

// Break y continue

const passwords = ['asdasd', 'asdasd12312', 'asdasd1231234', 'asdasd123123'];
const password = 'asdasd123123';

for(let i in passwords){
    if(passwords[i] == password){
        console.log(`Esta es la contraseña correcta: ${passwords[i]}`)
        continue;
    }
    console.log(passwords[i])
}