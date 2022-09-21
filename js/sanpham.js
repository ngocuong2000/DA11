$('.nav-link-cart').click(function () {
    $('.cart-wrap').css({
        'display': 'block',
    });
});

$('.cart-close').click(function () {
    $('.cart-wrap').css({
        'display': 'none',
    });
});

let allproduct = []
const btns = $('.btn-product')
const parent_btns = $('.main__list-outside')
const span_quantity = $('#quantity').attr('num')
// console.log(span_quantity);
var allcoast = 0

$('.btn-product').click(function () {
    // console.log($(this).text());
    let coast = $(this).siblings().children('.item-btm').children().children("span").attr('data-value');
    // console.log(coast);
    var img = $(this).siblings().children('.item-img').children("img").attr('src')
    // console.log(img);
    var name = $(this).siblings().children('.item-name').text()
    // console.log(name);
    var quantity = 1
    var total = (parseInt(quantity) * coast)
    var infoProduct = new Array(img, name, coast, quantity, total)
    // console.log(infoProduct);
    allcoast += parseInt(total)
    var add = true
    for (let i = 0; i < allproduct.length; i++) {
        if (name === allproduct[i][1]) {
            add = false
            allproduct[i][3] += 1
            // console.log(allproduct[i][2]);
            allproduct[i][4] = parseInt(allproduct[i][3] * allproduct[i][2])
            // console.log(allproduct[i][3]);
            break
        }
    }
    if (add) {
        allproduct.push(infoProduct)
        // console.log(allproduct);
    }
    sessionStorage.setItem("allproduct", JSON.stringify(allproduct))

    showProduct()
    totalproduct()
    addQuantity()

});

// var quantity_input = document.getElementsByClassName('.price');
// console.log(quantity_input);

// for (let i = 0; i < btns.length; i++) {
//     $(btns[i]).click(()=>{
//         var add = true
//         var quantity = 1
//         var img = $('.main__list-outside .item-card .item-card-link .item-img img')[i].innerText
//         var name = $('.main__list-outside .item-card .item-card-link .item-name')[i].innerText
//         var coast = parseInt($('.main__list-outside .item-card .item-card-link .item-btm .mb-0')[i].children[0].innerText).toFixed(4)
//         var total = (parseInt(quantity) * coast).toFixed(4)
//         var infoProduct = new Array(img, name, coast, quantity, total)
//         allcoast += parseInt(total)
//         allcoast = parseInt(allcoast)

//         for (let j = 0; j < allproduct.length; j++) {
//             if (name === allproduct[j][1]) {
//                 add = false
//                 allproduct[j][3] += 1
//                 allproduct[j][4] = parseInt(allproduct[j][2] * allproduct[j][3]).toFixed(4)
//                 // console.log(name);
//                 break
//             }
//         }
//         if (add) {
//             allproduct.push(infoProduct)
//         }

//         sessionStorage.setItem("allproduct", JSON.stringify(allproduct))

//         showProduct()
//         totalproduct()
//         addQuantity()

//     })
// }

function totalproduct() {
    $('.cart-wrap-content-2 .total').text(allcoast)
}

function showProduct() {
    // var name = $(this).siblings().children('.item-name').text()

    var allproduct = JSON.parse(sessionStorage.getItem("allproduct"))
    if (allproduct) {
        var show = document.querySelector('.cart-wrap .cart-wrap-content')
        var t = ""

        for (let i = 0; i < allproduct.length; i++) {
            if (show) {
                t += `
                <div class="d-flex cart-wrap-content-1">
                    <div class="cart-wrap-content-img">
                        <img src="${allproduct[i][0]}" alt="" style="width: 50%">
                    </div>
                    <div class="cart-wrap-content-info">
                        <h3>${allproduct[i][1]}</h3>
                        <p class="price" data-value="2000">Đơn giá: ${allproduct[i][2]}</p>
                        <button class="minus"><i class="fa-solid fa-minus"></i></button>
                        <input type="number" name="soLuong" id="soLuong" value="${allproduct[i][3]}" min="1">
                        <button class="plus"><i class="fa-solid fa-plus"></i></button>
                        <span>Thành tiền: </span>
                        <p class="thanh-tien" data-value="2000">${allproduct[i][4]}</p>
                    </div>
                    <button onclick="deleteProduct(this)" class="delete">xóa</button>
                </div>
                `
            }
        }
        show.innerHTML = t

    }
    $('.minus').click(function () {
        var name = $(this).siblings('h3').text()
        var allproduct = JSON.parse(sessionStorage.getItem("allproduct"))

        for (let j = 0; j < allproduct.length; j++) {
            if (name === allproduct[j][1]) {
                if (allproduct[j][3] > 1) {
                    allproduct[j][3] -= 1
                    $(this).siblings('#soLuong').val(allproduct[j][3])
                    console.log(allproduct[j][3]);
                    allproduct[j][4] = parseInt(allproduct[j][3] * allproduct[j][2])
                    $(this).siblings('.thanh-tien').text(allproduct[j][4]);
                    sessionStorage.setItem("allproduct", JSON.stringify(allproduct))
                    break;
                }

            }
        }
    });
    $('.plus').click(function () {
        var name = $(this).siblings('h3').text()
        var allproduct = JSON.parse(sessionStorage.getItem("allproduct"))
        for (let j = 0; j < allproduct.length; j++) {
            if (name === allproduct[j][1]) {
                allproduct[j][3] += 1
                $(this).siblings('#soLuong').val(allproduct[j][3])
                console.log(allproduct[j][3]);
                allproduct[j][4] = parseInt(allproduct[j][3] * allproduct[j][2])
                $(this).siblings('.thanh-tien').text(allproduct[j][4]);
                sessionStorage.setItem("allproduct", JSON.stringify(allproduct))
                break;
            }
        }
    });
}

function deleteProduct(e) {
    for (let i = 0; i < allproduct.length; ++i) {
        if (e.parentElement.children[1].children[0].innerText == allproduct[i][1]) {
            allcoast -= allproduct[i][4]
            allproduct.splice(i, 1)
            sessionStorage.setItem("allproduct", JSON.stringify(allproduct))
            totalproduct()
            showProduct()
            addQuantity()
        }
    }
}


function deleteAll() {
    allproduct = []
    sessionStorage.setItem("allproduct", JSON.stringify([]))
    allcoast = 0

    showProduct()
    totalproduct()
    addQuantity()

}

function addQuantity() {
    // let q = 0
    // for (let i = 0; i < allproduct.length; i++) {
    //     q += allproduct[i][3]

    // }
    // document.getElementById('quantity').innerText = q

    document.getElementById('quantity').innerText = allproduct.length
}