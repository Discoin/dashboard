import {AttachMoney, Computer, Send} from '@material-ui/icons';
import React from 'react';
import {Admin, Resource} from 'react-admin';
import {Dashboard} from './Dashboard';
import {TransactionCreate, TransactionEdit, TransactionList} from './transactions';
import {authProvider} from './providers/auth';
import crudProvider from '@fusionworks/ra-data-nest-crud';
import {BotsList} from './bots';
import {CurrencyList} from './currencies';

// const dataProvider = crudProvider('https://discoin.zws.im');
const dataProvider = crudProvider('http://localhost:3000');

const App: React.FC = () => (
	<Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
		<Resource
			name='transactions'
			list={TransactionList}
			edit={TransactionEdit}
			create={TransactionCreate}
			icon={Send}
		/>
		<Resource name='bots' list={BotsList} icon={Computer} />
		<Resource name='currencies' list={CurrencyList} icon={AttachMoney} />
	</Admin>
);

export default App;
