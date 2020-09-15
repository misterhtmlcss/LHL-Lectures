console.log("This js file loads correctly");

let row = 0


$(document).ready(function () {
  console.log("ready");

  $("#add-box").click(function () {
    // How many boxes before I start a new row?
    if($(".box").length % 5 === 0){
      // Row checker
      row += 1
      console.log('hello world', $(".box").length)
      $("#box-container").append(`<div class="boxes"></div>`)
    }
    // How many black rows do I want? // 6
    if(row > 6){
      $(".box").each(function(idx, box) {
        $(box).css("background-color", function(){
          return idx % 2 === 0 ? "blue": "white"
        });
      });
      $("#add-box").css({
        "background-color": "blue",
        "color": "white",
        "border": 0
      })
      return null
    }
    // No matter what, a click makes a new box until it's too many
    $(".boxes").eq(row).append(`<div class="box"></div>`);
  })
})
