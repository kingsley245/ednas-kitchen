// document.addEventListener('DOMContentLoaded', function (){
//   const togglebutton = document.querySelector('.navbar__mobile-menu-toggle');

//   const mobilemenu = document.querySelector('.navbar__mobile-menu-items');

//   togglebutton.addEventListener('click', function (){
//     mobilemenu.classList.toggle('active');
//   });

// })

// console.log('kingsley')


// window.addEventListener('scroll', function() {
//   const navbar = this.document.querySelector('.navbar');

//   if (window.scrollY > 0 ){
//     navbar.classList.add('navbar--scroll');

//   }else {
//     navbar.classList.remove('navbar--scroll');
//   }

// })






// const hero = document.getElementById('hero');


// let index = 0;
// const images = [
//   `.background\ image-1.jpg`,
//   `.background\ image-2.jpg`,
//   `./images/background\ image-3.jpg`,
//   `./images/background\ image-4.jpg`,
// ];

// function changeBackground(){
//   hero.style.backgroundImage = `url(${images[index]})`;
//   index = (index + 1) % images.length;
// }


// setInterval(changeBackground,3000)

// changeBackground();












// const images = [
//   `url((images/background\ image-1.jpg))`,
//   `url((images/background\ image-2.jpg))`,
//   `url((images/background\ image-3.jpg))`,
//   `url((.images/background\ image-4.jpg))`,
// ];

// let index = 0;
// setInterval (() => {
//   hero.style.backgroundImage = images[index];
//   index = (index + 1) % images.length;
// },3000);



// function showSidebar (){
//   const Sidebar = document.querySelector('.navbar__mobile-menu-list')
//   Sidebar.style.display = 'flex'

  
// }

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

// function remove_menu (){
 
// }

// remove_menu();

// console.log(window.innerWidth);
// console.log(screen.width)

window.addEventListener('scroll', function() {
  const navbar = this.document.querySelector('.navbar');

  if (window.scrollY > 0 ){
    navbar.classList.add('scroll');

  }else {
    navbar.classList.remove('scroll');
  }

})
