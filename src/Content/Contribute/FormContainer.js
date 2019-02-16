import { connect } from 'react-redux';
import { SubmitPrForm } from './Form';

const mapStateToProps = state => {
	const { gamesInfo } = state;
	return {
		gamesInfo
	}
}

const FormContainer = connect(
	mapStateToProps
)(SubmitPrForm)

export default FormContainer;