var Records = React.createClass({
  getInitialState: function() {
    return { records: this.props.data };
  },

  getDefaultProps: function () {
    return { records: [] };
  },

  addRecord: function (record) {
    var records = React.addons.update(this.state.records, { $push: [record] });
    this.setState({records: records});
  },

  deleteRecord: function (record) {
    var index = this.state.records.indexOf(record);
    var records = React.addons.update(this.state.records, { $splice: [[index, 1]] });
    this.replaceState({ records: records });
  },

  credits: function () {
    var credits = this.state.records.filter(function (val) {
      return val.amount >= 0;
    });

    return credits.reduce(function (prev, curr) {
      return prev + parseInt(curr.amount);
    }, 0);
  },

  debits: function () {
    var credits = this.state.records.filter(function (val) {
      return val.amount < 0;
    });

    return credits.reduce(function (prev, curr) {
      return prev + parseInt(curr.amount);
    }, 0);
  },

  balance: function () {
    return this.credits() + this.debits();
  },

  render: function() {
    var that = this;
    var rows = [];

    this.state.records.forEach(function (record) {
      rows.push(<Record key={record.id} record={record} handleDeleteRecord={that.deleteRecord} />)
    });

    return(
      <div className="records">
        <h2 className="title"> Records </h2>
        <div className="ui statistics">
          <AmountBox color="green" amount={this.credits()} text="Credit" />
          <AmountBox color="red" amount={this.debits()} text="Debit" />
          <AmountBox color="blue" amount={this.balance()} text="Balance" />
        </div>
        <RecordForm handleNewRecord={this.addRecord} />
        <div className="ui divider"></div>
        <table className="ui celled striped table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
});
