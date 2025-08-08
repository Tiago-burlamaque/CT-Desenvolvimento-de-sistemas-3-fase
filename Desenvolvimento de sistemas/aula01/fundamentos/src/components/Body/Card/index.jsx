

function Card({nome,idade,cidade}) {
  return (
    <div className={styles.card}>
       <h3> {nome} </h3>
       <p>idade: {idade} </p>
       <p>cidade: {cidade} </p> 
    </div>
  )
}

export default Card
