var RecordForm = React.createClass({
   getInitialState: function () {
       return {
           title: '',
           date: '',
           amount: ''
       };
   },

   handleChange: function (e) {
       var name = e.target.name;
       var result = {};
       result[name] = e.target.value;

       this.setState(result);
   },

   handleSubmit: function (e) {
       e.preventDefault();
       $.ajax({
           method: 'POST',
           url: '',
           data: { record: this.state },
           dataType: 'JSON',
           context: this,
           success: function (data) {
               this.props.handleNewRecord(data);
               this.setState(this.getInitialState());
           }
       });
   },

   valid: function () {
     return this.state.title && this.state.date && this.state.amount;
   },

   render: function () {
       return (
         <form className='ui form' onSubmit={this.handleSubmit} >
            <div className='fields'>
                <div className='field'>
                    <input
                        type="text"
                        placeholder="Date"
                        name="date"
                        value={this.state.date}
                        onChange={this.handleChange} />
                </div>
                <div className='field'>
                    <input
                        type="text"
                        placeholder="Title"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange} />
                </div>
                <div className='field'>
                    <input
                        type="number"
                        placeholder="Amount"
                        name="amount"
                        value={this.state.amount}
                        onChange={this.handleChange} />
                </div>
                <button className="ui positive button" type="submit" disabled={!this.valid()}>Create Record</button>
            </div>
         </form>
       );
   }
});
