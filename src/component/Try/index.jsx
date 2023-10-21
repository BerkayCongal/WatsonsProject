import { useRef } from "react"
import Deneme from"/src/Animations/Deneme.json"
import { Player} from '@lottiefiles/react-lottie-player';

export default function Index() {
    const deneme = useRef()
    return(
        <>
            <Player
                autoplay
                ref={deneme}
                loop
                src={Deneme}
                style={{ height: '100%', width: '100%' }}
                >
            </Player>
        </>
    )
}