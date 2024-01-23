function generate() {
    var num1 = parseInt(document.getElementById("min").value);
    var num2 = parseInt(document.getElementById("max").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerHTML = "please enter  valid numbers";
        return;
    }
    var randomNumber = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;

    document.getElementById('result').innerHTML = randomNumber;
}