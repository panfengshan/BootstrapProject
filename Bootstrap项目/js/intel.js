//鼠标悬停时弹出遮罩层
$('[data-toggle="mask"]').hover(function(){
    $(this).css({top:'0'});
},function(){
    $(this).css({top:'80%'});
});