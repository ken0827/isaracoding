$(function(){
    
    //アコーディオン
  $('.question-answer').click(function(){
    var $answer = $(this).find('.answer')
    if ($answer.hasClass('open')) {
      $answer.removeClass('open');
      $answer.slideUp();
      $(this).find('span').html('<span class="fa fa-angle-down"></span>');
    } else {
      $answer.addClass('open');
      $answer.slideDown();
      $(this).find('span').html('<span class="fa fa-angle-up"></span>');
    }
  })
  
  //お問い合わせフォームにスクロール
  $('.scroll').click(function(){
    const headerHeight = 64.64;
    const id = $(this).attr('href');
    const position = $(id).offset().top-headerHeight;
    $('html, body').animate({'scrollTop':position},2000);
  })
  
  //全体フェードイン
  $('.container').fadeIn(3000);
  
  
  
  $(function(){
    var pagetop = $('#page_top');
    // ボタン非表示
    pagetop.hide();
    // 100px スクロールしたらボタン表示
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        pagetop.fadeIn();
      } else {
        pagetop.fadeOut();
      }
    });
    pagetop.click(function () {
      $('body, html').animate({ scrollTop: 0 }, 1000);
      return false;
    });
  });
  
  //ヘッダーアイコンでトップページ移動
  $('.header-dital img').click(function(){
    location.reload(true);
  })
    
  $(function() {
    $('html,body').animate({ scrollTop: 0 }, '1');
  });
  
  //特典フェードイン
  $('.pp').hover(function(){
    $(this).find('.ppContent').fadeIn();
  },
  function(){
    $(this).find('.ppContent').show();
  });

  // フレキシブルアコーディオン
  $('.passflow-flexble').click(function(){
    var $answer = $(this).find('.flow-right-flexble')
    if ($answer.hasClass('open')) {
      $answer.removeClass('open');
      $answer.slideUp();
      $(this).find('span').html('<span class="fa fa-angle-down"></span>');
    } else {
      $answer.addClass('open');
      $answer.slideDown();
      $(this).find('span').html('<span class="fa fa-angle-up"></span>');
    }
  })

  // sns mask
  $('.opensns').click(function(){
    $('#snsMask').removeClass('hidden')
    $('#modal').removeClass('hidden')
  })

  $('#closesns').click(function(){
    $('#snsMask').addClass('hidden')
    $('#modal').addClass('hidden')
  })
    
  $('#snsMask').click(function(){
    closesns.click();
  })

})
