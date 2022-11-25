import React from 'react'
import { useForm } from '../../hooks/useForm'
import { MainContainer, Form, Input } from './styles'

function MainPage() {
  const [form, onChangeForm] = useForm({nome:"", modulos: "", tecnologias:"", responsavel:""})

  const handleClick = (event)=>{
    event.preventDefault()
    console.log(form)
  }
 
  return (
    <MainContainer>
      <h2>Cadastro de novo curso</h2>

      <Form onSubmit={handleClick}>
        <label for="nome">Nome do Curso:</label>
        <Input 
          id="nome"
          name='nome'
          value={form.nome}
          onChange={onChangeForm}
          required
        />

        <label for="modulos">Número de Módulos: </label>
        <Input 
          id="modulos"
          name='modulos'
          value={form.modulos}
          onChange={onChangeForm}
          type='number'
          pattern='[0-9]'
          min='2'
          title='O número de módulos não pode ser menor que 2'
          required
        />

        <label for="tecnologias">Tecnologias abordadas: </label>
        <Input 
          id="tecnologias"
          name='tecnologias'
          value={form.tecnologias}
          onChange={onChangeForm}
          required
        />
        
        <label for="responsavel">Responsável: </label>
        <Input 
          id="responsavel"
          name='responsavel'
          value={form.responsavel}
          onChange={onChangeForm}
          pattern='[A-Za-z0-9]{5,}'
          title='O nome do responsável deve ter ao menos 5 caracteres (letras e/ou números)'
          required
        />
      <button type="submit">Criar curso</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage