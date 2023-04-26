function verificaUrl(){
    url = window.location.href
   if(url.includes('index')){
        adicionaAba('servicos')
   }else if(url.includes('ferramentas')){
        adicionaAba('ferramentas')
   }else if(url.includes('funcionarios')){
        adicionaAba('funcionarios')
   }else{
        console.log("Rota inexistente")
   }
}

function adicionaAba(aba_id){
    const aba_atual = document.getElementById(aba_id)
    aba_atual.classList.add('abaAtual')
    console.log(aba_atual)
}