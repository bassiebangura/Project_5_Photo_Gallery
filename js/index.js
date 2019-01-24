$('#search__box').keyup(function(){
    let value = $(this).val().toLowerCase();
     if(value == ""){
         $('.image_gallery').show();
     } else {
         $('.image_gallery').each(function(){
             console.log($(this))
             let caption = $(this).attr("alt").toLowerCase();
             (caption.indexOf(value) >= 0) ? $(this).show() : $(this).hide();
         });
    };
 });