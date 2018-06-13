/*
Page Name : DisciplineSummary.cshtml
Controller Functions :
                        FillDisciplineSummaryDatatable ( To load student's discipline's summary messages by passing 
                                         StudentId).
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

            $("#btnUpdate").hide();
            var studentID = window.localStorage.getItem('SelectedStudentID');
            var SchoolID = window.localStorage.getItem('SelectedSchoolId');

            var studentDisciplineID = 0;

            if (studentID == "" || studentID == "0" || studentID == 'null' || studentID == null) {
                studentID = 0;
            }

            //Variable declaration
            var oTable = "";
            //var studentID = 203903;

            //Displaying loader image
            function ajaxindicatorstart() {
                if ($('body').find('#loadingDiv').attr('id') != 'loadingDiv') {
                    var loadingString = '<div id="loadingDiv" class="modal1"><div id="loading-image" class="center"><img src="../assets/img/loader.gif" alt="Loading..." /></div></div>';
                    $('body').append(loadingString);
                    $('#loadingDiv .bg').height('100%');
                    $('#loadingDiv').fadeIn(300);
                    $('body').css('cursor', 'wait');
                }
            };

            //Defining the datatable for displaying the district
            oTable = $('#DisciplineSummary').dataTable({
                //Specify the Page length dropdown values
                "aLengthMenu": [
                    [5, 10, 25, 50, -1],
                    [5, 10, 25, 50, "All"]
                ],

                "bScrollCollapse": true,
                "iDisplayLength": 10,
                "sDom": '<fl><t><ip>r',
                "bJQueryUI": false,
                "bDestroy": true,
                "sPaginationType": "bootstrap",
                "oLanguage": {
                    "sProcessing": ajaxindicatorstart(),
                    "sLengthMenu": "_MENU_ records per page",
                    "oPaginate": {
                        "sPrevious": "Prev",
                        "sNext": "Next",

                    }
                },
                "aaSorting": [
                    [0, 'asc']
                ],
                "bServerSide": true,
                "sAjaxSource": "FillDisciplineSummaryDatatable",
                "fnServerParams": function (aoData) {
                    aoData.push({
                        "name": "StudentID",
                        "value": studentID
                    });
                },
                "bProcessing": true,
                "aoColumns": [{
                    "sName": "ID",
                    "bSearchable": false,
                    "bSortable": false,
                    "sClass": "hide_column"
                },

                    {
                        "sName": "Incident Date",
                        "sWidth": "10%"
                    },
                    {
                        "sName": "Offense",
                        "sWidth": "20%"
                    },
                    {
                        "sName": "Action",
                        "sWidth": "25%"
                    },
                    {
                        "sName": "ActionDate",
                        "sWidth": "15%"
                    },
                    {
                        "sName": "Length",
                        "sWidth": "10%"
                    },
                    {
                        "sName": "School",
                        "sWidth": "15%"
                    },
                    {
                        "sName": "ID",
                        "bSearchable": false,
                        "bSortable": false,
                        "sWidth": "5%",
                        "fnRender": function (oObj) {
                            return "<a class='view' href='#'>View</a>";

                        }
                    }

                ]
            });
            oTable.fnAdjustColumnSizing();
            oTable.fnFilter("");

            var nEditing = null;
            oTable.fnDraw(); //Redraw the DataTable

            //Viewing Discipline incident details...
            $('#DisciplineSummary').on('click', 'a.view', function (e) {

                var _this = this;
                var nRow = $(_this).parents('tr')[0];
                var aData = oTable.fnGetData(nRow); //Get data of current row   
                studentDisciplineID = aData[0];

                if (studentDisciplineID != "" && studentDisciplineID > 0) {

                    $("#modalViewDetailspopup").trigger('click');

                    $.getJSON("/PortalUser/GetIncidentDetailsByIncidentID?StudentDisciplineID=" + studentDisciplineID,
                        function (data) {
                            var jsonObject = JSON.parse(data);
                            for (i = 0; i < jsonObject.length; i++) {
                                var obj = jsonObject[i];
                                for (key in obj) {
                                    if (obj.hasOwnProperty(key)) {
                                        //    console.log("key is " + key + " values is " + obj[key]);
                                        if (obj[key] != null) {
                                            var value1 = obj[key];
                                            if (key == "IncidentDate") {
                                                var dateValue = new Date(parseInt(obj[key].substr(6)));
                                                // $("#AdmissionDate").val(parseInt(dateValue.getMonth() + 1) + "/" + parseInt(dateValue.getDate()) + "/" + dateValue.getFullYear());
                                                $('#IncidentDate').datepicker().datepicker('setDate', dateValue);
                                                $('#IncidentDate').trigger('change');
                                            } else if (key == "IncidentTime") {
                                                var hours = obj[key].Hours;
                                                var minutes = obj[key].Minutes;
                                                var amPmDesignator = "AM";
                                                if (hours == 0)
                                                    hours = 12;
                                                else if (hours == 12)
                                                    amPmDesignator = "PM";
                                                else if (hours > 12) {
                                                    hours -= 12;
                                                    amPmDesignator = "PM";
                                                }
                                                var resultTime = hours + ":" + minutes + " " + amPmDesignator;
                                                $('#IncidentTime').timepicker('setTime', resultTime);
                                                $('#IncidentTime').trigger('change');
                                            } else if (key == "SchoolID") {
                                                $("#SchoolID").val(value1);
                                                $('#SchoolID').trigger('change');
                                            } else if (key == "DisciplineReason1PL") {
                                                $("#Offense1").val(value1);
                                                $('#Offense1').trigger('change');
                                            } else if (key == "DisciplineReason2PL") {
                                                $("#Offense2").val(value1);
                                            } else if (key == "DisciplineReason3PL") {
                                                $("#Offense3").val(value1);
                                            } else if (key == "DisciplineReason4PL") {
                                                $("#Offense4").val(value1);
                                            } else if (key == "DisciplineReason5PL") {
                                                $("#Offense5").val(value1);
                                            } else if (key == "TypeOfDisciplinePL") {
                                                $("#Action").val(value1);
                                                $('#Action').trigger('change');
                                            } else if (key == "StartDate") {
                                                var dateValue = new Date(parseInt(obj[key].substr(6)));
                                                $('#StartDate').datepicker().datepicker('setDate', dateValue);
                                                $('#StartDate').trigger('change');
                                            } else if (key == "LengthOfDiscipline") {
                                                $("#Length").val(value1);
                                                $('#Length').trigger('change');
                                            } else if (key == "ReferToAltEd") {
                                                $("#ReferToAltEdServices").val(value1);
                                            } else if (key == "IsDisciplineModifiedPL") {
                                                $("#Modified").val(value1);
                                            } else if (key == "Description") {
                                                $("#IncidentDescription").val(value1);
                                            }
                                        }
                                    }
                                }
                            }

                            $("#BtnEdit").show();
                            $("#btnSave").hide();
                            $("#btnUpdate").hide();
                            $("#btnDelete").show();
                            $("#lnkAddIncident").click(); //Raise the Popup
                            ManipulateFormElements('formAddIncident', true);
                            warnMessage = null; //empty the warning message
                        });
                }
                //fill the data in popup              
            }); //end of Viewing Discipline incident details       
        }

    };

}();