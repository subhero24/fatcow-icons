import * as React from "react"; 
	
export default function SpeedometerIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="Speedometer" data-type="icon fatcow-icon" {...props} />
}