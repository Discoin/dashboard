import React from 'react';
import {List, Datagrid, TextField, ReferenceField} from 'react-admin';

export const BotsList = (props: Record<string, unknown>) => (
	<List {...props}>
		<Datagrid rowClick='edit'>
			<TextField label='ID' source='id' />
			<ReferenceField source='currency.id' reference='currencies'>
				<TextField source='id' />
			</ReferenceField>
		</Datagrid>
	</List>
);
