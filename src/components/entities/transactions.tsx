import React from 'react';
import {
	BooleanField,
	BooleanInput,
	ChipField,
	Datagrid,
	DateField,
	Filter,
	List,
	NumberField,
	NumberInput,
	TextInput,
	Show,
	SimpleShowLayout,
	TextField
} from 'react-admin';

const TransactionFilter = (props: Record<string, unknown>): JSX.Element => {
	return (
		<Filter {...props}>
			<TextInput alwaysOn label='Search user' source='user' />
			<NumberInput alwaysOn label='Search amount' source='amount' />
			<NumberInput alwaysOn label='Search payout' source='payout' />
			<BooleanInput source='handled' />
		</Filter>
	);
};

export const TransactionShow = (props: Record<string, unknown>): JSX.Element => (
	<Show {...props}>
		<SimpleShowLayout>
			<TextField label='ID' source='id' />
			<DateField showTime label='Timestamp' source='timestamp' />
			<TextField label='User ID' source='user' />
			<ChipField label='From currency' source='from.id' />
			<NumberField label='Amount' source='amount' />
			<BooleanField label='Handled' source='handled' />
			<ChipField label='To currency' source='to.id' />
			<NumberField label='Payout' source='payout' />
		</SimpleShowLayout>
	</Show>
);

export const TransactionList = (props: Record<string, unknown>): JSX.Element => (
	<List {...props} bulkActionButtons={false} filters={<TransactionFilter />} sort={{field: 'timestamp', order: 'DESC'}}>
		<Datagrid rowClick='show'>
			<TextField label='ID' source='id' />
			<NumberField label='Amount' source='amount' />
			<TextField label='User ID' source='user' />
			<BooleanField label='Handled' source='handled' />
			<DateField showTime label='Timestamp' source='timestamp' />
			<NumberField label='Payout' source='payout' />
			<ChipField label='From currency' source='from.id' />
			<ChipField label='To currency' source='to.id' />
		</Datagrid>
	</List>
);
