// Lets highjack the links and make them all open in new tabs!

// Let's identify the problems!
// 1. We need to get ALL the links right?
const links = document.querySelectorAll('a');

// 2. TEST to see if the capture worked AND What did we get?
console.log(links[0])

// 3. Ok, this looks interesting. What datatype do we have?

// 4. Now what do we do? How do we access all the links in this massive array.
// PUSH: Could we iterate over the links and take some kind of action?
// PUSH: What array methods do we know?

// Okay let's iterate using that method...
links.forEach(function(link){

})
// 5. This is great progress! Now we need to look at the data right? Again!
// Programming is very much like a business partner. Trust but verify!
links.forEach(function(link){
    console.log('link', link)
})

// 6. Now we need to somehow modify all these links!
// There is a method in JavaScript called `setAttribute` that Developers use for this exact moment.
// Using it's name we can presume, but verify that it will set the attributes on an HTML element.
// Attributes are the bits inside an HTML tag e.g. <a class="bob" id="bob" target="_blank">Lighthouse Labs Link</a>


// Final code with errors!
const links = document.querySelectorAll('a');
links.forEach(function(link){
    link.setAttribute(target, "_blank")
    console.log('link', link)
})






// Final code!
const links = document.querySelectorAll('a');
links.forEach(function(link){
    link.setAttribute("target", "_blank")
    console.log('link', link)
})

// Resources
// https://www.thesitewizard.com/html-tutorial/open-links-in-new-window-or-tab.shtml
// https://www.w3schools.com/jsref/met_element_setattribute.asp