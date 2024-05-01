function calculate() {
    // Get input values
    const principal = parseFloat(document.getElementById('principal').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
    const loanLength = parseFloat(document.getElementById('loanLength').value);

    // Calculate monthly interest rate
    const monthlyInterestRate = interestRate / 12;

    // Calculate total number of payments
    const totalPayments = loanLength * 12;

    // Calculate monthly payment using compound interest formula
    const monthlyPayment = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));

    // Calculate total interest paid
    const totalInterest = (monthlyPayment * totalPayments) - principal;

    // Display results
    document.getElementById('monthlyPayment').textContent = '$' + monthlyPayment.toFixed(2);
    document.getElementById('totalInterest').textContent = '$' + totalInterest.toFixed(2);

    // Show results
    document.getElementById('result').style.display = 'block';
}