var app= angular.module('myApp', ['myApp.services']);

app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
	}
]);

app.controller('MainCtrl', function($scope, $http,$window, dataFactory) {
	
	console.log("Inside Main Ctrl");
	
	$("#textBox1").keypress(function(){
		console.log("Inside Key Presss!!!");
		$scope.searchData = function(companyDetails){
		$scope.showCompanyList=false;
		$scope.errorShow=false;
		$scope.successShow=false;
		console.log("Inside function::: "+companyDetails);
		dataFactory.getCompany($scope,companyDetails);
		//dataFactory.getCompanyProfile($scope,companyNumber);
		//dataFactory.getInsolvency($scope,companyNumber)
		}
	});
	
		$scope.search = function(companyDetails){
		
		$scope.showCompanyList=false;
		$scope.errorShow=false;
		$scope.successShow=false;
		console.log("Inside function::: "+companyDetails);
		dataFactory.getCompany($scope,companyDetails);
		//dataFactory.getCompanyProfile($scope,companyNumber);
		//dataFactory.getInsolvency($scope,companyNumber)
		}
	
	$scope.listCompany = function(companyNumber){
		
		console.log("companyNumber:::"+companyNumber);
		$scope.showCompanyList=false;
		$scope.errorShow=false;
		$scope.successShow=false;
		console.log("Inside list company function::: "+companyNumber);
		//dataFactory.getCompany($scope,companyDetails);
		dataFactory.getCompanyProfile($scope,companyNumber);
		dataFactory.getInsolvency($scope,companyNumber);
		dataFactory.getOfficersDetails($scope,companyNumber);
		dataFactory.getFilingHistory($scope,companyNumber);
		
	}
});