//1.���ݶ��壨ʵ�����������У�Ӧ�ɺ�̨������
var data=[
    {img:1,h2:'Creative',h3:'DUET'},
    {img:2,h2:'Friendly',h3:'DEVIL'},
    {img:3,h2:'Tranquilent',h3:'COMPATRIOT'},
    {img:4,h2:'Insecure',h3:'HUSSLER'},
    {img:5,h2:'Loving',h3:'REBEL'},
    {img:6,h2:'Passionate',h3:'SEEKER'},
    {img:7,h2:'Crazy',h3:'FRIEND'}
];

//2.ͨ�ú���
var g = function(id){
    if(id.substr(0,1)=='.'){
        return document.getElementsByClassName(id.substr(1));
    }
    return document.getElementById(id);
};

//3.��ӻõ�Ƭ�Ĳ��������лõ�Ƭ&��Ӧ�İ�ť��
function addSliders(){
  //3.1��ȡģ��
    var tpl_main = g('template_main').innerHTML.replace(/^\s*/,'').replace(/\s*$/,'');
    var tpl_ctrl = g('template_ctrl').innerHTML.replace(/^\s*/,'').replace(/\s*$/,'');
}

//4.�����ʱ����õ�Ƭ���
window.onload = function(){
    addSliders();
};