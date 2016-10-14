var AmountBox = React.createClass({
  render: function() {
    return (
      <div className={this.props.color+" statistic"}>
        <div className="value">{amountFormat(this.props.amount)}</div>
        <div className="label">{this.props.text}</div>
      </div>
    );
  }
});
