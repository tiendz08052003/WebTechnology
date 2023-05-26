const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const eleAccessories = $(".product__left__child__body__list__accessories");
const eleLaptop = $(".product__left__child__body__list__laptop");
const eleTv = $(".product__left__child__body__list__tv");
const elePhone = $(".product__left__child__body__list__phone");

const eleAccessoriesCHild = $(".product__left__child__body__list__accessories__list");
const eleLaptopCHild = $(".product__left__child__body__list__laptop__list");
const eleTvCHild = $(".product__left__child__body__list__tv__list");
const elePhoneCHild = $(".product__left__child__body__list__phone__list");


const eleAccessoriesIcon = $(".product__left__child__body__list__accessories__icon");
const eleLaptopIcon = $(".product__left__child__body__list__laptop__icon");
const eleTvIcon = $(".product__left__child__body__list__tv__icon");
const elePhoneIcon = $(".product__left__child__body__list__phone__icon");

const eleAccessoriesIconDown = $(".product__left__child__body__list__accessories__iconDown");
const eleLaptopIconDown = $(".product__left__child__body__list__laptop__iconDown");
const eleTvIconDown = $(".product__left__child__body__list__tv__iconDown");
const elePhoneIconDown = $(".product__left__child__body__list__phone__iconDown");

const btnBack = $(".product__right__child__rcm__icon--left");
const btnNext = $(".product__right__child__rcm__icon--right");
const productDetail = $(".product__right__child__product");

const listProduct = $$(".product__right__child__product__list--recom");

const listFiveEle = $(".grid__column-10-2");
const listFourEle = $(".grid__column-10-3");
const listThreeEle = $(".grid__column-10-4");

const cicrleFirst = $(".product__right__child__page__first");
const cicrleSecond = $(".product__right__child__page__second");
const cicrleThird = $(".product__right__child__page__third");


eleAccessories.addEventListener("click", () => {
    eleAccessoriesCHild.classList.toggle("ShowList");
    eleAccessoriesIcon.classList.toggle("HideList");
    eleAccessoriesIconDown.classList.toggle("ShowList");
})

eleLaptop.addEventListener("click", () => {
    eleLaptopCHild.classList.toggle("ShowList");
    eleLaptopIcon.classList.toggle("HideList");
    eleLaptopIconDown.classList.toggle("ShowList");
})

eleTv.addEventListener("click", () => {
    eleTvCHild.classList.toggle("ShowList");
    eleTvIcon.classList.toggle("HideList");
    eleTvIconDown.classList.toggle("ShowList");
})

elePhone.addEventListener("click", () => {
    elePhoneCHild.classList.toggle("ShowList");
    elePhoneIcon.classList.toggle("HideList");
    elePhoneIconDown.classList.toggle("ShowList");
})

var sum = 0;

var styleScreen;

var activeNextBack

