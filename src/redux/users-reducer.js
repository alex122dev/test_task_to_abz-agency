import { usersAPI } from "../api/api"

const SET_USERS = 'USERS/SET_USERS'
const CLEAR_USERS = 'USERS/CLEAR_USERS'
const SET_CURRENT_PAGE = 'USERS/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'USERS/SET_TOTAL_USERS_COUNT'
const SET_IS_FETCHING = 'USERS/SET_IS_FETCHING'
const SET_POSITIONS = 'USERS/SET_POSITIONS'
const SET_TOKEN = 'USERS/SET_TOKEN'
const SET_IS_REGISTRATION_SUCCESS = 'USERS/SET_IS_REGISTRATION_SUCCESS'
const SET_IS_REGISTRATION_ERROR = 'USERS/SET_IS_REGISTRATION_ERROR'

const initialState = {
    users: [],
    isFetching: false,
    currentPage: 1,
    countOnPage: 6,
    totalUsers: 0,
    positions: [],
    token: '',
    isRegistrationSuccess: false,
    isRegistrationError: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        case CLEAR_USERS:
            return {
                ...state,
                users: []
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsers: action.total
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_POSITIONS:
            return {
                ...state,
                positions: action.positions
            }
        case SET_TOKEN:
            return {
                ...state,
                token: action.token
            }
        case SET_IS_REGISTRATION_SUCCESS:
            return {
                ...state,
                isRegistrationSuccess: action.isRegistrationSuccess
            }
        case SET_IS_REGISTRATION_ERROR:
            return {
                ...state,
                isRegistrationError: action.isRegistrationError
            }
        default:
            return state
    }
}

export const actions = {
    setUsers: (users) => ({ type: SET_USERS, users }),
    clearUsers: () => ({ type: CLEAR_USERS }),
    setCurrentPage: (page) => ({ type: SET_CURRENT_PAGE, page }),
    setTotalUsersCount: (total) => ({ type: SET_TOTAL_USERS_COUNT, total }),
    setIsFetching: (isFetching) => ({ type: SET_IS_FETCHING, isFetching }),
    setPositions: (positions) => ({ type: SET_POSITIONS, positions }),
    setToken: (token) => ({ type: SET_TOKEN, token }),
    setIsRegistrationSuccess: (isRegistrationSuccess) => ({ type: SET_IS_REGISTRATION_SUCCESS, isRegistrationSuccess }),
    setIsRegistrationError: (isRegistrationError) => ({ type: SET_IS_REGISTRATION_ERROR, isRegistrationError })

}


export const getMoreUsers = (page, count) => async (dispatch) => {
    dispatch(actions.setIsFetching(true))
    const data = await usersAPI.getUsers(page, count)
    dispatch(actions.setIsFetching(false))
    if (data.success) {
        dispatch(actions.setUsers(data.users))
        dispatch(actions.setCurrentPage(page = 1))
        dispatch(actions.setTotalUsersCount(data.total_users))
    }
}

export const getPositions = () => async (dispatch) => {
    const data = await usersAPI.getPositions()
    if (data.success) {
        dispatch(actions.setPositions(data.positions))
    }
}

export const getNewToken = () => async (dispatch) => {
    const data = await usersAPI.getToken()
    if (data.success) {
        dispatch(actions.setToken(data.token))
    }
}

export const registerNewUser = (formData) => async (dispatch, getState) => {
    const token = getState().usersPage.token

    try {
        const data = await usersAPI.registerUser(formData, token)
        console.log(data);
        if (data.success) {
            dispatch(actions.setIsRegistrationSuccess(true))
            dispatch(actions.setIsRegistrationError(false))
            dispatch(actions.clearUsers())
            dispatch(getMoreUsers())
            dispatch(getNewToken())
        }
    } catch (err) {
        const errorMessage = err.response.data.message
        dispatch(actions.setIsRegistrationError(errorMessage))
    }

}


export default usersReducer