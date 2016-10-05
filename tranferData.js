function data(){
var name = jQuery(".items1");
jQuery.load("ShoppingCart.html",function(){
jQuery(".item").html(name);
});
}

data();