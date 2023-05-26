const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const mainList = $(".banner__img__list");
const mainListChild1 = $(".banner__img--cicle1");
const mainListChild2 = $(".banner__img--cicle2");
const mainListChild3 = $(".banner__img--cicle3");

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

const btnBack = $(".banner__img__Back");
const btnNext = $(".banner__img__Next");

const btnTVHeader = $(".header__footer__child__selec__tv__header");
const btnPhoneHeader = $(".header__footer__child__selec__smartPhone__header");
const btnLaptopHeader = $(".header__footer__child__selec__laptop__header");
const btnGadGetHeader = $(".header__footer__child__selec__gadget__header");
const btnCameraHeader = $(".header__footer__child__selec__camera__header");
const btnMovieHeader = $(".header__footer__child__selec__movie__header");

var withScreen;

var count = 0; 

var timeAni;

// body
var inter = setInterval(() => {
    count++;
    if(count > 2)
    {
        count = 0;
    }
    if(count == 0)
    {
        mainListChild1.classList.add("active");
        mainListChild2.classList.remove("active");
        mainListChild3.classList.remove("active");
        timeAni = 0;
    }
    else if(count == 1)
    {
        mainListChild1.classList.remove("active");
        mainListChild2.classList.add("active");
        mainListChild3.classList.remove("active");
        timeAni = 500;
    }
    else
    {
        mainListChild1.classList.remove("active");
        mainListChild2.classList.remove("active");
        mainListChild3.classList.add("active");
        timeAni = 500;
    }
    mainList.style.transform = `translateX(-${100 * count}%) translateX(0px)`
    mainList.style.transition = `all ${timeAni}ms ease 0s`;
}, 2000);

mainListChild1.addEventListener("click", () => {
    clearInterval(inter);
    count = 0;
    mainList.style.transform = `translateX(0%) translateX(0px)`;
    mainListChild1.classList.add("active");
    mainListChild2.classList.remove("active");
    mainListChild3.classList.remove("active");
    mainList.style.transform = `translateX(-${100 * count}%) translateX(0px)`
    mainList.style.transition = `all 500ms ease 0s`;
    inter = setInterval(() => {
        count++;
        if(count > 2)
        {
            count = 0;
        }
        if(count == 0)
        {
            mainListChild1.classList.add("active");
            mainListChild2.classList.remove("active");
            mainListChild3.classList.remove("active");
            timeAni = 0;
        }
        else if(count == 1)
        {
            mainListChild1.classList.remove("active");
            mainListChild2.classList.add("active");
            mainListChild3.classList.remove("active");
            timeAni = 500;
        }
        else
        {
            mainListChild1.classList.remove("active");
            mainListChild2.classList.remove("active");
            mainListChild3.classList.add("active");
            timeAni = 500;
        }
        mainList.style.transform = `translateX(-${100 * count}%) translateX(0px)`
        mainList.style.transition = `all ${timeAni}ms ease 0s`;
    }, 2000)
})

mainListChild2.addEventListener("click", () => {
    clearInterval(inter);
    count = 1;
    mainList.style.transform = `translateX(-100%) translateX(0px)`;
    mainListChild1.classList.remove("active");
    mainListChild2.classList.add("active");
    mainListChild3.classList.remove("active");
    mainList.style.transform = `translateX(-${100 * count}%) translateX(0px)`
    mainList.style.transition = `all 500ms ease 0s`;
    inter = setInterval(() => {
        count++;
        if(count > 2)
        {
            count = 0;
        }
        if(count == 0)
        {
            mainListChild1.classList.add("active");
            mainListChild2.classList.remove("active");
            mainListChild3.classList.remove("active");
            timeAni = 0;
        }
        else if(count == 1)
        {
            mainListChild1.classList.remove("active");
            mainListChild2.classList.add("active");
            mainListChild3.classList.remove("active");
            timeAni = 500;
        }
        else
        {
            mainListChild1.classList.remove("active");
            mainListChild2.classList.remove("active");
            mainListChild3.classList.add("active");
            timeAni = 500;
        }
        mainList.style.transform = `translateX(-${100 * count}%) translateX(0px)`
        mainList.style.transition = `all ${timeAni}ms ease 0s`;
    }, 2000)
})

