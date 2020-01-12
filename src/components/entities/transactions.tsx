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

const TransactionFilter = (props: Record<string, unknown>) => {
	return (
		<Filter {...props}>
			<TextInput label='Search user' source='user' alwaysOn />
			<NumberInput label='Search amount' source='amount' alwaysOn />
			<NumberInput label='Search payout' source='payout' alwaysOn />
			<BooleanInput source='handled' />
		</Filter>
	);
};

export const TransactionShow = (props: Record<string, unknown>) => (
	<Show {...props}>
		<SimpleShowLayout>
			<TextField label='ID' source='id' />
			<DateField label='Timestamp' source='timestamp' showTime />
			<TextField label='User ID' source='user' />
			<ChipField label='From currency' source='from.id' />
			<NumberField label='Amount' source='amount' />
			<BooleanField label='Handled' source='handled' />
			<ChipField label='To currency' source='to.id' />
			<NumberField label='Payout' source='payout' />
		</SimpleShowLayout>
	</Show>
);

export const TransactionList = (props: Record<string, unknown>) => (
	<List {...props} bulkActionButtons={false} filters={<TransactionFilter />} sort={{field: 'timestamp', order: 'DESC'}}>
		<Datagrid rowClick='show'>
			<TextField label='ID' source='id' />
			<NumberField label='Amount' source='amount' />
			<TextField label='User ID' source='user' />
			<BooleanField label='Handled' source='handled' />
			<DateField label='Timestamp' source='timestamp' showTime />
			<NumberField label='Payout' source='payout' />
			<ChipField label='From currency' source='from.id' />
			<ChipField label='To currency' source='to.id' />
		</Datagrid>
	</List>
);
