import Context from "@/ContextAPI/Context";
import DigiIcons from "@/components/MainPage/DigiIcons";
import MainSlider from "@/components/MainPage/MainSlider";
import IncredibleOffer from "@/components/MainPage/Products/IncredibleOffer";

import { GET } from "@/repository/FetchRepository";
// import * as fetchRepository from '@/repository/FetchApiRepository'
// import * as axiosRepository from '@/repository/AxiosRepository'
// and in my getSatitcProps Function=> fetchRepository.GET("public/mainSlider")



export default function Home(props) {
  
  return (
    <>
      <Context.Provider value={{mainSliderImages:props.SliderImages,digiIcons:props.digiIcons}}>
          <MainSlider/>
          <DigiIcons data={props.digiIcons}/>
          <IncredibleOffer data={props.incOfferProducts}/>
      </Context.Provider>
        
      
    </>
  );
}
export async function getStaticProps(context){
  const mainSliderResponse=await GET('public/mainSlider')
  const mainSliderResult=await mainSliderResponse.json()

  const digiIconsResponse=await GET('SevenIcons')
  const digiIconsResult=await digiIconsResponse.json()

  const incOfferResponse=await GET('products/incredibleOffers')
  const incOfferResult=await incOfferResponse.json()
  return{
    props:{
      SliderImages:mainSliderResult,
      digiIcons:digiIconsResult,
      incOfferProducts:incOfferResult
    },
    revalidate:5000
  }

}
