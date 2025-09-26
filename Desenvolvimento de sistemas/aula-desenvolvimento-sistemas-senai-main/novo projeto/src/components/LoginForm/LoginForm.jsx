import React, { useState } from 'react'

function LoginForm() {
    const [ inputEmail, setInputEmail] = useState('')
    const [ inputSenha, setInputSenha] = useState('')
  return (
    <div className='max-w-md mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg'>
      <h2 className='text-2xl font-bold text-center mb-6'>Login</h2>
      <form className='space-y-4'>
        <div>
            <label htmlFor="email" className='block text-sm font-medium mb-1'>Email:</label>
            <input 
            type="email"
            id='email' 
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)} 
            required 
            className='w-full p-2 border rounded-b-lg focus:outline-none focus:ring-2 focus:ring-blue-500' />
            <label htmlFor="senha" className='block text-sm font-medium mb-1'>Senha:</label>
            <input 
            type="password"
            id='senha'
            value={inputSenha}
            onChange={(e) => setInputSenha(e.target.value)}
            className='w-full p-2 border rounded-b-lg focus:outline-none focus:ring-2 focus:ring-blue-500' />
        </div>

        <div>
            
        </div>

      </form>
    </div>
  )
}

export default LoginForm
