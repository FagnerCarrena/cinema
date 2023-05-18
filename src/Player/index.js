import Banner from 'components/Banner';
import styles from './Player.module.css';
import Titulo from 'components/Titulo';
import { useParams } from 'react-router-dom';
import NaoEncontrada from 'Pages/NaoEncontrada';
import { useEffect, useState } from 'react';

function Player(){
    const [videos, setVideos] = useState();

    const parametros = useParams();

   useEffect(()=>{
    fetch(`https://my-json-server.typicode.com/fagnercarrena/cinema/videos?id=${parametros.id}`)
    .then(resposta=> resposta.json())
    .then(dados=>{
        setVideos(...dados)
    })
},[])
   

    if(!videos){
return <NaoEncontrada/>
    }

return (
    <>
    <Banner imagem='player'/>
    <Titulo>
        <h1>Player</h1>
    </Titulo>
    <section className={styles.container}>
    <iframe width="100%" 
    height="100%" 
    src={videos.link} 
    title={videos.titulo}
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </section>
    </>
)
}

export default  Player