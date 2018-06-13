$(function () {
    //var cnt = 1;
    var x = '';
    var mode = '';
    var editrow = '';
    var AllFields = [];
    var AllFieldsStr = '';
    var _sortOrder = 1;

    var _MappingId;
    var _Description;
    var _Date; var _StartTime; var _EndTime; var _TotalTime
    
    var new_dialog = function (type, row) {
        //alert('from new_dialog - ', + type);
        if (type === 'Edit') {
            // debugger;
            //on click of anchor tag to show modal popup
            //document.getElementById('anchrAddNewGradReq').click();
            get_data();
            //mode = 'Edit';
        } else if (type == "Delete") {
            get_data();
        } else if (type === 'Create') {
            //assigning the control values to datatable in edit mode
            //////alert('mode - ' + mode);
            if (mode == 'Edit') {
                //row.children()[0].innerHTML = 0;

                //row.children()[1].innerHTML = $('#ddlGradReq').val();
                //row.children()[2].innerHTML = $('#ddlGradReq option:selected').text();
                //row.children()[3].innerHTML = $('#ddlGradReqDetail').val();
                //row.children()[4].innerHTML = $('#ddlGradReqDetail option:selected').text();

                //var rows = $("#GradReqTable").dataTable().fnGetNodes();
                mode = '';
                document.getElementById('close').click();
            } else {
                save_data();
            }
        }

        //clearing the control values
        function clean_data() {
            $('#ddlGradReq').val(0);
            $('#ddlGradReqDetail').val(0);
            $("#btnAddGradReqToCourse").html('Add');
        }

        //displaying datatable data to individual controls on click of edit button.
        function get_data() {
            //debugger;
            _MappingId = $(row.children().get(0)).text();    
            _Description = $(row.children().get(1)).text();          
            _Date = $(row.children().get(2)).text();
            _StartTime = $(row.children().get(3)).text();
            _EndTime = $(row.children().get(4)).text();
            _TotalTime = $(row.children().get(5)).text();

            $("#hdnStudentTimeId").val(_MappingId);
            //alert(_MappingId);
            $('#txtDescription').val(_Description);
          
            $('#TimeEntryDate').val(_Date);
            $('#StartTime').val(_StartTime);
            $('#StartTime').timepicker('setTime', _StartTime);
            $('#EndTime').val(_EndTime);
            $('#EndTime').timepicker('setTime', _EndTime);
            $('#TotalTime').val(_TotalTime);            
        }

        //displaying the control values into datatable on click of add fields btn
        function save_data() {
            ////alert('from save_data()_mappingId - ' + _MappingId);
            //alert('from save_data() '+ mode);

            if (_MappingId == undefined || _MappingId == 'undefined') {
                _MappingId = 0
            }
            console.log('mode from save_data() : ' + mode);
            //We need to loop through each row and remove the row which contains 'No data available in table'...
            //var rowCount = $('#GradReqTable tr').length;
            //console.log('GradReqTable table row count - ' + rowCount);            
            $('#StudentTimeSummaryTable  tr').each(function () {
                console.log('from table loop');
                $(this).find('td').each(function () {
                    var _MappingId = $(this).parent().children().eq(0).text(); //GRADREQID...                               
                    //alert('_GradReqId - ' + _GradReqId);
                    if (_MappingId == 'No data available in table') {
                        var currentrow = $(this).closest("tr");
                        currentrow.remove();
                    }
                });
            });

            var gradReqDetailText1 = '', gradReqDetailText2 = '';       
         
            $("#StudentTimeSummaryTable tbody").append("<tr>" + "<td style='display:none'>" + _MappingId + "</td>" +
                "<td>" + $('#txtDescription').val() + "</td>" +
                "<td>" + $('#TimeEntryDate').val() + "</td>" +
                "<td>" + $('#StartTime').val() + "</td>" +
                "<td>" + $('#EndTime').val() + "</td>" +
                "<td>" + $('#TotalTime').val() + "</td>" +

                "<td class='edit'><a href='' class='editfields'>Edit</a></td>" +
                "<td class='delete'><a href='' class='deletefields'>Delete</a></td>" + "</tr>");
                //"<td class='delete'><span class='delete'><a href=''>Delete</a></span></td></tr>");
         
            _MappingId = 0;
        }
    };

    // DATATABLE EDIT/DELETE CLICK FUNCTIONS START...
    $(document).on('click', 'td a.editfields', function () {
       //alert('from editfields...')
        // debugger;
        editrow = $(this).parents('tr');

        new_dialog('Edit', $(this).parents('tr'));     

        var description = $(this).closest('tr').find("td").eq(1).html();
      
        $("#modalheader").html('Edit Student Time Entry');
        return false;
    });

    //Executed when click on DELETE...(the selected row will be deleted...)
    $(document).on('click', 'span.delete', function () {
        var currentrow = $(this).closest("tr");
        new_dialog('Delete', $(this).parents('tr'));
        //alert('from delete');
        $("#modaltitle").html("Delete Student Time Entry");
        $("#DelModelPopUp").click();
        $("#lblDelMsg").show();
        $("#lblDelMsg").text("Are you sure you want to delete this record?");
        $("#btnDeleteOk").click(function () {
            console.log(currentrow);
            //currentrow.remove();
            //$('#ddlGradReq > option[value=' + _GradReqId + ']').show();
            //$('#ddlGradReqDetail > option[value=' + _GradReqDetailId + ']').show();

            var url = '/PortalUser/deleteStudentTimeEntries/';
            var modelobj = {
                studentTimeIds: _MappingId+','
            }            
            //Catch the result sent from Post Back call
            var response = SendRequestJSON(url, modelobj);
            if (response.result == 'Success') {
                document.getElementById("displayMessage").innerHTML = "Student time entry deleted succesfully";
                ShowPopup();
                // $('#ModalReportStudentTime').modal('toggle');
                //fTable.fnDraw();
                window.location.reload();
            }
            else if (response.result == 'InsertFail') {
                document.getElementById("displayMessage").innerHTML = "Record Exists";
                ShowPopup();

            }
            else if (response.result == 'Error') {
                document.getElementById("displayMessage").innerHTML = "Something went wrong";
                ShowPopup();
            }
        });
        return false;
    });

    // DATATABLE EDIT/DELETE CLICK FUNCTIONS END...

    //Functionality to open POPUP...
    $("#anchrAddNewGradReq").click(function () {
        //clearing the controls       
        $('#ddlGradReq').val(0);
        $('#ddlGradReqDetail').val(0);
        $("#modalheader").html('Add/Edit Grad Requirements');
        $("#btnAddGradReqToCourse").html('Add');
    });

    //CANCEL button functionality ...
    $('#btnCancel').click(function (e) {
        e.preventDefault();
        $('#GradReqModalPopUp').modal('hide');
        //x = $("#GradReqTable").html();      
        $(".edit").hide();
        $(".delete").hide();
        $('#ddlGradReq').val(0);
        $('#ddlGradReqDetail').val(0);
        $('.ddlGradReq').hide();
        $('.ddlGradReqDetail').hide();
    });

    //MODAL POPUP CLOSE...
    $('.btnmodalclose').click(function (e) {
        $('#ddlGradReq > option[value=' + selectedGradReq + ']').hide();
        $('#ddlGradReq').val(0);
        $('#ddlGradReqDetail').val(0);
        $('#GradReqModalPopUp').modal('hide');
        x = $("#GradReqTable").html();
        $(".edit").hide();
        $(".delete").hide();
        $(".ddlGradReq").hide();
        $(".ddlGradReqDetail").hide();

    });
    //Executed when we are adding fields to the datatable...

    // SAVE FUNCTIONALITY....
    function Converttimeformat(timer) {
        var time = timer;
        var hours = Number(time.match(/^(\d+)/)[1]);
        var minutes = Number(time.match(/:(\d+)/)[1]);
        var AMPM = time.match(/\s(.*)$/)[1];
        if (AMPM == "PM" && hours < 12) hours = hours + 12;
        if (AMPM == "AM" && hours == 12) hours = hours - 12;
        var sHours = hours.toString();
        var sMinutes = minutes.toString();
        if (hours < 10) sHours = "0" + sHours;
        if (minutes < 10) sMinutes = "0" + sMinutes;
        // alert(sHours + ":" + sMinutes);
        return sHours + ":" + sMinutes;
        // StartTime = sHours + ":" + sMinutes;
    }

    $('#btnSave').click(function (e){

        if ($("#txtDescription").val() == "") {
            document.getElementById("displayMessage").innerHTML = "Assignment Description is required";
            ShowPopup();
        }
        else {
            if ($("#TimeEntryDate").val() == "") {
                document.getElementById("displayMessage").innerHTML = "Date is required";
                ShowPopup();
            }
            else {
                if ($("#StartTime").val() == "") {
                    document.getElementById("displayMessage").innerHTML = "Start time is required";
                    ShowPopup();
                }
                else {
                    if ($("#EndTime").val() == "") {
                        document.getElementById("displayMessage").innerHTML = "End time is required";
                        ShowPopup();
                    }
                    else {
                        if ($("#TotalTime").val() == "" || $("#TotalTime").val() == "00:00" || $("#TotalTime").val() == "00") {
                            document.getElementById("displayMessage").innerHTML = "Total time cannot be empty";
                            ShowPopup();
                        }
                        else {
                            //alert($("#StartTime").val());
                            //alert($("#TimeEntryDate").val());
                            var Status = $("#ddlStatus").val();
                            var Activity = $("#ddlActivity").val();
                            var Date = $("#TimeEntryDate").val();
                            var StartTime = Converttimeformat($("#StartTime").val());
                            var EndTime = Converttimeformat($("#EndTime").val());                            
                          
                            var url = "/PortalUser/InsertStudentTimeEntry/";
                            var modelobj = {
                                StudentTimeId: $("#hdnStudentTimeId").val(),
                                StudentID: studentId,
                                StatusPL: Status,
                                ActivityPL: Activity,
                                Description: $("#txtDescription").val(),
                                Date: Date,
                                startTime: StartTime,
                                endTime: EndTime,
                                totalTime: $("#TotalTime").val(),
                                SchoolCourseID: $("#hdnSchoolCourseId").val(),
                                SchoolCourseSectionId: $("#hdnSchoolCourseSectionId").val()
                            };
                            //Catch the result sent from Post Back call
                            var response = SendRequestJSON(url, modelobj);
                            if (response.result == 'Success') {
                                document.getElementById("displayMessage").innerHTML = "Student time entry inserted succesfully";
                                $('#displayMessage').prepend('<span class="button b-close"><span>X</span></span>');//Prepending Close button to popup
                                //ShowPopup();
                                $('#displayMessage').bPopup({
                                    autoClose: 2000,
                                    onClose: function () { window.location.reload(); }
                                });
                                //$('#ModalReportStudentTime').modal('toggle');
                                $('#txtDescription').val();
                                //$("#hdnSchoolCourseId").val(0);
                                //fTable.fnDraw();
                                //window.loca
                            }
                            else if (response.result == 'InsertFail') {
                                document.getElementById("displayMessage").innerHTML = "Student time entry exists, Please select different time.";
                                ShowPopup();

                            }
                            else if (response.result == 'updated') {
                                document.getElementById("displayMessage").innerHTML = "Student time entry updated successfully.";
                                ShowPopup();
                                //$('#txtDescription').val = '';
                                //$("#hdnSchoolCourseId").val(0);
                                window.location.reload();
                                //fTable.fnDraw();
                            }
                            else if (response.result == 'Error') {
                                document.getElementById("displayMessage").innerHTML = "Something went wrong";
                                ShowPopup();

                            }
                        }
                    }
                }
            }
        }
    });

    // SAVE FUNCTIONALITY....

});