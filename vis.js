$( document ).ready(function() {
    setTimeout(function(){
      $("#logo").fadeIn().fadeOut().fadeIn("slow", function() {
        $("#logo").addClass("animated hinge");
      });
    }, 1000);
});
