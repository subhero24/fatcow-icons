import * as React from "react"; 
	
export default function HoroscopesIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="Horoscopes" data-type="icon fatcow-icon" {...props} />
}