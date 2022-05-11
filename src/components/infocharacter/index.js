import './styles.css';


function InfoCharacter (props) {
    const {name, points} = props;
    return (
        <div className='containeroGeneral'>
            <div>
                <div className='texto'>Name </div>
                <div className='texto'>___</div>
                <div className='numbero'>{name}</div>
            </div>

            <div>
                <div className='texto'>Points </div>
                <div className='texto'>___</div>
                <div className='numbero'>{points}</div>
            </div>
        </div>
    );
  }
  
  export default InfoCharacter;