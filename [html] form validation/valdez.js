function isEmpty(value, message) {
    if (value === null || value === "") {
        alert(message);
        return true;
    }
    return false;
}

function checkFormat(value, regex, format) {
    if (!regex.test(value)) {
        alert("Input must be in this format: " + format);
        return false;
    }
    return true;
}

function checkLength(value, min, max) {
    if (value.length < min || value.length > max) {
        alert("Input must be between " + min + " and " + max + " characters");
        return false;
    }
    return true;
}

function verifyPassword(value, password) {
    if (value !== password) {
        alert("Passwords do not match");
        return false;
    }
    return true;
}

function validateForm() {
    var student_id = document.getElementById("student_id").value;
    var student_id_regex = /^\d{4}-\d{1}-\d{5}$/;
    if (isEmpty(student_id, "Student ID is required")) {
        document.getElementById("student_id").focus();
        return false;
    } else if (!checkFormat(student_id, student_id_regex, "1234-1-12345")) {
        document.getElementById("student_id").focus();
        return false;
    }

    var name = document.getElementById("name").value;
    if (isEmpty(name, "Name is required")) {
        document.getElementById("name").focus();
        return false;
    }

    var address = document.getElementById("address").value;
    if (isEmpty(address, "Address is required")) {
        document.getElementById("address").focus();
        return false;
    }

    var zipcode = document.getElementById("zipcode").value;
    var zipcode_regex = /^\d{5}$/;
    if (isEmpty(zipcode, "Zip Code is required")) {
        document.getElementById("zipcode").focus();
        return false;
    } else if (!checkFormat(zipcode, zipcode_regex, "12345")) {
        document.getElementById("zipcode").focus();
        return false;
    }

    var city = document.getElementById("city").value;
    if (isEmpty(city, "City is required")) {
        document.getElementById("city").focus();
        return false;
    }

    var genderRadios = document.getElementsByName("gender");
    for (var i = 0; i < genderRadios.length; i++) {
        if (genderRadios[i].checked) {
            const gender = genderRadios[i].value;
            break;
        }
    }

    var courses = document.querySelectorAll('input[name="courses"]:checked');
    if (courses.length === 0) {
        alert("Please select at least one course");
        return false;
    }

    var schedule = document.querySelectorAll('input[name="schedule"]:checked');
    if (schedule.length === 0) {
        alert("Please select at least one schedule");
        return false;
    }

    var phone_number = document.getElementById("phone_number").value;
    var phone_number_regex = /^\d{3}-\d{4}$/;
    if (isEmpty(phone_number, "Phone Number is required")) {
        document.getElementById("phone_number").focus();
        return false;
    } else if (!checkFormat(phone_number, phone_number_regex, "123-4567")) {
        document.getElementById("phone_number").focus();
        return false;
    }

    var email = document.getElementById("email").value;
    if (isEmpty(email, "Email is required")) {
        document.getElementById("email").focus();
        return false;
    }

    var password = document.getElementById("password").value;
    if (isEmpty(password, "Password is required")) {
        document.getElementById("password").focus();
        return false;
    } else if (!checkLength(password, 6, 8)) {
        document.getElementById("password").focus();
        return false;
    }

    var verify_password = document.getElementById("verify_password").value;
    if (isEmpty(verify_password, "Please retype your password")) {
        document.getElementById("verify_password").focus();
        return false;
    } else if (!verifyPassword(verify_password, password)) {
        document.getElementById("verify_password").focus();
        return false;
    }

    var birthdate = document.getElementById("birthdate").value;
    if (isEmpty(birthdate, "Birthdate is required")) {
        document.getElementById("birthdate").focus();
        return false;
    }

    var file = document.getElementById("file").value;
    if (isEmpty(file, "File is required")) {
        document.getElementById("file").focus();
        return false;
    }

    var enrollment_time = document.getElementById("enrollment_time").value;
    if (isEmpty(enrollment_time, "Enrollment time is required")) {
        document.getElementById("enrollment_time").focus();
        return false;
    }

    return true;
}
