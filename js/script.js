$(document).ready(
    function() {
  
      $(".prev").click(
        function(){
          prevImg();
        }
      )
  
      $(".next").click(
        function(){
          nextImg();
        }
      )
    }
  )
  //FUNZIONE CHE CAMBIA IMMAGINE DOPO 2S SENZA .CLICK
  var time = setInterval(() => nextImg(), 2000);


 // FUNZIONE PER CAMBIARE IMMAGINE CON QUELLA SUCCESSIVA 
  function nextImg() {
    var activeImg = $(".slider img.active");
    activeImg.removeClass("active");                
    if (activeImg.hasClass("last")) {
      $(".slider img:first-child").addClass("active");
      console.log("funziona next if");
    }else{                                                  
      activeImg.next().addClass("active");  
      console.log("funziona next else");                
    }
  }


 // FUNZIONE PER CAMBIARE IMMAGINE CON QUELLA PRECEDENTE 
  function prevImg() {
    var activeImg = $(".slider img.active");
    activeImg.removeClass("active");                       
    if (activeImg.hasClass("first")) {
      $(".slider img.last").addClass("active");
      console.log("funziona prev if");
    }else{                                                 
      activeImg.prev().addClass("active"); 
      console.log("funziona prev else");                 
    }
 }



 //FUNZIONE GOOGLE MAPS
function initMap(){
    var options = {
        center: {lat: 40.8672294, lng: 9.5477293},
        zoom:15
    };
    //ASSEGNAZIONE FUNZIONE DI GOOGLE NELL'ID MAP CON L'AGGIUNTA DEI PARAMETRI IN OPTIONS
    map = new google.maps.Map(document.getElementById("map"),options)
}
