import { useSelector } from "react-redux"
import { selectorGetUsers } from "../../redux/users-selectors"
import { User } from "./User"

export const Users = () => {

    const users = useSelector(selectorGetUsers)

    return <>
        {users.map(user => <User key={user.id} user={user} />)}
    </>
}