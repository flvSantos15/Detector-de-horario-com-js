function configurar(){
   var msg = document.querySelector('div#msg')
   var img = document.getElementById('imagem')
   var hora = new Date()
   //var momento = hora.getHours()
   var momento = 21
   msg.innerHTML = `Agora são ${momento}horas`
   if (momento < 12) {
      //bom dia
      img.src = 'manha.jpg'
      document.body.style.background = 'pink'
   } else if(momento < 18){
      //boa tarde
      img.src = 'tarde.jpg'
      document.body.style.background = 'orange'
   }else{
      //boa noite
      img.src = 'noite.jpg'
      document.body.style.background = 'darkBlue'
   }
}
//esse script é apenas para testar o exercicio
//para praticar o conteudo apague todo e refaça