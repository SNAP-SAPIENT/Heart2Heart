angular
  .module('mainPage')
  .controller('IndexController', function($scope, supersonic) {
    // Controller functionality here
    $scope.heartTouch = document.getElementById("inv-btn");
    $scope.heart = document.getElementById("heart");
    $scope.heartImgs = ["http://cl.ly/image/2B3y2e2X1G0o/Embossed_Heart_Low.png","http://cl.ly/image/1V0N1E1A3108/Embossed_Heart_Medium.png","http://cl.ly/image/2E1U153P051r/Embossed_Heart_High.png"];
    $scope.hiddenBtns = $("#hidden-btns li");//document.getElementsByClassName("hidden-btns");
    $scope.heartTouch.addEventListener("touchstart", startBeat, false);
    $scope.heartTouch.addEventListener("touchend", stopBeat, false);
    //$scope.hiddenBtns.addEventListener("touchstart",toggleMode, false);
    jQuery($scope.hiddenBtns).click(function( e ) {
      toggleMode();// true
    });
    $scope.timer; //For beat 1
    $scope.mode = 0; //0 = low(blue) 1 = average(green)  2 = fast (red)

    document.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);

    function startBeat(){ 
        $scope.timer = setInterval(function(){navigator.notification.vibrate(2500); startAnimation();},800);
    }

    function startAnimation(){
        jQuery($scope.heart).attr("src",$scope.heartImgs[0]);
        setTimeout(function(){
            jQuery($scope.heart).attr("src",$scope.heartImgs[1]);
        },400);
        setTimeout(function(){
            jQuery($scope.heart).attr("src",$scope.heartImgs[2]);
        },400);
    }

    function stopBeat(){
        jQuery($scope.heart).attr("src",$scope.heartImgs[0]);
    	window.clearInterval($scope.timer);
    }

    function toggleMode(){
        navigator.notification.vibrate(2500);
    }
  });
