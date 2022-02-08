import * as React from "react"; 
	
export default function BrickAddIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="BrickAdd" data-type="icon fatcow-icon" {...props} />
}