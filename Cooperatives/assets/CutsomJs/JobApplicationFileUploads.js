$(document).ready(function () {
    $(".jobuploadeaccclearance").click(function () {
        if (window.FormData == undefined)
            alert("Error: FormData is undefined");

        else {
            var fileUpload = $("#jobEACCfileToUpload").get(0);
            var files = fileUpload.files;

            var fileData = new FormData();

            fileData.append(files[0].name, files[0]);

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
                        url: "/Home/JobCandidateUploadFile",
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
                                    $("#jobeaccuploadfilefeedback").css("display", "block");
                                    $("#jobeaccuploadfilefeedback").css("color", "green");
                                    $('#jobeaccuploadfilefeedback').attr("class", "alert alert-success");
                                    $("#jobeaccuploadfilefeedback").html("Your EACC Clearance have been successfully Uploaded" + "  " + registerstatus[1]);
                                    $("#jobeaccuploadfilefeedback").css("display", "block");
                                    $("#jobeaccuploadfilefeedback").css("color", "green");
                                    $("#jobeaccuploadfilefeedback").html("Your EACC Clearance have been successfully Uploaded." + "  " + registerstatus[1]);
                                    $("#preqappl_form").reset();
                                    PopulateAllUploadedDocuments.init;
                                });
                                $("button#nextBtn").css("display", "block");
                                break;
                            default:
                                Swal.fire
                                ({
                                    title: "File Upload Error!!!",
                                    text: "Your EACC Clearance have been successfully Uploaded" + " " + registerstatus[1],
                                    type: "error"
                                }).then(() => {
                                    $("#jobeaccuploadfilefeedback").css("display", "block");
                                    $("#jobeaccuploadfilefeedback").css("color", "red");
                                    $('#jobeaccuploadfilefeedback').addClass('alert alert-danger');
                                    $("#jobeaccuploadfilefeedback").html("Your Referees Details  could not been successfully submitted" + " " + registerstatus[1]);
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
                        url: "/Home/JobCandidateUploadFile",
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
                                    $("#jobpoliceclearancefilefeedback").css("display", "block");
                                    $("#jobpoliceclearancefilefeedback").css("color", "green");
                                    $('#jobpoliceclearancefilefeedback').attr("class", "alert alert-success");
                                    $("#jobpoliceclearancefilefeedback").html("Your Police Clearance have been successfully Uploaded" + "  " + registerstatus[1]);
                                    $("#jobpoliceclearancefilefeedback").css("display", "block");
                                    $("#jobpoliceclearancefilefeedback").css("color", "green");
                                    $("#jobpoliceclearancefilefeedback").html("Your Police Clearance have been successfully Uploaded." + "  " + registerstatus[1]);
                                    $("#jobpreqappl_form").reset();
                                    PopulateAllUploadedDocuments.init;
                                });
                                $("button#nextBtn").css("display", "block");
                                break;
                            default:
                                Swal.fire
                                ({
                                    title: "File Upload Error!!!",
                                    text: "Your Police Clearance have been successfully Uploaded" + " " + registerstatus[1],
                                    type: "error"
                                }).then(() => {
                                    $("#jobpoliceclearancefilefeedback").css("display", "block");
                                    $("#jobpoliceclearancefilefeedback").css("color", "red");
                                    $('#jobpoliceclearancefilefeedback').addClass('alert alert-danger');
                                    $("#jobpoliceclearancefilefeedback").html("Your Police Clearance Details  could not been successfully submitted" + " " + registerstatus[1]);
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
                        url: "/Home/JobCandidateUploadFile",
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
                                    $("#jobkracertificatefilefeedback").css("display", "block");
                                    $("#jobkracertificatefilefeedback").css("color", "green");
                                    $('#jobkracertificatefilefeedback').attr("class", "alert alert-success");
                                    $("#jobkracertificatefilefeedback").html("Your Tax Compliance Certificate have been successfully Uploaded" + "  " + registerstatus[1]);
                                    $("#jobkracertificatefilefeedback").css("display", "block");
                                    $("#jobkracertificatefilefeedback").css("color", "green");
                                    $("#jobkracertificatefilefeedback").html("Your Tax Compliance Certificate have been successfully Uploaded." + "  " + registerstatus[1]);
                                    $("#preqappl_form").reset();
                                    PopulateAllUploadedDocuments.init;
                                });
                                $("button#nextBtn").css("display", "block");
                                break;
                            default:
                                Swal.fire
                                ({
                                    title: "File Upload Error!!!",
                                    text: "Your Tax Compliance Certificate have been successfully Uploaded" + " " + registerstatus[1],
                                    type: "error"
                                }).then(() => {
                                    $("#jobkracertificatefilefeedback").css("display", "block");
                                    $("#jobkracertificatefilefeedback").css("color", "red");
                                    $('#jobkracertificatefilefeedback').addClass('alert alert-danger');
                                    $("#jobkracertificatefilefeedback").html("Your Tax Compliance Certificate Details  could not been successfully submitted" + " " + registerstatus[1]);
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
                        url: "/Home/JobCandidateUploadFile",
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
                                    $("#jobhelbclearancecertificatefeedback").css("display", "block");
                                    $("#jobhelbclearancecertificatefeedback").css("color", "green");
                                    $('#jobhelbclearancecertificatefeedback').attr("class", "alert alert-success");
                                    $("#jobhelbclearancecertificatefeedback").html("Your Helb Clearance Certificate have been successfully Uploaded" + "  " + registerstatus[1]);
                                    $("#jobhelbclearancecertificatefeedback").css("display", "block");
                                    $("#jobhelbclearancecertificatefeedback").css("color", "green");
                                    $("#jobhelbclearancecertificatefeedback").html("Your Helb Clearance Certificate have been successfully Uploaded." + "  " + registerstatus[1]);
                                    $("#preqappl_form").reset();
                                    PopulateAllUploadedDocuments.init;
                                });
                                $("button#nextBtn").css("display", "block");
                                break;
                            default:
                                Swal.fire
                                ({
                                    title: "File Upload Error!!!",
                                    text: "Your Helb Clearance Certificate have been successfully Uploaded" + " " + registerstatus[1],
                                    type: "error"
                                }).then(() => {
                                    $("#jobhelbclearancecertificatefeedback").css("display", "block");
                                    $("#jobhelbclearancecertificatefeedback").css("color", "red");
                                    $('#jobhelbclearancecertificatefeedback').addClass('alert alert-danger');
                                    $("#jobhelbclearancecertificatefeedback").html("Your Helb Clearance Certificatee Details  could not been successfully submitted" + " " + registerstatus[1]);
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
                        url: "/Home/JobCandidateUploadFile",
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
                                    $("#jobcreditreferencebereaufeedback").css("display", "block");
                                    $("#jobcreditreferencebereaufeedback").css("color", "green");
                                    $('#jobcreditreferencebereaufeedback').attr("class", "alert alert-success");
                                    $("#jobcreditreferencebereaufeedback").html("Your Credit Reference Bureau Report have been successfully Uploaded" + "  " + registerstatus[1]);
                                    $("#jobcreditreferencebereaufeedback").css("display", "block");
                                    $("#jobcreditreferencebereaufeedback").css("color", "green");
                                    $("#jobcreditreferencebereaufeedback").html("Your Credit Reference Bureau Report have been successfully Uploaded." + "  " + registerstatus[1]);
                                    $("#preqappl_form").reset();
                                    PopulateAllUploadedDocuments.init;
                                });
                                $("button#nextBtn").css("display", "block");
                                break;
                            default:
                                Swal.fire
                                ({
                                    title: "File Upload Error!!!",
                                    text: "Your Helb Clearance Certificate have been successfully Uploaded" + " " + registerstatus[1],
                                    type: "error"
                                }).then(() => {
                                    $("#jobcreditreferencebereaufeedback").css("display", "block");
                                    $("#jobcreditreferencebereaufeedback").css("color", "red");
                                    $('#jobcreditreferencebereaufeedback').addClass('alert alert-danger');
                                    $("#jobcreditreferencebereaufeedback").html("Your Credit Reference Bureau Report Details  could not been successfully submitted" + " " + registerstatus[1]);
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
                        url: "/Home/JobCandidateUploadFile",
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
                                    $("#jobapplicationletterfeedback").html("Your Application  Letter have been successfully Uploaded" + "  " + registerstatus[1]);
                                    $("#jobapplicationletterfeedback").css("display", "block");
                                    $("#jobapplicationletterfeedback").css("color", "green");
                                    $("#jobapplicationletterfeedback").html("Your Application  Letter have been successfully Uploaded." + "  " + registerstatus[1]);
                                    $("#preqappl_form").reset();
                                    PopulateAllUploadedDocuments.init;
                                });
                                $("button#nextBtn").css("display", "block");
                                break;
                            default:
                                Swal.fire
                                ({
                                    title: "File Upload Error!!!",
                                    text: "Your Application  Letter have been successfully Uploaded" + " " + registerstatus[1],
                                    type: "error"
                                }).then(() => {
                                    $("#jobapplicationletterfeedback").css("display", "block");
                                    $("#jobapplicationletterfeedback").css("color", "red");
                                    $('#jobapplicationletterfeedback').addClass('alert alert-danger');
                                    $("#jobapplicationletterfeedback").html("Your Application  Letter Details  could not been successfully submitted" + " " + registerstatus[1]);
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
                        url: "/Home/JobCandidateUploadFile",
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
                                    PopulateAllUploadedDocuments.init;
                                });
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
                                    $("#jobcvfeedback").html("Your Resume Details  could not been successfully submitted" + " " + registerstatus[1]);
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

    $(".jobcvfileupload").click(function () {
        if (window.FormData == undefined)
            alert("Error: FormData is undefined");

        else {
            var fileUpload = $("#jobuploadcv").get(0);
            var files = fileUpload.files;

            var fileData = new FormData();

            fileData.append(files[0].name, files[0]);

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
                        url: "/Home/JobCandidateUploadFile",
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
                                    windows
                                });
                                PopulateAllUploadedDocuments.init;
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
                                    $("#jobcvfeedback").html("Your Resume Details  could not been successfully submitted" + " " + registerstatus[1]);
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
                        url: "/Home/JobCandidateUploadFile",
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
                                    PopulateAllUploadedDocuments.init;
                                });
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

            Swal.fire({
                title: "Confirm  Proffessional Qualification File Upload?",
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
                        url: "/Home/JobCandidateUploadFile",
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
                                    $("#jobproffesionalqualificationsqualificationsfeedback").html("Your  Proffessional Qualification have been successfully Uploaded" + "  " + registerstatus[1]);
                                    $("#jobproffesionalqualificationsqualificationsfeedback").css("display", "block");
                                    $("#jobproffesionalqualificationsqualificationsfeedback").css("color", "green");
                                    $("#jobproffesionalqualificationsqualificationsfeedback").html("Your  Proffessional Qualification have been successfully Uploaded." + "  " + registerstatus[1]);
                                    $("#preqappl_form").reset();
                                    PopulateAllUploadedDocuments.init;
                                });
                                $("button#nextBtn").css("display", "block");
                                break;
                            default:
                                Swal.fire
                                ({
                                    title: "File Upload Error!!!",
                                    text: "Your  Proffessional Qualification have been successfully Uploaded" + " " + registerstatus[1],
                                    type: "error"
                                }).then(() => {
                                    $("#jobproffesionalqualificationsqualificationsfeedback").css("display", "block");
                                    $("#jobproffesionalqualificationsqualificationsfeedback").css("color", "red");
                                    $('#jobproffesionalqualificationsqualificationsfeedback').addClass('alert alert-danger');
                                    $("#jobproffesionalqualificationsqualificationsfeedback").html("Your  Proffessional Qualification  could not been successfully submitted" + " " + registerstatus[1]);
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
    $(".jobuploadtestimonialsdoc").click(function () {
        if (window.FormData == undefined)
            alert("Error: FormData is undefined");
        else {
            var fileUpload = $("#jobfiletestimonials").get(0);
            var files = fileUpload.files;

            var fileData = new FormData();

            fileData.append(files[0].name, files[0]);

            Swal.fire({
                title: "Confirm  Testimonials File Upload?",
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
                        url: "/Home/JobCandidateUploadFile",
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
                                    $("#jobfiletestimonialsfeedback").css("display", "block");
                                    $("#jobfiletestimonialsfeedback").css("color", "green");
                                    $('#jobfiletestimonialsfeedback').attr("class", "alert alert-success");
                                    $("#jobfiletestimonialsfeedback").html("Your  Testimonial have been successfully Uploaded" + "  " + registerstatus[1]);
                                    $("#jobfiletestimonialsfeedback").css("display", "block");
                                    $("#jobfiletestimonialsfeedback").css("color", "green");
                                    $("#jobfiletestimonialsfeedback").html("Your  Testimonial have been successfully Uploaded." + "  " + registerstatus[1]);
                                    $("#preqappl_form").reset();
                                    PopulateAllUploadedDocuments.init;
                                });
                                $("button#nextBtn").css("display", "block");
                                break;
                            default:
                                Swal.fire
                                ({
                                    title: "File Upload Error!!!",
                                    text: "Your Testimonial have been successfully Uploaded" + " " + registerstatus[1],
                                    type: "error"
                                }).then(() => {
                                    $("#jobfiletestimonialsfeedback").css("display", "block");
                                    $("#jobfiletestimonialsfeedback").css("color", "red");
                                    $('#jobfiletestimonialsfeedback').addClass('alert alert-danger');
                                    $("#jobfiletestimonialsfeedback").html("Your  Testimonial could not been successfully submitted" + " " + registerstatus[1]);
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

    $(".jobuploadfileReferreeddoc").click(function () {
        if (window.FormData == undefined)
            alert("Error: FormData is undefined");
        else {
            var fileUpload = $("#jobfileReferreed").get(0);
            var files = fileUpload.files;

            var fileData = new FormData();

            fileData.append(files[0].name, files[0]);

            Swal.fire({
                title: "Confirm  Refereed Journal File Upload?",
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
                        url: "/Home/JobCandidateUploadFile",
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
                                    $("#jobfileReferreedfeedback").css("display", "block");
                                    $("#jobfileReferreedfeedback").css("color", "green");
                                    $('#jobfileReferreedfeedback').attr("class", "alert alert-success");
                                    $("#jobfileReferreedfeedback").html("Your  Refereed Journal have been successfully Uploaded" + "  " + registerstatus[1]);
                                    $("#jobfileReferreedfeedback").css("display", "block");
                                    $("#jobfileReferreedfeedback").css("color", "green");
                                    $("#jobfileReferreedfeedback").html("Your  Refereed Journal  have been successfully Uploaded." + "  " + registerstatus[1]);
                                    $("#preqappl_form").reset();
                                    PopulateAllUploadedDocuments.init;
                                });
                                $("button#nextBtn").css("display", "block");
                                break;
                            default:
                                Swal.fire
                                ({
                                    title: "File Upload Error!!!",
                                    text: "Your Refereed Journal  have been successfully Uploaded" + " " + registerstatus[1],
                                    type: "error"
                                }).then(() => {
                                    $("#jobfileReferreedfeedback").css("display", "block");
                                    $("#jobfileReferreedfeedback").css("color", "red");
                                    $('#jobfileReferreedfeedback').addClass('alert alert-danger');
                                    $("#jobfileReferreedfeedback").html("Your Refereed Journal could not been successfully submitted" + " " + registerstatus[1]);
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
            var CandidateUploadedFilesTable = $("#JobUploadDocumentsLists"),
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
                        json[i].EntryNo,
                        json[i].FileName,
                        json[i].Size,
                        '<a class="btn btn-success jobDownloadFile" id="jobDownloadFile"><i class="fa fa-download m-r-10"></i>Edit</a>',
                        '<a class="btn btn-danger JobDeleteFile" id="JobDeleteFile"><i class="fa fa-trash m-r-10">Delete</a>'
                    ]);
                }
            });
            CandidateUploadedFilesTable.on("click",
               ".jobDownloadFile",
               function (CandidateUploadedFilesTable) {
                   CandidateUploadedFilesTable.preventDefault();
                   var i = $(this).parents("tr")[0];


               });
            CandidateUploadedFilesTable.on("click",
              ".JobDeleteFile",
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
    function LoadUploadedDocuments() {
        $.ajax({
            "url": "/Home/RegistrationUploadsList",
            "type": "GET",
            "dataType": "json",
            "dataSrc": " ",
            "contentType": "application/jsonp"
        });
    }
})