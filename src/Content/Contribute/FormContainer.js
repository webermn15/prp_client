import { connect } from 'react-redux';
import { FormMaster } from './Form';

const mapStateToProps = state => {
	const { gamesInfo } = state;
	return {
		gamesInfo
	}
}

const FormContainer = connect(
	mapStateToProps
)(FormMaster)

export default FormContainer;