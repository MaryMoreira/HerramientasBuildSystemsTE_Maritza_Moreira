
export const aSendLogin = (user, pass) => ({
    type: "SendLogin",
    user,
    pass
});

export const aSendLogout = () => ({
    type: "rotate",
    payload: true
});