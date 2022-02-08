import * as React from "react"; 
	
export default function PageWhitePaintIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="PageWhitePaint" data-type="icon fatcow-icon" {...props} />
}