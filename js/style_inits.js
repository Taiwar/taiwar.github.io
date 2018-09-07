document.addEventListener('DOMContentLoaded', function() {
    let sidenav_elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav_elems, {
        menuWidth: 250,
        draggable: true,
        closeOnClick: true,
    });
    let collapsible_elems = document.getElementsByClassName("collapsed");
    Array.from(collapsible_elems).forEach((elem) => {
        elem.addEventListener("click", function() {
            this.classList.toggle("active");
            let content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                elem.firstChild.innerHTML = "expand_more"
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                elem.firstChild.innerHTML = "expand_less"
            }
        });
    });
});