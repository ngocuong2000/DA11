$(document).ready(function() {

    $('#imageGallery').lightSlider({
        gallery:true,
        item:1,
        loop:true,
        thumbItem:3,
        slideMargin:0,
        enableDrag: false,
        currentPagerPosition:'left',
        // onSliderLoad: function(el) {
        //     el.lightGallery({
        //         selector: '#imageGallery .lslide'
        //     });
        // },   
        // pager: true,
        
        prevHtml: "<i class='fa-solid fa-circle-chevron-up '></i>",
        nextHtml: "<i class='fa-solid fa-circle-chevron-down '></i>",
        
    });  
    $('#imageGallery').lightSlider({ autoWidth: true, enableDrag: false });

  });

  $(document).ready(function () {
    $(document).ready(function () {

        $('#vertical').lightSlider({
            gallery: true,
            item: 1,
            loop:true,
            vertical: true,
            verticalHeight: 295,
            vThumbWidth: 50,
            thumbItem: 8,
            thumbMargin: 4,
            slideMargin: 0,
            prevHtml: "<i class='fa-solid fa-circle-chevron-up '></i>",
            nextHtml: "<i class='fa-solid fa-circle-chevron-down '></i>",
        });
        $('#vertical').lightSlider({ autoWidth: true, enableDrag: false });

    });


});