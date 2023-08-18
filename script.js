// 滾動函數
function scrollToObj(obj_id){
    document.getElementById(obj_id).scrollIntoView({behavior: "smooth"});
}

// 滾動至頂端
document.addEventListener('DOMContentLoaded', function() {
    var navBar_top_div = document.getElementById('navBar_top_div');
    navBar_top_div.addEventListener('click',function(){
        scrollToObj('page1_div');
    },false);

    var menu_home_div = document.getElementById('menu_home_div');
    menu_home_div.addEventListener('click',function(){
        menu_home_div.classList.add('active');
        setTimeout(function() {
            menu_home_div.classList.remove('active');
        }, 100);
        scrollToObj('page1_div');
    },false);
});

// 滾動至關於我
document.addEventListener('DOMContentLoaded', function() {
    var navBar_aboutMe_div = document.getElementById('navBar_aboutMe_div');
    navBar_aboutMe_div.addEventListener('click',function(){
        scrollToObj('page2_div');
    },false);
    
    var menu_aboutMe_div = document.getElementById('menu_aboutMe_div');
    menu_aboutMe_div.addEventListener('click',function(){
        menu_aboutMe_div.classList.add('active');
        setTimeout(function() {
            menu_aboutMe_div.classList.remove('active');
        }, 100);
        scrollToObj('page2_div');
    },false);
});

// 滾動至專案區
document.addEventListener('DOMContentLoaded', function() {
    var menu_event_div = document.getElementById('menu_event_div');
    menu_event_div.addEventListener('click',function(){
        menu_event_div.classList.add('active');
        setTimeout(function() {
            menu_event_div.classList.remove('active');
        }, 100);
        scrollToObj('page3_div');
    },false);
});

// Goole搜尋函數
function google_search(){
    var query=document.getElementById('searchBar_input').value;
    searchUrl = 'http://www.google.com/search?q=' + query;
    window.open(searchUrl, '_blank');
}

// 搜尋觸發(按鈕)
document.addEventListener('DOMContentLoaded', function() {
    var searchBar_btn=document.getElementById('searchBar_btn');
    searchBar_btn.addEventListener("click", function(){
        google_search();
    });
});

// 搜尋觸發(Enter鍵)
document.addEventListener('DOMContentLoaded', function() {
    var searchBar_input=document.getElementById('searchBar_input');
    searchBar_input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            google_search();
        }
    });
});

// 媒體列
document.addEventListener('DOMContentLoaded', function() {
    var mediaBar_trigger_div = document.getElementById('mediaBar_trigger_div');
    var mediaBar_div = document.getElementById('mediaBar_div');
    var flag = false;

    // 點擊
    mediaBar_trigger_div.addEventListener('click', function(e) {
        flag = true;
        e.stopPropagation();
        mediaBar_trigger_div.style.visibility = 'hidden';
        mediaBar_div.style.visibility = 'visible';
        mediaBar_div.style.opacity = '1';
        setTimeout(function() {
            flag = false;
        }, 10);
    });

    // 滑過
    mediaBar_trigger_div.addEventListener('mouseenter', function(e) {
        mediaBar_trigger_div.click();
    });
    
    // 消失
    document.addEventListener('click', function(e) {
        if (flag) {
            e.stopPropagation();
            return;
        }
        mediaBar_div.style.opacity = '0';
        mediaBar_div.style.visibility = 'hidden';
        mediaBar_trigger_div.style.visibility = 'visible';
    });
});

// 選單
document.addEventListener('DOMContentLoaded', function() {
    var navBar_menu_div = document.getElementById('navBar_menu_div');
    var menu_div = document.getElementById('menu_div');
    var isElementVisible = false;

    function toggleSlide() {
        if (!isElementVisible) {
            menu_div.style.animation = 'slideIn 0.5s forwards';
            isElementVisible = true;
        } else {
            menu_div.style.animation = 'slideOut 0.5s forwards';
            isElementVisible = false;
        }
    }
    // 點擊選單按鈕
    navBar_menu_div.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleSlide()
    });
});