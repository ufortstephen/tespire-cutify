export const isAuthenticated = () => {
    const existingSessionString = localStorage.getItem('dashboard-session');
    if(existingSessionString){
        const { tokens: { expiry } } = JSON.parse(existingSessionString);
        const currentTimeInSeconds = Math.floor(Date.now() / 1000);
        if(expiry > currentTimeInSeconds){
            return  true;
        }else {
            localStorage.removeItem('dashboard-session')
            return false;
        }
    }
    return false;
}