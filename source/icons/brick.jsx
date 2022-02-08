import * as React from "react"; 
	
export default function BrickIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="Brick" data-type="icon fatcow-icon" {...props} />
}