mainListChild3.addEventListener("click", () => {
    clearInterval(inter);
    count = 2;
    mainList.style.transform = `translateX(-200%) translateX(0px)`;
    mainListChild1.classList.remove("active");
    mainListChild2.classList.remove("active");
    mainListChild3.classList.add("active");
    mainList.style.transform = `translateX(-${100 * count}%) translateX(0px)`
    mainList.style.transition = `all 500ms ease 0s`;
    inter = setInterval(() => {
        count++;
        if(count > 2)
        {
            count = 0;
        }
        if(count == 0)
        {
            mainListChild1.classList.add("active");
            mainListChild2.classList.remove("active");
            mainListChild3.classList.remove("active");
            timeAni = 0;
        }
        else if(count == 1)
        {
            mainListChild1.classList.remove("active");
            mainListChild2.classList.add("active");
            mainListChild3.classList.remove("active");
            timeAni = 500;
        }
        else
        {
            mainListChild1.classList.remove("active");
            mainListChild2.classList.remove("active");
            mainListChild3.classList.add("active");
            timeAni = 500;
        }
        mainList.style.transform = `translateX(-${100 * count}%) translateX(0px)`
        mainList.style.transition = `all ${timeAni}ms ease 0s`;
    }, 2000)
})


btnBack.addEventListener("click", () => {
    clearInterval(inter);
    count--;
    if(count < 0)
    {
        count = 2;
    }
    if(count == 0)
    {
        mainListChild1.classList.add("active");
        mainListChild2.classList.remove("active");
        mainListChild3.classList.remove("active");
        timeAni = 500;
    }
    else if(count == 1)
    {
        mainListChild1.classList.remove("active");
        mainListChild2.classList.add("active");
        mainListChild3.classList.remove("active");
        timeAni = 500;
    }
    else
    {
        mainListChild1.classList.remove("active");
        mainListChild2.classList.remove("active");
        mainListChild3.classList.add("active");
        timeAni = 0;
    }
    mainList.style.transform = `translateX(-${100 * count}%) translateX(0px)`
    mainList.style.transition = `all ${timeAni}ms ease 0s`;
    inter = setInterval(() => {
        count++;
        if(count > 2)
        {
            count = 0;
        }
        if(count == 0)
        {
            mainListChild1.classList.add("active");
            mainListChild2.classList.remove("active");
            mainListChild3.classList.remove("active");
            timeAni = 0;
        }
        else if(count == 1)
        {
            mainListChild1.classList.remove("active");
            mainListChild2.classList.add("active");
            mainListChild3.classList.remove("active");
            timeAni = 500;
        }
        else
        {
            mainListChild1.classList.remove("active");
            mainListChild2.classList.remove("active");
            mainListChild3.classList.add("active");
            timeAni = 500;
        }
        mainList.style.transform = `translateX(-${100 * count}%) translateX(0px)`
        mainList.style.transition = `all ${timeAni}ms ease 0s`;
    }, 2000)
})
btnNext.addEventListener("click", () => {
    clearInterval(inter);
    count++;
    if(count > 2)
    {
        count = 0;
    }
    if(count == 0)
    {
        mainListChild1.classList.add("active");
        mainListChild2.classList.remove("active");
        mainListChild3.classList.remove("active");
        timeAni = 0;
    }
    else if(count == 1)
    {
        mainListChild1.classList.remove("active");
        mainListChild2.classList.add("active");
        mainListChild3.classList.remove("active");
        timeAni = 500;
    }
    else
    {
        mainListChild1.classList.remove("active");
        mainListChild2.classList.remove("active");
        mainListChild3.classList.add("active");
        timeAni = 500;
    }
    mainList.style.transform = `translateX(-${100 * count}%) translateX(0px)`
    mainList.style.transition = `all ${timeAni}ms ease 0s`;
    inter = setInterval(() => {
        count++;
        if(count > 2)
        {
            count = 0;
        }
        if(count == 0)
        {
            mainListChild1.classList.add("active");
            mainListChild2.classList.remove("active");
            mainListChild3.classList.remove("active");
            timeAni = 0;
        }
        else if(count == 1)
        {
            mainListChild1.classList.remove("active");
            mainListChild2.classList.add("active");
            mainListChild3.classList.remove("active");
            timeAni = 500;
        }
        else
        {
            mainListChild1.classList.remove("active");
            mainListChild2.classList.remove("active");
            mainListChild3.classList.add("active");
            timeAni = 500;
        }
        mainList.style.transform = `translateX(-${100 * count}%) translateX(0px)`
        mainList.style.transition = `all ${timeAni}ms ease 0s`;
    }, 2000)
})
// body

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