$(document).ready(function () {
    $(".btn_proffessionalBodiesRegistration").click(function () {
        var data = {
            "ProffessionalBody": $("#proffessionalbody").val(),
            "RegistrationNo": $("#registrationNumber").val(),
            "MembershipType": $("#txtmebershiptype").val(),
            "MembershipDateRenewal": $("#txtfirstdateofrenewal").val(),
            "licensingDateRenewal": $("#txtfinaldateofrenewal").val(),
            "LicensingNumber": $("#licensingnumber").val(),
        }
        Swal.fire({
            title: "Confirm Registration and Membership to Professional Bodies?",
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
                    url: "/Home/CandidateProffessionalBodiesRegistration",
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
                                title: "Registration and Membership to Professional Bodies Submitted!",
                                text: registerstatus[1],
                                type: "success"
                            }).then(() => {
                                $("#proffessionalbodiesfeedback").css("display", "block");
                                $("#proffessionalbodiesfeedback").css("color", "green");
                                $('#proffessionalbodiesfeedback').attr("class", "alert alert-success");
                                $("#proffessionalbodiesfeedback").html("Your Registration and Membership to Professional Bodies Information have been successfully saved" + "  " + registerstatus[1]);
                                $("#proffessionalbodiesfeedback").css("display", "block");
                                $("#proffessionalbodiesfeedback").css("color", "green");
                                $("#proffessionalbodiesfeedback").html("Your Registration and Membership to Professional Bodies  have been successfully saved." + "  " + registerstatus[1]);
                                $("#preqappl_form").reset();
                            });
                            ApplicantProffesionalQualificationsBodies.init();
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
                                title: "Registration and Membership to Professional Bodies  Error!!!",
                                text: "Your Registration and Membership to Professional Bodies could not been successfully saved" + " " + registerstatus[1],
                                type: "error"
                            }).then(() => {
                                $("#proffessionalbodiesfeedback").css("display", "block");
                                $("#proffessionalbodiesfeedback").css("color", "red");
                                $('#proffessionalbodiesfeedback').addClass('alert alert-danger');
                                $("#proffessionalbodiesfeedback").html("Your Registration and Membership to Professional Bodies could not been successfully saved" + " " + registerstatus[1]);
                            });
                            break;
                    }
                }
                );
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Registration and Membership to Professional Bodies Cancelled',
                    'You Cancelled your Registration and Membership to Professional Bodies submission details!',
                    'error'
                );
            }
        });

    });
    $(".btn_editProffessionalBodiesqualifications").click(function () {
        var data = {
            "EntryNumber": $("#professionalbodiesentryNumber").val(),
            "ProffessionalBody": $("#editproffessionalbody").val(),
            "RegistrationNo": $("#editregistrationNumber").val(),
            "MembershipType": $("#edittxtmebershiptype").val(),
            "MembershipDateRenewal": $("#edittxtfirstdateofrenewal").val(),
            "licensingDateRenewal": $("#edittxtfinaldateofrenewal").val(),
            "LicensingNumber": $("#editlicensingnumber").val(),
        }
        Swal.fire({
            title: "Confirm Registration and Membership to Professional Bodies?",
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
                    url: "/Home/UpdateCandidateProffessionalBodiesRegistration",
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
                                title: "Registration and Membership to Professional Bodies Submitted!",
                                text: registerstatus[1],
                                type: "success"
                            }).then(() => {
                                $("#proffessionalbodiesfeedback").css("display", "block");
                                $("#proffessionalbodiesfeedback").css("color", "green");
                                $('#proffessionalbodiesfeedback').attr("class", "alert alert-success");
                                $("#proffessionalbodiesfeedback").html("Your Registration and Membership to Professional Bodies Information have been successfully saved" + "  " + registerstatus[1]);
                                $("#proffessionalbodiesfeedback").css("display", "block");
                                $("#proffessionalbodiesfeedback").css("color", "green");
                                $("#proffessionalbodiesfeedback").html("Your Registration and Membership to Professional Bodies  have been successfully saved." + "  " + registerstatus[1]);
                                $("#preqappl_form").reset();
                            });
                            ApplicantProffesionalQualificationsBodies.init();
                            $('#edit_proffessionalbodiesQualifications').modal('hide');
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
                                title: "Registration and Membership to Professional Bodies  Error!!!",
                                text: "Your Registration and Membership to Professional Bodies could not been successfully saved" + " " + registerstatus[1],
                                type: "error"
                            }).then(() => {
                                $("#proffessionalbodiesfeedback").css("display", "block");
                                $("#proffessionalbodiesfeedback").css("color", "red");
                                $('#proffessionalbodiesfeedback').addClass('alert alert-danger');
                                $("#proffessionalbodiesfeedback").html("Your Registration and Membership to Professional Bodies could not been successfully saved" + " " + registerstatus[1]);
                            });
                            break;
                    }
                }
                );
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Registration and Membership to Professional Bodies Cancelled',
                    'You Cancelled your Registration and Membership to Professional Bodies submission details!',
                    'error'
                );
            }
        });

    });
    //Get All Proffesional Qualifications Bodies 
    var ApplicantProffesionalQualificationsBodies = function () {
        var ProffesionalQualificationsBodies = function () {
            var ProffesionalQualificationsBodiesTable = $("#tbl_proffessionalbody"),
                l = ProffesionalQualificationsBodiesTable.dataTable({
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
                url: "/Home/GetApplicantProffesionalBodies",
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
                        json[i].ProffessionalBody,
                        json[i].RegistrationNo,
                        json[i].MembershipType,
                        json[i].MembershipDateRenewal,
                        json[i].LicensingNumber,
                        '<a class="btn btn-success EditProffessionalBodiesDetails" id="EditProffessionalBodiesDetails"><i class="fa fa-edit m-r-10"></i>Edit</a>',
                        '<a class="btn btn-danger DeleteProffessionalBodyQualifications1" id="DeleteProffessionalBodyQualifications1"><i class="fa fa-trash m-r-10">Delete</a>'
                    ]);
                }
            });
            ProffesionalQualificationsBodiesTable.on("click",
               ".EditProffessionalBodiesDetails",
               function (ProffesionalQualificationsBodiesTable) {
                   ProffesionalQualificationsBodiesTable.preventDefault();
                   var i = $(this).parents("tr")[0];                   
                   $("#professionalbodiesentryNumber").val(i.cells[1].innerHTML);
                   $("#editproffessionalbody").val(i.cells[2].innerHTML);
                   $("#editregistrationNumber").val(i.cells[3].innerHTML);
                   $("#edittxtmebershiptype").val(i.cells[4].innerHTML);
                   $("#edittxtfirstdateofrenewal").val(i.cells[5].innerHTML);
                   $("#editlicensingnumber").val(i.cells[6].innerHTML);
                   $("#edit_proffessionalbodiesQualifications").modal();

               });
            ProffesionalQualificationsBodiesTable.on("click",
              ".DeleteProffessionalBodyQualifications1",
              function (ProffesionalQualificationsBodiesTable) {
                  ProffesionalQualificationsBodiesTable.preventDefault();
                  var i = $(this).parents("tr")[0];
                  Swal.fire({
                      title: "Confirm Deleting Proffesional Qualifications",
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
                              url: "/Home/DeleteProffesionalQualificationBodiesDetails?EntryNumber=" + i.cells[1].innerHTML
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
                                          title: "Proffesional Body Details Deleted!",
                                          text: "Proffesional Body Details Deleted Successfully!",
                                          type: "success"
                                      }).then(() => {
                                          $("#proffessionalbodiesfeedback").css("display", "block");
                                          $("#proffessionalbodiesfeedback").css("color", "green");
                                          $('#proffessionalbodiesfeedback').attr("class", "alert alert-success");
                                          $("#proffessionalbodiesfeedback").html("Your Proffesional Body Details have been successfully Deleted.Kindly Proceed to fill in the rest details!");
                                          $("#proffessionalbodiesfeedback").css("display", "block");
                                          $("#proffessionalbodiesfeedback").css("color", "green");
                                          $("#proffessionalbodiesfeedback").html("Your Proffesional Body Details have been successfully Deleted.Kindly Proceed to fill in the rest details!");
                                      });
                                      ApplicantProffesionalQualificationsBodies.init();
                                      break;
                                  default:
                                      Swal.fire
                                         ({
                                             title: "Proffesional Body Details Deletion Error!!!",
                                             text: status,
                                             type: "error"
                                         }).then(() => {
                                             $("#proffessionalbodiesfeedback").css("display", "block");
                                             $("#proffessionalbodiesfeedback").css("color", "red");
                                             $('#proffessionalbodiesfeedback').addClass('alert alert-danger');
                                             $("#proffessionalbodiesfeedback").html("Your Proffesional Body Details could not be Deleted.KindlyTy Again!");
                                         });
                              }
                          });
                      } else if (result.dismiss === Swal.DismissReason.cancel) {
                          Swal.fire(
                              'Proffesional Body Deletion Cancelled',
                              'You Cancelled your Proffesional Body Deletion Request!',
                              'error'
                          );
                      }
                  });

              });
        }
        return {
            init: function () {
                ProffesionalQualificationsBodies();
            }
        }
    }();
    $(".btn_job_proffessionalBodiesRegistration").click(function () {
        var data = {
            "ProffessionalBody": $("#jobproffessionalbody").val(),
            "RegistrationNo": $("#jobregistrationNumber").val(),
            "MembershipType": $("#jobtxtmebershiptype").val(),
            "MembershipDateRenewal": $("#jobtxtfirstdateofrenewal").val(),
            "licensingDateRenewal": $("#jobtxtfinaldateofrenewal").val(),
            "LicensingNumber": $("#joblicensingnumber").val(),
        }
        Swal.fire({
            title: "Confirm Registration and Membership to Professional Bodies?",
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
                    url: "/Home/CandidateApplicationProffessionalBodiesRegistration",
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
                                title: "Registration and Membership to Professional Bodies Submitted!",
                                text: registerstatus[1],
                                type: "success"
                            }).then(() => {
                                $("#proffessionalbodiesfeedback").css("display", "block");
                                $("#proffessionalbodiesfeedback").css("color", "green");
                                $('#proffessionalbodiesfeedback').attr("class", "alert alert-success");
                                $("#proffessionalbodiesfeedback").html("Your Registration and Membership to Professional Bodies Information have been successfully submitted" + "  " + registerstatus[1]);
                                $("#proffessionalbodiesfeedback").css("display", "block");
                                $("#proffessionalbodiesfeedback").css("color", "green");
                                $("#proffessionalbodiesfeedback").html("Your Registration and Membership to Professional Bodies  have been successfully submitted." + "  " + registerstatus[1]);
                                $("#preqappl_form").reset();
                                windows
                            });
                            JobApplicantProffesionalQualificationsBodies.init();
                            $("button#nextBtn").css("display", "block");
                            break;
                        default:
                            Swal.fire
                            ({
                                title: "Registration and Membership to Professional Bodies  Error!!!",
                                text: "Your Registration and Membership to Professional Bodies could not been successfully submitted" + " " + registerstatus[1],
                                type: "error"
                            }).then(() => {
                                $("#proffessionalbodiesfeedback").css("display", "block");
                                $("#proffessionalbodiesfeedback").css("color", "red");
                                $('#proffessionalbodiesfeedback').addClass('alert alert-danger');
                                $("#proffessionalbodiesfeedback").html("Your Registration and Membership to Professional Bodies could not been successfully submitted" + " " + registerstatus[1]);
                            });
                            break;
                    }
                }
                );
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Registration and Membership to Professional Bodies Cancelled',
                    'You Cancelled your Registration and Membership to Professional Bodies submission details!',
                    'error'
                );
            }
        });

    });
    var JobApplicantProffesionalQualificationsBodies = function () {
        var JobProffesionalQualificationsBodies = function () {
            var JobProffesionalQualificationsBodiesTable = $("#tbl_jobapplication_proffessionalbody"),
                l = JobProffesionalQualificationsBodiesTable.dataTable({
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
                url: "/Home/GetApplicationProffesionalBodies",
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
                        json[i].ProffessionalBody,
                        json[i].RegistrationNo,
                        json[i].MembershipType,
                        json[i].MembershipDateRenewal,
                        json[i].LicensingNumber,
                        '<a class="btn btn-success JobEditProffessionalBodiesDetails" id="JobEditProffessionalBodiesDetails"><i class="fa fa-edit m-r-10"></i>Edit</a>',
                        '<a class="btn btn-danger JobDeleteProffessionalBodyQualifications1" id="JobDeleteProffessionalBodyQualifications1"><i class="fa fa-trash m-r-10">Delete</a>'
                    ]);
                }
            });
            JobProffesionalQualificationsBodiesTable.on("click",
               ".JobEditProffessionalBodiesDetails",
               function (JobProffesionalQualificationsBodiesTable) {
                   JobProffesionalQualificationsBodiesTable.preventDefault();
                   var i = $(this).parents("tr")[0];
                   // alert("record to be deleted: " + i.cells[1].innerHTML);
                   //$("#editproqualifications").val(i.cells[0].innerHTML);
                   //$("#editprofessionaltxtinstitution").val(i.cells[2].innerHTML);
                   //$("#editproqualificationTitle").val(i.cells[3].innerHTML);
                   //$("#editprogattainedscore").val(i.cells[5].innerHTML);
                   //$("#edittxtattainedscore").val(i.cells[4].innerHTML);
                   //$("#editprogcompletionyear").val(i.cells[5].innerHTML);
                   //$("#editprogenddate").val("");
                   //$("#edit_professionalQualifications").modal();

               });
            JobProffesionalQualificationsBodiesTable.on("click",
              ".JobDeleteProffessionalBodyQualifications1",
              function (JobProffesionalQualificationsBodiesTable) {
                  JobProffesionalQualificationsBodiesTable.preventDefault();
                  var i = $(this).parents("tr")[0];
                  Swal.fire({
                      title: "Confirm Deleting Proffesional Qualifications",
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
                              url: "/Home/JobDeleteProffesionalQualificationBodiesDetails?EntryNumber=" + i.cells[1].innerHTML
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
                                          title: "Proffesional Body Details Deleted!",
                                          text: "Proffesional Body Details Deleted Successfully!",
                                          type: "success"
                                      }).then(() => {
                                          $("#proffessionalbodiesfeedback").css("display", "block");
                                          $("#proffessionalbodiesfeedback").css("color", "green");
                                          $('#proffessionalbodiesfeedback').attr("class", "alert alert-success");
                                          $("#proffessionalbodiesfeedback").html("Your Proffesional Body Details have been successfully Deleted.Kindly Proceed to fill in the rest details!");
                                          $("#proffessionalbodiesfeedback").css("display", "block");
                                          $("#proffessionalbodiesfeedback").css("color", "green");
                                          $("#proffessionalbodiesfeedback").html("Your Proffesional Body Details have been successfully Deleted.Kindly Proceed to fill in the rest details!");
                                      });
                                      JobApplicantProffesionalQualificationsBodies.init();
                                      break;
                                  default:
                                      Swal.fire
                                         ({
                                             title: "Proffesional Body Details Deletion Error!!!",
                                             text: status,
                                             type: "error"
                                         }).then(() => {
                                             $("#proffessionalbodiesfeedback").css("display", "block");
                                             $("#proffessionalbodiesfeedback").css("color", "red");
                                             $('#proffessionalbodiesfeedback').addClass('alert alert-danger');
                                             $("#proffessionalbodiesfeedback").html("Your Proffesional Body Details could not be Deleted.KindlyTy Again!");
                                         });
                              }
                          });
                      } else if (result.dismiss === Swal.DismissReason.cancel) {
                          Swal.fire(
                              'Proffesional Body Deletion Cancelled',
                              'You Cancelled your Proffesional Body Deletion Request!',
                              'error'
                          );
                      }
                  });

              });
        }
        return {
            init: function () {
                JobProffesionalQualificationsBodies();
            }
        }
    }();
  //Get All Academic Qualifications 
    var ApplicationProffesionalBody = function () {
        var ProffesionalBody = function () {
            var ProffesionalBodyTable = $("#tbl_application_proffessionalbody"),
                l = ProffesionalBodyTable.dataTable({
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
                url: "/Home/GetApplicationProffesionalBodies",
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
                        json[i].ProffessionalBody,
                        json[i].RegistrationNo,
                        json[i].MembershipType,
                        json[i].MembershipDateRenewal,
                        json[i].LicensingNumber,
                        '<a class="btn btn-success edit_banks_details" id="edit_banks"><i class="fa fa-edit m-r-10"></i>Edit</a>',
                        '<a class="btn btn-danger delete_bank_details"><i class="fa fa-trash m-r-10">Delete</a>'
                    ]);
                }
            });
            ProffesionalBodyTable.on("click",
               ".edit_banks_details",
               function (ProffesionalBodyTable) {
                   ProffesionalBodyTable.preventDefault();
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
            ProffesionalBodyTable.on("click",
              ".delete_bank_details",
              function (ProffesionalBodyTable) {
                  ProffesionalBodyTable.preventDefault();
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
                ProffesionalBody();
            }
        }
    }();
    //Get All Academic Qualifications 
    var ApplicantProffesionalBody = function () {
        var ProffesionalBody = function () {
            var ProffesionalBodyTable = $("#tbl_proffessionalbody"),
                l = ProffesionalBodyTable.dataTable({
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
                url: "/Home/GetApplicantProffesionalBodies",
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
                        json[i].ProffessionalBody,
                        json[i].RegistrationNo,
                        json[i].MembershipType,
                        json[i].MembershipDateRenewal,
                        json[i].LicensingNumber,
                        '<a class="btn btn-success edit_banks_details" id="edit_banks"><i class="fa fa-edit m-r-10"></i>Edit</a>',
                        '<a class="btn btn-danger delete_bank_details"><i class="fa fa-trash m-r-10">Delete</a>'
                    ]);
                }
            });
            ProffesionalBodyTable.on("click",
               ".edit_banks_details",
               function (ProffesionalBodyTable) {
                   ProffesionalBodyTable.preventDefault();
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
            ProffesionalBodyTable.on("click",
              ".delete_bank_details",
              function (ProffesionalBodyTable) {
                  ProffesionalBodyTable.preventDefault();
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
                ProffesionalBody();
            }
        }
    }();
})