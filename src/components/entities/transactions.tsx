import React from 'react';
import {
	BooleanField,
	ChipField,
	Datagrid,
	DateField,
	List,
	Show,
	SimpleShowLayout,
	NumberField,
	TextField,
	ReferenceField
} from 'react-admin';

export const TransactionShow = (props: Record<string, unknown>) => (
	<Show {...props}>
		<SimpleShowLayout>
			<TextField label='ID' source='id' />
			<NumberField label='Amount' source='amount' />
			<TextField label='User ID' source='user' />
			<BooleanField label='Handled' source='handled' />
			<DateField label='Timestamp' source='timestamp' />
			<NumberField label='Payout' source='payout' />
			<ReferenceField label='From currency' source='from.id' reference='currencies'>
				<ChipField source='id' />
			</ReferenceField>
			<ReferenceField label='To currency' source='to.id' reference='currencies'>
				<ChipField source='id' />
			</ReferenceField>
		</SimpleShowLayout>
	</Show>
);

export const TransactionList = (props: Record<string, unknown>) => (
	<List {...props} bulkActionButtons={false}>
		<Datagrid rowClick='show'>
			<TextField label='ID' source='id' />
			<NumberField label='Amount' source='amount' />
			<TextField label='User ID' source='user' />
			<BooleanField label='Handled' source='handled' />
			<DateField label='Timestamp' source='timestamp' />
			<NumberField label='Payout' source='payout' />
			<ReferenceField label='From currency' source='from.id' reference='currencies'>
				<ChipField source='id' />
			</ReferenceField>
			<ReferenceField label='To currency' source='to.id' reference='currencies'>
				<ChipField source='id' />
			</ReferenceField>
		</Datagrid>
	</List>
);
