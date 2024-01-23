function extension() {
    var fileInput = document.getElementById('fileInput');
    var resultElement = document.getElementById('result');

    if (fileInput.files.length > 0) {
        var fileName = fileInput.files[0].name;
        var fileExtension = fileName.split('.').pop().toLowerCase();

        resultElement.textContent = "File Extension: " + fileExtension;
    } else {
        resultElement.textContent = "Please select a file.";
    }
}