

function searchHostel() {
    let city = document.getElementById("city").value.toLowerCase().trim();
    let type = document.getElementById("hostelType").value;
    let hostels = document.querySelectorAll("#hostels .card");
    let found = 0;

    hostels.forEach(function(hostel) {
        let location = hostel.innerText.toLowerCase();
        let hostelType = hostel.getAttribute("data-type");

        let cityMatch = city === "" || location.includes(city);
        let typeMatch = type === "" || hostelType === type;

        if (cityMatch && typeMatch) {
            hostel.style.display = "";
            found++;
        } else {
            hostel.style.display = "none";
        }
    });

    if (city === "" && type === "") {
        document.getElementById("message").innerText =
            "Please enter a city or select a hostel type.";
    } else if (found === 0) {
        document.getElementById("message").innerText =
            "No matching hostel found.";
    } else {
        document.getElementById("message").innerText =
            found + " hostel(s) found.";
    }
}


function showDetails(name, city, rent) {
    document.getElementById("modalTitle").innerText = name;

    document.getElementById("modalBody").innerHTML =
        "<p>Location: " + city + "</p>" +
        "<p>Monthly Rent: Rs. " + rent + "</p>" +
        "<p>For more information, please contact the hostel.</p>";

    let modal = new bootstrap.Modal(
        document.getElementById("hostelModal")
    );

    modal.show();
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("formMessage").innerText =
        "Thank you! Your enquiry has been submitted.";

    this.reset();
});
