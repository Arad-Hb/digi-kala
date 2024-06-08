import Context from "@/ContextAPI/Context";
import DigiIcons from "@/components/MainPage/DigiIcons";
import MainSlider from "@/components/MainPage/MainSlider";
import IncredibleOffer from "@/components/MainPage/Products/IncredibleOffer";
import { GET } from "@/repository/FetchRepository";
import styles from "@/styles/Home.module.css"

// import * as fetchRepository from '@/repository/FetchApiRepository'
// import * as axiosRepository from '@/repository/AxiosRepository'
// and in my getSatitcProps Function=> fetchRepository.GET("public/mainSlider")



export default function Home(props) {
  
  return (
    <div className={`${styles.Home}`}>
      
      <Context.Provider value={{mainSliderImages:props.SliderImages,digiIcons:props.digiIcons,incOfferProducts:props.incOfferProducts}}>
          <div className={`${styles.mainSlider}`}><MainSlider/></div>
          <div className={`${styles.digiIcons}`}><DigiIcons data={props.digiIcons}/></div>
          <div className={`${styles.incredibleOffer}`}><IncredibleOffer data={props.incOfferProducts}/></div>
      </Context.Provider>
      
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
