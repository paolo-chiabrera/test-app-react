import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  counterValue: state.counter.value,
});

export default connect(mapStateToProps);
