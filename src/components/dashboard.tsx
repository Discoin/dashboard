import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

export const dashboardCard: React.FC = () => (
	<Card>
		<CardHeader title='Discoin Dashboard' />
		<CardContent>View all the data in the Discoin database</CardContent>
	</Card>
);
