import { connect } from 'react-redux';

import {
  decreaseCounter,
  increaseCounter,
  resetCounter,
} from '../../actions/counter';

const mapDispatchToProps = (dispatch) => ({
  decreaseCounter: () => dispatch(decreaseCounter()),
  increaseCounter: () => dispatch(increaseCounter()),
  resetCounter: () => dispatch(resetCounter()),
});

export default connect(null, mapDispatchToProps);
