$('#search__box').keyup(function(){
    let value = $(this).val().toLowerCase();//convert input to lowerCase
     if(value == ""){
         /*selects and shows all images if search box is empty*/
         $('.image_gallery').show();
     } else {
         $('.image_gallery a').each(function(){
             let caption = $(this).attr("data-title").toLowerCase();//convert caption to lowerCase- hence case insensitive.
             //compares text input and image caption in lightbox
             (caption.indexOf(value) >= 0) ? $(this).parents('.image_gallery').show() : $(this).parents('.image_gallery').hide();//use ternary operator to determine images to show
         });
    };
 });