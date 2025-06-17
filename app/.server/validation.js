//check that inputs are not blank
export function validateText(text) {
    if (text.length < 2) {
        return "This field can't be empty!";
    }
}

export function validateNumber(num) {
    if (Number(num) <= 0) {
        return "This field can't be zero!";
    }
}