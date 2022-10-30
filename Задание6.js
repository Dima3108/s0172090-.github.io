function check_count() {
    var reader = document.getElementById("count_reader");
    var span_ = document.getElementById("span_count");
    var res_ = document.getElementById("res_price");
    res_.textContent = "";
    if (reader.value < 0) {
        span_.textContent = "Значение должнобыть >= 0";
        reader.value = 0;
        return false;
    }
    else {
        span_.textContent = "";
        return true;
    }
}
function check_price() {
    var reader = document.getElementById("price_reader");
    var span_w = document.getElementById("span_price");
    var res_ = document.getElementById("res_price");
    res_.textContent = "";
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
function calculate() {
    var count_ = document.getElementById("count_reader");
    var price_ = document.getElementById("price_lab");
    var total = count_.value * parseInt(price_.textContent);
    var res_ = document.getElementById("res_price");
    res_.textContent = "Итоговая стоимость:" + String(total);
    return true;
}
var count_r = document.getElementById("count_reader");
count_r.addEventListener("change", check_count, false);
//var price_r = document.getElementById("price_reader");
//price_r.addEventListener("change", check_price, false);
var sum_button = document.getElementById("s_but");
sum_button.addEventListener("click", calculate, false);
var s = document.getElementById("count_reader");
s.addEventListener("change", calculate);
var Model={
    "Category":"value",
    "Price":12,
    "IsOption1":false,
    "IsOption2":false,
    "IsOption3":false,
    "IsProperty":0
};
let Tovars=[
  {
        Category:"c1",
        Price:32,
        IsOption1:false,
        IsOption2:false,
        IsOption3:false,
        IsProperty:0
    },
    {
        Category: "c2",
        Price: 42,
        IsOption1: false,
        IsOption2: false,
        IsOption3: false,
        IsProperty: 0
    },
    {
        Category: "c3",
        Price: 52,
        IsOption1: false,
        IsOption2: false,
        IsOption3: false,
        IsProperty: 0
    }
];
function SetCategory(){
    var l_price = document.getElementById("price_lab");
    var div_opt=document.getElementById("Options");
    var div_prop = document.getElementById("Property");
    for(var i=1;i<=3;i++)
    {
        var opt_=document.getElementById("ope"+i);
        if(opt_.selected==true)
        {
          l_price.textContent=ComputePrice(Tovars[i-1]);
          if(i==1){
              div_opt.style.display="block";
              div_prop.style.display="none";
          }
          else{
            div_opt.style.display="none";
            if(i==2){
               div_prop.style.display="block";
            }
            else{
                div_prop.style.display="none";
            }
          }
         // break;
        }
    }
}
function ComputePrice( model_){
    var start_price=0;
   start_price+=  model_.Price;
    if(model_.IsOption1==true){
        start_price+=5;
    }
    if(model_.IsOption2==true){
        start_price+=25;
    }
    if(model_.IsOption3){
        start_price+=65;
    }
    start_price+=2*model_.IsProperty;
    return start_price;
}
var sel = document.getElementById("sel_po");
sel.addEventListener("change",SetCategory);
for(var i=1;i<=3;i++){
    var option_=document.createElement("option");
    option_.id="ope"+i;
    option_.value=i;
    option_.textContent=Tovars[i-1].Category;
    option_.addEventListener("change",SetCategory)
    if(i==1){
        option_.select="selected";
    }
    
    sel.appendChild(option_);
}
function ChecedOption(){
    let p=0;
    for(var i=1;i<=3;i++){
        var sel = document.getElementById("ope" + i);
        if(sel.selected==true){
            p=i-1;

        }
    }
    for(var i=1;i<=3;i++){
      var r_but=document.getElementById("_Isoption"+i);
      if(r_but.checked==true){
        Tovars[p]["IsOption"+i]=true;
      }
      else{
          Tovars[p]["IsOption" + i] = false;
      }
    }
    SetCategory();
}
var div_opt = document.getElementById("Options");
div_opt.display="none";
var sel_=document.createElement("div");
//sel_.style.display="none";
for(var i=1;i<=3;i++){
    var options=document.createElement("input");
    options.type="radio";
    options.id="_Isoption"+i;
    options.addEventListener("click",ChecedOption);
    options.name="opt";
    if(i==1){
        options.checked=true;
    }
   // options.textContent="Опция"+i;
   var l_opt=document.createElement("label");
    l_opt.textContent = "Доп Опция" + i;
    options.value = i;
    l_opt.appendChild(options);
    sel_.appendChild(l_opt);
    //sel_.appendChild(options);
}
function ChecedProp(){
for(var i=1;i<=3;i++){
    var opt_=document.getElementById("ope"+i);
    if(opt_.selected==true){
        let sum=0;
        for(var l=1;l<=4;l++){
            var ch_=document.getElementById("pr"+l);
            if (ch_.checked==true){
                sum+=4*i;
            }
        }
        Tovars[i-1].IsProperty=sum;
       
    }
} 
SetCategory();
}
div_opt.appendChild(sel_);
var prop_div = document.getElementById("Property");
prop_div.style.display="none";
for(var i=1;i<=4;i++){
    var check_prop=document.createElement("input");
    check_prop.id="pr"+i;
    check_prop.type ="checkbox";
    check_prop.value=i;
    //check_prop.textContent="Свойство"+i;
    var l_ch=document.createElement("label");
    l_ch.textContent = "Доп Свойство" + i;;
    check_prop.addEventListener("click",ChecedProp);
    prop_div.appendChild(l_ch);
    prop_div.appendChild(check_prop);
}
window.addEventListener("DOMContentLoaded", SetCategory);























































//<script>
/* JSON задает объект JavaScript перечислением полей и значений.
    // Может содержать вложенные массивы и объекты.
    let params = {
        "param1": "value1",
    "param2": "value2",
    "numParam": 100,
    "myArrayParam": [
    1, 2, 3,
    "string",
    {"obj": []}
    ]
};

    console.log(params);


    // Из баз данных или по сети получаем JSON обычно в виде строки и десериализуем с помощью метода JSON.parse()
    let stringParams = '[{"sku": "0001", "price": 100, "title": "Красная кружка"}, {"sku": "0002", "price": 200, "title": "Синяя футболка"}]';
    params = JSON.parse(stringParams);
    console.log(params);
    // Распечатываем данные первого товара.
    console.log(params[0]);*/
//</script>