var formLayout = 'horizontal';
var formElement = 'input';
var radioLayout = 'vertical';
var radioRequired = '';
var checkboxLayout = 'vertical';
var checkboxRequired = '';
var buttonType = 'btn1';
var selectRequired = selectMultiple = selectSearch = '';
/**** WIDGETS ****/
var widgetTodoList = '<div class="panel"><div class="panel-header panel-controls"><h3><i class="icon-list"></i> <strong>Todo</strong> List</h3></div><div class="panel-content"><ul class="todo-list ui-sortable"><li class="high"><span class="span-check"><input id="task-1" type="checkbox" data-checkbox="icheckbox_square-blue" /><label for="task-1"></label></span><span class="todo-task">Send email to Bob Linch</span><div class="todo-date clearfix"><div class="completed-date"></div><div class="due-date">Due on <span class="due-date-span">15 December 2014</span></div></div><span class="todo-options pull-right"><a href="javascript:;" class="todo-delete"><i class="icons-office-52"></i></a></span><span class="todo-tags pull-right"><div class="label label-success">Work</div></span></li><li><span class="span-check"><input id="task-2" type="checkbox" data-checkbox="icheckbox_square-blue"/><label for="task-2"></label></span><span class="todo-task">Call datacenter for servers</span><div class="todo-date clearfix"><div class="completed-date"></div><div class="due-date">Due on <span class="due-date-span">7 January</span></div></div><span class="todo-options pull-right"><a href="javascript:;" class="todo-delete"><i class="icons-office-52"></i></a></span></li><li class="low"><span class="span-check"><input id="task-3" type="checkbox" data-checkbox="icheckbox_square-blue"/><label for="task-3"></label></span><span class="todo-task">Remove all unused icons</span><div class="todo-date clearfix"><div class="completed-date"></div><div class="due-date">Due on <span class="due-date-span">5 January</span></div></div><span class="todo-options pull-right"><a href="javascript:;" class="todo-delete"><i class="icons-office-52"></i></a></span></li><li class="medium"><span class="span-check"><input id="task-4" type="checkbox" data-checkbox="icheckbox_square-blue"/><label for="task-4"></label></span><span class="todo-task">Read my todo list</span><div class="todo-date clearfix"><div class="completed-date"></div><div class="due-date">Due on <span class="due-date-span">4 January</span></div></div><span class="todo-options pull-right"><a href="javascript:;" class="todo-delete"><i class="icons-office-52"></i></a></span><span class="todo-tags pull-right"><div class="label label-info">Tuesday</div></span></li><li><span class="span-check"><input id="task-6" type="checkbox" data-checkbox="icheckbox_square-blue"/><label for="task-6"></label></span><span class="todo-task">Have a breakfeast before 12</span><div class="todo-date clearfix"><div class="completed-date"></div><div class="due-date">Due on <span class="due-date-span">1 January</span></div></div><span class="todo-options pull-right"><a href="javascript:;" class="todo-delete"><i class="icons-office-52"></i></a></span></li></ul><div class="clearfix m-t-10"><div class="pull-left"><button type="button" class="btn btn-sm btn-default check-all-tasks">Check All Done</button></div><div class="pull-right"><button type="button" class="btn btn-sm btn-dark add-task">Add Task</button></div></div></div></div>';
var widgetNews = '<div class="panel"> <div class="panel-header"> <h3><i class="icon-list"></i> <strong>News</strong> List</h3> <div class="control-btn"> <span class="pull-right badge badge-primary">12</span> </div> </div> <div class="panel-content widget-news"> <div class="withScroll" data-height="400"> <a href="#" class="message-item media"> <div class="media"> <div class="media-body"> <div class="pull-left p-r-10"> <i class="icon-lock-open pull-left"></i> </div> <div> <small class="pull-right">28 Feb</small> <h4 class="c-dark">Reset your account password</h4> <p class="f-14 c-gray">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p> </div> </div> </div> </a> <a href="#" class="message-item media"> <div class="media"> <div class="media-body"> <div class="pull-left p-r-10"> <i class="icon-cloud-upload pull-left"></i> </div> <div> <small class="pull-right">27 Feb</small> <h4 class="c-dark">Check Dropbox</h4> <p class="f-14 c-gray">Hello Steve, I have added new files in your Dropbox in order to show you how to...</p> </div> </div> </div> </a> <a href="#" class="message-item media"> <div class="media"> <div class="media-body"> <div class="pull-left p-r-10"> <i class="icon-docs pull-left"></i> </div> <div> <small class="pull-right">27 Feb</small> <h4 class="c-dark">New document added</h4> <p class="f-14 c-gray">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p> </div> </div> </div> </a> <a href="#" class="message-item media"> <div class="media"> <div class="media-body"> <div class="pull-left p-r-10"> <i class="icon-present pull-left"></i> </div> <div> <small class="pull-right">26 Feb</small> <h4 class="c-dark">You receive a gift</h4> <p class="f-14 c-gray">Hello Steve, I have added new files in your Dropbox in order to show you how to...</p> </div> </div> </div> </a> <a href="#" class="message-item media"> <div class="media"> <div class="media-body"> <div class="pull-left p-r-10"> <i class="icon-call-in pull-left"></i> </div> <div> <small class="pull-right">25 Feb</small> <h4 class="c-dark">Call Alfred for business</h4> <p class="f-14 c-gray">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p> </div> </div> </div> </a> <a href="#" class="message-item media"> <div class="media"> <div class="media-body"> <div class="pull-left p-r-10"> <i class="icon-calendar pull-left"></i> </div> <div> <small class="pull-right">25 Feb</small> <h4 class="c-dark">Appointment at 8pm today</h4> <p class="f-14 c-gray">Hello Steve, I have added new files in your Dropbox in order to show you how to...</p> </div> </div> </div> </a> <a href="#" class="message-item media"> <div class="media"> <div class="media-body"> <div class="pull-left p-r-10"> <i class="icon-rocket pull-left"></i> </div> <div> <small class="pull-right">24 Feb</small> <h4 class="c-dark">Trip to Mars begin</h4> <p class="f-14 c-gray">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p> </div> </div> </div> </a> </div> </div> </div>';
var widgetTable = '<div class="panel"> <div class="panel-header panel-controls"> <h3><i class="icon-star"></i> Popular <strong>Domains</strong></h3> </div> <div class="panel-content widget-table"> <div class="withScroll" data-height="400"> <table class="table table-striped"> <thead> <tr> <th>Name</th> <th>Price</th> <th>Status</th> </tr> </thead> <tbody> <tr> <td>internet.com</td> <td><span class="l-through c-red">$29.99</span> <span class="p-l-10 c-green">$19.99</span></td> <td> <div class="badge badge-primary">on sale</div> </td> </tr> <tr> <td>online.com</td> <td><span class="c-primary">$19.99</span></td> <td> <div class="badge badge-success">approved</div> </td> </tr> <tr> <td>newsite.es</td> <td><span class="c-primary">$16.45</span></td> <td> <div class="badge badge-danger">pending</div> </td> </tr> <tr> <td>web.uk</td> <td><span class="c-primary">$15.00</span></td> <td> <div class="badge badge-warning badge-stock">out of stock</div> </td> </tr> <tr> <td>domain.com</td> <td><span class="c-primary">$18.40</span></td> <td> <div class="badge badge-default badge-sold">sold</div> </td> </tr> <tr> <td>mywebsite.com</td> <td><span class="l-through c-red">$22.99</span> <span class="p-l-10 c-green">$15.90</span></td> <td> <div class="badge badge-primary">on sale</div> </td> </tr> <tr> <td>intranet.com</td> <td><span class="l-through c-red">$27.99</span> <span class="p-l-10 c-green">$16.99</span></td> <td> <div class="badge badge-primary">on sale</div> </td> </tr> <tr> <td>hereiam.com</td> <td><span class="c-primary">$18.99</span></td> <td> <div class="badge badge-success">approved</div> </td> </tr> <tr> <td>johndoe.es</td> <td><span class="c-primary">$15.45</span></td> <td> <div class="badge badge-warning badge-stock">out of stock</div> </td> </tr> <tr> <td>skyblue.uk</td> <td><span class="c-primary">$14.00</span></td> <td> <div class="badge badge-danger">pending</div> </td> </tr> <tr> <td>morris.fr</td> <td><span class="c-primary">$17.40</span></td> <td> <div class="badge badge-default badge-sold">sold</div> </td> </tr> <tr> <td>justforfun.com</td> <td><span class="l-through c-red">$25.99</span> <span class="p-l-10 c-green">$18.90</span></td> <td> <div class="badge badge-primary">on sale</div> </td> </tr> </tbody> </table> </div> </div> </div>';
var widgetCounter = '<div class="panel"><div class="panel-content widget-info"><div class="row"><div class="left"><i class="fa fa-umbrella bg-green"></i></div><div class="right"><p class="number countup" data-from="0" data-to="52000">0</p><p class="text">New robots</p></div></div></div></div>';

var widgetProfile1 = '<div class="panel widget-member2"><div class="row"><div class="col-lg-2 col-xs-3"><img src="assets/images/avatars/profil4.jpg" alt="profil 4" class="pull-left img-responsive"></div><div class="col-lg-10 col-xs-9"><div class="clearfix"><h3 class="m-t-0 member-name"><strong>John Snow</strong> <span class="member-job">Software Engineer</span></h3></div><div class="row"><div class="col-sm-12"><p><i class="fa fa-map-marker c-gray-light p-r-10"></i> Cebu Business Park, Cebu City, Philippines</p></div></div><div class="row"><div class="col-xlg-4 col-lg-6 col-sm-4"><p><i class="fa fa-skype c-gray-light p-r-10"></i> weno.camesong</p></div><div class="col-xlg-4 col-lg-6 col-sm-4 align-right"><p><i class="icon-envelope  c-gray-light p-r-10"></i> cameso@it.com</p></div><div class="col-xlg-4 col-lg-6 col-sm-4 align-right"><p><i class="icon-target c-gray-light p-r-10"></i> New York</p></div></div></div></div></div>';
var widgetProfile2 = '<div class="panel panel-default"><div class="panel-body p-10"><div class="text-center col-xs-4"><img src="assets/images/avatars/avatar4_big.png" class="img-responsive" alt="avatar 4"></div><div class="clearfix col-xs-8"><h2 class="c-dark w-600">Winston Bowman</h2><p class="c-gray f-16">Photographer</p><p class="c-gray"><i class="fa fa-map-marker p-r-10"></i> Trade Business Park, Ohio</p></div></div><div class="panel-footer p-t-0 p-b-0"><div class="row"><div class="col-xs-4 bg-blue p-20"><div class="text-center m-b-10"><i class="f-24 icon-speech"></i></div><div class="text-center f-16">1568</div></div><div class="col-xs-4 bg-purple p-20"><div class="text-center m-b-10"><i class="f-24 icon-users"></i></div><div class="text-center f-16">866</div></div><div class="col-xs-4 bg-primary p-20"><div class="text-center m-b-10"><i class="f-24 fa icon-heart"></i></div><div class="text-center f-16">254</div></div></div></div></div>';
var widgetProfile3 = '<div class="panel panel-default hover-effect"><div class="panel-heading h-150 p-0"><img src="assets/images/widgets/profil2.jpg" class="img-responsive hover-img" alt=""></div><div class="panel-body p-10"><div class="clearfix col-lg-6 col-md-12 col-sm-12"><h3 class="c-dark w-600 align-center">Anna Chain</h3><p class="c-gray f-16 align-center">Photographer</p></div><div class="col-lg-6 col-md-12 col-sm-12 p-t-20"><div class="col-xs-4 c-gray"><div class="text-center m-b-20"><i class="f-24 icon-speech"></i></div><div class="text-center">1568</div></div><div class="col-xs-4 c-gray"><div class="text-center m-b-20"><i class="f-24 icon-users"></i></div><div class="text-center">866</div></div><div class="col-xs-4 c-gray"><div class="text-center m-b-20"><i class="f-24 icon-heart c-red"></i></div><div class="text-center">254</div></div></div></div></div>';
var widgetProfile4 = '<div class="panel panel-default"><div class="panel-heading h-150 p-0"><img src="assets/images/widgets/mountain.jpg" class="img-responsive" alt=""><div class="profil-name-heading text-center w-700"><div class="f-24">John Snow</div><div class="f-16">photographer</div></div></div><div class="panel-body p-10"><div class="clearfix col-xs-4"><div class="text-center f-32 w-700">1758</div><div class="text-center c-gray w-700">PHOTOS</div></div><div class="col-xs-4"><img class="widget-profil-img-center img-responsive" src="assets/images/widgets/profil3.jpg" alt=""></div><div class="col-xs-4"><div class="text-center f-32 w-700">4557</div><div class="text-center c-gray w-700">FOLLOWERS</div></div></div></div>';



$(document).ready(function() {
    $('#import-page-builder').on('click', function(e) {
        e.preventDefault();
        createPageBuilder();
    });
    $('#no-page-builder').on('click', function(e) {
        e.preventDefault();
        $('.custom-page').fadeOut(200, function() {
            $('.custom-page').remove();
        });
    });

    handleMarginTop();
    handleTopbarFixed();

});

$(window).resize(function(){
    handleMarginTop();
});

function handleMarginTop(){
    var pageBuilderHeight = $('#page-builder').height();
    $('.page-builder').css('margin-top', pageBuilderHeight - 30);
}

