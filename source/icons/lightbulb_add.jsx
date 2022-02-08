import * as React from "react"; 
	
export default function LightbulbAddIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="LightbulbAdd" data-type="icon fatcow-icon" {...props} />
}