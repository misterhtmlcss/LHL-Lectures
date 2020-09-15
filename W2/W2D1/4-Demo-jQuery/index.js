console.log('This js file loads correctly');

const clickHandler = function (event) {
  console.log(event.clientX, event.clientY);
};

const eventHandler = function (event) {
  console.log('event handled')
};


$(document).ready(function(){
  console.log('ready');

  // using the .on method
  $('#main-list').on('click', clickHandler);
  // using the 'direct' method you can often call the action you want using this shorthand below. The shorthand methods are the most common nowadays.
  // $('button').click(clickHandler);
  // $('form').submit(submitHandler);
  // $('input').focus(focusHandler);
  // $('input').mouseover(mouseoverHandler);

  $('button').on('click', (event) => {
    const fnOne = clickHandler(event)
    const fnTwo = eventHandler(event)
    return `${fnOne} AND ${fnTwo}`
  })

//   $('button').on('click', eventHandler)





  // $("input").css("background-color","yellow");
  // $(".content p").css("background-color","yellow");


  // create a new image and give it a src attribute
  // const newImg = $('<img>').attr('src', 'https://www.fillmurray.com/200/300');

  // // append the new image to the body element
  // $('body').append(newImg);


  // create a new image and give it a src attribute
  // const newLi = $('li').css("background-color","yellow");

  // // append the new image to the body element
  // $('.main-list').append(newLi);


});