function handlePageBuilder() {

    $('#builder').hide();
    if(typeof removeSidebarTop == 'function') {
        removeSidebarTop();
    }
    
    removeBoxedLayout();
    var menuContext =   '<div id="context-menu" class="context-menu dropdown clearfix">'+
                          '<ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">'+
                           '<li class="dropdown-title">Panel</li>'+
                            '<li class="color-background"><a href="#" data-action="background"><i class="icon-pencil c-gray"></i> Change Background Color</a></li>'+
                            '<li class="edit-icon"><a href="#" data-action="icon"><i class="icon-star c-gray"></i> Edit Icon</a></li>'+
                            '<li class="remove-icon"><a href="#" data-action="remove-icon"><i class="icon-pencil c-gray"></i> Remove Icon</a></li>'+
                            '<li class="remove"><a href="#" data-action="remove"><i class="icon-ban c-gray"></i> Remove</a></li>'+
                          '</ul>'+
                        '</div>';
    $('.page-content').append(menuContext);
    var $contextMenu = $("#context-menu");

    /* Context Menu */
    $('.builder-wrapper').on('mousedown', '.panel-header h3, .panel-footer h3, .panel-content:not(.widget-info), i', function(){
          $('#context-menu .color-background, #context-menu .edit-icon, #context-menu .remove-icon').show();
          if($(this).hasClass('panel-content')){
            $('#context-menu .edit-icon').hide();
            $('#context-menu .remove-icon').hide();
          } 
          if(!$(this).find('i').length){
              $('#context-menu .remove-icon').hide();
          } 
          if($(this).is('i')){
              if($(this).parent().hasClass('form-sortable-btn')){
                  return;
              }
              $('#context-menu .edit-icon').show();
          } 
          $(this).contextmenu({
              target: '#context-menu',
              onItem: function (context, e) {
                  var action = $(e.target).data("action");
                  context.addClass('current-context');
                  if(action == 'background'){
                      $('#modal-background').modal('show');
                  } 
                  if(action == 'icon'){
                      $('#modal-icons').modal('show');
                  } 
                  if(action == 'remove-icon'){
                      context.find('i').remove();
                  } 
                  if(action == 'remove'){
                      $element = context;
                      if($element.hasClass('nav-parent')) $remove_txt = "Are you sure to remove this element?<br>";
                      else if($element.parent().hasClass('panel')) $remove_txt = "Are you sure this panel?";
                      else $remove_txt = "Are you sure to remove this element?";
                      bootbox.confirm($remove_txt, function(result) {
                          if(result === true){
                            $element.addClass("animated bounceOutLeft");
                            window.setTimeout(function () {
                              if($element.parent().hasClass('panel')){
                                  $element.parent().remove();
                              }
                              else{
                                  $element.remove();
                              }
                              
                            }, 300);
                          }
                      }); 
                  }     
              }
          });
    });

    /* Edit Icon */
    $('#modal-icons .modal-body').on('click', 'i', function(){
        $('#modal-icons .modal-body i').removeClass('active');
        var selectedIconClass = $(this).attr('class');
        if(selectedIconClass != ''){
            $(this).addClass('active');
        }
    });

    $('#modal-icons').on('click', '.save', function(){
        var selectedIconClass = $('#modal-icons .modal-body i.active').attr('class');
        if(selectedIconClass != ''){
          if($('.current-context').is('i')){
            $('.current-context').removeClass('fa').removeClass('glyphicon').removeClass('icon');
            $('.current-context').removeClass (function (index, css) {
              return (css.match (/(^|\s)fa-\S+/g) || []).join(' ');
            });
            $('.current-context').removeClass (function (index, css) {
              return (css.match (/(^|\s)line-\S+/g) || []).join(' ');
            });
            $('.current-context').removeClass (function (index, css) {
              return (css.match (/(^|\s)icon-\S+/g) || []).join(' ');
            });
            $('.current-context').removeClass (function (index, css) {
              return (css.match (/(^|\s)icons-\S+/g) || []).join(' ');
            });
            $('.current-context').addClass(selectedIconClass);
          }
          else{
            $('.current-context').prepend('<i class="'+selectedIconClass+'"></i>');
          }
          $('#modal-icons').modal('hide');
          $('.current-context').removeClass('current-context');
          $('#modal-icons .modal-body i').removeClass('active');
        }
    });

    /* Background Color */
    $('.colors-list li').click(function() {
        var self = $(this);
        var portlet_header = self.parent().parent().parent().prev();
        var portlet_footer = self.parent().parent().parent().next();
        self.addClass('active');
        self.siblings().removeClass('active');   
    });

    $('#modal-background').on('click', '#save-bg-color', function(){
        var selectedBgColor = $('#modal-background .modal-body li.active').attr('class');
        var bg_color = 'bg-' + selectedBgColor;
        if(selectedBgColor != ''){
          if($('.current-context ').parent().hasClass('panel-header') || $('.current-context ').parent().hasClass('panel-footer')){
              $('.current-context').parent().removeClass (function (index, css) {
                  return (css.match (/(^|\s)bg-\S+/g) || []).join(' ');
              });
              $('.current-context').parent().addClass(bg_color);
          }
          if($('.current-context ').hasClass('panel-content') || $('.current-context ').is('i')){
              $('.current-context').removeClass (function (index, css) {
                  return (css.match (/(^|\s)bg-\S+/g) || []).join(' ');
              });
              $('.current-context').addClass(bg_color);
          }
          $('#modal-background').modal('hide');
          $('.current-context').removeClass('current-context');
        }
    });

    $('#save-form-settings').on('click', function() {
        var formTitle = $('.form-title').val();
        if (formTitle != '') {
            $('.current-form').append('<h2> ' + formTitle + ' </h2>');
        }
        $('.form-title').val('');
        $('#form-settings').modal('hide');
        if (formLayout == 'horizontal') {
            $('.current-form').addClass('form-horizontal');
        }
        if (formElement == 'input') {
            if (formLayout == 'horizontal') {
                $('.current-form').append('<div class="form-group"><label class="col-sm-3 control-label">Label</label><div class="col-sm-9"><input class="form-control form-white" type="text" placeholder=""></div></div>');
            }
            else {
                ('.current-form').append('<div class="form-group"><label>Label</label><input class="form-control form-white" type="text" placeholder=""></div>');
            }
            $('.current-form').parent().find('.placeholder-content-area').remove();
            $('.current-form').attr('style', '');
        }
        else if (formElement == 'textarea') {
            if (formLayout == 'horizontal') {
                $('.current-form').append('<div class="form-group"><label class="col-sm-3 control-label">Label</label><div class="col-sm-9"><textarea class="form-control form-white" rows="5"></textarea></div></div>');
            }
            else {
                $('.current-form').append('<div class="form-group"><label>Label</label><textarea class="form-control form-white" rows="5"></textarea></div>');
            }
            $('.current-form').parent().find('.placeholder-content-area').remove();
            $('.current-form').attr('style', '');
        }
        else if (formElement == 'radio') {
            setTimeout(function() {
                radioRequired = '';
                $('#form-radio').modal('show');
            }, 300);
        }
        else if (formElement == 'checkbox') {
            setTimeout(function() {
                checkboxRequired = '';
                $('#form-checkbox').modal('show');
            }, 300);
        }
        else if (formElement == 'select') {
            setTimeout(function() {
                selectRequired = selectMultiple = selectSearch = '';
                $('#form-select').modal('show');
            }, 300);
        }
        else if (formElement == 'button') {
            setTimeout(function() {
                selectRequired = selectMultiple = selectSearch = '';
                $('#form-button').modal('show');
            }, 300);
        }
        else {
            $('.current-form').parent().find('.placeholder-content-area').remove();
            $('.current-form').css('display', '').removeClass('current-form');
        }
        handleSortableForm();
    });

    $('.close-modal').on('click', function() {
        $('.current-form').remove();
        $('.current-table').remove();
        $('.current-layout').remove();
    });
    $('#form-settings input').on('ifChecked', function(event) {
        formLayout = $(this).data('form-layout');
    });

    /**** FORM RADIO BUTTONS ****/
    $('#form-radio').on('show.bs.modal', function() {
        /* Fix Slider Issue in Modal */
        setTimeout(function() {
            $('.radio-slide').sliderIOS();
        }, 200);
    });
    $('#save-form-radio').on('click', function() {
        var radioLabel = $('.radio-label').val();
        var radioName = $('.radio-name').val();
        var numberRadio = $('.radio-slide').sliderIOS('getValue');
        radioLayout = $('#form-radio .radio-layout .iradio_minimal-blue.checked').find('input').data('radio-layout');
        var radioButtons = '';
        if (radioName == '') radioName = 'radio- name1';
        for (i = 1; i <= numberRadio; i++) {
            radioButtons += '<label><input type="radio" name="' + radioName + '" data-radio="iradio_minimal-blue" ' + radioRequired + '> Radio Button ' + i + ' </label>';
        }
        if (radioLabel == '') radioLabel = 'Radio Label';
        if ($('.current-form').hasClass('form-horizontal')) {
            if (radioLayout == 'vertical') $('.current-form').append('<div class="form-group"><div class="col-sm-3"><label>' + radioLabel + '</label></div><div class="col-sm-9"><div class="input-group"><div class="icheck-list">' + radioButtons + '</div></div></div></div>');
            if (radioLayout == 'horizontal') $('.current-form').append('<div class="form-group"><div class="col-sm-3"><label class="m-t-12">' + radioLabel + '</label></div><div class="col-sm-9"><div class="input-group"><div class="icheck-inline">' + radioButtons + '</div></div></div></div></div>');
        }
        else {
            if (radioLayout == 'vertical') $('.current-form').append('<div class="form-group"><p>' + radioLabel + '</p><div class="input-group"><div class="icheck-list">' + radioButtons + '</div></div></div>');
            if (radioLayout == 'horizontal') $('.current-form').append('<div class="form-group"><p>' + radioLabel + '</p><div class="input-group"><div class="icheck-inline">' + radioButtons + '</div></div></div></div>');
        }
        $('.current-form').iCheck({
            radioClass: 'iradio_minimal-blue'
        });
        $('.current-form').parent().find('.placeholder-content-area').remove();
        $('.current-form').css('display', '').removeClass('current-form');
        $('.radioLabel').val('');
        createIcheckEditor();
        handleSortableForm();
        $('#form-radio').modal('hide');
    });
    $('input.radio-required').on('ifChecked', function(event) {
        radioRequired = 'required';
    });

    /**** FORM CHECKBOX BUTTONS ****/
    /* Fix Slider Issue in Modal */
    $('#form-checkbox').on('show.bs.modal', function() {
        setTimeout(function() {
            $('.checkbox-slide').sliderIOS();
        }, 200);
    });
    $('#save-form-checkbox').on('click', function() {
        var checkboxLabel = $('.checkbox-label').val();
        var checkboxName = $('.checkbox-name').val();
        var numberCheckbox = $('.checkbox-slide').sliderIOS('getValue');
        checkboxLayout = $('#form-checkbox .checkbox-layout .iradio_minimal-blue.checked').find('input').data('checkbox-layout');
        var checkboxButtons = '';
        for (i = 1; i <= numberCheckbox; i++) {
            checkboxButtons += '<label><input type="checkbox" name="' + checkboxName + '" data-checkbox="icheckbox_square-blue" ' + checkboxRequired + '> Checkbox ' + i + '</label>';
        }
        if (checkboxLabel == '') checkboxLabel = 'Chekbox Label';
        if ($('.current-form').hasClass('form-horizontal')) {
            if (checkboxLayout == 'vertical') $('.current-form').append('<div class="form-group"><div class="col-sm-3"><label>' + checkboxLabel + '</label></div><div class="col-sm-9"><div class="input-group"><div class="icheck-list">' + checkboxButtons + '</div></div></div></div>');
            if (checkboxLayout == 'horizontal') $('.current-form').append('<div class="form-group"><div class="col-sm-3"><label class="m-t-12">' + checkboxLabel + '</label></div><div class="col-sm-9"><div class="input-group"><div class="icheck-inline">' + checkboxButtons + '</div></div></div></div></div>');
        }
        else {
            if (checkboxLayout == 'vertical') $('.current-form').append('<div class="form-group"><p>' + checkboxLabel + '</p><div class="input-group"><div class="icheck-list">' + checkboxButtons + '</div></div></div>');
            if (checkboxLayout == 'horizontal') $('.current-form').append('<div class="form-group"><p>' + checkboxLabel + '</p><div class="input-group"><div class="icheck-inline">' + checkboxButtons + '</div></div></div></div>');
        }
        $('.current-form').iCheck({
            checkboxClass: 'icheckbox_square-blue'
        });
        $('.current-form').parent().find('.placeholder-content-area').remove();
        $('.current-form').css('display', '').removeClass('current-form');
        $('.checkbox-label').val('');
        $('.checkbox-name').val('');
        handleSortableForm();
        $('#form-checkbox').modal('hide');
    });
    $('input.checkbox-required').on('ifChecked', function(event) {
        checkboxRequired = 'required';
    });

    /**** FORM SELECT INPUT ****/
    $('#save-form-select').on('click', function() {
        var selectOption = '';
        var selectLabel = $('.select-label').val();
        var selectName = $('.select-name').val();
        var selectOptions = $('textarea.select-options').val().split('\n');
        for (var i = 0; i < selectOptions.length; i++) {
            if (selectOptions[i] != '') selectOption += '<option>' + selectOptions[i] + '</option>';
        }
        if (selectLabel == '') selectLabel = 'Select Label';
        if ($('.current-form').hasClass('form-horizontal')) {
            $('.current-form').append('<div class="form-group"><div class="col-sm-3 m-t-5"><label>' + selectLabel + '</label></div><div class="col-sm-9"><div class="input-group width-100p"><select ' + selectMultiple + ' name="' + selectName + '" class="form-control form-white" ' + selectSearch + ' data-placeholder="">' + selectOption + '</select></div></div></div>');
        }
        else {
            $('.current-form').append('<div class="form-group"><label>' + selectLabel + '</label><select ' + selectMultiple + ' name="' + selectName + '" class="form-control form-white" ' + selectSearch + ' data-placeholder="">' + selectOption + '</select></div>');
        }
        $('.current-form').parent().find('.placeholder-content-area').remove();
        $('.current-form').css('display', '').removeClass('current-form');
        $('.select-label').val('');
        $('.select-options').val('');
        $('.select-name').val('');
        inputSelect();
        handleSortableForm();
        $('#form-select').modal('hide');
    });
    $('input.select-required').on('ifChecked', function(event) {
        selectRequired = 'required';
    });
    $('input.select-multiple').on('ifChecked', function(event) {
        selectMultiple = 'multiple';
    });
    $('input.select-search').on('ifChecked', function(event) {
        selectSearch = 'data-search="true"';
    });

    /**** FORM BUTTON ****/
    $('#save-form-button').on('click', function() {
        var buttonLabel = $('.button-label').val();
        if (buttonLabel != '') buttonLabel = '<label><strong>' + buttonLabel + '</strong></label>';
        buttonType = $('#form-button .button-type .iradio_minimal-blue.checked').find('input').data('button-type');
        button1Class = 'btn-' + $('.button1-class').select2("val");
        button1Style = 'btn-' + $('.button1-style').select2("val");
        if (button1Style == 'btn-default') button1Style = '';
        button1Name = $('.button1-name').val();
        button1Text = $('.button1-txt').val();
        if (button1Text == '') button1Text = 'Button';
        button2Class = 'btn-' + $('.button2-class').select2("val");
        button2Style = 'btn-' + $('.button2-style').select2("val");
        if (button2Style == 'btn-default') button2Style = '';
        button2Name = $('.button2-name').val();
        button2Text = $('.button2-txt').val();
        if (button2Text == '') button2Text = 'Button';
        buttonFileName = $('.button1-name').val();
        buttonFileText = $('.button1-txt').val();
        if ($('.current-form').hasClass('form-horizontal')) {
            if (buttonType == 'btn1') {
                $('.current-form').append('<div class="form-group"><div class="col-sm-3 m-t-5">' + buttonLabel + '</div><div class="col-sm-9"><button id="' + button1Name + '" name="' + button1Name + '" type="button" class="btn ' + button1Class + ' ' + button1Style + '">' + button1Text + '</button></div></div>');
            }
            if (buttonType == 'btn-file') {
                $('.current-form').append('<div class="form-group"><div class="col-sm-3 m-t-5">' + buttonLabel + '</div><div class="col-sm-9"><div class="fileinput fileinput-new input-group" data-provides="fileinput"><div class="form-control" data-trigger="fileinput"><i class="glyphicon glyphicon-file fileinput-exists"></i> <span class="fileinput-filename"></span></div><span class="input-group-addon btn btn-default btn-file"><span class="fileinput-new">Choose...</span><span class="fileinput-exists">Change</span><input type="file" name="..."></span><a href="#" class="input-group-addon btn btn-default fileinput-exists" data-dismiss="fileinput">Remove</a></div></div></div>');
            }
            if (buttonType == 'btn1-2') {
                $('.current-form').append('<div class="form-group"><div class="col-sm-3 m-t-5">' + buttonLabel + '</div><div class="col-sm-9"><button id="' + button1Name + '" name="' + button1Name + '" type="button" class="btn ' + button1Class + ' ' + button1Style + '">' + button1Text + '</button><button id="' + button2Name + '" name="' + button2Name + '" type="button" class="btn ' + button2Class + ' ' + button2Style + '">' + button2Text + '</button></div></div>');
            }
        }
        else {
            if (buttonType == 'btn1') {
                $('.current-form').append('<div class="form-group">' + buttonLabel + '<button id="' + button1Name + '" name="' + button1Name + '" type="button" class="btn ' + button1Class + ' ' + button1Style + '" id="top">' + button1Text + '</button></div>');
            }
            if (buttonType == 'btn-file') {
                $('.current-form').append('<div class="form-group">' + buttonLabel + '<div class="fileinput fileinput-new input-group" data-provides="fileinput"><div class="form-control" data-trigger="fileinput"><i class="glyphicon glyphicon-file fileinput-exists"></i> <span class="fileinput-filename"></span></div><span class="input-group-addon btn btn-default btn-file"><span class="fileinput-new">Choose...</span><span class="fileinput-exists">Change</span><input type="file" name="..."></span><a href="#" class="input-group-addon btn btn-default fileinput-exists" data-dismiss="fileinput">Remove</a></div></div>');
            }
            if (buttonType == 'btn1-2') {
                $('.current-form').append('<div class="form-group">' + buttonLabel + '<button id="' + button1Name + '" name="' + button1Name + '" type="button" class="btn ' + button1Class + ' ' + button1Style + '" id="top">' + button1Text + '</button><button id="' + button2Name + '" name="' + button2Name + '" type="button" class="btn ' + button2Class + ' ' + button2Style + '">' + button2Text + '</button></div>');
            }
        }
        $('.current-form').parent().find('.placeholder-content-area').remove();
        $('.current-form').css('display', '').removeClass('current-form');
        $('.button-label, .button1-name, .button1-txt, .button2-name, button2-txt, .file-button-label, .file-button-txt').val('');
        handleSortableForm();
        $('#form-button').modal('hide');
    });
    $('#form-button .button-type input').on('ifChecked', function(event) {
        $('.btn1-2, .btn-file').hide();
        buttonType = $(this).data('button-type');
        $('#form-button').find('.' + buttonType).show();
    });
    $('input').on('ifChecked', function(event) {
        $('.btn1-2, .btn-file').hide();
        buttonType = $(this).data('button-type');
        $('#form-button').find('.' + buttonType).show();
    });

    /**** TABLE ****/
    $('#table').on('show.bs.modal', function() {
        /* Fix Slider Issue in Modal */
        setTimeout(function() {
            $('.table-columns-slide, .table-rows-slide').sliderIOS();
        }, 200);
    });
    $('#save-table').on('click', function() {
        var tableHead = tableColumn = tableRow = '';
        var tableTitle = $('.table-title').val();
        tableStyle = 'table-' + $('.table-style').select2("val");
        if (tableStyle == 'table-default') tableStyle = '';
        if (tableTitle != '') tableTitle = '<h2><strong>' + tableTitle + '</strong></h2>';
        tableColumns = $('.table-columns-slide').sliderIOS('getValue');
        tableRows = $('.table-rows-slide').sliderIOS('getValue');
        for (var i = 0; i < tableColumns; i++) {
            tableHead += '<th>' + 'Head ' + i + '</th>';
        }
        for (var j = 0; j < tableRows; j++) {
            tableRow += '<tr>';
            for (var k = 0; k < tableColumns; k++) {
                tableRow += '<td>' + 'Row ' + k + '</td>';
            }
            tableRow += '</tr>';
        }
        $('.current-table').before(tableTitle);
        $('.current-table').addClass(tableStyle);
        $('.current-table').append('<thead><tr>' + tableHead + '</tr></thead><tbody>' + tableRow + '</tbody>');
        if($('.current-table').hasClass('table-dynamic')){
          tableDynamic();
        }
        $('.current-table').css('display', '').removeClass('current-table');
        $('.table-title').val('');
        $('#table').modal('hide');
    });

    /**** USER PROFILE WIDGET ****/
    $('#modal-user-profile').on('click', '.user-profile-img', function(){
        $('#modal-user-profile .user-profile-img').removeClass('active');
        $(this).addClass('active');
    });

    $('#modal-user-profile').on('click', '#save-profile', function(){
        profileWidgetLayout = $('#modal-user-profile .user-profile-img.active').data('profile-widget');
        if(profileWidgetLayout == 'profile1')  $('.current-context').append(widgetProfile1);
        if(profileWidgetLayout == 'profile2')  $('.current-context').append(widgetProfile2);
        if(profileWidgetLayout == 'profile3')  $('.current-context').append(widgetProfile3);
        if(profileWidgetLayout == 'profile4')  $('.current-context').append(widgetProfile4);
        $('.current-context').find('.panel').unwrap();

        $('#modal-user-profile').modal('hide');
    });

    /**** CUSTOM LAYOUT ****/
    $('#custom-layout').on('show.bs.modal', function() {
        if($('#num-columns').hasClass('slider')){
            setTimeout(function() {
                $('#num-columns').on('slide', function(ev) {
                    numColumns = $('#num-columns').sliderIOS('getValue');
                    if (numColumns == 1) valueColumns = '12/12';
                    if (numColumns == 2) valueColumns = '6/12_6/12';
                    if (numColumns == 3) valueColumns = '4/12_4/12_4/12';
                    if (numColumns == 4) valueColumns = '3/12_3/12_3/12_3/12';
                    if (numColumns == 5) valueColumns = '3/12_3/12_2/12_2/12_2/12';
                    if (numColumns == 6) valueColumns = '2/12_2/12_2/12_2/12_2/12_2/12';
                    if (numColumns == 7) valueColumns = '2/12_2/12_2/12_2/12_2/12_1/12_1/12';
                    if (numColumns == 8) valueColumns = '2/12_2/12_2/12_2/12_1/12_1/12_1/12_1/12';
                    if (numColumns == 9) valueColumns = '2/12_2/12_2/12_1/12_1/12_1/12_1/12_1/12_1/12';
                    if (numColumns == 10) valueColumns = '2/12_2/12_1/12_1/12_1/12_1/12_1/12_1/12_1/12_1/12';
                    if (numColumns == 11) valueColumns = '2/12_1/12_1/12_1/12_1/12_1/12_1/12_1/12_1/12_1/12_1/12';
                    if (numColumns == 12) valueColumns = '1/12_1/12_1/12_1/12_1/12_1/12_1/12_1/12_1/12_1/12_1/12_1/12';
                    handleNumberColumns(valueColumns);
                    $('.value-columns').val(valueColumns);
                });
                handleNumberColumns('4/12_4/12_4/12');
                
            }, 200);

        }
        else {
            setTimeout(function() {
                $('#num-columns').sliderIOS().on('slide', function(ev) {
                    numColumns = $('#num-columns').sliderIOS('getValue');
                    if (numColumns == 1) valueColumns = '12/12';
                    if (numColumns == 2) valueColumns = '6/12_6/12';
                    if (numColumns == 3) valueColumns = '4/12_4/12_4/12';
                    if (numColumns == 4) valueColumns = '3/12_3/12_3/12_3/12';
                    if (numColumns == 5) valueColumns = '3/12_3/12_2/12_2/12_2/12';
                    if (numColumns == 6) valueColumns = '2/12_2/12_2/12_2/12_2/12_2/12';
                    if (numColumns == 7) valueColumns = '2/12_2/12_2/12_2/12_2/12_1/12_1/12';
                    if (numColumns == 8) valueColumns = '2/12_2/12_2/12_2/12_1/12_1/12_1/12_1/12';
                    if (numColumns == 9) valueColumns = '2/12_2/12_2/12_1/12_1/12_1/12_1/12_1/12_1/12';
                    if (numColumns == 10) valueColumns = '2/12_2/12_1/12_1/12_1/12_1/12_1/12_1/12_1/12_1/12';
                    if (numColumns == 11) valueColumns = '2/12_1/12_1/12_1/12_1/12_1/12_1/12_1/12_1/12_1/12_1/12';
                    if (numColumns == 12) valueColumns = '1/12_1/12_1/12_1/12_1/12_1/12_1/12_1/12_1/12_1/12_1/12_1/12';
                    handleNumberColumns(valueColumns);
                    $('.value-columns').val(valueColumns);
                });
                handleNumberColumns('4/12_4/12_4/12');  
            }, 200);
        } 
    });
    function handleNumberColumns(valueColumns) {
        var defaults = [];
        // 12-col grid system
        defaults[12] = [];
        defaults[12][2] = [0, 6, 12];
        defaults[12][3] = [0, 4, 8, 12];
        defaults[12][4] = [0, 3, 6, 9, 12];
        defaults[12][5] = [0, 2, 4, 8, 10, 12];
        defaults[12][6] = [0, 2, 4, 5, 8, 10, 12];
        defaults[12][7] = [0, 2, 4, 8, 10, 11, 12];
        defaults[12][8] = [0, 2, 4, 6, 7, 8, 9, 12];
        defaults[12][9] = [0, 2, 4, 5, 6, 7, 8, 10, 12];
        // Set current value
        var grid = 12, // Need to set this before finding value from input -  12
            columns = 1,
            total = 0,
            fraction = '',
            numerator = 12,
            denominator = 0,
            current = valueColumns,
            values = [];
        if (current) {
            current = current.split('_');
            columns = current.length;
            for (var i = 0; i <= columns; i++) {
                if (i === 0) {
                    values[i] = 0;
                }
                else if (i == columns) {
                    values[i] = grid;
                }
                else {
                    fraction = current[i - 1].split('/');
                    total += (grid * fraction[0]) / fraction[1];
                    values[i] = total;
                }
            }
        }
        else {
            values = defaults[12][5];
        }
        $("#slider-custom-columns").slider({
            range: 'max',
            min: 0,
            max: grid,
            step: 1,
            values: values,
            slide: function(event, ui) {
                var index = $(ui.handle).index(),
                    values = ui.values,
                    count = values.length;
                // First and last can't be moved
                if (index == 1 || index == count) {
                    return false;
                }
                var $container = $(ui.handle).closest('.slider-wrap'),
                    $option = $container.find('input[name="col[widths]"]'),
                    current_val = ui.value,
                    next_val = values[index],
                    prev_val = values[index - 2],
                    next_col = 0,
                    prev_col = 0,
                    prev_col_fraction = '',
                    next_col_fraction = '',
                    next_numerator = 0,
                    prev_numerator = 0,
                    prev_final = '',
                    final = '';
                if (current_val <= prev_val || current_val >= next_val) {
                    return false;
                }
                prev_numerator = current_val - prev_val;
                next_numerator = next_val - current_val;
                prev_col = index - 1;
                next_col = index;
                prev_col_fraction = prev_numerator.toString() + '/' + grid.toString();
                next_col_fraction = next_numerator.toString() + '/' + grid.toString();
                $container.find('input[name="col[' + prev_col + ']"]').val(prev_col_fraction);
                $container.find('input[name="col[' + next_col + ']"]').val(next_col_fraction);
                prev_final = $container.find('input[name="col[widths]"]').val();
                prev_final = prev_final.split('_');
                for (var i = 1; i <= prev_final.length; i++) {
                    if (i == prev_col) {
                        final += prev_col_fraction;
                    }
                    else if (i == next_col) {
                        final += next_col_fraction;
                    }
                    else {
                        final += prev_final[i - 1];
                    }
                    if (i != prev_final.length) {
                        final += '_';
                    }
                }
                $option.val(final);
            }
        }).slider("pips", {
            rest: "label"
        });
    }

    $('#save-custom-layout').on('click', function() {
        var numCustomColumns = $('.value-columns').val();
        var customLayoutHtml = '<div class="placeholder-container"><div class="placeholder">';
        values = [];
        grid = 12;
        total = 0;
        current = numCustomColumns.split('_');
        columns = current.length;
        for (var i = 0; i <= columns; i++) {
            if (i === 0) {
                values[i] = 0;
            }
            else if (i == columns) {
                values[i] = grid;
                fraction = current[i - 1].split('/');
                customLayoutHtml += '<div class="placeholder-content col-md-' + fraction[0] + '"><div class="placeholder-content-area"></div></div>';
            }
            else {
                fraction = current[i - 1].split('/');
                //total += (grid * fraction[0]) / fraction[1];
                values[i] = current[i - 1].split('/');
                customLayoutHtml += '<div class="placeholder-content col-md-' + fraction[0] + '"><div class="placeholder-content-area"></div></div>';
            }
        }
        customLayoutHtml += '</div><div class="placeholder-handle"><div class="handle-move"><i class="fa fa-bars"></i></div><div class="handle-remove"><i class="fa fa-times"></i></div><div class="handle-options"><i class="fa fa-cog"></i></div></div></div>';
        $('.current-layout').addClass('row').removeClass('current-layout').append(customLayoutHtml);
        handleDroppable();
        $('#custom-layout').modal('hide');
    });


    $('.builder-wrapper').on('click', '.placeholder p', function() {
        removeEditor($(this));
        createEditor($(this));
    });
    $('.builder-wrapper').on('click', '.placeholder h1, .placeholder h2, .placeholder h3,.placeholder h4, label,.placeholder button,.placeholder th,.placeholder td,.placeholder li,.placeholder li a,.placeholder .title, .placeholder .number, .placeholder small', function() {
        /* Prevent to remove editor if toolbar button is clicked */
        if (!$(this).parent().parent().hasClass('note-toolbar')) {
            removeEditor($(this));
            createEditorAirMode($(this));
        }
    });
    $('.footer').on('click', 'p', function() {
        removeEditor($(this));
        createEditorAirMode($(this));
    });
    $('.builder-wrapper').on('click', '.placeholder .select-image', function() {
        addImage();
    });
    $('.builder-wrapper').on('click', 'a', function(e) {
        e.preventDefault();
        currentHref = $(this).attr('href');
        if(currentHref != '#'){
            generateNotif('<div class="alert alert-dark media fade in" style="margin-bottom:0;margin-top:10px"><p><i class="icon-bulb p-r-5 f-16"></i> Links are disabled in builder to prevent you loosing content.</p></div>');
        }
    });
    $('body').on('click', '.note-insert', function() {
        $('.note-link-dialog input').iCheck({
            checkboxClass: 'icheckbox_square-blue'
        });
    });
    handleDroppable();
    handleSortable();
    handleSortableForm();
    draggableLayout();
    draggableElement();
    handleRemove();
    createBuilderNotif();
}

/* Drop Elements */
function handleDroppable() {
    $(".placeholder-content").droppable({
        over: function(event, ui) {
            /* We add a Class to element that is hover a valid container */
            if (!ui.draggable.hasClass('layout')) {
                $(this).addClass('drop-hover');
            }
        },
        out: function(event, ui) {
            $(this).removeClass('drop-hover');
        },
        drop: function(event, ui) {
            var $this = $(this);
            ui.draggable.removeClass('ui-draggable');
            if (ui.draggable.prop('class') == 'element') {
                $this.find('.placeholder-content-area').remove();
                if (ui.draggable.data('element') == 'paragraph') {
                    $this.append('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>');
                }
                if (ui.draggable.data('element') == 'title-h1') {
                    $this.append('<h1 class="summernote" data-airmode="true">I am a big Title</h1>');
                }
                if (ui.draggable.data('element') == 'title-h2') {
                    $this.append('<h2 class="summernote" data-airmode="true">I am a medium Title</h2>');
                }
                if (ui.draggable.data('element') == 'title-h3') {
                    $this.append('<h3 class="summernote" data-airmode="true">I am a small Title</h3>');
                }
                if (ui.draggable.data('element') == 'image') {
                    $this.append('<div class="fileinput fileinput-new" data-provides="fileinput"><div class="fileinput-new thumbnail"><img data-src="" src="images/add-picture.jpg" class="img-responsive"></div><div class="fileinput-preview fileinput-exists thumbnail"></div><div class="text-center"><span class="btn btn-default btn-file"><span class="fileinput-new">Select image...</span><span class="fileinput-exists">Change</span><input type="file" name="..."></span><a href="#" class="btn btn-default fileinput-exists" data-dismiss="fileinput">Remove</a></div></div>');
                }
                if (!$this.parent().hasClass('active')) {
                    if ($this.children().hasClass('select-image')) {
                        $this.parent().find('.placeholder-content-area').height($this.height() - 14);
                    }
                    else {
                        $this.parent().find('.placeholder-content-area').height($this.height());
                    }
                }
            }
            if (ui.draggable.prop('class') == 'portlet') {
                $this.find('.placeholder-content-area').remove();
                if (ui.draggable.data('portlet') == 'basic') {
                    $this.append('<div class="panel"><div class="panel-content"><h1><strong>Simple</strong> Portlets</h1><p>Example of panel with no header and footer.<br>You can edit content by clicking on text.</p></div></div>');
                }
                if (ui.draggable.data('portlet') == 'header') {
                    $this.append('<div class="panel"><div class="panel-header bg-primary"><h3>Portlet <strong>Title</strong></h3></div><div class="panel-content"><p>Example of portlet with header.<br>You can edit content by clicking on text.</p></div></div>');
                }
                if (ui.draggable.data('portlet') == 'footer-txt') {
                    $this.append('<div class="panel"><div class="panel-content"><h1>Just footer, no header.</h1><p class="m-t-40">Like for header, you can add color to footer<br>You can edit content by clicking on text.</p></div><div class="panel-footer bg-dark"><h3>Portlet <strong>Footer</strong></h3></div></div>');
                }
                if (ui.draggable.data('portlet') == 'footer-btn') {
                    $this.append('<div class="panel"><div class="panel-content"><h1>Just footer, no header.</h1><p class="m-t-40">Like for header, you can add color to footer<br>You can edit content by clicking on text.</p></div><div class="panel-footer clearfix"><div class="pull-right"><button type="button" class="btn btn-white m-r-10">Cancel</button><button type="button" class="btn btn-success">Submit</button></div></div>');
                }
                if (ui.draggable.data('portlet') == 'header-footer') {
                    $this.append('<div class="panel"><div class="panel-header"><h3>Portlet <strong>Header</strong></h3></div><div class="panel-content"><p>Example of portlet with header and footer. You can edit content by clicking on text.</p></div><div class="panel-footer"><h3>Portlet <strong>Footer</strong></h3></div></div>');
                }
            }
            if (ui.draggable.prop('class') == 'form') {
                formElement = null;
                formElement = ui.draggable.data('form');
                // $this.find('.placeholder-content-area').remove();
                if ($this.find('form').length == 0) {
                    $('#form-settings').modal('show');
                    $('.current-form').removeClass('current-form');
                    $this.append('<form class="current-form" role="form" method="" action="" style="display:none"></form>');
                }
                else {
                    $this.find('form').addClass('current-form');
                    if (formElement == 'input') {
                        if ($this.find('form').hasClass('form-horizontal')) {
                            $this.find('form').append('<div class="form-group"><label class="col-sm-3 control-label">Label</label><div class="col-sm-9"><input class="form-control form-white" type="text" placeholder=""></div></div>');
                        }
                        else {
                            $this.find('form').append('<div class="form-group"><label>Label</label><input class="form-control" type="text" placeholder=""></div>');
                        }
                    }
                    if (formElement == 'textarea') {
                        if ($this.find('form').hasClass('form-horizontal')) {
                            $this.find('form').append('<div class="form-group"><label class="col-sm-3 control-label">Label</label><div class="col-sm-9"><textarea class="form-control form-white" rows="5"></textarea></div></div>');
                        }
                        else {
                            $this.find('form').append('<div class="form-group"><label>Label</label><textarea class="form-control form-white" rows="5"></textarea></div>');
                        }
                    }
                    if (formElement == 'radio') {
                        $('#form-radio').modal('show');
                    }
                    if (formElement == 'checkbox') {
                        $('#form-checkbox').modal('show');
                    }
                    if (formElement == 'select') {
                        $('#form-select').modal('show');
                    }
                    if (formElement == 'button') {
                        $('#form-button').modal('show');
                    }
                    handleSortableForm();
                }
            }
            if (ui.draggable.prop('class') == 'build-table') {
                currentTable = ui.draggable.data('table');
                $this.find('.placeholder-content-area').remove();
                if (currentTable == 'table') {
                  $this.append('<table class="current-table table" style="display:none"></table>');
                }
                if (currentTable == 'table-dynamic') {
                  $this.append('<table class="current-table table table-dynamic" style="display:none"></table>');
                } 
                $('#table').modal('show');
            }
            if (ui.draggable.prop('class') == 'build-widget') {
                currentWidget = ui.draggable.data('widget');
                if (currentWidget == 'todo') {
                    if ($('.builder-wrapper .todo-list').length) {
                        alert('You can only add one todo list per page');
                        $this.removeClass('drop-hover');
                        return;
                    }
                    $this.find('.placeholder-content-area').remove();
                    $this.append(widgetTodoList);
                    $this.iCheck({
                        checkboxClass: 'icheckbox_square-blue'
                    });
                    handleTodoList();
                }
                if (currentWidget == 'weather') {
                    if ($('.builder-wrapper .widget-weather').length) {
                        alert('You can only add one weather widget per page');
                        $this.removeClass('drop-hover');
                        return;
                    }
                    $this.find('.placeholder-content-area').remove();
                    $this.append('<div class="panel widget-weather"></div>');
                    widgetWeather();
                }
                if (currentWidget == 'calendar') {
                    $this.find('.placeholder-content-area').remove();
                    $this.append('<div class="widget widget_calendar bg-dark"><div class="multidatepicker"></div></div>');
                    multiDatesPicker();
                }
                if (currentWidget == 'news') {
                    $this.find('.placeholder-content-area').remove();
                    $this.append(widgetNews);
                    customScroll();
                }
                if (currentWidget == 'table') {
                    $this.find('.placeholder-content-area').remove();
                    $this.append(widgetTable);
                    customScroll();
                }
                if (currentWidget == 'counter') {
                    $this.find('.placeholder-content-area').remove();
                    $this.append(widgetCounter);
                    animateNumber();
                }
                if (currentWidget == 'user-profile') {
                    $this.find('.placeholder-content-area').addClass('current-context');
                    $('#modal-user-profile').modal('show');

                }
            }
            $this.removeClass('drop-hover');
            $this.parent().parent().addClass('active');
        }
    });
}

/* Handle Sortable Elements */
function handleSortable() {
    $(".builder-wrapper").sortable({
        items: "> .row",
        handle: ".placeholder-handle",
        axis: "y",
        dropOnEmpty: true,
        forcePlaceholderSize: true,
        revert: false,
        receive: function(event, ui) {
            var html = [];
            var $this = $(this);
            ui.item.removeClass('ui-draggable');
            if (ui.item.prop('class') == 'layout') {
                if (ui.item.data('layout') == 'one-column') {
                    $(this).children().not(".row").replaceWith('<div class="row"><div class="placeholder-container"><div class="placeholder"><div class="placeholder-content col-md-12"><div class="placeholder-content-area"></div></div></div><div class="placeholder-handle"><div class="handle-move"><i class="fa fa-bars"></i></div><div class="handle-remove"><i class="fa fa-times"></i></div></div></div></div>');
                }
                if (ui.item.data('layout') == 'two-column-50') {
                    $(this).children().not(".row").replaceWith('<div class="row"><div class="placeholder-container"><div class="placeholder"><div class="placeholder-content col-md-6"><div class="placeholder-content-area"></div></div><div class="placeholder-content col-md-6"><div class="placeholder-content-area"></div></div></div><div class="placeholder-handle"><div class="handle-move"><i class="fa fa-bars"></i></div><div class="handle-remove"><i class="fa fa-times"></i></div></div></div></div>');
                }
                if (ui.item.data('layout') == 'two-column-33') {
                    $(this).children().not(".row").replaceWith('<div class="row"><div class="placeholder-container"><div class="placeholder"><div class="placeholder-content col-md-4"><div class="placeholder-content-area"></div></div><div class="placeholder-content col-md-8"><div class="placeholder-content-area"></div></div></div><div class="placeholder-handle"><div class="handle-move"><i class="fa fa-bars"></i></div><div class="handle-remove"><i class="fa fa-times"></i></div><div class="handle-options"><i class="fa fa-cog"></i></div></div></div></div>');
                }
                if (ui.item.data('layout') == 'two-column-66') {
                    $(this).children().not(".row").replaceWith('<div class="row"><div class="placeholder-container"><div class="placeholder"><div class="placeholder-content col-md-8"><div class="placeholder-content-area"></div></div><div class="placeholder-content col-md-4"><div class="placeholder-content-area"></div></div></div><div class="placeholder-handle"><div class="handle-move"><i class="fa fa-bars"></i></div><div class="handle-remove"><i class="fa fa-times"></i></div><div class="handle-options"><i class="fa fa-cog"></i></div></div></div></div>');
                }
                if (ui.item.data('layout') == 'three-column-33') {
                    $(this).children().not(".row").replaceWith('<div class="row"><div class="placeholder-container"><div class="placeholder"><div class="placeholder-content col-md-4"><div class="placeholder-content-area"></div></div><div class="placeholder-content col-md-4"><div class="placeholder-content-area"></div></div><div class="placeholder-content col-md-4"><div class="placeholder-content-area"></div></div></div><div class="placeholder-handle"><div class="handle-move"><i class="fa fa-bars"></i></div><div class="handle-remove"><i class="fa fa-times"></i></div></div></div></div>');
                }
                if (ui.item.data('layout') == 'three-column-25') {
                    $(this).children().not(".row").replaceWith('<div class="row"><div class="placeholder-container"><div class="placeholder"><div class="placeholder-content col-md-3"><div class="placeholder-content-area"></div></div><div class="placeholder-content col-md-6"><div class="placeholder-content-area"></div></div><div class="placeholder-content col-md-3"><div class="placeholder-content-area"></div></div></div><div class="placeholder-handle"><div class="handle-move"><i class="fa fa-bars"></i></div><div class="handle-remove"><i class="fa fa-times"></i></div></div></div></div>');
                }
                if (ui.item.data('layout') == 'four-column') {
                    $(this).children().not(".row").replaceWith('<div class="row"><div class="placeholder-container"><div class="placeholder"><div class="placeholder-content col-md-3"><div class="placeholder-content-area"></div></div><div class="placeholder-content col-md-3"><div class="placeholder-content-area"></div></div><div class="placeholder-content col-md-3"><div class="placeholder-content-area"></div></div><div class="placeholder-content col-md-3"><div class="placeholder-content-area"></div></div></div><div class="placeholder-handle"><div class="handle-move"><i class="fa fa-bars"></i></div><div class="handle-remove"><i class="fa fa-times"></i></div></div></div></div>');
                }
                if (ui.item.data('layout') == 'custom') {
                    // $this.append('<div class="current-layout"></div>');
                    $('#custom-layout').modal('show');
                    $(this).children().not(".row").replaceWith('<div class="current-layout"></div>');
                }
            }
            handleDroppable();
        }
    });
}

