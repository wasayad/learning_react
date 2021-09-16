import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')
	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :
            <textarea 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onBlur={(e) => noBlur(e.target.value)}
            />
            <button onClick={() => checkValue(inputValue)}>Alertez moi 🚨</button>
            </div>
		</footer>
	)
}

function noBlur(value:any)
{
   if (!value.includes('@'))
        alert('Votre adresse mail doit contenir \'@\'');
}

function checkValue(value:any)
{
    if (!value.includes('@'))
        alert('Votre adresse mail doit contenir \'@\'');
}

export default Footer