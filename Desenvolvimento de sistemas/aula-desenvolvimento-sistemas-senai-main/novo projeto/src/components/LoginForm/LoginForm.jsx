import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { toast } from 'react-toastify'
import axios from 'axios'

function LoginForm() {
    const [ email, setInputEmail] = useState('')
    const [ senha, setInputSenha] = useState('')
    // Contexto
    const { login } = useAuth()


    // Função de validação de login

    const handleLogin = async(e) => {
      e.preventDefault()

      try {
        const response = await axios.get('http://localhost:3000/users', {
        params:{ email, senha }
        }) 
        // console.log(response)

        if(response.data.length === 0) {
          console.log("Usuário não encontrado")
          toast.error('Usuário não encontrado. Verifique o email e senha', {
            autoClose: 3000,
            hideProgressBar: true
          }) 
          return
        }

        login(email)
        toast.success("Login realizado com sucesso!", {
          autoClose: 3000,
          hideProgressBar: true
        })
      } catch (e) {
        
      }

    }
  return (
    <div className='max-w-md mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg'>
      <h2 className='text-2xl font-bold text-center mb-6'>Login</h2>
      <form onSubmit={handleLogin} className='space-y-4'>
        <div>
            <label htmlFor="email" className='block text-sm font-medium mb-1'>Email:</label>
            <input 
            type="email"
            id='email' 
            value={email}
            onChange={(e) => setInputEmail(e.target.value)} 
            required 
            className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' />
            <label htmlFor="senha" className='block text-sm font-medium mb-1'>Senha:</label>
            <input 
            type="password"
            id='senha'
            value={senha}
            onChange={(e) => setInputSenha(e.target.value)}
            required
            minLength={8}
            className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' />
        </div>
        <button
        type='submit'
        className='w-full bg-cyan-700 text-white p-2 rounded-lg hover:bg-cyan-800 transition-colors'>
          Entrar
        </button>
        <div>
            
        </div>

      </form>
      <div className="flex justify-betweenmt-4 text-sm">
        <button>Esqueceu sua senha?</button>
        <button>Criar conta</button>
      </div>
    </div>
  )
}

export default LoginForm
