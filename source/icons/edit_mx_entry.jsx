import * as React from "react"; 
	
export default function EditMxEntryIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0VFOTMyNTc3NkM0MTFFMjlFQjA5NzRERDcyNjFEMDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0VFOTMyNTg3NkM0MTFFMjlFQjA5NzRERDcyNjFEMDYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozRUU5MzI1NTc2QzQxMUUyOUVCMDk3NERENzI2MUQwNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozRUU5MzI1Njc2QzQxMUUyOUVCMDk3NERENzI2MUQwNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Prga0VwAAAjGSURBVHjatFcJVFTX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" alt="EditMxEntry" data-type="icon fatcow-icon" {...props} />
}