/* Handle Sortable Form Elements */
function handleSortableForm(){
    $(".builder-wrapper .form-group").each(function(){
        $(this).remove('.form-sortable-btn');
        $(this).append('<div class="form-sortable-btn"><i class="icon-cursor-move"></i></div>');
    });
    $(".builder-wrapper form").sortable({
        connectWith: ".form-group",
        handle: ".form-sortable-btn",
        opacity: 0.5,
        axis: "y",
        dropOnEmpty: true,
        forcePlaceholderSize: true,
        receive: function(event, ui) {
            $("body").trigger("resize")
        }
    });
}

function draggableLayout() {
    $('#page-builder .layout').draggable({
        helper: function() {
            return $('<div class="arrow_box"><p>You can drop it here!</p></div>');
        },
        appendTo: 'body',
        connectToSortable: '.builder-wrapper'
    });
}

function draggableElement() {
    $('#page-builder .element, #page-builder .portlet, #page-builder .form, #page-builder .build-table, #page-builder .build-widget').draggable({
        helper: function() {
            currentElement = $(this).html();
            return $('<div style="padding:20px;height: 100px; border:1px solid #E6E6E6;border-radius:3px;width: 300px; background: #fff; box-shadow: 3px 3px 2px rgba(0,0,0,0.1); text-align: center; line-height: 30px; font-size: 16px; color: #121212">' + currentElement + '</div>');
        },
        appendTo: 'body'
    });
}

function createEditor(element) {
    element.addClass('editing');
    element.summernote({
        height: 'auto',
        airMode: false,
        toolbar: [
            ["style", ["style"]],
            ["style", ["bold", "italic", "underline", "clear"]],
            ["fontsize", ["fontsize"]],
            ["color", ["color"]],
            ["para", ["ul", "ol", "paragraph"]],
            ["height", ["height"]],
            ['insert', ['picture']]
        ]
    });
}

function createEditorAirMode(element) {
    element.addClass('editing');
    element.summernote({
        height: 300,
        airMode: true,
        airPopover: [
            ["style", ["style"]],
            ['color', ['color']],
            ['font', ['bold', 'underline', 'clear']],
            ['para', ['ul', 'paragraph']]
          ]
    });
}

function removeEditor(element) {
    $('.placeholder p, .placeholder h1, .placeholder h2, .placeholder h2, .placeholder h3, .placeholder label, .placeholder button, .placeholder th, .placeholder td, .placeholder li, .placeholder li a').removeClass('editing');
    $(this).addClass('editing');
    $('.placeholder p, .placeholder h1, .placeholder h2, .placeholder h2, .placeholder h3, .placeholder label, .placeholder button, .placeholder th, .placeholder td, .placeholder li, .placeholder li a').each(function() {
        if (!$(this).hasClass('editing')) {
            $(this).destroy();
        }
    });
    $('.footer p').each(function() {
        $(this).destroy();
    });
}

function createIcheckEditor() {
    $('.placeholder input').on('ifChanged', function() {
        $(this).parent().parent().parent().find('label').destroy();
        $('.editing').removeClass('editing');
        createEditorAirMode($(this).parent().parent());
    });
}

function handleRemove() {
    $('.page-content').on('click', '.handle-remove', function() {
        currentElement = $(this).parent().parent();
        bootbox.confirm('Are you sure you want to remove this section?', function(result) {
            if (result === true) {
                currentElement.addClass("animated bounceOutRight");
                window.setTimeout(function() {
                    currentElement.remove();
                }, 300);
            }
        });
    });
}

