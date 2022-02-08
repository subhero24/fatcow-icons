import * as React from "react"; 
	
export default function PlacesIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="Places" data-type="icon fatcow-icon" {...props} />
}