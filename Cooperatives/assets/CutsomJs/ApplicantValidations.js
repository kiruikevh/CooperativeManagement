'use-strict';
function getSelectedPosta30() {
    var selectedVal = $('#txtpostcode').find(":selected").attr('value');
    var ppInd = document.getElementById('txtcity');
    $.ajax({
        type: "POST",
        url: "/Home/SelectedPosta",
        data: "postcode=" + selectedVal
    }).done(function (status) {
        if (status !== "notfound") {
            ppInd.style = "background-color: #d7f4d7";
            ppInd.setAttribute('value', status);
            console.log('Selected City: ' + status);
        }
        else {
            $('#postcity').val('');
            ppInd.style = "background-color: #f2bfb6";
            alert('Please Select valid Postal code!');
            $("#regfeedback").css("display", "block");
            $("#regfeedback").css("color", "red");
            $("#regfeedback").html("Please choose a valid post code!");
        }
        console.log(status);
    });

}
function showDiv(divId, element) {
    document.getElementById(divId).style.display = element.value =="True" ? 'block' : 'none';
}