import { h, Component } from 'preact';
import Form from './form';
import Wrapper from './wrapper';

export default class App extends Component {
	render() {
		return (
			<Wrapper>
				<Form />
			</Wrapper>
		);
	}
}
