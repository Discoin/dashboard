import React from 'react';
import {List, Datagrid, TextField, ChipField, Show, SimpleShowLayout} from 'react-admin';

export const BotsShow = (props: Record<string, unknown>) => (
	<Show {...props}>
		<SimpleShowLayout>
			<TextField label='ID' source='id' />
			<ChipField label='Currency' source='currency.id' />
			{/* <ReferenceField label='Currency' source='currency.id' reference='currencies'>
				<ChipField source='id' />
			</ReferenceField> */}
		</SimpleShowLayout>
	</Show>
);

export const BotsList = (props: Record<string, unknown>) => (
	<List {...props} bulkActionButtons={false}>
		<Datagrid rowClick='show'>
			<TextField label='ID' source='id' />
			<ChipField label='Currency' source='currency.id' />
			{/* <ReferenceField label='Currency' source='currency.id' reference='currencies'>
				<ChipField source='id' />
			</ReferenceField> */}
		</Datagrid>
	</List>
);
