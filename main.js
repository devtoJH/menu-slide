let horizontalUnderLine = document.getElementById("horizontal-underline");
let verticalUnderLine = document.getElementById("vertical-underline");

let horizontalMenus = document.querySelectorAll("nav:first-child a");
let verticalMenus = document.querySelectorAll("nav:nth-child(2) a");

horizontalMenus.forEach(menu=>menu.addEventListener("click", (e)=>horizontalIndicator(e)))
//각각의 menu에다가 이벤트를 더할거다(addEventListener) click 이벤트를 더할거다
//click 이벤트가 발생할때마다 (e)=>horizontalIndicator(e)함수를 발생시킬거다
verticalMenus.forEach(menu=>menu.addEventListener("click", (e)=>verticalIndicator(e)))

function horizontalIndicator(e) {
    horizontalUnderLine.style.left = e.currentTarget.offsetLeft + "px";
    horizontalUnderLine.style.width = e.currentTarget.offsetWidth + "px";
    horizontalUnderLine.style.top = 
        e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}
// horizontalUnderLine.style.left(left의 시작값)을 e.currentTarget.offsetLeft(offsetLeft값을 주겠다)
// horizontalUnderLine.style.width(width의 시작값)을 offsetWidth값을 주겠다
// horizontalUnderLine.style.top(top의 시작값)을 offsetTop + offsetHeight값을 주겠다

function verticalIndicator(e) {
    verticalUnderLine.style.left = e.currentTarget.offsetLeft + "px";
    verticalUnderLine.style.width = e.currentTarget.offsetWidth + "px";
    verticalUnderLine.style.top = 
        e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}