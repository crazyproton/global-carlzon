angular.module('myApp', [])

.controller('MyCtrl', function($scope){
	
	
	$scope.search = function(companyDetail){
		
		$scope.formShow = true;
		$scope.total_results ='3';
		
		
		
		$scope.searchitems = [
		                      { title :'abc company',description:'The company1 description will come here!!',snippet:'Snippet for company 1'},
		                      { title :'pqr company',description:'The company2 description will come here!!',snippet:'Snippet for company 2'},
		                      { title :'uvw company',description:'The company3 description will come here!!',snippet:'Snippet for company 3'}
		];
		
		
		$scope.listCompany = function(companyNumber){
			
			alert("Button clicked");
			
		}
		
	}
	
})