 import React from 'react';
 import logo from './logo.svg';
 import './App.css';
 var createReactClass = require('create-react-class');
 const Mailbox = require( './Mailbox');
 const NoneSelected = require('./NoneSelected');
 const MailboxList = require('./MailboxList');

 var App = createReactClass({
   getInitialState: function(){
     return { mailbox_id: null };
   },

   handleSelectMailbox: function(id) {
     this.setState({ mailbox_id: id });
   },

   render: function() {
     var mailbox_id = this.state.mailbox_id;
     if (mailbox_id) {
       var mailbox = this.props.mailboxes.filter(function(mailbox) {
         return mailbox.id == mailbox_id;
       })[0];
       var selected_mailbox = <Mailbox key={mailbox.id}
                                   emails={mailbox.emails} />;
     } else {
       var selected_mailbox = <NoneSelected text="mailbox" />;
     }

     return (
       <div className="app row">
         <MailboxList mailboxes={this.props.mailboxes}
                      onSelectMailbox={this.handleSelectMailbox} />
         <div className="mailbox col-md-10">
           <div className="panel panel-default">
              <div className="panel-body">
              {selected_mailbox}
             </div>
           </div>
         </div>
       </div>
     );
   }
 });


 export default App;


