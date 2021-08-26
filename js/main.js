let allList = document.querySelectorAll(".schedule-filter li");
let allListArray = Array.from(allList);
let items = document.querySelectorAll(".ts-item");
let itemsArray = Array.from(items);


allListArray.forEach((ele) => {

    ele.addEventListener("click" , function (e){

        allListArray.forEach((ele) => {

            ele.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        itemsArray.forEach((item) => {

            item.style.opacity = '0';
        });
        document.querySelector(e.currentTarget.dataset.filter).style.opacity = '1';
    });
});