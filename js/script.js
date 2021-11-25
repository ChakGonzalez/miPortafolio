'use strict'

function multiply(a,b) {
    let r=0;

    for (let index = 0; index < b; index++) {       
        r = r+a;
    }
    return r;
}

document.write("Resultado: ", multiply(2,6));
