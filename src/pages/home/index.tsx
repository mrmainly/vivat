import React from 'react'

import { MyContainer, GoodsCard } from '../../components'

const Home = () => {
    return (
        <MyContainer wrapper={false}>
            <GoodsCard description='Крем детский для ежедневного ухода за атопичной кож' img="/img/151985591896.jpg" id={1} price="1723" specialText='Специальное предложение; можно сэкономить' specialPrice={1982} />
        </MyContainer>
    )
}

export default Home