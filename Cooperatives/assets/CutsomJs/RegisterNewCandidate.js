$(document).ready(function () {

    $(".btn_candidateregister").click(function () {
       
        var data = {
            "IdNumber": $("#txtidnumber").val(),
            "SurName": $("#txtsurname").val(),
            "FirstName": $("#txtfirstname").val(),
            "OtherNames": $("#txtothernames").val(),
            "EmailAddress": $("#txtemailaddress").val(),
            "PhoneNumber": $("#txtphonenumber").val(),
            "TermsandConditions": $('#termsandconditionCheck').is(':checked')
        }
       
        Swal.fire({
            title: "Confirm Candidate Registration?",
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
                    url: "/Home/CandidateRegistration",
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
                                title: "Candidate Registration Submitted!",
                                text: registerstatus[1],
                                type: "success"
                            }).then(() => {
                                $("#feedback").css("display", "block");
                                $("#feedback").css("color", "green");
                                $('#feedback').attr("class", "alert alert-success");
                                $("#feedback").html("Your Account Creation Request have been successfully submitted.Kindly Check your Email Account for More Details!");
                                $("#uploadsMsg").css("display", "block");
                                $("#uploadsMsg").css("color", "green");
                                $("#uploadsMsg").html("Your Account Creation Request have been successfully submitted.Kindly Check your Email Account for More Details!" );
                                $("#preqappl_form").reset();
                                windows
                            });
                            break;
                        case "missingfield":
                            Swal.fire
                           ({
                               title: "Missing Registration Details",
                               text: "Ensure you fill in all the details before you proceed." + " " + registerstatus[1],
                               type: "error"
                           }).then(() => {
                               $("#feedback").css("display", "block");
                               $("#feedback").css("color", "red");
                               $('#feedback').addClass('alert alert-danger');
                               $("#feedback").html("Ensure you fill in all the details before you proceed." + " " + registerstatus[1]);
                           });
                            break;
                        default:
                            Swal.fire
                            ({
                                title: "Registration Error!!!",
                                text: "Your Account Creation Request could not been successfully submitted" + " " + registerstatus[1],
                                type: "error"
                            }).then(() => {
                                $("#feedback").css("display", "block");
                                $("#feedback").css("color", "red");
                                $('#feedback').addClass('alert alert-danger');
                                $("#feedback").html("Your Account Creation Request could not been successfully submitted" + " " + registerstatus[1]);
                            });
                            break;
                    }
                }
                );
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Registration Cancelled',
                    'You cancelled your Account registration submission details!',
                    'error'
                );
            }
        });

    });
})