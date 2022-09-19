
$(document).ready(function(){
    // xử lý onchange trên số lượng
    $('.cart-wrap-content .cart-wrap-content-1 .cart-wrap-content-info input[type="number"]').change(function(){
        alert($(this).val());
    });
});