import {AttachMoney, Computer, Send} from '@material-ui/icons';
import React from 'react';
import {Admin, Resource} from 'react-admin';
import {dashboardCard} from './dashboard';
import {BotsList, BotsShow} from './entities/bots';
import {CurrencyList, CurrencyShow} from './entities/currencies';
import {TransactionList, TransactionShow} from './entities/transactions';
import {scambioProvider} from '../providers/scambio';
import Client from '@discoin/scambio';

const client = new Client('dashboard', 'DASH');
const dataProvider = scambioProvider(client);

export function AdminDashboard(): JSX.Element {
	return (
		<Admin dashboard={dashboardCard} dataProvider={dataProvider}>
			<Resource name='transactions' list={TransactionList} show={TransactionShow} icon={Send} />
			<Resource name='bots' list={BotsList} show={BotsShow} icon={Computer} />
			<Resource name='currencies' list={CurrencyList} show={CurrencyShow} icon={AttachMoney} />
		</Admin>
	);
}
