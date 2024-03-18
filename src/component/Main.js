import "./Main.css";
import { useState, useEffect} from "react";
import ReactPlayer from "react-player";


const Main = ({weather}) => {
    const Weather = weather?.weather[0].main;
    const [playIndex, setPlayIndex] = useState(0);
    const Clouds = [
        {index:1, url:'https://youtu.be/cKdsUhei1Ug?si=BL8_yBZrriJ_EQvc'},{index:2, url:'https://youtu.be/yp3O8nU8HlI?si=7lAL8eeGVejKP0Ih'},{index:3, url:'https://youtu.be/vwbaY3PoNbA?si=V7KSt60PdIyhaN7c'},{index:4, url:'https://youtu.be/VQZXXciZb_c?si=0pZCXo8h7VYetCn0'},{index:5, url:'https://youtu.be/vJ_prp7S-sA?si=e5cCOuQLH4gNQwVb'},{index:6, url:'https://youtu.be/v5lkiuAcJQU?si=yzw5j0G2D233iO7x'},{index:7, url:'https://youtu.be/Y1KKH36vTag?si=1OA20y0H3opm36fd'},{index:8, url:'https://youtu.be/hGb12LNTbYw?si=FZDn3aIDwiAMdk_n'},{index:9, url:'https://youtu.be/68U1mc_azhI?si=vPDt-Azd37lR1cKR'},{index:10, url:'https://youtu.be/VaYlPJte3Jk?si=vGouD8wcHIoOujK-'}
    ]
    const Clear = [
        {index:1, url:'https://youtu.be/cKdsUhei1Ug?si=BL8_yBZrriJ_EQvc'},{index:2, url:'https://youtu.be/yp3O8nU8HlI?si=7lAL8eeGVejKP0Ih'},{index:3, url:'https://youtu.be/vwbaY3PoNbA?si=V7KSt60PdIyhaN7c'},{index:4, url:'https://youtu.be/VQZXXciZb_c?si=0pZCXo8h7VYetCn0'},{index:5, url:'https://youtu.be/vJ_prp7S-sA?si=e5cCOuQLH4gNQwVb'},{index:6, url:'https://youtu.be/v5lkiuAcJQU?si=yzw5j0G2D233iO7x'},{index:7, url:'https://youtu.be/Y1KKH36vTag?si=1OA20y0H3opm36fd'},{index:8, url:'https://youtu.be/hGb12LNTbYw?si=FZDn3aIDwiAMdk_n'},{index:9, url:'https://youtu.be/68U1mc_azhI?si=vPDt-Azd37lR1cKR'},{index:10, url:'https://youtu.be/VaYlPJte3Jk?si=vGouD8wcHIoOujK-'}
    ]
    const Rain = [
        {index:1, url:'https://youtu.be/rD8iXrvL2EY?si=AKlsSoId07qy5kiT'},{index:2, url:'https://youtu.be/6Bs-YqjlRf0?si=bwQ2SioqrtC3PHRI'},{index:3, url:'https://youtu.be/afxLaQiLu-o?si=BO4O-HST5hsYTeP2'},{index:4, url:'https://youtu.be/NIPtyAKxlRs?si=Pf39M8FGOudmM0lk'},{index:5, url:'https://youtu.be/CDQyTBCQrj8?si=xuUQP2lmRuYTshx1'},{index:6, url:'https://youtu.be/Cm08bRic7Jk?si=8liDvWZAs34BWwT_'},{index:7, url:'https://youtu.be/67i2zCI4G14?si=sk1HCwKrBxYm_fla'},{index:8, url:'https://youtu.be/IHaMe0PeMWE?si=LaBN_9HRQoa819Z_'},{index:9, url:'https://youtu.be/G6tAF9f4N6Q?si=0e9bIq_WBMPUXU_b'},{index:10, url:'https://youtu.be/5gEpkPQnKpw?si=X_oRemsfQr8WKfBx'}
    ]
    const Drizzle = [
        {index:1, url:'https://youtu.be/rD8iXrvL2EY?si=AKlsSoId07qy5kiT'},{index:2, url:'https://youtu.be/6Bs-YqjlRf0?si=bwQ2SioqrtC3PHRI'},{index:3, url:'https://youtu.be/afxLaQiLu-o?si=BO4O-HST5hsYTeP2'},{index:4, url:'https://youtu.be/NIPtyAKxlRs?si=Pf39M8FGOudmM0lk'},{index:5, url:'https://youtu.be/CDQyTBCQrj8?si=xuUQP2lmRuYTshx1'},{index:6, url:'https://youtu.be/Cm08bRic7Jk?si=8liDvWZAs34BWwT_'},{index:7, url:'https://youtu.be/67i2zCI4G14?si=sk1HCwKrBxYm_fla'},{index:8, url:'https://youtu.be/IHaMe0PeMWE?si=LaBN_9HRQoa819Z_'},{index:9, url:'https://youtu.be/G6tAF9f4N6Q?si=0e9bIq_WBMPUXU_b'},{index:10, url:'https://youtu.be/5gEpkPQnKpw?si=X_oRemsfQr8WKfBx'}
    ]
    const Thunderstorm = [
        {index:1, url:'https://youtu.be/rD8iXrvL2EY?si=AKlsSoId07qy5kiT'},{index:2, url:'https://youtu.be/6Bs-YqjlRf0?si=bwQ2SioqrtC3PHRI'},{index:3, url:'https://youtu.be/afxLaQiLu-o?si=BO4O-HST5hsYTeP2'},{index:4, url:'https://youtu.be/NIPtyAKxlRs?si=Pf39M8FGOudmM0lk'},{index:5, url:'https://youtu.be/CDQyTBCQrj8?si=xuUQP2lmRuYTshx1'},{index:6, url:'https://youtu.be/Cm08bRic7Jk?si=8liDvWZAs34BWwT_'},{index:7, url:'https://youtu.be/67i2zCI4G14?si=sk1HCwKrBxYm_fla'},{index:8, url:'https://youtu.be/IHaMe0PeMWE?si=LaBN_9HRQoa819Z_'},{index:9, url:'https://youtu.be/G6tAF9f4N6Q?si=0e9bIq_WBMPUXU_b'},{index:10, url:'https://youtu.be/5gEpkPQnKpw?si=X_oRemsfQr8WKfBx'}
    ]
    const Snow = [
        {index:1, url:'https://youtu.be/9MJsZUCfuwM?si=FijK4EUnBNWAkO56'},{index:2, url:'https://youtu.be/W0cs6ciCt_k?si=75NsU5_1tm54MOTx'},{index:3, url:'https://youtu.be/wEQpfil0IYA?si=4kLMmcrZcRxqcENU'},{index:4, url:'https://youtu.be/G2fjG30vfYA?si=3sUtgn7WBDo_zSWt'},{index:5, url:'https://youtu.be/yVLxRXoLaas?si=pY5bSNwBYwDGSaS3'},{index:6, url:'https://youtu.be/m4L0_kwPpso?si=7qz0T2FBVqCxWUWf'},{index:7, url:'https://youtu.be/gPNu9OIj4Zo?si=Wl0R_miS__q5B1R4'},{index:8, url:'https://youtu.be/pRmsP7A-DtY?si=_BzuCuVki657rzNc'},{index:9, url:'https://youtu.be/2BsXsNv5Y9c?si=gIULqYllGlmjgzTc'},{index:10, url:'https://youtu.be/Pgvyr60CUho?si=yMxm_tYjmsw4f3S7'}
    ]


    const handleNextVideo = (video,playIndex) => {
        if(playIndex === video.length - 1){
            setPlayIndex(0);
        }else{
            setPlayIndex(playIndex + 1);
        }
    }

    const [scroll, setScroll] = useState(0);

    const onScroll = () => {
        setScroll(window.scrollY)
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    },[]);

    return (
        <div className="Main">
            <ReactPlayer
                    className='react-player'
                    url={
                        (
                            Weather === "Clouds"
                                ? Clouds
                                : (Weather === "Rain"
                                    ? Rain
                                    : (
                                        Weather === "Clear" 
                                        ? Clear
                                        :(
                                            Weather === "Snow"
                                            ? Snow
                                            :(
                                                Weather === 'Drizzle'
                                                ? Drizzle
                                                :(
                                                    Weather === 'Thunderstorm'
                                                    ? Thunderstorm
                                                    : Clouds
                                                )
                                            )
                                        )
                                    )
                                )
                        )    
                    [playIndex].url}    // 플레이어 url
                    width='100%'         // 플레이어 크기 (가로)
                    height='100%'        // 플레이어 크기 (세로)
                    playing={true}        // 자동 재생 on
                    muted={true}          // 자동 재생 on
                    controls={true}       // 플레이어 컨트롤 노출 여부
                    light={false}         // 플레이어 모드
                    pip={true}            // pip 모드 설정 여부
                    poster={'https://youtube.com/shorts/17WpKlN7W8Y?si=9uoxg1Dm-fUewwVb'}   // 플레이어 초기 포스터 사진
                    onEnded={()=>handleNextVideo((
                        Weather === "Clouds"
                            ? Clouds
                            : (Weather === "Rain"
                                ? Rain
                                : (
                                    Weather === "Clear" 
                                    ? Clear
                                    :(
                                        Weather === "Snow"
                                        ? Snow
                                        :(
                                            Weather === 'Drizzle'
                                            ? Drizzle
                                            :(
                                                Weather === 'Thunderstorm'
                                                ? Thunderstorm
                                                : Clouds
                                            )
                                        )
                                    )
                                )
                            )
                    ), playIndex)}  // 플레이어 끝났을 때 이벤트
                />
        </div>
    )
}

export default Main;
