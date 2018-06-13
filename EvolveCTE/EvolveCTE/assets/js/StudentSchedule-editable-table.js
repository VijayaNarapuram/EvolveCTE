/*
Page Name : StudentSchedule.cshtml
Controller Functions :
                        FillStudentScheduleDetails ( To load student's schedule by passing StudentId).
*/
var EditableTableMain = function () {
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

            //Varaible declaration
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
            var globalDate = today;
            var globalDateForCourse = today;
            var globalDateForPeriod = today;
            var globalDateForIndividualSchedule = today;
            var globalEndDateForDropCourse = today;
            var globalValueForFinalGrade = '';
            var globalValueForCreditAttempted = '';
            var globalValueForCreditEarned = '';

            //inserting Course Section to a student...
            var sectionIds = [];
            var courseName = [];
            var courseNumber = [];
            var StartdateChange = false;
            var canPermitStuTime = 0;

            studentId = window.localStorage.getItem("StudentID");
            if (studentId == '' || studentId == null || studentId == undefined || studentId == 'null') {
                studentId = 0;
            }
            schoolYearId = window.localStorage.getItem('SchoolCalendarId');
            if (schoolYearId == null || schoolYearId == "" || schoolYearId == undefined || schoolYearId == 'null') {
                schoolYearId = 0;
            }
            SchoolID = window.localStorage.getItem('StudentSchoolId');
            if (SchoolID == null || SchoolID == "" || SchoolID == undefined || SchoolID == 'null') {
                SchoolID = 0;
            }

            canPermitStuTime = window.localStorage.getItem('canPermitStuTime');
            console.log('canPermitStuTime - ' + canPermitStuTime);
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
            var SchoolCourseID;

            //SCHEDULE TABLE DEFINITION...
            var scheduleTable = "";
            scheduleTable = $('#currentSchedule').dataTable({
                //Specify the Page length dropdown values
                "aLengthMenu": [
                    [5, 10, 25, 50, -1],
                    [5, 10, 25, 50, "All"]
                ],
                // set the initial value
                "bAutoWidth": true,
                "bScrollCollapse": true,
                "iDisplayLength": 10,
                "sDom": '<fl><t><ip>r', //Change 1 to get LOADER
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
                "sAjaxSource": "FillStudentScheduleDetails",
                "fnServerParams": function (aoData) {
                    aoData.push({
                        "name": "StudentId",
                        "value": studentId
                    }, {
                        "name": "SchoolId",
                        "value": SchoolID //4503 
                    }, {
                        "name": "SchoolYearId",
                        "value": schoolYearId //42970 
                    });
                },
                //"bProcessing": true, //Change 4 to get LOADER
                "bDestroy": true,
                "aaSorting": [
                    [2, 'asc']
                ], // To get default sort on first column(Year)
                "aoColumns": [{
                    "sName": "CourseNumber",
                    "bSearchable": false
                },
                    {
                        "sName": "Description"
                    }, {
                        "sName": "Section",

                    }, {
                        "sName": "SchoolPeriodID",
                        "bSearchable": false
                    }, {
                        "sName": "Room",
                        "bSearchable": false,
                        "bSortable": false,

                    }, {
                        "sName": "Teacher",
                        "bSearchable": false,
                        "bSortable": false,
                        "fnRender": function (oObj) {
                            return '<a class="viewStaffDetails" href="#">' + oObj.aData[5] + '</a>';
                        }

                    }, {
                        "sName": "StartDate",
                        "bSearchable": false,
                        "bSortable": false,
                        "fnRender": function (oObj) {
                            if (StartdateChange == false) {
                                var sd = oObj.aData[6];
                                var sdfinal = sd.split(" ");
                                return sdfinal[0];
                            } else {
                                return oObj.aData[6];
                            }
                        }

                    }, {
                        "sName": "CourseEndDate",
                        "bSearchable": false,
                        "bSortable": false,
                        "fnRender": function (oObj) {
                            if (StartdateChange == false) {
                                var sd = oObj.aData[7];
                                var sdfinal = sd.split(" ");
                                return sdfinal[0];
                            } else {
                                return oObj.aData[7];
                            }
                        }
                    }, {
                        "sName": "CourseStatus",
                        "bSearchable": false,
                        "bSortable": false,

                    }, {
                        "sName": "Days",
                        "bSearchable": false,
                        "bSortable": false,
                        "sClass": "hide_column"
                    },
                    {
                        "sName": "Days",
                        "bSearchable": false,
                        "sClass": "days",
                        "bSortable": false,
                        "fnRender": function (oObj) {
                            var days = oObj.aData[9];
                            var PeriodId = oObj.aData[3];
                            var finalresult = "<td class='tac vat nowrap' colspan='2' style='padding: 4px 5px'><div class='btn-group' data-toggle='buttons' id='div_1'>";
                            if (days.indexOf(",") == -1) { } else {
                                var x = days.slice(0, days.length - 1);
                                var y = x.split(",");
                            }
                            var days1 = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
                            for (i = 0; i < days1.length; i++) {
                                var yl = false;
                                for (j = 0; j < y.length; j++) {
                                    if (days1[i] == y[j].trim()) {
                                        yl = true;
                                    }
                                }
                                if (yl) {
                                    if (days1[i] == "Thursday") {
                                        finalresult += "<label class='btn1 btn-default1 active' id='" + days1[i] + "'><input type='radio' id='" + days1[i] + "' name='quality[25]' value='1'>R</label>";
                                    } else if (days1[i] == "Saturday") {
                                        finalresult += "<label class='btn1 btn-default1 active' id='" + days1[i] + "'><input type='radio' id='" + days1[i] + "' name='quality[25]' value='1'>Sa</label>";
                                    } else {
                                        finalresult += "<label class='btn1 btn-default1 active' id='" + days1[i] + "'><input type='radio' id='" + days1[i] + "' name='quality[25]' value='1'>" + days1[i][0] + "</label>";
                                    }
                                } else {
                                    if (days1[i] == "Thursday") {
                                        finalresult += "<label class='btn1 btn-default1' id='" + days1[i] + "'><input type='radio' id='" + days1[i] + "' name='quality[25]' value='1'>R</label>";
                                    } else if (days1[i] == "Saturday") {
                                        finalresult += "<label class='btn1 btn-default1' id='" + days1[i] + "'><input type='radio' id='" + days1[i] + "' name='quality[25]' value='1'>Sa</label>";
                                    } else {
                                        finalresult += "<label class='btn1 btn-default1' id='" + days1[i] + "'><input type='radio' id='" + days1[i] + "' name='quality[25]' value='1'>" + days1[i][0] + "</label>";
                                    }
                                }
                            }
                            finalresult += "</div></td>"
                            return finalresult;
                        }

                    },
                    {
                        "sName": "StaffWprkPhone",
                        "bSearchable": false,
                        "bSortable": false,
                        "sClass": "hide_column"
                    },
                    {
                        "sName": "StaffWorkPhoneExtension",
                        "bSearchable": false,
                        "bSortable": false,
                        "sClass": "hide_column"
                    }, {
                        "sName": "StaffWorkEmail",
                        "bSearchable": false,
                        "bSortable": false,
                        "sClass": "hide_column"
                    },
                    {
                        "sName": "StudentScheduleId",
                        "bSearchable": false,
                        "bSortable": false,
                        "sWidth": "10%",
                        "fnRender": function (oObj) {
                            if (canPermitStuTime == 1 || canPermitStuTime == true || canPermitStuTime == 'True') {
                                var courseNumber = oObj.aData[0];
                                var scheduleEndDate = oObj.aData[7];
                                var diffDays = 0;

                                if (scheduleEndDate != null && scheduleEndDate != '') {
                                    var date1 = new Date(scheduleEndDate);
                                    var date2 = new Date();
                                    //alert('date1 - ' + date1);
                                    //alert('date2 - ' + date2);
                                    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
                                    diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
                                    //alert('diffDays - ' + diffDays);
                                }

                                //if (StartdateChange == null || diffDays <= 30) {
                                console.log(StartdateChange);
                                //if (StartdateChange == false || diffDays <= 30) {
                                if (diffDays <= 30) {
                                    console.log(oObj.aData[0]);
                                    //return '<a class="ReportStudentTime" href="#">Report Student Time</a>';
                                    //return "<a class='ReportStudentTime' href='../PortalUser/ReportStudentTime?cNo='" + courseNumber + "'>Report Student Time</a>";
                                    return "<a class='ReportStudentTime' href='#'>Report Student Time</a>";
                                } else {
                                    return '';
                                }
                            }
                            else {
                                return '';
                            }
                        }
                    },
                     {
                         "sName": "SchoolCourseID",
                         "sClass": "hide_column"
                     },
                      {
                          "sName": "SchoolCourseSectionId",
                          "sClass": "hide_column"
                      }
                ]
            });

            $(document).on("click", ".ReportStudentTime", function (e) {
                e.preventDefault();
                var nRow = $(this).parents('tr')[0];
                var aData = scheduleTable.fnGetData(nRow);

                if (aData[7] == null || aData[7] == '') {
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
                    aData[7] = today;
                }

                //window.location.href = '/PortalUser/ReportStudentTime?cNo=' + aData[0] + '&bcNumberFromSectionPage=' + bcNumberFromSectionPage;
                window.location.href = '/PortalUser/ReportStudentTime?cNo=' + aData[1] + '&scId=' + aData[15] + '&sDate=' + aData[6] + '&eDate=' + aData[7] + '&scsId=' + aData[16];
            });

            $(document).on("click", ".viewStaffDetails", function (e) {
                $('#ModelViewPopUp').trigger('click');
                var nRow = $(this).parents('tr')[0];
                var aData = scheduleTable.fnGetData(nRow);
                $("#lblWorkPhonenUbmer").text(aData[11]);
                $("#lblExt").text(aData[12]);
                $("#lblWorkEmail").text(aData[13]);
            });

            var rowIndex = '';
            var studentId;
            var studentName;
            studentId = window.localStorage.getItem("StudentID");
            studentName = window.localStorage.getItem('StudentName');          

            function loadActivityValuesFromPicklist() {
                var url = '/PortalUser/SelectActivityFromPL/';
                var modelobj = {
                    data: 1
                }
                $.getJSON(url, modelobj,
                    function (optionsData) {
                        var select = $("#ddlActivity");
                        //select.empty();
                        //select.append($('<option/>', {
                        //    value: 0,
                        //    text: "Select"
                        //}));
                        $.each(optionsData, function (index, itemData) {
                            select.append($('<option/>', {
                                value: itemData.Value,
                                text: itemData.Text
                            }));

                            var text = "Parent Reported Time";
                            $("#ddlActivity option:contains(" + text + ")").attr('selected', 'selected');
                        });
                    });
            }

            function loadStatusValuesFromPicklist() {
                var url = '/PortalUser/SelectStatusFromPL/';
                var modelobj = {
                    data: 1
                }
                $.getJSON(url, modelobj,
                    function (optionsData) {
                        var select = $("#ddlStatus");
                        select.empty();
                        select.append($('<option/>', {
                            value: 0,
                            text: "Select"
                        }));
                        $.each(optionsData, function (index, itemData) {
                            select.append($('<option/>', {
                                value: itemData.Value,
                                text: itemData.Text
                            }));

                            var text = "Pending";
                            $("#ddlStatus option:contains(" + text + ")").attr('selected', 'selected');
                        });
                    });
            }

            function StudentTimeSummaryTableLoad(SchoolCourseID) {
                fTable = $('#StudentTimeSummaryTable').dataTable({
                    //Specify the Page length dropdown values
                    "aLengthMenu": [
                        [5, 10, 25, 50, -1],
                        [5, 10, 25, 50, "All"]
                    ],
                    // set the initial value
                    "bAutoWidth": true,
                    "bScrollCollapse": true,
                    "bDestroy": true,
                    "iDisplayLength": -1,
                    "sDom": '<t>',
                    "bJQueryUI": true,
                    "sPaginationType": "bootstrap",
                    "bServerSide": true,
                    //"oLanguage": { "sZeroRecords": "", "sEmptyTable": "" },//To remove the text 'No data available in datatable'...
                    "sAjaxSource": "FillStudentTimeSummary",
                    "fnServerParams": function (aoData) {
                        aoData.push({
                            "name": "StudentId",
                            "value": studentId
                        },
                        {
                            "name": "SchoolId",
                            "value": SchoolID
                        },
                        {
                            "name": "SchoolCourseId",
                            "value": SchoolCourseID //13088 //SchoolCourseID 
                        });
                    },
                    "bProcessing": false,
                    "aoColumns": [
                        {
                            "sName": "StudentTimeId",
                            "sClass": "hide_column"
                        },
                        {
                            "sName": "Description",
                        },
                        {
                            "sName": "Date",
                            "bSearchable": false,
                            "bSortable": false,
                            "sClass": "teacher-name"
                        }, {
                            "sName": "StartTime",
                            "bSearchable": false,
                            "bSortable": false,
                            "fnRender": function (oObj) {
                                var time1 = oObj.aData[3];
                                //console.log(time1);
                                var time = time1.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time1]
                                if (time.length > 1) { // If time format correct
                                    time = time.slice(1);  // Remove full string match value
                                    time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
                                    time[0] = +time[0] % 12 || 12; // Adjust hours
                                }
                                var resultTime = time.join('').replace(":00 ", " ");
                                return resultTime; // '<input type="text" value="' + resultTime + '" class="" placeholder="Start time"></input>';
                            }
                        }, {
                            "sName": "EndTime",
                            "bSearchable": false,
                            "bSortable": false,
                            "fnRender": function (oObj) {
                                var time1 = oObj.aData[4];
                                //console.log(time1);
                                var time = time1.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time1]
                                if (time.length > 1) { // If time format correct
                                    time = time.slice(1);  // Remove full string match value
                                    time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
                                    time[0] = +time[0] % 12 || 12; // Adjust hours
                                }
                                var resultTime = time.join('').replace(":00 ", " ");
                                return resultTime;
                            }
                        },
                        {
                            "sName": "TotalTime",
                            "bSearchable": false,
                            "bSortable": false
                        },
                         {
                             "sName": "Status",
                             "bSearchable": false,
                             "bSortable": false,
                         },
                        {
                            "sName": "StudentTimeId",
                            "bSearchable": false,
                            "bSortable": false,
                            "sClass": "edit",
                            "fnRender": function (oObj) {
                                var status = oObj.aData[6];
                                if (status == 'Pending') {
                                    return "<a class='editfields' href=''>Edit</a>";
                                }
                                else {
                                    return "";
                                }
                            }
                        }, {
                            "sName": "StudentTimeId",
                            "bSearchable": false,
                            "bSortable": false,
                            "sClass": "delete",
                            "fnRender": function (oObj) {
                                var status = oObj.aData[6];
                                //if (oObj.aData[1] != null) {
                                if (status == 'Pending') {
                                    return "<span class='delete'><a href=''>Delete</a></span>";
                                }
                                else {
                                    return "<span class='delete'></span>";
                                }
                            }
                        }
                    ]
                });

                fTable.fnAdjustColumnSizing();
                fTable.fnFilter("");
            }
        }
    };

}();