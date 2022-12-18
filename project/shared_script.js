document.addEventListener("DOMContentLoaded",function(){
    var val = document.getElementById("h3mainid");
    val.style = "font-family:'Montserrat'";
    const HEADERS = ['Тарифы', 'Home', 'Отзывы', 'Контакты','Достижения'];
    const IDS = ['taid', 'hoid', 'otid', 'koid','ndid'];
    var p=0;
    var str=String(val.textContent);
    for(var i=0;i<IDS.length;i++){
        var el=document.getElementById(IDS[i]);
        el.style ="color:white;font-family:'Montserrat'";
        if(str==HEADERS[i]){
            p=i;
        }
    }
    var st=document.getElementById(IDS[p]);
    st.style="color:green";
});