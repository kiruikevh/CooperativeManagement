$(document).ready(function () {
    $(".btn_employmentDetailsRegistration").click(function () {
        var data = {
            "EmployerName": $("#txtemployerName").val(),
            "Designation": $("#txtjobTitle").val(),
            "StartDate": $("#txtemploymentstartdate").val(),
            "EndDate": $("#txtemploymentEndDate").val(),
            "TermsofService": $("#txttermsofservice").val(),
            "TotalYears": $("#txttotalnumber").val(),
            "SummaryDetails": $("#txtdutiessumarries").val(),
        }
        Swal.fire({
            title: "Confirm Employment Details Registration?",
            text: "Are you sure you would like to proceed with submission?",
            type: "warning",
            showCancelButton: true,
            closeOnConfirm: true,
            confirmButtonText: "Yes, Proceed!",
            confirmButtonClass: "btn-success",
            confirmButtonColor: "#008000",
            position: "center"
        }).then((result) => {
            if (result.value) {
                $.ajax({
                    url: "/Home/CandidateWorkWxperience",
                    type: "POST",
                    data: JSON.stringify(data),
                    contentType: "application/json",
                    cache: false,
                    processData: false
                }).done(function (status) {
                    var registerstatus = status.split('*');
                    status = registerstatus[0];
                    switch (status) {
                        case "success":
                            Swal.fire
                            ({
                                title: "Employment Details Saved!",
                                text: registerstatus[1],
                                type: "success"
                            }).then(() => {
                                $("#employmentdetailsfeedback").css("display", "block");
                                $("#employmentdetailsfeedback").css("color", "green");
                                $('#employmentdetailsfeedback').attr("class", "alert alert-success");
                                $("#employmentdetailsfeedback").html("Your Employment Details Information have been successfully Saved" + "  " + registerstatus[1]);
                                $("#employmentdetailsfeedback").css("display", "block");
                                $("#employmentdetailsfeedback").css("color", "green");
                                $("#employmentdetailsfeedback").html("Your Employment Details have been successfully Saved." + "  " + registerstatus[1]);
                                $("#preqappl_form").reset();
                                document.getElementById("txtemployerName").value = "";
                                document.getElementById("txtjobTitle").value = "";
                                document.getElementById("txtemploymentstartdate").value = "";
                                document.getElementById("txtemploymentEndDate").value = "";
                                document.getElementById("txttermsofservice").value = "";
                                document.getElementById("txttotalnumber").value = "";
                                document.getElementById("txtdutiessumarries").value = "";
                            });
                            ApplicantEmploymentDetails.init();
                            $("button#nextBtn").css("display", "block");
                            break;
                        case "missingfield":
                            Swal.fire
                          ({
                              title: "Missing Mandatory Fields!!!",
                              text: "Kindly fill all the fields before you save the details." + " " + registerstatus[1],
                              type: "error"
                          }).then(() => {
                              $("#employmentdetailsfeedback").css("display", "block");
                              $("#employmentdetailsfeedback").css("color", "red");
                              $('#employmentdetailsfeedback').addClass('alert alert-danger');
                              $("#employmentdetailsfeedback").html("Kindly fill all the fields before you save the details" + " " + registerstatus[1]);
                          });
                            break;
                        default:
                            Swal.fire
                            ({
                                title: "Employment Details  Error!!!",
                                text: "Your Employment Details could not been successfully Saved" + " " + registerstatus[1],
                                type: "error"
                            }).then(() => {
                                $("#employmentdetailsfeedback").css("display", "block");
                                $("#employmentdetailsfeedback").css("color", "red");
                                $('#employmentdetailsfeedback').addClass('alert alert-danger');
                                $("#employmentdetailsfeedback").html("Your Employment Details  could not been successfully Saved" + " " + registerstatus[1]);
                            });
                            break;
                    }
                }
                );
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Professional Qualifications Cancelled',
                    'You cancelled your Professional Qualifications Registration submission details!',
                    'error'
                );
            }
        });

    });
    $(".btn_editemploymentDetailsRegistration").click(function () {
        var data = {
            "EntryNumber": $("#experienceentryNumber").val(),
            "EmployerName": $("#edittxtemployerName").val(),
            "Designation": $("#edittxtjobTitle").val(),
            "StartDate": $("#edittxtemploymentstartdate").val(),
            "EndDate": $("#edittxtemploymentEndDate").val(),
            "TermsofService": $("#edittxttermsofservice").val(),
            "TotalYears": $("#edittxttotalnumber").val(),
            "SummaryDetails": $("#edittxtdutiessumarries").val(),
        }
        Swal.fire({
            title: "Confirm Employment Details Registration?",
            text: "Are you sure you would like to proceed with submission?",
            type: "warning",
            showCancelButton: true,
            closeOnConfirm: true,
            confirmButtonText: "Yes, Proceed!",
            confirmButtonClass: "btn-success",
            confirmButtonColor: "#008000",
            position: "center"
        }).then((result) => {
            if (result.value) {
                $.ajax({
                    url: "/Home/UpdateCandidateWorkWxperience",
                    type: "POST",
                    data: JSON.stringify(data),
                    contentType: "application/json",
                    cache: false,
                    processData: false
                }).done(function (status) {
                    var registerstatus = status.split('*');
                    status = registerstatus[0];
                    switch (status) {
                        case "success":
                            Swal.fire
                            ({
                                title: "Employment Details Saved!",
                                text: registerstatus[1],
                                type: "success"
                            }).then(() => {
                                $("#employmentdetailsfeedback").css("display", "block");
                                $("#employmentdetailsfeedback").css("color", "green");
                                $('#employmentdetailsfeedback').attr("class", "alert alert-success");
                                $("#employmentdetailsfeedback").html("Your Employment Details Information have been successfully Saved" + "  " + registerstatus[1]);
                                $("#employmentdetailsfeedback").css("display", "block");
                                $("#employmentdetailsfeedback").css("color", "green");
                                $("#employmentdetailsfeedback").html("Your Employment Details have been successfully Saved." + "  " + registerstatus[1]);
                                $("#preqappl_form").reset();
                                document.getElementById("txtemployerName").value = "";
                                document.getElementById("txtjobTitle").value = "";
                                document.getElementById("txtemploymentstartdate").value = "";
                                document.getElementById("txtemploymentEndDate").value = "";
                                document.getElementById("txttermsofservice").value = "";
                                document.getElementById("txttotalnumber").value = "";
                                document.getElementById("txtdutiessumarries").value = "";
                            });
                            ApplicantEmploymentDetails.init();
                            $('#edit_EmploymentDetails').modal('hide');
                            break;
                        case "missingfield":
                            Swal.fire
                          ({
                              title: "Missing Mandatory Fields!!!",
                              text: "Kindly fill all the fields before you save the details." + " " + registerstatus[1],
                              type: "error"
                          }).then(() => {
                              $("#employmentdetailsfeedback").css("display", "block");
                              $("#employmentdetailsfeedback").css("color", "red");
                              $('#employmentdetailsfeedback').addClass('alert alert-danger');
                              $("#employmentdetailsfeedback").html("Kindly fill all the fields before you save the details" + " " + registerstatus[1]);
                          });
                            break;
                        default:
                            Swal.fire
                            ({
                                title: "Employment Details  Error!!!",
                                text: "Your Employment Details could not been successfully Saved" + " " + registerstatus[1],
                                type: "error"
                            }).then(() => {
                                $("#employmentdetailsfeedback").css("display", "block");
                                $("#employmentdetailsfeedback").css("color", "red");
                                $('#employmentdetailsfeedback').addClass('alert alert-danger');
                                $("#employmentdetailsfeedback").html("Your Employment Details  could not been successfully Saved" + " " + registerstatus[1]);
                            });
                            break;
                    }
                }
                );
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Professional Qualifications Cancelled',
                    'You cancelled your Professional Qualifications Registration submission details!',
                    'error'
                );
            }
        });

    });
    $(".btn_job_employmentDetailsRegistration").click(function () {
        var data = {
            "EmployerName": $("#jobtxtemployerName").val(),
            "Designation": $("#jobtxtjobTitle").val(),
            "StartDate": $("#jobtxtemploymentstartdate").val(),
            "EndDate": $("#jobtxtemploymentEndDate").val(),
            "TermsofService": $("#jobtxttermsofservice").val(),
            "TotalYears": $("#jobtxttotalnumber").val(),
            "SummaryDetails": $("#jobtxtdutiessumarries").val(),
        }
        Swal.fire({
            title: "Confirm Employment Details Registration?",
            text: "Are you sure you would like to proceed with submission?",
            type: "warning",
            showCancelButton: true,
            closeOnConfirm: true,
            confirmButtonText: "Yes, Proceed!",
            confirmButtonClass: "btn-success",
            confirmButtonColor: "#008000",
            position: "center"
        }).then((result) => {
            if (result.value) {
                $.ajax({
                    url: "/Home/CandidateApplicationWorkWxperience",
                    type: "POST",
                    data: JSON.stringify(data),
                    contentType: "application/json",
                    cache: false,
                    processData: false
                }).done(function (status) {
                    var registerstatus = status.split('*');
                    status = registerstatus[0];
                    switch (status) {
                        case "success":
                            Swal.fire
                            ({
                                title: "Employment Details Submitted!",
                                text: registerstatus[1],
                                type: "success"
                            }).then(() => {
                                $("#employmentdetailsfeedback").css("display", "block");
                                $("#employmentdetailsfeedback").css("color", "green");
                                $('#employmentdetailsfeedback').attr("class", "alert alert-success");
                                $("#employmentdetailsfeedback").html("Your Employment Details Information have been successfully submitted" + "  " + registerstatus[1]);
                                $("#employmentdetailsfeedback").css("display", "block");
                                $("#employmentdetailsfeedback").css("color", "green");
                                $("#employmentdetailsfeedback").html("Your Employment Details have been successfully submitted." + "  " + registerstatus[1]);
                                $("#preqappl_form").reset();
                                windows
                            });
                            JobApplicationEmploymentDetails.init();
                            $("button#nextBtn").css("display", "block");
                            break;
                        case "missingfield":
                            Swal.fire
                          ({
                              title: "Missing Mandatory Fields!!!",
                              text: "Kindly fill all the fields before you save the details." + " " + registerstatus[1],
                              type: "error"
                          }).then(() => {
                              $("#feedback").css("display", "block");
                              $("#feedback").css("color", "red");
                              $('#feedback').addClass('alert alert-danger');
                              $("#feedback").html("Kindly fill all the fields before you save the details" + " " + registerstatus[1]);
                          });
                            break;
                        default:
                            Swal.fire
                            ({
                                title: "Employment Details  Error!!!",
                                text: "Your Employment Details could not been successfully submitted" + " " + registerstatus[1],
                                type: "error"
                            }).then(() => {
                                $("#employmentdetailsfeedback").css("display", "block");
                                $("#employmentdetailsfeedback").css("color", "red");
                                $('#employmentdetailsfeedback').addClass('alert alert-danger');
                                $("#employmentdetailsfeedback").html("Your Employment Details  could not been successfully submitted" + " " + registerstatus[1]);
                            });
                            break;
                    }
                }
                );
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Professional Qualifications Cancelled',
                    'You cancelled your Professional Qualifications Registration submission details!',
                    'error'
                );
            }
        });

    });
    var JobApplicationEmploymentDetails = function () {
        var JobEmploymentDetails = function () {
            var JobEmploymentDetailsTable = $("#tbl_Jobapplicationemployment_details"),
                l = JobEmploymentDetailsTable.dataTable({
                    lengthMenu: [[5, 15, 20, -1], [5, 15, 20, "All"]],
                    pageLength: 5,
                    language: { lengthMenu: " _MENU_ records" },
                    columnDefs: [
                        {
                            orderable: !0,
                            defaultContent: "-",
                            targets: "_all"
                        },
                        {
                            searchable: !0,
                            targets: "_all"
                        }
                    ],
                    order: [
                        [0, "asc"]
                    ],

                    bDestroy: true,
                    info: false,
                    processing: true,
                    retrieve: true
                });
            $.ajaxSetup({
                global: false,
                type: "POST",
                url: "/Home/GetCandidateApplicationworkExperience",
            });
            $.ajax({
                data: ""
            }).done(function (json) {
                l.fnClearTable();
                console.log(JSON.stringify({ vendorTestdata: json }));
                var o = 1;
                for (var i = 0; i < json.length; i++) {
                    l.fnAddData([
                        o++,
                        json[i].EntryNumber,
                        json[i].EmployerName,
                        json[i].Designation,
                        json[i].StartDate,
                        json[i].EndDate,
                        json[i].TermsofService,
                        '<a class="btn btn-success EditEmploymentDetails" id="EditEmploymentDetails"><i class="fa fa-edit m-r-10"></i>Edit</a>',
                        '<a class="btn btn-danger JobDeleteAcademicQualifications1" id="JobDeleteAcademicQualifications1"><i class="fa fa-trash m-r-10">Delete</a>'
                    ]);
                }
            });
            JobEmploymentDetailsTable.on("click",
               ".EditEmploymentDetails",
               function (JobEmploymentDetailsTable) {
                   JobEmploymentDetailsTable.preventDefault();
                   var i = $(this).parents("tr")[0];
                   $("#edit_EmploymentDetails").modal();

               });
            JobEmploymentDetailsTable.on("click",
              ".JobDeleteAcademicQualifications1",
              function (JobEmploymentDetailsTable) {
                  JobEmploymentDetailsTable.preventDefault();
                  var i = $(this).parents("tr")[0];
                  //alert("record to be deleted: " + i.cells[1].innerHTML);
                  Swal.fire({
                      title: "Confirm Deleting Employement Details",
                      text: "Sure you'd like to proceed with deletion?",
                      type: "warning",
                      showCancelButton: true,
                      closeOnConfirm: true,
                      confirmButtonText: "Yes, Delete Details!",
                      confirmButtonClass: "btn-success",
                      confirmButtonColor: "#008000",
                      position: "center"
                  }).then((result) => {
                      if (result.value) {
                          //global loader spinner;
                          $.ajaxSetup({
                              global: false,
                              type: "POST",
                              url: "/Home/JobDeleteEmploymentDetails?EntryNumber=" + i.cells[1].innerHTML
                          });
                          $.ajax({
                              data: '',
                              contentType: "application/json",
                              cache: false,
                              processData: false
                          }).done(function (status) {
                              var registerstatus = status.split('*');
                              status = registerstatus[0];
                              console.log(JSON.stringify(status))
                              switch (status) {
                                  case "success":
                                      Swal.fire
                                      ({
                                          title: "Employment Details Deleted!",
                                          text: "Employment Details Deleted Successfully!",
                                          type: "success"
                                      }).then(() => {
                                          $("#employmentdetailsfeedback").css("display", "block");
                                          $("#employmentdetailsfeedback").css("color", "green");
                                          $('#employmentdetailsfeedback').attr("class", "alert alert-success");
                                          $("#employmentdetailsfeedback").html("Your Employment Details have been successfully Deleted.Kindly Proceed to fill in the rest details!");
                                          $("#employmentdetailsfeedback").css("display", "block");
                                          $("#employmentdetailsfeedback").css("color", "green");
                                          $("#employmentdetailsfeedback").html("Your Employment Details have been successfully Deleted.Kindly Proceed to fill in the rest details!");
                                      });
                                      JobApplicationEmploymentDetails.init();
                                      break;
                                  default:
                                      Swal.fire
                                         ({
                                             title: "Bank Details Deletion Error!!!",
                                             text: status,
                                             type: "error"
                                         }).then(() => {
                                             $("#employmentdetailsfeedback").css("display", "block");
                                             $("#employmentdetailsfeedback").css("color", "red");
                                             $('#employmentdetailsfeedback').addClass('alert alert-danger');
                                             $("#employmentdetailsfeedback").html("Your Employment Details could not be Deleted.KindlyTy Again!");
                                         });
                              }
                          });
                      } else if (result.dismiss === Swal.DismissReason.cancel) {
                          Swal.fire(
                              'Employment Deletion Cancelled',
                              'You cancelled your Employment deletion Request!',
                              'error'
                          );
                      }
                  });

              });
        }
        return {
            init: function () {
                JobEmploymentDetails();
            }
        }
    }();
    //Get All Academic Qualifications 
    var ApplicationEmploymentDetails = function () {
        var EmploymentDetails = function () {
            var EmploymentDetailsTable = $("#tbl_applicationemployment_details"),
                l = EmploymentDetailsTable.dataTable({
                    lengthMenu: [[5, 15, 20, -1], [5, 15, 20, "All"]],
                    pageLength: 5,
                    language: { lengthMenu: " _MENU_ records" },
                    columnDefs: [
                        {
                            orderable: !0,
                            defaultContent: "-",
                            targets: "_all"
                        },
                        {
                            searchable: !0,
                            targets: "_all"
                        }
                    ],
                    order: [
                        [0, "asc"]
                    ],

                    bDestroy: true,
                    info: false,
                    processing: true,
                    retrieve: true
                });
            $.ajaxSetup({
                global: false,
                type: "POST",
                url: "/Home/GetCandidateApplicationworkExperience",
            });
            $.ajax({
                data: ""
            }).done(function (json) {
                l.fnClearTable();
                console.log(JSON.stringify({ vendorTestdata: json }));
                var o = 1;
                for (var i = 0; i < json.length; i++) {
                    l.fnAddData([
                        o++,
                        json[i].EmployerName,
                        json[i].Designation,
                        json[i].StartDate,
                        json[i].EndDate,
                        json[i].TermsofService,
                        '<a class="btn btn-success edit_banks_details" id="edit_banks"><i class="fa fa-edit m-r-10"></i>Edit</a>',
                        '<a class="btn btn-danger delete_bank_details"><i class="fa fa-trash m-r-10">Delete</a>'
                    ]);
                }
            });
            EmploymentDetailsTable.on("click",
               ".edit_banks_details",
               function (EmploymentDetailsTable) {
                   EmploymentDetailsTable.preventDefault();
                   var i = $(this).parents("tr")[0];
                   // alert("record to be deleted: " + i.cells[1].innerHTML);
                   $("#bankcode").val(i.cells[1].innerHTML);
                   $("#bankname").val(i.cells[2].innerHTML);
                   $("#dropdownCountries").val(i.cells[3].innerHTML);
                   $("#bankaccountno").val(i.cells[5].innerHTML);
                   $("#currencyCode").val(i.cells[4].innerHTML);
                   $("#bankbranchno").val(i.cells[5].innerHTML);
                   $("#phonenumber").val("");
                   $("#ddlbankcodes").val(i.cells[6].innerHTML);
                   $("#add_banks").modal();

               });
            EmploymentDetailsTable.on("click",
              ".delete_bank_details",
              function (EmploymentDetailsTable) {
                  EmploymentDetailsTable.preventDefault();
                  var i = $(this).parents("tr")[0];
                  //alert("record to be deleted: " + i.cells[1].innerHTML);
                  Swal.fire({
                      title: "Confirm Deleting Bank",
                      text: "Sure you'd like to proceed with deletion?",
                      type: "warning",
                      showCancelButton: true,
                      closeOnConfirm: true,
                      confirmButtonText: "Yes, Delete Bank!",
                      confirmButtonClass: "btn-success",
                      confirmButtonColor: "#008000",
                      position: "center"
                  }).then((result) => {
                      if (result.value) {
                          //global loader spinner;
                          $.ajaxSetup({
                              global: false,
                              type: "POST",
                              url: "/Home/DeleteBankDetails?bankcode=" + i.cells[1].innerHTML
                          });
                          $.ajax({
                              data: '',
                              contentType: "application/json",
                              cache: false,
                              processData: false
                          }).done(function (status) {
                              var registerstatus = status.split('*');
                              status = registerstatus[0];
                              console.log(JSON.stringify(status))
                              switch (status) {
                                  case "success":
                                      Swal.fire
                                      ({
                                          title: "Bank Details Deleted!",
                                          text: "Bank Details Deleted Successfully!",
                                          type: "success"
                                      }).then(() => {
                                          $("#banksfeedback").css("display", "block");
                                          $("#banksfeedback").css("color", "green");
                                          $('#banksfeedback').attr("class", "alert alert-success");
                                          $("#banksfeedback").html("Your Bank Details have been successfully Deleted.Kindly Proceed to fill in the rest details!");
                                          $("#banksfeedback").css("display", "block");
                                          $("#banksfeedback").css("color", "green");
                                          $("#banksfeedback").html("Your Bank Details have been successfully Deleted.Kindly Proceed to fill in the rest details!");
                                      });
                                      AcademicQualifications.init();
                                      break;
                                  default:
                                      Swal.fire
                                         ({
                                             title: "Bank Details Deletion Error!!!",
                                             text: status,
                                             type: "error"
                                         }).then(() => {
                                             $("#banksfeedback").css("display", "block");
                                             $("#banksfeedback").css("color", "red");
                                             $('#banksfeedback').addClass('alert alert-danger');
                                             $("#banksfeedback").html("Your Banks Details could not be Deleted.KindlyTy Again!");
                                         });
                              }
                          });
                      } else if (result.dismiss === Swal.DismissReason.cancel) {
                          Swal.fire(
                              'Bank Deletion Cancelled',
                              'You cancelled your bank deletion Request!',
                              'error'
                          );
                      }
                  });

              });
        }
        return {
            init: function () {
                EmploymentDetails();
            }
        }
    }();
    //Get All Academic Qualifications 
    var ApplicantEmploymentDetails = function () {
        var EmploymentDetails = function () {
            var EmploymentDetailsTable = $("#tbl_employment_details"),
                l = EmploymentDetailsTable.dataTable({
                    lengthMenu: [[5, 15, 20, -1], [5, 15, 20, "All"]],
                    pageLength: 5,
                    language: { lengthMenu: " _MENU_ records" },
                    columnDefs: [
                        {
                            orderable: !0,
                            defaultContent: "-",
                            targets: "_all"
                        },
                        {
                            searchable: !0,
                            targets: "_all"
                        }
                    ],
                    order: [
                        [0, "asc"]
                    ],

                    bDestroy: true,
                    info: false,
                    processing: true,
                    retrieve: true
                });
            $.ajaxSetup({
                global: false,
                type: "POST",
                url: "/Home/GetApplicantWorkExperience",
            });
            $.ajax({
                data: ""
            }).done(function (json) {
                l.fnClearTable();
                console.log(JSON.stringify({ vendorTestdata: json }));
                var o = 1;
                for (var i = 0; i < json.length; i++) {
                    l.fnAddData([
                        o++,
                        json[i].EntryNumber,
                        json[i].EmployerName,
                        json[i].Designation,
                        json[i].StartDate,
                        json[i].EndDate,
                        json[i].TermsofService,
                        '<a class="btn btn-success EditEmploymentDetails" id="EditEmploymentDetails"><i class="fa fa-edit m-r-10"></i>Edit</a>',
                        '<a class="btn btn-danger DeleteEmployementsDetails1" id="DeleteEmployementsDetails1"><i class="fa fa-trash m-r-10">Delete</a>'
                    ]);
                }
            });
            EmploymentDetailsTable.on("click",
               ".EditEmploymentDetails",
               function (EmploymentDetailsTable) {
                   EmploymentDetailsTable.preventDefault();
                   var i = $(this).parents("tr")[0];
                   $("#edit_EmploymentDetails").modal();
                  

               });
            EmploymentDetailsTable.on("click",
              ".DeleteEmployementsDetails1",
              function (EmploymentDetailsTable) {
                  EmploymentDetailsTable.preventDefault();
                  var i = $(this).parents("tr")[0];
                  //alert("record to be deleted: " + i.cells[1].innerHTML);
                  Swal.fire({
                      title: "Confirm Deleting Employee Details",
                      text: "Sure you'd like to proceed with deletion?",
                      type: "warning",
                      showCancelButton: true,
                      closeOnConfirm: true,
                      confirmButtonText: "Yes, Delete Details!",
                      confirmButtonClass: "btn-success",
                      confirmButtonColor: "#008000",
                      position: "center"
                  }).then((result) => {
                      if (result.value) {
                          $.ajaxSetup({
                              global: false,
                              type: "POST",
                              url: "/Home/DeleteCandidateWorkExperienceDetails?EntryNumber=" + i.cells[1].innerHTML
                          });
                          $.ajax({
                              data: '',
                              contentType: "application/json",
                              cache: false,
                              processData: false
                          }).done(function (status) {
                              var registerstatus = status.split('*');
                              status = registerstatus[0];
                              console.log(JSON.stringify(status))
                              switch (status) {
                                  case "success":
                                      Swal.fire
                                      ({
                                          title: "Employment Details Deleted!",
                                          text: "Employment Deleted Successfully!",
                                          type: "success"
                                      }).then(() => {
                                          $("#employmentdetailsfeedback").css("display", "block");
                                          $("#employmentdetailsfeedback").css("color", "green");
                                          $('#employmentdetailsfeedback').attr("class", "alert alert-success");
                                          $("#employmentdetailsfeedback").html("Your Employment Details have been successfully Deleted.Kindly Proceed to fill in the rest details!");
                                          $("#employmentdetailsfeedback").css("display", "block");
                                          $("#employmentdetailsfeedback").css("color", "green");
                                          $("#employmentdetailsfeedback").html("Your Employment Details have been successfully Deleted.Kindly Proceed to fill in the rest details!");
                                      });
                                      ApplicantEmploymentDetails.init();
                                      break;
                                  default:
                                      Swal.fire
                                         ({
                                             title: "Employment Details Deletion Error!!!",
                                             text: status,
                                             type: "error"
                                         }).then(() => {
                                             $("#employmentdetailsfeedback").css("display", "block");
                                             $("#employmentdetailsfeedback").css("color", "red");
                                             $('#employmentdetailsfeedback').addClass('alert alert-danger');
                                             $("#employmentdetailsfeedback").html("Your Employment Details could not be Deleted.KindlyTy Again!");
                                         });
                              }
                          });
                      } else if (result.dismiss === Swal.DismissReason.cancel) {
                          Swal.fire(
                              'Employment Deletion Cancelled',
                              'You cancelled your Employment deletion Request!',
                              'error'
                          );
                      }
                  });

              });
        }
        return {
            init: function () {
                EmploymentDetails();
            }
        }
    }();
})