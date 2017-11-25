import { h } from 'preact';
import s from './style.css';

export default function Wrapper({ children }) {
	return (
		<div className={s.wrapper}>
			{children}
		</div>
	);
}