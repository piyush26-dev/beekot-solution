import parsePhoneNumberFromString from "libphonenumber-js";
export const inquiriesValidation = (userData) => {
    let errors = {};
    let isValid = true;
    const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,4}$/i;
    let capitalRegex = /^[a-zA-Z\s]*$/;
    const phoneNumber = parsePhoneNumberFromString(`+${userData?.phone_no}`);

    if (userData.full_name !== undefined && !userData.full_name) {
        errors.full_name = "Name is required .";
        isValid = false;
    } else if (
        userData.full_name !== undefined &&
        !capitalRegex.test(userData?.full_name)
    ) {
        errors.full_name = "Please enter value in alphabets.";
        isValid = false;
    } else if (userData?.full_name) {
        errors.full_name = "";
    }

    if (userData?.email !== undefined && !userData?.email) {
        errors.email = "Please enter email address";
        isValid = false;
    } else if (
        userData?.email !== undefined &&
        !emailregex.test(userData?.email)
    ) {
        errors.email = "Please enter valid email address";
        isValid = false;
    } else if (userData?.email) {
        errors.email = "";
    }
    if (userData?.phone_no !== undefined) {
        if (phoneNumber !== undefined && !phoneNumber) {
            errors.phone_no = "Phone number is required.";
            isValid = false;
        } else if (!phoneNumber || !phoneNumber?.isValid()) {
            errors.phone_no = "Phone number not valid.",
                isValid = false;
        } else if (userData?.phone_no) {
            errors.phone_no = "";
        }
    };

    // if (userData?.phone_no !== undefined) {
    //     const phoneRegex = /^[0-9]{11}$/;
    //     if (!userData.phone_no) {
    //         errors.phone_no = "Phone number is required.";
    //         isValid = false;
    //     } else if (!phoneRegex.test(userData.phone_no)) {
    //         errors.phone_no = "Phone number must be a 10-digit valid number.";
    //         isValid = false;
    //     } else {
    //         errors.phone_no = "";
    //     }
    // }

    // if (userData.subject !== undefined && !userData.subject) {
    //     errors.subject = "Subject is required .";
    //     isValid = false;
    // } else if (
    //     userData.subject !== undefined &&
    //     !capitalRegex.test(userData?.subject)
    // ) {
    //     errors.subject = "Please enter value in alphabets.";
    //     isValid = false;
    // } else if (userData?.subject) {
    //     errors.subject = "";
    // }

    if (userData.message !== undefined && !userData.message) {
        errors.message = "Message is required .";
        isValid = false;
    } else if (userData?.message) {
        errors.message = "";
    }


    return { errors, isValid };
}

export const newsletterValidation = (userData) => {
    let errors = {};
    let isValid = true;
    const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,4}$/i;

    if (userData?.email !== undefined && !userData?.email) {
        errors.email = "Please enter email address";
        isValid = false;
    } else if (
        userData?.email !== undefined &&
        !emailregex.test(userData?.email)
    ) {
        errors.email = "Please enter valid email address";
        isValid = false;
    } else if (userData?.email) {
        errors.email = "";
    }

    return { errors, isValid };
}
