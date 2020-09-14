
console.log('testing...this works')


//  *********************
// Why doesn't this one work?
// Let's look in the debugger!!
//  *********************



window.addEventListener('mousemove', function(event) {
  document.getElementById('x-value').textContent = event.x;
  document.getElementById('y-value').textContent = event.y;
});



// const x =  document.getElementById('x-value');
// const y = document.getElementById('y-value');

// window.addEventListener('mousemove', function(event) {
//   x = event.x
//   y = event.y
// })

