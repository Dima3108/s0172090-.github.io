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
    var price_ = document.getElementById("price_reader");
    var total = count_.value * price_.value;
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
        IsOption3:0
    },
    {
        Category: "c2",
        Price: 42,
        IsOption1: false,
        IsOption2: false,
        IsOption3: false,
        IsOption3: 0
    },
    {
        Category: "c3",
        Price: 52,
        IsOption1: false,
        IsOption2: false,
        IsOption3: false,
        IsOption3: 0
    }
];
function SetCategory(){

}
function ComputePrice( model_){
    var start_price=model_.Price;
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
for(var i=1;i<=3;i++){
    var option_=document.createElement("option");
    option_.id="ope"+i;
    option_.value=i;
    option_.textContent=Tovars[i-1].Category;
    if(i==1){
        option_.selected=true;
    }
    option_.addEventListener("change",SetCategory)
    sel.appendChild(option_);
}




























































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