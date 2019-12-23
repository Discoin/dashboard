import React from 'react';
import {Datagrid, List, NumberField, TextField} from 'react-admin';

interface Currency {
	id: string;
	name: string;
	value: number;
	reserve: number;
}

export const CurrencyList = (props: Record<string, unknown>) => (
	<List {...props}>
		<Datagrid>
			<TextField label='ID' source='id' />
			<TextField source='name' />
			<NumberField label='Value in Discoin' source='value' />
			<NumberField source='reserve' />
		</Datagrid>
	</List>
);
