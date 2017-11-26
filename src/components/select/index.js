import { h, Component } from 'preact';
import ArrowIcon from './ArrowIcon';
import cn from 'classnames';
import s from './style.css';

export default class Select extends Component {
	state = {
		open: false
	};
	handleToogle = () => {
		this.setState({
			open: !this.state.open
		});
	};
	handleSelect = e => {

	};

	render({ options, selected }) {
		return (
			<div class={s.wrapper}>
				<div
					className={cn(s.select, {
						[s.selectOpened]: this.state.open
					})}
					onClick={this.handleToogle}
				>
					{selected.label}
					<ArrowIcon fill="#8cb0fb" className={s.icon}/>
				</div>
				<div
					className={cn(s.options, {
						[s.optionsOpened]: this.state.open
					})}
					onClick={this.handleSelect}
				>
					{options.map((option) => (
						<div className={s.option} value={option.value} key={option.value}>{option.label}</div>
					))}
				</div>
			</div>
		);
	}
}