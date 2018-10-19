function validateForm() { 
    var errors = "";
    var fname = document.forms.appointmentForm.fname.value; 
    var lname = document.forms.appointmentForm.lname.value;
    var phone = document.forms.appointmentForm.phone.value;
    var email = document.forms.appointmentForm.email.value;
    var date = document.forms.appointmentForm.date.value;
    var time = document.forms.appointmentForm.time.value; 

    if (fname == null || fname == "") { 
         errors += "First name must be filled out\n";
    } 
    if (lname == null || lname == "") { 
        errors += "Last name must be filled out\n";
    }
    if (phone == null || phone == "") { 
        errors += "Phone number must be filled out\n";
    }
    if (email == null || email == "") { 
        errors += "Email must be filled out\n";
    }
    if (date == null || date == "") { 
        errors += "Date must be filled out\n";
    } 
    if (time == null || time == "") { 
        errors += "Time must be filled out\n";
    }    
    if(errors != ""){
        alert(errors);
    }
   
    return false; 
}