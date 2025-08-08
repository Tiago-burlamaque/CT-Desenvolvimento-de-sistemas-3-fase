import styles from './Body.module.css'

function Body() {
    const usuarios = [
        {
            nome: "Tiago",
            idade: "16",
            cidade: "São Paulo"
        },
        {
            nome: "Júlia",
            idade: "27",
            cidade: "São Paulo"
        },
        {
            nome: "Elionai",
            idade: "18",
            cidade: "Rio de Janeiro"
        },

    ]

  return (
   <main className={styles.body}>
        <h2>Usuários cadastros:</h2>
        <div className={styles.cardContainer}>

        </div>
   </main>
  )
}

export default Body
