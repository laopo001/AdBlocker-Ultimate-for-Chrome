/*
var PageController = function () {
};

PageController.prototype = {

  close: function(){
    contentPage.sendMessage({type: 'closeBadgePanel'});
  }
}
*/

	 
$(document).ready(function(){
  //var controller = new PageController();
  $('.padiClose').on('click', function(){
    contentPage.sendMessage({type: 'closeBadgePanel'});
    return false;
    //controller.close();
  });
  $('.padiForm').on('submit', function(){
	contentPage.sendMessage({type: 'openTab', 'url':url});
  });
  $('a').on('click', function(){    
    //url = createShareLink($(this).attr('data-network'), $(this).attr('data-rank'));
    //contentPage.sendMessage({type: 'openTab', 'url':url});
    return false;
  });

  $('input[type="checkbox"]').on('change', function(){
    val = $('input[type="checkbox"]').is(':checked') ? 1 : 2;

    contentPage.sendMessage({type: 'showBadgeAgain', 'val':val});
  });
});