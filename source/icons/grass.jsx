import * as React from "react"; 
	
export default function GrassIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="Grass" data-type="icon fatcow-icon" {...props} />
}