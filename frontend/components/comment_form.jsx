const React = require('react');

const CommentForm = React.createClass({
  getInitialState: function() {
    return {shown: "none"};
  },

  handleForm: function(event) {
    event.preventDefault();

  },

  handleComment: function(event) {
    event.preventDefault();
    let displayAtt;

    if(this.state.shown === "none") {
      displayAtt = "block";
    } else {
      displayAtt = "none";
    }
    this.setState({ shown: displayAtt });
    this.forceUpdate();
  },

  render: function() {
    return (
      <section>
        <div onClick={this.handleComment}>
          Comment
        </div>

        <form display={this.state.shown}
          onSubmit={this.handleForm}>
          <input type="textarea" display={this.state.shown}/>
        </form>
      </section>
    );
  }
});

module.exports = CommentForm;
