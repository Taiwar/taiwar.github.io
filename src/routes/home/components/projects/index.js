import { React } from 'preact'
import style from './style.css';
import { List } from 'semantic-ui-react'
import { useEffect, useState } from 'preact/hooks'
import axios from 'axios';
import { acceptedWords, lex } from './lexer'

function Project() {
    const url = "https://api.github.com/users/taiwar/repos";
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [cmd, setCmd] = useState("");
    const [result, setResult] = useState("");

    const autocomplete = (e) => {
        setCmd(e.target.value);
      return "";
    };

    const handleCommand = (text) => {
        const tokens = lex(text);
        tokens.forEach(t => console.log(t));
        const operation = tokens[0];
        let opResult;
        if (operation.type === 'WORD') {
            switch (operation.data) {
                case 'help':
                    opResult = `Available commands:\n${Object.values(acceptedWords).map(aw => aw.description).join('\n')}`
                    break;
                case 'ls':
                case 'dir':
                    opResult = projects.map(p => p.name).join('\n');
                    break;
                case 'clear':
                    opResult = '';
                    break;
                default:
                    opResult = 'Unknown command';
            }
        } else {
            opResult = 'Invalid command';
        }
        setResult(opResult);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setCmd("");
            handleCommand(cmd);
        }
    };

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

    return <div>
        <h2>Projects</h2>
        <div class={style.cmdWindow}>
            <p hidden={result.length === 0}>{result}</p>
            <input class={style.cmdInput} value={cmd} defaultValue={""} onKeyDown={handleKeyDown} onChange={autocomplete} />
        </div>
        {
            loading ?
                <p>loading...</p> : error == null ?
                projectList : <p>Couldn't reach GitHub api: {error}</p>
        }
    </div>
}

export default Project;
