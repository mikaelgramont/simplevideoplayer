const React = require('react');
const ReactDOM = require('react-dom');

module.exports = (props) => {
	let progressRatio = (+props.duration) ? props.currentTime / props.duration : 0;

	return (
		<div className="progress-wrapper">
			<div className="progress-bar" style={{transform: `scale(${progressRatio}, 1.0)`}}></div>
		</div>
	);
}