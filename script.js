// 滾動函數
function scrollToObj(obj_id){
    document.getElementById(obj_id).scrollIntoView({behavior: "smooth"});
}

// 滾動至關於我
document.addEventListener('DOMContentLoaded', function() {
    var navBar_aboutMe_div = document.getElementById('navBar_aboutMe_div');
    navBar_aboutMe_div.addEventListener('click',function(){
        scrollToObj('page2_div');
    },false);
});

// 滾動至頂端
document.addEventListener('DOMContentLoaded', function() {
    var navBar_top_div = document.getElementById('navBar_top_div');
    navBar_top_div.addEventListener('click',function(){
        scrollToObj('page1_div');
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

document.addEventListener('DOMContentLoaded', function() {
    var mediaBar_trigger_div = document.getElementById('mediaBar_trigger_div');
    var mediaBar_div = document.getElementById('mediaBar_div');
    mediaBar_trigger_div.addEventListener('click', function(e) {
        e.stopPropagation();    //
        mediaBar_div.style.visibility = 'visible';
        mediaBar_div.style.opacity = '1';
    });
    document.addEventListener('click', function() {
        mediaBar_div.style.opacity = '0';
        mediaBar_div.style.visibility = 'hidden';
    });
    mediaBar_div.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});