import React, { useState } from 'react'

function RegisterUser() {
  const [emailRegister, setEmailRegister] = useState("")
  const [passwordRegister, setPassowrdRegister] = useState("")
  return (
    <div className='w-full max-w-md p-6 bg-white rounded-xl shadow-lg'>
      <form className='space-y-4 flex-col'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Criar Usuário</h2>
        <div>
          <div className="flex">

          <label htmlFor="email" className='block text-sm font-medium mb-1'>Email:</label>
          <input type="email" 
          value={emailRegister}
          onChange={(e) => setEmailRegister(e.target.value)}
          required
          className='border' 
          />
          <div className="flex">

          </div>
          <label htmlFor="senha" className='block text-sm font-medium mb-1'>Senha:</label>
          <input type="password" 
          value={passwordRegister}
          onChange={(e) => setPassowrdRegister(e.target.value)}
          required
          className='border' 
          />
          </div>
        </div>
      </form>
    </div>
  )
}

export default RegisterUser
