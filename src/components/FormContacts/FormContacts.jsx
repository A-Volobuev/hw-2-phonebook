import React, { Component } from 'react';
import {Box} from '../../contents/Box'
import {FormField, FormItem, FormBtn, FormTitle, FormInput} from '../FormContacts/FormContacts.styled'

class FormContacts extends Component {
	state = {  
		name: '',
		number: ''
	}

	inputNameChange = e => {
		const value = e.currentTarget.value;
		if (value.length <= 30 && /^[a-zA-Zа-яА-Я]*$/.test(value)) {
      this.setState({ name: value });
    }
	}

	inputNumberChange = e => {
		const value = e.currentTarget.value;
		console.log(value)

		if (value.length <= 7 && /^\d*$/.test(value)) {
      this.setState({ number: value });
    }
	}

	contactsSubmit = e => {
		const {name, number} = this.state;
		e.preventDefault();
		
		console.log(name)
		console.log(number)

		this.props.onSubmit(name, number);
		this.setState({name: '', number: ''});
	}

	render() { 
		return (
			<Box
			border="2px solid #003B46"
			borderRadius="5px"
			width="350px"
			display="flex"
			flexDirection="column"
			alignItems="center"
			bg="#C4DFE6"
			p="40px 0px"
			height="170px"
			>
				<FormTitle>Phonebook</FormTitle>

				<FormField onSubmit={this.contactsSubmit}>

					<FormItem>
						Name
						<FormInput
						type="text"
						name="name"
						placeholder="Name"
						pattern="[a-zA-Zа-яА-Я]{5,20}"
						title="Содержит только буквы, минимум 5"
						maxLength="30"
						required
						value={this.state.name}
						onChange={this.inputNameChange}
						/>
					</FormItem>

					<FormItem>
						Phone number
						<FormInput
						type="tel"
						placeholder="Phone number"
						name="number"
						pattern="\d{7,7}"
						title="Номер телефона состоит из 7 цифр"
						maxLength="7"
						required
						value={this.state.number}
						onChange={this.inputNumberChange}
						/>
					</FormItem>

									<FormBtn type="submit">Add contacts</FormBtn>
				</FormField>
			</Box>
		);
	}
}
 
export default FormContacts;