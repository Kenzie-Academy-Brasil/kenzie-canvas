import React from 'react'
import HeaderLives from '../../components/header_page_lives/'
import VideoSection from '../../components/body_page_lives/'
import Logo from '../../assets/img/[LOGO].png'


const PageLives = () => {



    return (
        <>
            <div>
                <HeaderLives logo={Logo} title="NÃO PERCA NENHUMA LIVE" subtitle="Confira tudo o que está rolando na semana que vai mudar o seu futuro" />


                <VideoSection title="Lives com Daniel" date1="26/01" title1="Descubra sua grande oportunidade de carreira para 2021" urlVideo1="https://www.youtube.com/embed/6HXeByLjrPs" date2="27/01" title2="Segredos para você ter sucesso na programação" urlVideo2="https://www.youtube.com/embed/6HXeByLjrPs" date3="28/01" title3="A jornada COMPLETA para você entrar na carreira do futuro, ser disputado pelas empresas e ganhar 5x mais." urlVideo3="https://www.youtube.com/embed/6HXeByLjrPs" date4="29/01" title4="10 Passos para ter um perfil atraente no Linkedin." urlVideo4="https://www.youtube.com/embed/6HXeByLjrPs" bonus="Live Bônus" />


            </div>

        </>
    )
}

export default PageLives

