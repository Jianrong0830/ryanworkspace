// 滾動函數
function scrollToObj(obj_id){
    document.getElementById(obj_id).scrollIntoView({behavior: "smooth"});
}
// 滾動至關於我
navBar_intro_div.addEventListener('click',function(){
    scrollToObj('page2_div')
},false);
// 滾動至頂端
navBar_top_div.addEventListener('click',function(){
    scrollToObj('page1_div')
},false);
// ---------------------------------------------------------------------------
// Goole搜尋函數
function google_search(){
    query=document.getElementById('googleSearch_bar').value;
    searchUrl = 'http://www.google.com/search?q=' + query;
    window.open(searchUrl, '_blank');
}
// 搜尋觸發(按鈕)
googleSearch_btn.addEventListener("click", function(){
    document.getElementById("googleSearch_btn").click();
});
// 搜尋觸發(Enter鍵)
googleSearch_bar.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("googleSearch_btn").click();
    }
});
// ---------------------------------------------------------------------------
