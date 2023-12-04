const arrows = document.querySelectorAll(".arrow");
const productLists = document.querySelectorAll(".product-list");

arrows.forEach((arrow, i) => {
    const widthRatio = Math.floor(window.innerWidth / 300);
    let clickCounter = 0;
    const imageItem = productLists[i].querySelectorAll("img").length;
    console.log(imageItem);
    arrow.addEventListener("click", function () {
        clickCounter++;
        if (imageItem - (4 + clickCounter) + (4 - widthRatio) >= 0) {
            productLists[i].style.transform = `translateX(${
                productLists[i].computedStyleMap().get
                ("transform")[0].x.value - 300}px) `;

        } else {
            productLists[i].style.transform = "translateX(0)";
            clickCounter=0;
        }
    });
    
});