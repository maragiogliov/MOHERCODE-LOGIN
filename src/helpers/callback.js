export const logInCallback = (res, history, setUser, data) => {
    const token = res.headers.get('x-auth-token');
    localStorage.setItem('jwt', JSON.stringify(token));
    setUser({ ...data, jwt: token, auth: true });
    //if (res.status === 200) history.push(`/${data.userType}`);
    if (res.status === 200) history.push('/dash');
};

export const signUpCallback = (res, history) => {
    if (res.status === 200) history.push('/');
};
