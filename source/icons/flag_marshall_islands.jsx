import * as React from "react"; 
	
export default function FlagMarshallIslandsIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="FlagMarshallIslands" data-type="icon fatcow-icon" {...props} />
}