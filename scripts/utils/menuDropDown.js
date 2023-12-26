const btnDrop = document.querySelector('.btn_drop');
const currentSort = document.querySelector('#currentSort');
const filters = Array.from(document.querySelectorAll('.dropdown_content li button'));
let filterSelected = "";
const menu = document.querySelector('.dropdown_content');
const btnTarget = document.querySelector('.dropdown_content li.submenu1 #target');


export function dropdown(){
    btnTarget.style.display="none";
    const showHideMenu = () => {
        document.querySelector('.arrow').classList.remove('rotate');
        menu.classList.add('active');
        menu.classList.remove('displayNone');
    }
    btnDrop.addEventListener('click', showHideMenu);
} 


function sortByFilter(){
    for(let i = 0; i < filters.length ; i++){
        let filter = filters[i];
        filter.addEventListener('click', function(){
            btnTarget.style.display="block";
            let filterTxtContent = filter.textContent;
            currentSort.textContent = filterTxtContent;
            if (filterSelected){
                filterSelected.style.display ="block";
                menu.classList.add('displayNone');
            }
            filterSelected = filter;
            filter.style.display = "none";
            document.querySelector('.arrow').classList.add('rotate');
            menu.classList.remove('active');
    
        });    
    }
}
sortByFilter();













