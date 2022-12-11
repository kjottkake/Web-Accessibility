function openPopup() {
    // Create a new window
    var popup = window.open("", "Popup", "width=400, height=300");

    // Write the HTML for the pop-up window
    popup.document.write("<h1>Subscribe to Our Newsletter</h1>");
    popup.document.write("<p>Enter your email address to stay up to date with our latest news and offers:</p>");

    // Add a form for the user to enter their email address
    popup.document.write("<form>");
    popup.document.write("<label for='email'>Email Address:</label>");
    popup.document.write("<input id='email' type='email' placeholder='Email Address'>");
    popup.document.write("<button>Submit</button>");
    popup.document.write("</form>");

    popup.document.write("<button id='close'>Close</button>");

    document.getElementById("close-button").onclick = function() {
        popup.close();
    }
};

window.onload = openPopup();