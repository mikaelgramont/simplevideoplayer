describe('SimpleVideoPlayer', () => {
	const TestUtils = require('react-dom/test-utils');
	const React = require('react');
	const SimpleVideoPlayer = require('../source/simplevideoplayer.jsx');

	it('has a video element', (done) => {
		let player = TestUtils.renderIntoDocument(
			<SimpleVideoPlayer src="https://s3-eu-west-1.amazonaws.com/onrewind-test-bucket/big_buck_bunny.mp4" />
		);

		expect(TestUtils.scryRenderedDOMComponentsWithTag(player, 'video').length).toBe(1);
		done();
	});
});