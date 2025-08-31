export const checkValidateData = (email, password, name, Refferal) => {

    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    const isNameValid = /^[a-zA-Z ]{2,}$/.test(name);
    const isRefferalValid = /^[A-Za-z0-9]+$/.test(Refferal);

    if (!isEmailValid) {
        return "The email address you entered is invalid";
    }

    if (!isPasswordValid) {
        return "Password must be at least 8 characters, including uppercase, lowercase, number, and special character.";
    }

    if (!isNameValid) {
        return "Invalid name format detected. Please avoid symbols or digits.";
    }

    if (!isRefferalValid) {
        return "Invalid referral code. Make sure the code is correct and has not expired..";
    }

    return null;
}