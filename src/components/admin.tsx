import crudProvider from '@fusionworks/ra-data-nest-crud';
import {AttachMoney, Computer, Send} from '@material-ui/icons';
import React from 'react';
import {Admin, Resource} from 'react-admin';
import {dashboardCard} from './dashboard';
import {BotsList, BotsShow} from './entities/bots';
import {CurrencyList, CurrencyShows} from './entities/currencies';
import {TransactionList, TransactionShow} from './entities/transactions';
import {createBrowserHistory as createHistory} from 'history';

const dataProvider = crudProvider('https://discoin.zws.im');
const history = createHistory();

export function AdminDashboard(): JSX.Element {
	return (
		<Admin dashboard={dashboardCard} dataProvider={dataProvider} history={history}>
			<Resource name='transactions' list={TransactionList} show={TransactionShow} icon={Send} />
			<Resource name='bots' list={BotsList} show={BotsShow} icon={Computer} />
			<Resource name='currencies' list={CurrencyList} show={CurrencyShows} icon={AttachMoney} />
		</Admin>
	);
}
