'use-strict';
function ApplyOnline(url) {
    var VacancyId = $('#txtjobNumber').val();
    var ApplicationNumber = $('#applicationNumber').val();
    //const el = document.createElement('div')
   // el.innerHTML = "Here's a <a href='../CandidateProfile/Personalinformation'>Click here to update profile</a>"
    console.log(JSON.stringify(VacancyId))
    Swal.fire({      
        title: "Confirm Job Vacancy  Application?",
        text: "Are you sure you would like to Apply for this Vacancy? Remember, your current profile will be submitted. If you wish to update your profile, kindly do so before applying for the position.",
        
        type: "warning",
        showCancelButton: true,
        closeOnConfirm: true,
        confirmButtonText: "Yes, Proceed!",
        confirmButtonClass: "btn-success",
        confirmButtonColor: "#008000",
        position: "center"
    }).then((result) => {
        jQuery(".loader").show();
        if (result.value) {
            $.ajax({
                cache: false,
                type: 'GET',
                url: url,
                cache: false,
                processData: false,
            }).done(function (status) {
                var tendersponse = status.split('*');
                status = tendersponse[0];
                switch (status) {
                    case "success":
                        Swal.fire
                       ({
                           title: "Your Job Application has been Successfully Submitted.",
                           text: "",
                           type: "success"
                       }).then(() => {
                           $("#responsesfeedback").css("display", "block");
                           $("#responsesfeedback").css("color", "green");
                           $('#responsesfeedback').attr("class", "alert alert-success");
                           $("#responsesfeedback").html("Your Job Application Process has been Successfully Created.");
                           $("#responsesfeedback").css("display", "block");
                           $("#responsesfeedback").css("color", "green");
                           $("#responsesfeedback").html("Your Job Application Process has been Successfully Created.");
                           window.location.href = "../Home/Dashboard";
                       });

                        break;
                    case "profileincomplete":
                        Swal.fire
                       ({
                           title: "Please!. Kindly Submit your profile before Application!",
                           text: "Your profile details have not been submitted. Kindly submit your profile before you proceed",
                           type: "error"
                       }).then(() => {
                           $("#responsesfeedback").css("display", "block");
                           $("#responsesfeedback").css("color", "red");
                           $('#responsesfeedback').attr("class", "alert alert-danger");
                           $("#responsesfeedback").html("Your profile details could not be submitted. Kindly submit your profile before you proceed!");
                           $("#responsesfeedback").css("display", "block");
                           $("#responsesfeedback").css("color", "red");
                           $("#responsesfeedback").html("Your profile details could not be submitted. Kindly submit your profile before you proceed!");
                       });
                        break;
                    default:
                        Swal.fire
                        ({
                            title: "Job Vacancy Application Error!!!",
                            text: tendersponse[1],
                            type: "error"
                        }).then(() => {
                            $("#responsesfeedback").css("display", "block");
                            $("#responsesfeedback").css("color", "red");
                            $('#responsesfeedback').addClass('alert alert-danger');
                            $("#responsesfeedback").html("Your Job Application Details  Could not be submitted.Kindly try Again!" + tendersponse[1] + "");
                        });
                        break;
                }
            }
        );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
                'Job Application Cancelled',
                'You cancelled your Job Application Submission Details!',
                'error'
            );
        }
    });

};
function ApplyInternship(url) {
    // var TenderNoticeNo = $('#tendernotice').val();
    Swal.fire({
        title: "Confirm Internship Application?",
        text: "Are you sure you would like to Apply for this Vacancy?",
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
                url: url,
                cache: false,
                processData: false,
            }).done(function (status) {
                var tendersponse = status.split('*');
                status = tendersponse[0];
                switch (status) {
                    case "success":
                        Swal.fire
                       ({
                           title: "Proceed to review and Update Your profile then submit your Job Application",
                           text: "",
                           type: "success"
                       }).then(() => {
                           $("#responsesfeedback").css("display", "block");
                           $("#responsesfeedback").css("color", "green");
                           $('#responsesfeedback').attr("class", "alert alert-success");
                           $("#responsesfeedback").html("Your Job Application Process has been Successfully Created. kindly  Proceed to review and Update Your profile then submit your Job Application!");
                           $("#responsesfeedback").css("display", "block");
                           $("#responsesfeedback").css("color", "green");
                           $("#responsesfeedback").html("Your Job Application Process has been Successfully Created. Kindly Proceed to review and Update Your profile then submit your Job Application");
                           window.location.href = "../Internship/Index";
                       });

                        break;
                    case "found":
                        Swal.fire
                       ({
                           title: "Kindly Proceed to Update Your Job Application Details!",
                           text: "",
                           type: "success"
                       }).then(() => {
                           $("#responsesfeedback").css("display", "block");
                           $("#responsesfeedback").css("color", "green");
                           $('#responsesfeedback').attr("class", "alert alert-success");
                           $("#responsesfeedback").html("Your Job Application Process has been Successfully Created. Kindly Proceed to review and Update Your profile then submit your Job Application!");
                           $("#responsesfeedback").css("display", "block");
                           $("#responsesfeedback").css("color", "green");
                           $("#responsesfeedback").html("Your Job Application Process has been Successfully Created. Kindly Proceed to review and Update Your profile then submit your Job Application");
                           window.location.href = "../Internship/Index";
                       });

                        break;
                    default:
                        Swal.fire
                        ({
                            title: "Internship Application Error!!!",
                            text: tendersponse[1],
                            type: "error"
                        }).then(() => {
                            $("#responsesfeedback").css("display", "block");
                            $("#responsesfeedback").css("color", "red");
                            $('#responsesfeedback').addClass('alert alert-danger');
                            $("#responsesfeedback").html("Your Job Application Details  Could not be submitted.Kindly try Again!" + tendersponse[1] + "");
                        });
                        break;
                }
            }
        );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
                'Job Application Cancelled',
                'You cancelled your Job Application Submission Details!',
                'error'
            );
        }
    });

};
function ApplyAttachment(url) {
    // var TenderNoticeNo = $('#tendernotice').val();
    Swal.fire({
        title: "Confirm Attachment Application?",
        text: "Are you sure you would like to Apply for this Vacancy?",
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
                url: url,
                cache: false,
                processData: false,
            }).done(function (status) {
                var tendersponse = status.split('*');
                status = tendersponse[0];
                switch (status) {
                    case "success":
                        Swal.fire
                       ({
                           title: "Proceed to review and Update Your profile then submit your Job Application",
                           text: "",
                           type: "success"
                       }).then(() => {
                           $("#responsesfeedback").css("display", "block");
                           $("#responsesfeedback").css("color", "green");
                           $('#responsesfeedback').attr("class", "alert alert-success");
                           $("#responsesfeedback").html("Your Attachment Application Process has been Successfully Created. Kindly Proceed to review and Update Your profile then submit your Job Application");
                           $("#responsesfeedback").css("display", "block");
                           $("#responsesfeedback").css("color", "green");
                           $("#responsesfeedback").html("Your Attachment Application Process has been Successfully Created. Kindly Proceed to review and Update Your profile then submit your Job Application");
                           window.location.href = "../Internship/Index";
                       });

                        break;
                    case "found":
                        Swal.fire
                       ({
                           title: "Proceed to review and Update Your profile then submit your Job Application",
                           text: "",
                           type: "success"
                       }).then(() => {
                           $("#responsesfeedback").css("display", "block");
                           $("#responsesfeedback").css("color", "green");
                           $('#responsesfeedback').attr("class", "alert alert-success");
                           $("#responsesfeedback").html("Your Attachment Application Process has been Successfully Created. Kindly Proceed to review and Update Your profile then submit your Job Application");
                           $("#responsesfeedback").css("display", "block");
                           $("#responsesfeedback").css("color", "green");
                           $("#responsesfeedback").html("Your Attachment Application Process has been Successfully Created. Kindly sProceed to review and Update Your profile then submit your Job Application");
                           window.location.href = "../Internship/Index";
                       });

                        break;
                    default:
                        Swal.fire
                        ({
                            title: "Internship Application Error!!!",
                            text: tendersponse[1],
                            type: "error"
                        }).then(() => {
                            $("#responsesfeedback").css("display", "block");
                            $("#responsesfeedback").css("color", "red");
                            $('#responsesfeedback').addClass('alert alert-danger');
                            $("#responsesfeedback").html("Your Attachment Application Details  Could not be submitted.Kindly try Again!" + tendersponse[1] + "");
                        });
                        break;
                }
            }
        );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
                'Job Application Cancelled',
                'You cancelled your Job Application Submission Details!',
                'error'
            );
        }
    });

};
function Completeprofile() {
    Swal.fire({
        title: "Confirm Profile Submission?",
        text: "Are you sure you would like to Submit your  Profile",
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
                url: "/Home/SubmitCandidateProfile",
                type: "POST",
                data: '',
                contentType: "application/json",
                cache: false,
                processData: false
            }).done(function (status) {
                var profileresponse = status.split('*');
                status = profileresponse[0];
                switch (status) {
                    case "success":
                        Swal.fire
                       ({
                           title: "Candidate Profile Details Submitted!",
                           text: "Your Candidate Profile Details has been Successfully Submitted. Kindly Proceed to View and Update Your Application!",
                           type: "success"
                       }).then(() => {
                           $("#profilesubmissionfeedback").css("display", "block");
                           $("#profilesubmissionfeedback").css("color", "green");
                           $('#profilesubmissionfeedback').attr("class", "alert alert-success");
                           $("#profilesubmissionfeedback").html("Your Candidate Profile Details has been Successfully Submitted.Kindly Check your Email Address");
                           $("#profilesubmissionfeedback").css("display", "block");
                           $("#profilesubmissionfeedback").css("color", "green");
                           $("#profilesubmissionfeedback").html("Your Candidate Profile Details has been Successfully Submitted.Kindly Check your Email Address");
                       });

                        break;
                    case "found":
                        Swal.fire
                       ({
                           title: "Candidate Profile Details already Submitted!",
                           text: "Your Candidate Profile Details has been Successfully Submitted.",
                           type: "success"
                       }).then(() => {
                           $("#profilesubmissionfeedback").css("display", "block");
                           $("#profilesubmissionfeedback").css("color", "green");
                           $('#profilesubmissionfeedback').attr("class", "alert alert-success");
                           $("#profilesubmissionfeedback").html("Your Candidate Profile Details has been Successfully Submitted.Kindly Check your Email Address");
                           $("#profilesubmissionfeedback").css("display", "block");
                           $("#profilesubmissionfeedback").css("color", "green");
                           $("#profilesubmissionfeedback").html("Your Candidate Profile Details has been Successfully Submitted.Kindly Check your Email Address");
                       });

                        break;
                    default:
                        Swal.fire
                        ({
                            title: "Candidate Profile Error!!!",
                            text: profileresponse[1],
                            type: "error"
                        }).then(() => {
                            $("#profilesubmissionfeedback").css("display", "block");
                            $("#profilesubmissionfeedback").css("color", "red");
                            $('#profilesubmissionfeedback').addClass('alert alert-danger');
                            $("#profilesubmissionfeedback").html("Your Candidate Profile Details could not be Submitted.Kindly try Again!" + profileresponse[1] + "");
                        });
                        break;
                }
            }
        );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
                'Candidate Profile Cancelled',
                'You cancelled your profile Submission Details!',
                'error'
            );
        }
    });

};

