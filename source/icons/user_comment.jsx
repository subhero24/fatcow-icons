import * as React from "react"; 
	
export default function UserCommentIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="UserComment" data-type="icon fatcow-icon" {...props} />
}