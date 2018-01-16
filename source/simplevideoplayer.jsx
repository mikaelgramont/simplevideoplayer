const React = require('react');
const ReactDOM = require('react-dom');

const ToggleButton = require('./togglebutton.jsx');
const ProgressBar = require('./progressbar.jsx');

class SimpleVideoPlayer extends React.Component
{
	constructor(props) {
		super(props);

		// Reference to the actual video element.
		this.videoEl = null;

		// Initial state.
		this.state = {
			playing: false,
			duration: 0,
			currentTime: 0,
		}

		// Event handler binding.
		this.onToggleClick = this.onToggleClick.bind(this);
		this.onVideoLoadedMetadata = this.onVideoLoadedMetadata.bind(this);
		this.onVideoTimeUpdate = this.onVideoTimeUpdate.bind(this);
	}

	onToggleClick() {
		this.setState({playing: !this.state.playing});
	}

	onVideoLoadedMetadata() {
		this.setState({duration: this.videoEl.duration});
	}

	onVideoTimeUpdate(e) {
		this.setState({currentTime: this.videoEl.currentTime});
	}

	componentDidUpdate() {
		if (this.state.playing) {
			this.videoEl.play();
		} else {
			this.videoEl.pause();
		}
	}

	render() {
		return (
			<div className="container">
				<div className="video-wrapper">
					<video
						className="player"
						controls={false}
						loop={this.props.loop}
						muted={this.props.muted} // Plus possible de subir la bande son!
						src={this.props.src}
						ref={(el) => {this.videoEl = el}}
						onLoadedMetadata={this.onVideoLoadedMetadata}
						onTimeUpdate={this.onVideoTimeUpdate}>
					</video>
					<ProgressBar duration={this.state.duration} currentTime={this.state.currentTime} />
				</div>
				<ToggleButton name="play-toggle" label={this.state.playing ? "Pause" : "Play"} onClick={this.onToggleClick}/>
			</div>
		);
	}
}

module.exports = SimpleVideoPlayer;