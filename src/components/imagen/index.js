function Imagen (props) {
    const {width,height, imageLink} = props;
    return (
        <img
            alt=""
            src={imageLink}
            width={width}
            height={height}
            className="d-inline-block align-top"
            />     
    );
  }
  
  export default Imagen;