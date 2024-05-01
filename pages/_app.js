import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import localFont from 'next/font/local'


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


export default function App({ Component, pageProps }) {
  
  return(
    <>
      <div className={iranSansFont.className}>
      <Header/>
      </div>
      
      <Component {...pageProps} />
      <div className={BnazaninFont.className}>
      <Footer/>
      </div>
      
    </>
  )
}
