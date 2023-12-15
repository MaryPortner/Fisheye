export function dropdown(){

    const btnDrop = document.querySelector('.btn_drop');

    const showHideMenu = () => {
        const menu = document.querySelector('.dropdown_content');
        menu.classList.toggle('active');
        document.querySelector('.arrow').classList.toggle('rotate');

    }
    btnDrop.addEventListener('click', showHideMenu);

} 
