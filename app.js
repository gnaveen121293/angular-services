var app=angular.module("myapp4",[]);
app.controller("myController"," AppName",["$scope", "CustomFactory", function($scope,CustomFactory,AppName )
{
	
	$scope.customFactoryMessage=CustomFactory
	$console.log(AppName)
}])
