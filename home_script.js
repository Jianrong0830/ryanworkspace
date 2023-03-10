// 滾動函數
function scrollToObj(obj_id){
    document.getElementById(obj_id).scrollIntoView({behavior: "smooth"});
}

// 滾動至關於我
var intro_btn=document.getElementById('intro');
intro_btn.addEventListener('click',function(){
    scrollToObj('page2')
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
var chatWidget = new window.OpenAIChatWidget({
    container: document.getElementById("chat-container"),
    // 您的OpenAI API密鑰
    token: "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",
    // 聊天小工具標題
    title: "Chat with ChatGPT",
    // 您希望與ChatGPT聊天的初始消息
    initPayload: "/get_started",
});