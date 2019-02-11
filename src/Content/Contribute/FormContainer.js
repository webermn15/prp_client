import { connect } from 'react-redux';
import SubmitPrForm from './SubmitPrForm';

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