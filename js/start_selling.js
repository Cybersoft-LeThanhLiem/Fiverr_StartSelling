var acc = document.getElementsByClassName("btn-block");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {

        // look for any expanded accordion
        var alreadyExpanded = document.querySelector('.btn-block.active');

        // does it exist and it's not the current selected?
        if (!!alreadyExpanded && alreadyExpanded != this) {
           // well, let's collapse it.
           alreadyExpanded.classList.remove('active');
        }
        this.classList.toggle("active");
    });
}