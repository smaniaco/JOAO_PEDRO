import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  display:flex;
  width:50vw;
  flex-direction:column;
  list-style:none;
  padding: 0;
  width: 500px;
`
const TarefaDiv = styled.div`

  display:flex;
  width:500px;
  justify-content: space-between;
  margin:0 auto;


`
const Tarefa = styled.div`
  word-wrap:break-word;
  border:solid 1px black;
  height:10vh;
  padding:5px;
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};

`
const TarefaC = styled.li`
  width:250px;
  
`
const TarefaP = styled.li`
  align-self:flex-end;
  width:250px;
  
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

const Delete = styled.button `
  padding:3px;
`

class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: '',
      filtro: '',
      concluida: [],
      pendente: [],
      listaFiltro : []
    }

  componentDidUpdate() {
    const listaLocal = this.state.tarefas
    localStorage.setItem("lista", JSON.stringify(listaLocal))
    
  };

  componentDidMount() {
    const listaString = localStorage.getItem("lista")
    const listaObjeto = JSON.parse(listaString)
    this.setState({tarefas: listaObjeto})
  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    
    const tarefa = {
      texto: this.state.inputValue,
      completa : false,
      id : Math.random(),
      editar: false,
    }
    this.setState({tarefas: [...this.state.tarefas, tarefa]})
    this.setState({inputValue: ""})
    
  }

  apagaTudo = () => {
    this.setState({tarefas:[]})
  }

  selectTarefa = (id) => {
    const novaLista = this.state.tarefas
    const listaF = novaLista.map((tar) =>{
      if (tar.id === id){
        if (tar.completa === true){
        return ({
          texto: tar.texto,
          completa : false,
          id : tar.id,
          editar: tar.editar,
          onEdit: tar.texto
        })

      }
      else {
        return ({
          texto: tar.texto,
          completa : true,
          id : tar.id,
          editar: tar.editar,
          onEdit: tar.texto
      })
    }}
      else {
        return  ({
          texto: tar.texto,
          completa : tar.completa,
          id : tar.id,
          editar: tar.editar,
          onEdit: tar.texto
        })
      }
    })
    this.setState({tarefas: listaF})
  }

  onChangeFilter = (event) => {
    this.setState({filtro:event.target.value})
  }

  onClickDelete = (id) =>{
    const lista = this.state.tarefas
    const listaFiltrada = lista.filter((tarefa)=>{
      if (id === tarefa.id){
        return false
      } else{
        return true
      }
    })
    this.setState({tarefas: listaFiltrada})
  }
  separaListas = ()=>{
    const lista = this.state.listaFiltro
    const listaCon = lista.filter((tarefa)=>{
      if (!tarefa.completa){
        return {
          texto: tarefa.texto,
          completa : tarefa.completa,
          id : tarefa.id,
          editar:tarefa.editar,
          onEdit: tarefa.texto
        }
      }
    }
    )
    this.state.concluida = listaCon
    const listaPen = lista.filter((tarefa)=>{
      if (tarefa.completa){
        return {
          texto: tarefa.texto,
          completa : tarefa.completa,
          id : tarefa.id,
          editar:tarefa.editar,
          onEdit: tarefa.texto
        }
      }
    }
    )
    this.state.pendente = listaPen
    
  }

  editarTarefa = (id) =>{
    const lista = this.state.tarefas
    const listaFiltrada = lista.map((tarefa)=>{
      if (id === tarefa.id){
        if (tarefa.editar === false){
        return {
          texto: tarefa.texto,
          completa : tarefa.completa,
          id : tarefa.id,
          editar:true,
          onEdit: tarefa.onEdit
        }
        }else{
          return {
            texto: tarefa.texto,
            completa : tarefa.completa,
            id : tarefa.id,
            editar:false,
            onEdit: tarefa.onEdit
          }
        }
      } else{
        return tarefa
      }
    })
    this.setState({tarefas: listaFiltrada})
  }
  onChangeEditar = (id, event)=>{
    const lista = this.state.tarefas
    const listaFiltrada = lista.map((tarefa)=>{
      if (id === tarefa.id){
        
        return {
          texto: event.target.value,
          completa : tarefa.completa,
          id : tarefa.id,
          editar:tarefa.editar,
          onEdit: event.target.value
        }
       
        
      } else{
        return tarefa
      }
    })
    this.setState({tarefas: listaFiltrada})
  }
  concluirEdicao = (id, event)=> {
    const lista = this.state.tarefas
    const listaFiltrada = lista.map((tarefa)=>{
      if (id === tarefa.id){
        if (tarefa.editar === false){
        return {
          texto: tarefa.texto,
          completa : tarefa.completa,
          id : tarefa.id,
          editar:true,
          onEdit: ""
        }
        }else{
          return {
            texto: tarefa.texto,
            completa : tarefa.completa,
            id : tarefa.id,
            editar:false,
            onEdit: tarefa.onEdit
          }
        }
      } else{
        return tarefa
      }
    })
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      console.log(tarefa.editar)
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })
    this.state.listaFiltro = listaFiltrada
    this.separaListas()
    
    
    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
          <button onClick={this.apagaTudo}>Exclui Tudo</button>

        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaDiv>
        <TarefaList>
          {this.state.concluida.map(tarefa => {
            return (<TarefaC>
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              > 
                {tarefa.texto}
              </Tarefa>
              <Delete onClick={() => this.onClickDelete(tarefa.id)}>X</Delete>
            
              {tarefa.editar ? <input onChange= {() => this.onChangeEditar(tarefa.id)}value={tarefa.onEdit}/>:""}
              {tarefa.editar ? <button onClick={() => this.onEdit(tarefa.id)}>concluir</button>:""}
              <button onClick= {() => this.editarTarefa(tarefa.id)}>editar</button>
              </TarefaC>
            )
          })}
        </TarefaList>
        <TarefaList>
        {this.state.pendente.map(tarefa => {
            return (<TarefaC>
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              > 
                {tarefa.texto}
              </Tarefa>
              <Delete onClick={() => this.onClickDelete(tarefa.id)}>X</Delete>
              
              {tarefa.editar ? <input value={tarefa.texto}/>:""}
              {tarefa.editar ? <button>concluir</button>:""}


              <button onClick= {() => this.editarTarefa(tarefa.id)}>editar</button>
              </TarefaC>
            )
          })}
          </TarefaList>
          </TarefaDiv>
      </div>
    )
  }
}

export default App
