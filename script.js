// header action
const list = document.querySelectorAll(".header ul li a");
list.forEach((e) => {
    e.addEventListener("click", () => {
        list.forEach((l) => {
            l.classList.remove("active");
        })
        e.classList.add("active");
    })
})

// header action phone mode
const bar = document.querySelector(".bar");
const close = document.querySelector(".close");
bar.addEventListener("click", () => {
    document.querySelector(".header ul ").setAttribute("style",
        "font - family: -apple - system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans - serif; text - decoration: none; color: lavender; font - weight: 580; display: block; background - color: none; height: 60 vh; width: 300px;transform: translate(17px, 130px); padding: auto; border-radius: 10 px;"
    )

    bar.style.display = "none";
})
close.addEventListener("click", () => {
    document.querySelector(".header ul ").style.display = "none";
    bar.style.display = "block";
})