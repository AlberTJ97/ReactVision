import React from 'react';
import LoadImage from './LoadImageAction';
import SaveImage from './SaveImageAction';
/**
 * Action picker object determines
 * witch action to display in any moment.
 *
 * @type {{load_img: (function(*): *)}}
 */
let actionPicker = {
  load_img: controller => {return <LoadImage controller={controller}/>},
  save_img: controller => {return <SaveImage controller={controller}/>}
};

export default actionPicker;