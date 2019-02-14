import styled from 'styled-components';
import Select from 'react-select';

export const ReactSelect = styled(Select)`
	color: ${({theme}) => theme.palette.offblack};

	& div.form-select__control {
		border: 1px solid ${({theme}) => theme.palette.primary[0]};
	}
	& div.form-select__control--is-focused {
		box-shadow: 0 0 0 2px ${({theme}) => theme.palette.focused};
		outline: 2px solid ${({theme}) => theme.palette.focused};
		outline-offset: 1px;
	}
	& div.form-select__control--is-disabled {
		border: 1px solid ${({theme}) => theme.palette.grayscale[2]};
		background-color: ${({theme}) => theme.palette.grayscale[4]};
	}

	& div.form-select__menu {
		border: 1px solid ${({theme}) => theme.palette.primary[0]};
	}
`

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	padding: 0 1rem;
	margin: 0 1rem;
	background-color: ${({theme}) => theme.palette.primary[0]};
	border-radius: 0.3rem;
`

export const FormLabel = styled.label`
	padding: 0 0.2rem 0.2rem 0.2rem;
	font-size: 0.8rem;
`

export const FieldContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	background-color: ${({theme}) => theme.palette.primary[1]};
	color: ${({theme}) => theme.palette.offwhite};
	padding: 1rem 0;
	margin-top: 1rem;
	border-radius: 0.3rem;
`

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	font-size: 1rem;
	margin-left: 1rem;

	& select option {
		font-size: 1rem;
	}
`

export const StyledTextInput = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 0.3rem;
  border: 1px solid ${({theme}) => theme.palette.primary[0]};

  &:focus {
    box-shadow: 0 0 0 2px ${({theme}) => theme.palette.focused};
    outline: none;
  }
`

export const FieldTextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	flex-grow: 1;
	margin: 0 1rem;
`

export const WarningText = styled.div`
	text-align: center;
	color: ${({theme}) => theme.palette.focused};
	margin: 1rem 0;
	padding: 0.5rem;
`