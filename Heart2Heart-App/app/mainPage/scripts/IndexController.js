angular
  .module('mainPage')
  .controller('IndexController', function($scope, supersonic) {
    // Controller functionality here

    //DOM Stuff
    $scope.heartTouch = document.getElementById("inv-btn");
    $scope.heart = document.getElementById("heart");
    $scope.hiddenBtns = jQuery("#hidden-btns li");

    //Event Listeners
    $scope.heartTouch.addEventListener("touchstart", startBeat, false);
    $scope.heartTouch.addEventListener("touchend", stopBeat, false);
    //$scope.hiddenBtns.addEventListener("touchstart",toggleMode, false);
    jQuery($scope.hiddenBtns).click(function( e ) {
      toggleMode(e.currentTarget);// true
    });

    //variables
    $scope.timer; //For beat 1

    document.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);

    function startBeat(){
        $scope.timer = setInterval(function(){navigator.notification.vibrate(2500);},800);
    }

    function stopBeat(){
    	window.clearInterval($scope.timer);
    }

    function toggleMode(el){
        if(jQuery(el).attr('id') == "green"){
            jQuery("body").css("background-color","#92d5a9");
            jQuery("#heart").attr("src","http://cl.ly/image/0B39263I0R0Y/Green_Heart.gif");
        }else if(jQuery(el).attr('id') == "red"){
            jQuery("body").css("background-color","#d5797a");
            jQuery("#heart").attr("src","http://cl.ly/image/3h341s1I121O/Red_Heart.gif");
        }
    }


  });