function SubmitJobApplication() {
    Swal.fire({
        title: "Confirm Job Application Submission?",
        text: "Are you sure you would like to Submit your Application",
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
                url: "/Home/SubmitJobApplication",
                type: "POST",
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
                           title: "Job Application Successfully Submitted!",
                           text: "Your Job Application Details has been Successfully Submitted.!",
                           type: "success"
                       }).then(() => {
                           $("#submitfeedback").css("display", "block");
                           $("#submitfeedback").css("color", "green");
                           $('#submitfeedback').attr("class", "alert alert-success");
                           $("#submitfeedback").html("Your Job Application Details has been Successfully Submitted!");
                           $("#submitfeedback").css("display", "block");
                           $("#submitfeedback").css("color", "green");
                           $("#submitfeedback").html("Your Job Application Details has been Successfully Submitted");
                       });

                        break;
                    case "found":
                        Swal.fire
                       ({
                           title: "Job Application Already Submitted!",
                           text: "Your Job Application Details has been Successfully Submitted!",
                           type: "success"
                       }).then(() => {
                           $("#submitfeedback").css("display", "block");
                           $("#submitfeedback").css("color", "green");
                           $('#submitfeedback').attr("class", "alert alert-success");
                           $("#submitfeedback").html("Your Job Application Details has been Successfully Submitted!");
                           $("#submitfeedback").css("display", "block");
                           $("#submitfeedback").css("color", "green");
                           $("#submitfeedback").html("Your Job Application Details has been Successfully Submitted!");
                       });

                        break;
                    default:
                        Swal.fire
                        ({
                            title: "Job Application Error!!!",
                            text: tendersponse[1],
                            type: "error"
                        }).then(() => {
                            $("#submitfeedback").css("display", "block");
                            $("#submitfeedback").css("color", "red");
                            $('#submitfeedback').addClass('alert alert-danger');
                            $("#submitfeedback").html("Your Job Application Details has been Submitted.Kindly try Again!" + tendersponse[1] + "");
                        });
                        break;
                }
            }
        );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
                'Job Application Cancelled',
                'You cancelled your Job Appplication Submission Details!',
                'error'
            );
        }
    });

};
