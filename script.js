$(document).ready(onReady);

function onReady() {
    console.log("Hey jQuery!"); 

    // Handlers go here
    $(".submitButton").on("click", handleSubmit);
    $("#tableBody").on("click", "#deleteButton", handleDelete);

}

// Functions go here
function handleDelete() {
    console.log("this is:", $(this))
    $(this).parent().parent().remove()
}

function handleSubmit(event) {
    event.preventDefault();
    console.log('inside handleSubmit');

    const firstNameText = $('#firstName').val();
    console.log("firstNameText", firstNameText);

    const lastNameText = $('#lastName').val();
    console.log('lastNameText', lastNameText);

    const idNumberText = $('#idNumber').val();
    console.log('idNumberText', idNumberText);

    const jobTitleText = $('#jobTitle').val();
    console.log('jobTitleText', jobTitleText);

    const annualSalaryText = $('#annualSalary').val();
    console.log('annualSalaryText', annualSalaryText);

    $('#tableBody').append(`
    <tr>
        <td>${firstNameText}</td>
        <td>${lastNameText}</td>
        <td>${idNumberText}</td>
        <td>${jobTitleText}</td>
        <td>${annualSalaryText}</td>
        <td><button id="deleteButton">Delete</button></td>
    </tr>`);

    
}