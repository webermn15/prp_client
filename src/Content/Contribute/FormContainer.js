import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { FormMaster } from './Form';

const mapStateToProps = state => {
	const { gamesInfo } = state;
	return {
		gamesInfo
	}
}

const FormContainer = withRouter(connect(
	mapStateToProps
)(FormMaster))

export default FormContainer;