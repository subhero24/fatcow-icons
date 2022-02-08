import * as React from "react"; 
	
export default function SteeringWheelIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="SteeringWheel" data-type="icon fatcow-icon" {...props} />
}