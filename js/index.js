const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

// #### Images ##### //

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent.nav["img-src"])


let midPge = document.getElementById("middle-img");
midPge.setAttribute('src', siteContent["main-content"]["middle-img-src"])


// ######## UPDATE NAV LINK ########## //

const navBar = document.querySelectorAll('nav a');
navBar.forEach(( navValue, i) => {
navValue.textContent = siteContent.nav[`nav-item-${i + 1}`];
});

// ##### HEADER NAV ##### //

let greenC = document.querySelectorAll("header nav a");
greenC.forEach(eGreen => {
  eGreen.style.color = "green";
});

// ####### CTA CTA CTA STYLING ##### //// 

const topH1 = document.querySelector('h1');
topH1.textContent = siteContent.cta.h1;

// ## CTA IMAGE ### //

let headImg = document.getElementById("cta-img");
headImg.setAttribute('src', siteContent.cta["img-src"])

// ## CTA Img ## //
const topBtn = document.querySelector('button');
topBtn.textContent = siteContent.cta.button;
