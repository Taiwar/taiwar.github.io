import { React } from 'preact'
import style from './style.css';
import { Grid, Header, List } from 'semantic-ui-react'
import { Link } from 'preact-router'


const TemporusHeader = () => (
    <div class={style.header}>
        <Grid class={style.padded}>
            <Grid.Row>
                <Grid.Column>
                    <Header as="h1" class={style.gradientHeader}><span class={style.path}>Taiwar</span></Header>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={12}>
                    <List horizontal link>
                        <List.Item as={Link}  href="/" class={style.headerItem}>
                            Home
                        </List.Item>
                        <List.Item as={Link}  href="/privacy" class={style.headerItem}>
                            Privacy
                        </List.Item>
                    </List>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
);

export default TemporusHeader;
