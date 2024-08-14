export default function validateInput(input) {
    const inputValue = input.value;
    const errorMessageElement = document.getElementById('error-message');

    if (!/^\d*$/.test(inputValue)) {
        if (errorMessageElement) {
            errorMessageElement.style.display = 'block';
        }
        input.value = inputValue.replace(/[^\d]/g, '');
    } else {
        if (errorMessageElement) {
            errorMessageElement.style.display = 'none';
        }
    }
}
