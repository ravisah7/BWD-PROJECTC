
function searchHostel() {
    let city = document.getElementById("city").value.toLowerCase();
    let hostels = document.querySelectorAll(".card");
    let found = 0;

    hostels.forEach(function(hostel) {
        let location = hostel.innerText.toLowerCase();

        if (location.includes(city) && city !== "") {
            hostel.style.display = "block";
            found++;
        } else {
            hostel.style.display = "none";
        }
    });

    if (city === "") {
        document.getElementById("message").innerText =
            "Please enter a city name.";
    } else if (found === 0) {
        document.getElementById("message").innerText =
            "No hostel found in this city.";
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
