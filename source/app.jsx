const React = require('react');
const ReactDOM = require('react-dom');

const SimpleVideoPlayer = require('./simplevideoplayer.jsx');

ReactDOM.render(
	<SimpleVideoPlayer muted loop={false} src="https://s3-eu-west-1.amazonaws.com/onrewind-test-bucket/big_buck_bunny.mp4" />,
	document.getElementById('app')
);