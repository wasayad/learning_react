import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function getInfo( careType:string, scaleValue:number, event:any)
{
	var table = ['un peu', 'moderement', 'beaucoup', 'd\'eau', 'de lumiere']
	var typevalue:number
	if (careType === 'water')
		typevalue = 3;
	else
		typevalue = 4;
	event.preventDefault()
	alert(`Cette planete necessite ${table[scaleValue - 1]} ${table[typevalue]}`)
}

function CareScale({ scaleValue, careType }:any) {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

	return (
		<div>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span onClick={(event) => getInfo(careType, scaleValue, event)} key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale