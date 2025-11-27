const rates = {
    USD: 1,
    INR: 83,
    EUR: 0.92,
    GBP: 0.78
};

function convertCurrency() {
    let amount = document.getElementById("amount").value;
    let from = document.getElementById("fromCurrency").value;
    let to = document.getElementById("toCurrency").value;

    if (amount === "" || amount <= 0) {
        document.getElementById("result").innerText = "Please enter a valid amount!";
        return;
    }

    let usdAmount = amount / rates[from];
    let converted = usdAmount * rates[to];

    document.getElementById("result").innerText =
        `Converted Amount: ${converted.toFixed(2)} ${to}`;
}
