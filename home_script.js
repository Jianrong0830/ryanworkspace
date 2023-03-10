// 滾動函數
function scrollToObj(obj_id){
    document.getElementById(obj_id).scrollIntoView({behavior: "smooth"});
}
// 滾動至關於我
var intro_btn=document.getElementById('intro');
intro_btn.addEventListener('click',function(){
    scrollToObj('page2')
},false);
// 滾動至頂端
var top_btn=document.getElementById('top');
top_btn.addEventListener('click',function(){
    scrollToObj('page1')
},false);
// ---------------------------------------------------------------------------
// Goole搜尋函數
function google_search(){
    query=document.getElementById('search_bar').value;
    searchUrl = 'http://www.google.com/search?q=' + query;
    window.open(searchUrl, '_blank');
}
// 搜尋觸發(按鈕)
search_btn.addEventListener("click", function(){
    document.getElementById("search_btn").click();
});
// 搜尋觸發(Enter鍵)
var search_bar = document.getElementById("search_bar");
search_bar.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("search_btn").click();
    }
});
// ---------------------------------------------------------------------------
