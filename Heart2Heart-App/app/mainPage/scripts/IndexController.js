angular
  .module('mainPage')
  .controller('IndexController', function($scope, supersonic) {
    // Controller functionality here

    //DOM Stuff
    $scope.heart = document.getElementById("heart");
    $scope.hiddenBtns = jQuery("#hidden-btns div");

    //Event Listeners
    $scope.heart.addEventListener("touchstart", startBeat, false);
    $scope.heart.addEventListener("touchend", stopBeat, false);
    jQuery($scope.hiddenBtns).click(function( e ) {
      toggleMode(e.currentTarget);// true
    });

    //variables/defaults
    $scope.timer; //For beat 1
    $scope.mode = "green"; //Behind the scenes mode

    document.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);

    //Preload images
    preload([
        'http://cl.ly/image/0P052W1i3i2D/H2H_Activity_Mode.png',
        'http://cl.ly/image/3h341s1I121O/Red_Heart.gif',
        'http://cl.ly/image/0B39263I0R0Y/Green_Heart.gif'
    ]);

    function preload(arrayOfImages) {
        $(arrayOfImages).each(function(){
            $('<img/>')[0].src = this;
        });
    }

    function startBeat(){
        if($scope.mode == "green"){
            $scope.timer = setInterval(function(){navigator.notification.vibrate(2500);},600);  
            normalMode();
        }else if($scope.mode == "red"){
            $scope.timer = setInterval(function(){navigator.notification.vibrate(2500);},500); 
            fitnessMode();
        }else{
            $scope.mode == "green";
        }
    }

    function stopBeat(){
        window.clearInterval($scope.timer);
        defaultMode();
    }

    function defaultMode(){
        jQuery("#heart").attr("src","http://cl.ly/image/1Y0N0B1b0h3A/Default.jpg");
        jQuery("#activity-notif").css("visibility","hidden");
        jQuery("body").css("background-color","#FFFFFF");
        jQuery("#hidden-btns div").css("border","#f8f8f8");
    }

    function normalMode(){
        jQuery("#heart").attr("src","http://cl.ly/image/0B39263I0R0Y/Green_Heart.gif");
        jQuery("body").css("background-color","#92d5a9");
        jQuery("#offline-notif").css("visibility","hidden");
        jQuery("#activity-notif").css("visibility","hidden");
        jQuery("#hidden-btns div").css("border","#92d5a9");
    }

    function fitnessMode(){
        jQuery("#heart").attr("src","http://cl.ly/image/3h341s1I121O/Red_Heart.gif");
        jQuery("body").css("background-color","#d5797a");
        jQuery("#offline-notif").css("visibility","hidden");
        jQuery("#activity-notif").css("visibility","visible");
        jQuery("#hidden-btns div").css("border","#d5797a");

    }

    function toggleMode(el){
        if(jQuery(el).attr('id') == "green"){
            $scope.mode = "green";
            
        }else if(jQuery(el).attr('id') == "red"){
            $scope.mode = "red";
        }else if(jQuery(el).attr('id') == "offline"){
            jQuery("#offline-notif").css("visibility","visible");
        }
    }

  });
