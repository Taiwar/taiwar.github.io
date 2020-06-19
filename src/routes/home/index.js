import { React } from 'preact'
import style from './style.css';
import { Container, Grid, List } from 'semantic-ui-react'
import { useEffect, useState } from 'preact/hooks'
import axios from 'axios';
import { Link } from 'preact-router'

function Home() {
	const url = "https://api.github.com/users/taiwar/repos";
	const [projects, setProjects] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios.get(url).then(res => {
			setProjects(res.data);
			setLoading(false);
		}).catch(err => {
			setError(err);
			setLoading(false);
		});
	}, []);


	const projectList = <List>
		{
			projects.map(project => {
				return <List.Item>
					<List.Icon name='folder' />
					<List.Content>
						<List.Header class={style.projectItem}>
							<a href={project.html_url}>{project.name}</a>
						</List.Header>
						<List.Description>{project.description}</List.Description>
					</List.Content>
				</List.Item>
			})
		}
	</List>;

	return <div className={style.home}>
		<Container>
			<Grid class={style.padded}>
				<Grid.Row>
					<Grid.Column>
						<h2>About</h2>
						<p>Hi! I'm Taiwar and this is a home for my public coding projects.</p>
						<h2>Projects</h2>
						{
							loading ?
								<p>loading...</p> : error == null ?
								projectList : <p>Couldn't reach GitHub api: {error}</p>
						}
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>
	</div>
}

export default Home;
