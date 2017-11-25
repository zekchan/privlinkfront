import { h } from 'preact';
import s from './style.css';

export default function Input({ error, ...restProps }) {
	return (
		<div className={s.wrapper}>
			<input {...restProps} className={s.input} />
			<span className={s.error}>Link doesn’t exist</span>
		</div>
	);
}