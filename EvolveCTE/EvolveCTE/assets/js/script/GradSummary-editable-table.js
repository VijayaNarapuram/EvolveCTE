var EditableTable1 = function () {

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

            var studentId = window.localStorage.getItem('StudentID');
            //alert(studentId);

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

            //Defining the datatable for displaying the Grad Requirement Summary details
            var oTable1 = $('#dtGradSummary').dataTable({
                "aLengthMenu": [
                    [5, 10, 25, 50, -1],
                    [5, 10, 25, 50, "All"]
                ],
                "bAutoWidth": true,
                "bScrollCollapse": true,
                "iDisplayLength": -1,
                //"sDom": '<fl><t><ip>',                 
                "sDom": '<><t><>',
                "bJQueryUI": false,
                //"sPaginationType": "bootstrap",
                "oLanguage": {
                    "sLengthMenu": "_MENU_ records per page",
                    "oPaginate": {
                        "sPrevious": "Prev",
                        "sNext": "Next"
                    }
                },
                "bServerSide": true,
                "sAjaxSource": "FillGradSummaryDataTable",
                "fnServerParams": function (aoData) {
                    aoData.push(
                    { "name": "StudentID", "value": studentId }

                        );
                },
                "bProcessing": false,
                //to sort the col 1 as desc order instead of default asc order
                "aaSorting": [[0, "asc"]],
                "aoColumns": [

                    {
                        "sName": "SchoolYear",
                        "sWidth": "5%"

                    },
                    {
                        "sName": "GradeLevel",
                        "sWidth": "5%"
                    },
                     {
                         "sName": "SchoolName",
                         "bSortable": false,
                         "bSearchable": false,
                         "sWidth": "25%"

                     },
                    {
                        "sName": "CourseName",
                        "bSortable": false,
                        "bSearchable": false,
                        "sWidth": "25%"
                    },
                    {
                        "sName": "S1",
                        "bSortable": false,
                        "bSearchable": false,
                        "sWidth": "5%",
                        "fnRender": function (oObj) {

                            var vS1 = oObj.aData[4];

                            if (vS1 == '0' || vS1 == null || vS1 == '') {
                                return '';
                            }
                            else if (vS1 == 'S1') {
                                return oObj.aData[12];
                            }
                            else if (vS1 == 'Full Year') {
                                return '';
                            }
                            else if (vS1 == 'S2') {
                                return '';
                            }
                            else if (vS1 == 'YR') {
                                return '';
                            }

                        }

                    },
                    {
                        "sName": "S2",
                        "bSortable": false,
                        "bSearchable": false,
                        "sWidth": "5%",
                        "fnRender": function (oObj) {

                            var vS2 = oObj.aData[5];

                            if (vS2 == '0' || vS2 == null || vS2 == '') {
                                return '';
                            }
                            else if (vS2 == 'S2') {
                                return oObj.aData[12];
                            }
                            else if (vS2 == 'S1') {
                                return '';
                            }
                            else if (vS2 == 'Full Year') {
                                return '';
                            }
                            else if (vS2 == 'YR') {
                                return '';
                            }

                        }

                    },
                    {
                        "sName": "FY",
                        "bSortable": false,
                        "bSearchable": false,
                        "sWidth": "5%",
                        "fnRender": function (oObj) {

                            var vFY = oObj.aData[6];

                            if (vFY == '0' || vFY == null || vFY == '') {
                                return '';
                            }
                            else if (vFY == 'Full Year') {
                                return oObj.aData[12];
                            }
                            else if (vFY == 'S2') {
                                return '';
                            }
                            else if (vFY == 'S1') {
                                return '';
                            }
                            else if (vFY == 'YR') {
                                return oObj.aData[12];
                            }
                        }

                    },
                    {
                        "sName": "EarnedQualityPoints",
                        "bSortable": false,
                        "bSearchable": false,
                        "sWidth": "3%",


                    },
                    {
                        "sName": "BonusPoints",
                        "bSearchable": false,
                        "bSortable": false,
                        "sWidth": "3%"

                    },
                    {
                        "sName": "CreditAttempted",
                        "bSearchable": false,
                        "bSortable": false,
                        "sWidth": "5%",
                        "fnRender": function (oObj) {

                            var CreditAttempted = oObj.aData[9];

                            if (CreditAttempted == null || CreditAttempted == '' || CreditAttempted == 0) {
                                return '';
                            } else {
                                return parseFloat(CreditAttempted).toFixed(3);
                            }
                        }
                    },
                    {
                        "sName": "CreditEarned",
                        "bSearchable": false,
                        "bSortable": false,
                        "sWidth": "5%",
                        "fnRender": function (oObj) {

                            var CreditEarned = oObj.aData[10];
                            if (CreditEarned == 0) {
                                return '0.00';
                            }
                            else if (CreditEarned == null || CreditEarned == '') {
                                return '';
                            } else {
                                return parseFloat(CreditEarned).toFixed(3);
                            }
                        }
                    },
                     {
                         "sName": "GradCode",
                         "sWidth": "5%"
                     },
                     {
                         "sName": "FinalGradeAlpha",
                         "sClass": "hide_column",
                         "sWidth": "5%"
                     }
                ]
            });

            oTable1.fnAdjustColumnSizing();
            oTable1.fnFilter("");


            //Defining the datatable for displaying the Grad Credits Required details

            if (studentId != '') {

                var url = "/PortalUser/GetGraduationCreditsRequiredDataTable";
                var modelobj = {
                    StudentID: studentId
                };

                $.getJSON(url, modelobj, function (optionsData) {
                    $("#divGradCreditsRequired").html(optionsData);

                    //$('#dt1').on('mouseover', 'a.GradCode', function (e) {
                    $(document).on("mouseover", 'a.GradCode', function (e) {
                        tooltip.pop(this, '#days', {
                            position: 3,
                            offsetX: 10,
                        })
                        e.preventDefault();
                        var _this = this;
                        //var nRow = $(_this).parents('tr')[0];
                        //var aData = oTable.fnGetData(nRow); //Get data of current row
                        console.log($(this).closest("tr"));

                        var GradCodeSubject = $(this).closest("tr")   // Finds the closest row <tr> 
                               .find(".subject")     // Gets a descendent with class="nr"
                               .html();

                        console.log(GradCodeSubject);

                        $('.days').text(GradCodeSubject);                       
                    });
                });

            }
            else {
                $("#dtGradCreditsRequired").html("<table><<tr><th>Credits Required: 20</th></tr><td>No data available in table<\td><\table>");
                $("#dtGradCreditsRequired").attr('style', 'overflow-y: auto;');
            }

            //Defining the datatable for displaying the State Test details
            var totalCRReqd = 0;
            var totalCREarned = 0;

            var oTable2 = $('#dtStateTesting').dataTable({
                "fnRowCallback": function (nRow, aData, iDisplayIndex) {

                    //Result == F then change color to red for result value
                    if (aData[1] == 'F') {
                        $('td:eq(1)', nRow).css('color', '#f64128');
                        $('td:eq(1)', nRow).css('font-weight', 'bold');
                    }
                },
                "aLengthMenu": [
                    [5, 10, 25, 50, -1],
                    [5, 10, 25, 50, "All"]
                ],
                "bAutoWidth": true,
                "bScrollCollapse": true,
                "iDisplayLength": -1,
                //"sDom": '<fl><t><ip>',                 
                "sDom": '<><t><>',
                "bJQueryUI": false,
                //"sPaginationType": "bootstrap",
                "oLanguage": {
                    "sLengthMenu": "_MENU_ records per page",
                    "oPaginate": {
                        "sPrevious": "Prev",
                        "sNext": "Next"
                    }
                },
                "bServerSide": true,
                "sAjaxSource": "FillStateTestingDataTable",
                "fnServerParams": function (aoData) {
                    aoData.push(
                    { "name": "StudentID", "value": studentId });
                },
                "bProcessing": false,
                //to sort the col 1 as desc order instead of default asc order
                "aaSorting": [[0, "asc"]],
                "aoColumns": [

                    {
                        "sName": "Subject",
                        "sWidth": "5%",
                        "bSortable": false,
                        "bSearchable": false
                    },
                    {
                        "sName": "Result",
                        "bSortable": false,
                        "bSearchable": false,
                        "sWidth": "10%"
                    },
                     {
                         "sName": "Date",
                         "bSortable": false,
                         "bSearchable": false,
                         "sWidth": "10%"
                     }
                ]
            });

            oTable2.fnAdjustColumnSizing();
            oTable2.fnFilter("");

            //Defining the datatable for displaying the Grad Points Details
            var vtotalCRReqd = 0;
            var vtotalCREarned = 0;

            var oTable3 = $('#dtGradPoints').dataTable({
                "fnRowCallback": function (nRow, aData, iDisplayIndex) {
                    //Earned < Required then change color to red for earned value
                    if (parseInt(aData[2]) < (aData[1])) {
                        $('td:eq(2)', nRow).css('color', '#f64128');
                        $('td:eq(2)', nRow).css('font-weight', 'bold');
                    }
                },
                "fnDrawCallback": function (oSettings) {
                    vtotalCRReqd = 0; //on sort of each column of datatable , re-intializing the total to Zero.
                    vtotalCREarned = 0;
                },
                "fnFooterCallback": function (row, data, start, end, display) {
                    //if (totalCRReqd == 'NaN')
                    //    $('#totalRequired').html('')
                    //else
                    //    $('#totalRequired').html(parseFloat(totalCRReqd).toFixed(3));

                    if (vtotalCREarned == 0)
                        $('#vtotalEarned').html('')
                    else
                        $('#vtotalEarned').html(parseFloat(vtotalCREarned).toFixed(3));

                    if (vtotalCREarned < 18) {
                        $('#vtotalEarned').css('color', '#f64128');
                        $('#vtotalEarned').css('font-weight', 'bold');
                    }

                },
                "aLengthMenu": [
                    [5, 10, 25, 50, -1],
                    [5, 10, 25, 50, "All"]
                ],
                "bAutoWidth": true,
                "bScrollCollapse": true,
                "iDisplayLength": -1,
                //"sDom": '<fl><t><ip>',                 
                "sDom": '<><t><>',
                "bJQueryUI": false,
                //"sPaginationType": "bootstrap",
                "oLanguage": {
                    "sLengthMenu": "_MENU_ records per page",
                    "oPaginate": {
                        "sPrevious": "Prev",
                        "sNext": "Next"
                    }
                },
                "bServerSide": true,
                "sAjaxSource": "FillGradPointDataTable",
                "fnServerParams": function (aoData) {
                    aoData.push(
                    { "name": "StudentID", "value": studentId });
                },
                "bProcessing": false,
                //to sort the col 1 as desc order instead of default asc order
                "aaSorting": [[0, "asc"]],
                "aoColumns": [
                    {
                        "sName": "Course",
                        "bSortable": false,
                        "bSearchable": false,
                        "sWidth": "10%"
                    },
                    {
                        "sName": "Minimum",
                        "bSortable": false,
                        "bSearchable": false,
                        "sWidth": "5%",
                        "fnRender": function (oObj) {

                            var vCreditRequired = oObj.aData[1];
                            vCreditRequired != null ? vCreditRequired : 0;
                            var intVal = function (i) {
                                return typeof i === 'string' ? i.replace(/[\$,]/g, '') * 1 : typeof i === 'number' ? i : 0;
                            };

                            // var vCreditRequired = !isNaN(CreditRequired) ? parseFloat(CreditRequired, 2) : 0;
                            if (vtotalCRReqd == 0)
                                vtotalCRReqd = vCreditRequired; //oObj.aData[1];
                            else
                                vtotalCRReqd = intVal(vtotalCRReqd) + intVal(vCreditRequired); //oObj.aData[1]

                            if (vCreditRequired == '0' || vCreditRequired == null || vCreditRequired == '' || vCreditRequired == 0) {
                                return '';
                            }
                            else {
                                return parseFloat(vCreditRequired).toFixed(3);
                            }
                        }
                    },
                    {
                        "sName": "Earned",
                        "bSortable": false,
                        "bSearchable": false,
                        "sWidth": "5%",
                        "fnRender": function (oObj) {

                            var CreditRequired = oObj.aData[1];
                            var vCreditEarned = oObj.aData[2];
                            vCreditEarned != null ? vCreditEarned : 0;
                            var intVal = function (i) {
                                return typeof i === 'string' ? i.replace(/[\$,]/g, '') * 1 : typeof i === 'number' ? i : 0;
                            };

                            if (vtotalCREarned == 0)
                                vtotalCREarned = vCreditEarned; //oObj.aData[2];
                            else
                                vtotalCREarned = intVal(vtotalCREarned) + intVal(vCreditEarned); //oObj.aData[2]

                            if (vCreditEarned == '0' || vCreditEarned == null || vCreditEarned == '' || vCreditEarned == 0) {
                                return '0';
                            }
                            else {
                                return parseFloat(vCreditEarned).toFixed(3);
                            }
                        }
                    },
                    {
                        "sName": "Header1",
                        "sClass": "hide_column",
                        "fnRender": function (oObj) {

                            var vFY = oObj.aData[3];

                            if (vFY != '0' || vFY != null || vFY != '') {
                                $('.gpaTbl_head1').text(vFY);


                                var chhead = "Course History " + vFY.substring(vFY.indexOf("-"));
                                var ogtHead = "OGT Includes " + vFY.substring(vFY.indexOf("-"));

                                $('.CHHead').text(chhead);
                                $('.OGThead').text(ogtHead);

                                return vFY;
                            }
                        }
                    },
                    {
                        "sName": "Header2",
                        "sClass": "hide_column",
                        "fnRender": function (oObj) {

                            var vFY = oObj.aData[4];
                            if (vFY != '0' || vFY != null || vFY != '') {
                                $('.gpaTbl_head2').text(vFY);
                                return vFY;
                            }
                        }
                    },
                ]
            });

            oTable3.fnAdjustColumnSizing();
            oTable3.fnFilter("");


            //Defining the datatable for displaying the College and Career Test ACT details

            var oTable4 = $('#dtACTTest').dataTable({
                "fnRowCallback": function (nRow, aData, iDisplayIndex) {
                    //Earned < Required then change color to red for earned value
                    //if (aData[2] < aData[1]) {
                    //    $('td:eq(2)', nRow).css('color', '#f64128');
                    //    $('td:eq(2)', nRow).css('font-weight', 'bold');
                    //}
                },
                "aLengthMenu": [
                    [5, 10, 25, 50, -1],
                    [5, 10, 25, 50, "All"]
                ],
                "bAutoWidth": true,
                "bScrollCollapse": true,
                "iDisplayLength": -1,
                //"sDom": '<fl><t><ip>',                 
                "sDom": '<><t><>',
                "bJQueryUI": false,
                //"sPaginationType": "bootstrap",
                "oLanguage": {
                    "sLengthMenu": "_MENU_ records per page",
                    "oPaginate": {
                        "sPrevious": "Prev",
                        "sNext": "Next"
                    }
                },
                "bServerSide": true,
                "sAjaxSource": "FillCollegeCareerTestACTDataTable",
                "fnServerParams": function (aoData) {
                    aoData.push(
                    { "name": "StudentID", "value": studentId }

                        );
                },
                "bProcessing": false,
                //to sort the col 1 as desc order instead of default asc order
                "aaSorting": [[0, "asc"]],
                "aoColumns": [
                    {
                        "sName": "ACT",
                        "bSortable": false,
                        "bSearchable": false,
                        "sWidth": "10%"
                    },
                    {
                        "sName": "Minimum",
                        "bSortable": false,
                        "bSearchable": false,
                        "sWidth": "5%",
                        "fnRender": function (oObj) {

                            var vmin = oObj.aData[1];

                            vmin != null ? vmin : 0;


                            if (vmin == '0' || vmin == null || vmin == '' || vmin == 0) {
                                return '';
                            }
                            else {
                                return vmin; //oObj.aData[1];
                            }

                        }

                    },
                    {
                        "sName": "Earned",
                        "bSortable": false,
                        "bSearchable": false,
                        "sWidth": "5%",
                        "fnRender": function (oObj) {

                            var vEarned = oObj.aData[2];

                            vEarned != null ? vEarned : 0;

                            if (vEarned == '0' || vEarned == null || vEarned == '' || vEarned == 0) {
                                return '';
                            }
                            else {
                                return vEarned; //oObj.aData[2];
                            }
                        }
                    }
                ]
            });

            oTable4.fnAdjustColumnSizing();
            oTable4.fnFilter("");

            //Defining the datatable for displaying the College and Career Test SAT details
            var oTable5 = $('#dtSATTest').dataTable({
                "fnRowCallback": function (nRow, aData, iDisplayIndex) {
                    //Earned < Required then change color to red for earned value
                    //if (aData[2] < aData[1]) {
                    //    $('td:eq(2)', nRow).css('color', '#f64128');
                    //    $('td:eq(2)', nRow).css('font-weight', 'bold');
                    //}
                },
                "aLengthMenu": [
                    [5, 10, 25, 50, -1],
                    [5, 10, 25, 50, "All"]
                ],
                "bAutoWidth": true,
                "bScrollCollapse": true,
                "iDisplayLength": -1,
                //"sDom": '<fl><t><ip>',                 
                "sDom": '<><t><>',
                "bJQueryUI": false,
                //"sPaginationType": "bootstrap",
                "oLanguage": {
                    "sLengthMenu": "_MENU_ records per page",
                    "oPaginate": {
                        "sPrevious": "Prev",
                        "sNext": "Next"
                    }
                },
                "bServerSide": true,
                "sAjaxSource": "FillCollegeCareerTestSATDataTable",
                "fnServerParams": function (aoData) {
                    aoData.push(
                    { "name": "StudentID", "value": studentId }

                        );
                },
                "bProcessing": false,
                //to sort the col 1 as desc order instead of default asc order
                "aaSorting": [[0, "asc"]],
                "aoColumns": [
                    {
                        "sName": "SAT",
                        "bSortable": false,
                        "bSearchable": false,
                        "sWidth": "10%"
                    },
                    {
                        "sName": "Minimum",
                        "bSortable": false,
                        "bSearchable": false,
                        "sWidth": "5%",
                        "fnRender": function (oObj) {

                            var vmin = oObj.aData[1];
                            if (vmin == '0' || vmin == null || vmin == '' || vmin == 0) {
                                return '';
                            }
                            else {
                                return oObj.aData[1];
                            }
                        }
                    },
                    {
                        "sName": "Earned",
                        "bSortable": false,
                        "bSearchable": false,
                        "sWidth": "5%",
                        "fnRender": function (oObj) {

                            var vEarned = oObj.aData[2];

                            if (vEarned == '0' || vEarned == null || vEarned == '' || vEarned == 0) {
                                return '';
                            }
                            else {
                                return oObj.aData[2];
                            }
                        }
                    }
                ]
            });

            oTable5.fnAdjustColumnSizing();
            oTable5.fnFilter("");

            //Date Sorting
            jQuery.fn.dataTableExt.oSort['us_date-pre'] = function (a) {
                //a = a.slice(0, -2) + ' ' + a.slice(-2); //uk format like 12/01/2015 10:20PM
                //alert(a);
                var date = Date.parse(a);
                // return typeof date === 'number' ? date : -1; //uk format like 12/01/2015 10:20PM
                return date
            }
            jQuery.fn.dataTableExt.oSort['us_date-asc'] = function (a, b) {
                return ((a < b) ? -1 : ((a > b) ? 1 : 0));
            }
            jQuery.fn.dataTableExt.oSort['us_date-desc'] = function (a, b) {
                return ((a < b) ? 1 : ((a > b) ? -1 : 0));
            }
            //end of date sorting
        }

    };

}();