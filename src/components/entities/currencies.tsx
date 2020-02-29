import React from 'react';
import {
	Datagrid,
	Filter,
	List,
	NumberField,
	NumberInput,
	Show,
	SimpleShowLayout,
	TextField,
	TextInput
} from 'react-admin';

const CurrenciesFilter = (props: Record<string, unknown>): JSX.Element => {
	return (
		<Filter {...props}>
			<TextInput alwaysOn label='Search' source='id' />
			<TextInput label='Name' source='name' />
			<NumberInput source='value' />
			<NumberInput source='reserve' />
		</Filter>
	);
};

export const CurrencyShow = (props: Record<string, unknown>): JSX.Element => (
	<Show {...props}>
		<SimpleShowLayout>
			<TextField label='ID' source='id' />
			<TextField source='name' />
			<NumberField label='Value in Discoin' source='value' options={{maximumFractionDigits: 4}} />
			<NumberField source='reserve' options={{maximumFractionDigits: 2}} />
		</SimpleShowLayout>
	</Show>
);

export const CurrencyList = (props: Record<string, unknown>): JSX.Element => (
	<List {...props} bulkActionButtons={false} perPage={25} filters={<CurrenciesFilter />}>
		<Datagrid rowClick='show'>
			<TextField label='ID' source='id' />
			<TextField source='name' />
			<NumberField label='Value in Discoin' source='value' options={{maximumFractionDigits: 4}} />
			<NumberField source='reserve' options={{maximumFractionDigits: 2}} />
		</Datagrid>
	</List>
);
