import * as React from "react"; 
	
export default function GlobeAfricaIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="GlobeAfrica" data-type="icon fatcow-icon" {...props} />
}