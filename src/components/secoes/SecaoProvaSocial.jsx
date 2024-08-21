import React from 'react'
import TituloSubtituloSecao from '../titulos/TituloSubtituloSecao'
import ProvaSocial from '../clientes/ProvaSocial'
import './secaoProvaSocial.css'

function SecaoProvaSocial (){

    const titulos = {titulo:"Para clientes exigentes: PELEJA!", subtitulo:"Venha conhecer alguns dos nossos produtos mais vendidos!"}

  return (
    <div>
    <div className='wave'>
    <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 L 0,150 C 116.66666666666663,130.53333333333333 233.33333333333326,111.06666666666668 405,110 C 576.6666666666667,108.93333333333332 803.3333333333335,126.26666666666668 985,136 C 1166.6666666666665,145.73333333333332 1303.3333333333333,147.86666666666667 1440,150 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#372b2b" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
      </div>
    <section className='secao-prova-social'>
      
        <TituloSubtituloSecao titulos={titulos}/>

        <ProvaSocial />
    </section>

    </div>
  )
}

export default SecaoProvaSocial