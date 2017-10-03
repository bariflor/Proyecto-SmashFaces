$(document).ready(function(){
	$("hr").click(function(){
	$("p").slideToggle();
	 });
    var chile4 = ['ab.jpg', 'dr.jpg', 'ec.jpg', 'gr.jpg', 'jv.jpg', 'mm.jpg', 'mv.jpg', 'rf.jpg'];
  $('#fondo').css({'background-image': 'src(assets/img/' + chile4[Math.floor(Math.random() * chile4.length)] + ')'});
var lima5 = ['ac.jpg', 'ai.jpg', 'cc.jpg', 'cj.jpg', 'ko.jpg', 'po.jpg', 'tl.jpg'];
  $('#fondo').css({'background-image': 'url(assets/img/' + lima5[Math.floor(Math.random() * lima5.length)] + ')'});
var lima6 = ['ab.jpg', 'dr.jpg', 'ec.jpg', 'gr.jpg', 'jv.jpg', 'mm.jpg', 'mv.jpg', 'rf.jpg'];
  $('#fondo').css({'background-image': 'url(assets/img/' + lima6[Math.floor(Math.random() * lima6.length)] + ')'});
  
});

