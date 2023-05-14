import Banner from 'components/Banner';
import styles from './Favoritos.module.css'
import Titulo from 'components/Titulo';
import Card from 'components/Card';

function Favoritos(){
return(

    <>
    <Banner imagem="favoritos"/>

    <Titulo>
    <h1>Meus Favoritos</h1>
</Titulo>
<section className={styles.container}>
    <Card id='1' titulo='gatao' capa='https://media.discordapp.net/attachments/943622331916488704/1106739101048250470/Fernando_Diaconu_ferni_an_1700_painting_of_a_sphynx_cay_eerie_d_605046ce-fe34-4413-9bce-95b977917aa6.png?width=323&height=429'/>

</section>
</>
)

}

export default Favoritos;