import * as React from "react"; 
	
export default function MedalGoldDeleteIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="MedalGoldDelete" data-type="icon fatcow-icon" {...props} />
}