function createPageBuilder() {

    var contentPageBuider = '<div id="page-builder" class="bg-primary"><div class="tabs tabs-linetriangle"><ul class="nav nav-tabs"><li class="width-16p active"><a href="#layout" data-toggle="tab"><span class="text-center">Layout</span></a></li><li class="width-16p"><a href="#portlets" data-toggle="tab"><span class="text-center">Panels</span></a></li><li class="width-16p"><a href="#text" data-toggle="tab"><span class="text-center">Text &amp; Images</span></a></li><li class="width-16p"><a href="#forms" data-toggle="tab"><span class="text-center">Forms</span></a></li><li class="width-16p"><a href="#tables" data-toggle="tab"><span class="text-center">Tables</span></a></li><li class="width-16p"><a href="#widgets" data-toggle="tab"><span class="text-center">Widgets</span></a></li></ul><div class="tab-content clearfix"><div class="tab-pane fade in active" id="layout"><div data-layout="one-column" class="layout"><p><strong>1 column</strong></p><p>100%</p></div><div data-layout="two-column-50" class="layout"><p><strong>2 columns</strong></p><p>2 x 50%</p></div><div data-layout="two-column-33" class="layout"><p><strong>2 columns</strong></p><p>33% + 66%</p></div><div data-layout="two-column-66" class="layout"><p><strong>2 columns</strong></p><p>66% + 33%</p></div><div data-layout="three-column-33" class="layout"><p><strong>3 columns</strong></p><p>3x 33%</p></div><div data-layout="three-column-25" class="layout"><p><strong>3 columns</strong></p><p>25% + 50% + 25%</p></div><div data-layout="four-column" class="layout"><p><strong>4 columns</strong></p><p>4 x 25%</p></div><div data-layout="custom" class="layout"><p><strong>Custom Layout</strong></p><p>You choose!</p></div></div><div class="tab-pane fade" id="portlets"><div data-portlet="basic" class="portlet">Basic Panel</div><div data-portlet="header" class="portlet">With Header</div><div data-portlet="footer-txt" class="portlet">With Footer<br> Text</div><div data-portlet="footer-btn" class="portlet">With Footer<br> Button</div><div data-portlet="header-footer" class="portlet">Header &amp; Footer</div></div><div class="tab-pane fade" id="text"><div data-element="image" class="element">Image</div><div data-element="paragraph" class="element">Paragraph</div><div data-element="title-h1" class="element">Big Title h1</div><div data-element="title-h2" class="element">Medium Title h2</div><div data-element="title-h3" class="element">Small Title h3</div></div><div class="tab-pane fade" id="forms"><div data-form="input" class="form">Input Text</div><div data-form="textarea" class="form">Textarea</div><div data-form="radio" class="form">Radio</div><div data-form="checkbox" class="form">Checkbox</div><div data-form="select" class="form">Select</div><div data-form="slider" class="form">Slider</div><div data-form="button" class="form">Button</div></div><div class="tab-pane fade" id="tables"><div data-table="table" class="build-table">Table Basic</div><div data-table="table-dynamic" class="build-table">Table Dynamic</div></div><div class="tab-pane fade" id="widgets"><div data-widget="news" class="build-widget">News</div><div data-widget="table" class="build-widget">Panel Table</div><div data-widget="calendar" class="build-widget">Calendar</div><div data-widget="user-profile" class="build-widget">User Profile</div></div></div></div></div><div class="builder-wrapper"><div class="row"><div class="placeholder-container"><div class="placeholder"><div class="placeholder-content col-md-12"><div class="header"><h2>Admin Page <strong>Builder</strong></h2><div class="breadcrumb-wrapper"><ol class="breadcrumb"><li class="c-primary">Make</li><li class="c-primary">Builder</li><li class="active">Page Builder</li></ol></div><p>Welcome to Make page builder! You can customize easily and quickly your page. Don\'t hesitate to send us suggestions to improve this tool.</p></div></div></div><div class="placeholder-handle"><div class="handle-move" data-rel="tooltip" data-placement="right" data-original-title="Move"><i class="fa fa-bars"></i></div><div class="handle-remove" data-rel="tooltip" data-placement="right" data-original-title="Remove"><i class="fa fa-times"></i></div></div></div></div><div class="row"><div class="placeholder-container"><div class="placeholder"><div class="placeholder-content col-md-6"><div class="placeholder-content-area"></div></div><div class="placeholder-content col-md-6"><div class="placeholder-content-area"></div></div></div><div class="placeholder-handle"><div class="handle-move" data-rel="tooltip" data-placement="right" data-original-title="Move"><i class="fa fa-bars"></i></div><div class="handle-remove" data-rel="tooltip" data-placement="right" data-original-title="Remove"><i class="fa fa-times"></i></div></div></div></div><div class="row"><div class="placeholder-container"><div class="placeholder"><div class="placeholder-content col-md-8"><div class="placeholder-content-area"></div></div><div class="placeholder-content col-md-4"><div class="placeholder-content-area"></div></div></div><div class="placeholder-handle"><div class="handle-move" data-rel="tooltip" data-placement="right" data-original-title="Move"><i class="fa fa-bars"></i></div><div class="handle-remove" data-rel="tooltip" data-placement="right" data-original-title="Remove"><i class="fa fa-times"></i></div></div></div></div><div class="row"><div class="placeholder-container"><div class="placeholder"><div class="placeholder-content col-md-12"><div class="placeholder-content-area"></div></div></div><div class="placeholder-handle"><div class="handle-move" data-rel="tooltip" data-placement="right" data-original-title="Move"><i class="fa fa-bars"></i></div><div class="handle-remove" data-rel="tooltip" data-placement="right" data-original-title="Remove"><i class="fa fa-times"></i></div></div></div></div></div><div class="modal fade" id="form-settings" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header bg-primary"><button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="icons-office-52"></i></button><h4 class="modal-title"><strong>Form</strong> Settings</h4></div><div class="modal-body"><div class="form-group m-t-10"><label class="control-label">Form Title <small>optionnal</small></label><div class="append-icon"><input type="text" class="form-title form-control form-white" /><i class="icon-pencil"></i></div></div><div class="form-group m-t-10"><label class="control-label">Choose your Form Layout</label><div class="input-group m-t-10"><div class="icheck-inline"><label><input type="radio" name="form-layout" data-form-layout="horizontal" data-radio="iradio_minimal-blue" checked> Horizontal</label><label><input type="radio" name="form-layout" data-form-layout="vertical" data-radio="iradio_minimal-blue"> Vertical</label></div></div></div></div><div class="modal-footer"><button type="button" class="close-modal btn btn-default btn-embossed" data-dismiss="modal">Close</button><button type="button" id="save-form-settings" class="btn btn-primary btn-embossed">Save changes</button></div></div></div></div><div class="modal fade" id="form-radio" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header bg-primary"><button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="icons-office-52"></i></button><h4 class="modal-title"><strong>Form</strong> Radio</h4></div><div class="modal-body"><div class="form-group m-t-10"><label class="control-label">Label</label><div class="append-icon"><input type="text" class="radio-label form-control form-white" /><i class="icon-pencil"></i></div></div><div class="form-group m-t-10"><label class="control-label">Radio Name</label><div class="append-icon"><input type="text" class="radio-name form-control form-white" /><i class="icon-pencil"></i></div></div><div class="form-group"><p><strong>Number of Radio Buttons</strong></p><div class="input-group"><div style="width:560px" class="primary m-b-30 m-t-20"><div data-slider-tooltip="always" class="radio-slide" data-slider-min="2" data-slider-max="10" data-slider-value="3"></div></div></div></div><div class="form-group"><p><strong>Radios Layout</strong></p><div class="input-group"><div class="icheck-inline radio-layout"><label><input type="radio" name="radio-layout" data-radio-layout="vertical" data-radio="iradio_minimal-blue" checked> Vertical</label><label><input type="radio" name="radio-layout" data-radio-layout="horizontal" data-radio="iradio_minimal-blue"> Horizontal</label></div></div></div><div class="input-group"><div class="icheck-list"><label><input type="checkbox" class="radio-required" data-checkbox="icheckbox_square-blue"> Required </label><label></div></div></div><div class="modal-footer"><button type="button" class="close-modal btn btn-default btn-embossed" data-dismiss="modal">Close</button><button type="button" id="save-form-radio" class="btn btn-primary btn-embossed">Save changes</button></div></div></div></div><div class="modal fade" id="form-checkbox" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header bg-primary"><button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="icons-office-52"></i></button><h4 class="modal-title"><strong>Form</strong> Checkbox</h4></div><div class="modal-body"><div class="form-group m-t-10"><label class="control-label">Label</label><div class="append-icon"><input type="text" class="checkbox-label form-control form-white" /><i class="icon-pencil"></i></div></div><div class="form-group m-t-10"><label class="control-label">Checkbox Name</label><div class="append-icon"><input type="text" class="checkbox-name form-control form-white" /><i class="icon-pencil"></i></div></div><div class="form-group"><p><strong>Number of Checkbox Buttons</strong></p><div class="input-group"><div style="width:560px" class="primary m-b-30 m-t-20"><div data-slider-tooltip="always" class="checkbox-slide" data-slider-min="2" data-slider-max="10" data-slider-value="3"></div></div></div></div><div class="form-group"><p><strong>Radios Layout</strong></p><div class="input-group"><div class="icheck-inline checkbox-layout"><label><input type="radio" class="checkbox-vertical" name="checkbox-layout" data-checkbox-layout="vertical" data-radio="iradio_minimal-blue" checked> Vertical</label><label><input type="radio" class="checkbox-horizontal" name="checkbox-layout" data-checkbox-layout="horizontal" data-radio="iradio_minimal-blue"> Horizontal</label></div></div></div><div class="input-group"><p><strong>This field is mandatory</strong></p><div class="icheck-list"><label><input type="checkbox" class="checkbox-required" data-checkbox="icheckbox_square-blue"> Required </label><label></div></div></div><div class="modal-footer"><button type="button" class="btn btn-default btn-embossed" data-dismiss="modal">Close</button><button type="button" id="save-form-checkbox" class="btn btn-primary btn-embossed">Save changes</button></div></div></div></div><div class="modal fade" id="form-select" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header bg-primary"><button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="icons-office-52"></i></button><h4 class="modal-title"><strong>Form</strong> Select</h4></div><div class="modal-body"><div class="form-group m-t-10"><label class="control-label">Label</label><div class="append-icon"><input type="text" class="select-label form-control form-white" /><i class="icon-pencil"></i></div></div><div class="form-group m-t-10"><label class="control-label">Select Name</label><div class="append-icon"><input type="text" class="select-name form-control form-white" /><i class="icon-pencil"></i></div></div><div class="form-group"><p><strong>Options</strong><small>One option per line</small><p><textarea name="select-options" id="" cols="30" rows="10" class="form-control form-white select-options"></textarea></div><div class="form-group"><p><strong>Select settings</strong><div class="input-group"><div class="icheck-inline"><label><input type="checkbox" class="select-required" data-checkbox="icheckbox_square-blue"> Required</label><label><input type="checkbox" class="select-multiple" data-checkbox="icheckbox_square-blue"> Multiple choice</label><label><input type="checkbox" class="select-search" data-checkbox="icheckbox_square-blue"> Search include</label></div></div></div></div><div class="modal-footer"><button type="button" class="btn btn-default btn-embossed" data-dismiss="modal">Close</button><button type="button" id="save-form-select" class="btn btn-primary btn-embossed">Save changes</button></div></div></div></div><div class="modal fade" id="form-button" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header bg-primary"><button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="icons-office-52"></i></button><h4 class="modal-title"><strong>Form</strong> Buttons</h4></div><div class="modal-body"><div class="form-group m-t-10"><label class="control-label">Label <small>optional</small></label><div class="append-icon"><input type="text" class="button-label form-control form-white" /><i class="icon-pencil"></i></div></div><div class="form-group m-t-10"><p><strong>Button Type</strong></p><div class="input-group"><div class="icheck-inline button-type"><label><input type="radio" class="file-btn" data-button-type="btn-file" name="button-type" data-radio="iradio_minimal-blue"> File button</label><label><input type="radio" class="btn1" data-button-type="btn1" name="button-type" checked data-radio="iradio_minimal-blue" checked> 1 button</label><label><input type="radio"class="btn1-2" data-button-type="btn1-2" name="button-type" data-radio="iradio_minimal-blue"> 2 button </label></div></div></div><div class="row btn1 btn1-2" id="btn1"><div class="col-sm-12"><p><strong>Button 1</strong></p></div><div class="col-sm-6 m-t-10"><div class="form-group"><label class="control-label">Button Class Type</label><select class="button1-class form-control" data-placeholder="Choose a class name..."><option value="default">Default</option><option value="success">Success</option><option value="primary">Primary</option><option value="danger">Danger</option><option value="warning">Warning</option><option value="info">Info</option><option value="white">White</option><option value="dark">Dark</option></select></div></div><div class="col-sm-6 m-t-10"><div class="form-group"><label class="control-label">Button Style</label><select class="button1-style form-control" data-placeholder="Choose a style..."><option value="default">Default</option><option value="embossed">Embossed</option><option value="square">Square</option><option value="transparent">Transparent</option><option value="rounded">Rounded</option></select></div></div><div class="col-sm-6"><div class="form-group"><label class="control-label">ID / Name</label><div class="append-icon"><input type="text" class="button1-name form-control form-white" /><i class="icon-pencil"></i></div></div></div><div class="col-sm-6"><div class="form-group"><label class="control-label">Button text</label><div class="append-icon"><input type="text" class="button1-txt form-control form-white" /><i class="icon-pencil"></i></div></div></div></div><div class="row btn1-2" id="btn2" style="display:none"><div class="col-sm-12"><p><strong>Button 2</strong></p></div><div class="col-sm-6 m-t-10"><div class="form-group"><label class="control-label">Button Class Type</label><select class="button2-class form-control" data-placeholder="Choose a class name..."><option value="default">Default</option><option value="success">Success</option><option value="primary">Primary</option><option value="danger">Danger</option><option value="warning">Warning</option><option value="info">Info</option><option value="white">White</option><option value="dark">Dark</option></select></div></div><div class="col-sm-6 m-t-10"><div class="form-group"><label class="control-label">Button Style</label><select class="button2-style form-control" data-placeholder="Choose a style..."><option value="default">Default</option><option value="embossed">Embossed</option><option value="square">Square</option><option value="transparent">Transparent</option><option value="rounded">Rounded</option></select></div></div><div class="col-sm-6 m-t-10"><div class="form-group"><label class="control-label">ID / Name</label><div class="append-icon"><input type="text" class="button2-name form-control form-white" /><i class="icon-pencil"></i></div></div></div><div class="col-sm-6 m-t-10"><div class="form-group"><label class="control-label">Button text</label><div class="append-icon"><input type="text" class="button2-txt form-control form-white" /><i class="icon-pencil"></i></div></div></div></div><div class="row btn-file" id="file-btn" style="display:none"><div class="col-sm-12"><p><strong>File Button</strong></p></div><div class="col-sm-6"><div class="form-group m-t-10"><label class="control-label">ID / Name</label><div class="append-icon"><input type="text" class="file-button-label form-control form-white" /><i class="icon-pencil"></i></div></div></div><div class="col-sm-6"><div class="form-group m-t-10"><label class="control-label">Button text</label><div class="append-icon"><input type="text" class="file-button-txt form-control form-white" /><i class="icon-pencil"></i></div></div></div></div></div><div class="modal-footer"><button type="button" class="btn btn-default btn-embossed" data-dismiss="modal">Close</button><button type="button" id="save-form-button" class="btn btn-primary btn-embossed">Save changes</button></div></div></div></div><div class="modal fade" id="table" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header bg-primary"><button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="icons-office-52"></i></button><h4 class="modal-title"><strong>Form</strong> Table</h4></div><div class="modal-body"><div class="form-group m-t-10"><label class="control-label">Table Title <small>optionnal</small></label><div class="append-icon"><input type="text" class="table-title form-control form-white" /><i class="icon-pencil"></i></div></div><div class="form-group"><label class="control-label">Table Style</label><select class="table-style form-control" data-placeholder="Choose table style..."><option value="default">Default</option><option value="striped">Stripped row</option><option value="hover">Hover table</option><option value="bordered">Bordered</option></select></div><div class="row"><div class="col-sm-6"><div class="form-group"><p><strong>Number of Columns</strong></p><div class="input-group m-t-20"><div style="width:250px" class="primary m-b-30 m-t-20"><div data-slider-tooltip="always" class="table-columns-slide" data-slider-min="1" data-slider-max="20" data-slider-value="5"></div></div></div></div></div><div class="col-sm-6"><div class="form-group"><p><strong>Number of Rows</strong></p><div class="input-group m-t-20"><div style="width:255px" class="primary m-b-30 m-t-20"><div data-slider-tooltip="always" class="table-rows-slide" data-slider-min="1" data-slider-max="100" data-slider-value="5"></div></div></div></div></div></div></div><div class="modal-footer"><button type="button" class="btn btn-default btn-embossed" data-dismiss="modal">Close</button><button type="button" id="save-table" class="btn btn-primary btn-embossed">Save changes</button></div></div></div></div><div class="modal fade" id="custom-layout" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header bg-primary"><button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="icons-office-52"></i></button><h4 class="modal-title">Custom <strong>Layout</strong></h4></div><div class="modal-body"><div class="form-group m-b-0"><label class="control-label">Choose number of columns / sections you need</label><div class="input-group m-t-10"><div style="width:545px" class="primary m-b-10 m-t-20 m-l-10"><div data-slider-tooltip="always" id="num-columns" class="custom-slide-columns" data-slider-min="1" data-slider-max="12" data-slider-value="3"></div></div></div><div class="slider-wrap p-20 m-t-40" style="margin-left:-8px"><div id="slider-custom-columns"></div><input type="hidden" class="value-columns form-control" name="col[widths]" value="4/12_4/12_4/12" /></div></div></div><div class="modal-footer"><button type="button" class="btn btn-default btn-embossed" data-dismiss="modal">Cancel</button><button type="button" id="save-custom-layout" class="btn btn-primary btn-embossed">Create Layout</button></div></div></div></div><div class="modal fade" id="modal-export-page" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><form action="assets/save.php" target="_blank" id="markupForm" method="post"><input type="hidden" name="markup" value="" id="markupField"><div class="modal-dialog" style="width:500px"><div class="modal-content"><div class="modal-header bg-primary"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="icons-office-52"></i></span></button><h4 class="modal-title" id="myModalLabel">Export My Page Template</h4></div><div class="modal-body"><div class="form-group m-t-10 form-link"><label class="control-label">Choose your Template Name:</label><div class="append-icon"><input type="text" name="html-file-name" class="html-file-name form-control form-white" /><i class="icon-pencil"></i></div></div></div><div class="modal-footer t-center"><button type="button" class="btn btn-white" data-dismiss="modal">Cancel</button><button type="submit" class="btn btn-primary" id="save-export">Export my Page</button><div class="alert alert-info m-t-20 p-10"><p class="f-13">After uploading your template, copy and past your file inside admin folder, with other admin pages.</p></div></div></div></div></form></div><div class="modal fade" id="modal-icons" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog" style="width:500px"><div class="modal-content"><div class="modal-header bg-primary"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="icons-office-52"></i></span></button><h4 class="modal-title" id="myModalLabel">Icons</h4></div><div class="modal-body withScroll" data-height="220"><div class="row"><div class="col-md-12"><h3 class="m-t-0"><strong>Font Awesome</strong></h3></div><div class="col-sm-2"><i class="fa fa-adjust"></i></div><div class="col-sm-2"><i class="fa fa-anchor"></i></div><div class="col-sm-2"><i class="fa fa-archive"></i></div><div class="col-sm-2"><i class="fa fa-area-chart"></i></div><div class="col-sm-2"><i class="fa fa-arrows"></i></div><div class="col-sm-2"><i class="fa fa-arrows-h"></i></div><div class="col-sm-2"><i class="fa fa-arrows-v"></i></div><div class="col-sm-2"><i class="fa fa-asterisk"></i></div><div class="col-sm-2"><i class="fa fa-at"></i></div><div class="col-sm-2"><i class="fa fa-automobile"></i></div><div class="col-sm-2"><i class="fa fa-ban"></i></div><div class="col-sm-2"><i class="fa fa-bank"></i></div><div class="col-sm-2"><i class="fa fa-bar-chart"></i></div><div class="col-sm-2"><i class="fa fa-bar-chart-o"></i></div><div class="col-sm-2"><i class="fa fa-barcode"></i></div><div class="col-sm-2"><i class="fa fa-bars"></i></div><div class="col-sm-2"><i class="fa fa-beer"></i></div><div class="col-sm-2"><i class="fa fa-bell"></i></div><div class="col-sm-2"><i class="fa fa-bell-o"></i></div><div class="col-sm-2"><i class="fa fa-bell-slash"></i></div><div class="col-sm-2"><i class="fa fa-bell-slash-o"></i></div><div class="col-sm-2"><i class="fa fa-bicycle"></i></div><div class="col-sm-2"><i class="fa fa-binoculars"></i></div><div class="col-sm-2"><i class="fa fa-birthday-cake"></i></div><div class="col-sm-2"><i class="fa fa-bolt"></i></div><div class="col-sm-2"><i class="fa fa-bomb"></i></div><div class="col-sm-2"><i class="fa fa-book"></i></div><div class="col-sm-2"><i class="fa fa-bookmark"></i></div><div class="col-sm-2"><i class="fa fa-bookmark-o"></i></div><div class="col-sm-2"><i class="fa fa-briefcase"></i></div><div class="col-sm-2"><i class="fa fa-bug"></i></div><div class="col-sm-2"><i class="fa fa-building"></i></div><div class="col-sm-2"><i class="fa fa-building-o"></i></div><div class="col-sm-2"><i class="fa fa-bullhorn"></i></div><div class="col-sm-2"><i class="fa fa-bullseye"></i></div><div class="col-sm-2"><i class="fa fa-cab"></i></div><div class="col-sm-2"><i class="fa fa-calculator"></i></div><div class="col-sm-2"><i class="fa fa-calendar"></i></div><div class="col-sm-2"><i class="fa fa-calendar-o"></i></div><div class="col-sm-2"><i class="fa fa-camera"></i></div><div class="col-sm-2"><i class="fa fa-camera-retro"></i></div><div class="col-sm-2"><i class="fa fa-car"></i></div><div class="col-sm-2"><i class="fa fa-caret-square-o-down"></i></div><div class="col-sm-2"><i class="fa fa-caret-square-o-left"></i></div><div class="col-sm-2"><i class="fa fa-caret-square-o-right"></i></div><div class="col-sm-2"><i class="fa fa-caret-square-o-up"></i></div><div class="col-sm-2"><i class="fa fa-cc"></i></div><div class="col-sm-2"><i class="fa fa-certificate"></i></div><div class="col-sm-2"><i class="fa fa-check"></i></div><div class="col-sm-2"><i class="fa fa-check-circle"></i></div><div class="col-sm-2"><i class="fa fa-check-circle-o"></i></div><div class="col-sm-2"><i class="fa fa-check-square"></i></div><div class="col-sm-2"><i class="fa fa-check-square-o"></i></div><div class="col-sm-2"><i class="fa fa-child"></i></div><div class="col-sm-2"><i class="fa fa-circle"></i></div><div class="col-sm-2"><i class="fa fa-circle-o"></i></div><div class="col-sm-2"><i class="fa fa-circle-o-notch"></i></div><div class="col-sm-2"><i class="fa fa-circle-thin"></i></div><div class="col-sm-2"><i class="fa fa-clock-o"></i></div><div class="col-sm-2"><i class="fa fa-close"></i></div><div class="col-sm-2"><i class="fa fa-cloud"></i></div><div class="col-sm-2"><i class="fa fa-cloud-download"></i></div><div class="col-sm-2"><i class="fa fa-cloud-upload"></i></div><div class="col-sm-2"><i class="fa fa-code"></i></div><div class="col-sm-2"><i class="fa fa-code-fork"></i></div><div class="col-sm-2"><i class="fa fa-coffee"></i></div><div class="col-sm-2"><i class="fa fa-cog"></i></div><div class="col-sm-2"><i class="fa fa-cogs"></i></div><div class="col-sm-2"><i class="fa fa-comment"></i></div><div class="col-sm-2"><i class="fa fa-comment-o"></i></div><div class="col-sm-2"><i class="fa fa-comments"></i></div><div class="col-sm-2"><i class="fa fa-comments-o"></i></div><div class="col-sm-2"><i class="fa fa-compass"></i></div><div class="col-sm-2"><i class="fa fa-copyright"></i></div><div class="col-sm-2"><i class="fa fa-credit-card"></i></div><div class="col-sm-2"><i class="fa fa-crop"></i></div><div class="col-sm-2"><i class="fa fa-crosshairs"></i></div><div class="col-sm-2"><i class="fa fa-cube"></i></div><div class="col-sm-2"><i class="fa fa-cubes"></i></div><div class="col-sm-2"><i class="fa fa-cutlery"></i></div><div class="col-sm-2"><i class="fa fa-dashboard"></i></div><div class="col-sm-2"><i class="fa fa-database"></i></div><div class="col-sm-2"><i class="fa fa-desktop"></i></div><div class="col-sm-2"><i class="fa fa-dot-circle-o"></i></div><div class="col-sm-2"><i class="fa fa-download"></i></div><div class="col-sm-2"><i class="fa fa-edit"></i></div><div class="col-sm-2"><i class="fa fa-ellipsis-h"></i></div><div class="col-sm-2"><i class="fa fa-ellipsis-v"></i></div><div class="col-sm-2"><i class="fa fa-envelope"></i></div><div class="col-sm-2"><i class="fa fa-envelope-o"></i></div><div class="col-sm-2"><i class="fa fa-envelope-square"></i></div><div class="col-sm-2"><i class="fa fa-eraser"></i></div><div class="col-sm-2"><i class="fa fa-exchange"></i></div><div class="col-sm-2"><i class="fa fa-exclamation"></i></div><div class="col-sm-2"><i class="fa fa-exclamation-circle"></i></div><div class="col-sm-2"><i class="fa fa-exclamation-triangle"></i></div><div class="col-sm-2"><i class="fa fa-external-link"></i></div><div class="col-sm-2"><i class="fa fa-external-link-square"></i></div><div class="col-sm-2"><i class="fa fa-eye"></i></div><div class="col-sm-2"><i class="fa fa-eye-slash"></i></div><div class="col-sm-2"><i class="fa fa-eyedropper"></i></div><div class="col-sm-2"><i class="fa fa-fax"></i></div><div class="col-sm-2"><i class="fa fa-female"></i></div><div class="col-sm-2"><i class="fa fa-fighter-jet"></i></div><div class="col-sm-2"><i class="fa fa-file-archive-o"></i></div><div class="col-sm-2"><i class="fa fa-file-audio-o"></i></div><div class="col-sm-2"><i class="fa fa-file-code-o"></i></div><div class="col-sm-2"><i class="fa fa-file-excel-o"></i></div><div class="col-sm-2"><i class="fa fa-file-image-o"></i></div><div class="col-sm-2"><i class="fa fa-file-movie-o"></i></div><div class="col-sm-2"><i class="fa fa-file-pdf-o"></i></div><div class="col-sm-2"><i class="fa fa-file-photo-o"></i></div><div class="col-sm-2"><i class="fa fa-file-picture-o"></i></div><div class="col-sm-2"><i class="fa fa-file-powerpoint-o"></i></div><div class="col-sm-2"><i class="fa fa-file-sound-o"></i></div><div class="col-sm-2"><i class="fa fa-file-video-o"></i></div><div class="col-sm-2"><i class="fa fa-file-word-o"></i></div><div class="col-sm-2"><i class="fa fa-file-zip-o"></i></div><div class="col-sm-2"><i class="fa fa-film"></i></div><div class="col-sm-2"><i class="fa fa-filter"></i></div><div class="col-sm-2"><i class="fa fa-fire"></i></div><div class="col-sm-2"><i class="fa fa-fire-extinguisher"></i></div><div class="col-sm-2"><i class="fa fa-flag"></i></div><div class="col-sm-2"><i class="fa fa-flag-checkered"></i></div><div class="col-sm-2"><i class="fa fa-flag-o"></i></div><div class="col-sm-2"><i class="fa fa-flash"></i></div><div class="col-sm-2"><i class="fa fa-flask"></i></div><div class="col-sm-2"><i class="fa fa-folder"></i></div><div class="col-sm-2"><i class="fa fa-folder-o"></i></div><div class="col-sm-2"><i class="fa fa-folder-open"></i></div><div class="col-sm-2"><i class="fa fa-folder-open-o"></i></div><div class="col-sm-2"><i class="fa fa-frown-o"></i></div><div class="col-sm-2"><i class="fa fa-futbol-o"></i></div><div class="col-sm-2"><i class="fa fa-gamepad"></i></div><div class="col-sm-2"><i class="fa fa-gavel"></i></div><div class="col-sm-2"><i class="fa fa-gear"></i></div><div class="col-sm-2"><i class="fa fa-gears"></i></div><div class="col-sm-2"><i class="fa fa-gift"></i></div><div class="col-sm-2"><i class="fa fa-glass"></i></div><div class="col-sm-2"><i class="fa fa-globe"></i></div><div class="col-sm-2"><i class="fa fa-graduation-cap"></i></div><div class="col-sm-2"><i class="fa fa-group"></i></div><div class="col-sm-2"><i class="fa fa-hdd-o"></i></div><div class="col-sm-2"><i class="fa fa-headphones"></i></div><div class="col-sm-2"><i class="fa fa-heart"></i></div><div class="col-sm-2"><i class="fa fa-heart-o"></i></div><div class="col-sm-2"><i class="fa fa-history"></i></div><div class="col-sm-2"><i class="fa fa-home"></i></div><div class="col-sm-2"><i class="fa fa-image"></i></div><div class="col-sm-2"><i class="fa fa-inbox"></i></div><div class="col-sm-2"><i class="fa fa-info"></i></div><div class="col-sm-2"><i class="fa fa-info-circle"></i></div><div class="col-sm-2"><i class="fa fa-institution"></i></div><div class="col-sm-2"><i class="fa fa-key"></i></div><div class="col-sm-2"><i class="fa fa-keyboard-o"></i></div><div class="col-sm-2"><i class="fa fa-language"></i></div><div class="col-sm-2"><i class="fa fa-laptop"></i></div><div class="col-sm-2"><i class="fa fa-leaf"></i></div><div class="col-sm-2"><i class="fa fa-legal"></i></div><div class="col-sm-2"><i class="fa fa-lemon-o"></i></div><div class="col-sm-2"><i class="fa fa-level-down"></i></div><div class="col-sm-2"><i class="fa fa-level-up"></i></div><div class="col-sm-2"><i class="fa fa-life-bouy"></i></div><div class="col-sm-2"><i class="fa fa-life-buoy"></i></div><div class="col-sm-2"><i class="fa fa-life-ring"></i></div><div class="col-sm-2"><i class="fa fa-life-saver"></i></div><div class="col-sm-2"><i class="fa fa-lightbulb-o"></i></div><div class="col-sm-2"><i class="fa fa-line-chart"></i></div><div class="col-sm-2"><i class="fa fa-location-arrow"></i></div><div class="col-sm-2"><i class="fa fa-lock"></i></div><div class="col-sm-2"><i class="fa fa-magic"></i></div><div class="col-sm-2"><i class="fa fa-magnet"></i></div><div class="col-sm-2"><i class="fa fa-mail-forward"></i></div><div class="col-sm-2"><i class="fa fa-mail-reply"></i></div><div class="col-sm-2"><i class="fa fa-mail-reply-all"></i></div><div class="col-sm-2"><i class="fa fa-male"></i></div><div class="col-sm-2"><i class="fa fa-map-marker"></i></div><div class="col-sm-2"><i class="fa fa-meh-o"></i></div><div class="col-sm-2"><i class="fa fa-microphone"></i></div><div class="col-sm-2"><i class="fa fa-microphone-slash"></i></div><div class="col-sm-2"><i class="fa fa-minus"></i></div><div class="col-sm-2"><i class="fa fa-minus-circle"></i></div><div class="col-sm-2"><i class="fa fa-minus-square"></i></div><div class="col-sm-2"><i class="fa fa-minus-square-o"></i></div><div class="col-sm-2"><i class="fa fa-mobile"></i></div><div class="col-sm-2"><i class="fa fa-mobile-phone"></i></div><div class="col-sm-2"><i class="fa fa-money"></i></div><div class="col-sm-2"><i class="fa fa-moon-o"></i></div><div class="col-sm-2"><i class="fa fa-mortar-board"></i></div><div class="col-sm-2"><i class="fa fa-music"></i></div><div class="col-sm-2"><i class="fa fa-navicon"></i></div><div class="col-sm-2"><i class="fa fa-newspaper-o"></i></div><div class="col-sm-2"><i class="fa fa-paint-brush"></i></div><div class="col-sm-2"><i class="fa fa-paper-plane"></i></div><div class="col-sm-2"><i class="fa fa-paper-plane-o"></i></div><div class="col-sm-2"><i class="fa fa-paw"></i></div><div class="col-sm-2"><i class="fa fa-pencil"></i></div><div class="col-sm-2"><i class="fa fa-pencil-square"></i></div><div class="col-sm-2"><i class="fa fa-pencil-square-o"></i></div><div class="col-sm-2"><i class="fa fa-phone"></i></div><div class="col-sm-2"><i class="fa fa-phone-square"></i></div><div class="col-sm-2"><i class="fa fa-photo"></i></div><div class="col-sm-2"><i class="fa fa-picture-o"></i></div><div class="col-sm-2"><i class="fa fa-pie-chart"></i></div><div class="col-sm-2"><i class="fa fa-plane"></i></div><div class="col-sm-2"><i class="fa fa-plug"></i></div><div class="col-sm-2"><i class="fa fa-plus"></i></div><div class="col-sm-2"><i class="fa fa-plus-circle"></i></div><div class="col-sm-2"><i class="fa fa-plus-square"></i></div><div class="col-sm-2"><i class="fa fa-plus-square-o"></i></div><div class="col-sm-2"><i class="fa fa-power-off"></i></div><div class="col-sm-2"><i class="fa fa-print"></i></div><div class="col-sm-2"><i class="fa fa-puzzle-piece"></i></div><div class="col-sm-2"><i class="fa fa-qrcode"></i></div><div class="col-sm-2"><i class="fa fa-question"></i></div><div class="col-sm-2"><i class="fa fa-question-circle"></i></div><div class="col-sm-2"><i class="fa fa-quote-left"></i></div><div class="col-sm-2"><i class="fa fa-quote-right"></i></div><div class="col-sm-2"><i class="fa fa-random"></i></div><div class="col-sm-2"><i class="fa fa-recycle"></i></div><div class="col-sm-2"><i class="fa fa-refresh"></i></div><div class="col-sm-2"><i class="fa fa-remove"></i></div><div class="col-sm-2"><i class="fa fa-reorder"></i></div><div class="col-sm-2"><i class="fa fa-reply"></i></div><div class="col-sm-2"><i class="fa fa-reply-all"></i></div><div class="col-sm-2"><i class="fa fa-retweet"></i></div><div class="col-sm-2"><i class="fa fa-road"></i></div><div class="col-sm-2"><i class="fa fa-rocket"></i></div><div class="col-sm-2"><i class="fa fa-rss"></i></div><div class="col-sm-2"><i class="fa fa-rss-square"></i></div><div class="col-sm-2"><i class="fa fa-search"></i></div><div class="col-sm-2"><i class="fa fa-search-minus"></i></div><div class="col-sm-2"><i class="fa fa-search-plus"></i></div><div class="col-sm-2"><i class="fa fa-send"></i></div><div class="col-sm-2"><i class="fa fa-send-o"></i></div><div class="col-sm-2"><i class="fa fa-share"></i></div><div class="col-sm-2"><i class="fa fa-share-alt"></i></div><div class="col-sm-2"><i class="fa fa-share-alt-square"></i></div><div class="col-sm-2"><i class="fa fa-share-square"></i></div><div class="col-sm-2"><i class="fa fa-share-square-o"></i></div><div class="col-sm-2"><i class="fa fa-shield"></i></div><div class="col-sm-2"><i class="fa fa-shopping-cart"></i></div><div class="col-sm-2"><i class="fa fa-sign-in"></i></div><div class="col-sm-2"><i class="fa fa-sign-out"></i></div><div class="col-sm-2"><i class="fa fa-signal"></i></div><div class="col-sm-2"><i class="fa fa-sitemap"></i></div><div class="col-sm-2"><i class="fa fa-sliders"></i></div><div class="col-sm-2"><i class="fa fa-smile-o"></i></div><div class="col-sm-2"><i class="fa fa-soccer-ball-o"></i></div><div class="col-sm-2"><i class="fa fa-sort"></i></div><div class="col-sm-2"><i class="fa fa-sort-alpha-asc"></i></div><div class="col-sm-2"><i class="fa fa-sort-alpha-desc"></i></div><div class="col-sm-2"><i class="fa fa-sort-amount-asc"></i></div><div class="col-sm-2"><i class="fa fa-sort-amount-desc"></i></div><div class="col-sm-2"><i class="fa fa-sort-asc"></i></div><div class="col-sm-2"><i class="fa fa-sort-desc"></i></div><div class="col-sm-2"><i class="fa fa-sort-down"></i></div><div class="col-sm-2"><i class="fa fa-sort-numeric-asc"></i></div><div class="col-sm-2"><i class="fa fa-sort-numeric-desc"></i></div><div class="col-sm-2"><i class="fa fa-sort-up"></i></div><div class="col-sm-2"><i class="fa fa-space-shuttle"></i></div><div class="col-sm-2"><i class="fa fa-spinner"></i></div><div class="col-sm-2"><i class="fa fa-spoon"></i></div><div class="col-sm-2"><i class="fa fa-square"></i></div><div class="col-sm-2"><i class="fa fa-square-o"></i></div><div class="col-sm-2"><i class="fa fa-star"></i></div><div class="col-sm-2"><i class="fa fa-star-half"></i></div><div class="col-sm-2"><i class="fa fa-star-half-empty"></i></div><div class="col-sm-2"><i class="fa fa-star-half-full"></i></div><div class="col-sm-2"><i class="fa fa-star-half-o"></i></div><div class="col-sm-2"><i class="fa fa-star-o"></i></div><div class="col-sm-2"><i class="fa fa-suitcase"></i></div><div class="col-sm-2"><i class="fa fa-sun-o"></i></div><div class="col-sm-2"><i class="fa fa-support"></i></div><div class="col-sm-2"><i class="fa fa-tablet"></i></div><div class="col-sm-2"><i class="fa fa-tachometer"></i></div><div class="col-sm-2"><i class="fa fa-tag"></i></div><div class="col-sm-2"><i class="fa fa-tags"></i></div><div class="col-sm-2"><i class="fa fa-tasks"></i></div><div class="col-sm-2"><i class="fa fa-taxi"></i></div><div class="col-sm-2"><i class="fa fa-terminal"></i></div><div class="col-sm-2"><i class="fa fa-thumb-tack"></i></div><div class="col-sm-2"><i class="fa fa-thumbs-down"></i></div><div class="col-sm-2"><i class="fa fa-thumbs-o-down"></i></div><div class="col-sm-2"><i class="fa fa-thumbs-o-up"></i></div><div class="col-sm-2"><i class="fa fa-thumbs-up"></i></div><div class="col-sm-2"><i class="fa fa-ticket"></i></div><div class="col-sm-2"><i class="fa fa-times"></i></div><div class="col-sm-2"><i class="fa fa-times-circle"></i></div><div class="col-sm-2"><i class="fa fa-times-circle-o"></i></div><div class="col-sm-2"><i class="fa fa-tint"></i></div><div class="col-sm-2"><i class="fa fa-toggle-down"></i></div><div class="col-sm-2"><i class="fa fa-toggle-left"></i></div><div class="col-sm-2"><i class="fa fa-toggle-off"></i></div><div class="col-sm-2"><i class="fa fa-toggle-on"></i></div><div class="col-sm-2"><i class="fa fa-toggle-right"></i></div><div class="col-sm-2"><i class="fa fa-toggle-up"></i></div><div class="col-sm-2"><i class="fa fa-trash"></i></div><div class="col-sm-2"><i class="fa fa-trash-o"></i></div><div class="col-sm-2"><i class="fa fa-tree"></i></div><div class="col-sm-2"><i class="fa fa-trophy"></i></div><div class="col-sm-2"><i class="fa fa-truck"></i></div><div class="col-sm-2"><i class="fa fa-tty"></i></div><div class="col-sm-2"><i class="fa fa-umbrella"></i></div><div class="col-sm-2"><i class="fa fa-university"></i></div><div class="col-sm-2"><i class="fa fa-unlock"></i></div><div class="col-sm-2"><i class="fa fa-unlock-alt"></i></div><div class="col-sm-2"><i class="fa fa-unsorted"></i></div><div class="col-sm-2"><i class="fa fa-upload"></i></div><div class="col-sm-2"><i class="fa fa-user"></i></div><div class="col-sm-2"><i class="fa fa-users"></i></div><div class="col-sm-2"><i class="fa fa-video-camera"></i></div><div class="col-sm-2"><i class="fa fa-volume-down"></i></div><div class="col-sm-2"><i class="fa fa-volume-off"></i></div><div class="col-sm-2"><i class="fa fa-volume-up"></i></div><div class="col-sm-2"><i class="fa fa-warning"></i></div><div class="col-sm-2"><i class="fa fa-wheelchair"></i></div><div class="col-sm-2"><i class="fa fa-wifi"></i></div><div class="col-sm-2"><i class="fa fa-wrench"></i></div><div class="col-sm-2"><i class="fa fa-file"></i></div><div class="col-sm-2"><i class="fa fa-file-archive-o"></i></div><div class="col-sm-2"><i class="fa fa-file-audio-o"></i></div><div class="col-sm-2"><i class="fa fa-file-code-o"></i></div><div class="col-sm-2"><i class="fa fa-file-excel-o"></i></div><div class="col-sm-2"><i class="fa fa-file-image-o"></i></div><div class="col-sm-2"><i class="fa fa-file-movie-o"></i></div><div class="col-sm-2"><i class="fa fa-file-o"></i></div><div class="col-sm-2"><i class="fa fa-file-pdf-o"></i></div><div class="col-sm-2"><i class="fa fa-file-photo-o"></i></div><div class="col-sm-2"><i class="fa fa-file-picture-o"></i></div><div class="col-sm-2"><i class="fa fa-file-powerpoint-o"></i></div><div class="col-sm-2"><i class="fa fa-file-sound-o"></i></div><div class="col-sm-2"><i class="fa fa-file-text"></i></div><div class="col-sm-2"><i class="fa fa-file-text-o"></i></div><div class="col-sm-2"><i class="fa fa-file-video-o"></i></div><div class="col-sm-2"><i class="fa fa-file-word-o"></i></div><div class="col-sm-2"><i class="fa fa-file-zip-o"></i></div><div class="col-sm-2"><i class="fa fa-circle-o-notch"></i></div><div class="col-sm-2"><i class="fa fa-cog"></i></div><div class="col-sm-2"><i class="fa fa-gear"></i></div><div class="col-sm-2"><i class="fa fa-refresh"></i></div><div class="col-sm-2"><i class="fa fa-spinner"></i></div><div class="col-sm-2"><i class="fa fa-check-square"></i></div><div class="col-sm-2"><i class="fa fa-check-square-o"></i></div><div class="col-sm-2"><i class="fa fa-circle"></i></div><div class="col-sm-2"><i class="fa fa-circle-o"></i></div><div class="col-sm-2"><i class="fa fa-dot-circle-o"></i></div><div class="col-sm-2"><i class="fa fa-minus-square"></i></div><div class="col-sm-2"><i class="fa fa-minus-square-o"></i></div><div class="col-sm-2"><i class="fa fa-plus-square"></i></div><div class="col-sm-2"><i class="fa fa-plus-square-o"></i></div><div class="col-sm-2"><i class="fa fa-square"></i></div><div class="col-sm-2"><i class="fa fa-square-o"></i></div><div class="col-sm-2"><i class="fa fa-cc-amex"></i></div><div class="col-sm-2"><i class="fa fa-cc-discover"></i></div><div class="col-sm-2"><i class="fa fa-cc-mastercard"></i></div><div class="col-sm-2"><i class="fa fa-cc-paypal"></i></div><div class="col-sm-2"><i class="fa fa-cc-stripe"></i></div><div class="col-sm-2"><i class="fa fa-cc-visa"></i></div><div class="col-sm-2"><i class="fa fa-credit-card"></i></div><div class="col-sm-2"><i class="fa fa-google-wallet"></i></div><div class="col-sm-2"><i class="fa fa-paypal"></i></div><div class="col-sm-2"><i class="fa fa-area-chart"></i></div><div class="col-sm-2"><i class="fa fa-bar-chart"></i></div><div class="col-sm-2"><i class="fa fa-bar-chart-o"></i></div><div class="col-sm-2"><i class="fa fa-line-chart"></i></div><div class="col-sm-2"><i class="fa fa-pie-chart"></i></div><div class="col-sm-2"><i class="fa fa-bitcoin"></i></div><div class="col-sm-2"><i class="fa fa-btc"></i></div><div class="col-sm-2"><i class="fa fa-cny"></i></div><div class="col-sm-2"><i class="fa fa-dollar"></i></div><div class="col-sm-2"><i class="fa fa-eur"></i></div><div class="col-sm-2"><i class="fa fa-euro"></i></div><div class="col-sm-2"><i class="fa fa-gbp"></i></div><div class="col-sm-2"><i class="fa fa-ils"></i></div><div class="col-sm-2"><i class="fa fa-inr"></i></div><div class="col-sm-2"><i class="fa fa-jpy"></i></div><div class="col-sm-2"><i class="fa fa-krw"></i></div><div class="col-sm-2"><i class="fa fa-money"></i></div><div class="col-sm-2"><i class="fa fa-rmb"></i></div><div class="col-sm-2"><i class="fa fa-rouble"></i></div><div class="col-sm-2"><i class="fa fa-rub"></i></div><div class="col-sm-2"><i class="fa fa-ruble"></i></div><div class="col-sm-2"><i class="fa fa-rupee"></i></div><div class="col-sm-2"><i class="fa fa-shekel"></i></div><div class="col-sm-2"><i class="fa fa-sheqel"></i></div><div class="col-sm-2"><i class="fa fa-try"></i></div><div class="col-sm-2"><i class="fa fa-turkish-lira"></i></div><div class="col-sm-2"><i class="fa fa-usd"></i></div><div class="col-sm-2"><i class="fa fa-won"></i></div><div class="col-sm-2"><i class="fa fa-yen"></i></div><div class="col-sm-2"><i class="fa fa-align-center"></i></div><div class="col-sm-2"><i class="fa fa-align-justify"></i></div><div class="col-sm-2"><i class="fa fa-align-left"></i></div><div class="col-sm-2"><i class="fa fa-align-right"></i></div><div class="col-sm-2"><i class="fa fa-bold"></i></div><div class="col-sm-2"><i class="fa fa-chain"></i></div><div class="col-sm-2"><i class="fa fa-chain-broken"></i></div><div class="col-sm-2"><i class="fa fa-clipboard"></i></div><div class="col-sm-2"><i class="fa fa-columns"></i></div><div class="col-sm-2"><i class="fa fa-copy"></i></div><div class="col-sm-2"><i class="fa fa-cut"></i></div><div class="col-sm-2"><i class="fa fa-dedent"></i></div><div class="col-sm-2"><i class="fa fa-eraser"></i></div><div class="col-sm-2"><i class="fa fa-file"></i></div><div class="col-sm-2"><i class="fa fa-file-o"></i></div><div class="col-sm-2"><i class="fa fa-file-text"></i></div><div class="col-sm-2"><i class="fa fa-file-text-o"></i></div><div class="col-sm-2"><i class="fa fa-files-o"></i></div><div class="col-sm-2"><i class="fa fa-floppy-o"></i></div><div class="col-sm-2"><i class="fa fa-font"></i></div><div class="col-sm-2"><i class="fa fa-header"></i></div><div class="col-sm-2"><i class="fa fa-indent"></i></div><div class="col-sm-2"><i class="fa fa-italic"></i></div><div class="col-sm-2"><i class="fa fa-link"></i></div><div class="col-sm-2"><i class="fa fa-list"></i></div><div class="col-sm-2"><i class="fa fa-list-alt"></i></div><div class="col-sm-2"><i class="fa fa-list-ol"></i></div><div class="col-sm-2"><i class="fa fa-list-ul"></i></div><div class="col-sm-2"><i class="fa fa-outdent"></i></div><div class="col-sm-2"><i class="fa fa-paperclip"></i></div><div class="col-sm-2"><i class="fa fa-paragraph"></i></div><div class="col-sm-2"><i class="fa fa-paste"></i></div><div class="col-sm-2"><i class="fa fa-repeat"></i></div><div class="col-sm-2"><i class="fa fa-rotate-left"></i></div><div class="col-sm-2"><i class="fa fa-rotate-right"></i></div><div class="col-sm-2"><i class="fa fa-save"></i></div><div class="col-sm-2"><i class="fa fa-scissors"></i></div><div class="col-sm-2"><i class="fa fa-strikethrough"></i></div><div class="col-sm-2"><i class="fa fa-subscript"></i></div><div class="col-sm-2"><i class="fa fa-superscript"></i></div><div class="col-sm-2"><i class="fa fa-table"></i></div><div class="col-sm-2"><i class="fa fa-text-height"></i></div><div class="col-sm-2"><i class="fa fa-text-width"></i></div><div class="col-sm-2"><i class="fa fa-th"></i></div><div class="col-sm-2"><i class="fa fa-th-large"></i></div><div class="col-sm-2"><i class="fa fa-th-list"></i></div><div class="col-sm-2"><i class="fa fa-underline"></i></div><div class="col-sm-2"><i class="fa fa-undo"></i></div><div class="col-sm-2"><i class="fa fa-unlink"></i></div><div class="col-sm-2"><i class="fa fa-angle-double-down"></i></div><div class="col-sm-2"><i class="fa fa-angle-double-left"></i></div><div class="col-sm-2"><i class="fa fa-angle-double-right"></i></div><div class="col-sm-2"><i class="fa fa-angle-double-up"></i></div><div class="col-sm-2"><i class="fa fa-angle-down"></i></div><div class="col-sm-2"><i class="fa fa-angle-left"></i></div><div class="col-sm-2"><i class="fa fa-angle-right"></i></div><div class="col-sm-2"><i class="fa fa-angle-up"></i></div><div class="col-sm-2"><i class="fa fa-arrow-circle-down"></i></div><div class="col-sm-2"><i class="fa fa-arrow-circle-left"></i></div><div class="col-sm-2"><i class="fa fa-arrow-circle-o-down"></i></div><div class="col-sm-2"><i class="fa fa-arrow-circle-o-left"></i></div><div class="col-sm-2"><i class="fa fa-arrow-circle-o-right"></i></div><div class="col-sm-2"><i class="fa fa-arrow-circle-o-up"></i></div><div class="col-sm-2"><i class="fa fa-arrow-circle-right"></i></div><div class="col-sm-2"><i class="fa fa-arrow-circle-up"></i></div><div class="col-sm-2"><i class="fa fa-arrow-down"></i></div><div class="col-sm-2"><i class="fa fa-arrow-left"></i></div><div class="col-sm-2"><i class="fa fa-arrow-right"></i></div><div class="col-sm-2"><i class="fa fa-arrow-up"></i></div><div class="col-sm-2"><i class="fa fa-arrows"></i></div><div class="col-sm-2"><i class="fa fa-arrows-alt"></i></div><div class="col-sm-2"><i class="fa fa-arrows-h"></i></div><div class="col-sm-2"><i class="fa fa-arrows-v"></i></div><div class="col-sm-2"><i class="fa fa-caret-down"></i></div><div class="col-sm-2"><i class="fa fa-caret-left"></i></div><div class="col-sm-2"><i class="fa fa-caret-right"></i></div><div class="col-sm-2"><i class="fa fa-caret-square-o-down"></i></div><div class="col-sm-2"><i class="fa fa-caret-square-o-left"></i></div><div class="col-sm-2"><i class="fa fa-caret-square-o-right"></i></div><div class="col-sm-2"><i class="fa fa-caret-square-o-up"></i></div><div class="col-sm-2"><i class="fa fa-caret-up"></i></div><div class="col-sm-2"><i class="fa fa-chevron-circle-down"></i></div><div class="col-sm-2"><i class="fa fa-chevron-circle-left"></i></div><div class="col-sm-2"><i class="fa fa-chevron-circle-right"></i></div><div class="col-sm-2"><i class="fa fa-chevron-circle-up"></i></div><div class="col-sm-2"><i class="fa fa-chevron-down"></i></div><div class="col-sm-2"><i class="fa fa-chevron-left"></i></div><div class="col-sm-2"><i class="fa fa-chevron-right"></i></div><div class="col-sm-2"><i class="fa fa-chevron-up"></i></div><div class="col-sm-2"><i class="fa fa-hand-o-down"></i></div><div class="col-sm-2"><i class="fa fa-hand-o-left"></i></div><div class="col-sm-2"><i class="fa fa-hand-o-right"></i></div><div class="col-sm-2"><i class="fa fa-hand-o-up"></i></div><div class="col-sm-2"><i class="fa fa-long-arrow-down"></i></div><div class="col-sm-2"><i class="fa fa-long-arrow-left"></i></div><div class="col-sm-2"><i class="fa fa-long-arrow-right"></i></div><div class="col-sm-2"><i class="fa fa-long-arrow-up"></i></div><div class="col-sm-2"><i class="fa fa-toggle-down"></i></div><div class="col-sm-2"><i class="fa fa-toggle-left"></i></div><div class="col-sm-2"><i class="fa fa-toggle-right"></i></div><div class="col-sm-2"><i class="fa fa-toggle-up"></i></div><div class="col-sm-2"><i class="fa fa-arrows-alt"></i></div><div class="col-sm-2"><i class="fa fa-backward"></i></div><div class="col-sm-2"><i class="fa fa-compress"></i></div><div class="col-sm-2"><i class="fa fa-eject"></i></div><div class="col-sm-2"><i class="fa fa-expand"></i></div><div class="col-sm-2"><i class="fa fa-fast-backward"></i></div><div class="col-sm-2"><i class="fa fa-fast-forward"></i></div><div class="col-sm-2"><i class="fa fa-forward"></i></div><div class="col-sm-2"><i class="fa fa-pause"></i></div><div class="col-sm-2"><i class="fa fa-play"></i></div><div class="col-sm-2"><i class="fa fa-play-circle"></i></div><div class="col-sm-2"><i class="fa fa-play-circle-o"></i></div><div class="col-sm-2"><i class="fa fa-step-backward"></i></div><div class="col-sm-2"><i class="fa fa-step-forward"></i></div><div class="col-sm-2"><i class="fa fa-stop"></i></div><div class="col-sm-2"><i class="fa fa-youtube-play"></i></div><div class="col-sm-2"><i class="fa fa-adn"></i></div><div class="col-sm-2"><i class="fa fa-android"></i></div><div class="col-sm-2"><i class="fa fa-apple"></i></div><div class="col-sm-2"><i class="fa fa-behance"></i></div><div class="col-sm-2"><i class="fa fa-behance-square"></i></div><div class="col-sm-2"><i class="fa fa-bitbucket"></i></div><div class="col-sm-2"><i class="fa fa-bitbucket-square"></i></div><div class="col-sm-2"><i class="fa fa-bitcoin"></i></div><div class="col-sm-2"><i class="fa fa-btc"></i></div><div class="col-sm-2"><i class="fa fa-cc-amex"></i></div><div class="col-sm-2"><i class="fa fa-cc-discover"></i></div><div class="col-sm-2"><i class="fa fa-cc-mastercard"></i></div><div class="col-sm-2"><i class="fa fa-cc-paypal"></i></div><div class="col-sm-2"><i class="fa fa-cc-stripe"></i></div><div class="col-sm-2"><i class="fa fa-cc-visa"></i></div><div class="col-sm-2"><i class="fa fa-codepen"></i></div><div class="col-sm-2"><i class="fa fa-css3"></i></div><div class="col-sm-2"><i class="fa fa-delicious"></i></div><div class="col-sm-2"><i class="fa fa-deviantart"></i></div><div class="col-sm-2"><i class="fa fa-digg"></i></div><div class="col-sm-2"><i class="fa fa-dribbble"></i></div><div class="col-sm-2"><i class="fa fa-dropbox"></i></div><div class="col-sm-2"><i class="fa fa-drupal"></i></div><div class="col-sm-2"><i class="fa fa-empire"></i></div><div class="col-sm-2"><i class="fa fa-facebook"></i></div><div class="col-sm-2"><i class="fa fa-facebook-square"></i></div><div class="col-sm-2"><i class="fa fa-flickr"></i></div><div class="col-sm-2"><i class="fa fa-foursquare"></i></div><div class="col-sm-2"><i class="fa fa-ge"></i></div><div class="col-sm-2"><i class="fa fa-git"></i></div><div class="col-sm-2"><i class="fa fa-git-square"></i></div><div class="col-sm-2"><i class="fa fa-github"></i></div><div class="col-sm-2"><i class="fa fa-github-alt"></i></div><div class="col-sm-2"><i class="fa fa-github-square"></i></div><div class="col-sm-2"><i class="fa fa-gittip"></i></div><div class="col-sm-2"><i class="fa fa-google"></i></div><div class="col-sm-2"><i class="fa fa-google-plus"></i></div><div class="col-sm-2"><i class="fa fa-google-plus-square"></i></div><div class="col-sm-2"><i class="fa fa-google-wallet"></i></div><div class="col-sm-2"><i class="fa fa-hacker-news"></i></div><div class="col-sm-2"><i class="fa fa-html5"></i></div><div class="col-sm-2"><i class="fa fa-instagram"></i></div><div class="col-sm-2"><i class="fa fa-ioxhost"></i></div><div class="col-sm-2"><i class="fa fa-joomla"></i></div><div class="col-sm-2"><i class="fa fa-jsfiddle"></i></div><div class="col-sm-2"><i class="fa fa-lastfm"></i></div><div class="col-sm-2"><i class="fa fa-lastfm-square"></i></div><div class="col-sm-2"><i class="fa fa-linkedin"></i></div><div class="col-sm-2"><i class="fa fa-linkedin-square"></i></div><div class="col-sm-2"><i class="fa fa-linux"></i></div><div class="col-sm-2"><i class="fa fa-maxcdn"></i></div><div class="col-sm-2"><i class="fa fa-meanpath"></i></div><div class="col-sm-2"><i class="fa fa-openid"></i></div><div class="col-sm-2"><i class="fa fa-pagelines"></i></div><div class="col-sm-2"><i class="fa fa-paypal"></i></div><div class="col-sm-2"><i class="fa fa-pied-piper"></i></div><div class="col-sm-2"><i class="fa fa-pied-piper-alt"></i></div><div class="col-sm-2"><i class="fa fa-pinterest"></i></div><div class="col-sm-2"><i class="fa fa-pinterest-square"></i></div><div class="col-sm-2"><i class="fa fa-qq"></i></div><div class="col-sm-2"><i class="fa fa-ra"></i></div><div class="col-sm-2"><i class="fa fa-rebel"></i></div><div class="col-sm-2"><i class="fa fa-reddit"></i></div><div class="col-sm-2"><i class="fa fa-reddit-square"></i></div><div class="col-sm-2"><i class="fa fa-renren"></i></div><div class="col-sm-2"><i class="fa fa-share-alt"></i></div><div class="col-sm-2"><i class="fa fa-share-alt-square"></i></div><div class="col-sm-2"><i class="fa fa-skype"></i></div><div class="col-sm-2"><i class="fa fa-slack"></i></div><div class="col-sm-2"><i class="fa fa-slideshare"></i></div><div class="col-sm-2"><i class="fa fa-soundcloud"></i></div><div class="col-sm-2"><i class="fa fa-spotify"></i></div><div class="col-sm-2"><i class="fa fa-stack-exchange"></i></div><div class="col-sm-2"><i class="fa fa-stack-overflow"></i></div><div class="col-sm-2"><i class="fa fa-steam"></i></div><div class="col-sm-2"><i class="fa fa-steam-square"></i></div><div class="col-sm-2"><i class="fa fa-stumbleupon"></i></div><div class="col-sm-2"><i class="fa fa-stumbleupon-circle"></i></div><div class="col-sm-2"><i class="fa fa-tencent-weibo"></i></div><div class="col-sm-2"><i class="fa fa-trello"></i></div><div class="col-sm-2"><i class="fa fa-tumblr"></i></div><div class="col-sm-2"><i class="fa fa-tumblr-square"></i></div><div class="col-sm-2"><i class="fa fa-twitch"></i></div><div class="col-sm-2"><i class="fa fa-twitter"></i></div><div class="col-sm-2"><i class="fa fa-twitter-square"></i></div><div class="col-sm-2"><i class="fa fa-vimeo-square"></i></div><div class="col-sm-2"><i class="fa fa-vine"></i></div><div class="col-sm-2"><i class="fa fa-vk"></i></div><div class="col-sm-2"><i class="fa fa-wechat"></i></div><div class="col-sm-2"><i class="fa fa-weibo"></i></div><div class="col-sm-2"><i class="fa fa-weixin"></i></div><div class="col-sm-2"><i class="fa fa-windows"></i></div><div class="col-sm-2"><i class="fa fa-wordpress"></i></div><div class="col-sm-2"><i class="fa fa-xing"></i></div><div class="col-sm-2"><i class="fa fa-xing-square"></i></div><div class="col-sm-2"><i class="fa fa-yahoo"></i></div><div class="col-sm-2"><i class="fa fa-yelp"></i></div><div class="col-sm-2"><i class="fa fa-youtube"></i></div><div class="col-sm-2"><i class="fa fa-youtube-play"></i></div><div class="col-sm-2"><i class="fa fa-youtube-square"></i></div><div class="col-sm-2"><i class="fa fa-ambulance"></i></div><div class="col-sm-2"><i class="fa fa-h-square"></i></div><div class="col-sm-2"><i class="fa fa-hospital-o"></i></div><div class="col-sm-2"><i class="fa fa-medkit"></i></div><div class="col-sm-2"><i class="fa fa-plus-square"></i></div><div class="col-sm-2"><i class="fa fa-stethoscope"></i></div><div class="col-sm-2"><i class="fa fa-user-md"></i></div><div class="col-sm-2"><i class="fa fa-wheelchair"></i></div></div><div class="row"><div class="col-md-12"><h3 class="m-t-40"><strong>Glyphicons</strong></h3></div><div class="col-sm-2"><i class="glyphicon glyphicon-asterisk"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-plus"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-euro"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-minus"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-cloud"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-envelope"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-pencil"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-glass"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-music"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-search"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-heart"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-star"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-star-empty"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-user"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-film"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-th-large"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-th"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-th-list"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-ok"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-remove"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-zoom-in"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-zoom-out"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-off"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-signal"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-cog"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-trash"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-home"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-file"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-time"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-road"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-download-alt"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-download"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-upload"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-inbox"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-play-circle"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-repeat"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-refresh"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-list-alt"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-lock"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-flag"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-headphones"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-volume-off"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-volume-down"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-volume-up"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-qrcode"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-barcode"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-tag"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-tags"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-book"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-bookmark"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-print"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-camera"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-font"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-bold"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-italic"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-text-height"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-text-width"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-align-left"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-align-center"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-align-right"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-align-justify"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-list"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-indent-left"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-indent-right"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-facetime-video"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-picture"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-map-marker"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-adjust"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-tint"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-edit"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-share"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-check"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-move"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-step-backward"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-fast-backward"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-backward"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-play"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-pause"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-stop"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-forward"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-fast-forward"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-step-forward"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-eject"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-chevron-left"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-chevron-right"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-plus-sign"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-minus-sign"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-remove-sign"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-ok-sign"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-question-sign"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-info-sign"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-screenshot"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-remove-circle"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-ok-circle"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-ban-circle"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-arrow-left"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-arrow-right"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-arrow-up"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-arrow-down"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-share-alt"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-resize-full"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-resize-small"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-exclamation-sign"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-gift"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-leaf"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-fire"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-eye-open"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-eye-close"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-warning-sign"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-plane"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-calendar"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-random"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-comment"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-magnet"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-chevron-up"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-chevron-down"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-retweet"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-shopping-cart"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-folder-close"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-folder-open"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-resize-vertical"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-resize-horizontal"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-hdd"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-bullhorn"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-bell"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-certificate"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-thumbs-up"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-thumbs-down"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-hand-right"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-hand-left"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-hand-up"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-hand-down"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-circle-arrow-right"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-circle-arrow-left"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-circle-arrow-up"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-circle-arrow-down"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-globe"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-wrench"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-tasks"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-filter"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-briefcase"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-fullscreen"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-dashboard"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-paperclip"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-heart-empty"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-link"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-phone"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-pushpin"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-usd"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-gbp"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-sort"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-sort-by-alphabet"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-sort-by-alphabet-alt"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-sort-by-order"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-sort-by-order-alt"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-sort-by-attributes"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-sort-by-attributes-alt"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-unchecked"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-expand"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-collapse-down"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-collapse-up"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-log-in"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-flash"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-log-out"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-new-window"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-record"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-save"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-open"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-saved"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-import"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-export"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-send"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-floppy-disk"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-floppy-saved"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-floppy-remove"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-floppy-save"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-floppy-open"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-credit-card"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-transfer"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-cutlery"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-header"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-compressed"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-earphone"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-phone-alt"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-tower"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-stats"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-sd-video"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-hd-video"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-subtitles"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-sound-stereo"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-sound-dolby"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-sound-5-1"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-sound-6-1"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-sound-7-1"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-copyright-mark"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-registration-mark"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-cloud-download"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-cloud-upload"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-tree-conifer"></i></div><div class="col-sm-2"><i class="glyphicon glyphicon-tree-deciduous"></i></div></div><div class="row"><div class="col-md-12"><h3 class="m-t-40"><strong>Simple Line Icons</strong></h3></div><div class="col-sm-2"><i class="icon-user"></i></div><div class="col-sm-2"><i class="icon-user-female"></i></div><div class="col-sm-2"><i class="icon-users"></i></div><div class="col-sm-2"><i class="icon-user-follow"></i></div><div class="col-sm-2"><i class="icon-user-following"></i></div><div class="col-sm-2"><i class="icon-user-unfollow"></i></div><div class="col-sm-2"><i class="icon-trophy"></i></div><div class="col-sm-2"><i class="icon-speedometer"></i></div><div class="col-sm-2"><i class="icon-social-youtube"></i></div><div class="col-sm-2"><i class="icon-social-twitter"></i></div><div class="col-sm-2"><i class="icon-social-tumblr"></i></div><div class="col-sm-2"><i class="icon-social-facebook"></i></div><div class="col-sm-2"><i class="icon-social-dropbox"></i></div><div class="col-sm-2"><i class="icon-social-dribbble"></i></div><div class="col-sm-2"><i class="icon-shield"></i></div><div class="col-sm-2"><i class="icon-screen-tablet"></i></div><div class="col-sm-2"><i class="icon-screen-smartphone"></i></div><div class="col-sm-2"><i class="icon-screen-desktop"></i></div><div class="col-sm-2"><i class="icon-plane"></i></div><div class="col-sm-2"><i class="icon-notebook"></i></div><div class="col-sm-2"><i class="icon-moustache"></i></div><div class="col-sm-2"><i class="icon-mouse"></i></div><div class="col-sm-2"><i class="icon-magnet"></i></div><div class="col-sm-2"><i class="icon-magic-wand"></i></div><div class="col-sm-2"><i class="icon-hourglass"></i></div><div class="col-sm-2"><i class="icon-graduation"></i></div><div class="col-sm-2"><i class="icon-ghost"></i></div><div class="col-sm-2"><i class="icon-game-controller"></i></div><div class="col-sm-2"><i class="icon-fire"></i></div><div class="col-sm-2"><i class="icon-eyeglasses"></i></div><div class="col-sm-2"><i class="icon-envelope-open"></i></div><div class="col-sm-2"><i class="icon-envelope-letter"></i></div><div class="col-sm-2"><i class="icon-energy"></i></div><div class="col-sm-2"><i class="icon-emoticon-smile"></i></div><div class="col-sm-2"><i class="icon-disc"></i></div><div class="col-sm-2"><i class="icon-cursor-move"></i></div><div class="col-sm-2"><i class="icon-crop"></i></div><div class="col-sm-2"><i class="icon-credit-card"></i></div><div class="col-sm-2"><i class="icon-chemistry"></i></div><div class="col-sm-2"><i class="icon-bell"></i></div><div class="col-sm-2"><i class="icon-badge"></i></div><div class="col-sm-2"><i class="icon-anchor"></i></div><div class="col-sm-2"><i class="icon-action-redo"></i></div><div class="col-sm-2"><i class="icon-action-undo"></i></div><div class="col-sm-2"><i class="icon-bag"></i></div><div class="col-sm-2"><i class="icon-basket"></i></div><div class="col-sm-2"><i class="icon-basket-loaded"></i></div><div class="col-sm-2"><i class="icon-book-open"></i></div><div class="col-sm-2"><i class="icon-briefcase"></i></div><div class="col-sm-2"><i class="icon-bubbles"></i></div><div class="col-sm-2"><i class="icon-calculator"></i></div><div class="col-sm-2"><i class="icon-call-end"></i></div><div class="col-sm-2"><i class="icon-call-in"></i></div><div class="col-sm-2"><i class="icon-call-out"></i></div><div class="col-sm-2"><i class="icon-compass"></i></div><div class="col-sm-2"><i class="icon-cup"></i></div><div class="col-sm-2"><i class="icon-diamond"></i></div><div class="col-sm-2"><i class="icon-direction"></i></div><div class="col-sm-2"><i class="icon-directions"></i></div><div class="col-sm-2"><i class="icon-docs"></i></div><div class="col-sm-2"><i class="icon-drawer"></i></div><div class="col-sm-2"><i class="icon-drop"></i></div><div class="col-sm-2"><i class="icon-earphones"></i></div><div class="col-sm-2"><i class="icon-earphones-alt"></i></div><div class="col-sm-2"><i class="icon-feed"></i></div><div class="col-sm-2"><i class="icon-film"></i></div><div class="col-sm-2"><i class="icon-folder-alt"></i></div><div class="col-sm-2"><i class="icon-frame"></i></div><div class="col-sm-2"><i class="icon-globe"></i></div><div class="col-sm-2"><i class="icon-globe-alt"></i></div><div class="col-sm-2"><i class="icon-handbag"></i></div><div class="col-sm-2"><i class="icon-layers"></i></div><div class="col-sm-2"><i class="icon-map"></i></div><div class="col-sm-2"><i class="icon-picture"></i></div><div class="col-sm-2"><i class="icon-pin"></i></div><div class="col-sm-2"><i class="icon-playlist"></i></div><div class="col-sm-2"><i class="icon-present"></i></div><div class="col-sm-2"><i class="icon-printer"></i></div><div class="col-sm-2"><i class="icon-puzzle"></i></div><div class="col-sm-2"><i class="icon-speech"></i></div><div class="col-sm-2"><i class="icon-vector"></i></div><div class="col-sm-2"><i class="icon-wallet"></i></div><div class="col-sm-2"><i class="icon-arrow-down"></i></div><div class="col-sm-2"><i class="icon-arrow-left"></i></div><div class="col-sm-2"><i class="icon-arrow-right"></i></div><div class="col-sm-2"><i class="icon-arrow-up"></i></div><div class="col-sm-2"><i class="icon-bar-chart"></i></div><div class="col-sm-2"><i class="icon-bulb"></i></div><div class="col-sm-2"><i class="icon-calendar"></i></div><div class="col-sm-2"><i class="icon-control-end"></i></div><div class="col-sm-2"><i class="icon-control-forward"></i></div><div class="col-sm-2"><i class="icon-control-pause"></i></div><div class="col-sm-2"><i class="icon-control-play"></i></div><div class="col-sm-2"><i class="icon-control-rewind"></i></div><div class="col-sm-2"><i class="icon-control-start"></i></div><div class="col-sm-2"><i class="icon-cursor"></i></div><div class="col-sm-2"><i class="icon-dislike"></i></div><div class="col-sm-2"><i class="icon-equalizer"></i></div><div class="col-sm-2"><i class="icon-graph"></i></div><div class="col-sm-2"><i class="icon-grid"></i></div><div class="col-sm-2"><i class="icon-home"></i></div><div class="col-sm-2"><i class="icon-like"></i></div><div class="col-sm-2"><i class="icon-list"></i></div><div class="col-sm-2"><i class="icon-login"></i></div><div class="col-sm-2"><i class="icon-logout"></i></div><div class="col-sm-2"><i class="icon-loop"></i></div><div class="col-sm-2"><i class="icon-microphone"></i></div><div class="col-sm-2"><i class="icon-music-tone"></i></div><div class="col-sm-2"><i class="icon-music-tone-alt"></i></div><div class="col-sm-2"><i class="icon-note"></i></div><div class="col-sm-2"><i class="icon-pencil"></i></div><div class="col-sm-2"><i class="icon-pie-chart"></i></div><div class="col-sm-2"><i class="icon-question"></i></div><div class="col-sm-2"><i class="icon-rocket"></i></div><div class="col-sm-2"><i class="icon-share"></i></div><div class="col-sm-2"><i class="icon-share-alt"></i></div><div class="col-sm-2"><i class="icon-shuffle"></i></div><div class="col-sm-2"><i class="icon-size-actual"></i></div><div class="col-sm-2"><i class="icon-size-fullscreen"></i></div><div class="col-sm-2"><i class="icon-support"></i></div><div class="col-sm-2"><i class="icon-tag"></i></div><div class="col-sm-2"><i class="icon-trash"></i></div><div class="col-sm-2"><i class="icon-umbrella"></i></div><div class="col-sm-2"><i class="icon-wrench"></i></div><div class="col-sm-2"><i class="icon-ban"></i></div><div class="col-sm-2"><i class="icon-bubble"></i></div><div class="col-sm-2"><i class="icon-camcorder"></i></div><div class="col-sm-2"><i class="icon-camera"></i></div><div class="col-sm-2"><i class="icon-check"></i></div><div class="col-sm-2"><i class="icon-clock"></i></div><div class="col-sm-2"><i class="icon-close"></i></div><div class="col-sm-2"><i class="icon-cloud-download"></i></div><div class="col-sm-2"><i class="icon-cloud-upload"></i></div><div class="col-sm-2"><i class="icon-doc"></i></div><div class="col-sm-2"><i class="icon-envelope"></i></div><div class="col-sm-2"><i class="icon-eye"></i></div><div class="col-sm-2"><i class="icon-flag"></i></div><div class="col-sm-2"><i class="icon-folder"></i></div><div class="col-sm-2"><i class="icon-heart"></i></div><div class="col-sm-2"><i class="icon-info"></i></div><div class="col-sm-2"><i class="icon-key"></i></div><div class="col-sm-2"><i class="icon-link"></i></div><div class="col-sm-2"><i class="icon-lock"></i></div><div class="col-sm-2"><i class="icon-lock-open"></i></div><div class="col-sm-2"><i class="icon-magnifier"></i></div><div class="col-sm-2"><i class="icon-magnifier-add"></i></div><div class="col-sm-2"><i class="icon-magnifier-remove"></i></div><div class="col-sm-2"><i class="icon-paper-clip"></i></div><div class="col-sm-2"><i class="icon-paper-plane"></i></div><div class="col-sm-2"><i class="icon-plus"></i></div><div class="col-sm-2"><i class="icon-pointer"></i></div><div class="col-sm-2"><i class="icon-power"></i></div><div class="col-sm-2"><i class="icon-refresh"></i></div><div class="col-sm-2"><i class="icon-reload"></i></div><div class="col-sm-2"><i class="icon-settings"></i></div><div class="col-sm-2"><i class="icon-star"></i></div><div class="col-sm-2"><i class="icon-symbol-female"></i></div><div class="col-sm-2"><i class="icon-symbol-male"></i></div><div class="col-sm-2"><i class="icon-target"></i></div><div class="col-sm-2"><i class="icon-volume-1"></i></div><div class="col-sm-2"><i class="icon-volume-2"></i></div><div class="col-sm-2"><i class="icon-volume-off"></i></div></div><div class="row"><div class="col-md-12"><h3 class="m-t-40"><strong>Line Icons</strong></h3></div><div class="col-sm-2"><i class="icon icons-alerts-01"></i></div><div class="col-sm-2"><i class="icon icons-alerts-02"></i></div><div class="col-sm-2"><i class="icon icons-alerts-03"></i></div><div class="col-sm-2"><i class="icon icons-alerts-04"></i></div><div class="col-sm-2"><i class="icon icons-alerts-05"></i></div><div class="col-sm-2"><i class="icon icons-alerts-06"></i></div><div class="col-sm-2"><i class="icon icons-alerts-07"></i></div><div class="col-sm-2"><i class="icon icons-alerts-08"></i></div><div class="col-sm-2"><i class="icon icons-alerts-09"></i></div><div class="col-sm-2"><i class="icon icons-alerts-10"></i></div><div class="col-sm-2"><i class="icon icons-alerts-11"></i></div><div class="col-sm-2"><i class="icon icons-alerts-12"></i></div><div class="col-sm-2"><i class="icon icons-alerts-13"></i></div><div class="col-sm-2"><i class="icon icons-arrows-08"></i></div><div class="col-sm-2"><i class="icon icons-arrows-07"></i></div><div class="col-sm-2"><i class="icon icons-arrows-06"></i></div><div class="col-sm-2"><i class="icon icons-arrows-05"></i></div><div class="col-sm-2"><i class="icon icons-arrows-03"></i></div><div class="col-sm-2"><i class="icon icons-arrows-04"></i></div><div class="col-sm-2"><i class="icon icons-arrows-02"></i></div><div class="col-sm-2"><i class="icon icons-arrows-01"></i></div><div class="col-sm-2"><i class="icon icons-alerts-18"></i></div><div class="col-sm-2"><i class="icon icons-alerts-17"></i></div><div class="col-sm-2"><i class="icon icons-alerts-16"></i></div><div class="col-sm-2"><i class="icon icons-alerts-15"></i></div><div class="col-sm-2"><i class="icon icons-alerts-14"></i></div><div class="col-sm-2"><i class="icon icons-arrows-09"></i></div><div class="col-sm-2"><i class="icon icons-arrows-10"></i></div><div class="col-sm-2"><i class="icon icons-arrows-11"></i></div><div class="col-sm-2"><i class="icon icons-arrows-12"></i></div><div class="col-sm-2"><i class="icon icons-arrows-13"></i></div><div class="col-sm-2"><i class="icon icons-arrows-14"></i></div><div class="col-sm-2"><i class="icon icons-arrows-15"></i></div><div class="col-sm-2"><i class="icon icons-arrows-16"></i></div><div class="col-sm-2"><i class="icon icons-arrows-22"></i></div><div class="col-sm-2"><i class="icon icons-arrows-17"></i></div><div class="col-sm-2"><i class="icon icons-arrows-18"></i></div><div class="col-sm-2"><i class="icon icons-arrows-19"></i></div><div class="col-sm-2"><i class="icon icons-arrows-20"></i></div><div class="col-sm-2"><i class="icon icons-arrows-21"></i></div><div class="col-sm-2"><i class="icon icons-arrows-30"></i></div><div class="col-sm-2"><i class="icon icons-arrows-31"></i></div><div class="col-sm-2"><i class="icon icons-arrows-32"></i></div><div class="col-sm-2"><i class="icon icons-arrows-33"></i></div><div class="col-sm-2"><i class="icon icons-arrows-34"></i></div><div class="col-sm-2"><i class="icon icons-arrows-23"></i></div><div class="col-sm-2"><i class="icon icons-arrows-24"></i></div><div class="col-sm-2"><i class="icon icons-arrows-25"></i></div><div class="col-sm-2"><i class="icon icons-arrows-26"></i></div><div class="col-sm-2"><i class="icon icons-arrows-27"></i></div><div class="col-sm-2"><i class="icon icons-arrows-28"></i></div><div class="col-sm-2"><i class="icon icons-arrows-29"></i></div><div class="col-sm-2"><i class="icon icons-arrows-36"></i></div><div class="col-sm-2"><i class="icon icons-arrows-37"></i></div><div class="col-sm-2"><i class="icon icons-arrows-38"></i></div><div class="col-sm-2"><i class="icon icons-arrows-39"></i></div><div class="col-sm-2"><i class="icon icons-arrows-40"></i></div><div class="col-sm-2"><i class="icon icons-arrows-41"></i></div><div class="col-sm-2"><i class="icon icons-badges-votes-01"></i></div><div class="col-sm-2"><i class="icon icons-badges-votes-02"></i></div><div class="col-sm-2"><i class="icon icons-arrows-30"></i></div><div class="col-sm-2"><i class="icon icons-badges-votes-03"></i></div><div class="col-sm-2"><i class="icon icons-badges-votes-04"></i></div><div class="col-sm-2"><i class="icon icons-badges-votes-05"></i></div><div class="col-sm-2"><i class="icon icons-badges-votes-06"></i></div><div class="col-sm-2"><i class="icon icons-arrows-35"></i></div><div class="col-sm-2"><i class="icon icons-badges-votes-07"></i></div><div class="col-sm-2"><i class="icon icons-badges-votes-08"></i></div><div class="col-sm-2"><i class="icon icons-badges-votes-09"></i></div><div class="col-sm-2"><i class="icon icons-badges-votes-10"></i></div><div class="col-sm-2"><i class="icon icons-badges-votes-11"></i></div><div class="col-sm-2"><i class="icon icons-badges-votes-12"></i></div><div class="col-sm-2"><i class="icon icons-badges-votes-13"></i></div><div class="col-sm-2"><i class="icon icons-badges-votes-14"></i></div><div class="col-sm-2"><i class="icon icons-badges-votes-15"></i></div><div class="col-sm-2"><i class="icon icons-badges-votes-16"></i></div><div class="col-sm-2"><i class="icon icons-chat-messages-01"></i></div><div class="col-sm-2"><i class="icon icons-chat-messages-02"></i></div><div class="col-sm-2"><i class="icon icons-chat-messages-03"></i></div><div class="col-sm-2"><i class="icon icons-chat-messages-04"></i></div><div class="col-sm-2"><i class="icon icons-chat-messages-05"></i></div><div class="col-sm-2"><i class="icon icons-chat-messages-06"></i></div><div class="col-sm-2"><i class="icon icons-chat-messages-07"></i></div><div class="col-sm-2"><i class="icon icons-chat-messages-08"></i></div><div class="col-sm-2"><i class="icon icons-chat-messages-09"></i></div><div class="col-sm-2"><i class="icon icons-chat-messages-10"></i></div><div class="col-sm-2"><i class="icon icons-chat-messages-11"></i></div><div class="col-sm-2"><i class="icon icons-chat-messages-12"></i></div><div class="col-sm-2"><i class="icon icons-chat-messages-13"></i></div><div class="col-sm-2"><i class="icon icons-chat-messages-14"></i></div><div class="col-sm-2"><i class="icon icons-chat-messages-15"></i></div><div class="col-sm-2"><i class="icon icons-chat-messages-16"></i></div><div class="col-sm-2"><i class="icon icons-documents-bookmarks-01"></i></div><div class="col-sm-2"><i class="icon icons-documents-bookmarks-02"></i></div><div class="col-sm-2"><i class="icon icons-documents-bookmarks-03"></i></div><div class="col-sm-2"><i class="icon icons-documents-bookmarks-04"></i></div><div class="col-sm-2"><i class="icon icons-documents-bookmarks-05"></i></div><div class="col-sm-2"><i class="icon icons-documents-bookmarks-06"></i></div><div class="col-sm-2"><i class="icon icons-documents-bookmarks-07"></i></div><div class="col-sm-2"><i class="icon icons-documents-bookmarks-08"></i></div><div class="col-sm-2"><i class="icon icons-documents-bookmarks-09"></i></div><div class="col-sm-2"><i class="icon icons-documents-bookmarks-10"></i></div><div class="col-sm-2"><i class="icon icons-documents-bookmarks-11"></i></div><div class="col-sm-2"><i class="icon icons-documents-bookmarks-12"></i></div><div class="col-sm-2"><i class="icon icons-documents-bookmarks-13"></i></div><div class="col-sm-2"><i class="icon icons-documents-bookmarks-14"></i></div><div class="col-sm-2"><i class="icon icons-documents-bookmarks-15"></i></div><div class="col-sm-2"><i class="icon icons-documents-bookmarks-16"></i></div><div class="col-sm-2"><i class="icon icons-ecology-01"></i></div><div class="col-sm-2"><i class="icon icons-ecology-02"></i></div><div class="col-sm-2"><i class="icon icons-ecology-03"></i></div><div class="col-sm-2"><i class="icon icons-ecology-04"></i></div><div class="col-sm-2"><i class="icon icons-ecology-05"></i></div><div class="col-sm-2"><i class="icon icons-ecology-06"></i></div><div class="col-sm-2"><i class="icon icons-ecology-07"></i></div><div class="col-sm-2"><i class="icon icons-ecology-08"></i></div><div class="col-sm-2"><i class="icon icons-ecology-09"></i></div><div class="col-sm-2"><i class="icon icons-ecology-10"></i></div><div class="col-sm-2"><i class="icon icons-ecology-11"></i></div><div class="col-sm-2"><i class="icon icons-ecology-12"></i></div><div class="col-sm-2"><i class="icon icons-ecology-13"></i></div><div class="col-sm-2"><i class="icon icons-ecology-14"></i></div><div class="col-sm-2"><i class="icon icons-ecology-15"></i></div><div class="col-sm-2"><i class="icon icons-ecology-16"></i></div><div class="col-sm-2"><i class="icon icons-education-science-01"></i></div><div class="col-sm-2"><i class="icon icons-education-science-02"></i></div><div class="col-sm-2"><i class="icon icons-education-science-03"></i></div><div class="col-sm-2"><i class="icon icons-education-science-04"></i></div><div class="col-sm-2"><i class="icon icons-education-science-05"></i></div><div class="col-sm-2"><i class="icon icons-education-science-06"></i></div><div class="col-sm-2"><i class="icon icons-education-science-07"></i></div><div class="col-sm-2"><i class="icon icons-education-science-08"></i></div><div class="col-sm-2"><i class="icon icons-education-science-09"></i></div><div class="col-sm-2"><i class="icon icons-education-science-10"></i></div><div class="col-sm-2"><i class="icon icons-education-science-11"></i></div><div class="col-sm-2"><i class="icon icons-education-science-12"></i></div><div class="col-sm-2"><i class="icon icons-education-science-13"></i></div><div class="col-sm-2"><i class="icon icons-education-science-14"></i></div><div class="col-sm-2"><i class="icon icons-education-science-15"></i></div><div class="col-sm-2"><i class="icon icons-education-science-16"></i></div><div class="col-sm-2"><i class="icon icons-education-science-17"></i></div><div class="col-sm-2"><i class="icon icons-education-science-18"></i></div><div class="col-sm-2"><i class="icon icons-education-science-19"></i></div><div class="col-sm-2"><i class="icon icons-education-science-20"></i></div><div class="col-sm-2"><i class="icon icons-emoticons-01"></i></div><div class="col-sm-2"><i class="icon icons-emoticons-02"></i></div><div class="col-sm-2"><i class="icon icons-emoticons-03"></i></div><div class="col-sm-2"><i class="icon icons-emoticons-04"></i></div><div class="col-sm-2"><i class="icon icons-emoticons-05"></i></div><div class="col-sm-2"><i class="icon icons-emoticons-06"></i></div><div class="col-sm-2"><i class="icon icons-emoticons-07"></i></div><div class="col-sm-2"><i class="icon icons-emoticons-08"></i></div><div class="col-sm-2"><i class="icon icons-emoticons-09"></i></div><div class="col-sm-2"><i class="icon icons-emoticons-10"></i></div><div class="col-sm-2"><i class="icon icons-emoticons-11"></i></div><div class="col-sm-2"><i class="icon icons-emoticons-12"></i></div><div class="col-sm-2"><i class="icon icons-emoticons-13"></i></div><div class="col-sm-2"><i class="icon icons-emoticons-14"></i></div><div class="col-sm-2"><i class="icon icons-emoticons-15"></i></div><div class="col-sm-2"><i class="icon icons-emoticons-16"></i></div><div class="col-sm-2"><i class="icon icons-emoticons-17"></i></div><div class="col-sm-2"><i class="icon icons-emoticons-18"></i></div><div class="col-sm-2"><i class="icon icons-emoticons-19"></i></div><div class="col-sm-2"><i class="icon icons-emoticons-20"></i></div><div class="col-sm-2"><i class="icon icons-emoticons-21"></i></div><div class="col-sm-2"><i class="icon icons-emoticons-22"></i></div><div class="col-sm-2"><i class="icon icons-emoticons-23"></i></div><div class="col-sm-2"><i class="icon icons-emoticons-24"></i></div><div class="col-sm-2"><i class="icon icons-emoticons-25"></i></div><div class="col-sm-2"><i class="icon icons-emoticons-26"></i></div><div class="col-sm-2"><i class="icon icons-emoticons-27"></i></div><div class="col-sm-2"><i class="icon icons-emoticons-28"></i></div><div class="col-sm-2"><i class="icon icons-emoticons-29"></i></div><div class="col-sm-2"><i class="icon icons-emoticons-30"></i></div><div class="col-sm-2"><i class="icon icons-emoticons-31"></i></div><div class="col-sm-2"><i class="icon icons-emoticons-32"></i></div><div class="col-sm-2"><i class="icon icons-emoticons-33"></i></div><div class="col-sm-2"><i class="icon icons-emoticons-34"></i></div><div class="col-sm-2"><i class="icon icons-emoticons-35"></i></div><div class="col-sm-2"><i class="icon icons-emoticons-artboard-80"></i></div><div class="col-sm-2"><i class="icon icons-faces-users-01"></i></div><div class="col-sm-2"><i class="icon icons-faces-users-02"></i></div><div class="col-sm-2"><i class="icon icons-faces-users-03"></i></div><div class="col-sm-2"><i class="icon icons-faces-users-04"></i></div><div class="col-sm-2"><i class="icon icons-faces-users-05"></i></div><div class="col-sm-2"><i class="icon icons-faces-users-06"></i></div><div class="col-sm-2"><i class="icon icons-faces-users-07"></i></div><div class="col-sm-2"><i class="icon icons-filetypes-01"></i></div><div class="col-sm-2"><i class="icon icons-filetypes-02"></i></div><div class="col-sm-2"><i class="icon icons-filetypes-03"></i></div><div class="col-sm-2"><i class="icon icons-filetypes-04"></i></div><div class="col-sm-2"><i class="icon icons-filetypes-05"></i></div><div class="col-sm-2"><i class="icon icons-filetypes-06"></i></div><div class="col-sm-2"><i class="icon icons-filetypes-07"></i></div><div class="col-sm-2"><i class="icon icons-filetypes-08"></i></div><div class="col-sm-2"><i class="icon icons-filetypes-09"></i></div><div class="col-sm-2"><i class="icon icons-filetypes-10"></i></div><div class="col-sm-2"><i class="icon icons-filetypes-11"></i></div><div class="col-sm-2"><i class="icon icons-filetypes-12"></i></div><div class="col-sm-2"><i class="icon icons-filetypes-13"></i></div><div class="col-sm-2"><i class="icon icons-filetypes-14"></i></div><div class="col-sm-2"><i class="icon icons-filetypes-15"></i></div><div class="col-sm-2"><i class="icon icons-filetypes-16"></i></div><div class="col-sm-2"><i class="icon icons-filetypes-17"></i></div><div class="col-sm-2"><i class="icon icons-food-01"></i></div><div class="col-sm-2"><i class="icon icons-food-02"></i></div><div class="col-sm-2"><i class="icon icons-food-03"></i></div><div class="col-sm-2"><i class="icon icons-food-04"></i></div><div class="col-sm-2"><i class="icon icons-food-05"></i></div><div class="col-sm-2"><i class="icon icons-food-06"></i></div><div class="col-sm-2"><i class="icon icons-food-07"></i></div><div class="col-sm-2"><i class="icon icons-food-08"></i></div><div class="col-sm-2"><i class="icon icons-food-09"></i></div><div class="col-sm-2"><i class="icon icons-food-10"></i></div><div class="col-sm-2"><i class="icon icons-food-11"></i></div><div class="col-sm-2"><i class="icon icons-food-12"></i></div><div class="col-sm-2"><i class="icon icons-food-13"></i></div><div class="col-sm-2"><i class="icon icons-food-14"></i></div><div class="col-sm-2"><i class="icon icons-food-15"></i></div><div class="col-sm-2"><i class="icon icons-food-16"></i></div><div class="col-sm-2"><i class="icon icons-food-17"></i></div><div class="col-sm-2"><i class="icon icons-food-18"></i></div><div class="col-sm-2"><i class="icon icons-graphic-design-01"></i></div><div class="col-sm-2"><i class="icon icons-graphic-design-02"></i></div><div class="col-sm-2"><i class="icon icons-graphic-design-03"></i></div><div class="col-sm-2"><i class="icon icons-graphic-design-04"></i></div><div class="col-sm-2"><i class="icon icons-graphic-design-05"></i></div><div class="col-sm-2"><i class="icon icons-graphic-design-06"></i></div><div class="col-sm-2"><i class="icon icons-graphic-design-07"></i></div><div class="col-sm-2"><i class="icon icons-graphic-design-08"></i></div><div class="col-sm-2"><i class="icon icons-graphic-design-09"></i></div><div class="col-sm-2"><i class="icon icons-graphic-design-10"></i></div><div class="col-sm-2"><i class="icon icons-graphic-design-11"></i></div><div class="col-sm-2"><i class="icon icons-graphic-design-12"></i></div><div class="col-sm-2"><i class="icon icons-graphic-design-13"></i></div><div class="col-sm-2"><i class="icon icons-graphic-design-14"></i></div><div class="col-sm-2"><i class="icon icons-graphic-design-15"></i></div><div class="col-sm-2"><i class="icon icons-graphic-design-16"></i></div><div class="col-sm-2"><i class="icon icons-graphic-design-17"></i></div><div class="col-sm-2"><i class="icon icons-graphic-design-18"></i></div><div class="col-sm-2"><i class="icon icons-graphic-design-19"></i></div><div class="col-sm-2"><i class="icon icons-graphic-design-20"></i></div><div class="col-sm-2"><i class="icon icons-graphic-design-21"></i></div><div class="col-sm-2"><i class="icon icons-graphic-design-22"></i></div><div class="col-sm-2"><i class="icon icons-graphic-design-23"></i></div><div class="col-sm-2"><i class="icon icons-graphic-design-24"></i></div><div class="col-sm-2"><i class="icon icons-graphic-design-25"></i></div><div class="col-sm-2"><i class="icon icons-graphic-design-26"></i></div><div class="col-sm-2"><i class="icon icons-graphic-design-27"></i></div><div class="col-sm-2"><i class="icon icons-graphic-design-28"></i></div><div class="col-sm-2"><i class="icon icons-graphic-design-29"></i></div><div class="col-sm-2"><i class="icon icons-graphic-design-30"></i></div><div class="col-sm-2"><i class="icon icons-graphic-design-31"></i></div><div class="col-sm-2"><i class="icon icons-graphic-design-32"></i></div><div class="col-sm-2"><i class="icon icons-graphic-design-33"></i></div><div class="col-sm-2"><i class="icon icons-graphic-design-34"></i></div><div class="col-sm-2"><i class="icon icons-medical-01"></i></div><div class="col-sm-2"><i class="icon icons-medical-02"></i></div><div class="col-sm-2"><i class="icon icons-medical-03"></i></div><div class="col-sm-2"><i class="icon icons-medical-04"></i></div><div class="col-sm-2"><i class="icon icons-medical-05"></i></div><div class="col-sm-2"><i class="icon icons-medical-06"></i></div><div class="col-sm-2"><i class="icon icons-medical-07"></i></div><div class="col-sm-2"><i class="icon icons-medical-08"></i></div><div class="col-sm-2"><i class="icon icons-medical-09"></i></div><div class="col-sm-2"><i class="icon icons-medical-10"></i></div><div class="col-sm-2"><i class="icon icons-medical-11"></i></div><div class="col-sm-2"><i class="icon icons-medical-12"></i></div><div class="col-sm-2"><i class="icon icons-medical-13"></i></div><div class="col-sm-2"><i class="icon icons-medical-14"></i></div><div class="col-sm-2"><i class="icon icons-medical-15"></i></div><div class="col-sm-2"><i class="icon icons-medical-16"></i></div><div class="col-sm-2"><i class="icon icons-medical-17"></i></div><div class="col-sm-2"><i class="icon icons-medical-18"></i></div><div class="col-sm-2"><i class="icon icons-medical-19"></i></div><div class="col-sm-2"><i class="icon icons-medical-20"></i></div><div class="col-sm-2"><i class="icon icons-medical-21"></i></div><div class="col-sm-2"><i class="icon icons-medical-22"></i></div><div class="col-sm-2"><i class="icon icons-medical-23"></i></div><div class="col-sm-2"><i class="icon icons-medical-24"></i></div><div class="col-sm-2"><i class="icon icons-medical-25"></i></div><div class="col-sm-2"><i class="icon icons-medical-26"></i></div><div class="col-sm-2"><i class="icon icons-medical-27"></i></div><div class="col-sm-2"><i class="icon icons-medical-28"></i></div><div class="col-sm-2"><i class="icon icons-multimedia-01"></i></div><div class="col-sm-2"><i class="icon icons-multimedia-02"></i></div><div class="col-sm-2"><i class="icon icons-multimedia-03"></i></div><div class="col-sm-2"><i class="icon icons-multimedia-04"></i></div><div class="col-sm-2"><i class="icon icons-multimedia-05"></i></div><div class="col-sm-2"><i class="icon icons-multimedia-06"></i></div><div class="col-sm-2"><i class="icon icons-multimedia-07"></i></div><div class="col-sm-2"><i class="icon icons-multimedia-08"></i></div><div class="col-sm-2"><i class="icon icons-multimedia-09"></i></div><div class="col-sm-2"><i class="icon icons-multimedia-10"></i></div><div class="col-sm-2"><i class="icon icons-multimedia-11"></i></div><div class="col-sm-2"><i class="icon icons-multimedia-12"></i></div><div class="col-sm-2"><i class="icon icons-multimedia-13"></i></div><div class="col-sm-2"><i class="icon icons-multimedia-14"></i></div><div class="col-sm-2"><i class="icon icons-multimedia-15"></i></div><div class="col-sm-2"><i class="icon icons-multimedia-16"></i></div><div class="col-sm-2"><i class="icon icons-multimedia-17"></i></div><div class="col-sm-2"><i class="icon icons-multimedia-18"></i></div><div class="col-sm-2"><i class="icon icons-multimedia-19"></i></div><div class="col-sm-2"><i class="icon icons-multimedia-20"></i></div><div class="col-sm-2"><i class="icon icons-multimedia-21"></i></div><div class="col-sm-2"><i class="icon icons-multimedia-22"></i></div><div class="col-sm-2"><i class="icon icons-multimedia-23"></i></div><div class="col-sm-2"><i class="icon icons-multimedia-24"></i></div><div class="col-sm-2"><i class="icon icons-multimedia-25"></i></div><div class="col-sm-2"><i class="icon icons-multimedia-26"></i></div><div class="col-sm-2"><i class="icon icons-multimedia-27"></i></div><div class="col-sm-2"><i class="icon icons-multimedia-28"></i></div><div class="col-sm-2"><i class="icon icons-multimedia-29"></i></div><div class="col-sm-2"><i class="icon icons-multimedia-30"></i></div><div class="col-sm-2"><i class="icon icons-multimedia-31"></i></div><div class="col-sm-2"><i class="icon icons-multimedia-32"></i></div><div class="col-sm-2"><i class="icon icons-multimedia-33"></i></div><div class="col-sm-2"><i class="icon icons-multimedia-34"></i></div><div class="col-sm-2"><i class="icon icons-multimedia-35"></i></div><div class="col-sm-2"><i class="icon icons-multimedia-36"></i></div><div class="col-sm-2"><i class="icon icons-multimedia-37"></i></div><div class="col-sm-2"><i class="icon icons-multimedia-38"></i></div><div class="col-sm-2"><i class="icon icons-multimedia-39"></i></div><div class="col-sm-2"><i class="icon icons-multimedia-40"></i></div><div class="col-sm-2"><i class="icon icons-nature-01"></i></div><div class="col-sm-2"><i class="icon icons-nature-02"></i></div><div class="col-sm-2"><i class="icon icons-nature-03"></i></div><div class="col-sm-2"><i class="icon icons-nature-04"></i></div><div class="col-sm-2"><i class="icon icons-nature-05"></i></div><div class="col-sm-2"><i class="icon icons-nature-06"></i></div><div class="col-sm-2"><i class="icon icons-nature-07"></i></div><div class="col-sm-2"><i class="icon icons-nature-08"></i></div><div class="col-sm-2"><i class="icon icons-nature-09"></i></div><div class="col-sm-2"><i class="icon icons-nature-10"></i></div><div class="col-sm-2"><i class="icon icons-nature-11"></i></div><div class="col-sm-2"><i class="icon icons-nature-12"></i></div><div class="col-sm-2"><i class="icon icons-nature-13"></i></div><div class="col-sm-2"><i class="icon icons-nature-14"></i></div><div class="col-sm-2"><i class="icon icons-office-01"></i></div><div class="col-sm-2"><i class="icon icons-office-01"></i></div><div class="col-sm-2"><i class="icon icons-shopping-15"></i></div><div class="col-sm-2"><i class="icon icons-shopping-16"></i></div><div class="col-sm-2"><i class="icon icons-shopping-17"></i></div><div class="col-sm-2"><i class="icon icons-shopping-18"></i></div><div class="col-sm-2"><i class="icon icons-shopping-19"></i></div><div class="col-sm-2"><i class="icon icons-shopping-20"></i></div><div class="col-sm-2"><i class="icon icons-shopping-21"></i></div><div class="col-sm-2"><i class="icon icons-shopping-22"></i></div><div class="col-sm-2"><i class="icon icons-shopping-23"></i></div><div class="col-sm-2"><i class="icon icons-shopping-24"></i></div><div class="col-sm-2"><i class="icon icons-shopping-25"></i></div><div class="col-sm-2"><i class="icon icons-shopping-26"></i></div><div class="col-sm-2"><i class="icon icons-shopping-27"></i></div><div class="col-sm-2"><i class="icon icons-socialmedia-01"></i></div><div class="col-sm-2"><i class="icon icons-socialmedia-02"></i></div><div class="col-sm-2"><i class="icon icons-socialmedia-03"></i></div><div class="col-sm-2"><i class="icon icons-socialmedia-04"></i></div><div class="col-sm-2"><i class="icon icons-socialmedia-05"></i></div><div class="col-sm-2"><i class="icon icons-socialmedia-06"></i></div><div class="col-sm-2"><i class="icon icons-socialmedia-07"></i></div><div class="col-sm-2"><i class="icon icons-socialmedia-08"></i></div><div class="col-sm-2"><i class="icon icons-socialmedia-09"></i></div><div class="col-sm-2"><i class="icon icons-socialmedia-10"></i></div><div class="col-sm-2"><i class="icon icons-socialmedia-11"></i></div><div class="col-sm-2"><i class="icon icons-socialmedia-12"></i></div><div class="col-sm-2"><i class="icon icons-socialmedia-13"></i></div><div class="col-sm-2"><i class="icon icons-socialmedia-14"></i></div><div class="col-sm-2"><i class="icon icons-socialmedia-15"></i></div><div class="col-sm-2"><i class="icon icons-socialmedia-16"></i></div><div class="col-sm-2"><i class="icon icons-socialmedia-17"></i></div><div class="col-sm-2"><i class="icon icons-socialmedia-18"></i></div><div class="col-sm-2"><i class="icon icons-socialmedia-19"></i></div><div class="col-sm-2"><i class="icon icons-socialmedia-20"></i></div><div class="col-sm-2"><i class="icon icons-socialmedia-21"></i></div><div class="col-sm-2"><i class="icon icons-socialmedia-22"></i></div><div class="col-sm-2"><i class="icon icons-socialmedia-23"></i></div><div class="col-sm-2"><i class="icon icons-socialmedia-24"></i></div><div class="col-sm-2"><i class="icon icons-socialmedia-25"></i></div><div class="col-sm-2"><i class="icon icons-socialmedia-26"></i></div><div class="col-sm-2"><i class="icon icons-socialmedia-27"></i></div><div class="col-sm-2"><i class="icon icons-socialmedia-28"></i></div><div class="col-sm-2"><i class="icon icons-socialmedia-29"></i></div><div class="col-sm-2"><i class="icon icons-sport-01"></i></div><div class="col-sm-2"><i class="icon icons-sport-02"></i></div><div class="col-sm-2"><i class="icon icons-sport-03"></i></div><div class="col-sm-2"><i class="icon icons-sport-04"></i></div><div class="col-sm-2"><i class="icon icons-sport-05"></i></div><div class="col-sm-2"><i class="icon icons-sport-06"></i></div><div class="col-sm-2"><i class="icon icons-sport-07"></i></div><div class="col-sm-2"><i class="icon icons-sport-08"></i></div><div class="col-sm-2"><i class="icon icons-sport-09"></i></div><div class="col-sm-2"><i class="icon icons-sport-10"></i></div><div class="col-sm-2"><i class="icon icons-sport-11"></i></div><div class="col-sm-2"><i class="icon icons-sport-12"></i></div><div class="col-sm-2"><i class="icon icons-sport-13"></i></div><div class="col-sm-2"><i class="icon icons-sport-14"></i></div><div class="col-sm-2"><i class="icon icons-sport-15"></i></div><div class="col-sm-2"><i class="icon icons-sport-16"></i></div><div class="col-sm-2"><i class="icon icons-sport-17"></i></div><div class="col-sm-2"><i class="icon icons-sport-18"></i></div><div class="col-sm-2"><i class="icon icons-text-hierarchy-01"></i></div><div class="col-sm-2"><i class="icon icons-text-hierarchy-02"></i></div><div class="col-sm-2"><i class="icon icons-text-hierarchy-03"></i></div><div class="col-sm-2"><i class="icon icons-text-hierarchy-04"></i></div><div class="col-sm-2"><i class="icon icons-text-hierarchy-05"></i></div><div class="col-sm-2"><i class="icon icons-text-hierarchy-06"></i></div><div class="col-sm-2"><i class="icon icons-text-hierarchy-07"></i></div><div class="col-sm-2"><i class="icon icons-text-hierarchy-08"></i></div><div class="col-sm-2"><i class="icon icons-text-hierarchy-09"></i></div><div class="col-sm-2"><i class="icon icons-text-hierarchy-10"></i></div><div class="col-sm-2"><i class="icon icons-touch-gestures-01"></i></div><div class="col-sm-2"><i class="icon icons-touch-gestures-02"></i></div><div class="col-sm-2"><i class="icon icons-touch-gestures-03"></i></div><div class="col-sm-2"><i class="icon icons-touch-gestures-04"></i></div><div class="col-sm-2"><i class="icon icons-touch-gestures-05"></i></div><div class="col-sm-2"><i class="icon icons-touch-gestures-06"></i></div><div class="col-sm-2"><i class="icon icons-touch-gestures-07"></i></div><div class="col-sm-2"><i class="icon icons-touch-gestures-08"></i></div><div class="col-sm-2"><i class="icon icons-touch-gestures-09"></i></div><div class="col-sm-2"><i class="icon icons-touch-gestures-10"></i></div><div class="col-sm-2"><i class="icon icons-touch-gestures-11"></i></div><div class="col-sm-2"><i class="icon icons-touch-gestures-12"></i></div><div class="col-sm-2"><i class="icon icons-touch-gestures-13"></i></div><div class="col-sm-2"><i class="icon icons-touch-gestures-14"></i></div><div class="col-sm-2"><i class="icon icons-touch-gestures-15"></i></div><div class="col-sm-2"><i class="icon icons-touch-gestures-16"></i></div><div class="col-sm-2"><i class="icon icons-touch-gestures-17"></i></div><div class="col-sm-2"><i class="icon icons-touch-gestures-18"></i></div><div class="col-sm-2"><i class="icon icons-touch-gestures-19"></i></div><div class="col-sm-2"><i class="icon icons-touch-gestures-20"></i></div><div class="col-sm-2"><i class="icon icons-touch-gestures-21"></i></div><div class="col-sm-2"><i class="icon icons-touch-gestures-22"></i></div><div class="col-sm-2"><i class="icon icons-touch-gestures-23"></i></div><div class="col-sm-2"><i class="icon icons-touch-gestures-24"></i></div><div class="col-sm-2"><i class="icon icons-travel-transportation-01"></i></div><div class="col-sm-2"><i class="icon icons-travel-transportation-02"></i></div><div class="col-sm-2"><i class="icon icons-travel-transportation-03"></i></div><div class="col-sm-2"><i class="icon icons-travel-transportation-04"></i></div><div class="col-sm-2"><i class="icon icons-travel-transportation-05"></i></div><div class="col-sm-2"><i class="icon icons-travel-transportation-06"></i></div><div class="col-sm-2"><i class="icon icons-travel-transportation-07"></i></div><div class="col-sm-2"><i class="icon icons-travel-transportation-08"></i></div><div class="col-sm-2"><i class="icon icons-travel-transportation-09"></i></div><div class="col-sm-2"><i class="icon icons-travel-transportation-10"></i></div><div class="col-sm-2"><i class="icon icons-travel-transportation-11"></i></div><div class="col-sm-2"><i class="icon icons-travel-transportation-12"></i></div><div class="col-sm-2"><i class="icon icons-travel-transportation-13"></i></div><div class="col-sm-2"><i class="icon icons-travel-transportation-14"></i></div><div class="col-sm-2"><i class="icon icons-travel-transportation-15"></i></div><div class="col-sm-2"><i class="icon icons-travel-transportation-16"></i></div><div class="col-sm-2"><i class="icon icons-travel-transportation-17"></i></div><div class="col-sm-2"><i class="icon icons-travel-transportation-18"></i></div><div class="col-sm-2"><i class="icon icons-travel-transportation-19"></i></div><div class="col-sm-2"><i class="icon icons-travel-transportation-20"></i></div><div class="col-sm-2"><i class="icon icons-weather-01"></i></div><div class="col-sm-2"><i class="icon icons-weather-02"></i></div><div class="col-sm-2"><i class="icon icons-weather-03"></i></div><div class="col-sm-2"><i class="icon icons-weather-04"></i></div><div class="col-sm-2"><i class="icon icons-weather-05"></i></div><div class="col-sm-2"><i class="icon icons-weather-06"></i></div><div class="col-sm-2"><i class="icon icons-weather-07"></i></div><div class="col-sm-2"><i class="icon icons-weather-08"></i></div><div class="col-sm-2"><i class="icon icons-weather-09"></i></div><div class="col-sm-2"><i class="icon icons-weather-10"></i></div><div class="col-sm-2"><i class="icon icons-weather-11"></i></div><div class="col-sm-2"><i class="icon icons-weather-12"></i></div><div class="col-sm-2"><i class="icon icons-weather-13"></i></div><div class="col-sm-2"><i class="icon icons-weather-14"></i></div><div class="col-sm-2"><i class="icon icons-office-02"></i></div><div class="col-sm-2"><i class="icon icons-office-03"></i></div><div class="col-sm-2"><i class="icon icons-office-04"></i></div><div class="col-sm-2"><i class="icon icons-office-05"></i></div><div class="col-sm-2"><i class="icon icons-office-06"></i></div><div class="col-sm-2"><i class="icon icons-office-07"></i></div><div class="col-sm-2"><i class="icon icons-office-08"></i></div><div class="col-sm-2"><i class="icon icons-office-09"></i></div><div class="col-sm-2"><i class="icon icons-office-10"></i></div><div class="col-sm-2"><i class="icon icons-office-11"></i></div><div class="col-sm-2"><i class="icon icons-office-12"></i></div><div class="col-sm-2"><i class="icon icons-office-13"></i></div><div class="col-sm-2"><i class="icon icons-office-14"></i></div><div class="col-sm-2"><i class="icon icons-office-15"></i></div><div class="col-sm-2"><i class="icon icons-office-16"></i></div><div class="col-sm-2"><i class="icon icons-office-17"></i></div><div class="col-sm-2"><i class="icon icons-office-18"></i></div><div class="col-sm-2"><i class="icon icons-office-19"></i></div><div class="col-sm-2"><i class="icon icons-office-20"></i></div><div class="col-sm-2"><i class="icon icons-office-21"></i></div><div class="col-sm-2"><i class="icon icons-office-22"></i></div><div class="col-sm-2"><i class="icon icons-office-23"></i></div><div class="col-sm-2"><i class="icon icons-office-24"></i></div><div class="col-sm-2"><i class="icon icons-office-25"></i></div><div class="col-sm-2"><i class="icon icons-office-26"></i></div><div class="col-sm-2"><i class="icon icons-office-27"></i></div><div class="col-sm-2"><i class="icon icons-office-28"></i></div><div class="col-sm-2"><i class="icon icons-office-29"></i></div><div class="col-sm-2"><i class="icon icons-office-30"></i></div><div class="col-sm-2"><i class="icon icons-office-31"></i></div><div class="col-sm-2"><i class="icon icons-office-32"></i></div><div class="col-sm-2"><i class="icon icons-office-33"></i></div><div class="col-sm-2"><i class="icon icons-office-34"></i></div><div class="col-sm-2"><i class="icon icons-office-35"></i></div><div class="col-sm-2"><i class="icon icons-office-36"></i></div><div class="col-sm-2"><i class="icon icons-office-37"></i></div><div class="col-sm-2"><i class="icon icons-office-38"></i></div><div class="col-sm-2"><i class="icon icons-office-39"></i></div><div class="col-sm-2"><i class="icon icons-office-40"></i></div><div class="col-sm-2"><i class="icon icons-office-41"></i></div><div class="col-sm-2"><i class="icon icons-office-42"></i></div><div class="col-sm-2"><i class="icon icons-office-43"></i></div><div class="col-sm-2"><i class="icon icons-office-44"></i></div><div class="col-sm-2"><i class="icon icons-office-45"></i></div><div class="col-sm-2"><i class="icon icons-office-46"></i></div><div class="col-sm-2"><i class="icon icons-office-47"></i></div><div class="col-sm-2"><i class="icon icons-office-48"></i></div><div class="col-sm-2"><i class="icon icons-office-49"></i></div><div class="col-sm-2"><i class="icon icons-office-50"></i></div><div class="col-sm-2"><i class="icon icons-office-51"></i></div><div class="col-sm-2"><i class="icon icons-office-52"></i></div><div class="col-sm-2"><i class="icon icons-office-53"></i></div><div class="col-sm-2"><i class="icon icons-office-54"></i></div><div class="col-sm-2"><i class="icon icons-office-55"></i></div><div class="col-sm-2"><i class="icon icons-office-56"></i></div><div class="col-sm-2"><i class="icon icons-office-57"></i></div><div class="col-sm-2"><i class="icon icons-office-58"></i></div><div class="col-sm-2"><i class="icon icons-office-59"></i></div><div class="col-sm-2"><i class="icon icons-office-60"></i></div><div class="col-sm-2"><i class="icon icons-office-61"></i></div><div class="col-sm-2"><i class="icon icons-party-01"></i></div><div class="col-sm-2"><i class="icon icons-party-02"></i></div><div class="col-sm-2"><i class="icon icons-party-03"></i></div><div class="col-sm-2"><i class="icon icons-party-04"></i></div><div class="col-sm-2"><i class="icon icons-party-05"></i></div><div class="col-sm-2"><i class="icon icons-party-06"></i></div><div class="col-sm-2"><i class="icon icons-party-07"></i></div><div class="col-sm-2"><i class="icon icons-party-08"></i></div><div class="col-sm-2"><i class="icon icons-party-09"></i></div><div class="col-sm-2"><i class="icon icons-party-10"></i></div><div class="col-sm-2"><i class="icon icons-party-11"></i></div><div class="col-sm-2"><i class="icon icons-realestate-living-01"></i></div><div class="col-sm-2"><i class="icon icons-realestate-living-02"></i></div><div class="col-sm-2"><i class="icon icons-realestate-living-03"></i></div><div class="col-sm-2"><i class="icon icons-realestate-living-04"></i></div><div class="col-sm-2"><i class="icon icons-realestate-living-05"></i></div><div class="col-sm-2"><i class="icon icons-realestate-living-06"></i></div><div class="col-sm-2"><i class="icon icons-realestate-living-07"></i></div><div class="col-sm-2"><i class="icon icons-realestate-living-08"></i></div><div class="col-sm-2"><i class="icon icons-realestate-living-09"></i></div><div class="col-sm-2"><i class="icon icons-realestate-living-10"></i></div><div class="col-sm-2"><i class="icon icons-realestate-living-11"></i></div><div class="col-sm-2"><i class="icon icons-realestate-living-12"></i></div><div class="col-sm-2"><i class="icon icons-realestate-living-13"></i></div><div class="col-sm-2"><i class="icon icons-realestate-living-14"></i></div><div class="col-sm-2"><i class="icon icons-realestate-living-15"></i></div><div class="col-sm-2"><i class="icon icons-realestate-living-16"></i></div><div class="col-sm-2"><i class="icon icons-seo-icons-01"></i></div><div class="col-sm-2"><i class="icon icons-seo-icons-02"></i></div><div class="col-sm-2"><i class="icon icons-seo-icons-03"></i></div><div class="col-sm-2"><i class="icon icons-seo-icons-04"></i></div><div class="col-sm-2"><i class="icon icons-seo-icons-05"></i></div><div class="col-sm-2"><i class="icon icons-seo-icons-06"></i></div><div class="col-sm-2"><i class="icon icons-seo-icons-07"></i></div><div class="col-sm-2"><i class="icon icons-seo-icons-08"></i></div><div class="col-sm-2"><i class="icon icons-seo-icons-09"></i></div><div class="col-sm-2"><i class="icon icons-seo-icons-10"></i></div><div class="col-sm-2"><i class="icon icons-seo-icons-11"></i></div><div class="col-sm-2"><i class="icon icons-seo-icons-12"></i></div><div class="col-sm-2"><i class="icon icons-seo-icons-13"></i></div><div class="col-sm-2"><i class="icon icons-seo-icons-14"></i></div><div class="col-sm-2"><i class="icon icons-seo-icons-15"></i></div><div class="col-sm-2"><i class="icon icons-seo-icons-16"></i></div><div class="col-sm-2"><i class="icon icons-seo-icons-17"></i></div><div class="col-sm-2"><i class="icon icons-seo-icons-18"></i></div><div class="col-sm-2"><i class="icon icons-seo-icons-19"></i></div><div class="col-sm-2"><i class="icon icons-seo-icons-20"></i></div><div class="col-sm-2"><i class="icon icons-seo-icons-21"></i></div><div class="col-sm-2"><i class="icon icons-seo-icons-22"></i></div><div class="col-sm-2"><i class="icon icons-seo-icons-23"></i></div><div class="col-sm-2"><i class="icon icons-seo-icons-24"></i></div><div class="col-sm-2"><i class="icon icons-seo-icons-25"></i></div><div class="col-sm-2"><i class="icon icons-seo-icons-26"></i></div><div class="col-sm-2"><i class="icon icons-seo-icons-27"></i></div><div class="col-sm-2"><i class="icon icons-seo-icons-28"></i></div><div class="col-sm-2"><i class="icon icons-seo-icons-29"></i></div><div class="col-sm-2"><i class="icon icons-seo-icons-30"></i></div><div class="col-sm-2"><i class="icon icons-seo-icons-31"></i></div><div class="col-sm-2"><i class="icon icons-seo-icons-32"></i></div><div class="col-sm-2"><i class="icon icons-seo-icons-33"></i></div><div class="col-sm-2"><i class="icon icons-seo-icons-34"></i></div><div class="col-sm-2"><i class="icon icons-seo-icons-35"></i></div><div class="col-sm-2"><i class="icon icons-seo-icons-36"></i></div><div class="col-sm-2"><i class="icon icons-seo-icons-37"></i></div><div class="col-sm-2"><i class="icon icons-seo-icons-38"></i></div><div class="col-sm-2"><i class="icon icons-seo-icons-39"></i></div><div class="col-sm-2"><i class="icon icons-seo-icons-40"></i></div><div class="col-sm-2"><i class="icon icons-seo-icons-41"></i></div><div class="col-sm-2"><i class="icon icons-seo-icons-42"></i></div><div class="col-sm-2"><i class="icon icons-shopping-01"></i></div><div class="col-sm-2"><i class="icon icons-shopping-02"></i></div><div class="col-sm-2"><i class="icon icons-shopping-03"></i></div><div class="col-sm-2"><i class="icon icons-shopping-04"></i></div><div class="col-sm-2"><i class="icon icons-shopping-05"></i></div><div class="col-sm-2"><i class="icon icons-shopping-06"></i></div><div class="col-sm-2"><i class="icon icons-shopping-07"></i></div><div class="col-sm-2"><i class="icon icons-shopping-08"></i></div><div class="col-sm-2"><i class="icon icons-shopping-09"></i></div><div class="col-sm-2"><i class="icon icons-shopping-10"></i></div><div class="col-sm-2"><i class="icon icons-shopping-11"></i></div><div class="col-sm-2"><i class="icon icons-shopping-12"></i></div><div class="col-sm-2"><i class="icon icons-shopping-13"></i></div><div class="col-sm-2"><i class="icon icons-shopping-14"></i></div></div></div><div class="modal-footer border-top p-t-10 p-b-10 bg-gray-light"><button type="button" class="btn btn-white" data-dismiss="modal">Cancel</button><button type="button" class="save btn btn-primary">Save</button></div></div></div></div><div class="modal fade" id="modal-background" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header bg-primary"><button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="icons-office-52"></i></button><h4 class="modal-title">Change <strong>Background Color</strong></h4></div><div class="modal-body"><ul class="colors-list"><li class="white"></li><li class="primary"></li><li class="dark"></li><li class="red"></li><li class="green"></li><li class="blue active"></li><li class="aero"></li><li class="gray"></li><li class="orange"></li><li class="pink"></li><li class="purple"></li></ul></div><div class="modal-footer"><button type="button" class="btn btn-default btn-embossed" data-dismiss="modal">Cancel</button><button type="button" id="save-bg-color" class="btn btn-primary btn-embossed">Save</button></div></div></div></div><div class="modal fade" id="modal-user-profile" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header bg-primary"><button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="icons-office-52"></i></button><h4 class="modal-title"><strong>User Profile</strong> Widget</h4></div><div class="modal-body"><h3 class="m-b-30 m-t-10"><strong>Choose your template</strong></h3><div class="row"><div class="col-md-3"><div class="user-profile-img active" data-profile-widget="profile1"><img src="assets/images/user-widget-1.jpg" alt="profile 1" class="img-responsive"></div></div><div class="col-md-3"><div class="user-profile-img" data-profile-widget="profile2"><img src="assets/images/user-widget-2.jpg" alt="profile 2" class="img-responsive"></div></div><div class="col-md-3"><div class="user-profile-img" data-profile-widget="profile3"><img src="assets/images/user-widget-3.jpg" alt="profile 3" class="img-responsive"></div></div><div class="col-md-3"><div class="user-profile-img" data-profile-widget="profile4"><img src="assets/images/user-widget-4.jpg" alt="profile 4" class="img-responsive"></div></div></div></div><div class="modal-footer"><button type="button" class="btn btn-default btn-embossed" data-dismiss="modal">Cancel</button><button type="button" id="save-profile" class="btn btn-primary btn-embossed">Save</button></div></div></div></div><div class="export-page"><a href="#" id="export" class="btn btn-dark btn-square btn-embossed">Export Page Template</a></div>';
    $('.page-content').addClass('page-builder');
    var placeholderContainer = '<div class="placeholder-container"><div class="placeholder"><div class="placeholder-content col-md-12"> </div></div><div class="placeholder-handle"><div class="handle-move" data-rel="tooltip" data-placement="right" data-original-title="Move"><i class="fa fa-bars"></i></div><div class="handle-remove" data-rel="tooltip" data-placement="right" data-original-title="Remove"><i class="fa fa-times"></i></div></div></div>';
    if ($(".page-content .header").length) {
        var headerPlaceholder = $(".page-content .header").wrap('<div class="row"><div class="placeholder-container"><div class="placeholder"><div class="placeholder-content col-md-12"></div></div><div class="placeholder-handle"><div class="handle-move" data-rel="tooltip" data-placement="right" data-original-title="Move"><i class="fa fa-bars"></i></div><div class="handle-remove" data-rel="tooltip" data-placement="right" data-original-title="Remove"><i class="fa fa-times"></i></div></div></div></div>');
    }
    $('.page-content').append(contentPageBuider);
    $('.page-content .builder-wrapper').prepend($(".page-content .header").parent().parent().parent().parent());
    $('.page-content .builder-wrapper').prepend($(".page-content > .row"));
    $('.page-content').append('<div class="export-page"><a href="#" id="export" class="btn btn-dark btn-square btn-embossed">Export Page Template</a></div>');
    if ($(".page-content .footer").length) {
        $('.page-content .builder-wrapper').append($(".page-content .footer"));
    }
    handlePageBuilder();
    handleiCheck();
    $('.custom-page').remove();
}

