import { Htag, Button, P, Tag } from '../components';

export default function Home(): JSX.Element {
	return (
		<div>
			<Htag tag="h1">Hello</Htag>
			<Button appearance="primary" arrow='right'>Button</Button>
			<Button appearance="ghost" arrow='down'>Button</Button>
			<P size="s">Lorem, ipsum dolor.</P>
			<P size="l">Lorem, ipsum dolor.</P>
			<P>Lorem, ipsum dolor.</P>
			<Tag size="m" color="red">Lorem</Tag>
			<Tag size="m">Lorem</Tag>
			<Tag href="/" color="green">Lorem</Tag>
		</div>
	);
}
