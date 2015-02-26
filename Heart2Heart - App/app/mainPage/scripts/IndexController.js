angular
  .module('mainPage')
  .controller('IndexController', function($scope, supersonic) {
    // Controller functionality here
    $scope.heart = document.getElementById("inv-btn");
    $scope.heartBeat = document.getElementById("heart-beat");
    $scope.heart.addEventListener("touchstart", startBeat, false);
    $scope.heart.addEventListener("touchend", stopBeat, false);
    $scope.timer; //For beat 1
    $scope.mode = 0; //0 = low(blue) 1 = average(green)  2 = fast (red)

    document.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);

    function startBeat(){ 
    	$scope.timer = setInterval(function(){navigator.notification.vibrate(2500);},1000);
    	$scope.heartBeat.className = $scope.heartBeat.className + " pulse";
    }

    function stopBeat(){
    	window.clearInterval($scope.timer);
    	$scope.heartBeat.className = "animated infinite"
    }
  });
