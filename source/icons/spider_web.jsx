import * as React from "react"; 
	
export default function SpiderWebIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="SpiderWeb" data-type="icon fatcow-icon" {...props} />
}