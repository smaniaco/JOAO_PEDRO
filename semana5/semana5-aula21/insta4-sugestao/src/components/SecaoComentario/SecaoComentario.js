import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
		valorInputComentario: ''
	}

	// Importante que essa função seja uma arrow function
  // Estava errado nos arquivos iniciais dados
	onChangeComentario = (event) => {
	  console.log(event.target.value)
    this.setState({valorInputComentario: event.target.value})
	}
	onTrigger = (event) => {
        this.props.aoEnviar(this.state.valorInputComentario);
        event.preventDefault();
    }

	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.valorInputComentario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.onTrigger}>Enviar</button>
		</div>
	}
}