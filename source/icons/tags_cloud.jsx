import * as React from "react"; 
	
export default function TagsCloudIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="TagsCloud" data-type="icon fatcow-icon" {...props} />
}