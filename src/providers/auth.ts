enum Constants {
	USERNAME = 'username'
}

export const authProvider = {
	// called when the user attempts to log in
	login: ({username}: {username: string}) => {
		localStorage.setItem(Constants.USERNAME, username);
		// accept all username/password combinations
		return Promise.resolve();
	},
	// called when the user clicks on the logout button
	logout: () => {
		localStorage.removeItem(Constants.USERNAME);
		return Promise.resolve();
	},
	// called when the API returns an error
	checkError: ({status}: {status: number}) => {
		if (status === 401 || status === 403) {
			localStorage.removeItem(Constants.USERNAME);
			return Promise.reject();
		}
		return Promise.resolve();
	},
	// called when the user navigates to a new location, to check for authentication
	checkAuth: () => {
		return localStorage.getItem(Constants.USERNAME) ? Promise.resolve() : Promise.reject();
	},
	// called when the user navigates to a new location, to check for permissions / roles
	getPermissions: () => Promise.resolve()
};
