'Use strict'



    document.getElementById('calculateBtn').addEventListener('click', function () {
        // Get form values
        var amount = parseFloat(document.getElementById('amount').value);
        var percent = parseFloat(document.getElementById('percent').value);
        var percentPeriod = document.getElementById('percentPeriod').value;
        var calculateInterest = document.getElementById('calculateinterest').value;

        // Perform calculation based on selected interval
        var years = 1;
        if (calculateInterest === 'daily') {
            years = 365;
        } else if (calculateInterest === 'daily360') {
            years = 360;
        } else if (calculateInterest === 'semiweekly') {
            years = 52 / 2;
        } else if (calculateInterest === 'weekly') {
            years = 52;
        } else if (calculateInterest === 'biweekly') {
            years = 26;
        } else if (calculateInterest === 'halfmonthly') {
            years = 24;
        } else if (calculateInterest === 'monthly') {
            years = 12;
        } else if (calculateInterest === 'bimonthly') {
            years = 12 / 2;
        } else if (calculateInterest === 'quarterly') {
            years = 4;
        } else if (calculateInterest === 'halfyearly') {
            years = 2;
        } else if (calculateInterest === 'yearly') {
            years = 1;
        }

        // Perform compound interest calculation
        var total = amount * Math.pow((1 + (percent / 100) / years), years);
        var interest = total - amount;

        // Output the result
        alert('Total amount after ' + years + ' years: ' + total.toFixed(2) + '\nInterest earned: ' + interest.toFixed(2));
    });



    /////////////



function processCalc(form, clearFields) {
    var principal = parseFloat(form.amount.value);
    var rate = parseFloat(form.percent.value);
    var period = form.percentPeriod.value;
    var compoundInterval = form.calculateinterest.value;

    if (isNaN(principal) || isNaN(rate)) {
        alert("Please enter valid numbers for initial investment and interest rate.");
        return false;
    }

    var periodsPerYear = 1;
    switch (compoundInterval) {
        case "daily":
            periodsPerYear = 365;
            break;
        case "daily360":
            periodsPerYear = 360;
            break;
        case "semiweekly":
            periodsPerYear = 104;
            break;
        case "weekly":
            periodsPerYear = 52;
            break;
        case "biweekly":
            periodsPerYear = 26;
            break;
        case "halfmonthly":
            periodsPerYear = 24;
            break;
        case "monthly":
            periodsPerYear = 12;
            break;
        case "bimonthly":
            periodsPerYear = 6;
            break;
        case "quarterly":
            periodsPerYear = 4;
            break;
        case "halfyearly":
            periodsPerYear = 2;
            break;
        case "yearly":
            periodsPerYear = 1;
            break;
    }

    var years = 1;
    switch (period) {
        case "daily":
            years = 1 / 365;
            break;
        case "weekly":
            years = 1 / 52;
            break;
        case "monthly":
            years = 1 / 12;
            break;
        case "quarterly":
            years = 1 / 4;
            break;
        case "yearly":
            years = 1;
            break;
    }

    var futureValue = principal * Math.pow(1 + rate / 100 / periodsPerYear, periodsPerYear * years);
    var totalInterest = futureValue - principal;

    // Displaying the result
    document.getElementById("result").style.display = "block";
    document.getElementById("futureValue").textContent = futureValue.toFixed(2);
    document.getElementById("totalInterestEarned").textContent = totalInterest.toFixed(2);

    return false;
}

document.getElementById('calculateBtn').addEventListener('click', function () {
    // Get form values
    var amount = parseFloat(document.getElementById('amount').value);
    var percent = parseFloat(document.getElementById('percent').value);
    var percentPeriod = document.getElementById('percentPeriod').value;
    var calculateInterest = document.getElementById('calculateinterest').value;







