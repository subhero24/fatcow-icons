import * as React from "react"; 
	
export default function FilmDeleteIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="FilmDelete" data-type="icon fatcow-icon" {...props} />
}