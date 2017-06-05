$(document).ready( function() {
//function translate(){
  console.log("translate")
  $("#pls").click(function(e){
    //e.preventDefault();
    console.log("lallala")
    var res = $("#name").val();
    $.ajax({
  type: "POST",
  url: "/button",
  data: JSON.stringify({"name" : res}),
  success: function (data) {
    console.log(data);
    $('h1').html(data);
  },
  contentType: "application/json"
});
});

});
