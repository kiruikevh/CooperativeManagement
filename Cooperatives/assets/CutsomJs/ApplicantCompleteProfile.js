$(document).ready(function () {
    $(".btn_personalinformations").click(function () {
        var data = {
            "Prefix": $("#prefixtype").val(),
            "E_Mail": $("#emailaddress").val(),
            "Surname": $("#txtsurname").val(),
            "First_Name": $("#txtfirstname").val(),
            "Othernames": $("#txtothernames").val(),
            "Gender": $("#txtgender").val(),
            "IDNumber": $("#txtidnumber").val(),
            "Passport_No": $("#txtpassport").val(),
            "Nationality": $("#txtnationality").val(),
            "Religion": $("#txtreligion").val(),
            "DOB": $("#txtdob").val(),
            "County_of_Birth": $("#txtcountyoforigin").val(),
            "County_of_Residence": $("#txtcountyofbirth").val(),
            "Ethnic_Group": $("#txtethnicity").val(),
            "NHIF": $("#txtnhif").val(),
            "NSSF": $("#txtnssf").val(),
            "Mobile_Phone_No": $("#txtmobilenumber").val(),
            "KRA_Pin": $("#txtkrapin").val(),
            "Marital_Status": $("#maritalstatus").val(),
            "Post_Code": $("#txtpostcode").val(),
            "Address": $("#txtpobox").val(),
            "Disability_Code": $("#disabled").val(),
            
        }
        Swal.fire({
            title: "Confirm Candidate Personal Information?",
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
                    url: "/Home/CandidatePersonalDetailsRegistration",
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
                                title: "Candidate Personal Information Saved!",
                                text: registerstatus[1],
                                type: "success"
                            }).then(() => {
                                $("#feedback").css("display", "block");
                                $("#feedback").css("color", "green");
                                $('#feedback').attr("class", "alert alert-success");
                                $("#feedback").html("Your Personal Information have been successfully submitted" + "  " + registerstatus[1]);
                                $("#uploadsMsg").css("display", "block");
                                $("#uploadsMsg").css("color", "green");
                                $("#uploadsMsg").html("Your Personal Information have been successfully submitted." + "  " + registerstatus[1]);
                                $("#preqappl_form").reset();
                                document.getElementById("emailaddress").value = "";
                                document.getElementById("txtsurname").value = "";
                                document.getElementById("txtfirstname").value = "";
                                document.getElementById("txtothernames").value = "";
                                document.getElementById("txtgender").value = "";
                                document.getElementById("txtgender").value = "";
                                document.getElementById("txtidnumber").value = ""; 
                                document.getElementById("txtpassport").value = "";
                                document.getElementById("txtnationality").value = "";
                                document.getElementById("txtreligion").value = "";
                            });
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
                                title: "Registration Error!!!",
                                text: "Your Personal information Details could not been successfully submitted" + " " + registerstatus[1],
                                type: "error"
                            }).then(() => {
                                $("#feedback").css("display", "block");
                                $("#feedback").css("color", "red");
                                $('#feedback').addClass('alert alert-danger');
                                $("#feedback").html("Your Personal information Details could not been successfully submitted" + " " + registerstatus[1]);
                            });
                            break;
                    }
                }
                );
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Registration Cancelled',
                    'You cancelled your Candidate Registration submission details!',
                    'error'
                );
            }
        });

    });
})