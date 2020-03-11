import {DataProvider} from 'ra-core';
import Client from '@discoin/scambio';
import {RequestQueryBuilder, CondOperator} from '@nestjsx/crud-request';

type DiscoinEntity = 'transactions' | 'bots' | 'currencies';

const flattenObject = (object, prefix = ''): Record<string, any> =>
	Object.keys(object).reduce((acc, k) => {
		const pre = prefix.length === 0 ? '' : `${prefix}.`;
		if (typeof object[k] === 'object') Object.assign(acc, flattenObject(object[k], pre + k));
		// @ts-ignore
		else acc[pre + k] = object[k];
		return acc;
	}, {});

export const scambioProvider = (client: Client): DataProvider => ({
	// @ts-ignore
	getList: async (resource: DiscoinEntity, parameters) => {
		const qb = RequestQueryBuilder.create()
			.setLimit(parameters.pagination.perPage)
			.setOffset((parameters.pagination.page - 1) * parameters.pagination.perPage)
			.sortBy({
				field: parameters.sort.field,
				order: parameters.sort.order as 'ASC' | 'DESC'
			});

		console.log('Filter:', parameters.filter);

		for (const key in flattenObject(parameters.filter)) {
			if (Object.prototype.hasOwnProperty.call(parameters.filter, key)) {
				const element = parameters.filter[key];
				qb.setFilter({
					field: key,
					value: element,
					operator: typeof element === 'string' ? CondOperator.CONTAINS_LOW : CondOperator.EQUALS
				});
			}
		}

		let query;
		if (resource === 'transactions') {
			query = await client.transactions.getMany(qb.query());
		} else {
			query = await Client[resource].getMany(qb.query());
		}

		return query;
	},

	// @ts-ignore
	getOne: async (resource: DiscoinEntity, parameters) => {
		const id = typeof parameters.id === 'number' ? parameters.id.toString() : parameters.id;

		let entity;

		if (resource === 'transactions') {
			entity = await client.transactions.getOne(id);
		} else {
			entity = await Client[resource].getOne(id);
		}

		return {data: entity};
	},

	// @ts-ignore
	getMany: async (resource: DiscoinEntity, parameters) => {
		const query = RequestQueryBuilder.create()
			.setFilter({
				field: 'id',
				operator: CondOperator.IN,
				value: parameters.ids.join(',')
			})
			.query();

		if (resource === 'transactions') {
			return client.transactions.getMany(query);
		}

		return Client[resource].getMany(query);
	},

	// @ts-ignore
	getManyReference: async (resource: DiscoinEntity, parameters) => {
		const qb = RequestQueryBuilder.create();

		qb.setPage(parameters.pagination.page)
			.setOffset((parameters.pagination.page - 1) * parameters.pagination.perPage)
			.setFilter({field: parameters.target, operator: CondOperator.EQUALS, value: parameters.id})
			.sortBy({
				field: parameters.sort.field,
				order: parameters.sort.order as 'ASC' | 'DESC'
			})
			.setLimit(parameters.pagination.perPage);

		if (resource === 'transactions') {
			return client.transactions.getMany(qb.query());
		}

		return Client[resource].getMany(qb.query());
	},

	// @ts-ignore
	update: async (resource: DiscoinEntity, parameters) => {
		if (resource !== 'transactions') {
			throw new Error('Not implemented');
		}

		const transaction = await client.transactions.getOne(parameters.id as string);
		return transaction.update(parameters.data);
	},

	// @ts-ignore
	updateMany: async (resource: DiscoinEntity, parameters) => {
		if (resource !== 'transactions') {
			throw new Error('Not implemented');
		}

		return parameters.ids.map(async id => {
			const transaction = await client.transactions.getOne(id as string);
			return transaction.update(parameters.data);
		});
	},

	// @ts-ignore
	create: async (resource: DiscoinEntity, parameters) => {
		if (resource !== 'transactions') {
			throw new Error('Not implemented');
		}

		return client.transactions.create(parameters.data);
	},

	delete: async (_resource, _parameters) => {
		throw new Error('Not implemented');
	},

	deleteMany: async (_resource, _parameters) => {
		throw new Error('Not implemented');
	}
});
