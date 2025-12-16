let display = document.querySelector('#display');

function mostrarDisplay(value){
    if (value == '.'){
        if(display.value == ''){
            display.value = '0';
        }
        
    }
    display.value += value;
}

function limparTudo(){
    display.value = '';
}

function result(){
    let y = eval(display.value);

    display.value = y;
    if(display.value == 'undefined'){
        display.value= '';
    }
}