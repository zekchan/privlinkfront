import { h } from 'preact';

export default function ArrowIcon({ fill, className }) {
	return (
		<svg fill={fill} height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" className={className}>
			<path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
		</svg>
	);
}