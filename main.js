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

function backspace() {
    // Pega o valor atual do display
    let valorAtual = display.value;

    // Se o valor não estiver vazio:
    if (valorAtual.length > 0) {
        // Usa slice(0, -1) para criar uma nova string removendo o último caractere.
        display.value = valorAtual.slice(0, -1);
    }
    
    // Opcional: Se a string ficar vazia, define como '0' para manter o display limpo.
    if (display.value === '') {
        display.value = '0';
    }
}