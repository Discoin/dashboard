import dynamic from 'next/dynamic';

// Browser history will break in SSR
// @ts-ignore
const Admin = dynamic(() => import('../components/admin').then(mod => mod.AdminDashboard), {
	ssr: false
});

export default () => <Admin />;
