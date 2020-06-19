import { React } from 'preact'

import { Container, Grid } from 'semantic-ui-react'
import style from './style.css';


export default function Privacy() {
	return (
		<div className={style.home}>
			<Container>
				<Grid class={style.padded}>
					<Grid.Row>
						<Grid.Column>
							<h2>Privacy</h2>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</div>
	);
}
