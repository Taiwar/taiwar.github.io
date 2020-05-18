import style from './style';
import logo from '../../assets/icons/icon-512.png';
import { Container, Header } from 'semantic-ui-react'

const Home = () => (
	<div class={style.home}>
		<Container class={style.highlight}>
			<img class={style.logo} src={logo} alt="Taiwar logo" />
			<Header class="center aligned" as='h1'>Taiwar</Header>
		</Container>
	</div>
);

export default Home;
