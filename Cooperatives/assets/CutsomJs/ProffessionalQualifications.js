$(document).ready(function () {
    $(".btn_proffessionalQualifications").click(function () {
        var data = {
            "ProffessionalQualification": $("#proqualifications").val(),
            "Institution": $("#professionaltxtinstitution").val(),
            "Country": $("#protxtnationality").val(),
            "QualificationTitle": $("#proqualificationTitle").val(),
            "Speciality": $("#progtxtspeciality").val(),
            "AttainedScore": $("#progattainedscore").val(),
            "CompletionYear": $("#progcompletionyear").val(),
            "StartDate": $("#progstartdate").val(),
            "EndDate": $("#progenddate").val(),
        }
        Swal.fire({
            title: "Confirm Professional Qualifications Details?",
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
                    url: "/Home/CandidateProffessionalRegistration",
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
                                title: "Professional Qualifications Saved!",
                                text: registerstatus[1],
                                type: "success"
                            }).then(() => {
                                $("#proffessionalfeedback").css("display", "block");
                                $("#proffessionalfeedback").css("color", "green");
                                $('#proffessionalfeedback').attr("class", "alert alert-success");
                                $("#proffessionalfeedback").html("Your Professional Qualifications Information have been successfully submitted" + "  " + registerstatus[1]);
                                $("#proffessionalfeedback").css("display", "block");
                                $("#proffessionalfeedback").css("color", "green");
                                $("#proffessionalfeedback").html("Your Professional Qualifications  have been successfully submitted." + "  " + registerstatus[1]);
                                $("#preqappl_form").reset();
                            });
                            ApplicantProffessionalQualifications.init();
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
                                title: "Professional Qualifications  Error!!!",
                                text: "Your Professional Qualifications could not been successfully submitted" + " " + registerstatus[1],
                                type: "error"
                            }).then(() => {
                                $("#proffessionalfeedback").css("display", "block");
                                $("#proffessionalfeedback").css("color", "red");
                                $('#proffessionalfeedback').addClass('alert alert-danger');
                                $("#proffessionalfeedback").html("Your Professional Qualifications could not been successfully submitted" + " " + registerstatus[1]);
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
    $(".btn_editProffessionalqualifications").click(function () {
        var data = {
            "EntryNo": $("#professionalentryNumber").val(),
            "ProffessionalQualification": $("#editproqualifications").val(),
            "Institution": $("#editprofessionaltxtinstitution").val(),
            "Country": $("#editproqualificationTitle").val(),
            "QualificationTitle": $("#editproqualificationTitle").val(),
            "Speciality": $("#editprogtxtspeciality").val(),
            "AttainedScore": $("#editprogattainedscore").val(),
            "CompletionYear": $("#editprogcompletionyear").val(),
            "StartDate": $("#editprogstartdate").val(),
            "EndDate": $("#editprogenddate").val(),
        }
        Swal.fire({
            title: "Confirm Professional Qualifications Details?",
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
                    url: "/Home/UpdateCandidateProffessionalRegistration",
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
                                title: "Professional Qualifications Saved!",
                                text: registerstatus[1],
                                type: "success"
                            }).then(() => {
                                $("#proffessionalfeedback").css("display", "block");
                                $("#proffessionalfeedback").css("color", "green");
                                $('#proffessionalfeedback').attr("class", "alert alert-success");
                                $("#proffessionalfeedback").html("Your Professional Qualifications Information have been successfully submitted" + "  " + registerstatus[1]);
                                $("#proffessionalfeedback").css("display", "block");
                                $("#proffessionalfeedback").css("color", "green");
                                $("#proffessionalfeedback").html("Your Professional Qualifications  have been successfully submitted." + "  " + registerstatus[1]);
                                $("#preqappl_form").reset();
                            });
                            ApplicantProffessionalQualifications.init();
                            $('#edit_professionalQualifications').modal('hide');
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
                                title: "Professional Qualifications  Error!!!",
                                text: "Your Professional Qualifications could not been successfully submitted" + " " + registerstatus[1],
                                type: "error"
                            }).then(() => {
                                $("#proffessionalfeedback").css("display", "block");
                                $("#proffessionalfeedback").css("color", "red");
                                $('#proffessionalfeedback').addClass('alert alert-danger');
                                $("#proffessionalfeedback").html("Your Professional Qualifications could not been successfully submitted" + " " + registerstatus[1]);
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
    $(".btn_job_proffessionalQualifications").click(function () {
        var data = {
            "ProffessionalQualification": $("#jobproqualifications").val(),
            "Institution": $("#jobprofessionaltxtinstitution").val(),
            "Country": $("#protxtnationality").val(),
            "QualificationTitle": $("#jobproqualificationTitle").val(),
            "Speciality": $("#jobprogtxtspeciality").val(),
            "AttainedScore": $("#jobprogattainedscore").val(),
            "CompletionYear": $("#jobprogcompletionyear").val(),
            "StartDate": $("#jobprogstartdate").val(),
            "EndDate": $("#jobprogenddate").val(),
        }
        Swal.fire({
            title: "Confirm Professional Qualifications Submission?",
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
                    url: "/Home/CandidateApplicationProffessionalRegistration",
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
                                title: "Professional Qualifications Submitted!",
                                text: registerstatus[1],
                                type: "success"
                            }).then(() => {
                                $("#proffessionalfeedback").css("display", "block");
                                $("#proffessionalfeedback").css("color", "green");
                                $('#proffessionalfeedback').attr("class", "alert alert-success");
                                $("#proffessionalfeedback").html("Your Professional Qualifications Information have been successfully Saved" + "  " + registerstatus[1]);
                                $("#proffessionalfeedback").css("display", "block");
                                $("#proffessionalfeedback").css("color", "green");
                                $("#proffessionalfeedback").html("Your Professional Qualifications  have been successfully Saved." + "  " + registerstatus[1]);
                                $("#preqappl_form").reset();
                            });
                            JobApplicantProffesionalQualifications.init();
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
                                title: "Professional Qualifications  Error!!!",
                                text: "Your Professional Qualifications could not been successfully Saved" + " " + registerstatus[1],
                                type: "error"
                            }).then(() => {
                                $("#proffessionalfeedback").css("display", "block");
                                $("#proffessionalfeedback").css("color", "red");
                                $('#proffessionalfeedback').addClass('alert alert-danger');
                                $("#proffessionalfeedback").html("YourProfessional Qualifications could not been successfully Saved" + " " + registerstatus[1]);
                            });
                            break;
                    }
                }
                );
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Professional Qualifications Cancelled',
                    'You cancelled your Professional Qualifications submission details!',
                    'error'
                );
            }
        });

    });
    var JobApplicantProffesionalQualifications = function () {
        var JobProffesionalQualifications = function () {
            var JobProffesionalQualificationsTable = $("#tbl_jobapplication_ProffessionalQualifications"),
                l = JobProffesionalQualificationsTable.dataTable({
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
                url: "/Home/GetApplicationProffessionalQualifications",
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
                        json[i].ProffessionalQualification,
                        json[i].Institution,
                        json[i].Country,
                        json[i].CompletionYear,
                        json[i].Speciality,
                        json[i].AttainedScore,
                        '<a class="btn btn-success EditProffessionalQualifications" id="EditProffessionalQualifications"><i class="fa fa-edit m-r-10"></i>Edit</a>',
                        '<a class="btn btn-danger jobDeleteProffessionalQualifications1" id="jobDeleteProffessionalQualifications1"><i class="fa fa-trash m-r-10">Delete</a>'
                    ]);
                }
            });
            JobProffesionalQualificationsTable.on("click",
               ".EditProffessionalQualifications",
               function (JobProffesionalQualificationsTable) {
                   JobProffesionalQualificationsTable.preventDefault();
                   var i = $(this).parents("tr")[0];


               });
            JobProffesionalQualificationsTable.on("click",
              ".jobDeleteProffessionalQualifications1",
              function (JobProffesionalQualificationsTable) {
                  JobProffesionalQualificationsTable.preventDefault();
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
                              url: "/Home/DeletenJobProffesionalQualificationsDetails?EntryNumber=" + i.cells[1].innerHTML
                          });
                          $.ajax({
                              data: '',
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
                                          title: "Proffesional Qualification Details Deleted!",
                                          text: "Proffesional Qualification Details Deleted Successfully!",
                                          type: "success"
                                      }).then(() => {
                                          $("#proffessionalfeedback").css("display", "block");
                                          $("#proffessionalfeedback").css("color", "green");
                                          $('#proffessionalfeedback').attr("class", "alert alert-success");
                                          $("#proffessionalfeedback").html("Your Proffesional Qualification Details have been successfully Deleted.Kindly Proceed to fill in the rest details!");
                                          $("#proffessionalfeedback").css("display", "block");
                                          $("#proffessionalfeedback").css("color", "green");
                                          $("#proffessionalfeedback").html("Your Proffesional Qualification Details have been successfully Deleted.Kindly Proceed to fill in the rest details!");
                                      });
                                      JobApplicantProffesionalQualifications.init();
                                      break;
                                  default:
                                      Swal.fire
                                         ({
                                             title: "Proffesional Qualification Details Deletion Error!!!",
                                             text: status,
                                             type: "error"
                                         }).then(() => {
                                             $("#proffessionalfeedback").css("display", "block");
                                             $("#proffessionalfeedback").css("color", "red");
                                             $('#proffessionalfeedback').addClass('alert alert-danger');
                                             $("#proffessionalfeedback").html("Your Proffesional Qualification Details could not be Deleted.KindlyTy Again!");
                                         });
                              }
                          });
                      } else if (result.dismiss === Swal.DismissReason.cancel) {
                          Swal.fire(
                              'Proffesional Qualification Deletion Cancelled',
                              'You Cancelled your Proffesional Qualification Deletion Request!',
                              'error'
                          );
                      }
                  });

              });
        }
        return {
            init: function () {
                JobProffesionalQualifications();
            }
        }
    }();
    function DeleteProffessionalQualifications(EntryNo) {
        Swal.fire({
            title: "Confirm Deletion of Proffessional Qualifications?",
            text: "Are you sure you would like to delete Proffessional Qualification",
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
                    cache: false,
                    type: 'GET',
                    // url: url,
                    cache: false,
                    processData: false,
                }).done(function (status) {
                    var tendersponse = status.split('*');
                    status = tendersponse[0];
                    switch (status) {
                        case "success":
                            Swal.fire
                           ({
                               title: "Candidate Profile Details Submitted!",
                               text: "Your Candidate Profile Details has been Successfully Submitted.",
                               type: "success"
                           }).then(() => {
                               $("#responsesfeedback").css("display", "block");
                               $("#responsesfeedback").css("color", "green");
                               $('#responsesfeedback').attr("class", "alert alert-success");
                               $("#responsesfeedback").html("Your Candidate Profile Details has been Successfully Submitted.");
                               $("#responsesfeedback").css("display", "block");
                               $("#responsesfeedback").css("color", "green");
                               $("#responsesfeedback").html("Your Candidate Profile Details has been Successfully Submitted.");
                           });
                            ApplicationProffessionalQualifications.init();
                            break;
                        case "found":
                            Swal.fire
                           ({
                               title: "Candidate Profile Details already Submitted!",
                               text: "Your Candidate Profile Details has been Successfully Submitted.",
                               type: "success"
                           }).then(() => {
                               $("#responsesfeedback").css("display", "block");
                               $("#responsesfeedback").css("color", "green");
                               $('#responsesfeedback').attr("class", "alert alert-success");
                               $("#responsesfeedback").html("Your Candidate Profile Details has been Successfully Submitted.");
                               $("#responsesfeedback").css("display", "block");
                               $("#responsesfeedback").css("color", "green");
                               $("#responsesfeedback").html("Your Candidate Profile Details has been Successfully Submitted.");
                           });
                            break;
                        default:
                            Swal.fire
                            ({
                                title: "Candidate Profile Error!!!",
                                text: tendersponse[1],
                                type: "error"
                            }).then(() => {
                                $("#responsesfeedback").css("display", "block");
                                $("#responsesfeedback").css("color", "red");
                                $('#responsesfeedback').addClass('alert alert-danger');
                                $("#responsesfeedback").html("Your Candidate Profile Details  Could not be submitted.Kindly try Again!" + tendersponse[1] + "");
                            });
                            break;
                    }
                }
            );
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Candidate Profile Cancelled',
                    'You cancelled your Candidate Profile Submission Details!',
                    'error'
                );
            }
        });

    };
    var ApplicationProffessionalQualifications = function () {
        var ProffesionalQualifications = function () {
            var ProffesionalQualificationsTable = $("#tbl_application_ProffessionalQualifications"),
                l = ProffesionalQualificationsTable.dataTable({
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
                url: "/Home/GetApplicationProffessionalQualifications",
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
                        json[i].EntryNo,
                        json[i].ProffessionalQualification,
                        json[i].Institution,
                        json[i].Country,
                        json[i].CompletionYear,
                        json[i].Speciality,
                         json[i].AttainedScore,
                        '<a class="btn btn-success EditProffessionalQualifications" id="EditProffessionalQualifications"><i class="fa fa-edit m-r-10"></i>Edit</a>',
                        '<a class="btn btn-danger DeleteProffessionalQualifications1" id="DeleteProffessionalQualifications1"><i class="fa fa-trash m-r-10">Delete</a>'
                    ]);
                }
            });
            ProffesionalQualificationsTable.on("click",
               ".EditProffessionalQualifications",
               function (ProffesionalQualificationsTable) {
                   ProffesionalQualificationsTable.preventDefault();
                   var i = $(this).parents("tr")[0];
                   $("#edit_professionalQualifications").modal();

               });
            ProffesionalQualificationsTable.on("click",
              ".DeleteProffessionalQualifications1",
              function (ProffesionalQualificationsTable) {
                  ProffesionalQualificationsTable.preventDefault();
                  var i = $(this).parents("tr")[0];
                  Swal.fire({
                      title: "Confirm Deleting Proffesional Qualifications",
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
                              url: "/Home/DeleteProffesionalQualificationDetails?EntryNumber=" + i.cells[1].innerHTML
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
                                          title: "Proffessional Qualifications Deleted!",
                                          text: "Proffessional Qualifications Deleted Successfully!",
                                          type: "success"
                                      }).then(() => {
                                          $("#responsesfeedback").css("display", "block");
                                          $("#responsesfeedback").css("color", "green");
                                          $('#responsesfeedback').attr("class", "alert alert-success");
                                          $("#responsesfeedback").html("Your Proffessional Qualifications Details has been Successfully Deleted.");
                                          $("#responsesfeedback").css("display", "block");
                                          $("#responsesfeedback").css("color", "green");
                                          $("#responsesfeedback").html("Your Proffessional Qualifications Details has been Successfully Deleted.");
                                      });
                                      ApplicantProffessionalQualifications.init();
                                      break;
                                  default:
                                      Swal.fire
                                         ({
                                             title: "Proffessional Qualifications Deletion Error!!!",
                                             text: status,
                                             type: "error"
                                         }).then(() => {
                                             $("#responsesfeedback").css("display", "block");
                                             $("#responsesfeedback").css("color", "red");
                                             $('#responsesfeedback').addClass('alert alert-danger');
                                             $("#responsesfeedback").html("Your Proffessional Qualifications could not be Deleted.KindlyTy Again!");
                                         });
                              }
                          });
                      } else if (result.dismiss === Swal.DismissReason.cancel) {
                          Swal.fire(
                              'Proffessional Qualifications Deletion Cancelled',
                              'You cancelled your Proffessional Qualifications deletion Request!',
                              'error'
                          );
                      }
                  });

              });
        }
        return {
            init: function () {
                ProffesionalQualifications();
            }
        }
    }();
    //Get All Academic Qualifications 
    var ApplicantProffessionalQualifications = function () {
        var ProffesionalQualifications = function () {
            var ProffesionalQualificationsTable = $("#tbl_applicant_ProffessionalQualifications"),
                l = ProffesionalQualificationsTable.dataTable({
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
                url: "/Home/GetApplicantProffessionalQualifications",
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
                        json[i].EntryNo,
                        json[i].ProffessionalQualification,
                        json[i].Institution,
                        json[i].Country,
                        json[i].CompletionYear,
                        json[i].Speciality,
                         json[i].AttainedScore,
                        '<a class="btn btn-success EditProffessionalBodiesDetails" id="EditProffessionalBodiesDetails"><i class="fa fa-edit m-r-10"></i>Edit</a>',
                        '<a class="btn btn-danger DeleteProffessionalBodyQualifications id="DeleteProffessionalBodyQualifications""><i class="fa fa-trash m-r-10">Delete</a>'
                    ]);
                }
            });
            ProffesionalQualificationsTable.on("click",
               ".EditProffessionalBodiesDetails",
               function (ProffesionalQualificationsTable) {
                   ProffesionalQualificationsTable.preventDefault();
                   var i = $(this).parents("tr")[0];
                   $("#editproqualifications").val(i.cells[0].innerHTML);
                   $("#editprofessionaltxtinstitution").val(i.cells[2].innerHTML);
                   $("#editproqualificationTitle").val(i.cells[3].innerHTML);
                   $("#editprogattainedscore").val(i.cells[5].innerHTML);
                   $("#edittxtattainedscore").val(i.cells[4].innerHTML);
                   $("#editprogcompletionyear").val(i.cells[5].innerHTML);
                   $("#editprogenddate").val("");
                   $("#edit_professionalQualifications").modal();
               });
            ProffesionalQualificationsTable.on("click",
              ".DeleteProffessionalBodyQualifications",
              function (ProffesionalQualificationsTable) {
                  ProffesionalQualificationsTable.preventDefault();
                  var i = $(this).parents("tr")[0]
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
                              url: "/Home/DeleteProffesionalQualificationDetails?EntryNumber=" + i.cells[1].innerHTML
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
                                      ApplicantProffessionalQualifications.init();
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
                ProffesionalQualifications();
            }
        }
    }();
})