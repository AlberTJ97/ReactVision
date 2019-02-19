import React, { Component } from "react";
import './App.css';
import MainMenu from "./components/layout/menu/MainMenu";
import MenuData from "./data/menu";
import Info from "./components/layout/info/Info";
import Action from "./components/layout/actions/Action";
import ImageWorkspace from "./components/layout/image-workspace/ImageWorkspace"
import Footer from "./components/layout/footer/"
import Theme from "./components/theme"

import ImageController from './processor/controller/ImageController';

import Paper from '@material-ui/core/Paper';
import { MuiThemeProvider} from '@material-ui/core/styles';

import KeyHandler, { KEYDOWN } from 'react-key-handler';

class App extends Component {
  state = {
    controller: undefined,
    currentAction: undefined,
    onKeyPressed: undefined,
    keyAction: undefined
  };

  constructor(props) {
    super(props);
    this.state.controller = new ImageController(this.updateController, this.updateCurrentAction);
  }

  updateController = () => {
    this.setState({controller: this.state.controller});
  };

  updateCurrentAction = (action) => {
    this.setState({currentAction: action});
  };

  getCurrentActionName = () => {
    let actionName = "Action";
    const currentAction = this.state.currentAction;

    let name = MenuData.items.some(item => {
      let options = item.options;
      let array = options.filter(function(options){ return options.id == currentAction });
      actionName = array.length > 0 ? array[0].name : actionName;
    });

    return actionName;
  };

  updateKeyController = (key, action) => {
    this.setState({onKeyPressed: key, keyAction: action});
  };

  render() {
    const gridContainerClass = "grid-container";
    const gridItemClass = "grid-item";

    let currentActionName = this.getCurrentActionName();
    return (
      <MuiThemeProvider theme={Theme}>
        <div className={gridContainerClass + " App"}>
        <KeyHandler
            keyEventName={KEYDOWN}
            keyValue={this.state.onKeyPressed}
            onKeyHandle={this.state.keyAction}
          />
          <div className={gridItemClass + " item-menu"}>
            <MainMenu
                items={MenuData.items}
                updateAction={this.updateCurrentAction}/>
          </div>
          <div className={gridItemClass + " item-workspace"}>
            <ImageWorkspace
                controller={this.state.controller}
                keyController={this.updateKeyController}
                />
          </div>

          <div className={gridItemClass + " item-info"}>
            <Info
                theme={Theme}
                currentActionName={currentActionName}
                controller={this.state.controller}/>
          </div>
          <div className={gridItemClass + " item-action"}>
            <Action
                controller={this.state.controller}
                currentAction={this.state.currentAction}
                currentActionName={currentActionName}/>
          </div>
          <div style={{display: 'none' }} className={gridItemClass + " item-footer"}>
            <Footer />
          </div>

        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
