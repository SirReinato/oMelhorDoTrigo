import './Banner.css'

const Banner = ()=>{
    return(
        <header className='banner'> 
            <img src={require("../../assets/Mural-menu.png")} alt="Banner do site"/>
        </header>
    )
}

export default Banner