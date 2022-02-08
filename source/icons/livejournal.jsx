import * as React from "react"; 
	
export default function LivejournalIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="Livejournal" data-type="icon fatcow-icon" {...props} />
}