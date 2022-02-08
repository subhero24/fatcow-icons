import * as React from "react"; 
	
export default function CommentsAddIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="CommentsAdd" data-type="icon fatcow-icon" {...props} />
}