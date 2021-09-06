var tree = document.querySelectorAll('path');

for (let i = 0; i < tree.length; i++) {
    tree[i].addEventListener("click", function(ev) {
        if(ev.target.tagName === 'path') {
            for (let j = 0; j < tree.length; j++) {
                tree[j].classList.toggle("fadeOut");
            }
        }
    }, false);
}