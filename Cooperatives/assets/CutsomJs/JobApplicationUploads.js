$(document).ready(function () {
    $(".jobuploadeaccclearance").click(function () {
        if (window.FormData == undefined)
            alert("Error: FormData is undefined");
        else {
            var fileUpload = $("#jobEACCfileToUpload").get(0);
            var files = fileUpload.files;
            var fileData = new FormData();
            var filetoUpload = document.getElementById('jobEACCfileToUpload').files[0];
             fileData.append("uploadfile", filetoUpload);

            Swal.fire({
                title: "Confirm EACC Clearance Upload?",
                text: "Are you sure you would like to proceed with Upload?",
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
                        url: "/Home/UploadJobApplicationDocumentsFiles",
                        type: 'post',
                        datatype: 'json',
                        contentType: false,
                        processData: false,
                        async: false,
                        data: fileData,
                    }).done(function (status) {
                        var registerstatus = status.split('*');
                        status = registerstatus[0];
                        switch (status) {
                            case "success":
                                Swal.fire
                                ({
                                    title: "File Uploaded Successfully!",
                                    text: registerstatus[1],
                                    type: "success"
                                }).then(() => {
                                    $("#eaccuploadfilefeedback").css("display", "block");
                                    $("#eaccuploadfilefeedback").css("color", "green");
                                    $('#eaccuploadfilefeedback').attr("class", "alert alert-success");
                                    $("#eaccuploadfilefeedback").html("Your EACC Clearance have been successfully Uploaded Successfully");
                                    $("#eaccuploadfilefeedback").css("display", "block");
                                    $("#eaccuploadfilefeedback").css("color", "green");
                                    $("#eaccuploadfilefeedback").html("Your EACC Clearance have been successfully Uploaded Successfully.");
                                    $("#preqappl_form").reset();
                                });
                                PopulateAllUploadedDocuments.init();
                                $("button#nextBtn").css("display", "block");
                                break;
                            default:
                                Swal.fire
                                ({
                                    title: "File Upload Error!!!",
                                    text: "Your EACC Clearance have been successfully Uploaded" + " " + registerstatus[1],
                                    type: "error"
                                }).then(() => {
                                    $("#eaccuploadfilefeedback").css("display", "block");
                                    $("#eaccuploadfilefeedback").css("color", "red");
                                    $('#eaccuploadfilefeedback').addClass('alert alert-danger');
                                    $("#eaccuploadfilefeedback").html("Your Referees Details  could not been successfully submitted" + " " + registerstatus[1]);
                                });
                                break;
                        }
                    }
                    );
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    Swal.fire(
                        'File Upload Cancelled',
                        'You cancelled your File Upload submission details!',
                        'error'
                    );
                }
            });

        }
    });
    $(".jobpoliceclearance").click(function () {
        if (window.FormData == undefined)
            alert("Error: FormData is undefined");

        else {
            var fileUpload = $("#jobfilepoliceclearance").get(0);
            var files = fileUpload.files;

            var fileData = new FormData();

            fileData.append(files[0].name, files[0]);
            var filetoUpload = document.getElementById('jobfilepoliceclearance').files[0];
            fileData.append("uploadfile", filetoUpload);
            Swal.fire({
                title: "Confirm Police Clearance File Upload?",
                text: "Are you sure you would like to proceed with Upload?",
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
                        url: "/Home/UploadJobApplicationDocumentsFiles",
                        type: "POST",
                        datatype: 'json',
                        contentType: false,
                        processData: false,
                        async: false,
                        data: fileData,
                    }).done(function (status) {
                        var registerstatus = status.split('*');
                        status = registerstatus[0];
                        switch (status) {
                            case "success":
                                Swal.fire
                                ({
                                    title: "File Uploaded Successfully!",
                                    text: registerstatus[1],
                                    type: "success"
                                }).then(() => {
                                    $("#policeclearancefilefeedback").css("display", "block");
                                    $("#policeclearancefilefeedback").css("color", "green");
                                    $('#policeclearancefilefeedback').attr("class", "alert alert-success");
                                    $("#policeclearancefilefeedback").html("Your Police Clearance have been successfully Uploaded" + "  " + registerstatus[1]);
                                    $("#policeclearancefilefeedback").css("display", "block");
                                    $("#policeclearancefilefeedback").css("color", "green");
                                    $("#policeclearancefilefeedback").html("Your Police Clearance have been successfully Uploaded." + "  " + registerstatus[1]);
                                    $("#preqappl_form").reset();
                                    windows
                                });
                                PopulateAllUploadedDocuments.init();
                                $("button#nextBtn").css("display", "block");
                                break;
                            default:
                                Swal.fire
                                ({
                                    title: "File Upload Error!!!",
                                    text: "Your Police Clearance have been successfully Uploaded" + " " + registerstatus[1],
                                    type: "error"
                                }).then(() => {
                                    $("#policeclearancefilefeedback").css("display", "block");
                                    $("#policeclearancefilefeedback").css("color", "red");
                                    $('#policeclearancefilefeedback').addClass('alert alert-danger');
                                    $("#policeclearancefilefeedback").html("Your Police Clearance Details  could not been successfully submitted" + " " + registerstatus[1]);
                                });
                                break;
                        }
                    }
                    );
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    Swal.fire(
                        'File Upload Cancelled',
                        'You cancelled your File Upload submission details!',
                        'error'
                    );
                }
            });

        }
    });
    $(".jobkracertificate").click(function () {
        if (window.FormData == undefined)
            alert("Error: FormData is undefined");

        else {
            var fileUpload = $("#jobfilekracertificate").get(0);
            var files = fileUpload.files;

            var fileData = new FormData();

            fileData.append(files[0].name, files[0]);
            var filetoUpload = document.getElementById('jobfilekracertificate').files[0];
            fileData.append("uploadfile", filetoUpload);

            Swal.fire({
                title: "Confirm Tax Compliance Certificate File Upload?",
                text: "Are you sure you would like to proceed with Upload?",
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
                        url: "/Home/UploadJobApplicationDocumentsFiles",
                        type: "POST",
                        datatype: 'json',
                        contentType: false,
                        processData: false,
                        async: false,
                        data: fileData,
                    }).done(function (status) {
                        var registerstatus = status.split('*');
                        status = registerstatus[0];
                        switch (status) {
                            case "success":
                                Swal.fire
                                ({
                                    title: "File Uploaded Successfully!",
                                    text: registerstatus[1],
                                    type: "success"
                                }).then(() => {
                                    $("#kracertificatefilefeedback").css("display", "block");
                                    $("#kracertificatefilefeedback").css("color", "green");
                                    $('#kracertificatefilefeedback').attr("class", "alert alert-success");
                                    $("#kracertificatefilefeedback").html("Your Tax Compliance Certificate have been successfully Uploaded" + "  " + registerstatus[1]);
                                    $("#kracertificatefilefeedback").css("display", "block");
                                    $("#kracertificatefilefeedback").css("color", "green");
                                    $("#kracertificatefilefeedback").html("Your Tax Compliance Certificate have been successfully Uploaded." + "  " + registerstatus[1]);
                                    $("#preqappl_form").reset();
                                });
                                PopulateAllUploadedDocuments.init();
                                $("button#nextBtn").css("display", "block");
                                break;
                            default:
                                Swal.fire
                                ({
                                    title: "File Upload Error!!!",
                                    text: "Your Tax Compliance Certificate have been successfully Uploaded" + " " + registerstatus[1],
                                    type: "error"
                                }).then(() => {
                                    $("#kracertificatefilefeedback").css("display", "block");
                                    $("#kracertificatefilefeedback").css("color", "red");
                                    $('#kracertificatefilefeedback').addClass('alert alert-danger');
                                    $("#kracertificatefilefeedback").html("Your Tax Compliance Certificate Details  could not been successfully submitted" + " " + registerstatus[1]);
                                });
                                break;
                        }
                    }
                    );
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    Swal.fire(
                        'File Upload Cancelled',
                        'You cancelled your File Upload submission details!',
                        'error'
                    );
                }
            });

        }
    });
    $(".jobhelbclearance").click(function () {
        if (window.FormData == undefined)
            alert("Error: FormData is undefined");

        else {
            var fileUpload = $("#jobfilehelbclearance").get(0);
            var files = fileUpload.files;

            var fileData = new FormData();

            fileData.append(files[0].name, files[0]);
            var filetoUpload = document.getElementById('jobfilehelbclearance').files[0];
            fileData.append("uploadfile", filetoUpload);

            Swal.fire({
                title: "Confirm Helb Clearance Certificate File Upload?",
                text: "Are you sure you would like to proceed with Upload?",
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
                        url: "/Home/UploadJobApplicationDocumentsFiles",
                        type: "POST",
                        datatype: 'json',
                        contentType: false,
                        processData: false,
                        async: false,
                        data: fileData,
                    }).done(function (status) {
                        var registerstatus = status.split('*');
                        status = registerstatus[0];
                        switch (status) {
                            case "success":
                                Swal.fire
                                ({
                                    title: "File Uploaded Successfully!",
                                    text: registerstatus[1],
                                    type: "success"
                                }).then(() => {
                                    $("#helbclearancecertificatefeedback").css("display", "block");
                                    $("#helbclearancecertificatefeedback").css("color", "green");
                                    $('#helbclearancecertificatefeedback').attr("class", "alert alert-success");
                                    $("#helbclearancecertificatefeedback").html("Your Helb Clearance Certificate have been successfully Uploaded" + "  " + registerstatus[1]);
                                    $("#helbclearancecertificatefeedback").css("display", "block");
                                    $("#helbclearancecertificatefeedback").css("color", "green");
                                    $("#helbclearancecertificatefeedback").html("Your Helb Clearance Certificate have been successfully Uploaded." + "  " + registerstatus[1]);
                                    $("#preqappl_form").reset();
                                    windows
                                });
                                PopulateAllUploadedDocuments.init();
                                $("button#nextBtn").css("display", "block");
                                break;
                            default:
                                Swal.fire
                                ({
                                    title: "File Upload Error!!!",
                                    text: "Your Helb Clearance Certificate have been successfully Uploaded" + " " + registerstatus[1],
                                    type: "error"
                                }).then(() => {
                                    $("#helbclearancecertificatefeedback").css("display", "block");
                                    $("#helbclearancecertificatefeedback").css("color", "red");
                                    $('#helbclearancecertificatefeedback').addClass('alert alert-danger');
                                    $("#helbclearancecertificatefeedback").html("Your Helb Clearance Certificatee Details  could not been successfully submitted" + " " + registerstatus[1]);
                                });
                                break;
                        }
                    }
                    );
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    Swal.fire(
                        'File Upload Cancelled',
                        'You cancelled your File Upload submission details!',
                        'error'
                    );
                }
            });

        }
    });
    $(".jobcreditreferencebereau").click(function () {
        if (window.FormData == undefined)
            alert("Error: FormData is undefined");

        else {
            var fileUpload = $("#jobfilecreditreferencebereau").get(0);
            var files = fileUpload.files;

            var fileData = new FormData();

            fileData.append(files[0].name, files[0]);
            var filetoUpload = document.getElementById('jobfilecreditreferencebereau').files[0];
            fileData.append("uploadfile", filetoUpload);

            Swal.fire({
                title: "Confirm Credit Reference Bureau Report File Upload?",
                text: "Are you sure you would like to proceed with Upload?",
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
                        url: "/Home/UploadJobApplicationDocumentsFiles",
                        type: "POST",
                        datatype: 'json',
                        contentType: false,
                        processData: false,
                        async: false,
                        data: fileData,
                    }).done(function (status) {
                        var registerstatus = status.split('*');
                        status = registerstatus[0];
                        switch (status) {
                            case "success":
                                Swal.fire
                                ({
                                    title: "File Uploaded Successfully!",
                                    text: registerstatus[1],
                                    type: "success"
                                }).then(() => {
                                    $("#creditreferencebereaufeedback").css("display", "block");
                                    $("#creditreferencebereaufeedback").css("color", "green");
                                    $('#creditreferencebereaufeedback').attr("class", "alert alert-success");
                                    $("#creditreferencebereaufeedback").html("Your Credit Reference Bureau Report have been successfully Uploaded" + "  " + registerstatus[1]);
                                    $("#creditreferencebereaufeedback").css("display", "block");
                                    $("#creditreferencebereaufeedback").css("color", "green");
                                    $("#creditreferencebereaufeedback").html("Your Credit Reference Bureau Report have been successfully Uploaded." + "  " + registerstatus[1]);
                                    $("#preqappl_form").reset();
                                });
                                PopulateAllUploadedDocuments.init();
                                $("button#nextBtn").css("display", "block");
                                break;
                            default:
                                Swal.fire
                                ({
                                    title: "File Upload Error!!!",
                                    text: "Your Helb Clearance Certificate have been successfully Uploaded" + " " + registerstatus[1],
                                    type: "error"
                                }).then(() => {
                                    $("#creditreferencebereaufeedback").css("display", "block");
                                    $("#creditreferencebereaufeedback").css("color", "red");
                                    $('#creditreferencebereaufeedback').addClass('alert alert-danger');
                                    $("#creditreferencebereaufeedback").html("Your Credit Reference Bureau Report Details  could not been successfully submitted" + " " + registerstatus[1]);
                                });
                                break;
                        }
                    }
                    );
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    Swal.fire(
                        'File Upload Cancelled',
                        'You cancelled your File Upload submission details!',
                        'error'
                    );
                }
            });

        }
    });
    $(".jobapplicationletter").click(function () {
        if (window.FormData == undefined)
            alert("Error: FormData is undefined");
        else {
            var fileUpload = $("#jobfileapplicationletter").get(0);
            var files = fileUpload.files;
            var fileData = new FormData();
            fileData.append(files[0].name, files[0]);
            var filetoUpload = document.getElementById('jobfileapplicationletter').files[0];
            fileData.append("uploadfile", filetoUpload);

            Swal.fire({
                title: "Confirm Application  Letter File Upload?",
                text: "Are you sure you would like to proceed with Upload?",
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
                        url: "/Home/UploadJobApplicationDocumentsFiles",
                        type: "POST",
                        datatype: 'json',
                        contentType: false,
                        processData: false,
                        async: false,
                        data: fileData,
                    }).done(function (status) {
                        var registerstatus = status.split('*');
                        status = registerstatus[0];
                        switch (status) {
                            case "success":
                                Swal.fire
                                ({
                                    title: "File Uploaded Successfully!",
                                    text: registerstatus[1],
                                    type: "success"
                                }).then(() => {
                                    $("#applicationletterfeedback").css("display", "block");
                                    $("#applicationletterfeedback").css("color", "green");
                                    $('#applicationletterfeedback').attr("class", "alert alert-success");
                                    $("#applicationletterfeedback").html("Your Application  Letter have been successfully Uploaded" + "  " + registerstatus[1]);
                                    $("#applicationletterfeedback").css("display", "block");
                                    $("#applicationletterfeedback").css("color", "green");
                                    $("#applicationletterfeedback").html("Your Application  Letter have been successfully Uploaded." + "  " + registerstatus[1]);
                                    $("#preqappl_form").reset();
                                });
                                PopulateAllUploadedDocuments2.init();
                                $("button#nextBtn").css("display", "block");
                                break;
                            default:
                                Swal.fire
                                ({
                                    title: "File Upload Error!!!",
                                    text: "Your Application  Letter have been successfully Uploaded" + " " + registerstatus[1],
                                    type: "error"
                                }).then(() => {
                                    $("#applicationletterfeedback").css("display", "block");
                                    $("#applicationletterfeedback").css("color", "red");
                                    $('#applicationletterfeedback').addClass('alert alert-danger');
                                    $("#applicationletterfeedback").html("Your Application  Letter Details  could not been successfully submitted" + " " + registerstatus[1]);
                                });
                                break;
                        }
                    }
                    );
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    Swal.fire(
                        'File Upload Cancelled',
                        'You cancelled your File Upload submission details!',
                        'error'
                    );
                }
            });

        }
    });
    $(".jobuploadcv").click(function () {
        if (window.FormData == undefined)
            alert("Error: FormData is undefined");

        else {
            var fileUpload = $("#jobcvfileupload").get(0);
            var files = fileUpload.files;

            var fileData = new FormData();

            fileData.append(files[0].name, files[0]);
            var filetoUpload = document.getElementById('jobcvfileupload').files[0];
            fileData.append("uploadfile", filetoUpload);

            Swal.fire({
                title: "Confirm Resume/CV File Upload?",
                text: "Are you sure you would like to proceed with Upload?",
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
                        url: "/Home/UploadJobApplicationDocumentsFiles",
                        type: "POST",
                        datatype: 'json',
                        contentType: false,
                        processData: false,
                        async: false,
                        data: fileData,
                    }).done(function (status) {
                        var registerstatus = status.split('*');
                        status = registerstatus[0];
                        switch (status) {
                            case "success":
                                Swal.fire
                                ({
                                    title: "File Uploaded Successfully!",
                                    text: registerstatus[1],
                                    type: "success"
                                }).then(() => {
                                    $("#cvfeedback").css("display", "block");
                                    $("#cvfeedback").css("color", "green");
                                    $('#cvfeedback').attr("class", "alert alert-success");
                                    $("#cvfeedback").html("Your Resume have been successfully Uploaded" + "  " + registerstatus[1]);
                                    $("#cvfeedback").css("display", "block");
                                    $("#cvfeedback").css("color", "green");
                                    $("#cvfeedback").html("Your Resume have been successfully Uploaded." + "  " + registerstatus[1]);
                                    $("#preqappl_form").reset();
                                });
                                PopulateAllUploadedDocuments.init();
                                $("button#nextBtn").css("display", "block");
                                break;
                            default:
                                Swal.fire
                                ({
                                    title: "File Upload Error!!!",
                                    text: "Your Resume have been successfully Uploaded" + " " + registerstatus[1],
                                    type: "error"
                                }).then(() => {
                                    $("#cvfeedback").css("display", "block");
                                    $("#cvfeedback").css("color", "red");
                                    $('#cvfeedback').addClass('alert alert-danger');
                                    $("#cvfeedback").html("Your Resume Details  could not been successfully submitted" + " " + registerstatus[1]);
                                });
                                break;
                        }
                    }
                    );
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    Swal.fire(
                        'File Upload Cancelled',
                        'You cancelled your File Upload submission details!',
                        'error'
                    );
                }
            });

        }
    });

    $(".jobacademicqualifications").click(function () {
        if (window.FormData == undefined)
            alert("Error: FormData is undefined");

        else {
            var fileUpload = $("#jobfileacademicqualifications").get(0);
            var files = fileUpload.files;

            var fileData = new FormData();

            fileData.append(files[0].name, files[0]);
            var filetoUpload = document.getElementById('jobfileacademicqualifications').files[0];
            fileData.append("uploadfile", filetoUpload);

            Swal.fire({
                title: "Confirm Resume/CV File Upload?",
                text: "Are you sure you would like to proceed with Upload?",
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
                        url: "/Home/UploadJobApplicationDocumentsFiles",
                        type: "POST",
                        datatype: 'json',
                        contentType: false,
                        processData: false,
                        async: false,
                        data: fileData,
                    }).done(function (status) {
                        var registerstatus = status.split('*');
                        status = registerstatus[0];
                        switch (status) {
                            case "success":
                                Swal.fire
                                ({
                                    title: "File Uploaded Successfully!",
                                    text: registerstatus[1],
                                    type: "success"
                                }).then(() => {
                                    $("#cvfeedback").css("display", "block");
                                    $("#cvfeedback").css("color", "green");
                                    $('#cvfeedback').attr("class", "alert alert-success");
                                    $("#cvfeedback").html("Your Resume have been successfully Uploaded" + "  " + registerstatus[1]);
                                    $("#cvfeedback").css("display", "block");
                                    $("#cvfeedback").css("color", "green");
                                    $("#cvfeedback").html("Your Resume have been successfully Uploaded." + "  " + registerstatus[1]);
                                    $("#preqappl_form").reset();
                                });
                                PopulateAllUploadedDocuments.init();
                                $("button#nextBtn").css("display", "block");
                                break;
                            default:
                                Swal.fire
                                ({
                                    title: "File Upload Error!!!",
                                    text: "Your Resume have been successfully Uploaded" + " " + registerstatus[1],
                                    type: "error"
                                }).then(() => {
                                    $("#cvfeedback").css("display", "block");
                                    $("#cvfeedback").css("color", "red");
                                    $('#cvfeedback').addClass('alert alert-danger');
                                    $("#cvfeedback").html("Your Resume Details  could not been successfully submitted" + " " + registerstatus[1]);
                                });
                                break;
                        }
                    }
                    );
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    Swal.fire(
                        'File Upload Cancelled',
                        'You cancelled your File Upload submission details!',
                        'error'
                    );
                }
            });

        }
    });

    $(".jobproffessionalQualifications").click(function () {
        if (window.FormData == undefined)
            alert("Error: FormData is undefined");

        else {
            var fileUpload = $("#jobfileproffessionalQualifications").get(0);
            var files = fileUpload.files;

            var fileData = new FormData();

            fileData.append(files[0].name, files[0]);
            var filetoUpload = document.getElementById('jobfileproffessionalQualifications').files[0];
            fileData.append("uploadfile", filetoUpload);

            Swal.fire({
                title: "Confirm Academic Qualification File Upload?",
                text: "Are you sure you would like to proceed with Upload?",
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
                        url: "/Home/UploadJobApplicationDocumentsFiles",
                        type: "POST",
                        datatype: 'json',
                        contentType: false,
                        processData: false,
                        async: false,
                        data: fileData,
                    }).done(function (status) {
                        var registerstatus = status.split('*');
                        status = registerstatus[0];
                        switch (status) {
                            case "success":
                                Swal.fire
                                ({
                                    title: "File Uploaded Successfully!",
                                    text: registerstatus[1],
                                    type: "success"
                                }).then(() => {
                                    $("#academicqualificationsfeedback").css("display", "block");
                                    $("#academicqualificationsfeedback").css("color", "green");
                                    $('#academicqualificationsfeedback').attr("class", "alert alert-success");
                                    $("#academicqualificationsfeedback").html("Your Academic Qualification have been successfully Uploaded" + "  " + registerstatus[1]);
                                    $("#academicqualificationsfeedback").css("display", "block");
                                    $("#academicqualificationsfeedback").css("color", "green");
                                    $("#academicqualificationsfeedback").html("Your Academic Qualification have been successfully Uploaded." + "  " + registerstatus[1]);
                                    $("#preqappl_form").reset();
                                });
                                PopulateAllUploadedDocuments.init();
                                $("button#nextBtn").css("display", "block");
                                break;
                            default:
                                Swal.fire
                                ({
                                    title: "File Upload Error!!!",
                                    text: "Your Resume have been successfully Uploaded" + " " + registerstatus[1],
                                    type: "error"
                                }).then(() => {
                                    $("#academicqualificationsfeedback").css("display", "block");
                                    $("#academicqualificationsfeedback").css("color", "red");
                                    $('#academicqualificationsfeedback').addClass('alert alert-danger');
                                    $("#academicqualificationsfeedback").html("Your Academic Qualification  could not been successfully submitted" + " " + registerstatus[1]);
                                });
                                break;
                        }
                    }
                    );
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    Swal.fire(
                        'File Upload Cancelled',
                        'You cancelled your File Upload submission details!',
                        'error'
                    );
                }
            });

        }
    });

    $(".jobtestimonialupload").click(function () {
        if (window.FormData == undefined)
            alert("Error: FormData is undefined");

        else {
            var fileUpload = $("#jobfiletestimonials").get(0);
            var files = fileUpload.files;

            var fileData = new FormData();

            fileData.append(files[0].name, files[0]);
            var filetoUpload = document.getElementById('jobfiletestimonials').files[0];
            fileData.append("uploadfile", filetoUpload);

            Swal.fire({
                title: "Confirm Testimonials File Upload?",
                text: "Are you sure you would like to proceed with Upload?",
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
                        url: "/Home/UploadJobApplicationDocumentsFiles",
                        type: "POST",
                        datatype: 'json',
                        contentType: false,
                        processData: false,
                        async: false,
                        data: fileData,
                    }).done(function (status) {
                        var registerstatus = status.split('*');
                        status = registerstatus[0];
                        switch (status) {
                            case "success":
                                Swal.fire
                                ({
                                    title: "File Uploaded Successfully!",
                                    text: registerstatus[1],
                                    type: "success"
                                }).then(() => {
                                    $("#academicqualificationsfeedback").css("display", "block");
                                    $("#academicqualificationsfeedback").css("color", "green");
                                    $('#academicqualificationsfeedback').attr("class", "alert alert-success");
                                    $("#academicqualificationsfeedback").html("Your Academic Qualification have been successfully Uploaded" + "  " + registerstatus[1]);
                                    $("#academicqualificationsfeedback").css("display", "block");
                                    $("#academicqualificationsfeedback").css("color", "green");
                                    $("#academicqualificationsfeedback").html("Your Academic Qualification have been successfully Uploaded." + "  " + registerstatus[1]);
                                    $("#preqappl_form").reset();
                                });
                                PopulateAllUploadedDocuments.init();
                                $("button#nextBtn").css("display", "block");
                                break;
                            default:
                                Swal.fire
                                ({
                                    title: "File Upload Error!!!",
                                    text: "Your Resume have been successfully Uploaded" + " " + registerstatus[1],
                                    type: "error"
                                }).then(() => {
                                    $("#academicqualificationsfeedback").css("display", "block");
                                    $("#academicqualificationsfeedback").css("color", "red");
                                    $('#academicqualificationsfeedback').addClass('alert alert-danger');
                                    $("#academicqualificationsfeedback").html("Your Academic Qualification  could not been successfully submitted" + " " + registerstatus[1]);
                                });
                                break;
                        }
                    }
                    );
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    Swal.fire(
                        'File Upload Cancelled',
                        'You cancelled your File Upload submission details!',
                        'error'
                    );
                }
            });

        }
    });
    $(".jobapplicationletter").click(function () {
        if (window.FormData == undefined)
            alert("Error: FormData is undefined");

        else {
            var fileUpload = $("#jobfileapplicationletter").get(0);
            var files = fileUpload.files;

            var fileData = new FormData();

            fileData.append(files[0].name, files[0]);
            var filetoUpload = document.getElementById('jobfileapplicationletter').files[0];
            fileData.append("uploadfile", filetoUpload);

            Swal.fire({
                title: "Confirm Application Letter File Upload?",
                text: "Are you sure you would like to proceed with Upload?",
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
                        url: "/Home/UploadJobApplicationDocumentsFiles",
                        type: "POST",
                        datatype: 'json',
                        contentType: false,
                        processData: false,
                        async: false,
                        data: fileData,
                    }).done(function (status) {
                        var registerstatus = status.split('*');
                        status = registerstatus[0];
                        switch (status) {
                            case "success":
                                Swal.fire
                                ({
                                    title: "File Uploaded Successfully!",
                                    text: registerstatus[1],
                                    type: "success"
                                }).then(() => {
                                    $("#jobapplicationletterfeedback").css("display", "block");
                                    $("#jobapplicationletterfeedback").css("color", "green");
                                    $('#jobapplicationletterfeedback').attr("class", "alert alert-success");
                                    $("#jobapplicationletterfeedback").html("Your Application Lettern have been successfully Uploaded" + "  " + registerstatus[1]);
                                    $("#jobapplicationletterfeedback").css("display", "block");
                                    $("#jobapplicationletterfeedback").css("color", "green");
                                    $("#jobapplicationletterfeedback").html("Your Application Letter have been successfully Uploaded." + "  " + registerstatus[1]);
                                    $("#preqappl_form").reset();
                                });
                                PopulateAllUploadedDocuments2.init();
                                $("button#nextBtn").css("display", "block");
                                break;
                            default:
                                Swal.fire
                                ({
                                    title: "File Upload Error!!!",
                                    text: "Your Application Letter have been successfully Uploaded" + " " + registerstatus[1],
                                    type: "error"
                                }).then(() => {
                                    $("#jobapplicationletterfeedback").css("display", "block");
                                    $("#jobapplicationletterfeedback").css("color", "red");
                                    $('#jobapplicationletterfeedback').addClass('alert alert-danger');
                                    $("#jobapplicationletterfeedback").html("Your Application Letter could not been successfully submitted" + " " + registerstatus[1]);
                                });
                                break;
                        }
                    }
                    );
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    Swal.fire(
                        'File Upload Cancelled',
                        'You cancelled your File Upload submission details!',
                        'error'
                    );
                }
            });

        }
    });
    $(".jobuploadcv").click(function () {
        if (window.FormData == undefined)
            alert("Error: FormData is undefined");

        else {
            var fileUpload = $("#jobfilecvfileupload").get(0);
            var files = fileUpload.files;

            var fileData = new FormData();

            fileData.append(files[0].name, files[0]);
            var filetoUpload = document.getElementById('jobfilecvfileupload').files[0];
            fileData.append("uploadfile", filetoUpload);

            Swal.fire({
                title: "Confirm Resume File Upload?",
                text: "Are you sure you would like to proceed with Upload?",
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
                        url: "/Home/UploadJobApplicationDocumentsFiles",
                        type: "POST",
                        datatype: 'json',
                        contentType: false,
                        processData: false,
                        async: false,
                        data: fileData,
                    }).done(function (status) {
                        var registerstatus = status.split('*');
                        status = registerstatus[0];
                        switch (status) {
                            case "success":
                                Swal.fire
                                ({
                                    title: "File Uploaded Successfully!",
                                    text: registerstatus[1],
                                    type: "success"
                                }).then(() => {
                                    $("#jobcvfeedback").css("display", "block");
                                    $("#jobcvfeedback").css("color", "green");
                                    $('#jobcvfeedback').attr("class", "alert alert-success");
                                    $("#jobcvfeedback").html("Your Resume have been successfully Uploaded" + "  " + registerstatus[1]);
                                    $("#jobcvfeedback").css("display", "block");
                                    $("#jobcvfeedback").css("color", "green");
                                    $("#jobcvfeedback").html("Your Resume have been successfully Uploaded." + "  " + registerstatus[1]);
                                    $("#preqappl_form").reset();
                                });
                                PopulateAllUploadedDocuments2.init();
                                $("button#nextBtn").css("display", "block");
                                break;
                            default:
                                Swal.fire
                                ({
                                    title: "File Upload Error!!!",
                                    text: "Your Resume have been successfully Uploaded" + " " + registerstatus[1],
                                    type: "error"
                                }).then(() => {
                                    $("#jobcvfeedback").css("display", "block");
                                    $("#jobcvfeedback").css("color", "red");
                                    $('#jobcvfeedback').addClass('alert alert-danger');
                                    $("#jobcvfeedback").html("Your Resume could not been successfully submitted" + " " + registerstatus[1]);
                                });
                                break;
                        }
                    }
                    );
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    Swal.fire(
                        'File Upload Cancelled',
                        'You cancelled your File Upload submission details!',
                        'error'
                    );
                }
            });

        }
    });
    $(".jobacademicqualifications").click(function () {
        if (window.FormData == undefined)
            alert("Error: FormData is undefined");

        else {
            var fileUpload = $("#jobfileacademicqualifications").get(0);
            var files = fileUpload.files;

            var fileData = new FormData();

            fileData.append(files[0].name, files[0]);
            var filetoUpload = document.getElementById('jobfileacademicqualifications').files[0];
            fileData.append("uploadfile", filetoUpload);

            Swal.fire({
                title: "Confirm Academic Qualifications File Upload?",
                text: "Are you sure you would like to proceed with Upload?",
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
                        url: "/Home/UploadJobApplicationDocumentsFiles",
                        type: "POST",
                        datatype: 'json',
                        contentType: false,
                        processData: false,
                        async: false,
                        data: fileData,
                    }).done(function (status) {
                        var registerstatus = status.split('*');
                        status = registerstatus[0];
                        switch (status) {
                            case "success":
                                Swal.fire
                                ({
                                    title: "File Uploaded Successfully!",
                                    text: registerstatus[1],
                                    type: "success"
                                }).then(() => {
                                    $("#jobacademicqualificationsfeedback").css("display", "block");
                                    $("#jobacademicqualificationsfeedback").css("color", "green");
                                    $('#jobacademicqualificationsfeedback').attr("class", "alert alert-success");
                                    $("#jobacademicqualificationsfeedback").html("Your Academic Qualification have been successfully Uploaded" + "  " + registerstatus[1]);
                                    $("#jobacademicqualificationsfeedback").css("display", "block");
                                    $("#jobacademicqualificationsfeedback").css("color", "green");
                                    $("#jobacademicqualificationsfeedback").html("Your Academic Qualification have been successfully Uploaded." + "  " + registerstatus[1]);
                                    $("#preqappl_form").reset();
                                });
                                PopulateAllUploadedDocuments3.init();
                                $("button#nextBtn").css("display", "block");
                                break;
                            default:
                                Swal.fire
                                ({
                                    title: "File Upload Error!!!",
                                    text: "Your Resume have been successfully Uploaded" + " " + registerstatus[1],
                                    type: "error"
                                }).then(() => {
                                    $("#jobacademicqualificationsfeedback").css("display", "block");
                                    $("#jobacademicqualificationsfeedback").css("color", "red");
                                    $('#jobacademicqualificationsfeedback').addClass('alert alert-danger');
                                    $("#jobacademicqualificationsfeedback").html("Your Academic Qualification  could not been successfully submitted" + " " + registerstatus[1]);
                                });
                                break;
                        }
                    }
                    );
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    Swal.fire(
                        'File Upload Cancelled',
                        'You cancelled your File Upload submission details!',
                        'error'
                    );
                }
            });

        }
    });
    $(".jobproffesionalqualificationsqualifications").click(function () {
        if (window.FormData == undefined)
            alert("Error: FormData is undefined");

        else {
            var fileUpload = $("#jobfileproffesionalualifications").get(0);
            var files = fileUpload.files;

            var fileData = new FormData();

            fileData.append(files[0].name, files[0]);
            var filetoUpload = document.getElementById('jobfileproffesionalualifications').files[0];
            fileData.append("uploadfile", filetoUpload);

            Swal.fire({
                title: "Confirm Proffesional Qualifications File Upload?",
                text: "Are you sure you would like to proceed with Upload?",
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
                        url: "/Home/UploadJobApplicationDocumentsFiles",
                        type: "POST",
                        datatype: 'json',
                        contentType: false,
                        processData: false,
                        async: false,
                        data: fileData,
                    }).done(function (status) {
                        var registerstatus = status.split('*');
                        status = registerstatus[0];
                        switch (status) {
                            case "success":
                                Swal.fire
                                ({
                                    title: "File Uploaded Successfully!",
                                    text: registerstatus[1],
                                    type: "success"
                                }).then(() => {
                                    $("#jobproffesionalqualificationsqualificationsfeedback").css("display", "block");
                                    $("#jobproffesionalqualificationsqualificationsfeedback").css("color", "green");
                                    $('#jobproffesionalqualificationsqualificationsfeedback').attr("class", "alert alert-success");
                                    $("#jobproffesionalqualificationsqualificationsfeedback").html("Your Proffesional Qualifications have been successfully Uploaded" + "  " + registerstatus[1]);
                                    $("#jobproffesionalqualificationsqualificationsfeedback").css("display", "block");
                                    $("#jobproffesionalqualificationsqualificationsfeedback").css("color", "green");
                                    $("#jobproffesionalqualificationsqualificationsfeedback").html("Your Proffesional Qualifications have been successfully Uploaded." + "  " + registerstatus[1]);
                                    $("#preqappl_form").reset();
                                });
                                PopulateAllUploadedDocuments3.init();
                                $("button#nextBtn").css("display", "block");
                                break;
                            default:
                                Swal.fire
                                ({
                                    title: "File Upload Error!!!",
                                    text: "Your Resume have been successfully Uploaded" + " " + registerstatus[1],
                                    type: "error"
                                }).then(() => {
                                    $("#jobproffesionalqualificationsqualificationsfeedback").css("display", "block");
                                    $("#jobproffesionalqualificationsqualificationsfeedback").css("color", "red");
                                    $('#jobproffesionalqualificationsqualificationsfeedback').addClass('alert alert-danger');
                                    $("#jobproffesionalqualificationsqualificationsfeedback").html("Your Proffesional Qualifications could not been successfully submitted" + " " + registerstatus[1]);
                                });
                                break;
                        }
                    }
                    );
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    Swal.fire(
                        'File Upload Cancelled',
                        'You cancelled your File Upload submission details!',
                        'error'
                    );
                }
            });

        }
    });
    //Get All  Uploaded Documents
    var PopulateAllUploadedDocuments = function () {
        var CandidateUploadedFiles = function () {
            var CandidateUploadedFilesTable = $("#CandidateJobUploadDocuments"),
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
                url: "/Home/GetJobUplicationDocumentsUploadsList",
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
                        json[i].FileName,
                        json[i].Size,
                        '<a class="btn btn-success DownloadFile" id="DownloadFile"><i class="fa fa-download m-r-10"></i>Download</a>',
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
                              url: "/Home/JobDeleteCandidateFile?FileName=" + i.cells[1].innerHTML
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
    //Get All  Uploaded Documents
    var PopulateAllUploadedDocuments2 = function () {
        var CandidateUploadedFiles2 = function () {
            var CandidateUploadedFilesTable = $("#CandidateJobUploadDocuments2"),
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
                url: "/Home/GetJobUplicationDocumentsUploadsList",
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
                        json[i].FileName,
                        json[i].Size,
                        '<a class="btn btn-success DownloadFile" id="DownloadFile"><i class="fa fa-download m-r-10"></i>Download</a>',
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
                              url: "/Home/JobDeleteCandidateFile?FileName=" + i.cells[1].innerHTML
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
                                      PopulateAllUploadedDocuments2.init();
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
                CandidateUploadedFiles2();
            }
        }
    }();
    //Get All  Uploaded Documents
    var PopulateAllUploadedDocuments3 = function () {
        var CandidateUploadedFiles3 = function () {
            var CandidateUploadedFilesTable = $("#CandidateJobUploadDocuments3"),
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
                url: "/Home/GetJobUplicationDocumentsUploadsList",
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
                        json[i].FileName,
                        json[i].Size,
                        '<a class="btn btn-success DownloadFile" id="DownloadFile"><i class="fa fa-download m-r-10"></i>Download</a>',
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
                              url: "/Home/JobDeleteCandidateFile?FileName=" + i.cells[1].innerHTML
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
                                      PopulateAllUploadedDocuments2.init();
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
                CandidateUploadedFiles3();
            }
        }
    }();
})