btnNext.addEventListener("click", () => {
    if(styleScreen == "phone"  || window.innerWidth < 798)
    {
        activeNextBack =  listProduct.length - 3;
        sum -= 33.33334;
        if(sum / -33.33334 == activeNextBack + 1)
        {
            sum = sum += 33.33334;
        }
        if(sum / -33.33334 != 0 && sum / -33.33334 <= activeNextBack / 2)
        {
            cicrleFirst.style.flex = "1";
            cicrleFirst.style.backgroundColor = "#ddd";
            cicrleFirst.style.borderRadius = "50%";
            cicrleSecond.style.flex = "2";
            cicrleSecond.style.backgroundColor = "#fed700";
            cicrleSecond.style.borderRadius = "2.2rem";
            cicrleThird.style.flex = "1";
            cicrleThird.style.backgroundColor = "#ddd";
            cicrleThird.style.borderRadius = "50%";
        }
        else{
            cicrleFirst.style.flex = "1";
            cicrleFirst.style.backgroundColor = "#ddd";
            cicrleFirst.style.borderRadius = "50%";
            cicrleSecond.style.flex = "1";
            cicrleSecond.style.backgroundColor = "#ddd";
            cicrleSecond.style.borderRadius = "50%";
            cicrleThird.style.flex = "2";
            cicrleThird.style.backgroundColor = "#fed700";
            cicrleThird.style.borderRadius = "2.2rem";
        }
    }
    else if(styleScreen == "tablet" || (window.innerWidth < 1230 && window.innerWidth >= 798))
    {
        activeNextBack =  listProduct.length - 4;
        sum -= 25;
        if(sum / -25 == activeNextBack + 1)
        {
            sum = sum += 25;
        }
        if(sum / -25 != 0 && sum / -25 <= activeNextBack / 2)
        {
            cicrleFirst.style.flex = "1";
            cicrleFirst.style.backgroundColor = "#ddd";
            cicrleFirst.style.borderRadius = "50%";
            cicrleSecond.style.flex = "2";
            cicrleSecond.style.backgroundColor = "#fed700";
            cicrleSecond.style.borderRadius = "2.2rem";
            cicrleThird.style.flex = "1";
            cicrleThird.style.backgroundColor = "#ddd";
            cicrleThird.style.borderRadius = "50%";
        }
        else{
            cicrleFirst.style.flex = "1";
            cicrleFirst.style.backgroundColor = "#ddd";
            cicrleFirst.style.borderRadius = "50%";
            cicrleSecond.style.flex = "1";
            cicrleSecond.style.backgroundColor = "#ddd";
            cicrleSecond.style.borderRadius = "50%";
            cicrleThird.style.flex = "2";
            cicrleThird.style.backgroundColor = "#fed700";
            cicrleThird.style.borderRadius = "2.2rem";
        }
    }
    else
    {
        activeNextBack =  listProduct.length - 5;
        sum -= 20;
        if(sum / -20 == activeNextBack + 1)
        {
            sum = sum += 20;
        }
        if(sum / -20 != 0 && sum / -20 <= activeNextBack / 2)
        {
            cicrleFirst.style.flex = "1";
            cicrleFirst.style.backgroundColor = "#ddd";
            cicrleFirst.style.borderRadius = "50%";
            cicrleSecond.style.flex = "2";
            cicrleSecond.style.backgroundColor = "#fed700";
            cicrleSecond.style.borderRadius = "2.2rem";
            cicrleThird.style.flex = "1";
            cicrleThird.style.backgroundColor = "#ddd";
            cicrleThird.style.borderRadius = "50%";
        }
        else{
            cicrleFirst.style.flex = "1";
            cicrleFirst.style.backgroundColor = "#ddd";
            cicrleFirst.style.borderRadius = "50%";
            cicrleSecond.style.flex = "1";
            cicrleSecond.style.backgroundColor = "#ddd";
            cicrleSecond.style.borderRadius = "50%";
            cicrleThird.style.flex = "2";
            cicrleThird.style.backgroundColor = "#fed700";
            cicrleThird.style.borderRadius = "2.2rem";
        }
    }
    productDetail.style.transform = `translateX(${sum}%) translateX(0px)`;
})

