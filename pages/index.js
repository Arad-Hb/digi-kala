import DigiIcons from "@/components/MainPage/DigiIcons";
import MainSlider from "@/components/MainPage/MainSlider";
import IncredibleOffer from "@/components/MainPage/Products/IncredibleOffer";
import RootLayout from "@/components/layout/RootLayout";
import { GET } from "@/repository/FetchRepository";
import styles from "@/styles/Home.module.css"
import { redirect } from "next/dist/server/api-utils";
import { useDispatch } from "react-redux";
import {setImagesData} from '@/redux/features/slices/StaticImagesSlice'
import { useEffect } from "react";



// import * as fetchRepository from '@/repository/FetchApiRepository'
// import * as axiosRepository from '@/repository/AxiosRepository'
// and in my getSatitcProps Function=> fetchRepository.GET("public/mainSlider")



export default function Home(props) {
  const dispatch=useDispatch()
  
  dispatch(setImagesData(props.topBannerImage))
  
 
  
  return (
    <div className={`${styles.Home}`}>
      <div className={`${styles.mainSlider}`}><MainSlider data={props.SliderImages}/></div>
      <div className={`${styles.digiIcons}`}><DigiIcons data={props.digiIcons}/></div>
      <div className={`${styles.incredibleOffer}`}><IncredibleOffer data={props.incOfferProducts}/></div>
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
