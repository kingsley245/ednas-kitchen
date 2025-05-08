document.querySelector('.menu-toggle').addEventListener('click', function (){
  document.getElementById('menu').classList.add('open');
  const menutoggle = document.querySelector('.menu-toggle');
  menutoggle.style.display = 'none'
})

document.getElementById('close-menu').addEventListener('click', function (){
  document.getElementById('menu').classList.remove('open');


  const menutoggle = document.querySelector('.menu-toggle');
  menutoggle.style.display = 'inline-block'
})


const toggleBar = document.getElementById('toggleBar');
// const remove = Document.getElementById('menu');

// Function to check screen size and hide/show the toggle bar
function handleScreenResize() {
    if (window.innerWidth != 768) { // Example: 768px for larger screens
        // toggleBar.classList.remove('hidden');
        toggleBar.display.style = 'flex'
    } else {
        toggleBar.classList.add('hidden');
    } 
}


// Check on initial load
handleScreenResize();

// Update on window resize
window.addEventListener('resize', handleScreenResize);

const removemenu = document.getElementById('menu')
window.addEventListener('scroll', function() {
  const navbar = this.document.querySelector('.navbar');

  if (window.scrollY > 0 ){
    navbar.classList.add('scroll');

  }else {
    navbar.classList.remove('scroll');
  }

})
