import { selectorGetUsersIsRegistrationError, selectorGetUsersIsRegistrationSuccess } from "../../redux/users-selectors"
import { RegisterForm } from "./RegisterForm"
import { useSelector } from "react-redux";
import successImage from './../../assets/success-image.svg'

export const PostBlock = () => {

    const isRegistrationSuccess = useSelector(selectorGetUsersIsRegistrationSuccess)
    const isRegistrationError = useSelector(selectorGetUsersIsRegistrationError)


    return <div className="postblock">
        <div className="postblock__container container">
            <h2 className="postblock__title">Working with POST request</h2>
            <RegisterForm />
            {isRegistrationSuccess && <div className="postblock__success">
                <h2 className="postblock__success-title">User successfully registered</h2>
                <div className="postblock__success-image">
                    <img src={successImage} alt="success registration" />
                </div>
            </div>}
            {isRegistrationError && <div className="postblock__error">{isRegistrationError}</div>}
        </div>
    </div>
}