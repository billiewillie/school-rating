import {useState} from 'react';
import { Htag, Button, P, Tag, Rating } from '../components';
import { withLayout } from '../layout/Layout';
import axios from 'axios';

function Home(): JSX.Element {
	const [rating, setRating] = useState<number>(4);

	return (
		<div>
			<Htag tag="h1">{rating}</Htag>
			<Button appearance="primary" arrow='right'>Button</Button>
			<Button appearance="ghost" arrow='down'>Button</Button>
			<P size="s">Lorem, ipsum dolor.</P>
			<P size="l">Lorem, ipsum dolor.</P>
			<P>Lorem, ipsum dolor.</P>
			<Tag size="m" color="red">Lorem</Tag>
			<Tag size="m">Lorem</Tag>
			<Tag href="/" color="green">Lorem</Tag>
			<Rating rating={rating} isEditable setRating={setRating} />
		</div>
	);
}

export default withLayout(Home);
