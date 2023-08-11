import React from 'react'

import Layout from 'Containers/Layout'
import { Helmet } from 'react-helmet'
import Price from 'Containers/Price'
import PriceNew from 'Containers/PriceNew'
import Clones from 'Components/Clones/Clones'
import Features from 'Containers/Features'
import Recents from 'Containers/Recents'
import Team from 'Containers/Team'
import Call from 'Components/Call'
import Treadmill from 'Components/Treadmill'
import InfiniteScroll from 'Containers/InfiniteScroll'
import CountStats from 'Containers/CountUp'
import Journey from 'Containers/Journey'
import Slideout from 'Containers/Slideout'
import Map from './Map'
// {import Calendar from '.Calendar'}
import Differentation from 'Containers/Differentation'
import Technology from 'Containers/Technology'
import Bubbles from 'Containers/Bubbles'
import Tabs from 'Containers/Tabs'
import Splitter from 'Containers/Splitter'
import MovingBlock from 'Containers/MovingBlock'

import MultiForm from 'Containers/formComponents/Form';
import Device from 'Containers/Device'

export default function Home() {
  return (
    <Layout useSuspense={false}>
      <Helmet>
        <meta
          name='keywords'
          content='мобильное приложение, разработка мобильных приложений, 
          веб-мобильное приложение, мобильное приложение алматы, создание сайтов, 
          мобильное приложение цена, google play, appstore публикация, мобильная разработка, 
          React native алматы, андроид алматы, сколько стоит приложение, программист приложение,
          платформа алматы, онлайн курсы алматы, разработчик алматы, Казахстан, web-mobile apps,
          Разработка мобильных приложений, Разработка мобильных приложений Алматы, 
          Разработка мобильных приложений в Алматы, Создание мобильных приложений, 
          Создание мобильных приложений Алматы, Создание мобильных приложений в Алматы, 
          Разработка приложений, Разработка приложений Алматы, Разработка приложений в Алматы, 
          Разработка мобильного приложения, Разработка мобильного приложения Алматы, 
          Разработка мобильного приложения в Алматы, Разработка приложений для IOS, 
          сайт алматы, создание сайтов в алматы, сайт цена, сайт за день,
          Разработка приложений для IOS Алматы, Разработка приложений для IOS в Алматы, 
          Разработка мобильных приложений для IOS, 
          Разработка мобильных приложений для IOS Алматы, 
          Разработка мобильных приложений для IOS в Алматы, Создание приложений для Андроид, 
          Создание приложений для Андроид Алматы, Создание приложений для Андроид в Алматы, 
          Создание мобильных приложений для Андроид, Создание мобильных приложений для Андроид Алматы, 
          Создание мобильных приложений для Андроид в Алматы'
        />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1'
        />
        <meta
          name='google-site-verification'
          content='FPGv0Pr_2amLtfv5T-z3rOrLImRBBogj9obwuYYeZUk'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />

        <meta name='apple-mobile-web-app-capable' content='yes' />
        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-5RNR28NBFR'
        ></script>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1'
        />
        {/* <link rel='canonical' href='https://xponend.com' /> */}
      </Helmet>
      <Tabs />
      <Clones />

      <Recents />
      <Differentation />
      {/* <Treadmill /> */}
      <Call />

      <Features />
      <Bubbles />

      <Team />
      <Journey />
      <Slideout />
      <div className=' flex relative mt-6 px-15 mx-auto max-w-4xl xl:px-50 justify-center ml- mb-4 max-w-lg overflow-hidden rounded-lg rounded-md rounded-sm'>
        <Splitter />
      </div>
      {/* <PriceNew /> */}
      {/* <MultiForm /> */}
      <Price />
      {/* <Map /> */}
      {/* <Device /> */}
    </Layout>
  )
}
