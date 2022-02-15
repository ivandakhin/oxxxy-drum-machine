import Button from '../Button/Button';

function ButtonsLine(props){
    return(
        <div className='buttons-line'>
            {props.data.map((buttonsData) => (
                <Button 
                    key={buttonsData.id} 
                    keyAudioName={buttonsData.id}
                    keyCode={buttonsData.keyCode} 
                    keyMemoji={buttonsData.keyMemoji} 
                    keyName={buttonsData.keyName} 
                    keyTrigger={buttonsData.keyTrigger}
                />
            ))}
            
        </div>
    )
}

export default ButtonsLine;
