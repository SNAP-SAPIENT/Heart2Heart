angular
  .module('mainPage')
  .controller('IndexController', function($scope, supersonic) {
    // Controller functionality here

    //DOM Stuff
    $scope.heart = document.getElementById("heart");
    $scope.hiddenBtns = jQuery("#hidden-btns button");

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
        'http://cl.ly/image/0O2h2Q373m14/H2H_Sleep_Mode.png',
        'http://cl.ly/image/1C290H0d0k0g/Red_Heart.gif',
        'http://cl.ly/image/0V0b1e003N16/Green_Heart.gif'
    ]);

    function preload(arrayOfImages) {
        $(arrayOfImages).each(function(){
            $('<img/>')[0].src = this;
        });
    }

    function startBeat(){
        if($scope.mode == "green"){
            $scope.timer = setInterval(function(){navigator.notification.vibrate(2500);},900);  
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
        jQuery("#heart").attr("src","http://cl.ly/image/120z3A0W322c/Default.jpg");
        jQuery("#activity-notif").css("visibility","hidden");
    }

    function normalMode(){
        jQuery("#heart").attr("src","http://cl.ly/image/0V0b1e003N16/Green_Heart.gif");
        jQuery("#offline-notif").css("visibility","hidden");
        jQuery("#activity-notif").css("visibility","hidden");
    }

    function fitnessMode(){
        jQuery("#heart").attr("src","http://cl.ly/image/1C290H0d0k0g/Red_Heart.gif");
        jQuery("#offline-notif").css("visibility","hidden");
        jQuery("#activity-notif").css("visibility","visible");
        jQuery("#hidden-btns div").css("border","black");

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
