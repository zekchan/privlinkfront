import {h, Component} from 'preact';
import linkstate from 'linkstate'

const OPTIONS = [
	1,
	5,
	10,
	30,
	60,
	120,
	200,
	500
];

const BASE_URL = 'http://138.68.77.86:8080';
export default class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			link: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleFormRef = this.handleFormRef.bind(this);
	}

	async handleSubmit(e) {
		e.preventDefault();
		fetch(`${BASE_URL}/create`, {
			method: 'POST',
			body: new FormData(this.form)
		})
			.then(response => response.json())
			.then(({key}) => `${BASE_URL}/${key}`)
			.then(link => this.setState({link}))
			.catch(() => this.setState({link: ''}));
	}

	handleFormRef(ref) {
		this.form = ref;
	}

	render(props, {link, url, ttl}) {
		return <div>
			<form onSubmit={this.handleSubmit} ref={this.handleFormRef}>
				<input type="url" name="url" onInput={linkstate(this, 'url')} value={url} required/>
				<select name="ttl" required value={ttl} onChange={linkstate(this, 'ttl')}>
					{OPTIONS.map(minutes => <option value={minutes * 60} key={minutes}>{minutes} minutes</option>)}
				</select>
				<button type="submit">Create</button>
			</form>
			{
				link ?
					<a href={link} target="_blank">{link}</a>
					: null
			}
		</div>;
	}
}