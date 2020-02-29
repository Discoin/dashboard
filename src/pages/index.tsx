import React from 'react';
import dynamic from 'next/dynamic';

// Browser history will break in SSR
const Admin = dynamic(
	async () => {
		const mod = await import('../components/admin');
		return mod.AdminDashboard;
	},
	{
		ssr: false
	}
);

export default (): JSX.Element => <Admin />;
