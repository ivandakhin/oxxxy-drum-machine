import TextLine from '../TextLine/TextLine'
import data from '../../data.json';

import './Panel.css';
import ButtonsLine from '../ButtonsLine/ButtonsLine';

function Panel(){
    return (
        <div className='panel'>
            <ButtonsLine data={data['buttons-line-1']}/>
            <ButtonsLine data={data['buttons-line-2']}/>
            <ButtonsLine data={data['buttons-line-3']}/>
            <ButtonsLine data={data['buttons-line-4']}/>
            <ButtonsLine data={data['buttons-line-5']}/>
            <TextLine />
        </div>
    )
}

export default Panel;