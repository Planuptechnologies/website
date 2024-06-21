function toggleName() {
    // Get the button element by its ID
    var button = document.getElementById("expand-all");

    // Change the button text
    if (button.innerText == "Expand All") {
        button.innerText = "Collapse All";
    } else if (button.innerText == "Collapse All") {
        button.innerText = "Expand All";
    }
}