

export const selectorGetUsers = (state) => {
    return state.usersPage.users
}
export const selectorGetUsersIsFetching = (state) => {
    return state.usersPage.isFetching
}
export const selectorGetUsersCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const selectorGetUsersCountOnPage = (state) => {
    return state.usersPage.countOnPage
}
export const selectorGetUsersTotalUsers = (state) => {
    return state.usersPage.totalUsers
}
export const selectorGetUsersPositions = (state) => {
    return state.usersPage.positions
}
export const selectorGetUsersIsRegistrationSuccess = (state) => {
    return state.usersPage.isRegistrationSuccess
}
export const selectorGetUsersIsRegistrationError = (state) => {
    return state.usersPage.isRegistrationError
}