btnBack.addEventListener("click", () => {
    if(styleScreen == "phone" || window.innerWidth < 798)
    {
        sum += 33.3334;
        if(sum > 0)
        {
            sum = 0;
        }
        if(sum / -33.3334 != 0 && sum / -33.3334 <= activeNextBack / 2)
        {
            cicrleFirst.style.flex = "1";
            cicrleFirst.style.backgroundColor = "#ddd";
            cicrleFirst.style.borderRadius = "50%";
            cicrleSecond.style.flex = "2";
            cicrleSecond.style.backgroundColor = "#fed700";
            cicrleSecond.style.borderRadius = "2.2rem";
            cicrleThird.style.flex = "1";
            cicrleThird.style.backgroundColor = "#ddd";
            cicrleThird.style.borderRadius = "50%";
        }
        else if(sum / -25 == 0){
            cicrleFirst.style.flex = "2";
            cicrleFirst.style.backgroundColor = "#fed700";
            cicrleFirst.style.borderRadius = "2.2rem";
            cicrleSecond.style.flex = "1";
            cicrleSecond.style.backgroundColor = "#ddd";
            cicrleSecond.style.borderRadius = "50%";
            cicrleThird.style.flex = "1";
            cicrleThird.style.backgroundColor = "#ddd";
            cicrleThird.style.borderRadius = "50%";
        }
    }
    else if(styleScreen == "tablet" || (window.innerWidth < 1230 && window.innerWidth >= 798))
    {
        sum += 25;
        if(sum > 0)
        {
            sum = 0;
        }
        if(sum / -25 != 0 && sum / -25 <= activeNextBack / 2)
        {
            cicrleFirst.style.flex = "1";
            cicrleFirst.style.backgroundColor = "#ddd";
            cicrleFirst.style.borderRadius = "50%";
            cicrleSecond.style.flex = "2";
            cicrleSecond.style.backgroundColor = "#fed700";
            cicrleSecond.style.borderRadius = "2.2rem";
            cicrleThird.style.flex = "1";
            cicrleThird.style.backgroundColor = "#ddd";
            cicrleThird.style.borderRadius = "50%";
        }
        else if(sum / -25 == 0){
            cicrleFirst.style.flex = "2";
            cicrleFirst.style.backgroundColor = "#fed700";
            cicrleFirst.style.borderRadius = "2.2rem";
            cicrleSecond.style.flex = "1";
            cicrleSecond.style.backgroundColor = "#ddd";
            cicrleSecond.style.borderRadius = "50%";
            cicrleThird.style.flex = "1";
            cicrleThird.style.backgroundColor = "#ddd";
            cicrleThird.style.borderRadius = "50%";
        }
    }
    else 
    {
        sum += 20;
        if(sum > 0)
        {
            sum = 0;
        }
        if(sum / -20 != 0 && sum / -20 <= activeNextBack / 2)
        {
            cicrleFirst.style.flex = "1";
            cicrleFirst.style.backgroundColor = "#ddd";
            cicrleFirst.style.borderRadius = "50%";
            cicrleSecond.style.flex = "2";
            cicrleSecond.style.backgroundColor = "#fed700";
            cicrleSecond.style.borderRadius = "2.2rem";
            cicrleThird.style.flex = "1";
            cicrleThird.style.backgroundColor = "#ddd";
            cicrleThird.style.borderRadius = "50%";
        }
        else if(sum / -25 == 0){
            cicrleFirst.style.flex = "2";
            cicrleFirst.style.backgroundColor = "#fed700";
            cicrleFirst.style.borderRadius = "2.2rem";
            cicrleSecond.style.flex = "1";
            cicrleSecond.style.backgroundColor = "#ddd";
            cicrleSecond.style.borderRadius = "50%";
            cicrleThird.style.flex = "1";
            cicrleThird.style.backgroundColor = "#ddd";
            cicrleThird.style.borderRadius = "50%";
        }
    }
    productDetail.style.transform = `translateX(${sum}%) translateX(0px)`;
})


window.addEventListener("resize", (e) => {
    var w = e.target.innerWidth;
    var h = e.target.innerHeight;
    if(w >= 1230)
    {
        styleScreen = "pc";
    }
    else if((w < 1230 && w >= 798))
    {
        styleScreen = "tablet";
    }
    else 
    {
        styleScreen = "phone";
    }
    sum = 0;
    productDetail.style.transform = `translateX(${sum}%) translateX(0px)`;
    cicrleFirst.style.flex = "2";
    cicrleFirst.style.backgroundColor = "#fed700";
    cicrleFirst.style.borderRadius = "2.2rem";
    cicrleSecond.style.flex = "1";
    cicrleSecond.style.backgroundColor = "#ddd";
    cicrleSecond.style.borderRadius = "50%";
    cicrleThird.style.flex = "1";
    cicrleThird.style.backgroundColor = "#ddd";
    cicrleThird.style.borderRadius = "50%";
});

// header

const btnMenuTV = $(".header__footer__child__selec__tv");
const btnMenuSmartPhone = $(".header__footer__child__selec__smartPhone");
const btnMenuLaptop = $(".header__footer__child__selec__laptop");
const btnMenuGadget = $(".header__footer__child__selec__gadget");
const btnMenuCamera = $(".header__footer__child__selec__camera");
const btnMenuMovie = $(".header__footer__child__selec__movie");

