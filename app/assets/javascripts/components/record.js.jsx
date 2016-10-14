var Record = React.createClass({
   getInitialState: function() {
      return {
         edit: false
      };
   },

   handleToggle: function (e) {
      e.preventDefault();
      this.setState({ edit: !this.state.edit });
   },

   handleDelete: function (e) {
      e.preventDefault();
      $.ajax({
         method: 'DELETE',
         url: "/records/" + this.props.record.id,
         dataType: 'JSON',
         context: this,
         success: function () {
            this.props.handleDeleteRecord(this.props.record);
         }
      });
   },

   handleEdit: function (e) {
      e.preventDefault();
      var data = {
         title: this.refs.title.value,
         date: this.refs.date.value,
         amount: this.refs.amount.value,
      };
      $.ajax({
         method: 'PUT',
         url: '/records/' + this.props.record.id,
         dataType: 'JSON',
         data: { record: data },
         context: this,
         success: function (data) {
            this.setState({ edit: false });
            this.props.handleEditRecord(this.props.record, data);
         }
      });
   },

   recordRow: function () {
      return (
         <tr>
            <td>{this.props.record.date}</td>
            <td>{this.props.record.title}</td>
            <td>{amountFormat(this.props.record.amount)}</td>
            <td>
               <a className="ui button" onClick={this.handleToggle}>Edit</a>
               <a className="ui negative button" onClick={this.handleDelete}>Delete</a>
            </td>
         </tr>
      );
   },

   recordForm: function () {
      return (
         <tr>
            <td>
               <div className="ui input">
                  <input type="text" defaultValue={this.props.record.date} ref="date" />
               </div>
            </td>
            <td>
               <div className="ui input">
                  <input type="text" defaultValue={this.props.record.title} ref="title" />
               </div>
            </td>
            <td>
               <div className="ui input">
                  <input type="number" defaultValue={this.props.record.amount} ref="amount" />
               </div>
            </td>
            <td>
               <a className="ui button" onClick={this.handleEdit}>Update</a>
               <a className="ui negative button" onClick={this.handleToggle}>Cancel</a>
            </td>
         </tr>
      );
   },

   render: function () {
      if (this.state.edit) {
         return this.recordForm();
      } else {
         return this.recordRow();
      }
   }
});
