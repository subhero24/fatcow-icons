import * as React from "react"; 
	
export default function TornadoIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="Tornado" data-type="icon fatcow-icon" {...props} />
}