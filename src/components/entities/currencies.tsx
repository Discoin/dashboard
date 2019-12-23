import React from 'react';
import {Datagrid, List, NumberField, TextField, Show, SimpleShowLayout} from 'react-admin';

interface Currency {
	id: string;
	name: string;
	value: number;
	reserve: number;
}

export const CurrencyShows = (props: Record<string, unknown>) => (
	<Show {...props}>
		<SimpleShowLayout>
			<TextField label='ID' source='id' />
			<TextField source='name' />
			<NumberField label='Value in Discoin' source='value' />
			<NumberField source='reserve' />{' '}
		</SimpleShowLayout>
	</Show>
);

export const CurrencyList = (props: Record<string, unknown>) => (
	<List {...props} bulkActionButtons={false}>
		<Datagrid rowClick='show'>
			<TextField label='ID' source='id' />
			<TextField source='name' />
			<NumberField label='Value in Discoin' source='value' />
			<NumberField source='reserve' />
		</Datagrid>
	</List>
);
