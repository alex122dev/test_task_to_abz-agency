import { useState } from "react"
import { Preloader } from "../common/Preloader/Preloader"


export const PreviewPhoto = ({ file }) => {
    const [preview, setPreview] = useState(null)

    const reader = new FileReader()
    reader.onload = () => {
        setPreview(reader.result)
    }
    reader.readAsDataURL(file)
    return <>
        {preview
            ? <div className={'postform__photo-preview'}>
                <img src={preview} alt="avatar" />
            </div>
            : <Preloader />}
    </>
}