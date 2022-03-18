
function Main(){
    return(
    <div className='main'>
        <div className='center'>
            <div className='menu'>
                <div className='logo'>
                    <h3>Discovery.Poke</h3>
                </div>
                <div className='item-menu'>
                    <a href='#'>Login</a>
                </div>
            </div>
            <div className='form'>
                <h2>PokeDNA</h2>
                <form>
                    <div className='items-form'>
                        <input placeholder='Nome' type='text' />
                        <input placeholder='Tipo' type='text' />
                        <input placeholder='Genero' type='text' />
                        <input placeholder='Level' type='text' />
                        <input type='submit' />
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Main;