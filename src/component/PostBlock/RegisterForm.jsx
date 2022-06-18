import cn from "classnames";
import { Field, Form, Formik } from "formik";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPositions, registerNewUser } from "../../redux/users-reducer";
import { selectorGetUsersPositions } from "../../redux/users-selectors";
import { phoneNumberMask } from "../../utils/phoneMask";
import { validateEmail, validateName, validatePhone, validatePhoto, validatePosition } from "../../utils/validators";
import { Button } from './../common/Button/Button'
import { PreviewPhoto } from "./PreviewPhoto";
import { CustomInputComponent } from "../common/FormCustomElements/CustomInputComponent";

export const RegisterForm = () => {

    const dispatch = useDispatch()
    const positions = useSelector(selectorGetUsersPositions)
    const fileRef = useRef(null)

    useEffect(() => {
        dispatch(getPositions())
    }, [])

    const formInitialValues = { name: '', email: '', phone: '', position_id: '', photo: undefined }


    const submit = (values, { resetForm }) => {
        const sendData = { ...values, phone: values.phone.replace(/[^\+|\d]/g, "") }
        dispatch(registerNewUser(sendData))
        resetForm()
    }

    return <Formik
        initialValues={formInitialValues}
        onSubmit={submit}
    >
        {({ values, setFieldValue, errors, touched, isValid }) => (
            <Form className="postform">
                <Field errorBlockClass="postform__error" validate={validateName} blockClass='postform__item' className='postform__input'
                    component={CustomInputComponent} placeholder='Your name' type="text" name="name" />
                <Field errorBlockClass="postform__error" validate={validateEmail} blockClass='postform__item' className='postform__input'
                    component={CustomInputComponent} placeholder='Email' type="email" name="email" />
                <Field errorBlockClass="postform__error"
                    blockClass='postform__phone'
                    label='+38 (XXX) XXX - XX - XX'
                    labelClass="postform__phone-label"
                    className='postform__input'
                    maxLength='19'
                    validate={validatePhone}
                    onChange={(e) => phoneNumberMask(e, setFieldValue)}
                    component={CustomInputComponent}
                    placeholder='Phone'
                    type="tel" name="phone" id='phone-id' />


                <div className="postform__radiogroup">
                    <p className="postform__radio-title">Select your position</p>
                    {positions.map(position => <Field key={position.id}
                        errorBlockClass="postform__error"
                        blockClass='postform__radio-item'
                        className='postform__radio-btn'
                        component={CustomInputComponent}
                        labelClass={cn('postform__radio-label', { 'active': values.position_id === position.id })}
                        label={position.name}
                        id={position.name}
                        value={position.id}
                        validate={validatePosition}
                        type="radio"
                        name="position_id"
                        onChange={(e) => setFieldValue('position_id', position.id)} />)}
                </div>

                {errors.photo && touched.photo && <div className="postform__photo-error">{errors.photo}</div>}
                <div className={cn("postform__photo-block", { 'error': errors.photo && touched.photo })}>
                    <button type='button'
                        onClick={() => {
                            fileRef.current?.click()
                        }}
                        className='postform__photo-btn'>Upload</button>
                    <div className="postform__block-name">
                        <p className="postform__photo-name">
                            {!values.photo ? 'Upload your photo' : values.photo.name}
                        </p>
                        {values.photo && <button onClick={() => {
                            setFieldValue('photo', '')
                            if (fileRef.current) fileRef.current.value = ''
                        }}
                            className='postform__delete-photo' type='button'></button>}
                    </div>
                    <Field type='file' name='photo'
                        hidden
                        value={undefined} //* for normal working react
                        accept='image/*'
                        forwardRef={fileRef}
                        validate={validatePhoto}
                        showError={false}
                        component={CustomInputComponent}
                        onChange={(e) => {
                            touched.photo = true
                            setFieldValue('photo', e.target.files?.[0])
                        }} />
                </div>
                {values.photo && <PreviewPhoto file={values.photo} />}

                <Button type="submit" className="btn postform__send-btn" text='Sign up' />
            </Form>
        )}
    </Formik >
}
