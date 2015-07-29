angular.module('myApp.services',[])

.factory('dataFactory', function($http){

	return {

			getInsolvency:function($scope,companyNumber){

				$http({
		            method: 'GET',
		            url: 'http://localhost:8080/CompanyHouseDataServices/rest/insolvency/'+companyNumber,
		            /*data:companyNumber,*/
		            dataType: 'jsonp'

		         }).
		         success(function(data, status, headers, config){

		        	 console.log("Inside success of Insolvency");

		        		// this callback will be called asynchronously
		        		// when the response is available
		        	 console.log("*****data inside insolvency::***"+data.etag);
		        	 if(data.etag!= undefined){

		        		 $scope.cases = data.cases;
		        		 $scope.etag = data.etag;
		        		 $scope.status = data.status;
		            	 $scope.company_number=data.company_number;

		        	 }else{

		        		 	$scope.insolvencyerrorShow=true;
			      		   	$scope.insolvencyerrorResponse = "company-insolvencies-not-found";
			      		   	//console.log("errorResponse:::"+data.errors.error);
		        	 }



		        	   }).error(function(data, status, headers, config) {

		        		   // called asynchronously if an error occurs
		        		    // or server returns response with an error status.

		        	   });

				},
				getCompanyProfile:function($scope,companyNumber){

					$http({
			            method: 'POST',
			            url: 'http://localhost:8080/CompanyHouseDataServices/rest/company/'+companyNumber,
			            /*data:companyNumber,*/
			            dataType: 'jsonp'

			         }).
			         success(function(data, status, headers, config){

			        	 console.log("Inside success");

			        		// this callback will be called asynchronously
			        		// when the response is available
			        	 if(data.accounts != undefined){

			        		 $scope.successShow=true;
			        		 $scope.companyname = data.company_name;
			            	 $scope.company_number=data.company_number;

			            	 //for address
			            	 $scope.address_line_1 = data.registered_office_address.address_line_1;
			            	 $scope.address_line_2 = data.registered_office_address.address_line_2;
			            	 $scope.locality = data.registered_office_address.locality;
			            	 $scope.region = data.registered_office_address.region;
			            	 $scope.postal_code = data.registered_office_address.postal_code;

			            	 //company details
			            	 $scope.date_of_creation=data.date_of_creation;
			            	 $scope.type = data.type;
			            	 $scope.sic_codes = data.sic_codes;
			            	 $scope.jurisdiction=data.jurisdiction;
			            	 $scope.etag= data.etag;
			            	 $scope.company_status = data.company_status;
			            	 $scope.can_file = data.can_file;
			            	 $scope.has_been_liquidated = data.has_been_liquidated;
			            	 $scope.undeliverable_registered_office_address = data.undeliverable_registered_office_address;
			            	 $scope.last_full_members_list_date= data.last_full_members_list_date;

			            	 //Accounts
			            	 $scope.next_due = data.accounts.next_due;
			            	 $scope.overdue = data.accounts.overdue;
			            	 $scope.next_made_up_to = data.accounts.next_made_up_to;
			            	 $scope.accounting_reference_date_month = data.accounts.accounting_reference_date.month;
			            	 $scope.accounting_reference_date_day = data.accounts.accounting_reference_date.day;
			            	 $scope.last_accounts_type = data.accounts.last_accounts.type;
			            	 $scope.last_accounts_made_up_to = data.accounts.last_accounts.made_up_to;


			            	 //Annual returns
			            	 $scope.annualreturnoverdue = data.annual_return.overdue;
			            	 $scope.annual_return_next_made_up_to = data.annual_return.next_made_up_to;
			            	 $scope.annual_return_next_due = data.annual_return.next_due;
			            	 $scope.annual_return_last_made_up_to = data.annual_return.last_made_up_to;

			            	 /*// Officers
			            	 $scope.officers_active_count = data.officer_summary.active_count;
			            	 $scope.officers_resigned_count = data.officer_summary.resigned_count;
			            	 $scope.officers = data.officer_summary.officers;
*/
			            	 console.log("Inside success:::::::"+data);
			            	 console.log("Inside success:::::::"+data.accounts);
			      		   	console.log("Inside success:::::::"+data.accounts.next_due);
			        	 }else{

			        		$scope.errorShow=true;
			      		   	$scope.errorResponse = data.errors[0].error;
			      		   	console.log("errorResponse:::"+data.errors[0].error);
			        	 }

			        	   }).error(function(data, status, headers, config) {

			        		   // called asynchronously if an error occurs
			        		    // or server returns response with an error status.
			        		   $scope.errorShow=true;
			        		   $scope.errorResponse = "Error in the service call !!! Please try again";
			        		   console.log("1::"+data);
			        		   console.log("2::"+status);
			        		   console.log("3::"+headers);
			        		   console.log("4::"+config);


			        	   });

				},
				getCompany:function($scope,companyNumber){

					$http({
			            method: 'POST',
			            url: 'http://localhost:8080/CompanyHouseDataServices/rest/searchcompany/'+companyNumber,
			            /*data:companyNumber,*/
			            dataType: 'jsonp'

			         }).
			         success(function(data, status, headers, config){

			        	 console.log("Inside success of getCompany");

			        	 $scope.formShow=true;
			        		// this callback will be called asynchronously
			        		// when the response is available
			        	 if(data.items != undefined){

			        		 $scope.searchitems = data.items;
			        		 $scope.total_results= data.total_results;
			        		// console.log("data items::::"+data.items[0].description_values.company_number);


			        	 }else{

			        		 	console.log("Inside error!!!!");
			        		 	$scope.errorShow=true;
				      		   	$scope.errorResponse = data.errors[0].error;
				      		   	console.log("errorResponse:::"+data.errors[0].error);
			        	 }
			        	   }).error(function(data, status, headers, config) {

			        		   // called asynchronously if an error occurs
			        		    // or server returns response with an error status.

			        	   });

					},
					getFilingHistory:function($scope,companyNumber){

						$http({
				            method: 'POST',
				            url: 'http://localhost:8080/CompanyHouseDataServices/rest/filing/'+companyNumber,
				            /*data:companyNumber,*/
				            dataType: 'jsonp'

				         }).
				         success(function(data, status, headers, config){

				        	 console.log("Inside success of Filing History");

				        		// this callback will be called asynchronously
				        		// when the response is available
				        	 if(data.filing_history_status != undefined){

				        		 $scope.filing_total_count = data.total_count;
				        		 $scope.filingItems = data.items;
				        		 $scope.filing_history_status = data.filing_history_status;


				        	 }else{

				        		 		$scope.filingerrorShow=true;
					      		   	$scope.filingerrorResponse = data.errors[0].error;
					      		   	console.log("errorResponse:::"+data.errors[0].error);
				        	 }



				        	   }).error(function(data, status, headers, config) {

				        		   // called asynchronously if an error occurs
				        		    // or server returns response with an error status.

				        	   });

						},
						getOfficersDetails:function($scope,companyNumber){

							$http({
					            method: 'POST',
					            url: 'http://localhost:8080/CompanyHouseDataServices/rest/officers/'+companyNumber,
					            /*data:companyNumber,*/
					            dataType: 'jsonp'

					         }).
					         success(function(data, status, headers, config){

					        	 console.log("Inside success of Officers List");

					        		// this callback will be called asynchronously
					        		// when the response is available
					        	 if(data.kind != undefined){

					        		 $scope.officers_active_count = data.active_count;
					            	 $scope.officers_resigned_count = data.resigned_count;
					            	 $scope.officers = data.items;


					        	 }else{

					        		 	//$scope.officerserrorShow=true;
						      		   	$scope.officerserrorResponse = data.errors[0].error;
						      		   	console.log("errorResponse:::"+data.errors[0].error);
					        	 }



					        	   }).error(function(data, status, headers, config) {

					        		   // called asynchronously if an error occurs
					        		    // or server returns response with an error status.

					        	   });

							}

		  };

})
