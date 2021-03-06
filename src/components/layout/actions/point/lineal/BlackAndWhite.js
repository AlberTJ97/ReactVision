import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import LookUpTable from '../../../../../processor/operations/point/LookUpTable';
import BlackAndWhiteOperation from '../../../../../processor/operations/point/lineal/BlackAndWhite';
class BlackAndWhite extends Component {
  operationHasBeenApplied;

  applyOperation = () => {
    let {controller} = this.props;
    if (controller.isAnyImageSelected()) {
      if (!this.operationHasBeenApplied) {
        let image = controller.getSelectedImage();
        image.createNewState();
        image.setNextState();
        this.operationHasBeenApplied = true;
      }
      let blackAndWhite = new BlackAndWhiteOperation();
      let lut = new LookUpTable(blackAndWhite);
      controller.applyPointOperation(lut, 'brightness');
    }
  };

  render() {
    return(
      <div>
        <Button
            variant="fab"
            color="secondary"
            aria-label="Add"
            onClick={this.applyOperation}>
          <AddIcon />
        </Button>
      </div>
    );
  }
}

export default BlackAndWhite;