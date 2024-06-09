'use-strict';
function EditAcademicDetails(EntryNo,EducationLevel, Institution, Country, AttainedScore,StartDate,EndDate) {    
    $("#academicentryNumber").val(EntryNo);
    $("#edittxteducationallevel").val(EducationLevel);
    $("#edittxtinstitution").val(Institution);
    $("#txteducationcountries").val(Country);
    $("#edittxtattainedscore").val(AttainedScore);
    $("#editacademictxtstartdate").val(StartDate);
    $("#editacademictxtenddate").val(EndDate);
    $("#edit_eacademicQualifications").modal();
}
function DeleteAcademicQualifications(url) {
    Swal.fire({
        title: "Confirm Deletion of Academic Qualifications?",
        text: "Are you sure you would like to delete Academic Qualification",
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
                type: 'POST',
                url: url,
                data: '',
                contentType: "application/json",
                cache: false,
                processData: false
            }).done(function (status) {
                var tendersponse = status.split('*');
                status = tendersponse[0];
                switch (status) {
                    case "success":
                        Swal.fire
                       ({
                           title: "Academic Qualification Details Deleted!",
                           text: "Your Academic Qualification Details has been Successfully Deleted.",
                           type: "success"
                       }).then(() => {
                           $("#responsesfeedback").css("display", "block");
                           $("#responsesfeedback").css("color", "green");
                           $('#responsesfeedback').attr("class", "alert alert-success");
                           $("#responsesfeedback").html("Your Academic Qualification Details has been Successfully Deleted.");
                           $("#responsesfeedback").css("display", "block");
                           $("#responsesfeedback").css("color", "green");
                           $("#responsesfeedback").html("Your Academic Qualification  Details has been Successfully Deleted.");
                       });
                        ApplicantAcademicQualifications.init();
                        break;
                    case "found":
                        Swal.fire
                       ({
                           title: "Academic Qualification Details already Deletd!",
                           text: "Your Candidate Profile Details has been Successfully Submitted.",
                           type: "success"
                       }).then(() => {
                           $("#responsesfeedback").css("display", "block");
                           $("#responsesfeedback").css("color", "green");
                           $('#responsesfeedback').attr("class", "alert alert-success");
                           $("#responsesfeedback").html("Your Academic Qualification Details has been Successfully Submitted.");
                           $("#responsesfeedback").css("display", "block");
                           $("#responsesfeedback").css("color", "green");
                           $("#responsesfeedback").html("Your Candidate Profile Details has been Successfully Submitted.");
                       });
                        
                        break;
                    default:
                        Swal.fire
                        ({
                            title: "Academic Qualification Deletion Error!!!",
                            text: tendersponse[1],
                            type: "error"
                        }).then(() => {
                            $("#responsesfeedback").css("display", "block");
                            $("#responsesfeedback").css("color", "red");
                            $('#responsesfeedback').addClass('alert alert-danger');
                            $("#responsesfeedback").html("Your Academic Qualification Details  Could not be deleted.Kindly try Again!" + tendersponse[1] + "");
                        });
                        break;
                }
            }
        );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
                'Academic Qualification Cancelled',
                'You Cancelled your Academic Qualification Deletion!',
                'error'
            );
        }
    });
};
function DeleteJobApplicationReferees(url) {
    Swal.fire({
        title: "Confirm Deletion of Referree Details?",
        text: "Are you sure you would like to delete  Referree Details",
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
                type: 'POST',
                url: url,
                data: '',
                contentType: "application/json",
                cache: false,
                processData: false
            }).done(function (status) {
                var tendersponse = status.split('*');
                status = tendersponse[0];
                switch (status) {
                    case "success":
                        Swal.fire
                       ({
                           title: "Referree Details Deleted!",
                           text: "Your Referree Details has been Successfully Deleted.",
                           type: "success"
                       }).then(() => {
                           $("#responsesfeedback").css("display", "block");
                           $("#responsesfeedback").css("color", "green");
                           $('#responsesfeedback').attr("class", "alert alert-success");
                           $("#responsesfeedback").html("Your Referree Details has been Successfully Deleted.");
                           $("#responsesfeedback").css("display", "block");
                           $("#responsesfeedback").css("color", "green");
                           $("#responsesfeedback").html("Your Referree Details has been Successfully Deleted.");
                       });
                        ApplicantRefereeDetails.init();
                        break;
                    case "found":
                        Swal.fire
                       ({
                           title: "Referree Details already Deletd!",
                           text: "Your  Referree Details has been Successfully Submitted.",
                           type: "success"
                       }).then(() => {
                           $("#responsesfeedback").css("display", "block");
                           $("#responsesfeedback").css("color", "green");
                           $('#responsesfeedback').attr("class", "alert alert-success");
                           $("#responsesfeedback").html("Your Referree Details has been Successfully Submitted.");
                           $("#responsesfeedback").css("display", "block");
                           $("#responsesfeedback").css("color", "green");
                           $("#responsesfeedback").html("Your Referree Details has been Successfully Submitted.");
                       });
                        break;
                    default:
                        Swal.fire
                        ({
                            title: "Referree Details Deletion Error!!!",
                            text: tendersponse[1],
                            type: "error"
                        }).then(() => {
                            $("#responsesfeedback").css("display", "block");
                            $("#responsesfeedback").css("color", "red");
                            $('#responsesfeedback').addClass('alert alert-danger');
                            $("#responsesfeedback").html("Your Referree Details  Could not be deleted.Kindly try Again!" + tendersponse[1] + "");
                        });
                        break;
                }
            }
        );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
                'Referree Details Cancelled',
                'You Cancelled your Referree Details Deletion!',
                'error'
            );
        }
    });
};
function JobDeleteAcademicQualificationDetails(url) {
    Swal.fire({
        title: "Confirm Deletion of Academic Qualifications?",
        text: "Are you sure you would like to delete Academic Qualification",
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
                type: 'POST',
                url: url,
                data: '',
                contentType: "application/json",
                cache: false,
                processData: false
            }).done(function (status) {
                var tendersponse = status.split('*');
                status = tendersponse[0];
                switch (status) {
                    case "success":
                        Swal.fire
                       ({
                           title: "Academic Qualification Details Deleted!",
                           text: "Your Academic Qualification Details has been Successfully Deleted.",
                           type: "success"
                       }).then(() => {
                           $("#qualificationsfeedback").css("display", "block");
                           $("#qualificationsfeedback").css("color", "green");
                           $('#qualificationsfeedback').attr("class", "alert alert-success");
                           $("#qualificationsfeedback").html("Your Academic Qualification Details has been Successfully Deleted.");
                           $("#qualificationsfeedback").css("display", "block");
                           $("#qualificationsfeedback").css("color", "green");
                           $("#qualificationsfeedback").html("Your Academic Qualification  Details has been Successfully Deleted.");
                       });
                        JobApplicationAcademicQualifications.init();
                        break;
                    case "found":
                        Swal.fire
                       ({
                           title: "Academic Qualification Details already Deletd!",
                           text: "Your Candidate Profile Details has been Successfully Submitted.",
                           type: "success"
                       }).then(() => {
                           $("#qualificationsfeedback").css("display", "block");
                           $("#qualificationsfeedback").css("color", "green");
                           $('#qualificationsfeedback').attr("class", "alert alert-success");
                           $("#qualificationsfeedback").html("Your Academic Qualification Details has been Successfully Submitted.");
                           $("#qualificationsfeedback").css("display", "block");
                           $("#qualificationsfeedback").css("color", "green");
                           $("#qualificationsfeedback").html("Your Candidate Profile Details has been Successfully Submitted.");
                       });

                        break;
                    default:
                        Swal.fire
                        ({
                            title: "Academic Qualification Deletion Error!!!",
                            text: tendersponse[1],
                            type: "error"
                        }).then(() => {
                            $("#qualificationsfeedback").css("display", "block");
                            $("#qualificationsfeedback").css("color", "red");
                            $('#qualificationsfeedback').addClass('alert alert-danger');
                            $("#qualificationsfeedback").html("Your Academic Qualification Details  Could not be deleted.Kindly try Again!" + tendersponse[1] + "");
                        });
                        break;
                }
            }
        );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
                'Academic Qualification Cancelled',
                'You Cancelled your Academic Qualification Deletion!',
                'error'
            );
        }
    });
};
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
               // alert("record to be deleted: " + i.cells[1].innerHTML);
               $("#entryNumber").val(i.cells[0].innerHTML);
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
function DeleteProffessionalBodyQualifications(url) {
    Swal.fire({
        title: "Confirm Deletion of Proffessional Body?",
        text: "Are you sure you would like to delete Proffessional Body",
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
                type: 'POST',
                url: url,
                data: '',
                contentType: "application/json",
                cache: false,
                processData: false
            }).done(function (status) {
                var tendersponse = status.split('*');
                status = tendersponse[0];
                switch (status) {
                    case "success":
                        Swal.fire
                       ({
                           title: "Proffessional Body Details Deleted!",
                           text: "Your Proffessional Body Details has been Successfully Deleted.",
                           type: "success"
                       }).then(() => {
                           $("#responsesfeedback").css("display", "block");
                           $("#responsesfeedback").css("color", "green");
                           $('#responsesfeedback').attr("class", "alert alert-success");
                           $("#responsesfeedback").html("Your Proffessional Body Details has been Successfully Deleted.");
                           $("#responsesfeedback").css("display", "block");
                           $("#responsesfeedback").css("color", "green");
                           $("#responsesfeedback").html("Your Proffessional Body Details has been Successfully Deleted.");
                       });
                        ApplicantProffesionalQualificationsBodies.init();
                        break;
                    case "found":
                        Swal.fire
                       ({
                           title: "Proffessional Body Details already Deletd!",
                           text: "Your Candidate Profile Details has been Successfully Submitted.",
                           type: "success"
                       }).then(() => {
                           $("#responsesfeedback").css("display", "block");
                           $("#responsesfeedback").css("color", "green");
                           $('#responsesfeedback').attr("class", "alert alert-success");
                           $("#responsesfeedback").html("Your Proffessional Body Details has been Successfully Submitted.");
                           $("#responsesfeedback").css("display", "block");
                           $("#responsesfeedback").css("color", "green");
                           $("#responsesfeedback").html("Your Proffessional Body Details has been Successfully Submitted.");
                       });
                        break;
                    default:
                        Swal.fire
                        ({
                            title: "Proffessional Body Deletion Error!!!",
                            text: tendersponse[1],
                            type: "error"
                        }).then(() => {
                            $("#responsesfeedback").css("display", "block");
                            $("#responsesfeedback").css("color", "red");
                            $('#responsesfeedback').addClass('alert alert-danger');
                            $("#responsesfeedback").html("Your Proffessional Body Details  Could not be deleted.Kindly try Again!" + tendersponse[1] + "");
                        });
                        break;
                }
            }
        );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
                'Proffessional Body Cancelled',
                'You Cancelled your Proffessional Body Deletion!',
                'error'
            );
        }
    });
};
function JobDeleteProffessionalBodyQualifications(url) {
    Swal.fire({
        title: "Confirm Deletion of Proffessional Body?",
        text: "Are you sure you would like to delete Proffessional Body",
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
                type: 'POST',
                url: url,
                data: '',
                contentType: "application/json",
                cache: false,
                processData: false
            }).done(function (status) {
                var tendersponse = status.split('*');
                status = tendersponse[0];
                switch (status) {
                    case "success":
                        Swal.fire
                       ({
                           title: "Proffessional Body Details Deleted!",
                           text: "Your Proffessional Body Details has been Successfully Deleted.",
                           type: "success"
                       }).then(() => {
                           $("#responsesfeedback").css("display", "block");
                           $("#responsesfeedback").css("color", "green");
                           $('#responsesfeedback').attr("class", "alert alert-success");
                           $("#responsesfeedback").html("Your Proffessional Body Details has been Successfully Deleted.");
                           $("#responsesfeedback").css("display", "block");
                           $("#responsesfeedback").css("color", "green");
                           $("#responsesfeedback").html("Your Proffessional Body Details has been Successfully Deleted.");
                       });
                        ApplicantProffesionalQualificationsBodies.init();
                        break;
                    case "found":
                        Swal.fire
                       ({
                           title: "Proffessional Body Details already Deletd!",
                           text: "Your Candidate Profile Details has been Successfully Submitted.",
                           type: "success"
                       }).then(() => {
                           $("#responsesfeedback").css("display", "block");
                           $("#responsesfeedback").css("color", "green");
                           $('#responsesfeedback').attr("class", "alert alert-success");
                           $("#responsesfeedback").html("Your Proffessional Body Details has been Successfully Submitted.");
                           $("#responsesfeedback").css("display", "block");
                           $("#responsesfeedback").css("color", "green");
                           $("#responsesfeedback").html("Your Proffessional Body Details has been Successfully Submitted.");
                       });
                        break;
                    default:
                        Swal.fire
                        ({
                            title: "Proffessional Body Deletion Error!!!",
                            text: tendersponse[1],
                            type: "error"
                        }).then(() => {
                            $("#responsesfeedback").css("display", "block");
                            $("#responsesfeedback").css("color", "red");
                            $('#responsesfeedback').addClass('alert alert-danger');
                            $("#responsesfeedback").html("Your Proffessional Body Details  Could not be deleted.Kindly try Again!" + tendersponse[1] + "");
                        });
                        break;
                }
            }
        );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
                'Proffessional Body Cancelled',
                'You Cancelled your Proffessional Body Deletion!',
                'error'
            );
        }
    });
};
//Get All Proffesional Bodies
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
               // alert("record to be deleted: " + i.cells[1].innerHTML);
               $("#editproqualifications").val(i.cells[0].innerHTML);
               $("#editprofessionaltxtinstitution").val(i.cells[2].innerHTML);
               $("#editproqualificationTitle").val(i.cells[3].innerHTML);
               $("#editprogattainedscore").val(i.cells[5].innerHTML);
               $("#edittxtattainedscore").val(i.cells[4].innerHTML);
               $("#editprogcompletionyear").val(i.cells[5].innerHTML);
               $("#editprogenddate").val("");
               $("#edit_professionalQualifications").modal();

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
function DeleteProffessionalQualifications(url) {
    Swal.fire({
        title: "Confirm Deletion of Proffessional Qualifications?",
        text: "Are you sure you would like to delete Proffessional Qualifications",
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
                type: 'POST',
                url: url,
                data: '',
                contentType: "application/json",
                cache: false,
                processData: false
            }).done(function (status) {
                var tendersponse = status.split('*');
                status = tendersponse[0];
                switch (status) {
                    case "success":
                        Swal.fire
                       ({
                           title: "Proffessional Qualifications Details Deleted!",
                           text: "Your Proffessional Qualifications Details has been Successfully Deleted.",
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
                        ApplicantProffesionalQualifications.init();
                        break;
                    case "found":
                        Swal.fire
                       ({
                           title: "Proffessional Body Details already Deletd!",
                           text: "Your Candidate Profile Details has been Successfully Submitted.",
                           type: "success"
                       }).then(() => {
                           $("#responsesfeedback").css("display", "block");
                           $("#responsesfeedback").css("color", "green");
                           $('#responsesfeedback').attr("class", "alert alert-success");
                           $("#responsesfeedback").html("Your Proffessional Qualifications Details has been Successfully Submitted.");
                           $("#responsesfeedback").css("display", "block");
                           $("#responsesfeedback").css("color", "green");
                           $("#responsesfeedback").html("Your Proffessional Qualifications Details has been Successfully Submitted.");
                       });
                        break;
                    default:
                        Swal.fire
                        ({
                            title: "Proffessional Qualifications Deletion Error!!!",
                            text: tendersponse[1],
                            type: "error"
                        }).then(() => {
                            $("#responsesfeedback").css("display", "block");
                            $("#responsesfeedback").css("color", "red");
                            $('#responsesfeedback').addClass('alert alert-danger');
                            $("#responsesfeedback").html("Your Proffessional Qualifications Details  Could not be deleted.Kindly try Again!" + tendersponse[1] + "");
                        });
                        break;
                }
            }
        );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
                'Proffessional Qualifications Cancelled',
                'You Cancelled your Proffessional Qualifications Deletion!',
                'error'
            );
        }
    });
};
function JobDeleteProffessionalQualifications(url) {
    Swal.fire({
        title: "Confirm Deletion of Proffessional Qualifications?",
        text: "Are you sure you would like to delete Proffessional Qualifications",
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
                type: 'POST',
                url: url,
                data: '',
                contentType: "application/json",
                cache: false,
                processData: false
            }).done(function (status) {
                var tendersponse = status.split('*');
                status = tendersponse[0];
                switch (status) {
                    case "success":
                        Swal.fire
                       ({
                           title: "Proffessional Qualifications Details Deleted!",
                           text: "Your Proffessional Qualifications Details has been Successfully Deleted.",
                           type: "success"
                       }).then(() => {
                           $("#proffessionalfeedback").css("display", "block");
                           $("#proffessionalfeedback").css("color", "green");
                           $('#proffessionalfeedback').attr("class", "alert alert-success");
                           $("#proffessionalfeedback").html("Your Proffessional Qualifications Details has been Successfully Deleted.");
                           $("#proffessionalfeedback").css("display", "block");
                           $("#proffessionalfeedback").css("color", "green");
                           $("#proffessionalfeedback").html("Your Proffessional Qualifications Details has been Successfully Deleted.");
                       });
                        JobApplicantProffesionalQualifications.init();
                        break;
                    case "found":
                        Swal.fire
                       ({
                           title: "Proffessional Body Details already Deletd!",
                           text: "Your Candidate Profile Details has been Successfully Submitted.",
                           type: "success"
                       }).then(() => {
                           $("#proffessionalfeedback").css("display", "block");
                           $("#proffessionalfeedback").css("color", "green");
                           $('#proffessionalfeedback').attr("class", "alert alert-success");
                           $("#proffessionalfeedback").html("Your Proffessional Qualifications Details has been Successfully Submitted.");
                           $("#proffessionalfeedback").css("display", "block");
                           $("#proffessionalfeedback").css("color", "green");
                           $("#proffessionalfeedback").html("Your Proffessional Qualifications Details has been Successfully Submitted.");
                       });
                        break;
                    default:
                        Swal.fire
                        ({
                            title: "Proffessional Qualifications Deletion Error!!!",
                            text: tendersponse[1],
                            type: "error"
                        }).then(() => {
                            $("#proffessionalfeedback").css("display", "block");
                            $("#proffessionalfeedback").css("color", "red");
                            $('#proffessionalfeedback').addClass('alert alert-danger');
                            $("#proffessionalfeedback").html("Your Proffessional Qualifications Details  Could not be deleted.Kindly try Again!" + tendersponse[1] + "");
                        });
                        break;
                }
            }
        );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
                'Proffessional Qualifications Cancelled',
                'You Cancelled your Proffessional Qualifications Deletion!',
                'error'
            );
        }
    });
};
var JobApplicantProffesionalQualifications = function () {
    var JobProffesionalQualifications = function () {
        var JobProffesionalQualificationsTable = $("#tbl_applicant_ProffessionalQualifications"),
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
                    '<a class="btn btn-success EditProffessionalQualifications" id="EditProffessionalQualifications"><i class="fa fa-edit m-r-10"></i>Edit</a>',
                    '<a class="btn btn-danger DeleteProffessionalQualifications1" id="DeleteProffessionalQualifications1"><i class="fa fa-trash m-r-10">Delete</a>'
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
          ".DeleteProffessionalQualifications1",
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
                                  ApplicantProffesionalQualifications.init();
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
//Get All Academic Qualifications 
var ApplicantProffesionalQualifications = function () {
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
               // alert("record to be deleted: " + i.cells[1].innerHTML);
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
          ".DeleteProffessionalQualifications1",
          function (ProffesionalQualificationsTable) {
              ProffesionalQualificationsTable.preventDefault();
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
                                      title: "Proffesional Qualification Details Deleted!",
                                      text: "Proffesional Qualification Details Deleted Successfully!",
                                      type: "success"
                                  }).then(() => {
                                      $("#banksfeedback").css("display", "block");
                                      $("#banksfeedback").css("color", "green");
                                      $('#banksfeedback').attr("class", "alert alert-success");
                                      $("#banksfeedback").html("Your Proffesional Qualification Details have been successfully Deleted.Kindly Proceed to fill in the rest details!");
                                      $("#banksfeedback").css("display", "block");
                                      $("#banksfeedback").css("color", "green");
                                      $("#banksfeedback").html("Your Proffesional Qualification Details have been successfully Deleted.Kindly Proceed to fill in the rest details!");
                                  });
                                  ApplicantProffesionalQualifications.init();
                                  break;
                              default:
                                  Swal.fire
                                     ({
                                         title: "Proffesional Qualification Details Deletion Error!!!",
                                         text: status,
                                         type: "error"
                                     }).then(() => {
                                         $("#banksfeedback").css("display", "block");
                                         $("#banksfeedback").css("color", "red");
                                         $('#banksfeedback').addClass('alert alert-danger');
                                         $("#banksfeedback").html("Your Proffesional Qualification Details could not be Deleted.KindlyTy Again!");
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
            ProffesionalQualifications();
        }
    }
}();

function DeleteEmployementsDetails(url) {
    Swal.fire({
        title: "Confirm Deletion of Employment Details?",
        text: "Are you sure you would like to delete  Employment Details",
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
                type: 'POST',
                url: url,
                data: '',
                contentType: "application/json",
                cache: false,
                processData: false
            }).done(function (status) {
                var tendersponse = status.split('*');
                status = tendersponse[0];
                switch (status) {
                    case "success":
                        Swal.fire
                       ({
                           title: "Employment Details Deleted!",
                           text: "Your  Employment Details has been Successfully Deleted.",
                           type: "success"
                       }).then(() => {
                           $("#responsesfeedback").css("display", "block");
                           $("#responsesfeedback").css("color", "green");
                           $('#responsesfeedback').attr("class", "alert alert-success");
                           $("#responsesfeedback").html("Your Employment Details has been Successfully Deleted.");
                           $("#responsesfeedback").css("display", "block");
                           $("#responsesfeedback").css("color", "green");
                           $("#responsesfeedback").html("Your  Employment Details has been Successfully Deleted.");
                       });
                        ApplicantWorkExeperienceDetails.init();
                        break;
                    case "found":
                        Swal.fire
                       ({
                           title: " Employment Details already Deletd!",
                           text: "Your  Employment Details has been Successfully Submitted.",
                           type: "success"
                       }).then(() => {
                           $("#responsesfeedback").css("display", "block");
                           $("#responsesfeedback").css("color", "green");
                           $('#responsesfeedback').attr("class", "alert alert-success");
                           $("#responsesfeedback").html("Your Employment Details has been Successfully Submitted.");
                           $("#responsesfeedback").css("display", "block");
                           $("#responsesfeedback").css("color", "green");
                           $("#responsesfeedback").html("Your  Employment Details has been Successfully Submitted.");
                       });
                        break;
                    default:
                        Swal.fire
                        ({
                            title: " Employment Details Deletion Error!!!",
                            text: tendersponse[1],
                            type: "error"
                        }).then(() => {
                            $("#responsesfeedback").css("display", "block");
                            $("#responsesfeedback").css("color", "red");
                            $('#responsesfeedback').addClass('alert alert-danger');
                            $("#responsesfeedback").html("Your  Employment Details  Could not be deleted.Kindly try Again!" + tendersponse[1] + "");
                        });
                        break;
                }
            }
        );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
                ' Employment Details Cancelled',
                'You Cancelled your  Employment Details Deletion!',
                'error'
            );
        }
    });
};
function JobDeleteWorkExperience(url) {
    Swal.fire({
        title: "Confirm Deletion of Employment Details?",
        text: "Are you sure you would like to delete  Employment Details",
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
                type: 'POST',
                url: url,
                data: '',
                contentType: "application/json",
                cache: false,
                processData: false
            }).done(function (status) {
                var tendersponse = status.split('*');
                status = tendersponse[0];
                switch (status) {
                    case "success":
                        Swal.fire
                       ({
                           title: "Employment Details Deleted!",
                           text: "Your  Employment Details has been Successfully Deleted.",
                           type: "success"
                       }).then(() => {
                           $("#employmentdetailsfeedback").css("display", "block");
                           $("#employmentdetailsfeedback").css("color", "green");
                           $('#employmentdetailsfeedback').attr("class", "alert alert-success");
                           $("#employmentdetailsfeedback").html("Your Employment Details has been Successfully Deleted.");
                           $("#employmentdetailsfeedback").css("display", "block");
                           $("#employmentdetailsfeedback").css("color", "green");
                           $("#employmentdetailsfeedback").html("Your  Employment Details has been Successfully Deleted.");
                       });
                        JobApplicationEmploymentDetails.init();
                        break;
                    case "found":
                        Swal.fire
                       ({
                           title: " Employment Details already Deletd!",
                           text: "Your  Employment Details has been Successfully Submitted.",
                           type: "success"
                       }).then(() => {
                           $("#employmentdetailsfeedback").css("display", "block");
                           $("#employmentdetailsfeedback").css("color", "green");
                           $('#employmentdetailsfeedback').attr("class", "alert alert-success");
                           $("#employmentdetailsfeedback").html("Your Employment Details has been Successfully Submitted.");
                           $("#employmentdetailsfeedback").css("display", "block");
                           $("#employmentdetailsfeedback").css("color", "green");
                           $("#employmentdetailsfeedback").html("Your  Employment Details has been Successfully Submitted.");
                       });
                        break;
                    default:
                        Swal.fire
                        ({
                            title: " Employment Details Deletion Error!!!",
                            text: tendersponse[1],
                            type: "error"
                        }).then(() => {
                            $("#employmentdetailsfeedback").css("display", "block");
                            $("#employmentdetailsfeedback").css("color", "red");
                            $('#employmentdetailsfeedback').addClass('alert alert-danger');
                            $("#employmentdetailsfeedback").html("Your  Employment Details  Could not be deleted.Kindly try Again!" + tendersponse[1] + "");
                        });
                        break;
                }
            }
        );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
                ' Employment Details Cancelled',
                'You Cancelled your  Employment Details Deletion!',
                'error'
            );
        }
    });
};

