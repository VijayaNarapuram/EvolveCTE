function MainController1($scope) {
   
    $scope.districtnames = [{ name: "Marion", id: 1 }, { name: "Cardington", id: 2 }];
    $scope.schoolnames = [{ name: "Marion School", id: 1 }, { name: "Cardington School", id: 2 }];
    $scope.schoolyears = ["14-15", "13-14"];
    $scope.terms = ["Semester1", "Semester2"];
    //   $scope.headers = [["District"], ["School"], ["SchoolYear"], ["Term"]];
   

    $scope.isVisible = false;//for hiding the Tables on First Load 
    $scope.showTable = function () {        
        if ($scope.searchText != "") {
            //Ajax Call Here to fill the Tables
            $scope.isVisible = true;
        }
        else {
            $scope.isVisible = false;
        }
    };  


};