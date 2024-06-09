$(document).ready(function () {
$('.pass_show').append('<span class="ptxt">Show</span>');  
});
  

$(document).on('click','.pass_show .ptxt', function(){ 

$(this).text($(this).text() == "Show" ? "Hide" : "Show"); 

$(this).prev().attr('type', function(index, attr){return attr == 'password' ? 'text' : 'password'; }); 

});
$(".btn_passwordreset_Details").click(function () {
    var passwordmodel = {
        "emailaddress": $("#txtemailaddress").val(),
        "oldpassword": $("#txtoldpassword").val(),
        "newpassword": $("#txtnewpassword").val(),
        "confirmpassword": $("#txtconfirmnewpassword").val()
    }
    console.log(JSON.stringify(passwordmodel))
    //Swal Message
    Swal.fire({
        title: "Confirm Password Reset?",
        text: "Are you sure you would like to proceed with submission of Password Reset?",
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
                url: "/Home/ChangePassword",
                type: "POST",
                data: JSON.stringify(passwordmodel),
                contentType: "application/json",
                cache: false,
                processData: false
            }).done(function (status) {
                var registerstatus = status.split('*');
                status = registerstatus[0];
                feedback = registerstatus[1];
                switch (status) {
                    case "success":
                        Swal.fire
                        ({
                            title: "Password Reset Successfully!",
                            text: feedback,
                            type: "success"
                        }).then(() => {
                            $("#passwordresetfeedback").css("display", "block");
                            $("#passwordresetfeedback").css("color", "green");
                            $('#passwordresetfeedback').attr("class", "alert alert-success");
                            $("#passwordresetfeedback").html("Your Password Details have been successfully submitted.Kindly Proceed to Login!");
                            $("#passwordresetfeedback").css("display", "block");
                            $("#passwordresetfeedback").css("color", "green");
                            $("#passwordresetfeedback").html("Your BPassword Details have been successfully submitted.Kindly Proceed to Login!");
                            window.location = "/Home/Login";
                        });
                        break;
                    case "passwordmismatch":
                        Swal.fire
                        ({
                            title: "Password Missmatch Error!",
                            text: feedback,
                            type: "error"
                        }).then(() => {
                            $("#passwordresetfeedback").css("display", "block");
                            $("#passwordresetfeedback").css("color", "red");
                            $('#passwordresetfeedback').addClass('alert alert-danger');
                            $("#passwordresetfeedback").html("Your New Password Details and Confirm Password details does not match.Kindly ensure that the New Passsword and Confirm Password Match!");
                            $("#passwordresetfeedback").css("display", "block");
                            $("#passwordresetfeedback").css("color", "red");
                            $("#passwordresetfeedback").html("Your New Password Details and Confirm Password details does not match.Kindly ensure that the New Passsword and Confirm Password Match!");

                        });
                        break;
                    case "missingfield":
                        Swal.fire
                        ({
                            title: "Missing Password Reset Fields!",
                            text: feedback,
                            type: "error"
                        }).then(() => {
                            $("#passwordresetfeedback").css("display", "block");
                            $("#passwordresetfeedback").css("color", "red");
                            $('#passwordresetfeedback').addClass('alert alert-danger');
                            $("#passwordresetfeedback").html("Kindly ensure you fill in all the details," + feedback);
                            $("#passwordresetfeedback").css("display", "block");
                            $("#passwordresetfeedback").css("color", "red");
                            $("#passwordresetfeedback").html("Kindly ensure you fill in all the details," + feedback);

                        });
                        break;
                    case "worngcurrentpassword":
                        Swal.fire
                        ({
                            title: "Wrong Current Password Error!",
                            text: feedback,
                            type: "error"
                        }).then(() => {
                            $("#passwordresetfeedback").css("display", "block");
                            $("#passwordresetfeedback").css("color", "red");
                            $('#passwordresetfeedback').addClass('alert alert-danger');
                            $("#passwordresetfeedback").html("Your Current Password Details  Provided  does not match with the already registered password.Kindly ensure that the Current Passsword is Correct!");
                            $("#passwordresetfeedback").css("display", "block");
                            $("#passwordresetfeedback").css("color", "red");
                            $("#passwordresetfeedback").html("Your Current Password Details  Provided  does not match with the already registered password.Kindly ensure that the Current Passsword is Correct!");

                        });
                        break;
                    default:
                        Swal.fire
                        ({
                            title: "Password Reset Details Submission Error!!!",
                            text: feedback,
                            type: "error"
                        }).then(() => {
                            $("#passwordresetfeedback").css("display", "block");
                            $("#passwordresetfeedback").css("color", "red");
                            $('#passwordresetfeedback').addClass('alert alert-danger');
                            $("#passwordresetfeedback").html("Your Password Reset Details could not be submitted" + feedback + "");
                        });
                        break;
                }
            }
            );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
                'Password Reset Details Cancelled',
                'You cancelled your Password Reset submission details!',
                'error'
            );
        }
    });

});
  $(".btn_reset_passord").click(function () {
        var passwordmodel = {
            "emailaddress": $("#txtemailresetaddress").val()
        }
        console.log(JSON.stringify(passwordmodel))
        //Swal Message
        Swal.fire({
            title: "Confirm Password Reset?",
            text: "Are you sure you would like to proceed with submission of Password Reset?",
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
                    url: "/Home/ResetCandidatePassword",
                    type: "POST",
                    data: JSON.stringify(passwordmodel),
                    contentType: "application/json",
                    cache: false,
                    processData: false
                }).done(function (status) {
                    var registerstatus = status.split('*');
                    status = registerstatus[0];
                    feedback = registerstatus[1];
                    switch (status) {
                        case "success":
                            Swal.fire
                            ({
                                title: "Password Reset Successfully!",
                                text: feedback,
                                type: "success"
                            }).then(() => {
                                $("#resetpassfeedback").css("display", "block");
                                $("#resetpassfeedback").css("color", "green");
                                $('#resetpassfeedback').attr("class", "alert alert-success");
                                $("#resetpassfeedback").html("Your Password Details have been successfully submitted.Kindly Proceed to Check your Email Account for Login Credentials!");
                                $("#resetpassfeedback").css("display", "block");
                                $("#resetpassfeedback").css("color", "green");
                                $("#resetpassfeedback").html("Your Password Details have been successfully submitted.Kindly Proceed to Check your Email Account for Login Credentials");
                                window.location = "/Home/Login";
                            });
                            break;
                              case "worngcurrentpassword":
                        Swal.fire
                        ({
                            title: "Wrong Current Password Error!",
                            text: feedback,
                            type: "error"
                        }).then(() => {
                            $("#passwordresetfeedback").css("display", "block");
                            $("#passwordresetfeedback").css("color", "red");
                            $('#passwordresetfeedback').addClass('alert alert-danger');
                            $("#passwordresetfeedback").html("Your Current Password Details  Provided  does not match with the already registered password.Kindly ensure that the Current Passsword is Correct!");
                            $("#passwordresetfeedback").css("display", "block");
                            $("#passwordresetfeedback").css("color", "red");
                            $("#passwordresetfeedback").html("Your Current Password Details  Provided  does not match with the already registered password.Kindly ensure that the Current Passsword is Correct!");

                        });
                        break;
                        case "missingfield":
                            Swal.fire
                            ({
                                title: "Missing Password Reset Fields!",
                                text: feedback,
                                type: "error"
                            }).then(() => {
                                $("#passwordresetfeedback").css("display", "block");
                                $("#passwordresetfeedback").css("color", "red");
                                $('#passwordresetfeedback').addClass('alert alert-danger');
                                $("#passwordresetfeedback").html("Kindly ensure you fill in all the details," + feedback);
                                $("#passwordresetfeedback").css("display", "block");
                                $("#passwordresetfeedback").css("color", "red");
                                $("#passwordresetfeedback").html("Kindly ensure you fill in all the details," + feedback);

                            });
                            break;
                        case "emailnotfound":
                            Swal.fire
                            ({
                                title: "Email Address NotFound Error!",
                                text: feedback,
                                type: "error"
                            }).then(() => {
                                $("#resetpassfeedback").css("display", "block");
                                $("#resetpassfeedback").css("color", "red");
                                $('#resetpassfeedback').addClass('alert alert-danger');
                                $("#resetpassfeedback").html("Your Provided Email Address does not Exist.Kindly ensure that the Email Address Provided is Correct!");
                                $("#resetpassfeedback").css("display", "block");
                                $("#resetpassfeedback").css("color", "red");
                                $("#resetpassfeedback").html("Your Provided Email Address does not Exist.Kindly ensure that the Email Address Provided is Correct!");

                            });
                            break;
                        default:
                            Swal.fire
                            ({
                                title: "Password Reset Details Submission Error!!!",
                                text: feedback,
                                type: "error"
                            }).then(() => {
                                $("#resetpassfeedback").css("display", "block");
                                $("#resetpassfeedback").css("color", "red");
                                $('#resetpassfeedback').addClass('alert alert-danger');
                                $("#resetpassfeedback").html("Your Password Reset Details could not be submitted." + feedback + "");
                            });
                            break;
                    }
                }
                );
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Password Reset Details Cancelled',
                    'You cancelled your Password Reset submission details!',
                    'error'
                );
            }
        });

  });
