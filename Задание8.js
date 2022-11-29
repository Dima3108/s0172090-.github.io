function CLEAR_FORM(){
    var u_name = document.getElementById("us_name");
    u_name.value="";
    var us_e = document.getElementById("us_email");
    us_e.value="";
    var u_comm = document.getElementById("us_comment");
    u_comm.value="";
}
function CLOSE_RESULT(){
    var r = document.getElementById("result_div");
    r.style="display:none";
}
function OPEN_FORM(){
    CLOSE_RESULT();
    var q = document.getElementById("contact_form");
    q.style = "display:block";
    history.pushState({ op: 1 }, "title 1", "?op=1");
    window.history.forward()
    var t = document.getElementById("but_obs");
    t.style = "display:none";
    var w = document.getElementById("close_but");
    w.style = "display:block";
}
function CLOSE_FORM(){
    CLOSE_RESULT();
    var q = document.getElementById("contact_form");
    q.style = "display:none";
     history.pushState({}, "title 1", "");
    
    history.forward();
   // history.replaceState({ op }, "title1", "");
    var t = document.getElementById("but_obs");
    t.style = "display:block";
    var w = document.getElementById("close_but");
    w.style = "display:none";
}
window.onpopstate = (event) => {
    if (window.location.search == "?op=1") {
        OPEN_FORM();

    }
    else {
        CLOSE_FORM();

    }
}
/*document.addEventListener("load", function () {
    if (window.location.search == "?op=1") {
        OPEN_FORM();

    }
    else {
        CLOSE_FORM();

    }
});*/
var b = document.getElementById("but_obs");
b.addEventListener("click", function () {
  
    OPEN_FORM();
});
var d = document.getElementById("close_but");
d.addEventListener("click", function () {
  
   CLOSE_FORM();
});
var us_n = document.getElementById("us_name");
us_n.addEventListener("change", function () {
    var value = String(document.getElementById("us_name").value);
    localStorage.setItem("user_name", value);
});
var us_e = document.getElementById("us_email");
us_e.addEventListener("change", function () {
    var value = String(document.getElementById("us_email").value);
    localStorage.setItem("user_mail", value);
});
var us_c = document.getElementById("us_comment");
us_c.addEventListener("change", function () {
    var value = String(document.getElementById("us_comment").value);
    localStorage.setItem("user_comment", value);
});
if (localStorage.getItem("user_name") != null) {
    var us_n = document.getElementById("us_name");
    us_n.value = localStorage.getItem("user_name");
}
if (localStorage.getItem("user_mail") != null) {
    var us_e = document.getElementById("us_email");
    us_e.value = localStorage.getItem("user_mail");
}
if (localStorage.getItem("user_comment") != null) {
    var us_c = document.getElementById("us_comment");
    us_c.value = localStorage.getItem("user_comment");
}
if (localStorage.getItem("cesh_err")!=null){
    var m = document.getElementById("cesh_mes");
    m.textContent = localStorage.getItem("cesh_err");
    localStorage.removeItem("cesh_err");
}
if (window.location.search=="?op=1") {
    OPEN_FORM();

}
else {
    CLOSE_FORM();
  
}
function CONTAINS_CHARS(value){
    var v=String(value);
    if(v==null||v=="")
    return false;
    for(var i=0;i<v.length;i++)
    {
        if(v.charAt(i)!=' '){
            return true;
        }
    }
    return false;
}
var s_button = document.getElementById("b_sumb");
//s_button.addEventListener("click",
function a(){
    let f = document.getElementById("out_message");
    var us_n = document.getElementById("us_name");
    if (!CONTAINS_CHARS(String(us_n.value))) {

        localStorage.setItem("cesh_err", "имя пользователя недолжно быть пустым");
        return false;
    }
    var us_com = document.getElementById("us_comment");
    if (!CONTAINS_CHARS(String(us_com.value))) {
        alert(CONTAINS_CHARS(String(us_com.value)));
        localStorage.setItem("cesh_err", "Коментарий пользователя недолжен быть пустым");
        return false;
    }
    var us_mail = document.getElementById("us_email");
    if (us_mail.value == null || String(us_mail.value) == "") {


        localStorage.setItem("cesh_err", "Email пользователя недолжен быть пустым");
        return false;
    }
    var us_poli = document.getElementById("us_policy");
    if (Boolean(us_poli.value) != true) {


        localStorage.setItem("cesh_err", "Вы недали согласие на обработку данных");
        return false;
    }
    return true;
}
//);