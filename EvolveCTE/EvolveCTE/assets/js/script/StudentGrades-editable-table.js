/*
Page Name=StudentGrades.cshtml;
Controller Functions= 
                        FillGradesDataTable (To load Student Grades into the datatable by passing StudentId).                      
*/

var EditableTable = function () {

    return {

        //main function to initiate the module
        init: function () {

            //Dynamically Assign SchoolId value Based on User Assigned School
            var SchoolID = window.localStorage.getItem('SelectedSchoolId');

            (function ($) { //to clear the form validation messages on Reset button click , call this at rest button as onclick="$(this).resetValidation()"

                //re-set all client validation given a jQuery selected form or child
                $.fn.resetValidation = function () {

                    var $form = this.closest('form');


                    //reset jQuery Validate's internals
                    $form.validate().resetForm();

                    //reset unobtrusive validation summary, if it exists
                    $form.find("[data-valmsg-summary=true]")
                        .removeClass("validation-summary-errors")
                        .addClass("validation-summary-valid")
                        .find("ul").empty();

                    //reset unobtrusive field level, if it exists
                    $form.find("[data-valmsg-replace]")
                        .removeClass("field-validation-error")
                        .addClass("field-validation-valid")
                        .empty();
                    //clears error message in add form
                    $('label[id*=lblErrorMsg]').empty();
                    return $form;
                };
            })(jQuery);

            //Variable declaration

            //Getting studentId from 'StudentsInformation' page...
            //var studentId = 203903; //window.localStorage.getItem('SelectedStudentID');

            if (studentId == null || studentId == "") {
                studentId = 0;
            }

            //var schoolYearName = $("#ddlSchoolsCalendarYear option:selected").text();
            var SelectedSchoolCalendarId = window.localStorage.getItem("SelectedSchoolCalendarId");
            var SelectedSchoolCalendarName;

            if (SelectedSchoolCalendarId == null || SelectedSchoolCalendarId == "" || SelectedSchoolCalendarId == 'undefined') {
                SelectedSchoolCalendarName = " ";
            }

            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1; //January is 0!

            var yyyy = today.getFullYear();
            if (dd < 10) {
                dd = '0' + dd
            }
            if (mm < 10) {
                mm = '0' + mm
            }
            today = mm + '/' + dd + '/' + yyyy;

            //Change 2 to get LOADER
            function ajaxindicatorstart() {
                if ($('body').find('#loadingDiv').attr('id') != 'loadingDiv') {
                    var loadingString = '<div id="loadingDiv" class="modal1"><div id="loading-image" class="center"><img src="../assets/img/loader.gif" alt="Loading..." /></div></div>';
                    $('body').append(loadingString);
                    $('#loadingDiv .bg').height('100%');
                    $('#loadingDiv').fadeIn(300);
                    $('body').css('cursor', 'wait');
                }
            };

            //TABLE DEFINITION for grades
            var oTable = '';           
            oTable = $('#Grades-datatable').dataTable({
                //Specify the Page length dropdown values
                "aLengthMenu": [
                    [5, 10, 25, 50, -1],
                    [5, 10, 25, 50, "All"]
                ],
                // set the initial value
                "bAutoWidth": true,              
                "bScrollCollapse": true,
                "iDisplayLength": 10,
                "sDom": '<fl><t><ip>r',  //Change 1 to get LOADER
                "bJQueryUI": false,
                "sPaginationType": "bootstrap",
                "oLanguage": {
                    "sProcessing": ajaxindicatorstart(), //Change 3 to get LOADER
                    "sLengthMenu": "_MENU_ records per page",
                    "oPaginate": {
                        "sPrevious": "Prev",
                        "sNext": "Next"
                    }
                },
                "bServerSide": true,
                "sAjaxSource": "FillGradesDataTable",
                "fnServerParams": function (aoData) {
                    aoData.push({
                        "name": "StudentId",
                        "value": studentId
                    }
                    );
                },
                "bProcessing": true, //Change 4 to get LOADER
                "aaSorting": [[1, 'desc'], [4, 'desc']], // To get default sort on first column(Year)
                "aoColumns": [
                  {
                      "sName": "SchoolYear",
                      "bSearchable": false,
                      "bSortable": true
                  },
                    {
                        "sName": "SchoolName",
                        "bSearchable": true,
                        "bSortable": true                        
                    },
                    {
                        "sName": "CourseName",
                        "bSearchable": true,
                        "bSortable": true
                    }, {
                        "sName": "CourseNumber",
                        "bSearchable": true,
                        "bsortable": false,
                    }, {
                        "sName": "SectionNumber",
                        "bSearchable": false,
                        "bSortable": true
                    },
                    {
                        "sName": "Term",
                        "bSearchable": false,
                        "bSortable": true                     
                    },
                    {
                        "sName": "FinalGradePercentage",
                        "bSearchable": false,
                        "bSortable": true                      
                    },
                    {
                        "sName": "FinalGradeAlpha",
                        "bSearchable": false,
                        "bSortable": true                     
                    },
                    {
                        "sName": "CreditAttempted",
                        "bSearchable": false,
                        "bSortable": true                      
                    },
                    {
                        "sName": "CreditEarned",
                        "bSearchable": false,
                        "bSortable": true                     
                    }
                ]
            });

            oTable.fnAdjustColumnSizing();
            oTable.fnFilter("");          
        }

    };

}();