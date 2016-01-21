//1.数据定义（实际生产环境中，应由后台给出）
var data=[
    {img:1,h2:'Creative',h3:'DUET'},
    {img:2,h2:'Friendly',h3:'DEVIL'},
    {img:3,h2:'Tranquilent',h3:'COMPATRIOT'},
    {img:4,h2:'Insecure',h3:'HUSSLER'},
    {img:5,h2:'Loving',h3:'REBEL'},
    {img:6,h2:'Passionate',h3:'SEEKER'},
    {img:7,h2:'Crazy',h3:'FRIEND'}
];

//2.通用函数
var g = function(id){
    if(id.substr(0,1)=='.'){
        return document.getElementsByClassName(id.substr(1));
    }
    return document.getElementById(id);
};

//3.添加幻灯片的操作（所有幻灯片&对应的按钮）
function addSliders(){
  //3.1获取模板
    var tpl_main = g('template_main').innerHTML.replace(/^\s*/,'').replace(/\s*$/,'');
    var tpl_ctrl = g('template_ctrl').innerHTML.replace(/^\s*/,'').replace(/\s*$/,'');
}

//4.定义何时处理幻灯片输出
window.onload = function(){
    addSliders();
};