import { h, Component } from 'preact';
import Input from '../input';
import Select from '../select';
import s from './style.css';
import Wrapper from '../wrapper';

const OPTIONS = [
	10,
	30,
	60,
	120,
	200,
	500
].map(value => ({
	value,
	label: `${value} seconds`
}));

const BASE_URL = 'http://138.68.77.86';
export default class Form extends Component {
	state = {
		link: ''
	};
	handleSubmit = (e) => {
		e.preventDefault();
		fetch(`${BASE_URL}/create`, {
			method: 'POST',
			body: new FormData(this.form)
		})
			.then(response => response.json())
			.then(({ key }) => `${BASE_URL}/${key}`)
			.then(link => this.setState({ link }))
			.catch(() => this.setState({ link: '' }));
	};

	handleFormRef = (ref) => {
		this.form = ref;
	};

	render(props, { link, url, ttl }) {
		return (
			<Wrapper>
				<form onSubmit={this.handleSubmit} ref={this.handleFormRef} className={s.formWrapper} novalidate>
					<div className={s.firstRow}>
						<Input type="url" name="url" placeholder="Link address…" required />
						<div className={s.selectWrapper}>
							<Select options={OPTIONS} selected={OPTIONS[0]} />
						</div>
					</div>
					<button type="submit">Create</button>
				</form>
				{
					link ?
						<a href={link} target="_blank">{link}</a>
						: null
				}
			</Wrapper>
		);
	}
}