function handleLogout() {
    localStorage.removeItem('isAuthenticated');
    window.location.reload(); // Refresh the page to clear state
}

export default handleLogout;