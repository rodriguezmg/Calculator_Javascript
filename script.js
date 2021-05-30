let op;

document.querySelector('#sum').addEventListener('click', () =>{
    op = '+';
})
document.querySelector('#subtract').addEventListener('click', () =>{
    op = '-';
})
document.querySelector('#product').addEventListener('click', () =>{
    op = '*';
})
document.querySelector('#division').addEventListener('click', () =>{
    op = '/';
})

document.querySelector('#calculate').addEventListener('click', () =>{
    const n1 = parseInt(document.querySelector('#n1').value);
    const n2 = parseInt(document.querySelector('#n2').value);
    let r;
    if (op == '+'){
        r = n1 + n2;
    }else if (op == '-'){
        r = n1 - n2;
    }else if (op == '*'){
        r = n1 * n2
    }else if (op == '/'){
        r = n1 / n2
    }
    document.querySelector('#result').innerHTML = r
})