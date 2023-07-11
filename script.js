const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header-container");

const toggleNavbar = () => {
  // alert("Plz Subscribe ");
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());



// JavaScript code to handle the scroll event and add/remove classes to the navbar
const navbar = document.querySelector('.header-container');
const logoImage = document.getElementById('logoImage');
const navbarIcon = document.getElementById("navbar-icon")
const mobileNavBtn = document.querySelector('mobile-navbar-btn');

window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        logoImage.src = "/public/DynamicERP Logo.png";
        navbar.classList.add('scrolled');
        navbarIcon.style.color = "rgb(13, 151, 214)"
        mobileNavBtn.classList.add('scrolls')
    } else {
        logoImage.src = "/public/dynamic-erp-white-logo.svg";
        navbar.classList.remove('scrolled');
        navbarIcon.style.color = "#212529";
        mobileNavBtn.classList.remove('scrolls')
    }
});


// Get all the FAQ items
const faqItems = document.querySelectorAll('.faq-items');

// Add click event listener to each FAQ item
faqItems.forEach(item => {
    const icon = item.querySelector('.icon');
    const answer = item.querySelector('.answer');

    icon.addEventListener('click', () => {
        item.classList.toggle('active');
        icon.classList.toggle('active');
        answer.classList.toggle('active');
    });
});


// login and registration

const toggleregistrationbtn = document.getElementById("toggle-registration-btn");
const loginsection = document.getElementById("login");



const blockSection = document.getElementsByClassName("block-section")


toggleregistrationbtn.addEventListener( 'click', function (event){

    event.preventDefault();

    // Hide all sections
    for (var i = 0; i < blockSection.length; i++) {
        blockSection[i].style.display = "none";
    }


    loginsection.style.display = 'block'; 

})


window.addEventListener('click', function(event){
    var target = event.target;

    if(loginsection.contains(target)){
        loginsection.style.display = "none";

        // shows all section
        for ( var i=0; i<blockSection.length ; i++){
            blockSection[i].style.display = "block";
        }
    }
})


// window.onclick = function(event) {
//     if (event.target == loginsection) {
//         loginsection.style.display = "none";

//         for ( var i=0; i<blockSection.length ; i++){
//               blockSection[i].style.display = "block";
//                    }
//     }
// }

function changeBorderColor(){
    const input = getElementById("myInput")
    input.style.borderColor = "#000"
}


// toggle mobile app and web app

const toggleAppBtnMobile = document.getElementById("toggleAppBtn-Mobile")
const toggleAppBtnWeb = document.getElementById("toggleAppBtn-web")
const mobileAppView = document.getElementById("mobile-app-view")
const webAppView = document.getElementById("web-app-view")

toggleAppBtnMobile.addEventListener('click', function(){
    toggleAppBtnMobile.classList.add('color_change');
    toggleAppBtnWeb.classList.remove('color_change')
    mobileAppView.style.display = "block";
    webAppView.style.display = "none";
})

toggleAppBtnWeb.addEventListener('click', function(){
    toggleAppBtnWeb.classList.add('color_change');
    toggleAppBtnMobile.classList.remove('color_change')
    webAppView.style.display = "block";
    mobileAppView.style.display = "none";
})


// toggleAppBtnWeb.addEventListener('click', function(){
//     toggleAppBtnWeb.classList.toggle('color_change');
// })



// faq section 

const faqHeader = document.querySelectorAll('.faq-header');
const toggleButtons = document.querySelectorAll('.toggle-button');
const faqQuestions = document.querySelectorAll('.faq-question');

faqHeader.forEach(header => {
  header.addEventListener('click', () => {
    header.nextElementSibling.classList.toggle('hidden');
  });
});

// toggleButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     button.parentNode.querySelector('.answer').classList.toggle('hidden');
//   })
// })


//Add click event listeners to all <p> elements
    faqQuestions.forEach(function(question) {
      question.addEventListener('click', function() {
        const ans = this.nextElementSibling;
        const allAnswers = document.querySelectorAll('.answer');
        const allImages = document.querySelectorAll('.answer img');

        // Hide all answers and images
        allAnswers.forEach(function(answer) {
          answer.classList.add('hidden');
        });
        allImages.forEach(function(image) {
          image.style.display = 'none';
        });

        // Show the clicked answer and image
        ans.classList.remove('hidden');
        const image = ans.querySelector('img');
        image.style.display = 'block';
      });
    })




// chatgpt
// function toggleImage(index) {
//     const images = document.querySelectorAll('.faq-item .answer img');
//     const paragraphs = document.querySelectorAll('.faq-item .faq-question');

//     images.forEach((image, i) => {
//       if (i === index) {
//         image.style.display = 'block';
//       } else {
//         image.style.display = 'none';
//       }
//     });

//     paragraphs.forEach((paragraph, i) => {
//       if (i === index) {
//         paragraph.classList.add('active');
//       } else {
//         paragraph.classList.remove('active');
//       }
//     });
//   }


//  // Get all the <h3> and <p> elements
//     const faqHeader = document.querySelector('.faq-header');
//     const faqQuestions = document.querySelectorAll('.faq-question');

//     // Add click event listener to the <h3> element
//     faqHeader.addEventListener('click', function() {
//       const faqItemsSecond = document.querySelector('.faq-items-second');
//       faqItemsSecond.classList.toggle('visiblity');
//     });

//     // Add click event listeners to all <p> elements
//     faqQuestions.forEach(function(question) {
//       question.addEventListener('click', function() {
//         const ans = this.nextElementSibling;
//         const allAnswers = document.querySelectorAll('.faq-answer');
//         const allImages = document.querySelectorAll('.faq-answer img');

//         // Hide all answers and images
//         allAnswers.forEach(function(answer) {
//           answer.classList.add('hidden');
//         });
//         allImages.forEach(function(image) {
//           image.style.display = 'none';
//         });

//         // Show the clicked answer and image
//         ans.classList.remove('hidden');
//         const image = ans.querySelector('img');
//         image.style.display = 'block';
//       });
//     });



// accordian

// Get references to the FAQ header and the child elements
const faqHeaderAccordian = document.querySelector('.faq-header-accordian');
const accordianContainer = document.querySelector('.accordian-container');

// Set initial visibility state
let isAccordianVisible = false;
accordianContainer.style.display = 'none';

// Toggle visibility on faqHeaderAccordian click
faqHeaderAccordian.addEventListener('click', () => {
  isAccordianVisible = !isAccordianVisible;
  if (isAccordianVisible) {
    accordianContainer.style.display = 'block';
  } else {
    accordianContainer.style.display = 'none';
  }
});





       // Get references to the questions and images
       const questions = document.querySelectorAll('.allfaq-question p');
       const images = document.querySelectorAll('.faq-image-container img');

       
       // Hide all images except the first one
       for (let i = 1; i < images.length; i++) {
         images[i].style.display = 'none';
       }
       
       // Add click event listener to each question
       questions.forEach((question, index) => {
         question.addEventListener('click', () => {
           // Hide all images
           images.forEach((image) => {
             image.style.display = 'none';
       
           });
       
           // Display the corresponding image
           images[index].style.display = 'block';
         });
       });