function Online(props){
    const isOnline = props.online
    const atividade = isOnline ? 'O usuário está online.' : 'O usuário está offline.'

    return <h1>{atividade}</h1>
}

export default Online