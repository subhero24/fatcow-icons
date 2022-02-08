import * as React from "react"; 
	
export default function BeaconLightIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="BeaconLight" data-type="icon fatcow-icon" {...props} />
}