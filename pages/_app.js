import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import localFont from 'next/font/local'
import { Provider } from 'react-redux'
import { Store } from '@/redux/Store'
import { GET } from '@/repository/FetchRepository'
import "@/styles/globals.css"
import Link from 'next/link'


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
    <>
    <Provider store={Store}>
      <div className={iranSansFont.className}>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
      </div> 
    </Provider>
    <div>
      <Link href={'/'}>back to home</Link>
    </div>
    </>
  )
}


