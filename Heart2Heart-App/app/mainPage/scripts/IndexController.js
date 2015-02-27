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
        }else if($scope.mode == "red"){
            $scope.timer = setInterval(function(){navigator.notification.vibrate(2500);},500); 
        }else{
            window.clearInterval($scope.timer);
        }
    }

    function stopBeat(){
        window.clearInterval($scope.timer);
        defaultMode();
    }

    function defaultMode(){
        $scope.mode = "green";
        jQuery("body").css("background-color","#FFFFFF");
        jQuery("#heart").attr("src","http://cl.ly/image/1Y0N0B1b0h3A/Default.jpg");
        jQuery("#offline").css("display","block");
    }

    function normalMode(){
        
    }

    function fitnessMode(){

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
