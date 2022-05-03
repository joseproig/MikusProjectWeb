import './styles.css';


function Triangle (props) {
    const {animateGroup, children} = props;

    console.log(animateGroup);
    const animateDive = (animateGroup  ? ' animarDive' : '')
    const animateTriangle = (animateGroup  ? ' animarTriangle' : '')

    console.log(animateDive);
    return (
        <div className={'dive ' + animateDive}>
            <div className={'add-triangle-up ' + animateTriangle}></div>
            {children}
        </div>
    );
}
  
  export default Triangle;