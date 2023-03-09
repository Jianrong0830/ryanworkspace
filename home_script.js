function scrollToObj(obj_id){
    document.getElementById(obj_id).scrollIntoView({behavior: "smooth"});
}
var intro_btn=document.getElementById('intro');
intro_btn.addEventListener('click',function(){
    scrollToObj('page2')
},false);