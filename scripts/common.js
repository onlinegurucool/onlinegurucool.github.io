function showPageLoader(){
  $('.loader').show();
}
function hidePageLoader(){
  $('.loader').hide();
}


// This function will check the element is present in DOM then it will exculte callback
function checkElement(element,cb){
  if(element.length > 0){
    cb();
  }
}

$(window).on('load', function(){
  // hide loader on page load
  hidePageLoader();
})