/* Export Admin in HTML */
$('.page-content').on('click', '#export', function(e) {
    e.preventDefault();
    $('#modal-export-page').modal('show');
});

$('.page-content').on('shown.bs.modal', '#modal-export-page', function (e) {
    var fileName = $('.html-file-name').val();
    if(fileName == '') fileName = 'my-custom-admin';

    $('body').removeClass('modal-open');
    var bodyClass = $('body').attr('class');
    if (fileName == '') fileName = 'my-custom-admin';
    var adminHeader = '<!DOCTYPE html>\n' + '<html lang="en">\n' + '<head>\n' + '  <meta charset="utf-8">\n' + '  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">\n' + '  <meta name="description" content="admin-themes-lab">\n' + '  <meta name="author" content="themes-lab">\n' + '  <link rel="shortcut icon" href="assets/images/favicon.png" type="image/png">\n' + '  <title>Make</title>\n' + '  <link href="http://fonts.googleapis.com/css?family=Nothing+You+Could+Do" rel="stylesheet" type="text/css">\n' + '  <link href="assets/css/style.css" rel="stylesheet"> <!-- MANDATORY -->\n' + '  <link href="assets/css/theme.css" rel="stylesheet"> <!-- MANDATORY -->\n' + '  <link href="assets/css/ui.css" rel="stylesheet"> <!-- MANDATORY -->\n' + '<link href="assets/plugins/datatables/dataTables.min.css" rel="stylesheet">\n' + '  <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->\n' + '  <!--[if lt IE 9]>\n' + '  <script src="assets/plugins/modernizr/modernizr-2.6.2-respond-1.1.0.min.js"></script>\n' + '  <![endif]-->\n' + '</head>\n' + '<!-- LAYOUT: Apply "submenu-hover" class to body element to have sidebar submenu show on mouse hover -->\n' + '<!-- LAYOUT: Apply "sidebar-collapsed" class to body element to have collapsed sidebar -->\n' + '<!-- LAYOUT: Apply "sidebar-top" class to body element to have sidebar on top of the page -->\n' + '<!-- LAYOUT: Apply "sidebar-hover" class to body element to show sidebar only when your mouse is on left / right corner -->\n' + '<!-- LAYOUT: Apply "submenu-hover" class to body element to show sidebar submenu on mouse hover -->\n' + '<!-- LAYOUT: Apply "fixed-sidebar" class to body to have fixed sidebar -->\n' + '<!-- LAYOUT: Apply "fixed-topbar" class to body to have fixed topbar -->\n' + '<!-- LAYOUT: Apply "rtl" class to body to put the sidebar on the right side -->\n' + '<!-- LAYOUT: Apply "boxed" class to body to have your page with 1200px max width -->\n' + '<!-- THEME STYLE: Apply "theme-sdtl" for Sidebar Dark / Topbar Light -->\n' + '<!-- THEME STYLE: Apply  "theme sdtd" for Sidebar Dark / Topbar Dark -->\n' + '<!-- THEME STYLE: Apply "theme sltd" for Sidebar Light / Topbar Dark -->\n' + '<!-- THEME STYLE: Apply "theme sltl" for Sidebar Light / Topbar Light -->\n' + '<!-- THEME COLOR: Apply "color-default" for dark color: #2B2E33 -->\n' + '<!-- THEME COLOR: Apply "color-primary" for primary color: #319DB5 -->\n' + '<!-- THEME COLOR: Apply "color-red" for red color: #C9625F -->\n' + '<!-- THEME COLOR: Apply "color-default" for green color: #18A689 -->\n' + '<!-- THEME COLOR: Apply "color-default" for orange color: #B66D39 -->\n' + '<!-- THEME COLOR: Apply "color-default" for purple color: #6E62B5 -->\n' + '<!-- THEME COLOR: Apply "color-default" for blue color: #4A89DC -->\n' + '<!-- BEGIN BODY -->\n' + '<body class="' + bodyClass + '">\n' + '  <section>';
    var copyright   = '      <div class="footer">\n' + '        <div class="copyright">\n' + '          <p class="pull-left sm-pull-reset"> <span>Copyright <span class="copyright">©</span> 2014 </span> <span>THEMES LAB</span>. <span>All rights reserved. </span> </p>\n' + '          <p class="pull-right sm-pull-reset"> <span><a href="#" class="m-r-10">Support</a> | <a href="#" class="m-l-10 m-r-10">Terms of use</a> | <a href="#" class="m-l-10">Privacy Policy</a></span> </p>\n' + '        </div>\n' + '      </div>\n';
    var adminFooter = '</section>\n' + '<!-- Preloader -->\n' + '  <div class="loader-overlay">\n' + '    <div class="spinner">\n' + '      <div class="bounce1"></div>\n' + '      <div class="bounce2"></div>\n' + '      <div class="bounce3"></div>\n' + '    </div>\n' + '  </div>\n' + '<a href="#" class="scrollup"><i class="fa fa-angle-up"></i></a> \n' + '<script src="assets/plugins/jquery/jquery-1.11.1.min.js"></script>\n' + '<script src="assets/plugins/jquery/jquery-migrate-1.2.1.min.js"></script>\n' + '<script src="assets/plugins/gsap/main-gsap.min.js"></script> <!-- HTML Animations -->\n' + '<script src="assets/plugins/jquery-ui/jquery-ui-1.11.2.min.js"></script>\n' + '<script src="assets/plugins/jquery-block-ui/jquery.blockUI.min.js"></script> <!-- simulate synchronous behavior when using AJAX -->\n' + '<script src="assets/plugins/bootbox/bootbox.min.js"></script> \n' + '<script src="assets/plugins/mcustom-scrollbar/jquery.mCustomScrollbar.concat.min.js"></script> <!-- Custom Scrollbar sidebar -->\n' + '<script src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>\n' + '<script src="assets/plugins/bootstrap-dropdown/bootstrap-hover-dropdown.min.js"></script> <!-- Show Dropdown on Mouseover -->\n' + '<script src="assets/plugins/bootstrap-progressbar/bootstrap-progressbar.min.js"></script> <!-- Animated Progress Bar -->\n' + '<script src="assets/plugins/switchery/switchery.min.js"></script> <!-- IOS Switch -->\n' + '<script src="assets/plugins/charts-sparkline/sparkline.min.js"></script> <!-- Charts Sparkline -->\n' + '<script src="assets/plugins/retina/retina.min.js"></script> \n' + '<script src="assets/plugins/jquery-cookies/jquery.cookies.min.js"></script> <!-- Jquery Cookies, for theme -->\n' + '<script src="assets/plugins/bootstrap/js/jasny-bootstrap.min.js"></script> <!-- File Upload and Input Masks -->\n' + '<script src="assets/plugins/select2/select2.min.js"></script> <!-- Select Inputs -->\n' + '<script src="assets/plugins/bootstrap-tags-input/bootstrap-tagsinput.min.js"></script> <!-- Select Inputs -->\n' + '<script src="assets/plugins/bootstrap-loading/lada.min.js"></script> <!-- Buttons Loading State -->\n' + '<script src="assets/plugins/timepicker/jquery-ui-timepicker-addon.min.js"></script> <!-- Time Picker -->\n' + '<script src="assets/plugins/multidatepicker/multidatespicker.min.js"></script> <!-- Multi dates Picker -->\n' + '<script src="assets/plugins/colorpicker/spectrum.min.js"></script> <!-- Color Picker -->\n' + '<script src="assets/plugins/touchspin/jquery.bootstrap-touchspin.min.js"></script> <!-- A mobile and touch friendly input spinner component for Bootstrap -->\n' + '<script src="assets/plugins/autosize/autosize.min.js"></script> <!-- Textarea autoresize -->\n' + '<script src="assets/plugins/icheck/icheck.min.js"></script> <!-- Icheck -->\n' + '<script src="assets/plugins/bootstrap-editable/js/bootstrap-editable.min.js"></script> <!-- Inline Edition X-editable -->\n' + '<script src="assets/plugins/bootstrap-context-menu/bootstrap-contextmenu.min.js"></script> <!-- Context Menu -->\n' + '<script src="assets/plugins/prettify/prettify.min.js"></script> <!-- Show html code -->\n' + '<script src="assets/plugins/slick/slick.min.js"></script> <!-- Slider -->\n' + '<script src="assets/plugins/countup/countUp.min.js"></script> <!-- Animated Counter Number -->\n' + '<script src="assets/plugins/noty/jquery.noty.packaged.min.js"></script>  <!-- Notifications -->\n' + '<script src="assets/plugins/backstretch/backstretch.min.js"></script> <!-- Background Image -->\n' + '<script src="assets/plugins/charts-chartjs/Chart.min.js"></script>  <!-- ChartJS Chart -->\n' + '<script src="assets/plugins/datatables/jquery.dataTables.min.js"></script> <!-- Tables Filtering, Sorting & Editing -->\n' + '<script src="assets/plugins/summernote/summernote.js"></script>\n' + '<script src="assets/plugins/bootstrap-slider/bootstrap-slider.js"></script>\n' + '<script src="assets/plugins/skycons/skycons.js"></script>\n' + '<script src="assets/js/sidebar_hover.js"></script>\n' + '<script src="assets/js/application.js"></script> <!-- Main Application Script -->\n' + '<script src="assets/js/plugins.js"></script> <!-- Main Plugin Initialization Script -->\n' + '<script src="assets/js/widgets/notes.js"></script>\n' + '<script src="assets/js/quickview.js"></script>\n' + '<script src="assets/js/pages/search.js"></script>\n' + '</body>\n' + '</html>';
    
    if ($('body').hasClass('fixed-sidebar')) {
        var sidebarIsFixed = true;
        handleSidebarFluid();
        $('body').addClass('fixed-sidebar');
    }
    var allContent = $('body > section').clone();

    var quickviewSidebar =  '</section>\n' + 
                            '<div id="quickview-sidebar">\n' + 
                            '  <div class="quickview-header">\n' + 
                            '    <ul class="nav nav-tabs">\n' + 
                            '      <li class="active"><a href="#chat" data-toggle="tab">Chat</a></li>\n' + 
                            '      <li><a href="#notes" data-toggle="tab">Notes</a></li>\n' + 
                            '      <li><a href="#settings" data-toggle="tab" class="settings-tab">Settings</a></li>\n' + 
                            '    </ul>\n' + 
                            '  </div>\n' + 
                            '  <div class="quickview">\n' + 
                            '    <div class="tab-content">\n' + 
                            '      <div class="tab-pane fade active in" id="chat">\n' + 
                            '        <div class="chat-body current">\n' + 
                            '          <div class="chat-search">\n' + 
                            '            <form class="form-inverse" action="#" role="search">\n' + 
                            '              <div class="append-icon">\n' + 
                            '                <input type="text" class="form-control" placeholder="Search contact...">\n' + 
                            '                <i class="icon-magnifier"></i>\n' + 
                            '              </div>\n' + 
                            '            </form>\n' + 
                            '          </div>\n' + 
                            '          <div class="chat-groups">\n' + 
                            '            <div class="title">GROUP CHATS</div>\n' + 
                            '            <ul>\n' + 
                            '              <li><i class="turquoise"></i> Favorites</li>\n' + 
                            '              <li><i class="turquoise"></i> Office Work</li>\n' + 
                            '              <li><i class="turquoise"></i> Friends</li>\n' + 
                            '            </ul>\n' + 
                            '          </div>\n' + 
                            '          <div class="chat-list">\n' + 
                            '            <div class="title">FAVORITES</div>\n' + 
                            '            <ul>\n' + 
                            '              <li class="clearfix">\n' + 
                            '                <div class="user-img">\n' + 
                            '                  <img src="assets/images/avatars/avatar13.png" alt="avatar" />\n' +
                            '                </div>\n' + 
                            '                <div class="user-details">\n' + 
                            '                  <div class="user-name">Bobby Brown</div>\n' + 
                            '                  <div class="user-txt">On the road again...</div>\n' + 
                            '                </div>\n' + 
                            '                <div class="user-status">\n' + 
                            '                  <i class="online"></i>\n' + 
                            '                </div>\n' + 
                            '              </li>\n' + 
                            '              <li class="clearfix">\n' + 
                            '                <div class="user-img">\n' + 
                            '                  <img src="assets/images/avatars/avatar5.png" alt="avatar" />\n' + 
                            '                  <div class="pull-right badge badge-danger">3</div>\n' + 
                            '                </div>\n' + 
                            '                <div class="user-details">\n' + 
                            '                  <div class="user-name">Alexa Johnson</div>\n' + 
                            '                  <div class="user-txt">Still at the beach</div>\n' + 
                            '                </div>\n' + 
                            '                <div class="user-status">\n' + 
                            '                  <i class="away"></i>\n' + 
                            '                </div>\n' + 
                            '              </li>\n' + 
                            '              <li class="clearfix">\n' + 
                            '                <div class="user-img">\n' + 
                            '                  <img src="assets/images/avatars/avatar10.png" alt="avatar" />\n' + 
                            '                </div>\n' + 
                            '                <div class="user-details">\n' + 
                            '                  <div class="user-name">Bobby Brown</div>\n' + 
                            '                  <div class="user-txt">On stage...</div>\n' + 
                            '                </div>\n' + 
                            '                <div class="user-status">\n' + 
                            '                  <i class="busy"></i>\n' + 
                            '                </div>\n' + 
                            '              </li>\n' + 
                            '            </ul>\n' + 
                            '          </div>\n' + 
                            '          <div class="chat-list">\n' + 
                            '            <div class="title">FRIENDS</div>\n' + 
                            '            <ul>\n' + 
                            '              <li class="clearfix">\n' + 
                            '                <div class="user-img">\n' + 
                            '                  <img src="assets/images/avatars/avatar7.png" alt="avatar" />\n' + 
                            '                  <div class="pull-right badge badge-danger">3</div>\n' + 
                            '                </div>\n' + 
                            '                <div class="user-details">\n' + 
                            '                  <div class="user-name">James Miller</div>\n' + 
                            '                  <div class="user-txt">At work...</div>\n' + 
                            '                </div>\n' + 
                            '                <div class="user-status">\n' + 
                            '                  <i class="online"></i>\n' + 
                            '                </div>\n' + 
                            '              </li>\n' + 
                            '              <li class="clearfix">\n' + 
                            '                <div class="user-img">\n' + 
                            '                  <img src="assets/images/avatars/avatar11.png" alt="avatar" />\n' + 
                            '                </div>\n' + 
                            '                <div class="user-details">\n' + 
                            '                  <div class="user-name">Fred Smith</div>\n' + 
                            '                  <div class="user-txt">Waiting for tonight</div>\n' + 
                            '                </div>\n' + 
                            '                <div class="user-status">\n' + 
                            '                  <i class="offline"></i>\n' + 
                            '                </div>\n' + 
                            '              </li>\n' + 
                            '              <li class="clearfix">\n' + 
                            '                <div class="user-img">\n' + 
                            '                  <img src="assets/images/avatars/avatar8.png" alt="avatar" />\n' + 
                            '                </div>\n' + 
                            '                <div class="user-details">\n' + 
                            '                  <div class="user-name">Ben Addams</div>\n' + 
                            '                  <div class="user-txt">On my way to NYC</div>\n' + 
                            '                </div>\n' + 
                            '                <div class="user-status">\n' + 
                            '                  <i class="offline"></i>\n' + 
                            '                </div>\n' + 
                            '              </li>\n' + 
                            '            </ul>\n' + 
                            '          </div>\n' + 
                            '        </div>\n' + 
                            '        <div class="chat-conversation">\n' + 
                            '          <div class="conversation-header">\n' + 
                            '            <div class="user clearfix">\n' + 
                            '              <div class="chat-back">\n' + 
                            '                <i class="icon-action-undo"></i>\n' + 
                            '              </div>\n' + 
                            '              <div class="user-details">\n' + 
                            '                <div class="user-name">James Miller</div>\n' + 
                            '                <div class="user-txt">On the road again...</div>\n' + 
                            '              </div>\n' + 
                            '            </div>\n' + 
                            '          </div>\n' + 
                            '          <div class="conversation-body">\n' + 
                            '            <ul>\n' + 
                            '              <li class="img">\n' + 
                            '                <div class="chat-detail">\n' + 
                            '                  <span class="chat-date">today, 10:38pm</span>\n' + 
                            '                  <div class="conversation-img">\n' + 
                            '                    <img src="assets/images/avatars/avatar4.png" alt="avatar 4"/>\n' + 
                            '                  </div>\n' + 
                            '                  <div class="chat-bubble">\n' + 
                            '                    <span>Hi you!</span>\n' + 
                            '                  </div>\n' + 
                            '                </div>\n' + 
                            '              </li>\n' + 
                            '              <li class="img">\n' + 
                            '                <div class="chat-detail">\n' + 
                            '                  <span class="chat-date">today, 10:45pm</span>\n' + 
                            '                  <div class="conversation-img">\n' + 
                            '                    <img src="assets/images/avatars/avatar4.png" alt="avatar 4"/>\n' + 
                            '                  </div>\n' + 
                            '                  <div class="chat-bubble">\n' + 
                            '                    <span>Are you there?</span>\n' + 
                            '                  </div>\n' + 
                            '                </div>\n' + 
                            '              </li>\n' + 
                            '              <li class="img">\n' + 
                            '                <div class="chat-detail">\n' + 
                            '                  <span class="chat-date">today, 10:51pm</span>\n' + 
                            '                  <div class="conversation-img">\n' + 
                            '                    <img src="assets/images/avatars/avatar4.png" alt="avatar 4"/>\n' + 
                            '                  </div>\n' + 
                            '                  <div class="chat-bubble">\n' + 
                            '                    <span>Send me a message when you come back.</span>\n' + 
                            '                  </div>\n' + 
                            '                </div>\n' + 
                            '              </li>\n' + 
                            '            </ul>\n' + 
                            '          </div>\n' + 
                            '          <div class="conversation-message">\n' + 
                            '            <input type="text" placeholder="Your message..." class="form-control form-white send-message" />\n' + 
                            '            <div class="item-footer clearfix">\n' + 
                            '              <div class="footer-actions">\n' + 
                            '                <i class="icon-rounded-marker"></i>\n' + 
                            '                <i class="icon-rounded-camera"></i>\n' + 
                            '                <i class="icon-rounded-paperclip-oblique"></i>\n' + 
                            '                <i class="icon-rounded-alarm-clock"></i>\n' + 
                            '              </div>\n' + 
                            '            </div>\n' + 
                            '          </div>\n' + 
                            '        </div>\n' + 
                            '      </div>\n' + 
                            '      <div class="tab-pane fade" id="notes">\n' + 
                            '        <div class="list-notes current withScroll">\n' + 
                            '          <div class="notes ">\n' + 
                            '            <div class="row">\n' + 
                            '              <div class="col-md-12">\n' + 
                            '                <div id="add-note">\n' + 
                            '                  <i class="fa fa-plus"></i>ADD A NEW NOTE\n' + 
                            '                </div>\n' + 
                            '              </div>\n' + 
                            '            </div>\n' + 
                            '            <div id="notes-list">\n' + 
                            '              <div class="note-item media current fade in">\n' + 
                            '                <button class="close">×</button>\n' + 
                            '                <div>\n' + 
                            '                  <div>\n' + 
                            '                    <p class="note-name">Reset my account password</p>\n' + 
                            '                  </div>\n' + 
                            '                  <p class="note-desc hidden">Break security reasons.</p>\n' + 
                            '                  <p><small>Tuesday 6 May, 3:52 pm</small></p>\n' + 
                            '                </div>\n' + 
                            '              </div>\n' + 
                            '              <div class="note-item media fade in">\n' + 
                            '                <button class="close">×</button>\n' + 
                            '                <div>\n' + 
                            '                  <div>\n' + 
                            '                    <p class="note-name">Call John</p>\n' + 
                            '                  </div>\n' + 
                            '                  <p class="note-desc hidden">He have my laptop!</p>\n' + 
                            '                  <p><small>Thursday 8 May, 2:28 pm</small></p>\n' + 
                            '                </div>\n' + 
                            '              </div>\n' + 
                            '              <div class="note-item media fade in">\n' + 
                            '                <button class="close">×</button>\n' + 
                            '                <div>\n' + 
                            '                  <div>\n' + 
                            '                    <p class="note-name">Buy a car</p>\n' + 
                            '                  </div>\n' + 
                            '                  <p class="note-desc hidden">I\'m done with the bus</p>\n' + 
                            '                  <p><small>Monday 12 May, 3:43 am</small></p>\n' + 
                            '                </div>\n' + 
                            '              </div>\n' + 
                            '              <div class="note-item media fade in">\n' + 
                            '                <button class="close">×</button>\n' + 
                            '                <div>\n' + 
                            '                  <div>\n' + 
                            '                    <p class="note-name">Don\'t forget my notes</p>\n' + 
                            '                  </div>\n' + 
                            '                  <p class="note-desc hidden">I have to read them...</p>\n' + 
                            '                  <p><small>Wednesday 5 May, 6:15 pm</small></p>\n' + 
                            '                </div>\n' + 
                            '              </div>\n' + 
                            '              <div class="note-item media current fade in">\n' + 
                            '                <button class="close">×</button>\n' + 
                            '                <div>\n' + 
                            '                  <div>\n' + 
                            '                    <p class="note-name">Reset my account password</p>\n' + 
                            '                  </div>\n' + 
                            '                  <p class="note-desc hidden">Break security reasons.</p>\n' + 
                            '                  <p><small>Tuesday 6 May, 3:52 pm</small></p>\n' + 
                            '                </div>\n' + 
                            '              </div>\n' + 
                            '              <div class="note-item media fade in">\n' + 
                            '                <button class="close">×</button>\n' + 
                            '                <div>\n' + 
                            '                  <div>\n' + 
                            '                    <p class="note-name">Call John</p>\n' + 
                            '                  </div>\n' + 
                            '                  <p class="note-desc hidden">He have my laptop!</p>\n' + 
                            '                  <p><small>Thursday 8 May, 2:28 pm</small></p>\n' + 
                            '                </div>\n' + 
                            '              </div>\n' + 
                            '              <div class="note-item media fade in">\n' + 
                            '                <button class="close">×</button>\n' + 
                            '                <div>\n' + 
                            '                  <div>\n' + 
                            '                    <p class="note-name">Buy a car</p>\n' + 
                            '                  </div>\n' + 
                            '                  <p class="note-desc hidden">I\'m done with the bus</p>\n' + 
                            '                  <p><small>Monday 12 May, 3:43 am</small></p>\n' + 
                            '                </div>\n' + 
                            '              </div>\n' + 
                            '              <div class="note-item media fade in">\n' + 
                            '                <button class="close">×</button>\n' + 
                            '                <div>\n' + 
                            '                  <div>\n' + 
                            '                    <p class="note-name">Don\'t forget my notes</p>\n' + 
                            '                  </div>\n' + 
                            '                  <p class="note-desc hidden">I have to read them...</p>\n' + 
                            '                  <p><small>Wednesday 5 May, 6:15 pm</small></p>\n' + 
                            '                </div>\n' + 
                            '              </div>\n' + 
                            '            </div>\n' + 
                            '          </div>\n' + 
                            '        </div>\n' + 
                            '        <div class="detail-note note-hidden-sm">\n' + 
                            '          <div class="note-header clearfix">\n' + 
                            '            <div class="note-back">\n' + 
                            '              <i class="icon-action-undo"></i>\n' + 
                            '            </div>\n' + 
                            '            <div class="note-edit">Edit Note</div>\n' + 
                            '            <div class="note-subtitle">title on first line</div>\n' + 
                            '          </div>\n' + 
                            '          <div id="note-detail">\n' + 
                            '            <div class="note-write">\n' + 
                            '              <textarea class="form-control" placeholder="Type your note here"></textarea>\n' + 
                            '            </div>\n' + 
                            '          </div>\n' + 
                            '        </div>\n' + 
                            '      </div>\n' + 
                            '      <div class="tab-pane fade" id="settings">\n' + 
                            '        <div class="settings">\n' + 
                            '          <div class="title">ACCOUNT SETTINGS</div>\n' + 
                            '          <div class="setting">\n' + 
                            '            <span> Show Personal Statut</span>\n' + 
                            '            <label class="switch pull-right">\n' + 
                            '            <input type="checkbox" class="switch-input" checked>\n' + 
                            '            <span class="switch-label" data-on="On" data-off="Off"></span>\n' + 
                            '            <span class="switch-handle"></span>\n' + 
                            '            </label>\n' + 
                            '            <p class="setting-info">Lorem ipsum dolor sit amet consectetuer.</p>\n' + 
                            '          </div>\n' + 
                            '          <div class="setting">\n' + 
                            '            <span> Show my Picture</span>\n' + 
                            '            <label class="switch pull-right">\n' + 
                            '            <input type="checkbox" class="switch-input" checked>\n' + 
                            '            <span class="switch-label" data-on="On" data-off="Off"></span>\n' + 
                            '            <span class="switch-handle"></span>\n' + 
                            '            </label>\n' + 
                            '            <p class="setting-info">Lorem ipsum dolor sit amet consectetuer.</p>\n' + 
                            '          </div>\n' + 
                            '          <div class="setting">\n' + 
                            '            <span> Show my Location</span>\n' + 
                            '            <label class="switch pull-right">\n' + 
                            '            <input type="checkbox" class="switch-input">\n' + 
                            '            <span class="switch-label" data-on="On" data-off="Off"></span>\n' + 
                            '            <span class="switch-handle"></span>\n' + 
                            '            </label>\n' + 
                            '            <p class="setting-info">Lorem ipsum dolor sit amet consectetuer.</p>\n' + 
                            '          </div>\n' + 
                            '          <div class="title">CHAT</div>\n' + 
                            '          <div class="setting">\n' + 
                            '            <span> Show User Image</span>\n' + 
                            '            <label class="switch pull-right">\n' + 
                            '            <input type="checkbox" class="switch-input" checked>\n' + 
                            '            <span class="switch-label" data-on="On" data-off="Off"></span>\n' + 
                            '            <span class="switch-handle"></span>\n' + 
                            '            </label>\n' + 
                            '          </div>\n' + 
                            '          <div class="setting">\n' + 
                            '            <span> Show Fullname</span>\n' + 
                            '            <label class="switch pull-right">\n' + 
                            '            <input type="checkbox" class="switch-input" checked>\n' + 
                            '            <span class="switch-label" data-on="On" data-off="Off"></span>\n' + 
                            '            <span class="switch-handle"></span>\n' + 
                            '            </label>\n' + 
                            '          </div>\n' + 
                            '          <div class="setting">\n' + 
                            '            <span> Show Location</span>\n' + 
                            '            <label class="switch pull-right">\n' + 
                            '            <input type="checkbox" class="switch-input">\n' + 
                            '            <span class="switch-label" data-on="On" data-off="Off"></span>\n' + 
                            '            <span class="switch-handle"></span>\n' + 
                            '            </label>\n' + 
                            '          </div>\n' + 
                            '          <div class="setting">\n' + 
                            '            <span> Show Unread Count</span>\n' + 
                            '            <label class="switch pull-right">\n' + 
                            '            <input type="checkbox" class="switch-input" checked>\n' + 
                            '            <span class="switch-label" data-on="On" data-off="Off"></span>\n' + 
                            '            <span class="switch-handle"></span>\n' + 
                            '            </label>\n' + 
                            '          </div>\n' + 
                            '          <div class="title">STATISTICS</div>\n' + 
                            '          <div class="settings-chart">\n' + 
                            '            <div class="clearfix">\n' + 
                            '              <div class="chart-title">Stat 1</div>\n' + 
                            '              <div class="chart-number">82%</div>\n' + 
                            '            </div>\n' + 
                            '            <div class="progress">\n' + 
                            '              <div class="progress-bar progress-bar-primary setting1" data-transitiongoal="82"></div>\n' + 
                            '            </div>\n' + 
                            '          </div>\n' + 
                            '          <div class="settings-chart">\n' + 
                            '            <div class="clearfix">\n' + 
                            '              <div class="chart-title">Stat 2</div>\n' + 
                            '              <div class="chart-number">43%</div>\n' + 
                            '            </div>\n' + 
                            '            <div class="progress">\n' + 
                            '              <div class="progress-bar progress-bar-primary setting2" data-transitiongoal="43"></div>\n' + 
                            '            </div>\n' + 
                            '          </div>\n' + 
                            '          <div class="m-t-30" style="width:100%">\n' + 
                            '            <canvas id="setting-chart" height="300"></canvas>\n' + 
                            '          </div>\n' + 
                            '        </div>\n' + 
                            '      </div>\n' + 
                            '    </div>\n' + 
                            '  </div>\n' + 
                            '</div>';

    var morphSearch =   '<div id="morphsearch" class="morphsearch">\n' + 
                        '  <form class="morphsearch-form">\n' + 
                        '    <input class="morphsearch-input" type="search" placeholder="Search..."/>\n' + 
                        '    <button class="morphsearch-submit" type="submit">Search</button>\n' + 
                        '  </form>\n' + 
                        '  <div class="morphsearch-content withScroll">\n' + 
                        '    <div class="dummy-column user-column">\n' + 
                        '      <h2>Users</h2>\n' + 
                        '      <a class="dummy-media-object" href="#">\n' + 
                        '        <img src="assets/images/avatars/avatar1_big.png" alt="Avatar 1"/>\n' + 
                        '        <h3>John Smith</h3>\n' + 
                        '      </a>\n' + 
                        '      <a class="dummy-media-object" href="#">\n' + 
                        '        <img src="assets/images/avatars/avatar2_big.png" alt="Avatar 2"/>\n' + 
                        '        <h3>Bod Dylan</h3>\n' + 
                        '      </a>\n' + 
                        '      <a class="dummy-media-object" href="#">\n' + 
                        '        <img src="assets/images/avatars/avatar3_big.png" alt="Avatar 3"/>\n' + 
                        '        <h3>Jenny Finlan</h3>\n' + 
                        '      </a>\n' + 
                        '      <a class="dummy-media-object" href="#">\n' + 
                        '        <img src="assets/images/avatars/avatar4_big.png" alt="Avatar 4"/>\n' + 
                        '        <h3>Harold Fox</h3>\n' + 
                        '      </a>\n' + 
                        '      <a class="dummy-media-object" href="#">\n' + 
                        '        <img src="assets/images/avatars/avatar5_big.png" alt="Avatar 5"/>\n' + 
                        '        <h3>Martin Hendrix</h3>\n' + 
                        '      </a>\n' + 
                        '      <a class="dummy-media-object" href="#">\n' + 
                        '        <img src="assets/images/avatars/avatar6_big.png" alt="Avatar 6"/>\n' + 
                        '        <h3>Paul Ferguson</h3>\n' + 
                        '      </a>\n' + 
                        '    </div>\n' + 
                        '    <div class="dummy-column">\n' + 
                        '      <h2>Articles</h2>\n' + 
                        '      <a class="dummy-media-object" href="#">\n' + 
                        '        <img src="assets/images/gallery/1.jpg" alt="1"/>\n' + 
                        '        <h3>How to change webdesign?</h3>\n' + 
                        '      </a>\n' + 
                        '      <a class="dummy-media-object" href="#">\n' + 
                        '        <img src="assets/images/gallery/2.jpg" alt="2"/>\n' + 
                        '        <h3>News From the sky</h3>\n' + 
                        '      </a>\n' + 
                        '      <a class="dummy-media-object" href="#">\n' + 
                        '        <img src="assets/images/gallery/3.jpg" alt="3"/>\n' + 
                        '        <h3>Where is the cat?</h3>\n' + 
                        '      </a>\n' + 
                        '      <a class="dummy-media-object" href="#">\n' + 
                        '        <img src="assets/images/gallery/4.jpg" alt="4"/>\n' + 
                        '        <h3>Just another funny story</h3>\n' + 
                        '      </a>\n' + 
                        '      <a class="dummy-media-object" href="#">\n' + 
                        '        <img src="assets/images/gallery/5.jpg" alt="5"/>\n' + 
                        '        <h3>How many water we drink every day?</h3>\n' + 
                        '      </a>\n' + 
                        '      <a class="dummy-media-object" href="#">\n' + 
                        '        <img src="assets/images/gallery/6.jpg" alt="6"/>\n' + 
                        '        <h3>Drag and drop tutorials</h3>\n' + 
                        '      </a>\n' + 
                        '    </div>\n' + 
                        '    <div class="dummy-column">\n' + 
                        '      <h2>Recent</h2>\n' + 
                        '      <a class="dummy-media-object" href="#">\n' + 
                        '        <img src="assets/images/gallery/7.jpg" alt="7"/>\n' + 
                        '        <h3>Design Inspiration</h3>\n' + 
                        '      </a>\n' + 
                        '      <a class="dummy-media-object" href="#">\n' + 
                        '        <img src="assets/images/gallery/8.jpg" alt="8"/>\n' + 
                        '        <h3>Animals drawing</h3>\n' + 
                        '      </a>\n' + 
                        '      <a class="dummy-media-object" href="#">\n' + 
                        '        <img src="assets/images/gallery/9.jpg" alt="9"/>\n' + 
                        '        <h3>Cup of tea please</h3>\n' + 
                        '      </a>\n' + 
                        '      <a class="dummy-media-object" href="#">\n' + 
                        '        <img src="assets/images/gallery/10.jpg" alt="10"/>\n' + 
                        '        <h3>New application arrive</h3>\n' + 
                        '      </a>\n' + 
                        '      <a class="dummy-media-object" href="#">\n' + 
                        '        <img src="assets/images/gallery/11.jpg" alt="11"/>\n' + 
                        '        <h3>Notification prettify</h3>\n' + 
                        '      </a>\n' + 
                        '      <a class="dummy-media-object" href="#">\n' + 
                        '        <img src="assets/images/gallery/12.jpg" alt="12"/>\n' + 
                        '        <h3>My article is the last recent</h3>\n' + 
                        '      </a>\n' + 
                        '    </div>\n' + 
                        '  </div>\n' + 
                        '  <!-- /morphsearch-content -->\n' + 
                        '  <span class="morphsearch-close"></span>\n' + 
                        '</div>';                       

    allContent.find('#ip-container').remove();

    /* Fix URL and SRC attribute for export */
    allContent.find('.sidebar a').each(function(){
        var newurl = $(this).attr('href').replace('','');
        newurl     = $(this).attr('href').replace('../admin-builder/','../builder/admin-builder/');
        newurl     = $(this).attr('href').replace('../email-builder/','../builder/email-builder/');
        $(this).attr('href', newurl);
    });

    allContent.find('.topbar img').each(function(){
        var newsrc = $(this).attr('src').replace('../../assets/','../assets/');
        $(this).attr('src', newsrc);
    });

    allContent.find('#page-builder').remove();
    allContent.find('.placeholder-handle').remove();
    allContent.find('.form-sortable-btn').remove();
    allContent.find('.export-page').remove();
    var pageHeader = allContent.find('.builder-wrapper .header');
    var pageRow = allContent.find('.builder-wrapper .row');
    allContent.find('.page-content').removeClass('page-builder');
    allContent.find('.page-content').removeAttr('style');
    allContent.find('.main-content').removeAttr('style');
    allContent.find('.sidebar').removeAttr('style');


    allContent.find('.sidebar .logopanel a').attr('href', 'index.html');
    allContent.find('.ui-droppable').removeClass('ui-droppable');
    allContent.find('.modal').remove();
    if (pageRow.parent().hasClass('builder-wrapper')) {
        pageRow.unwrap();
    }

    var tableDynamicExport = allContent.find('.table-dynamic');
    if(tableDynamicExport.length){
      tableDynamicExport.prev().remove();
      tableDynamicExport.next().remove();
    }

    var pageFileUpload = allContent.find('.fileinput');
    if (pageFileUpload.length) {
        pageFileUpload.find('.fileinput-new').remove();
        pageFileUpload.find('.btn').remove();
        pageFileUpload.find('.text-center').remove();
        pageFileUpload.find('img').unwrap().unwrap().addClass('img-responsive');
    }

    if (pageRow.children().hasClass('placeholder-container')) {
        pageRow.children().children().unwrap();
        pageRow.children().children().unwrap();
        allContent.find('.placeholder-content').removeClass('placeholder-content');
    }
    allContent.find('.placeholder-container').remove();

    allContent.find('#context-menu').remove();
    allContent.find('.sidebar').removeAttr('style');
    allContent.find('.sidebar-inner').removeClass('mCS_destroyed').removeClass('');
    allContent.find('.logopanel').removeAttr('style');
    allContent.find('.sidebar-top').removeAttr('style');
    allContent.find('.topbar').removeAttr('style');
    allContent.find('.main-content').removeAttr('style');
    allContent.find('.page-content').removeAttr('style');
    allContent.find('.placeholder-content-area').remove();
    customPageContent = allContent.html();

    $('#modal-export-page form input[type="hidden"]').remove();
    newInput = $('<input type="hidden" name="pages[index]" value="">');
    $('#modal-export-page form').prepend( newInput );
    newInput.val(adminHeader + customPageContent + quickviewSidebar + morphSearch + adminFooter);

});


