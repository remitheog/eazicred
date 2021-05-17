export const tokenConfig = (getState, type = "application/json") => {
    const token = getState().auth.token
    const config = {
        headers: {
            "Content-Type": type,
            timeout: 30,
            timeoutErrorMessage: "Request could not be completed (timeout(30))"
        }
    }
    if(token){
        config.headers["Authorization"] = `Bearer ${token}`
    }
    return config
}

export const showError = (err, defaultMsg) => {
    if (err.response){
        return err.response.message
    }
    return defaultMsg
}

