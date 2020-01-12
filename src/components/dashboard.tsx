import React from 'react';
import {Typography, CardContent, Card, CardHeader, Link} from '@material-ui/core';

export const dashboardCard: React.FC = () => (
	<Card>
		<CardHeader title='Discoin Dashboard' />
		<CardContent>
			<Typography>
				Here you can see all the currencies, bots, and transactions within the Discoin API. You can also read our
				documentation <Link href='https://discoin.gitbook.io'>here</Link>!
			</Typography>
		</CardContent>
	</Card>
);
