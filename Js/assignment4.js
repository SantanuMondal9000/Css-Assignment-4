$(document).ready(function(){
    $(".menu").hide();
    $(".mobile-menu").click(function(){
      $(".menu").show();
      console.log("Dgfg");
      
    });
    $(".cross-icon").click(function(){
        $(".menu").hide();
        console.log("5454")
      });
  });