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

// #### Image ##### //

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent.nav["img-src"])


// ########  NAV LINK ########## //

const navBar = document.querySelectorAll('nav a');
navBar.forEach(( navValue, i) => {
navValue.textContent = siteContent.nav[`nav-item-${i + 1}`];

});

// let anchors = document.querySelectorAll("a");
// for (let i = 0; i < anchors.length; i++) {
//   anchors[i].textContent = siteContent ["nav"][`nav-item-${i+1}`];
//   anchors[i].style.color = 'green';
// }

// ##### HEADER NAV ##### //

let greenC = document.querySelectorAll("header nav a");
greenC.forEach(Green => {
  Green.style.color = "green";
  
});

// ###### New Contact Added ###### ////

const headerNavBar = document.querySelector('nav');

const newA1 = document.createElement('a')
newA1.textContent = 'FAQ';
newA1.style.color = 'green';

const newA2 = document.createElement('a')
newA2.textContent = 'Profile';
newA2.style.color = 'green';

headerNavBar.appendChild(newA1);
headerNavBar.prepend(newA2);


// ####### CALL TO ACTION STYLING ##### //// 

const topH1 = document.querySelector('h1');
topH1.innerHTML = siteContent.cta.h1;

// const ctaText = document.querySelector(".cta-text h1");
// ctaText.innerHTML = siteContent['cta']['h1'].replace(/\s/g, "</br>");



let headImg = document.getElementById("cta-img");
headImg.setAttribute('src', siteContent.cta["img-src"])


const topBtn = document.querySelector('button');
topBtn.textContent = siteContent.cta.button;


// ############# Middle MAIN CONTENT ########### //

const middleImg = document.querySelector("#middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

const sectionHeaders = document.querySelectorAll(".main-content h4");
sectionHeaders[0].textContent = siteContent["main-content"]["features-h4"]
sectionHeaders[1].textContent = siteContent["main-content"]["about-h4"]
sectionHeaders[2].textContent = siteContent["main-content"]["services-h4"]
sectionHeaders[3].textContent = siteContent["main-content"]["product-h4"]
sectionHeaders[4].textContent = siteContent["main-content"]["vision-h4"]

const sectionContent = document.querySelectorAll(".main-content p");
sectionContent[0].textContent = siteContent["main-content"]["features-content"];
sectionContent[1].textContent = siteContent["main-content"]["about-content"];
sectionContent[2].textContent = siteContent["main-content"]["services-content"];
sectionContent[3].textContent = siteContent["main-content"]["product-content"];
sectionContent[4].textContent = siteContent["main-content"]["vision-content"];


/// ########## CONTACT ########### //

const contactHeader = document.querySelectorAll('.contact h4');
contactHeader[0].innerText = siteContent.contact['contact-h4'];




const contactContent = document.querySelectorAll(".contact p");
// siteContent.contact["address"] = "123 Way 456 Street <br> Somewhere, USA";
contactContent[0].textContent = siteContent.contact["address"];
contactContent[1].textContent = siteContent.contact["phone"];
contactContent[2].textContent = siteContent.contact["email"];



// ###### FOOTER ######### ///


const footer = document.querySelector('footer');
footer.textContent = siteContent.footer.copyright;