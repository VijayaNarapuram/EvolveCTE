var EditableTable = function () {

    return {

        //main function to initiate the module
        init: function () {
            var SchoolID = '';
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


            //start of Assigning Privileges
            var url = '/PrivilegeRole/GetUserPrivilegesByUserIDRolesList/';
            var SelID = window.localStorage.getItem('menuSelID'); //need to be implement
            var modelObj = {
                UserID: $("#hdnUserId").val(),
                MenuID: SelID //need to be implement
            };

            var responseData = "";

            var CreatePrivilege = "";
            var ReadPrivilege = "";
            var UpdatePrivilege = "";
            var DeletePrivilege = "";
            var CreateControl = "";
            var ReadControl = "";
            var UpdateControl = "";
            var DeleteControl = "";

            if (SelID != '' && SelID != null) { //need to be implement
                responseData = SendRequestJSON(url, modelObj);

                if (responseData.result == 'Success') {

                    CreatePrivilege = responseData.Create;
                    ReadPrivilege = responseData.Read;
                    UpdatePrivilege = responseData.Update;
                    DeletePrivilege = responseData.Delete;

                    CreateControl = responseData.CreateControl;
                    ReadControl = responseData.ReadControl;
                    UpdateControl = responseData.UpdateControl;
                    DeleteControl = responseData.DeleteControl;

                    if (CreatePrivilege == 'False') {
                        if (CreateControl != '')
                            $("#" + CreateControl).remove();
                    }
                }
            }
            //end of assigning privileges

            //Setting default values
            $("#SchoolName").change(function (e) {
                e.preventDefault();
                var schoolId = $('#SchoolName').val();
                if (schoolId != '' && schoolId != '0') {
                    SchoolID = schoolId;
                    oTable.fnDraw();
                }
            });

            //Displaying row in edit mode
            function editRow(oTable, nRow) {
                var aData = oTable.fnGetData(nRow);
                var jqTds = $('>td', nRow);
            }

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

            var option1 = window.localStorage.getItem('StudentSchoolId');
            if (option1 == "" || option1 == null) {
                option1 = 0;
            }
            console.log(option1);
            var option2 = window.localStorage.getItem('StudentID');
            if (option2 == null || option2 == "" || option2 == undefined || option2 == 'null') {
                //  alert(option2);
                option2 = 0;
            }
            console.log(option2);

            var outerhtmltext = 0;
            var ApprovedRejected = 0;
            var chkString = '<input  class="chkChild" type="checkbox" title="select" />';
            var dateChange = false;
            var StartTimeChange = false;
            var EndTimeChange = false;
            var globalActivity = 'Select';
            var total_hrtime = 0;
            var total_mintime = 0;
            var isZeroAppendedForTotalHrtime = false;
            var isZeroAppendedForTotalMintime = false;
            var fromEditfn = 0;

            //Defining the datatable for displaying the attendance pattern
            //SP NAME : uspSelectStudentTimesForApprovalByStudentId
            var oTable = $('#StudentTimeSummary-listtable').dataTable({
                //Specify the Page length dropdown values
                "aLengthMenu": [
                    [5, 10, 25, 50, -1],
                    [5, 10, 25, 50, "All"]
                ],
                // set the initial value
                "bAutoWidth": true,
                //"sScrollX": "100%",
                //"sScrollY": "400px",
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
                "sAjaxSource": "FillStudenTimeEntryListByStudent",
                "fnServerParams": function (aoData) {
                    FT = 0;
                    total_hrtime = 0;
                    total_mintime = 0;
                    aoData.push({
                        "name": "SchoolID",
                        "value": option1
                    }, {
                        "name": "StudentID",
                        "value": option2
                    });
                },
                "bProcessing": true, //Change 4 to get LOADER
                "fnInitComplete": function (oSettings) { },
                "aaSorting": [
                    [0, 'asc']
                ], // To get default sort on Region Name
                "aoColumns": [{
                    "sName": "StudentTimeId",
                    "bSearchable": true,
                    "sClass": "hide_column",
                    "bVisible": false
                },
                    {
                        "sName": "StudentTimeId",
                        "bSearchable": false,
                        "bSortable": false,
                        "fnRender": function (oObj) {
                            return chkString;
                        },
                        "sClass": "hide_column",
                        "bVisible": false
                    },
                    {
                        "sName": "CourseName",
                        "bSearchable": true
                    },
                    {
                        "sName": "Activity", //3
                        "bSearchable": true
                    },
                    {
                        "sName": "Description", //4
                        "bSearchable": true
                    },
                    {
                        "sName": "Date", //5
                        "bSearchable": true,
                        "bSortable": true,
                    },
                    {
                        "sName": "StartTime", //6
                        "bSearchable": true,
                        "bSortable": true,
                        "fnRender": function (oObj) {
                            var time1 = oObj.aData[6];                          
                            var resultTime;
                            var time = time1.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time1]
                            if (time.length > 1) { // If time format correct
                                time = time.slice(1); // Remove full string match value
                                time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
                                time[0] = +time[0] % 12 || 12; // Adjust hours
                            }                           
                            resultTime = time;                        
                            if (fromEditfn == 1) {
                                resultTime = time;
                            } else {
                                resultTime = time.join('').replace(":00 ", " "); 
                            }
                            return resultTime; 
                        }
                    },
                    {
                        "sName": "EndTime", //7
                        "bSearchable": true,
                        "bSortable": true,
                        "fnRender": function (oObj) {
                            var time1 = oObj.aData[7];                            
                            var resultTime;                          
                            var time = time1.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time1]
                            if (time.length > 1) { // If time format correct
                                time = time.slice(1); // Remove full string match value
                                time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
                                time[0] = +time[0] % 12 || 12; // Adjust hours
                            }                           
                            resultTime = time;                          
                            if (fromEditfn == 1) {
                                resultTime = time;
                            } else {
                                resultTime = time.join('').replace(":00 ", " ");
                            }                            
                            return resultTime;
                        }
                    },
                    {
                        "sName": "TotalTime", //8
                        "bSearchable": true,
                        "bSortable": true,
                        "fnRender": function (oObj) {
                            var requestStatus = oObj.aData[9];                         
                            var time1 = oObj.aData[8];
                            var timeHrs = time1.split(':')[0];
                            var timeMins = time1.split(':')[1];
                            var finalTime = timeHrs + ':' + timeMins;

                            totalTime = total_hrtime + ":" + total_mintime;
                            if (requestStatus == 'Approved') //Calculate YTD time only for approved records...
                            {
                                getTimeTotal(FT, oObj.aData[8]);
                            }
                            
                            if (total_hrtime <= 9 && !isZeroAppendedForTotalHrtime) {
                                isZeroAppendedForTotalHrtime = true;
                                total_hrtime = '0' + total_hrtime;
                            }
                            if (total_mintime <= 9 && !isZeroAppendedForTotalMintime) {
                                isZeroAppendedForTotalMintime = true;
                                total_mintime = '0' + total_mintime;
                            }

                            $("#lblYTDTotalTime").html(' ' + total_hrtime + ':' + total_mintime + ' ');
                          
                            return '<label  class="duration">' + finalTime + '</label>';                          
                        }
                    },
                    {
                        "sName": "Status",
                        "bSearchable": true,
                        "bSortable": true
                    },
                    {

                        "sName": "StudentTimeId",
                        "bSearchable": false,
                        "bSortable": false,
                        "sClass": "hide_column",
                        "fnRender": function (oObj) {
                            if (dateChange == false) {
                                // var StudentScheduleId = oObj.aData[0];
                                return '<a class="StudentTimeEdit" href="#">Edit</a>';
                            } else {
                                return "<a class=aSave id='btnSave' href='#' >Save</a>&nbsp;&nbsp;<a class=aCancel href='#'>Cancel</a>";
                            }
                        }
                    },
                    {

                        "sName": "StudentTimeId",
                        "bSearchable": false,
                        "bSortable": false,
                        "sClass": "hide_column",
                        "fnRender": function (oObj) {
                            return '<a class="delete" href="#">Delete</a>';
                        }
                    },
                    {
                        "sName": "ActivityPL",
                        "bSearchable": false,
                        "sClass": "hide_column",
                    },
                    {
                        "sName": "StatusPL",
                        "bSearchable": false,
                        "sClass": "hide_column",
                    },
                    {
                        "sName": "RejectionReason",
                        "bSearchable": false,
                        "bSortable": false,
                        "fnRender": function (oObj) {
                            if (oObj.aData[13] == 45920) {
                                //return "<a class='ScheduleDaysClass' href='#'><img src='../assets/img/reject_icon4.png' alt='Smiley face' class='ReviewCalendar'/></a>";
                                return oObj.aData[15];
                            }
                            else {
                                return ''
                            }
                        }
                    },
                     {
                         "sName": "RejectionReason",
                         "bSearchable": false,
                         "bSortable": false,
                         "sClass": "hide_column"
                     }
                ]
            });

            //We can empty 'FT' either in this event or fnServerParams() event of Data table initialization...
            $('.dataTables_filter input').bind('keyup', function (e) {
                //FT = 0;
            });

            //SHOWING YTD DETAILS...
            var url = "/PortalUser/StudentYTDDetails/";
            var modelObj = {
                SchoolId: option1,
                StudentId: option2
            };
            var response = SendRequestJSON(url, modelObj);
          
            if (response.result == 'Success') {
                $("#lblATotalTime").html((response.strSumTotal == null || response.strSumTotal == '') ? 0 : response.strSumTotal);
                $("#lblADailyTime").html((response.strHoursInSession == null || response.strHoursInSession == '') ? 0 : response.strHoursInSession);
                $("#lblAtime").html((response.strAvgYTD == null || response.strAvgYTD == '') ? 0 : response.strAvgYTD);
                var dynamicText = '';
                response.strAvgYTD = (response.strAvgYTD == null || response.strAvgYTD == '') ? 0 : response.strAvgYTD;

                if (Math.round(response.strAvgYTD * 100) > Math.round(response.strHoursInSession * 100)) {
                    dynamicText = "<label id='lblAtime'>" + response.strAvgYTD + "   <img class='alertIcon' src='/assets/img/YTD/thumbs-up-small.png' />";
                }
                else {
                    dynamicText = "<label id='lblAtime'>" + response.strAvgYTD + "   <img class='alertIcon' src='/assets/img/YTD/thumbs-down-small.png' />";
                }

                $("#divATime").html(dynamicText);
            }

            //TO SHOW THE SELECTED DAYS OF A PATTERN IN A POPUP WHEN WE HOVER ON AN ICON UNDER 'DAYS' COLUMN
            $('#StudentTimeSummary-listtable').on('mouseover', 'a.ScheduleDaysClass', function (e) {
                tooltip.pop(this, '#days', {
                    position: 3,
                    offsetX: 10,
                })
                e.preventDefault();
                var _this = this;
                var nRow = $(_this).parents('tr')[0];
                var aData = oTable.fnGetData(nRow); //Get data of current row

                $('.days').text(aData[15]);
                console.log(aData[14]);
            });            

            function calculateTotalTime() {
                total_hrtime = "";
                total_mintime = "";
                //var searchVal = $('.dataTables_filter input', $table).val();
                //var searchVal = $('.dataTables_filter input').val();
                //console.log('search val -' + searchVal);
                var data = $("#StudentTimeSummary-listtable").dataTable();

                data.each(function (value, index) {
                    var _this = this;
                    //console.log(1);
                    var nRow = $(_this).parents('tr')[0];
                    //console.log('nrow - ' + nRow);
                    var aData = oTable.fnGetData(nRow);
                    //console.log('aData Length - ' + aData.length);
                    for (var i = 0; i < aData.length; i++) {
                        //console.log('Each row Total Time -' + $(aData[i][8]).html());
                        totalTime = total_hrtime + ":" + total_mintime;
                        getTimeTotal(totalTime, $(aData[i][8]).html());
                        //totalTime = totalTime + $(aData[i][8]).html();
                        //console.log('each row total time - ' + totalTime);
                    }
                });               

                //$("#lblYTDTotalTime").html('   ' + total_hrtime + ':' + total_mintime);
                $("#lblYTDTotalTime").html( total_hrtime + ':' + total_mintime);
                //console.log('totalTime - ' + total_hrtime + ':' + total_mintime);
            }

            var FT = 0;

            function getTimeTotal(time1, time2) {
                var time1_hr = "";
                var time1_min = "";
                var time2_hr = "";
                var time2_min = "";
                //var total_hrtime = "";
                //var total_mintime = "";
                var generated_Hour = 0;
                time1_hr = (time1.length > 0) ? time1.split(":")[0] : 0;
                time1_min = (time1.length > 0) ? time1.split(":")[1] : 0;
                time2_hr = (time2.length > 0) ? time2.split(":")[0] : 0;
                time2_min = (time2.length > 0) ? time2.split(":")[1] : 0;

                total_hrtime = 1 * time1_hr + 1 * time2_hr;

                //alert(total_hrtime);
                total_mintime = 1 * time1_min + 1 * time2_min;
                //alert(total_mintime);

                if (total_mintime >= 60) {
                    total_mintime = total_mintime - 60;
                    total_hrtime = total_hrtime + 1;
                }

                if (total_hrtime >= 24) {
                    total_hrtime = total_hrtime - 24;
                    if (total_hrtime < 10)
                        total_hrtime = "0" + total_hrtime;
                }

                FT = total_hrtime + ":" + total_mintime;
                //console.log('from getTimeTotal - ' + total_hrtime + ":" + total_mintime);
            }

            //UpdateContol Privileges
            if (UpdatePrivilege == 'False') {
                oTable.fnSetColumnVis(8, false);
            }
            //DeleteContol Privileges
            if (DeletePrivilege == 'False') {
                oTable.fnSetColumnVis(9, false);
            }

            // new $.fn.dataTable.FixedColumns(oTable);
            oTable.fnAdjustColumnSizing();
            oTable.fnFilter("");
        }
    };
}();