const btnMenuTVChild = $(".header__footer__child__selec__tv__list");
const btnMenuSmartPhoneChild = $(".header__footer__child__selec__smartPhone__list");
const btnMenuLaptopChild = $(".header__footer__child__selec__laptop__list");
const btnMenuGadgetChild = $(".header__footer__child__selec__gadget__list");
const btnMenuCameraChild = $(".header__footer__child__selec__camera__list");
const btnMenuMovieChild = $(".header__footer__child__selec__movie__list");
const btnMenu = $(".header__footer__mobile__root__icon"); 
const header = $(".header"); 
const MenuList = $(".header__footer__child"); 
const wrapperList = $(".header__footer__child__selec");
const mobile = $(".header__footer__mobile");

const btnGlass = $('.header__footer__mobile__user__glass');
const mainInput = $(".header__footer__mobile__user__glass__input");

const iconGlass = $(".header__footer__mobile__user__glass__icon"); 
const iconExit = $(".header__footer__mobile__user__exit__icon"); 

const btnTVHeader = $(".header__footer__child__selec__tv__header");
const btnPhoneHeader = $(".header__footer__child__selec__smartPhone__header");
const btnLaptopHeader = $(".header__footer__child__selec__laptop__header");
const btnGadGetHeader = $(".header__footer__child__selec__gadget__header");
const btnCameraHeader = $(".header__footer__child__selec__camera__header");
const btnMovieHeader = $(".header__footer__child__selec__movie__header");

var withScreen;

btnMenuTV.addEventListener("click", (e) => {
    if(withScreen < 1230 || window.innerWidth < 1230)
    {
        btnMenuTVChild.classList.toggle("ShowList");
        btnTVHeader.classList.toggle("paddingClick");
    }
})
btnMenuSmartPhone.addEventListener("click", (e) => {
    if(withScreen < 1230 || window.innerWidth < 1230)
    {
        btnMenuSmartPhoneChild.classList.toggle("ShowList");
        btnPhoneHeader.classList.toggle("paddingClick");
    }
})
btnMenuLaptop.addEventListener("click", (e) => {
    if(withScreen < 1230 || window.innerWidth < 1230)
    {
        btnMenuLaptopChild.classList.toggle("ShowList");
        btnLaptopHeader.classList.toggle("paddingClick");
    }
})
btnMenuGadget.addEventListener("click", (e) => {
    if(withScreen < 1230 || window.innerWidth < 1230)
    {
        btnMenuGadgetChild.classList.toggle("ShowList");
        btnGadGetHeader.classList.toggle("paddingClick");
    }
})
btnMenuCamera.addEventListener("click", (e) => {
    if(withScreen < 1230 || window.innerWidth < 1230)
    {
        btnMenuCameraChild.classList.toggle("ShowList");
        btnCameraHeader.classList.toggle("paddingClick");
    }
})
btnMenuMovie.addEventListener("click", (e) => {
    if(withScreen < 1230 || window.innerWidth < 1230)
    {
        btnMenuMovieChild.classList.toggle("ShowList");
        btnMovieHeader.classList.toggle("paddingClick");
    }
})

btnMenuTVChild.addEventListener("click", (e) => {
    e.stopPropagation();
})
btnMenuSmartPhoneChild.addEventListener("click", (e) => {
    e.stopPropagation();
})
btnMenuLaptopChild.addEventListener("click", (e) => {
    e.stopPropagation();
})
btnMenuGadgetChild.addEventListener("click", (e) => {
    e.stopPropagation();
})
btnMenuCameraChild.addEventListener("click", (e) => {
    e.stopPropagation();
})
btnMenuMovieChild.addEventListener("click", (e) => {
    e.stopPropagation();
})



btnMenu.addEventListener("click", (e) => {
    e.stopPropagation();
    header.classList.add("header--mobile");
    MenuList.style.display = "block";
})

wrapperList.addEventListener("click", (e) => {
    e.stopPropagation();
})

header.addEventListener("click", () => {
    if(withScreen < 1230 || window.innerWidth < 1230)
    {
        header.classList.remove("header--mobile");
        MenuList.style.display = "none";
    }
})

window.addEventListener("resize",  (e) => {
    withScreen = e.target.innerWidth;
})

mainInput.addEventListener("click",  (e) => {
    e.stopPropagation();
})

btnGlass.addEventListener("click", () => {
    mainInput.classList.toggle("ShowList--flex");
    iconGlass.classList.toggle("HideList");
    iconExit.classList.toggle("ShowList");
})



  