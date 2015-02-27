angular
  .module('mainPage')
  .controller('IndexController', function($scope, supersonic) {
    // Controller functionality here

    //DOM Stuff
    $scope.heart = document.getElementById("heart");
    $scope.hiddenBtns = jQuery("#hidden-btns li");

    //Event Listeners
    $scope.heart.addEventListener("touchstart", startBeat, false);
    $scope.heart.addEventListener("touchend", stopBeat, false);
    //$scope.hiddenBtns.addEventListener("touchstart",toggleMode, false);
    jQuery($scope.hiddenBtns).click(function( e ) {
      toggleMode(e.currentTarget);// true
    });

    //variables/defaults
    $scope.timer; //For beat 1
    $scope.mode = "offline";

    document.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);

    function startBeat(){
        if($scope.mode == "green"){
            $scope.timer = setInterval(function(){navigator.notification.vibrate(2500);},600);  
        }else if($scope.mode == "red"){
            $scope.timer = setInterval(function(){navigator.notification.vibrate(2500);},500); 
        }else{
            window.clearInterval($scope.timer);
        }
    }

    function stopBeat(){
    	window.clearInterval($scope.timer);
        $scope.mode ="offline"
    }

    function toggleMode(el){

        if(jQuery(el).attr('id') == "green"){
            $scope.mode = "green";
            jQuery("body").css("background-color","#92d5a9");
            jQuery("#heart").attr("src","http://cl.ly/image/0B39263I0R0Y/Green_Heart.gif");

        }else if(jQuery(el).attr('id') == "red"){
            $scope.mode = "red";
            jQuery("body").css("background-color","#d5797a");
            jQuery("#heart").attr("src","http://cl.ly/image/3h341s1I121O/Red_Heart.gif");
            jQuery("#activity").css("display","block");
        }else{
            $scope.mode = "offline";
            jQuery("body").css("background-color","#d5797a");
            jQuery("#heart").attr("src","http://cl.ly/image/3h341s1I121O/Red_Heart.gif");
            jQuery("#offline").css("display","block");
        }
    }


  });
