/*
Page Name : BulletinSummary.cshtml
Controller Functions :
                        FillMessages ( To load Bulletin messages by passing 
                                       districtId(passing this but not used in the sp),
                                       SchoolId, 
                                       PersonId(student's personId)).
*/
var EditableTable = function () {

    return {
        //main function to initiate the module
        init: function () {

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

            //var displayBulletin;
            //var userRole = window.localStorage.getItem('userRole');
            //alert(userRole);
            //if (userRole == 'parent') {
            //    displayBulletin = 1;
            //    alert(displayBulletin);
            //}else if(userRole == 'student'){
            //    displayBulletin = 0;
            //    alert(displayBulletin);
            //}

            var loggedInUserRole = 0;
            var userRole = window.localStorage.getItem('userRole')

            loggedInUserRole = (userRole == "parent") ? "parent" : "student";
           // console.log('loggedInUserRole' + loggedInUserRole);

            //Defining the datatable for displaying the bulletin details
            var oTable = $('#dtMSGBulletin').dataTable({
                "aLengthMenu": [
                    [5, 10, 25, 50, -1],
                    [5, 10, 25, 50, "All"]
                ],
                "bAutoWidth": true,
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
                "sAjaxSource": "FillMessages",
                "fnServerParams": function (aoData) {
                    aoData.push({
                        "name": "districtid",
                        "value": 843
                    },
                        {
                            "name": "schoolid",
                            "value": window.localStorage.getItem('StudentSchoolId')
                        },
                        {
                            "name": "userid",
                            "value": window.localStorage.getItem('PersonId')
                        },
                        {
                            "name": "loggedInUserRole",
                            "value": loggedInUserRole
                        }
                        );
                },
                "bProcessing": false,
                //to sort the col startdate as desc order instead of default asc order
                "aaSorting": [
                    [1, "desc"]
                ],
                "aoColumns": [

                    {
                        "sName": "BulletinID",
                        "sClass": "hide_column"
                    },
                    {
                        "sName": "Start Date",
                        "bSearchable": false
                    }, {
                        "sName": "End Date",
                        "bSearchable": false
                    },
                    {
                        "sName": "Name"
                    },
                    {
                        "sName": "Discription",
                        "bSearchable": false,
                        "bSortable": false,
                        "sClass": "hide_column" //for tooltip
                    },

                    {
                        "sName": "Districts",
                        "bSearchable": false,
                        "bSortable": false,
                        "sClass": "hide_column" //for tooltip

                    },
                    {
                        "sName": "Districts", //for tooltip
                        "bSearchable": false,
                        "bSortable": false,
                        "sClass": "hide_column",
                        "fnRender": function (oObj) {
                            return "<a  class='Districts' href='#'><img src='../assets/img/school.png' alt='Smiley face' class='ReviewCalendar'/></a>";
                        }

                    }, {
                        "sName": "Schools", //for tooltip
                        "bSearchable": false,
                        "bSortable": false,
                        "sClass": "hide_column"

                    },
                    {
                        "sName": "Schools", //for tooltip
                        "bSearchable": false,
                        "bSortable": false,
                        "sClass": "hide_column",
                        "fnRender": function (oObj) {
                            return "<a  class='Schools' href='#'><img src='../assets/img/school.png' alt='Smiley face' class='ReviewCalendar'/></a>";
                        }

                    },
                    {
                        "sName": "BulletinID",
                        "bSearchable": false,
                        "bSortable": false,
                        "fnRender": function (oObj) {
                            return '<a class="editBulletin" href="javascript:;">View</a>';
                        }
                    }, {
                        "sName": "BulletinID",
                        "bSearchable": false,
                        "bSortable": false,
                        "sClass": "hide_column",
                        "fnRender": function (oObj) {
                            return '<a class="deleteBulletin" href="javascript:;">Delete</a>';
                        }
                    },
                    {
                        "sName": "Parent",
                        "sClass": "hide_column"

                    },
                    {
                        "sName": "Child",
                        "sClass": "hide_column"

                    },
                    {
                        "sName": "Type",
                        "sClass": "hide_column"

                    },
                    {
                        "sName": "DistrictIDs",
                        "sClass": "hide_column"

                    },
                    {
                        "sName": "SchoolIDs",
                        "sClass": "hide_column"

                    },
                    {
                        "sName": "RStatus"
                    }

                ]
            });

            oTable.fnAdjustColumnSizing();
            oTable.fnFilter("");

            //Storing the id of the selected row on click of edit
            $('#dtBulletin').on('click', 'a.editBulletin', function (e) {

                e.preventDefault();

                var _this = this;
                var nRow = $(_this).parents('tr')[0];
                var aData = $('#dtBulletin').dataTable().fnGetData(nRow); //Get data of current row 
                $("#hdnBulletinID").val(aData[0]);
            });

            //Inserting the read bulletins from message icon on close or esc or x btns used
            $('#MSGModal').on('hidden.bs.modal', function (e) {
                //e.preventDefault();
                console.log(1);
                var url = "/PortalUser/BulletinReadInsert/";

                var modelObj = {
                    BulletinID: window.localStorage.getItem('wbulletinid'),
                    UserId: window.localStorage.getItem('PersonId')
                };

                var response = SendRequestJSON(url, modelObj); //call the post method and Catch the result sent from Post Back call

                if (response.result == 'Success') {

                    //to refresh the count of messages icon on topehader
                    url = '/PortalUser/GetMessages/';
                    var modelObj = {
                        type: 0,
                        districtid: SchoolID,
                        schoolid: SchoolID,
                        userid: studentId
                    };

                    var responseData = SendRequestJSON(url, modelObj);
                    if (responseData.result == 'Success') {
                        $("#divMessages").html(responseData.Content);
                        $(".msgcount").html(responseData.Count);
                    } else {
                        $(".msgcount").html('0');
                        document.getElementById("displayMessage").innerHTML = 'Error Occured.';
                        ShowPopup();
                    }

                    //displaying blink and color for messages
                    if (responseData.Count > 0) {

                        $("#MsgCount").addClass("blink");
                        $("#MsgCount1").css("color", "red");
                    } else {
                        $("#MsgCount").removeClass("blink");
                        $("#MsgCount1").css("color", "#8CC152");
                    }

                    oTable.fnDraw(); //Redraw the DataTable                                       
                } else if (response.result == 'Duplicate') {
                    document.getElementById("displayMessage").innerHTML = 'Dupicate values are exists.';
                    ShowPopup();
                    return false;
                } else if (response.result == 'Failed') {
                    document.getElementById("displayMessage").innerHTML = 'Insertion Failed.';
                    ShowPopup();
                    return false;
                } else if (response.result == 'Error') {
                    document.getElementById("displayMessage").innerHTML = 'Error Occured.';
                    ShowPopup();
                    return false;
                }
            });
        }
    };
}();