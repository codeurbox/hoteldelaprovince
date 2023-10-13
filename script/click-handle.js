if (window.innerWidth <= 1088) {
    const showContact = document.getElementById("contact-show");
    const showMail = document.getElementById("mail-show");
    const contact = document.getElementById("contact");
    const mail = document.getElementById("mail");

    function showMenuBox(menuBox) {
        menuBox.style.display = "block";
        menuBox.style.position = "absolute";
        menuBox.style.top = "15px";
        menuBox.style.left = "20px";
        menuBox.style.backgroundColor = "black";
        menuBox.style.zIndex = "1";
    }

    // Function to hide the menu boxes when clicked outside of them
    function hideMenu(event) {
        if (!contact.contains(event.target) && !mail.contains(event.target) &&
            event.target !== showContact && event.target !== showMail) {
            contact.style.display = "none";
            mail.style.display = "none";
        }
    }

    // Add click event listeners to each menu button
    showContact.addEventListener("click", function () {
        showMenuBox(contact);
    });

    showMail.addEventListener("click", function () {
        showMenuBox(mail);
    });

    // Event listener to hide the menu boxes when clicked outside of them
    document.addEventListener("click", hideMenu);
}
