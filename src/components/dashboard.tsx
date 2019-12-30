import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

export const dashboardCard: React.FC = () => (
	<Card>
		<CardHeader title='Discoin Dashboard' />
		<CardContent>Here you can see all the currencies, bots, and transactions within the Discoin API. You can also read our documentation <a href="https://discoin.gitbook.io">here</a>!</CardContent>
	</Card>
);
