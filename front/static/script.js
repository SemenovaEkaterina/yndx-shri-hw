document.addEventListener('DOMContentLoaded', function () {
    var openedClass = 'dropdown_opened';
    document.querySelectorAll('.dropdown__arrow').forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.target.parentNode.classList.toggle(openedClass);
        })
    });
    document.querySelectorAll('.dropdown__options').forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.currentTarget.parentNode.classList.remove(openedClass);
        })
    });

    document.querySelectorAll('.code__text').forEach((block) => {
        hljs.highlightBlock(block);
    });
});