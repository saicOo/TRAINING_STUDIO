let allList = document.querySelectorAll(".schedule-filter li");
let items = document.querySelectorAll(".ts-item");
let itemsArray = Array.from(items);
allList.forEach((li) => {
    li.addEventListener('click', removeActive);
    li.addEventListener('click', manageTb);
});

function removeActive(){
    allList.forEach((li) => {
        li.classList.remove('active');
        this.classList.add('active')
    });
};
itemsArray.forEach((tb) => {
    if(tb.classList.contains('Monday')){
        tb.style.opacity = "1";
    }else{
        tb.style.opacity = "0";
    }
    
})

function manageTb() {
    itemsArray.forEach((tb) => {
        tb.style.opacity = "0"
    })
    document.querySelectorAll(this.dataset.filter).forEach((ele) => {
        ele.style.opacity = "1"
    })
    
}


let features = document.querySelector('.features');
window.onscroll = function () {
    
    // skills offset top
    let featuresOffsetTop = features.offsetTop;

    let featuresOuterHeight = features.offsetHeight;

    let windowHeight = this.innerHeight;

    windowScrolTop = this.pageYOffset;
    let nav = document.querySelector('header');
    if(windowScrolTop > (featuresOffsetTop + featuresOuterHeight - windowHeight)){
        nav.classList.add('fixed-header');
        document.querySelectorAll('.navbar .navbar-nav .nav-link').forEach((a) =>{
            a.style.color = 'black'
        })
        document.querySelector('header .navbar .navbar-brand').style.color = 'black'
    }else{
        nav.classList.remove('fixed-header');
        document.querySelectorAll('.navbar .navbar-nav .nav-link').forEach((a) =>{
            a.style.color = '#fff';
        })
        document.querySelector('header .navbar .navbar-brand').style.color = '#fff'
    };
};
// wow animation
new WOW().init();
let p = document.querySelectorAll('p');
p.forEach((p) => {
p.className = 'wow animate__backInUp'
})
let h4 = document.querySelectorAll('h4');
h4.forEach((h4) => {
h4.className = 'wow animate__rubberBand'
})
let h3 = document.querySelectorAll('h3');
h3.forEach((h3) => {
h3.className = 'wow animate__tada'
})