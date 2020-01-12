import React from 'react';
import {
	Datagrid,
	List,
	Filter,
	ReferenceInput,
	SelectInput,
	NumberInput,
	NumberField,
	TextInput,
	TextField,
	Show,
	SimpleShowLayout
} from 'react-admin';

const CurrenciesFilter = (props: Record<string, unknown>) => {
	return (
		<Filter {...props}>
			<TextInput label='Search' source='id' alwaysOn />
			<TextInput label='Name' source='name' />
			<NumberInput source='value' />
			<NumberInput source='reserve' />
		</Filter>
	);
};

export const CurrencyShow = (props: Record<string, unknown>) => (
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
	<List {...props} bulkActionButtons={false} perPage={25} filters={<CurrenciesFilter />}>
		<Datagrid rowClick='show'>
			<TextField label='ID' source='id' />
			<TextField source='name' />
			<NumberField label='Value in Discoin' source='value' />
			<NumberField source='reserve' />
		</Datagrid>
	</List>
);
