import './styles.css';

function Imagen (props) {
    const {width,height, imageLink,classes} = props;



    return (
        <img
            alt=""
            src={imageLink}
            width={width}
            height={height}
            className={classes}
            /> 
    );
  }
  
  export default Imagen;