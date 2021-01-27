import React from 'react'
import HeaderLives from '../../components/header_page_lives/'
import BodyPage from '../../components/header_page_lives/'
import Logo from '../../assets/img/[LOGO].png'
import { lives } from '../../helper/lives'

const PageLives = () => {
    return (
        <div>
            <HeaderLives logo={Logo} title="NÃO PERCA NENHUMA LIVE" subtitle="Confira tudo o que está rolando na semana que vai mudar o seu futuro" />
            {/* <BodyPage lives={lives} /> */}
        </div>
    )
}

export default PageLives

