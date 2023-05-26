const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const main = $(".singleProduct__left__child__header");
const iconRight = $(".singleProduct__left__child__header--iconRight");
const iconDown = $(".singleProduct__left__child__header--iconDown");
const list = $(".singleProduct__left__child__header__list");

main.addEventListener("click", () => {
    list.classList.toggle("ShowList");
    iconRight.classList.toggle("HideList");
    iconDown.classList.toggle("ShowList");
})

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

const inputValue = $(".singleProduct__right__child__right__AvancInfo__quality__input");
const iconUpQua = $(".singleProduct__right__child__right__AvancInfo__quality__upDown__iconUp");
const iconDownQua = $(".singleProduct__right__child__right__AvancInfo__quality__upDown__iconDown");

const btnTVHeader = $(".header__footer__child__selec__tv__header");
const btnPhoneHeader = $(".header__footer__child__selec__smartPhone__header");
const btnLaptopHeader = $(".header__footer__child__selec__laptop__header");
const btnGadGetHeader = $(".header__footer__child__selec__gadget__header");
const btnCameraHeader = $(".header__footer__child__selec__camera__header");
const btnMovieHeader = $(".header__footer__child__selec__movie__header");

var withScreen;

// header
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
// header

var count = 0;

iconUpQua.addEventListener("click", () => {
    count++;
    inputValue.value = count;
})
iconDownQua.addEventListener("click", () => {
    count--;
    if(count < 1)
    {
        count = 1;
    }
    inputValue.value = count;
})