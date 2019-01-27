$('#search__box').keyup(function(){
    let value = $(this).val().toLowerCase();
     if(value == ""){
         $('.image_gallery').show();
     } else {
         $('img').each(function(){
             let caption = $(this).attr("alt").toLowerCase();
             (caption.indexOf(value) >= 0) ? $(this).parents('a').parents('.image_gallery').show() : $(this).parents('a').parents('.image_gallery').hide();
         });
    };
 });