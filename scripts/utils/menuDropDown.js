const btnDrop = document.querySelector('.btn_drop');
const currentSort = document.querySelector('#currentSort');
const filters = Array.from(document.querySelectorAll('.dropdown_content li button'));
let filterSelected = "";
const menu = document.querySelector('.dropdown_content');


export function dropdown(){
    const showHideMenu = () => {
        menu.classList.toggle('active');
        document.querySelector('.arrow').classList.toggle('rotate');
    }
    btnDrop.addEventListener('click', showHideMenu);
} 


function sortByFilter(){
    for(let i = 0; i < filters.length ; i++){
        let filter = filters[i];
        filter.addEventListener('click', function(){
            let filterTxtContent = filter.textContent;
            currentSort.textContent = filterTxtContent;
            if (filterSelected){
                filterSelected.style.display ="block";
            }
            filter.style.display = "none";
            filterSelected = filter;
        });
    }
}
sortByFilter();













