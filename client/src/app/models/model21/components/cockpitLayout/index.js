import { showSelection } from '../../../../../sketchfab_webpack_engine/utils/selection';
import { createLayoutButton } from '../../../../utils/component/cockpitLayout';
export default (parent, api) => {

    let CONSOLE_CENTER = createLayoutButton(api, 'central');        
    let CONSOLE_SIDE = createLayoutButton(api, 'side');

    parent.addSubElement(CONSOLE_CENTER);
    parent.addSubElement(CONSOLE_SIDE);
 
    showSelection(CONSOLE_CENTER);
};
