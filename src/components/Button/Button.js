import './Button.css';

function Button(props){
    
    let audioSource = `http://localhost:3000/word/${props.keyAudioName}.mp3`;

    let audio = new Audio(audioSource)

    document.addEventListener('keydown', function(e){
		if(e.key.toLowerCase() === props.keyTrigger.toLowerCase()){
            audio.play()
        }
    })

    const play = () => audio.play();

    return(
        <div className='button' onClick={play}>
            <audio scr={audioSource}></audio>
            <span className='button-key'>{props.keyTrigger}</span>
            <span className='button-emodji'>{props.keyMemoji}</span>
            <span className='button-label'>{props.keyName}</span>
        </div>
    )
}

export default Button;