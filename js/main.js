document.addEventListener("DOMContentLoaded", () => {

    fetch("header.html")
        .then(res => res.text())
        .then(data => {

            document.getElementById("header").innerHTML = data;

            const burger = document.querySelector(".burger");
            const navLinks = document.getElementById("navLinks");

            if (burger && navLinks) {
                burger.addEventListener("click", () => {
                    navLinks.classList.toggle("active");
                });
            }

        });

    fetch("footer.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });

});