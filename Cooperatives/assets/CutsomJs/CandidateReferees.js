$(document).ready(function () {
    $(".btn_refereeDetails").click(function () {
        var data = {
            "Refereetype": $("#txtrefereetype").val(),
            "Title": $("#refereetxttitle").val(),
            "SurName": $("#refereetxtsurname").val(),
            "FirstName": $("#refereetxtrefereefname").val(),
            "OtherNames": $("#refereetxtotherNames").val(),
            "Designations": $("#refereetxtcontactperson").val(),
            "institution": $("#refereeinstitution").val(),
            "EmailAddress": $("#refereetxtEmailAddress").val(),
            "PhoneNumber": $("#refereetxtphonenumber").val(),
            "Relationship": $("#refereetxtRelationships").val(),
            "Country": $("#refereetxtnationality").val(),
            "knownyears": $("#refereepreiodofknowing").val(),
        }
        Swal.fire({
            title: "Confirm Referees Details Submission?",
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
                    url: "../Home/CandidateReferees",
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
                                title: "Referees Details Saved!",
                                text: registerstatus[1],
                                type: "success"
                            }).then(() => {
                                $("#refereedetailsfeedback").css("display", "block");
                                $("#refereedetailsfeedback").css("color", "green");
                                $('#refereedetailsfeedback').attr("class", "alert alert-success");
                                $("#refereedetailsfeedback").html("Your Referees Details Information have been successfully saved" + "  " + registerstatus[1]);
                                $("#refereedetailsfeedback").css("display", "block");
                                $("#refereedetailsfeedback").css("color", "green");
                                $("#refereedetailsfeedback").html("Your Referees Details have been successfully saved." + "  " + registerstatus[1]);
                                $("#preqappl_form").reset();
                            });
                            ApplicantRefereeDetails.init();
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
                                title: "Referees Details  Error!!!",
                                text: "Your Referees Details could not been successfully submitted" + " " + registerstatus[1],
                                type: "error"
                            }).then(() => {
                                $("#refereedetailsfeedback").css("display", "block");
                                $("#refereedetailsfeedback").css("color", "red");
                                $('#refereedetailsfeedback').addClass('alert alert-danger');
                                $("#refereedetailsfeedback").html("Your Referees Details  could not been successfully submitted" + " " + registerstatus[1]);
                            });
                            break;
                    }
                }
                );
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Referees Details Cancelled',
                    'You cancelled your Referees Registration submission details!',
                    'error'
                );
            }
        });

    });

    $(".btn_job_refereeDetails").click(function () {
        var data = {
            "Refereetype": $("#jobtxtrefereetype").val(),
            "Title": $("#jobrefereetxttitle").val(),
            "SurName": $("#jobrefereetxtsurname").val(),
            "FirstName": $("#jobrefereetxtrefereefname").val(),
            "OtherNames": $("#jobrefereetxtotherNames").val(),
            "Designations": $("#jobrefereetxtcontactperson").val(),
            "institution": $("#jobrefereeinstitution").val(),
            "EmailAddress": $("#jobrefereetxtEmailAddress").val(),
            "PhoneNumber": $("#jobrefereetxtphonenumber").val(),
            "Relationship": $("#jobrefereetxtRelationships").val(),
            "Country": $("#refereetxtnationality").val(),
            "knownyears": $("#jobrefereepreiodofknowing").val(),
        }
        Swal.fire({
            title: "Confirm Referees Details Submission?",
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
                    url: "/Home/AppplicationCandidateReferees",
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
                                title: "Referees Details Submitted!",
                                text: registerstatus[1],
                                type: "success"
                            }).then(() => {
                                $("#refereedetailsfeedback").css("display", "block");
                                $("#refereedetailsfeedback").css("color", "green");
                                $('#refereedetailsfeedback').attr("class", "alert alert-success");
                                $("#refereedetailsfeedback").html("Your Referees Details Information have been successfully submitted" + "  " + registerstatus[1]);
                                $("#refereedetailsfeedback").css("display", "block");
                                $("#refereedetailsfeedback").css("color", "green");
                                $("#refereedetailsfeedback").html("Your Referees Details have been successfully submitted." + "  " + registerstatus[1]);
                                $("#preqappl_form").reset();
                                windows
                            });
                            DeleteJobApplicationReferees.init();
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
                                title: "Referees Details  Error!!!",
                                text: "Your Referees Details could not been successfully submitted" + " " + registerstatus[1],
                                type: "error"
                            }).then(() => {
                                $("#refereedetailsfeedback").css("display", "block");
                                $("#refereedetailsfeedback").css("color", "red");
                                $('#refereedetailsfeedback').addClass('alert alert-danger');
                                $("#refereedetailsfeedback").html("Your Referees Details  could not been successfully submitted" + " " + registerstatus[1]);
                            });
                            break;
                    }
                }
                );
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Referees Details Cancelled',
                    'You cancelled your Referees Registration submission details!',
                    'error'
                );
            }
        });

    });
    //Get All Referree
    var DeleteJobApplicationReferees = function () {
        var JobApplicationReferrees = function () {
            var JobApplicationReferreesTable = $("#tbl_jobapplication_referee"),
                l = JobApplicationReferreesTable.dataTable({
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
                url: "/Home/GetApplicationReferees",
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
                        json[i].FirstName,
                        json[i].EmailAddress,
                        json[i].institution,
                        json[i].Relationship,
                        json[i].Country,
                        '<a class="btn btn-success EditJobRefreeDetails" id="EditJobRefreeDetails"><i class="fa fa-edit m-r-10"></i>Edit</a>',
                        '<a class="btn btn-danger JobDeleteReferree1" id="JobDeleteReferree1"><i class="fa fa-trash m-r-10">Delete</a>'
                    ]);
                }
            });
            JobApplicationReferreesTable.on("click",
               ".EditJobRefreeDetails",
               function (JobApplicationReferreesTable) {
                   JobApplicationReferreesTable.preventDefault();
                   var i = $(this).parents("tr")[0];
                   // alert("record to be deleted: " + i.cells[1].innerHTML);

               });
            JobApplicationReferreesTable.on("click",
              ".JobDeleteReferree1",
              function (JobApplicationReferreesTable) {
                  JobApplicationReferreesTable.preventDefault();
                  var i = $(this).parents("tr")[0];
                  //alert("record to be deleted: " + i.cells[1].innerHTML);
                  Swal.fire({
                      title: "Confirm Deleting Referree Details",
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
                              url: "/Home/JobApplicantReferreeDetails?EntryNumber=" + i.cells[1].innerHTML
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
                                          title: "Referree Details Deleted!",
                                          text: "Referree Details Deleted Successfully!",
                                          type: "success"
                                      }).then(() => {
                                          $("#refereedetailsfeedback").css("display", "block");
                                          $("#refereedetailsfeedback").css("color", "green");
                                          $('#refereedetailsfeedback').attr("class", "alert alert-success");
                                          $("#refereedetailsfeedback").html("Your Referree Details have been successfully Deleted.Kindly Proceed to fill in the rest details!");
                                          $("#refereedetailsfeedback").css("display", "block");
                                          $("#refereedetailsfeedback").css("color", "green");
                                          $("#refereedetailsfeedback").html("Your Referree Details have been successfully Deleted.Kindly Proceed to fill in the rest details!");
                                      });
                                      JobApplicationEmploymentDetails.init();
                                      break;
                                  default:
                                      Swal.fire
                                         ({
                                             title: "Referree Details Deletion Error!!!",
                                             text: status,
                                             type: "error"
                                         }).then(() => {
                                             $("#refereedetailsfeedback").css("display", "block");
                                             $("#refereedetailsfeedback").css("color", "red");
                                             $('#refereedetailsfeedback').addClass('alert alert-danger');
                                             $("#refereedetailsfeedback").html("Your Referree Details could not be Deleted.KindlyTy Again!");
                                         });
                              }
                          });
                      } else if (result.dismiss === Swal.DismissReason.cancel) {
                          Swal.fire(
                              'Referree Deletion Cancelled',
                              'You cancelled your Referree deletion Request!',
                              'error'
                          );
                      }
                  });

              });
        }
        return {
            init: function () {
                JobApplicationReferrees();
            }
        }
    }();
    //Get All Academic Qualifications 
    var ApplicationRefereeDetails = function () {
        var ApplicantReferee = function () {
            var ApplicantRefereeTable = $("#tbl_application_referee"),
                l = ApplicantRefereeTable.dataTable({
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
                url: "/Home/GetApplicationReferees",
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
                        json[i].FirstName,
                        json[i].EmailAddress,
                        json[i].institution,
                        json[i].Relationship,
                        json[i].Country,
                        '<a class="btn btn-success edit_banks_details" id="edit_banks"><i class="fa fa-edit m-r-10"></i>Edit</a>',
                        '<a class="btn btn-danger delete_bank_details"><i class="fa fa-trash m-r-10">Delete</a>'
                    ]);
                }
            });
            ApplicantRefereeTable.on("click",
               ".edit_banks_details",
               function (ApplicantRefereeTable) {
                   ApplicantRefereeTable.preventDefault();
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
            ApplicantRefereeTable.on("click",
              ".delete_bank_details",
              function (ApplicantRefereeTable) {
                  ApplicantRefereeTable.preventDefault();
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
                ApplicantReferee();
            }
        }
    }();
    //Get All Academic Qualifications 
    var ApplicantRefereeDetails = function () {
        var ApplicantReferee = function () {
            var ApplicantRefereeTable = $("#tbl_candidate_referee"),
                l = ApplicantRefereeTable.dataTable({
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
                url: "/Home/GetApplicantReferees",
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
                        json[i].FirstName,
                        json[i].EmailAddress,
                        json[i].institution,
                        json[i].Relationship,
                        json[i].Country,
                        '<a class="btn btn-success EditRefeereeDetails" id="EditRefeereeDetails"><i class="fa fa-edit m-r-10"></i>Edit</a>',
                        '<a class="btn btn-danger DeleteRefree1" id="DeleteRefree1"><i class="fa fa-trash m-r-10">Delete</a>'
                    ]);
                }
            });
            ApplicantRefereeTable.on("click",
               ".EditRefeereeDetails",
               function (ApplicantRefereeTable) {
                   ApplicantRefereeTable.preventDefault();
                   var i = $(this).parents("tr")[0];
                   $("#edittxtrefereetype").val(i.cells[2].innerHTML);
                   $("#editrefereetxttitle").val("");
                   $("#editrefereetxtsurname").val(i.cells[3].innerHTML);
                   $("#editrefereetxtrefereefname").val(i.cells[4].innerHTML);
                   $("#editrefereetxtotherNames").val(i.cells[5].innerHTML);
                   $("#editrefereetxtcontactperson").val(i.cells[4].innerHTML);
                   $("#editrefereeinstitution").val(i.cells[7].innerHTML);
                   $("#editrefereetxtEmailAddress").val(i.cells[6].innerHTML);
                   $("#editrefereetxtphonenumber").val("");
                   $("#editrefereepreiodofknowing").val("");
                   $("#edit_referees").modal();

               });
            ApplicantRefereeTable.on("click",
              ".DeleteRefree1",
              function (ApplicantRefereeTable) {
                  ApplicantRefereeTable.preventDefault();
                  var i = $(this).parents("tr")[0];
                  Swal.fire({
                      title: "Confirm Deleting Referee Details ",
                      text: "Are you sure you'd like to proceed with deletion?",
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
                              url: "/Home/DeleteCandidateRefreeDetails?EntryNumber=" + i.cells[1].innerHTML
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
                                          title: "Referee Details Deleted!",
                                          text: "Referee Details Deleted Successfully!",
                                          type: "success"
                                      }).then(() => {
                                          $("#banksfeedback").css("display", "block");
                                          $("#banksfeedback").css("color", "green");
                                          $('#banksfeedback').attr("class", "alert alert-success");
                                          $("#banksfeedback").html("Your Referee Details  have been successfully Deleted.Kindly Proceed to fill in the rest details!");
                                          $("#banksfeedback").css("display", "block");
                                          $("#banksfeedback").css("color", "green");
                                          $("#banksfeedback").html("Your Referee Details  have been successfully Deleted.Kindly Proceed to fill in the rest details!");
                                      });
                                      ApplicantRefereeDetails.init();
                                      break;
                                  default:
                                      Swal.fire
                                         ({
                                             title: "Referee Details Deletion Error!!!",
                                             text: status,
                                             type: "error"
                                         }).then(() => {
                                             $("#banksfeedback").css("display", "block");
                                             $("#banksfeedback").css("color", "red");
                                             $('#banksfeedback').addClass('alert alert-danger');
                                             $("#banksfeedback").html("Your Referee Details could not be Deleted.KindlyTy Again!");
                                         });
                              }
                          });
                      } else if (result.dismiss === Swal.DismissReason.cancel) {
                          Swal.fire(
                              'Referee Details Deletion Cancelled',
                              'You Cancelled your Referee Details  Deletion Request!',
                              'error'
                          );
                      }
                  });

              });
        }
        return {
            init: function () {
                ApplicantReferee();
            }
        }
    }();
})