import * as React from "react"; 
	
export default function EmotionEvilgrinIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="EmotionEvilgrin" data-type="icon fatcow-icon" {...props} />
}