export const initialStates = {
    auth:{
        isAuthenticated: false,
        loading: false,
        error: null,
        data: null
    },
    user:{
        data: {},
        loading: false,
        error: null
    },
    sme:{
        data: {},
        loading: false,
        error: null
    },
    payday:{
        data: {},
        loading: false,
        error: null
    },
    setting:{
        data: {},
        loading: false,
        error: null
    },
    profile:{
        data: {},
        loading: false,
        error: null
    },
    notify:{
        show: false,
        message:{
            type:"",
            message:"",
            show: false
        }
    }
}