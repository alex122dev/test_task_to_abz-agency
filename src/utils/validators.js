export const validateName = (name) => {
    if (!name) {
        return 'Name is required'
    } else if (name.length < 2 || name.length > 60) {
        return 'Username should contain 2-60 characters'
    }
}

export const validateEmail = (email) => {
    var reg = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

    if (!email) {
        return 'Email is required'
    } else if (!reg.test(email)) {
        return 'Invalid email address'
    }
}

export const validatePhone = (phone) => {
    const clearPhone = phone.replace(/[^\+|\d]/g, "")
    const reg = /^[\+]{0,1}380([0-9]{9})$/
    if (!phone) {
        return 'Phone number is required'
    }
    if (!reg.test(clearPhone)) {
        return 'Invalid phone number'
    }
}

export const validatePosition = (position) => {
    if (!position) {
        return 'Position is required'
    }
}


export const checkPhotoSize = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            let img = new Image();
            img.src = reader.result
            img.onload = () => {
                if (img.width < 70 || img.height < 70) {
                    resolve('Minimum size of photo 70x70px')
                } else {
                    resolve(undefined)
                }
            }
        }
    })
}

export const validatePhoto = (photo) => {
    if (!photo) {
        return 'Photo is required'
    }
    if (!['image/jpeg', 'image/jpg'].includes(photo?.type)) {
        return 'Photo format only .jpeg or /jpg'
    }
    if (photo.size > 5 * 1024 * 1024) {
        return 'Photo cannot be larger than 5MB'
    }
    if (photo) {
        const checkResult = checkPhotoSize(photo).then(res => {
            return res
        })
        return checkResult
    }
};
