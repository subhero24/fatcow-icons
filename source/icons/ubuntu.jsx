import * as React from "react"; 
	
export default function UbuntuIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="Ubuntu" data-type="icon fatcow-icon" {...props} />
}