import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import localFont from 'next/font/local'
import { Provider } from 'react-redux'
import { Store, persistor } from '@/redux/Store'
import { GET } from '@/repository/FetchRepository'
import "@/styles/globals.css"
import Link from 'next/link'
import { PersistGate } from 'redux-persist/integration/react'



const iranSansFont=localFont(
{src:'../public/fonts/iransansx/IRANSansXRegular.ttf'},
{src:'../public/fonts/iransansx/IRANSansXBlack.ttf'},
{src:'../public/fonts/iransansx/IRANSansXBold.ttf'},
{src:'../public/fonts/iransansx/IRANSansXDemiBold.ttf'},
{src:'../public/fonts/iransansx/IRANSansXLight.ttf'},
{src:'../public/fonts/iransansx/IRANSansXMedium.ttf'},
{src:'../public/fonts/iransansx/IRANSansXThin.ttf'},
{src:'../public/fonts/iransansx/IRANSansXUltraLight.ttf'})
const BnazaninFont=localFont({src:'../public/fonts/Bnazanin/BNazanin.woff'})


export default function App({ Component, pageProps}) {
  
  return(
    <div  className={iranSansFont.className}>
    
    <Provider store={Store}>
      <PersistGate loading={<h1>...loading</h1>} persistor={persistor}>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
      </PersistGate>
    </Provider>
      <Link href={'/'}>back to home</Link>
    </div> 
  )
}


