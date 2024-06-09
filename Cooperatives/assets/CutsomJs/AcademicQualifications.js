$(document).ready(function () {
    $(".btn_academicqualifications").click(function () {
        var data = {
            "EducationLevel": $("#txteducationallevel").val(),
            "Institution": $("#txtinstitution").val(),
            "Country": $("#txteducationcountries").val(),
            "QualificationTitle": $("#txtqualificationtitle").val(),
            "specializationArea": $("#txtspecializationareas").val(),
            "AttainedScore": $("#txtattainedscore").val(),
            "GraduationYear": $("#txtgraduationyear").val(),
            "StartDate": $("#academictxtstartdate").val(),
            "EndDate": $("#academictxtenddate").val(),
        }
        Swal.fire({
            title: "Confirm Academic Qualifications Details?",
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
                    url: "/Home/CandidateAcademicRegistration",
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
                                title: "Academic Qualifications Submitted!",
                                text: registerstatus[1],
                                type: "success"
                            }).then(() => {
                                $("#qualificationsfeedback").css("display", "block");
                                $("#qualificationsfeedback").css("color", "green");
                                $('#qualificationsfeedback').attr("class", "alert alert-success");
                                $("#qualificationsfeedback").html("Your Academic Qualifications Information have been successfully submitted" + "  " + registerstatus[1]);
                                $("#qualificationsfeedback").css("display", "block");
                                $("#qualificationsfeedback").css("color", "green");
                                $("#qualificationsfeedback").html("Your Academic Qualifications  have been successfully submitted." + "  " + registerstatus[1]);
                                $("#preqappl_form").reset();
                                document.getElementById("txteducationallevel").value = "";
                                document.getElementById("txtinstitution").value = "";
                                document.getElementById("txteducationcountries").value = "";
                                document.getElementById("txtqualificationtitle").value = "";
                                document.getElementById("txtspecializationareas").value = "";
                                document.getElementById("txtgraduationyear").value = "";
                                document.getElementById("txtattainedscore").value = "";
                                document.getElementById("academictxtstartdate").value = "";
                                document.getElementById("academictxtenddate").value = "";
                            });
                            ApplicantAcademicQualifications.init();
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
                                title: "Academic Qualifications  Error!!!",
                                text: "Your Academic Qualifications could not been successfully saved" + " " + registerstatus[1],
                                type: "error"
                            }).then(() => {
                                $("#qualificationsfeedback").css("display", "block");
                                $("#qualificationsfeedback").css("color", "red");
                                $('#qualificationsfeedback').addClass('alert alert-danger');
                                $("#qualificationsfeedback").html("Your Academic Qualifications could not been successfully saved" + " " + registerstatus[1]);
                            });
                            break;
                    }
                }
                );
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Academic Qualifications Cancelled',
                    'You cancelled your Academic Qualifications Registration submission details!',
                    'error'
                );
            }
        });

    });

    $(".btn_editacademicqualifications").click(function () {
        var data = {
            "EntryNo": $("#academicentryNumber").val(),
            "EducationLevel": $("#edittxteducationallevel").val(),
            "Institution": $("#edittxtinstitution").val(),
            "Country": $("#txteducationcountries").val(),
            "QualificationTitle": $("#edittxtqualificationtitle").val(),
            "specializationArea": $("#edittxtspecializationareas").val(),
            "AttainedScore": $("#edittxtattainedscore").val(),
            "GraduationYear": $("#edittxtgraduationyear").val(),
            "StartDate": $("#editacademictxtstartdate").val(),
            "EndDate": $("#editacademictxtenddate").val(),
        }
        Swal.fire({
            title: "Confirm Academic Qualifications Details?",
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
                    url: "/Home/UpdateCandidateAcademicRegistration",
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
                                title: "Academic Qualifications Updated!",
                                text: registerstatus[1],
                                type: "success"
                            }).then(() => {
                                $("#qualificationsfeedback").css("display", "block");
                                $("#qualificationsfeedback").css("color", "green");
                                $('#qualificationsfeedback').attr("class", "alert alert-success");
                                $("#qualificationsfeedback").html("Your Academic Qualifications Information have been successfully Updated" + "  " + registerstatus[1]);
                                $("#qualificationsfeedback").css("display", "block");
                                $("#qualificationsfeedback").css("color", "green");
                                $("#qualificationsfeedback").html("Your Academic Qualifications  have been successfully Updated." + "  " + registerstatus[1]);
                                $("#preqappl_form").reset();
                                document.getElementById("edittxteducationallevel").value = "";
                                document.getElementById("edittxtinstitution").value = "";
                                document.getElementById("txteducationcountries").value = "";
                                document.getElementById("edittxtqualificationtitle").value = "";
                                document.getElementById("txtspecializationareas").value = "";
                                document.getElementById("edittxtattainedscore").value = "";
                                document.getElementById("txtattainedscore").value = "";
                                document.getElementById("editacademictxtstartdate").value = "";
                                document.getElementById("editacademictxtenddate").value = "";
                            });
                            ApplicantAcademicQualifications.init();
                            $('#edit_eacademicQualifications').modal('hide');
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
                                title: "Academic Qualifications  Error!!!",
                                text: "Your Academic Qualifications could not been successfully Updated" + " " + registerstatus[1],
                                type: "error"
                            }).then(() => {
                                $("#qualificationsfeedback").css("display", "block");
                                $("#qualificationsfeedback").css("color", "red");
                                $('#qualificationsfeedback').addClass('alert alert-danger');
                                $("#qualificationsfeedback").html("Your Academic Qualifications could not been successfully Updated" + " " + registerstatus[1]);
                            });
                            break;
                    }
                }
                );
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Academic Qualifications Cancelled',
                    'You cancelled your Academic Qualifications Registration submission details!',
                    'error'
                );
            }
        });

    });
    $(".btn_job_academicqualifications").click(function () {
        var data = {
            "EducationLevel": $("#jobtxteducationallevel").val(),
            "Institution": $("#jobtxtinstitution").val(),
            "Country": $("#txteducationcountries").val(),
            "QualificationTitle": $("#jobtxtqualificationtitle").val(),
            "specializationArea": $("#txtspecializationareas").val(),
            "AttainedScore": $("#jobtxtattainedscore").val(),
            "GraduationYear": $("#jobtxtgraduationyear").val(),
            "StartDate": $("#jobacademictxtstartdate").val(),
            "EndDate": $("#jobacademictxtenddate").val(),
        }
        Swal.fire({
            title: "Confirm Academic Qualifications Submission?",
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
                    url: "/Home/CandidateApplicationAcademicRegistration",
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
                                title: "Academic Qualifications Saved!",
                                text: registerstatus[1],
                                type: "success"
                            }).then(() => {
                                $("#qualificationsfeedback").css("display", "block");
                                $("#qualificationsfeedback").css("color", "green");
                                $('#qualificationsfeedback').attr("class", "alert alert-success");
                                $("#qualificationsfeedback").html("Your Academic Qualifications Information have been successfully Saved" + "  " + registerstatus[1]);
                                $("#qualificationsfeedback").css("display", "block");
                                $("#qualificationsfeedback").css("color", "green");
                                $("#qualificationsfeedback").html("Your Academic Qualifications  have been successfully Saved." + "  " + registerstatus[1]);
                                $("#preqappl_form").reset();
                            });
                            JobApplicationAcademicQualifications.init();
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
                                title: "Academic Qualifications  Error!!!",
                                text: "Your Academic Qualifications could not been successfully submitted" + " " + registerstatus[1],
                                type: "error"
                            }).then(() => {
                                $("#qualificationsfeedback").css("display", "block");
                                $("#qualificationsfeedback").css("color", "red");
                                $('#qualificationsfeedback').addClass('alert alert-danger');
                                $("#qualificationsfeedback").html("Your Academic Qualifications could not been successfully submitted" + " " + registerstatus[1]);
                            });
                            break;
                    }
                }
                );
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Academic Qualifications Cancelled',
                    'You cancelled your Academic Qualifications Submission submission details!',
                    'error'
                );
            }
        });

    });
  
     //Get All JobApplication Academic Qualifications 
    var JobApplicationAcademicQualifications = function () {
        var JobAcademicQualifications = function () {
            var JobAcademicQualificationsTable = $("#tbl_jobapplication_AcademicQualifications"),
                l = JobAcademicQualificationsTable.dataTable({
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
                url: "/Home/GetJobApplicationAcademicQualifications",
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
                        json[i].EducationLevel,
                        json[i].Institution,
                        json[i].Country,
                        json[i].AttainedScore,
                        json[i].GraduationYear,
                        '<a class="btn btn-success JobEditAcademicDetails" id="JobEditAcademicDetails"><i class="fa fa-edit m-r-10"></i>Edit</a>',
                        '<a class="btn btn-danger JobDeleteAcademicQualifications1" id="JobDeleteAcademicQualifications1"><i class="fa fa-trash m-r-10">Delete</a>'
                    ]);
                }
            });
            JobAcademicQualificationsTable.on("click",
               ".JobEditAcademicDetails",
               function (JobAcademicQualificationsTable) {
                   JobAcademicQualificationsTable.preventDefault();
                   var i = $(this).parents("tr")[0];

               });
            JobAcademicQualificationsTable.on("click",
              ".JobDeleteAcademicQualifications1",
              function (JobAcademicQualificationsTable) {
                  JobAcademicQualificationsTable.preventDefault();
                  var i = $(this).parents("tr")[0];
                  //alert("record to be deleted: " + i.cells[1].innerHTML);
                  Swal.fire({
                      title: "Confirm Deleting Academic Qualifications",
                      text: "Are you sure you'd like to proceed with deletion?",
                      type: "warning",
                      showCancelButton: true,
                      closeOnConfirm: true,
                      confirmButtonText: "Yes, Delete Academic Details!",
                      confirmButtonClass: "btn-success",
                      confirmButtonColor: "#008000",
                      position: "center"
                  }).then((result) => {
                      if (result.value) {
                          //global loader spinner;
                          $.ajaxSetup({
                              global: false,
                              type: "POST",
                              url: "/Home/DeletenJobAcademicDetails?EntryNumber=" + i.cells[1].innerHTML
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
                                          title: "Academic Qualification Details Deleted!",
                                          text: "Academic Qualification Details Deleted Successfully!",
                                          type: "success"
                                      }).then(() => {
                                          $("#qualificationsfeedback").css("display", "block");
                                          $("#qualificationsfeedback").css("color", "green");
                                          $('#qualificationsfeedback').attr("class", "alert alert-success");
                                          $("#qualificationsfeedback").html("Your Academic Qualification Details have been successfully Deleted.Kindly Proceed to fill in the rest details!");
                                          $("#qualificationsfeedback").css("display", "block");
                                          $("#qualificationsfeedback").css("color", "green");
                                          $("#qualificationsfeedback").html("Your Academic Qualification Details have been successfully Deleted.Kindly Proceed to fill in the rest details!");
                                      });
                                      JobApplicationAcademicQualifications.init();
                                      break;
                                  default:
                                      Swal.fire
                                         ({
                                             title: "Academic Qualification Details Deletion Error!!!",
                                             text: status,
                                             type: "error"
                                         }).then(() => {
                                             $("#qualificationsfeedback").css("display", "block");
                                             $("#qualificationsfeedback").css("color", "red");
                                             $('#qualificationsfeedback').addClass('alert alert-danger');
                                             $("#qualificationsfeedback").html("Your Academic Qualification Details could not be Deleted.KindlyTy Again!");
                                         });
                              }
                          });
                      } else if (result.dismiss === Swal.DismissReason.cancel) {
                          Swal.fire(
                              'Academic Qualification Deletion Cancelled',
                              'You Cancelled your Academic Qualification Deletion Request!',
                              'error'
                          );
                      }
                  });

              });
        }
        return {
            init: function () {
                JobAcademicQualifications();
            }
        }
    }();
     //Get All Academic Qualifications 
    var ApplicantAcademicQualifications = function () {
        var AcademicQualifications = function () {
            var AcademicQualificationsTable = $("#tbl_applicant_qualifications"),
                l = AcademicQualificationsTable.dataTable({
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
                url: "/Home/GetApplicantAcademicQualifications",
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
                        json[i].EducationLevel,
                        json[i].Institution,
                        json[i].Country,
                        json[i].AttainedScore,
                        json[i].GraduationYear,
                        '<a class="btn btn-success EditAcademicDetails" id="EditAcademicDetails"><i class="fa fa-edit m-r-10"></i>Edit</a>',
                        '<a class="btn btn-danger DeleteAcademicQualifications1" id="DeleteAcademicQualifications1"><i class="fa fa-trash m-r-10">Delete</a>'
                    ]);
                }
            });
            AcademicQualificationsTable.on("click",
               ".EditAcademicDetails",
               function (AcademicQualificationsTable) {
                   AcademicQualificationsTable.preventDefault();
                   var i = $(this).parents("tr")[0];
                   $("#entryNumber").val(i.cells[1].innerHTML);
                   $("#edittxteducationallevel").val(i.cells[2].innerHTML);
                   $("#edittxtinstitution").val(i.cells[3].innerHTML);
                   $("#txteducationcountries").val(i.cells[5].innerHTML);
                   $("#edittxtattainedscore").val(i.cells[4].innerHTML);
                   $("#editacademictxtstartdate").val(i.cells[5].innerHTML);
                   $("#editacademictxtenddate").val("");
                   $("#edit_eacademicQualifications").modal();

               });
            AcademicQualificationsTable.on("click",
              ".DeleteAcademicQualifications1",
              function (AcademicQualificationsTable) {
                  AcademicQualificationsTable.preventDefault();
                  var i = $(this).parents("tr")[0];
                  Swal.fire({
                      title: "Confirm Deleting Academic Qualifications",
                      text: "Are you sure you'd like to proceed with deletion?",
                      type: "warning",
                      showCancelButton: true,
                      closeOnConfirm: true,
                      confirmButtonText: "Yes, Delete Academic Details!",
                      confirmButtonClass: "btn-success",
                      confirmButtonColor: "#008000",
                      position: "center"
                  }).then((result) => {
                      if (result.value) {
                          $.ajaxSetup({
                              global: false,
                              type: "POST",
                              url: "/Home/DeleteAcademicDetails?EntryNumber=" + i.cells[1].innerHTML
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
                                          title: "Academic Qualification Details Deleted!",
                                          text: "Academic Qualification Details Deleted Successfully!",
                                          type: "success"
                                      }).then(() => {
                                          $("#banksfeedback").css("display", "block");
                                          $("#banksfeedback").css("color", "green");
                                          $('#banksfeedback').attr("class", "alert alert-success");
                                          $("#banksfeedback").html("Your Academic Qualification Details have been successfully Deleted.Kindly Proceed to fill in the rest details!");
                                          $("#banksfeedback").css("display", "block");
                                          $("#banksfeedback").css("color", "green");
                                          $("#banksfeedback").html("Your Academic Qualification Details have been successfully Deleted.Kindly Proceed to fill in the rest details!");
                                      });
                                      ApplicantAcademicQualifications.init();
                                      break;
                                  default:
                                      Swal.fire
                                         ({
                                             title: "Academic Qualification Details Deletion Error!!!",
                                             text: status,
                                             type: "error"
                                         }).then(() => {
                                             $("#banksfeedback").css("display", "block");
                                             $("#banksfeedback").css("color", "red");
                                             $('#banksfeedback').addClass('alert alert-danger');
                                             $("#banksfeedback").html("Your Academic Qualification Details could not be Deleted.KindlyTy Again!");
                                         });
                              }
                          });
                      } else if (result.dismiss === Swal.DismissReason.cancel) {
                          Swal.fire(
                              'Academic Qualification Deletion Cancelled',
                              'You Cancelled your Academic Qualification Deletion Request!',
                              'error'
                          );
                      }
                  });

              });
        }
        return {
            init: function () {
                AcademicQualifications();
            }
        }
    }();

    function EditEducationBackground(EducationLevel, Institution, Country, AttainedScore, GraduationYear) {
        $("#txteducationallevel").val(EducationLevel);
        $("#txtinstitution").val(Institution);
        $("#edit_educationBackground_Modal").modal();
    }
})