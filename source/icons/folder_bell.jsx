import * as React from "react"; 
	
export default function FolderBellIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="FolderBell" data-type="icon fatcow-icon" {...props} />
}