const React = require('react');
const Slider = require('react-rangeslider');

const ProgressBar = React.createClass({
  getInitialState: function() {
    return { progress: 0 };
  },

  handleChange(value) {
    // this.setState({ progress: this.props.value });
  },

  componentDidMount: function() {
    this.prog = document.getElementsByClassName("rangeslider__fill")[0];
    // debugger;
  },

  componentWillReceiveProps: function() {
    this.setState({ progress: this.props.value })
  },

  handleClick: function(e) {
    // e.preventDefault();
    // const xCoord = e.pageX - e.target.offsetLeft;
    // const lengthIntoSong = (xCoord / e.target.offsetWidth) * 100
    // debugger;
  },

  // render: function() {
  //   return(
  //       <Slider
  //         min={0}
  //         max={100}
  //         orientation="horizontal"
  //         value={this.state.progress}
  //       />
  //   );
  // }

  // onClick={this.handleClick}
  render: function() {
    return (
        <progress className="rangeslider__fill"
          value={this.state.progress}
          />
      );
  }
});

module.exports = ProgressBar;
