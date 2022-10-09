function check_count(){
    var reader=document.getElementById("count_reader");
    var span_=document.getElementById("span_count");
    //var res_ = document.getElementById("res_price");
    //res_.textContent = "";
    if(reader.value<0){
        span_.textContent="Значение должнобыть >= 0";
        reader.value=0;
        return false;
    }
    else{
        span_.textContent="";
        return true;
    } 
}
function check_price(){
    var reader = document.getElementById("price_reader");
    var span_w = document.getElementById("span_price");
   // var res_ = document.getElementById("res_price");
    //res_.textContent = "";
    if (reader.value <= 0) {
        span_w.textContent = "Значение должнобыть > 0";
        reader.value = 0;
        return false;
    }
    else {
        span_w.textContent = "";
        return true;
    }
}
function calculate(){
    var count_=document.getElementById("count_reader");
    var price_=document.getElementById("price_reader");
    var total= count_.value*price_.value;
    var res_ = document.getElementById("res_price");
    res_.textContent="Итоговая стоимость:"+String(total);
    return true;
}
var count_r = document.getElementById("count_reader");
count_r.addEventListener("change",check_count,false);
var price_r=document.getElementById("price_reader");
price_r.addEventListener("change",check_price,false);
var sum_button=document.getElementById("s_but");
sum_button.addEventListener("click",calculate,false);