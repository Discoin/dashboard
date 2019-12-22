import React from 'react';
import {
	List,
	Datagrid,
	TextField,
	NumberField,
	EditButton,
	Create,
	Edit,
	SimpleForm,
	BooleanField,
	Filter,
	TextInput,
	SelectInput,
	DateField,
	ReferenceInput
} from 'react-admin';

type Transaction = Record<string, unknown>;

const TransactionTitle = ({record}: {record?: Transaction}) => {
	return <span>Transaction{record ? ` "${record.id}"` : ''}</span>;
};

const TransactionFilter = (props: Record<string, unknown>) => (
	<Filter {...props}>
		<TextInput label='Search' source='q' alwaysOn />
		<ReferenceInput label='ID' source='id' reference='users' allowEmpty>
			<SelectInput optionText='name' />
		</ReferenceInput>
	</Filter>
);

export const TransactionList = (props: Record<string, unknown>) => (
	<List filters={<TransactionFilter />} {...props}>
		<Datagrid>
			<TextField label='ID' source='id' />
			<NumberField label='Amount' source='amount' />
			<TextField label='User ID' source='user' />
			<BooleanField label='Handled' source='handled' />
			<DateField label='Timestamp' source='timestamp' />
			<EditButton />
		</Datagrid>
	</List>
);

export const TransactionEdit = (props: Record<string, unknown>) => (
	<Edit title={<TransactionTitle />} {...props}>
		<SimpleForm></SimpleForm>
	</Edit>
);

export const TransactionCreate = (props: Record<string, unknown>) => (
	<Create {...props}>
		<SimpleForm></SimpleForm>
	</Create>
);
