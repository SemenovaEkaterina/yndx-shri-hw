document.addEventListener('DOMContentLoaded', function () {
    var openedClass = 'Dropdown_opened';
    document.querySelectorAll('.Dropdown-arrow').forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.target.parentNode.classList.toggle(openedClass);
        })
    });
    document.querySelectorAll('.Dropdown-options').forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.currentTarget.parentNode.classList.remove(openedClass);
        })
    });

    document.querySelectorAll('.Code-text').forEach((block) => {
        hljs.highlightBlock(block);
    });
});