$('.page-content').on('click', '#modal-export-page .export', function(e) {
    e.preventDefault();
    var fileName = $('.html-file-name').val();

    fileName = '';
    // if (sidebarIsFixed == true) handleSidebarFixed();
    $('#modal-export-page').modal('hide');
    var tl = new TimelineLite();
    tl.to($('.step-theme'), 0.4, {
        css: {
            scaleX: 0.8,
            scaleY: 0.8,
            autoAlpha: 0,
            display: "none"
        },
        ease: Circ.easeInOut
    }, "step+=0.2").to($('.step-final'), 0.4, {
        css: {
            scaleX: 1,
            scaleY: 1,
            autoAlpha: 1,
            display: "block"
        },
        ease: Circ.easeInOut,
        onComplete: function() {
            docHeight = $(document).height();
            if (!$('body').hasClass('sidebar-light')) $sidebar.height(docHeight);
        }
    }, "step+=0.8");
});

/* Notifications, demo purpose */
function createBuilderNotif() {
    notifTimeout = 5000;
    notifContent1 = '<div class="alert alert-dark media fade in m-t-10 m-b-0"><div class="media-left"><i class="icon-bulb icon-circle"></i></div><div class="media-body width-100p"><h4 class="alert-title">Text edit</h4><p>Click on text in builder section to edit it.</p></div></div>';
    notifContent2 = '<div class="alert alert-dark media fade in m-t-10 m-b-0"><div class="media-left"><i class="icon-bulb icon-circle"></i></div><div class="media-body width-100p"><h4 class="alert-title">Reorder content</h4><p>You can reorder section by dragging it in top or bottom.</p></div></div>';
    notifContent3 = '<div class="alert alert-dark media fade in m-t-10 m-b-0"><div class="media-left"><i class="icon-bulb icon-circle"></i></div><div class="media-body width-100p"><h4 class="alert-title">Remove Content</h4><p>You can remove section by clicking on cross icon on the left of each section.</p></div></div>';
    setTimeout(function() {
        generateNotif(notifContent1);
        setTimeout(function() {
            generateNotif(notifContent2);
            setTimeout(function() {
                generateNotif(notifContent3);
            }, notifTimeout + 3000);
        }, notifTimeout + 3000);
    }, notifTimeout);
}

function generateNotif(content) {
    var position = 'bottomRight';
    if ($('body').hasClass('rtl')) position = 'bottomLeft';
    var n = noty({
        text: content,
        type: 'success',
        layout: position,
        theme: 'made',
        animation: {
            open: 'animated fadeIn',
            close: 'animated fadeOut'
        },
        timeout: notifTimeout,
        callback: {
            onShow: function() {
                $('#noty_bottomRight_layout_container, .noty_container_type_success').css('width', 350).css('bottom', 10);
            }
        }
    });
}