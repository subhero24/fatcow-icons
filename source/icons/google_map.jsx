import * as React from "react"; 
	
export default function GoogleMapIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="GoogleMap" data-type="icon fatcow-icon" {...props} />
}