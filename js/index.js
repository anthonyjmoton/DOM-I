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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navLinks = document.querySelectorAll('a');
navLinks[0].textContent = siteContent["nav"]["nav-item-1"];
navLinks[1].textContent = siteContent["nav"]["nav-item-2"];
navLinks[2].textContent = siteContent["nav"]["nav-item-3"];
navLinks[3].textContent = siteContent["nav"]["nav-item-4"];
navLinks[4].textContent = siteContent["nav"]["nav-item-5"];
navLinks[5].textContent = siteContent["nav"]["nav-item-6"];

const headline = document.querySelector('h1');
headline.textContent = siteContent["cta"]["h1"];

const button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];

const idImg = document.getElementById('cta-img');
idImg.src = siteContent["cta"]["img-src"];

const sectionHeadline = document.getElementsByTagName('h4');
sectionHeadline[0].textContent = siteContent["main-content"]["features-h4"]
const sectionPara = document.querySelectorAll('p');
sectionPara[0].textContent = siteContent["main-content"]["features-content"]

sectionHeadline[1].textContent = siteContent["main-content"]["about-h4"];
sectionPara[1].textContent = siteContent["main-content"]["about-content"]

const middleImg = document.getElementById('middle-img');
middleImg.src = siteContent["main-content"]["middle-img-src"];

sectionHeadline[2].textContent = siteContent["main-content"]["services-h4"];
sectionPara[2].textContent = siteContent["main-content"]["services-content"];

sectionHeadline[3].textContent = siteContent["main-content"]["product-h4"];
sectionPara[3].textContent = siteContent["main-content"]["product-content"];

sectionHeadline[4].textContent = siteContent["main-content"]["vision-h4"];
sectionPara[4].textContent = siteContent["main-content"]["vision-content"];


sectionHeadline[5].textContent = siteContent["contact"]["contact-h4"];
sectionPara[5].textContent = siteContent["contact"]["address"];
sectionPara[6].textContent = siteContent["contact"]["phone"];
sectionPara[7].textContent = siteContent["contact"]["email"];

sectionPara[8].textContent = siteContent["footer"]["copyright"];