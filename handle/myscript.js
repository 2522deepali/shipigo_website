{/* <script type="text/dust"></script>
<script type="text/javascript"></script> */}
$(document).ready(function () {
  var data = {
    "title":"shippy go",
    "names" : [{ "name": "Larry" },{ "name": "Curly" },{ "name": "Moe" }]
   
}
  
    var source   = $("#entry-template").html();
    var compiled = dust.compile(source, "intro");
    dust.loadSource(compiled);
  
    dust.render("intro", data, function(err, out) {
        $("#output").html(out);
    });
  });
  