export const phoneNumberMask = (e, setFieldValue) => {
    const input = e.target
    const inputValue = e.target.value
    const selectionStart = e.target.selectionStart


    let formatPhoneNumber = '+38 (0'
    let inputNumbersValue;
    if (inputValue.length === 1) {
        inputNumbersValue = inputValue.replace(/\D/g, "")
    } else {
        inputNumbersValue = inputValue.substring(6).replace(/\D/g, "")
    }
    if (!inputNumbersValue) {
        inputNumbersValue = ""
    }
    if (inputNumbersValue.length > 0) {
        formatPhoneNumber += inputNumbersValue.substring(0, 2)
    }
    if (inputNumbersValue.length > 2) {
        formatPhoneNumber += ') ' + inputNumbersValue.substring(2, 5)
    }
    if (inputNumbersValue.length > 5) {
        formatPhoneNumber += '-' + inputNumbersValue.substring(5, 7)
    }
    if (inputNumbersValue.length > 7) {
        formatPhoneNumber += '-' + inputNumbersValue.substring(7, 9)
    }


    setFieldValue('phone', `${formatPhoneNumber}`)

    if (selectionStart !== inputValue.length) {
        input.setSelectionRange(selectionStart, selectionStart + 1)
        setTimeout(() => input.setSelectionRange(selectionStart, selectionStart), 0)
    }
}