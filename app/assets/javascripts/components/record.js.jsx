var Record = React.createClass({
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

   render: function () {
        return (
           <tr>
             <td>{this.props.record.date}</td>
             <td>{this.props.record.title}</td>
             <td>{amountFormat(this.props.record.amount)}</td>
             <td>
               <a className="ui negative button" onClick={this.handleDelete}>Delete</a>
             </td>
           </tr>
        );

   }
});
