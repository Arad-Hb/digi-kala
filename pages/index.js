import DigiIcons from "@/components/MainPage/DigiIcons";
import MainSlider from "@/components/MainPage/MainSlider";
import IncredibleOffer from "@/components/MainPage/Products/IncredibleOffer";
import { GET } from "@/repository/FetchRepository";
import styles from "@/styles/Home.module.css"
import { useDispatch } from "react-redux";
import {setImagesData} from '@/redux/features/slices/StaticImagesSlice'
import SmallBanner from "@/components/MainPage/advertises/SmallBanner";
import LargeBanner from "@/components/MainPage/advertises/LargeBanner";
import SingleBanner from "@/components/MainPage/advertises/SingleBanner";
import MegaMenuItems from "@/components/MainPage/MegaMenuItems";
import FooterResponsiveContent from "@/components/responsives/FooterResponsiveContent";



export default function Home(props) {
  
  const dispatch=useDispatch()
  dispatch(setImagesData(props.topBannerImage))
  
  return (
    <div className={`${styles.Home}`}>
      <div className={`${styles.mainSlider}`}><MainSlider data={props.SliderImages}/></div>
      <div className={`${styles.digiIcons}`}><DigiIcons data={props.digiIcons}/></div>
      <div className={`${styles.advertiseSingleBanner}`}><SingleBanner/></div>
      <div className={`${styles.megaMenuItems}`}><MegaMenuItems/></div>
      <div className={`${styles.advertiseSmallBanner}`}><SmallBanner/></div>
      <div className={`${styles.incredibleOffer}`}><IncredibleOffer data={props.incOfferProducts}/></div>
      <div className={`${styles.advertiseLargeBanner}`}><LargeBanner/></div>
      <div className={`${styles.footerResponsive}`}><FooterResponsiveContent/></div>
    </div>
  );
}
export async function getStaticProps(context){
 
  const topBannerResponse=await GET('topBanner')
  const topBannerResult=await topBannerResponse.json()

  const mainSliderResponse=await GET('public/mainSlider')
  const mainSliderResult=await mainSliderResponse.json()

  const digiIconsResponse=await GET('SevenIcons')
  const digiIconsResult=await digiIconsResponse.json()

  const incOfferResponse=await GET('products/incredibleOffers')
  const incOfferResult=await incOfferResponse.json()

  if(mainSliderResult.length===0 ||
    digiIconsResult.length===0 ||
    incOfferResult.length===0){
      return{
        notFound:true
      }
    }
  return{
    props:{
      topBannerImage:topBannerResult,
      SliderImages:mainSliderResult,
      digiIcons:digiIconsResult,
      incOfferProducts:incOfferResult
      
    },
    revalidate:5000
  }

}
