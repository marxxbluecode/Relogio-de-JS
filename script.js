function carregar(){
    var msg = document.getElementById('box-msg')
    var titulo = document.getElementById('title')
    var img = document.getElementById('pic')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    var intervalo = window.setInterval(() => {carregar()},1000);
    msg.innerHTML = `Agora são ${hora}:${minuto}:${segundo}.`
    if(hora >= 6 && hora < 12){
        titulo.innerHTML = 'Bom Dia!'
        img.src = 'images/manha.png'
        document.body.style.background = '#f8d09d'
    }else if(hora >= 12 && hora < 18){
        titulo.innerHTML = 'Boa Tarde!'
        img.src = 'images/tarde.png'
        document.body.style.background = '#e19981'
    }else {
        titulo.innerHTML = 'Boa Noite!'
        img.src = 'images/noite.png'
        document.body.style.background = '#253745'
    }
}