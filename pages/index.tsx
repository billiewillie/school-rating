import {useState} from 'react';
import { GetStaticProps } from 'next';
import { Htag, Button, P, Tag, Rating } from '../components';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';

function Home({ menu }: HomeProps): JSX.Element {
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
			<ul>
				{menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
			</ul>
		</div>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
		firstCategory
	});
	
	return {
		props: {
			menu,
			firstCategory
		}
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}
