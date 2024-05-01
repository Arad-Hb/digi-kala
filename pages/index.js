import Context from "@/ContextAPI/Context";
import MainCarousel from "@/components/MainPage/MainCarousel";

import { GET } from "@/repository/FetchRepository";
// import * as fetchRepository from '@/repository/FetchApiRepository'
// import * as axiosRepository from '@/repository/AxiosRepository'
// and in my getSatitcProps Function=> fetchRepository.GET("public/mainSlider")



export default function Home(props) {
  
  return (
    <>
      <Context.Provider value={{mainCarouselImages:props.carouselImages}}>
          <MainCarousel/>
      </Context.Provider>
        
      
    </>
  );
}
export async function getStaticProps(context){
  const mainCarouselResponse=await GET('public/mainSlider')
  const mainCarouselResult=await mainCarouselResponse.json()
  return{
    props:{
      carouselImages:mainCarouselResult
    },
    revalidate:5000
  }

}
