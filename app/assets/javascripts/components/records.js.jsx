var Records = React.createClass({
  getInitialState: function() {
    return { records: this.props.data };
  },
  
  getDefaultProps: function () {
    return { records: [] }
  },
  
  render: function() {
    var rows = [];
    
    this.state.records.forEach(function (record) {
      rows.push(<Record key={record.id} record={record} />)
    });
    
    return(
      <div className="records">
        <h2 className="title"> Records </h2>
        <table className="ui celled striped table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Amount</th>
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