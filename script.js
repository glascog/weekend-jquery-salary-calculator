$(document).ready(onReady);

function onReady() {
    console.log("Hey jQuery!"); 

    // Handlers go here
    $(".submitButton").on("click", handleSubmit);
    $("#tableBody").on("click", "#deleteButton", handleDelete);
}

// Create variable for total monthly salary amount
let totalMonthly = 0;

// Functions go here
function handleDelete() {
    console.log("this is:", $(this))
    $(this).parent().parent().remove()
}

function handleSubmit(event) {
    event.preventDefault();
    console.log('inside handleSubmit');

    // Retrieve author first name from input box
    const firstNameText = $('#firstName').val();
    console.log("firstNameText", firstNameText);

    // Retrieve author last name from input box
    const lastNameText = $('#lastName').val();
    console.log('lastNameText', lastNameText);

    // Retrieve author id number from input box
    const idNumberText = $('#idNumber').val();
    console.log('idNumberText', idNumberText);

    // Retrieve author job title from input box
    const jobTitleText = $('#jobTitle').val();
    console.log('jobTitleText', jobTitleText);

    // Retrieve author annual salary from input box
    let annualSalaryNumber = $('#annualSalary').val();
    console.log('annualSalaryNumber', annualSalaryNumber);

    // Append new info to dom from captured input
    $('#tableBody').append(`
    <tr>
        <td>${firstNameText}</td>
        <td>${lastNameText}</td>
        <td>${idNumberText}</td>
        <td>${jobTitleText}</td>
        <td>${Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(annualSalaryNumber)}</td>
        <td><button id="deleteButton">Delete</button></td>
    </tr>`);

    // Clear form by setting the values to an empty string
    $('#firstName').val("");
    $('#lastName').val("");
    $('#idNumber').val("");
    $('#jobTitle').val("");
    $('#annualSalary').val("");
   
    // Set variable for monthly salary amount
    totalMonthly += annualSalaryNumber/12

    // Check totalMonthly value
    console.log(new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(totalMonthly));
     
    // Replace salary amounts to total monthly footer
    $('#totalMonthly').text(` ${Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(totalMonthly)}`);

    // Create conditional that changes background color of total monthly amount when exceeds 20K
    if(totalMonthly > 20000) {
      $('footer').css("background-color", "red");
    }
}

