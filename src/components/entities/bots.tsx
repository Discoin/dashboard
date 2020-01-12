import React from 'react';
import {ChipField, Datagrid, List, Show, SimpleShowLayout, TextField} from 'react-admin';

export const BotsShow = (props: Record<string, unknown>) => (
	<Show {...props}>
		<SimpleShowLayout>
			<TextField label='ID' source='id' />
			<ChipField label='Currency' source='currency.id' />
		</SimpleShowLayout>
	</Show>
);

export const BotsList = (props: Record<string, unknown>) => (
	<List {...props} bulkActionButtons={false} sort={{field: 'currency.id', order: 'ASC'}} perPage={25}>
		<Datagrid rowClick='show'>
			<TextField label='ID' source='id' />
			<ChipField label='Currency' source='currency.id' />
		</Datagrid>
	</List>
);
