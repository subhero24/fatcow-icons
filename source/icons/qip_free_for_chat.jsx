import * as React from "react"; 
	
export default function QipFreeForChatIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="QipFreeForChat" data-type="icon fatcow-icon" {...props} />
}