const dropDownMenu = (button, menu) => {
    const buttonElement = document.getElementById(`${button}`);
    const subMenu = document.getElementById(`${menu}`);
    
    // Automatically hides menu 
    subMenu.style.display = 'none';

    // displays menu on hover
    buttonElement.addEventListener('mouseover', () => {
        subMenu.style.display = 'flex';

        // closes menu when mouse leaves it
        subMenu.addEventListener('mouseleave', () => {
            subMenu.style.display = 'none';
        });
    });
};

export default dropDownMenu;
