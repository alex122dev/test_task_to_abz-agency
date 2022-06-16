import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getMoreUsers } from "../../redux/users-reducer"
import { selectorGetUsers, selectorGetUsersCountOnPage, selectorGetUsersCurrentPage, selectorGetUsersIsFetching, selectorGetUsersTotalUsers } from "../../redux/users-selectors"
import { Button } from "../common/Button/Button"
import { Preloader } from "../common/Preloader/Preloader"
import { Users } from "./Users"


export const GetBlock = () => {
    const dispatch = useDispatch()
    const isFetching = useSelector(selectorGetUsersIsFetching)
    const currentPage = useSelector(selectorGetUsersCurrentPage)
    const countOnPage = useSelector(selectorGetUsersCountOnPage)
    const totalUsers = useSelector(selectorGetUsersTotalUsers)
    const users = useSelector(selectorGetUsers)


    const [nextPage, setNextPage] = useState(currentPage)

    const showMoreCallback = () => {
        setNextPage(actualPage => setNextPage(actualPage + 1))
        dispatch(getMoreUsers(nextPage + 1, countOnPage))
    }

    useEffect(() => {
        dispatch(getMoreUsers(1, countOnPage))
    }, [])

    return <div className="getblock">
        <div className="getblock__container container">
            <h2 className="getblock__title">Working with GET request</h2>
            <div className="getblock__users">
                <Users />
            </div>
            {isFetching && <Preloader />}
            {totalUsers !== users.length && <Button text={'Show more'} clickFunc={showMoreCallback} />}
        </div>
    </div>
}