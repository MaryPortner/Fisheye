export function dropdown(){

    /************** menu dropdown **************/
    const dropdownBtn = document.querySelector(".popularite");
    const dropdownMenu = document.getElementById("dropdown");
    const toggleArrow = document.getElementById("arrow");

    const toggleDropdown = function () {
        dropdownMenu.classList.toggle("show");
        toggleArrow.classList.toggle("arrow");
        dropdownBtn.classList.toggle("border-bottom-radius");
    };

    dropdownBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        toggleDropdown();
    });

    // Ferme quand l'élément du DOM est cliqué
    document.documentElement.addEventListener("click", function() {
        if (dropdownMenu.classList.contains("show")) {
            toggleDropdown();
        }
    });

} 
