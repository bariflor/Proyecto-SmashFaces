// $(document).ready(function(){
	
//     var chile4 = ['ab.jpg', 'dr.jpg', 'ec.jpg', 'gr.jpg', 'jv.jpg', 'mm.jpg', 'mv.jpg', 'rf.jpg'];
//   $('#fondo').css({'background-image': 'src(assets/img/' + chile4[Math.floor(Math.random() * chile4.length)] + ')'});
// var lima5 = ['ac.jpg', 'ai.jpg', 'cc.jpg', 'cj.jpg', 'ko.jpg', 'po.jpg', 'tl.jpg'];
//   $('#fondo').css({'background-image': 'url(assets/img/' + lima5[Math.floor(Math.random() * lima5.length)] + ')'});
// var lima6 = ['ab.jpg', 'dr.jpg', 'ec.jpg', 'gr.jpg', 'jv.jpg', 'mm.jpg', 'mv.jpg', 'rf.jpg'];
//   $('#fondo').css({'background-image': 'url(assets/img/' + lima6[Math.floor(Math.random() * lima6.length)] + ')'});
  
// });    
$( document ).ready(function() {
var numeroAzar=0;//valor de random
var puntaje=0;//Score
var intentos=0;//Oportunidades de adivinar
//Random images
var imagenes= [
  "ab.jpg",   "dr.jpg",  "ec.jpg",  "gr.jpg", "jv.jpg", "mm.jpg",
  "mv.jpg",   "rf.jpg",     "ac.jpg",   "ai.jpg",    "cc.jpg",   "cj.jpg",
  "ko.jpg",   "po.jpg",   "tl.jpg",   "a.jpg",   "b.jpg",    "c.jpg",
  "d.jpg",     "e.jpg",      "f.jpg",     "g.jpg" 
];
//comparar input
var nombres= [
  "abby",   "dora",        "evelyn",       "gabriela",    "johana",    "maria",
  "mariley",   "romina",     "ale",   "andrea",    "camila",   "carola",
  "katty",   "paola",   "thalia",   "alicia",   "danny",    "erika",
  "nayeli",    "jimena",       "mariela",    "melissa"
];

///////////////FUNCIONES///////////////
//Genera un numero al azar
function randomImage(min, max) {
  var numero = Math.random() * (max - min) + min;
  var entero = Math.floor(numero);
  return entero;
};

function nuevaJugada(){
  if (nombres.length>0) {
  numeroAzar=randomImage(0, nombres.length);
  var imagen="assets/img/" + imagenes[numeroAzar];
  $("#img-alumna").attr("src", imagen);
}else{
  alert("Fin del Juego!");
}
};

	$("hr").click(function(){
	$("p").slideToggle();
	 });
  console.log("ready!");
  //Dropdown Elige tu sede
  // $( ".dropdown-toggle" ).click(function() {
  //   $( ".dropdown-menu" ).slideToggle( "slow" );
  // })

$("select[name=selectorPais]").change(function(){
        alert("Tu sede es: "+ $("select[name=selectorPais]").val());
        $("input[name=mexico]").val($(this).val());
      nuevaJugada();
      });

  //COMPROBAR imagen Boton
  $("#btnComprobar").click(function(){

    var nombre=$("#inputText").val();
    console.log("El usuario escribio : " + nombre);
    $("#inputText").val("");//limpiar input

    var nombreAdivinar=nombres[numeroAzar];
    console.log("El nombre correcto es: " + nombreAdivinar);

    if (nombre==nombreAdivinar) {

      //Quitar elemento para  que no se repita
      nombres.splice(numeroAzar,1);
      imagenes.splice(numeroAzar,1);

      //Adivino MARCADOR      
      console.log(puntaje);
      nuevaJugada(); 
      puntaje= puntaje + 5;
       //Imprimir
      $("#puntaje").text(puntaje);
      alert("Correcto!!! \n + 5 pts ");

    } else {
      //Fallo MARCADOR
      puntaje= puntaje - 1; //
      $("#puntaje").text(puntaje);
      intentos=intentos+1;
      alert("Error!!! \n Su nombre no es: " + nombre + "\n Pierdes 1pt" + "\n Restan "+ (5 - intentos) + " intentos");    
      
    }
    if(intentos==5) {
          alert("No hay mas intentos!!! \n Su nombre es: " + nombreAdivinar);
          //Quitar elemento para  que no se repita
          nombres.splice(numeroAzar,1);
          imagenes.splice(numeroAzar,1);
        }  
  });

  
}); ///////////CIERRE GLOBAL/////////////////