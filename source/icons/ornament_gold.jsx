import * as React from "react"; 
	
export default function OrnamentGoldIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="OrnamentGold" data-type="icon fatcow-icon" {...props} />
}