function DeleteDocuments(url) {
    Swal.fire({
        title: "Confirm Deletion of Document?",
        text: "Are you sure you would like to Delete Document",
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
                type: 'POST',
                url: url,
                data: '',
                contentType: "application/json",
                cache: false,
                processData: false
            }).done(function (status) {
                var tendersponse = status.split('*');
                status = tendersponse[0];
                switch (status) {
                    case "success":
                        Swal.fire
                       ({
                           title: "Document Deleted!",
                           text: "Your  Document has been Successfully Deleted.",
                           type: "success"
                       }).then(() => {
                           $("#documentsfeedback").css("display", "block");
                           $("#documentsfeedback").css("color", "green");
                           $('#documentsfeedback').attr("class", "alert alert-success");
                           $("#documentsfeedback").html("Your Document has been Successfully Deleted.");
                           $("#documentsfeedback").css("display", "block");
                           $("#documentsfeedback").css("color", "green");
                           $("#documentsfeedback").html("Your Document has been Successfully Deleted.");
                       });
                        PopulateAllUploadedDocuments.init();
                        break;
                    case "found":
                        Swal.fire
                       ({
                           title: "Document Details already Deleted!",
                           text: "Your  Document Details has been Successfully Submitted.",
                           type: "success"
                       }).then(() => {
                           $("#documentsfeedback").css("display", "block");
                           $("#documentsfeedback").css("color", "green");
                           $('#documentsfeedback').attr("class", "alert alert-success");
                           $("#documentsfeedback").html("Your Document Details has been Successfully Submitted.");
                           $("#documentsfeedback").css("display", "block");
                           $("#documentsfeedback").css("color", "green");
                           $("#documentsfeedback").html("Your Document Details has been Successfully Submitted.");
                       });
                        break;
                    default:
                        Swal.fire
                        ({
                            title: "Document Details Deletion Error!!!",
                            text: tendersponse[1],
                            type: "error"
                        }).then(() => {
                            $("#documentsfeedback").css("display", "block");
                            $("#documentsfeedback").css("color", "red");
                            $('#documentsfeedback').addClass('alert alert-danger');
                            $("#documentsfeedback").html("Your Document Details  Could not be deleted.Kindly try Again!" + tendersponse[1] + "");
                        });
                        break;
                }
            }
        );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
                ' Document Deletion Cancelled',
                'You Cancelled your  Document Deletion!',
                'error'
            );
        }
    });
};
function JobDeleteDocuments(url) {
    Swal.fire({
        title: "Confirm Deletion of Document?",
        text: "Are you sure you would like to Delete Document",
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
                type: 'POST',
                url: url,
                data: '',
                contentType: "application/json",
                cache: false,
                processData: false
            }).done(function (status) {
                var tendersponse = status.split('*');
                status = tendersponse[0];
                switch (status) {
                    case "success":
                        Swal.fire
                       ({
                           title: "Document Deleted!",
                           text: "Your  Document has been Successfully Deleted.",
                           type: "success"
                       }).then(() => {
                           $("#documentsfeedback").css("display", "block");
                           $("#documentsfeedback").css("color", "green");
                           $('#documentsfeedback').attr("class", "alert alert-success");
                           $("#documentsfeedback").html("Your Document has been Successfully Deleted.");
                           $("#documentsfeedback").css("display", "block");
                           $("#documentsfeedback").css("color", "green");
                           $("#documentsfeedback").html("Your Document has been Successfully Deleted.");
                       });
                        PopulateAllUploadedDocuments.init();
                        break;
                    case "found":
                        Swal.fire
                       ({
                           title: "Document Details already Deleted!",
                           text: "Your  Document Details has been Successfully Submitted.",
                           type: "success"
                       }).then(() => {
                           $("#documentsfeedback").css("display", "block");
                           $("#documentsfeedback").css("color", "green");
                           $('#documentsfeedback').attr("class", "alert alert-success");
                           $("#documentsfeedback").html("Your Document Details has been Successfully Submitted.");
                           $("#documentsfeedback").css("display", "block");
                           $("#documentsfeedback").css("color", "green");
                           $("#documentsfeedback").html("Your Document Details has been Successfully Submitted.");
                       });
                        break;
                    default:
                        Swal.fire
                        ({
                            title: "Document Details Deletion Error!!!",
                            text: tendersponse[1],
                            type: "error"
                        }).then(() => {
                            $("#documentsfeedback").css("display", "block");
                            $("#documentsfeedback").css("color", "red");
                            $('#documentsfeedback').addClass('alert alert-danger');
                            $("#documentsfeedback").html("Your Document Details  Could not be deleted.Kindly try Again!" + tendersponse[1] + "");
                        });
                        break;
                }
            }
        );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
                ' Document Deletion Cancelled',
                'You Cancelled your  Document Deletion!',
                'error'
            );
        }
    });
};
//Get All  Uploaded Documents
var PopulateAllUploadedDocuments = function () {
    var CandidateUploadedFiles = function () {
        var CandidateUploadedFilesTable = $("#CandidateRegistrationDocuments"),
            l = CandidateUploadedFilesTable.dataTable({
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
            url: "/Home/GetRegistrationUploadsList",
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
                    json[i].FileName,
                    json[i].Size,
                    '<a class="btn btn-success DownloadFile" id="DownloadFile"><i class="fa fa-download m-r-10"></i>Edit</a>',
                    '<a class="btn btn-danger DeleteFile" id="DeleteFile"><i class="fa fa-trash m-r-10">Delete</a>'
                ]);
            }
        });
        CandidateUploadedFilesTable.on("click",
           ".DownloadFile",
           function (CandidateUploadedFilesTable) {
               CandidateUploadedFilesTable.preventDefault();
               var i = $(this).parents("tr")[0];


           });
        CandidateUploadedFilesTable.on("click",
          ".DeleteFile",
          function (CandidateUploadedFilesTable) {
              CandidateUploadedFilesTable.preventDefault();
              var i = $(this).parents("tr")[0];
              Swal.fire({
                  title: "Confirm Deleting File",
                  text: "Are you sure you'd like to proceed with deletion?",
                  type: "warning",
                  showCancelButton: true,
                  closeOnConfirm: true,
                  confirmButtonText: "Yes, Delete File!",
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
                                      title: "File Details Deleted!",
                                      text: "File Details Deleted Successfully!",
                                      type: "success"
                                  }).then(() => {
                                      $("#eaccuploadfilefeedback").css("display", "block");
                                      $("#eaccuploadfilefeedback").css("color", "green");
                                      $('#eaccuploadfilefeedback').attr("class", "alert alert-success");
                                      $("#eaccuploadfilefeedback").html("Your File Details have been successfully Deleted.Kindly Proceed to fill in the rest details!");
                                      $("#eaccuploadfilefeedback").css("display", "block");
                                      $("#eaccuploadfilefeedback").css("color", "green");
                                      $("#eaccuploadfilefeedback").html("Your File Details have been successfully Deleted.Kindly Proceed to fill in the rest details!");
                                  });
                                  PopulateAllUploadedDocuments.init();
                                  break;
                              default:
                                  Swal.fire
                                     ({
                                         title: "File Details Deletion Error!!!",
                                         text: status,
                                         type: "error"
                                     }).then(() => {
                                         $("#banksfeedback").css("display", "block");
                                         $("#banksfeedback").css("color", "red");
                                         $('#banksfeedback').addClass('alert alert-danger');
                                         $("#banksfeedback").html("Your File Details could not be Deleted.KindlyTy Again!");
                                     });
                          }
                      });
                  } else if (result.dismiss === Swal.DismissReason.cancel) {
                      Swal.fire(
                          'File Deletion Cancelled',
                          'You Cancelled your File Deletion Request!',
                          'error'
                      );
                  }
              });

          });
    }
    return {
        init: function () {
            CandidateUploadedFiles();
        }
    }
}();
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
                                      title:"Referree Details Deleted!",
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
                                  DeleteJobApplicationReferees.init();
                                  break;
                              default:
                                  Swal.fire
                                     ({
                                         title: "Bank Details Deletion Error!!!",
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
               // alert("record to be deleted: " + i.cells[1].innerHTML);

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
var ApplicantWorkExeperienceDetails = function () {
    var ApplicantWorkExeperience = function () {
        var ApplicantWorkExeperienceTable = $("#tbl_employment_details"),
            l = ApplicantWorkExeperienceTable.dataTable({
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
        ApplicantWorkExeperienceTable.on("click",
           ".EditEmploymentDetails",
           function (ApplicantWorkExeperienceTable) {
               ApplicantWorkExeperienceTable.preventDefault();
               var i = $(this).parents("tr")[0];
               $("#edit_EmploymentDetails").modal();

           });
        ApplicantWorkExeperienceTable.on("click",
          ".DeleteEmployementsDetails1",
          function (ApplicantWorkExeperienceTable) {
              ApplicantWorkExeperienceTable.preventDefault();
              var i = $(this).parents("tr")[0];
              Swal.fire({
                  title: "Confirm Deleting Employment Details ",
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
                                      text: "Employment Details Deleted Successfully!",
                                      type: "success"
                                  }).then(() => {
                                      $("#banksfeedback").css("display", "block");
                                      $("#banksfeedback").css("color", "green");
                                      $('#banksfeedback').attr("class", "alert alert-success");
                                      $("#banksfeedback").html("Your Employment Details  have been successfully Deleted.Kindly Proceed to fill in the rest details!");
                                      $("#banksfeedback").css("display", "block");
                                      $("#banksfeedback").css("color", "green");
                                      $("#banksfeedback").html("Your Employment Details  have been successfully Deleted.Kindly Proceed to fill in the rest details!");
                                  });
                                  ApplicantWorkExeperienceDetails.init();
                                  break;
                              default:
                                  Swal.fire
                                     ({
                                         title: "Employement Details Deletion Error!!!",
                                         text: status,
                                         type: "error"
                                     }).then(() => {
                                         $("#banksfeedback").css("display", "block");
                                         $("#banksfeedback").css("color", "red");
                                         $('#banksfeedback').addClass('alert alert-danger');
                                         $("#banksfeedback").html("Your Employment Details could not be Deleted.KindlyTy Again!");
                                     });
                          }
                      });
                  } else if (result.dismiss === Swal.DismissReason.cancel) {
                      Swal.fire(
                          'Employment Details Deletion Cancelled',
                          'You Cancelled your Employment Details  Deletion Request!',
                          'error'
                      );
                  }
              });

          });
    }
    return {
        init: function () {
            ApplicantWorkExeperience();
        }
    }
}();
function DeleteRefree(url) {
    Swal.fire({
        title: "Confirm Deletion of Referree Details?",
        text: "Are you sure you would like to delete  Referree Details",
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
                type: 'POST',
                url: url,
                data: '',
                contentType: "application/json",
                cache: false,
                processData: false
            }).done(function (status) {
                var tendersponse = status.split('*');
                status = tendersponse[0];
                switch (status) {
                    case "success":
                        Swal.fire
                       ({
                           title: "Referree Details Deleted!",
                           text: "Your Referree Details has been Successfully Deleted.",
                           type: "success"
                       }).then(() => {
                           $("#responsesfeedback").css("display", "block");
                           $("#responsesfeedback").css("color", "green");
                           $('#responsesfeedback').attr("class", "alert alert-success");
                           $("#responsesfeedback").html("Your Referree Details has been Successfully Deleted.");
                           $("#responsesfeedback").css("display", "block");
                           $("#responsesfeedback").css("color", "green");
                           $("#responsesfeedback").html("Your Referree Details has been Successfully Deleted.");
                       });
                        ApplicantRefereeDetails.init();
                        break;
                    case "found":
                        Swal.fire
                       ({
                           title: "Referree Details already Deletd!",
                           text: "Your  Referree Details has been Successfully Submitted.",
                           type: "success"
                       }).then(() => {
                           $("#responsesfeedback").css("display", "block");
                           $("#responsesfeedback").css("color", "green");
                           $('#responsesfeedback').attr("class", "alert alert-success");
                           $("#responsesfeedback").html("Your Referree Details has been Successfully Submitted.");
                           $("#responsesfeedback").css("display", "block");
                           $("#responsesfeedback").css("color", "green");
                           $("#responsesfeedback").html("Your Referree Details has been Successfully Submitted.");
                       });
                        break;
                    default:
                        Swal.fire
                        ({
                            title: "Referree Details Deletion Error!!!",
                            text: tendersponse[1],
                            type: "error"
                        }).then(() => {
                            $("#responsesfeedback").css("display", "block");
                            $("#responsesfeedback").css("color", "red");
                            $('#responsesfeedback').addClass('alert alert-danger');
                            $("#responsesfeedback").html("Your Referree Details  Could not be deleted.Kindly try Again!" + tendersponse[1] + "");
                        });
                        break;
                }
            }
        );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
                'Referree Details Cancelled',
                'You Cancelled your Referree Details Deletion!',
                'error'
            );
        }
    });
};
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
               // alert("record to be deleted: " + i.cells[1].innerHTML);
               $("#editproqualifications").val(i.cells[0].innerHTML);
               $("#editprofessionaltxtinstitution").val(i.cells[2].innerHTML);
               $("#editproqualificationTitle").val(i.cells[3].innerHTML);
               $("#editprogattainedscore").val(i.cells[5].innerHTML);
               $("#edittxtattainedscore").val(i.cells[4].innerHTML);
               $("#editprogcompletionyear").val(i.cells[5].innerHTML);
               $("#editprogenddate").val("");
               $("#edit_professionalQualifications").modal();

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
function EditProffessionalQualifications(EntryNo,ProffessionalQualification, Institution, CompletionYear, Speciality, AttainedScore) {
    $("#professionalentryNumber").val(EntryNo);
    $("#editproqualifications").val(ProffessionalQualification);
    $("#editprofessionaltxtinstitution").val(Institution);
    $("#editproqualificationTitle").val("");
    $("#editprogtxtspeciality").val(Speciality);
    $("#editprogattainedscore").val(AttainedScore);
    $("#editprogcompletionyear").val("");
    $("#editprogstartdate").val("");
    $("#editprogenddate").val("");
    $("#edit_professionalQualifications").modal();
}
function EditProffessionalBodiesDetails(EntryNumber,ProffessionalBody, RegistrationNo, MembershipType, MembershipDateRenewal, LicensingNumber) {
    $("#professionalbodiesentryNumber").val(EntryNumber);
    $("#editproffessionalbody").val(ProffessionalBody);
    $("#editregistrationNumber").val(RegistrationNo);
    $("#edittxtmebershiptype").val(MembershipType);
    $("#edittxtfirstdateofrenewal").val(MembershipDateRenewal);
    $("#editlicensingnumber").val(LicensingNumber);
    $("#edittxtfinaldateofrenewal").val("");
    $("#edit_proffessionalbodiesQualifications").modal();
}
function EditEmploymentDetails(EntryNumber,EmployerName, Designation, StartDate, EndDate, TermsofService) {
    $("#experienceentryNumber").val(EntryNumber);
    $("#edittxtemployerName").val(EmployerName);
    $("#edittxtjobTitle").val(Designation);
    $("#edittxtemploymentstartdate").val(StartDate);
    $("#edittxtemploymentEndDate").val(EndDate);
    $("#edittxttermsofservice").val(TermsofService);
    $("#edittxttotalnumber").val("");
    $("#edittxtdutiessumarries").val("");    
    $("#edit_EmploymentDetails").modal();
}
function EditRefeereeDetails(FirstName, EmailAddress, institution, Relationship, Country) {
    $("#edittxtrefereetype").val("");
    $("#editrefereetxttitle").val("");
    $("#editrefereetxtsurname").val("");
    $("#editrefereetxtrefereefname").val(FirstName);
    $("#editrefereetxtotherNames").val("");
    $("#editrefereetxtcontactperson").val("");
    $("#editrefereeinstitution").val(institution);
    $("#editrefereetxtEmailAddress").val(EmailAddress);
    $("#editrefereetxtphonenumber").val("");
    $("#editrefereetxtRelationships").val(Relationship);
    $("#editrefereepreiodofknowing").val("");
    $("#edit_referees").modal();
}