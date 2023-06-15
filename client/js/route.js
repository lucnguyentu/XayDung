// Hàm điều hướng đến trang tương ứng
function navigateTo(page) {
    // Ẩn tất cả các trang
    var pages = document.getElementsByClassName('page');
    for (var i = 0; i < pages.length; i++) {
        pages[i].classList.remove('active');
    }

    // Hiển thị trang được chọn
    var selectedPage = document.getElementById(page);
    selectedPage.classList.add('active');
}
