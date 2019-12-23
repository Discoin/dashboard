enum Constants {
	USERNAME = 'username'
}

export const authProvider = {
	// Called when the user attempts to log in
	login: ({username}: {username: string}) => {
		localStorage.setItem(Constants.USERNAME, username);
		// Accept all username/password combinations
		return Promise.resolve();
	},
	// Called when the user clicks on the logout button
	logout: () => {
		localStorage.removeItem(Constants.USERNAME);
		return Promise.resolve();
	},
	// Called when the API returns an error
	checkError: ({status}: {status: number}) => {
		if (status === 401 || status === 403) {
			localStorage.removeItem(Constants.USERNAME);
			return Promise.reject();
		}

		return Promise.resolve();
	},
	// Called when the user navigates to a new location, to check for authentication
	checkAuth: () => {
		return localStorage.getItem(Constants.USERNAME) ? Promise.resolve() : Promise.reject();
	},
	// Called when the user navigates to a new location, to check for permissions / roles
	getPermissions: () => Promise.resolve()
};
