import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import Clear from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Window extends Component {
  static windowCount = 0;

  state = {
    isClosed: false,
  };

  constructor(props){
    super(props);
    Window.windowCount++;
  }

  handleCloseEvent = (event) => {
    this.setState({isClosed: true});
  }
 /*
 <Paper className="grid-item">
   <div className="windows-bar">
     <div className="header" style={{ flex: 1, marginLeft: "24px" }}>
       {options.title}
     </div>
     <IconButton style={{padding: "1px"}}color="secondary" onClick={e => this.handleCloseEvent(e)}>
       <Clear />
     </IconButton>
   </div>
   <div className="windows-content">
   {options.children}
   </div>
 </Paper>
 */
  render() {
    const options = this.props;
    return(
      <Paper className="grid-item">
        <div className="windows-bar">
          <div className="header" style={{ flex: 1, marginLeft: "24px" }}>
            {options.title}
          </div>
        </div>
        <div className="windows-content">
        {options.children}
        </div>
      </Paper>
    )
  }
}

export default Window;
