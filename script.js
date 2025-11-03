const header = document.querySelector("header");
const menuIcon = document.querySelector("#menu-icon");
const navigation = document.querySelector(".navigation");

// لتغيير لون الهيدر عند التمرير
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", this.window.scrollY > 0);
});

// لتشغيل قائمة الهامبرغر
menuIcon.addEventListener("click", () => {
    navigation.classList.toggle("active"); // إضافة/إزالة كلاس 'active' من قائمة التنقل
    menuIcon.classList.toggle("bx-x"); // تغيير أيقونة الهامبرغر إلى X عند الفتح والعكس
});

// إغلاق القائمة عند النقر على أي رابط داخلها
navigation.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navigation.classList.remove("active");
        menuIcon.classList.remove("bx-x");
    });
});