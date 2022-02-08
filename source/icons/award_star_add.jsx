import * as React from "react"; 
	
export default function AwardStarAddIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="AwardStarAdd" data-type="icon fatcow-icon" {...props} />
}