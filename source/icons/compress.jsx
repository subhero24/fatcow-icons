import * as React from "react"; 
	
export default function CompressIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="Compress" data-type="icon fatcow-icon" {...props} />
}