$('.nav-link-cart').click(function(){
    $('.cart-wrap').css({
        'display':'block',
    });
});

$('.cart-close').click(function(){
    $('.cart-wrap').css({
        'display':'none',
    });
});



$(document).ready(function(){
    // xử lý onchange trên số lượng
    $('.cart-wrap-content .cart-wrap-content-1 .cart-wrap-content-info input[type="number"]').change(function(){
        // alert($(this).val()); lấy số lượng
        let sl = $(this).val();
        // Lấy đơn giá
        let dg = $(this).siblings('p.price').attr("data-value");
        // alert(dg);
        let tt = parseInt(sl)*parseFloat(dg);
        // cập nhật thành tiền
        $(this).siblings('p.thanh-tien').attr("data-value", tt);
        $(this).siblings('p.thanh-tien').html('Thành tiền '+ tt +'đ');

        tongThanhTien();
    });

    var tongThanhTien = ()=>{
        let tong=0;
        $('.cart-wrap-content .cart-wrap-content-1 .cart-wrap-content-info p.thanh-tien').each(function(){
            let t = $(this).attr("data-value");
            tong += parseFloat(t);
        });
        let ttt = Intl.NumberFormat().format(tong); 
        
        // hiển thị
        $('.cart-wrap-content .cart-wrap-content-2 p.total').text(`${ttt} đ`) ;
    }
});