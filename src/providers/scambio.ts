import {DataProvider} from 'ra-core';
import Client from '@discoin/scambio';
import {RequestQueryBuilder, CondOperator} from '@nestjsx/crud-request';

type DiscoinEntity = 'transactions' | 'bots' | 'currencies';

const flattenObject = (obj: Record<string, any>, prefix = ''): Record<string, any> =>
	Object.keys(obj).reduce((acc, k) => {
		const pre = prefix.length === 0 ? '' : `${prefix}.`;
		if (typeof obj[k] === 'object') Object.assign(acc, flattenObject(obj[k], pre + k));
		// @ts-ignore
		else acc[pre + k] = obj[k];
		return acc;
	}, {});

export const scambioProvider = (client: Client): DataProvider => ({
	// @ts-ignore
	getList: async (resource: DiscoinEntity, params) => {
		const qb = RequestQueryBuilder.create()
			.setLimit(params.pagination.perPage)
			.setOffset((params.pagination.page - 1) * params.pagination.perPage)
			.sortBy({
				field: params.sort.field,
				order: params.sort.order as 'ASC' | 'DESC'
			});

		console.log('Filter:', params.filter);

		for (const key in flattenObject(params.filter)) {
			if (Object.prototype.hasOwnProperty.call(params.filter, key)) {
				const element = params.filter[key];
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
	getOne: async (resource: DiscoinEntity, params) => {
		const id = typeof params.id === 'number' ? params.id.toString() : params.id;

		let entity;

		if (resource === 'transactions') {
			entity = await client.transactions.getOne(id);
		} else {
			entity = await Client[resource].getOne(id);
		}

		return {data: entity};
	},

	// @ts-ignore
	getMany: async (resource: DiscoinEntity, params) => {
		const query = RequestQueryBuilder.create()
			.setFilter({
				field: 'id',
				operator: CondOperator.IN,
				value: params.ids.join(',')
			})
			.query();

		if (resource === 'transactions') {
			return client.transactions.getMany(query);
		}

		return Client[resource].getMany(query);
	},

	// @ts-ignore
	getManyReference: async (resource: DiscoinEntity, params) => {
		const qb = RequestQueryBuilder.create();

		qb.setPage(params.pagination.page)
			.setOffset((params.pagination.page - 1) * params.pagination.perPage)
			.setFilter({field: params.target, operator: CondOperator.EQUALS, value: params.id})
			.sortBy({
				field: params.sort.field,
				order: params.sort.order as 'ASC' | 'DESC'
			})
			.setLimit(params.pagination.perPage);

		if (resource === 'transactions') {
			return client.transactions.getMany(qb.query());
		}

		return Client[resource].getMany(qb.query());
	},

	// @ts-ignore
	update: async (resource: DiscoinEntity, params) => {
		if (resource !== 'transactions') {
			throw new Error('Not implemented');
		}

		const transaction = await client.transactions.getOne(params.id as string);
		return transaction.update(params.data);
	},

	// @ts-ignore
	updateMany: async (resource: DiscoinEntity, params) => {
		if (resource !== 'transactions') {
			throw new Error('Not implemented');
		}

		return params.ids.map(async id => {
			const transaction = await client.transactions.getOne(id as string);
			return transaction.update(params.data);
		});
	},

	// @ts-ignore
	create: async (resource: DiscoinEntity, params) => {
		if (resource !== 'transactions') {
			throw new Error('Not implemented');
		}

		return client.transactions.create(params.data);
	},

	delete: async (_resource, _params) => {
		throw new Error('Not implemented');
	},

	deleteMany: async (_resource, _params) => {
		throw new Error('Not implemented');
	}
});
