import { Link } from "react-router-dom"
import styles from './Cabecalho.module.css'
import CabecalhoLink from "components/CabecalhoLink"
import logo from './Logo-cinetag-branco 1.png'

function Cabecalho(){
return(
    <header className={styles.cabecalho}>
        <Link to='/'>
            <img src={logo} alt="logo"></img>

        </Link>

        <nav>
<CabecalhoLink url='./'>
Home
</CabecalhoLink>
<CabecalhoLink url='./Favoritos'>
Favoritos
</CabecalhoLink>

        </nav>


    </header>
)


}

export default Cabecalho