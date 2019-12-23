import crudProvider from '@fusionworks/ra-data-nest-crud';
import {AttachMoney, Computer, Send} from '@material-ui/icons';
import dynamic from 'next/dynamic';
import React from 'react';
import {Admin, Resource} from 'react-admin';
import {dashboardCard} from '../components/dashboard';
import {BotsList, BotsShow} from '../components/entities/bots';
import {CurrencyList} from '../components/entities/currencies';
import {TransactionList} from '../components/entities/transactions';
import {authProvider} from '../providers/auth';

// const dataProvider = crudProvider('https://discoin.zws.im');
const dataProvider = crudProvider('http://localhost:3000');

function AdminDashboard(): JSX.Element {
	return (
		<Admin dashboard={dashboardCard} authProvider={authProvider} dataProvider={dataProvider}>
			<Resource name='transactions' list={TransactionList} icon={Send} />
			<Resource name='bots' list={BotsList} icon={Computer} show={BotsShow} />
			<Resource name='currencies' list={CurrencyList} icon={AttachMoney} />
		</Admin>
	);
}

export default dynamic(() => Promise.resolve(AdminDashboard), {
	ssr: false
});
