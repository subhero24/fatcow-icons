import * as React from "react"; 
	
export default function FilmSaveIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="FilmSave" data-type="icon fatcow-icon" {...props} />
}