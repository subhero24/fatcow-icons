import * as React from "react"; 
	
export default function FeedEditIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="FeedEdit" data-type="icon fatcow-icon" {...props} />
}