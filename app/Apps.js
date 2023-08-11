import Logo from 'Assets/images/logos/logo.png'
import Footer from 'Containers/Layout/Footer'
import kontakty from 'Assets/images/apps/kontakty.png'
import skillzhasapp from 'Assets/images/apps/skillzhasapp.png'
import jeted from 'Assets/images/apps/jeted.png'
import factcheck from 'Assets/images/apps/factcheck.png'
import dict from 'Assets/images/apps/dict.png'
import ecommero from 'Assets/images/apps/ecommero.png'
import kazfarm from 'Assets/images/apps/kazfarm.png'
import kokaprint from 'Assets/images/apps/kokaprint.png'
import forum from 'Assets/images/apps/forum.png'
import delivery from 'Assets/images/apps/delivery.png'
import taxi from 'Assets/images/apps/taxi.png'
import bloomzed from 'Assets/images/apps/bloomzed.png'
import presenter from 'Assets/images/apps/presenter.png'
import homester from 'Assets/images/apps/homester.png'
import opera from 'Assets/images/apps/opera.png'
import almaty from 'Assets/images/apps/almaty.png'
import beauty from 'Assets/images/apps/beauty.png'
import caspian from 'Assets/images/apps/caspian.png'
import investorda from 'Assets/images/apps/investorda.png'
import mediaschool from 'Assets/images/apps/mediaschool.png'
import offen from 'Assets/images/apps/offen.png'
import turanauto from 'Assets/images/apps/turanauto.png'
import ismet from 'Assets/images/apps/ismet.png'
import restoran from 'Assets/images/apps/restoran.png'

import AppCard from 'Components/AppCard'
import { useTranslation } from 'react-i18next'

const Apps = () => {
  const { t } = useTranslation()
  return (
    <div className='relative max-w-7xl mx-auto'>
      <div className='relative max-w-6xl mx-auto bg-gray-50 px-4 sm:px-6 lg:pt-2 '>
        <div className='relative '>
          <div className='px-2 pt-10 sm:p-10 lg:p-10'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center justify-center'>
                <a href='/' className=' '>
                  <img
                    className='h-10'
                    src={Logo}
                    alt='Xponend лого, разработка сайтов, приложений'
                  />
                  <span className='text-xl font-bold tracking-tight'>
                    {/* Xponend */}
                  </span>
                </a>
              </div>
              <a
                href='/'
                className='visible md:flex items-center justify-center'
              >
                <button className='px-2.5 py-1 lg:px-6 lg:py-3 rounded-3xl font-medium bg-gradient-to-b from-gray-900 to-black text-white outline-none focus:outline-none hover:shadow-md hover:from-true-gray-900 transition duration-200 ease-in-out'>
                  {t('apps.home')}
                </button>
              </a>
            </div>
          </div>
          <div className='text-center'>
            <h1 className='text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl'>
              {t('apps.title')}
            </h1>
            <p className='mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4'>
              {t('apps.description')}
            </p>
          </div>
          <div className='mt-12 mb-12 max-w-lg mx-auto grid gap-7 lg:grid-cols-3 lg:max-w-none'>
            <AppCard src={turanauto} link='https://apps.apple.com/kz/app/turan-auto/id6443944522' text={'Turan-Auto'} descript={t('Kolesa like app')} />
            <AppCard src={ismet} link='https://apps.apple.com/kz/app/ismet-kz/id1449003074' text={'Ismet.kz'} descript={t('Internet connect app')} />
            <AppCard src={restoran} link='https://apps.apple.com/kz/app/restoran-kz-booking/id1499596558' text={'Restoran.kz'} descript={'Yelp like app'} />
            <AppCard src={jeted} link='https://jeted.zhasapp.com' text={t('apps.jeted.link')} descript={t('apps.jeted.descript')} />
            <AppCard src={offen} link='https://offenegesellschaft.org/' text={t('apps.jeted.link')} descript={t('apps.offen.descript')} />
            {/* <AppCard src={bloomzed} link='https://bloomzed.vercel.app/' text={t('apps.bloomzed.link')} descript={t('apps.bloomzed.descript')} /> */}
            <AppCard src={opera} link='https://opera.ru' text={t('apps.opera.tech')} descript={t('apps.opera.descript')} />
            {/* <AppCard src={homester} link='https://homester.com' text={t('apps.homester.link')} descript={t('apps.homester.descript')} /> */}
            {/* <AppCard src={delivery} link='https://delivery.zhasapp.com' text={t('apps.delivery.link')} descript={t('apps.delivery.descript')} /> */}
            <AppCard src={dict} link='https://play.google.com/store/apps/details?id=com.zhasapp.nameorigins' text={t('apps.dict.tech')} descript={t('apps.dict.descript')} />
            <AppCard src={kontakty} link='https://play.google.com/store/apps/details?id=com.kontaktykz.zhasapp' text={t('apps.kontakty.tech')} descript={t('apps.kontakty.descript')} />
            <AppCard src={skillzhasapp} link='https://skill.zhasapp.com' text={t('apps.skillzhasapp.link')} descript={t('apps.skillzhasapp.descript')} />
            {/* <AppCard src={taxi} link='https://taxi.zhasapp.com' text={t('apps.taxi.link')} descript={t('apps.taxi.descript')} /> */}
            {/* <AppCard src={ecommero} link={t('apps.ecomero.tech')} text={t('apps.ecommero.link')} descript={t('apps.ecommer.descript')} /> */}
            <AppCard src={investorda} link='https://investorda.kz' text={t('apps.investorda.link')} descript={t('apps.investorda.descript')} />
            <AppCard src={almaty} link='https://almaty-akshamy.kz/' text={t('apps.almaty.link')} descript={t('apps.almaty.descript')} />
            <AppCard src={caspian} link='https://caspianlife.kz' text={t('apps.caspian.link')} descript={t('apps.caspian.descript')} />
            <AppCard src={mediaschool} link='https://mediaschool.kz' text={t('apps.mediaschool.link')} descript={t('apps.mediaschool.descript')} />
            <AppCard src={beauty} link='https://beautyindustry.kz' text={t('apps.beauty.link')} descript={t('apps.beauty.descript')} />
            <AppCard src={factcheck} link='https://factcheck.kz' text={t('apps.factcheck.link')} descript={t('apps.factcheck.descript')} />
            <AppCard src={kazfarm} link='https://kazfarm.kz' text={t('apps.kazfarm.link')} descript={t('apps.kazfarm.descript')} />
            <AppCard src={forum} link='https://natizheli.kz' text={t('apps.natizheli.link')} descript={t('apps.natizheli.descript')} />

          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Apps
