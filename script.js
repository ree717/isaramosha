$(function(){
  var TopBtn = $('#PageTopBtn');
  TopBtn.hide();
  // スクロール位置が100でボタンを表示
  $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
          TopBtn.fadeIn();
      }
      else {
          TopBtn.fadeOut();
      }
  });
  // ボタンを押下するとトップへ移動
  TopBtn.click(function() {
      $('body,html').animate({
          scrollTop: 0
      }, 300);
      return false;
  });

  $(".header-contact,.responsive-contact,.sub-contact").click(function(){
    var contact = $('.contact-form').offset().top;

 $('html, body').animate({scrollTop:contact-80});
  });
  $("label").click(function(){

   if ($(this).hasClass('closes')) {
      $(this).removeClass('closes');
      $(this).find(".up-bar").css("display","none");
      $(this).find(".fa-angle-down").css("display","block");

   } else {
       $(this).addClass('closes');
       $(this).find(".up-bar").css("display","block")
           $(this).find(".fa-angle-down").css("display","none");

   }

});
});
