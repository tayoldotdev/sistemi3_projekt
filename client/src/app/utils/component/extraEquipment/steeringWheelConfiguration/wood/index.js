import { hideElement, showElement } from '../../../../../../sketchfab_webpack_engine/dictionary/model';
import { clearSelection } from '../../../../../../sketchfab_webpack_engine/utils/selection';
import { setSteeringWheelType } from '../../../../../config/setters/extraEquipment';
import { getRegexForConsoleSteeringWheel } from '../../../../../regexLib/steeringWheel';

export let addSteeringWheelWood = async (api) => {
    
    
    hideElement(getRegexForConsoleSteeringWheel(api), api);
    setSteeringWheelType('wooden', api);
    showElement(getRegexForConsoleSteeringWheel(api), api);
    clearSelection('extra-steeringwheel-rubber');
};
