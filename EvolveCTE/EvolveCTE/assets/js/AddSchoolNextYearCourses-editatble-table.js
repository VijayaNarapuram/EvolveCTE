/*
Page Name : NextYearCourses.cshtml
Controller Functions :
                        FillSchoolCoursesListDataTable ( To load school courses by passing SchoolId to select for next year).
                        InsertStudentNextYearCourseRequest (To save school course requests for next year)
*/
var EditableTable = function () {
    return {

        //main function to initiate the module
        init: function () {
            //Dynamically Assign SchoolId value Based on User Assigned School

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
            //var masterStudentId = 203903;
            //var schoolYearId = 42970;

            //FILLING STUDENTID, STUDENTNAME
            var masterStudentId = window.localStorage.getItem("StudentID");

            var schoolYearId = window.localStorage.getItem('SchoolCalendarId');
            //alert(schoolYearId);
            var SchoolID = window.localStorage.getItem('StudentSchoolId');
            var studentName = window.localStorage.getItem('StudentName');
            var nextSchoolYearPL = window.localStorage.getItem('scheduleNextSchoolYearPL');

            //var schoolYearId = window.localStorage.getItem('SelectedSchoolCalendarId');
            if (schoolYearId == null || schoolYearId == "" || schoolYearId == undefined || schoolYearId == 'null') {
                schoolYearId = 0;
            }
            //var SchoolID = window.localStorage.getItem('SelectedSchoolId');
            if (SchoolID == null || SchoolID == "" || SchoolID == undefined || SchoolID == 'null') {
                SchoolID = 0;
            }

            if (nextSchoolYearPL == null || nextSchoolYearPL == "" || nextSchoolYearPL == undefined || nextSchoolYearPL == 'null') {
                nextSchoolYearPL = schoolYearId;
            }

            var oTable = "";
            console.log('from NY page js file...');
            console.log(masterStudentId);
            //Defining the datatable for displaying the district courses
            oTable = $('#SchoolCoursesToStudent').dataTable({
                //Specify the Page length dropdown values
                "aLengthMenu": [
                    [5, 10, 25, 50, -1],
                    [5, 10, 25, 50, "All"]
                ],

                "bScrollCollapse": true,
                "iDisplayLength": 10,
                "sDom": '<fl><t><ip>',
                "bJQueryUI": false,
                "sPaginationType": "bootstrap",
                "oLanguage": {
                    "sLengthMenu": "_MENU_ records per page",

                    "oPaginate": {
                        "sPrevious": "Prev",
                        "sNext": "Next"
                    }
                },
                "bServerSide": true,
                "sAjaxSource": "FillSchoolCoursesListDataTable",
                "fnServerParams": function (aoData) {
                    aoData.push({
                        "name": "SchoolYearId",
                        "value": nextSchoolYearPL
                    }, {
                        "name": "schoolId",
                        "value": SchoolID
                    }, {
                        "name": "studentId",
                        "value": masterStudentId //SchoolID
                    });
                },
                "bProcessing": false, //For loader
                "aaSorting": [
                    [1, 'asc']
                ], // To get default sort on first column(DistrictCourseNumber)
                "aoColumns": [{
                    "sName": "SchoolCourseId",
                    "bSearchable": false,
                    "bSortable": false,
                    "fnRender": function (oObj) {
                        return '<input  class="chkChild" type="checkbox" title="Add School Courses To Student" />';
                    }
                }, {
                    "sName": "SchoolCourseNumber"
                }, {
                    "sName": "SchoolCourseName"
                },
                    {
                        "sName": "SchoolCourseId",
                        "sClass": "hide_column"
                    }
                ]
            });

            // new $.fn.dataTable.FixedColumns(oTable);
            oTable.fnAdjustColumnSizing();
            oTable.fnFilter("");

            jQuery('#SchoolContactInfoDdataTable_wrapper .dataTables_filter input').addClass("form-control medium"); // modify table search input
            jQuery('#SchoolContactInfoDdataTable_wrapper .dataTables_length select').addClass("form-control xsmall"); // modify table per page dropdown

            var nEditing = null;

            oTable.fnDraw(); //Redraw the DataTable

            //CHECKALL Functionality(To select/Deselect all school courses)...
            $('#chkHeader').click(function (e) {
                //alert(1);
                if ($('#chkHeader').prop("checked")) {
                    $('.chkChild').each(function () {
                        //$(this).attr('checked', 'checked');
                        $(this).prop('checked', true);
                    });
                } else {
                    $('input', oTable.fnGetNodes()).removeAttr('checked');
                }
            }); //Endof CHECKALL Functionality...


            var schoolCourseIds = [];
            //Saving the school courses requests...
            $(document).on("click", "#btnSave", function (e) {
                var minCheckCriteria = false;
                var checkSchoolYear = true;
                //gets the checked check boxes rows..(i.e get checked SchoolCourseSequenceIds...)
                var rowcollections = oTable.$(".chkChild:checked", {
                    "page": "all"
                });
                rowcollections.each(function (index, elem) {
                    var _this = this;
                    minCheckCriteria = true;
                    var nRow = $(_this).parents('tr')[0];
                    var aData = oTable.fnGetData(nRow);
                    schoolCourseIds.push(aData[3]);
                    console.log(schoolCourseIds);
                });
                //alert(schoolCourseIds);
                if (minCheckCriteria) {
                    if (checkSchoolYear) {
                        var url = "/PortalUser/InsertStudentNextYearCourseRequest";

                        var modelObj = {
                            studentId: masterStudentId,
                            SchoolCourseIDs: String(schoolCourseIds),
                            CreatedBy: masterStudentId,
                            ModifiedBy: masterStudentId
                        };
                        console.log(modelObj);
                        var response = SendRequestJSON(url, modelObj);
                        if (response.result == 'Inserted successfully') {
                            document.getElementById("displayMessage").innerHTML = 'Course Requests for Next year added successfully.';
                            ShowPopup();
                            oTable.fnDraw();
                        } else if (response.result == 'Failed') {
                            alert("failed");
                            return false;
                        } else if (response.result == 'Error') {
                            alert("Error Occured.");
                            return false;
                        }
                    } else {
                        $('#displayMessage').prepend('<span class="button b-close"><span>X</span></span>'); //Prepending Close button to popup
                        document.getElementById("displayMessage").innerHTML = "Please Select a valid school year";
                        ShowPopup();
                    }
                } else {
                    $('#displayMessage').prepend('<span class="button b-close"><span>X</span></span>'); //Prepending Close button to popup
                    document.getElementById("displayMessage").innerHTML = "Please select atleast one School Course";
                    ShowPopup();
                }
            });;
        }
    };
}();