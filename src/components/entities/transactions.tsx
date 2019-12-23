import React from 'react';
import {BooleanField, ChipField, Datagrid, DateField, EditButton, List, NumberField, TextField} from 'react-admin';

export const TransactionList = (props: Record<string, unknown>) => (
	<List {...props}>
		<Datagrid>
			<TextField label='ID' source='id' />
			<NumberField label='Amount' source='amount' />
			<TextField label='User ID' source='user' />
			<BooleanField label='Handled' source='handled' />
			<DateField label='Timestamp' source='timestamp' />
			<NumberField label='Payout' source='payout' />
			<ChipField label='From currency' source='from.id' />
			<ChipField label='To currency' source='to.id' />
			{/* <ReferenceField label='From currency' source='from.id' reference='currencies'>
				<ChipField source='id' />
			</ReferenceField>
			<ReferenceField label='To currency' source='to.id' reference='currencies'>
				<ChipField source='id' />
			</ReferenceField>*/}
			<EditButton />
		</Datagrid>
	</List>
);
