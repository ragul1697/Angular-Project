(function ($) {
  'use strict';
  //jQuery(function () {
  //	$('div.hero-anime').removeClass('hero-anime');
  //});
  jQuery(function () {
    //Table double click to select tr row
    $(document).on(
      'click',
      '.general-enquiry-searchResults-panel table tr',
      function () {
        $('.general-enquiry-searchResults-panel table tr.active').removeClass(
          'active'
        );
        $(this).addClass('active');
      }
    );

    //Menu Search button active
    $(document).on('click', '.nav-search-form button.btn', function () {
      $(this).toggleClass('active');
    });

    $('table tr td').on('click', function () {
      $('table tr td.td-selected').removeClass('td-selected');
      $(this).addClass('td-selected');
    });
  });

  $(window).on('scroll', function () {
    if ($(this).scrollTop()) {
      $('#toTop').fadeIn();
    } else {
      $('#toTop').fadeOut();
    }
  });

  $('#toTop').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 1000);
  });
  //Menu On Hover

  $('body').on('mouseenter mouseleave', '.nav-item', function (e) {
    if ($(window).width() > 750) {
      var _d = $(e.target).closest('.nav-item');
      _d.addClass('show');
      setTimeout(function () {
        _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
      }, 1);
    }
  });

  //For Ui demo purpose
  $(function () {
    $('.general-enquiry-search-panel .table-footer button.btn-blue').on(
      'click',
      function () {
        //$('.general-enquiry-search-panel.open').removeClass('open');
        $('.general-enquiry-searchResults-panel').addClass('show_panel');
      }
    );

    $(document).on(
      'dblclick',
      '.general-enquiry-searchResults-panel table tr',
      function () {
        $('.general-enquiry-policyAgent-panel').addClass('show_panel');
      }
    );
  });
})(jQuery);
