import React from 'react'
import TituloSubtituloSecao from '../titulos/TituloSubtituloSecao'
import ProvaSocial from '../clientes/ProvaSocial'

function SecaoProvaSocial (){

    const titulos = {titulo:"Para clientes exigentes: PELEJA!", subtitulo:"Venha conhecer alguns dos nossos produtos mais vendidos!"}

  return (
    <section>
        <TituloSubtituloSecao titulos={titulos}/>

        <ProvaSocial />
    </section>
  )
}

export default SecaoProvaSocial