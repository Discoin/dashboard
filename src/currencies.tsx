import React from 'react';
import {List, Datagrid, TextField, NumberField, Filter, TextInput, SelectInput, ReferenceInput} from 'react-admin';

interface Currency {
	id: string;
	name: string;
	value: number;
	reserve: number;
}

const CurrencyFilter = (props: Record<string, unknown>) => (
	<Filter {...props}>
		<TextInput label='Search' source='q' alwaysOn />
		<ReferenceInput label='ID' source='id' reference='users' allowEmpty>
			<SelectInput optionText='name' />
		</ReferenceInput>
	</Filter>
);

export const CurrencyList = (props: Record<string, unknown>) => (
	<List filters={<CurrencyFilter />} {...props}>
		<Datagrid>
			<TextField source='id' />
			<TextField source='name' />
			<NumberField source='value' />
			<NumberField source='reserve' />
		</Datagrid>
	</List>
);
