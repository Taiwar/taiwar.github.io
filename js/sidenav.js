document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.sidenav');
    let instances = M.Sidenav.init(elems, {
        menuWidth: 250,
        draggable: true,
        closeOnClick: true,
    });
});