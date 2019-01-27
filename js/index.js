$('#search__box').keyup(function(){
    let value = $(this).val().toLowerCase();
     if(value == ""){
         /*selects and shows all images if search box is empty*/
         $('.image_gallery').show();
     } else {
         $('.image_gallery a').each(function(){
             let caption = $(this).attr("data-title").toLowerCase();
             /*shows parent div based on img alt attribute value in comparism to value of search box*/
             (caption.indexOf(value) >= 0) ? $(this).parents('.image_gallery').show() : $(this).parents('.image_gallery').hide();
         });
    };
 });