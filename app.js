let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebar-button");

sidebarBtn.onclick = function() {
    sidebar.classList.toggle("active");
}