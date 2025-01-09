document.getElementById('menu-button').addEventListener('click', function() {
    const menu = document.getElementById('nav-menu');  
    menu.classList.toggle('show');
    
    // Toggle aria-expanded attribute
    const expanded = menu.classList.contains('show');
    this.setAttribute('aria-expanded', expanded);
});
