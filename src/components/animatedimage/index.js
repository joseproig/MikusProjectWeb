import './styles.css';
import Imagen from './../imagen'
import Triangle from './../triangle'
import SubMenuButton from './../submenubutton'
import { BsSunglasses} from "react-icons/bs";
import { SiRedhat} from "react-icons/si";
import { GiAmericanFootballBall} from  "react-icons/gi"


function AnimatedImage (props) {
    const {width,height, imageLink,classes,animate, userId, token} = props;



    return (
        <div>
            <Triangle animateGroup={animate}>
                <SubMenuButton positionInVertical='up' color = "white" backgroundColor="#1ae892" type="sunglasses" userId={userId} token={token}><BsSunglasses size="50"></BsSunglasses></SubMenuButton>
                <SubMenuButton positionInVertical='centro' color = "white" backgroundColor="#1ae892" type="hat" userId={userId} token={token}><SiRedhat size="50"></SiRedhat></SubMenuButton>
                <SubMenuButton positionInVertical='down' color = "white" backgroundColor="#1ae892" type="ball" userId={userId} token={token}><GiAmericanFootballBall size="50"></GiAmericanFootballBall></SubMenuButton>
            </Triangle>
            <Imagen imageLink={imageLink} width={width} height={height} classes={classes + (animate  ? ' animarImagen' : '')}></Imagen>
        </div>
    );
  }
  
  export default AnimatedImage;