const React = require('react');
const ReactDOM = require('react-dom');

module.exports = (props) => {
	return <button name={props.name} className="play-toggle" onClick={props.onClick}>{props.label}</button>
}