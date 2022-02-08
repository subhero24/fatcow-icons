import * as React from "react"; 
	
export default function TokenMatchCharacterIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDIxQUI0MjY2OUFFMTFFM0JENDlDMjlFQjI3RDk5RjkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDIxQUI0Mjc2OUFFMTFFM0JENDlDMjlFQjI3RDk5RjkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEMjFBQjQyNDY5QUUxMUUzQkQ0OUMyOUVCMjdEOTlGOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEMjFBQjQyNTY5QUUxMUUzQkQ0OUMyOUVCMjdEOTlGOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnjxlzcAAAXkSURBVHjatFdZbFRV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" alt="TokenMatchCharacter" data-type="icon fatcow-icon" {...props} />
}