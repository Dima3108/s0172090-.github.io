function CLOSE_RESULT(){
    var r = document.getElementById("result_div");
    r.style="display:none";
}
function OPEN_FORM(){
    CLOSE_RESULT();
    var q = document.getElementById("contact_form");
    q.style = "display:block";
    history.pushState({ op: 1 }, "title 2", "?op=1");
    var t = document.getElementById("but_obs");
    t.style = "display:none";
}
function CLOSE_FORM(){
    CLOSE_RESULT();
    var q = document.getElementById("contact_form");
    q.style = "display:none";
    history.pushState({ op: 2 }, "title 1", "?");
    var t = document.getElementById("but_obs");
    t.style = "display:block";
}
var b = document.getElementById("but_obs");
b.addEventListener("click", function () {
   /* var q = document.getElementById("contact_form");
    q.style = "display:block";
    history.pushState({ op: 1 }, "title 2", "?op=1");
    var t = document.getElementById("but_obs");
    t.style = "display:none";*/
    OPEN_FORM();
});
var d = document.getElementById("close_but");
d.addEventListener("click", function () {
    /*var q = document.getElementById("contact_form");
    q.style = "display:none";
    history.pushState({ op: 2 }, "title 1", "?");
    var t = document.getElementById("but_obs");
    t.style = "display:block";*/
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
if (window.location.search == "?op=1") {
    OPEN_FORM();
    /*  var q = document.getElementById("contact_form");
    q.style = "display:block";
    history.pushState({ op: 1 }, "title 2", "?op=1");
    var t = document.getElementById("but_obs");
    t.style = "display:none";*/
}
else {
    CLOSE_FORM();
    /*   var q = document.getElementById("contact_form");
     q.style = "display:none";
     history.pushState({ op: 2 }, "title 1", "?");
     var t = document.getElementById("but_obs");
     t.style = "display:block";*/
}
var rb = document.getElementById("b_sumb");
rb.addEventListener("click",function(){
CLOSE_FORM();
    var rf = document.getElementById("result_div");
    rf.style="display:block";
    var f = document.getElementById("out_message");
    f.textContent="Неудалось отправить , повторите попытку.";
});