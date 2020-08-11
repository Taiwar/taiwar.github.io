import { React } from 'preact'
import style from './style.css';
import { Container, Grid } from 'semantic-ui-react'
import Projects from './components/projects'

function Home() {
	return <div className={style.home}>
		<Container>
			<Grid class={style.padded}>
				<Grid.Row>
					<Grid.Column>
						<h2>About</h2>
						<p>Hi! I'm Taiwar and this is a home for my public coding projects.</p>
						<Projects />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>
	</div>
}

export default Home;
