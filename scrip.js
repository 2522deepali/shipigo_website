$(document).ready(function () {
    var data = {
      
      "names" :"John"
     
  }
  
      var source   = $("#entry-template").textContent;
      var compiled = dust.compile(source, "intro");
      dust.loadSource(compiled);
      dust.render("intro", data, function(err, out) {
          $("#entry-template").textContent=out;
      });
      
    });
  

