function toggleSearch() {
    var searchInput = document.getElementById('anggi-searchInput');
    if (searchInput.style.display === 'none') {
        searchInput.style.display = 'inline-block';
    } else {
        searchInput.style.display = 'none';
    }
}

// menu
function toggleMenu() {
    const menu = document.getElementById("anggi-menu");
    const menuIcon = document.querySelector(".anggi-menu-icon");

    // Toggle kelas untuk menampilkan/menyembunyikan menu
    menu.classList.toggle("anggi-menu-active");

    // Toggle kelas untuk mengubah ikon menu menjadi “X”
    menuIcon.classList.toggle("active");
}




