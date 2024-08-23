// console.log('Hello world')

// For tablet and ipad

var e = window.matchMedia('(min-width:481px) and (max-width: 768px)');
myChecked(e);

e.addEventListener('change', function(){
    function myChecked(e) {
        if (e.matches) { // If media query matches
          document.body.style.backgroundColor = "yellow";
        } else {
         document.body.style.backgroundColor = "pink";
        }
      }
});
   
   
       
   

