import * as React from "react"; 
	
export default function UserHendrixIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTAxRTBFNzg1NDE0MTFFMTg3NjFCMjM1OTU4RTZERDIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTAxRTBFNzk1NDE0MTFFMTg3NjFCMjM1OTU4RTZERDIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMDFFMEU3NjU0MTQxMUUxODc2MUIyMzU5NThFNkREMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMDFFMEU3NzU0MTQxMUUxODc2MUIyMzU5NThFNkREMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvNwOQkAAAd8SURBVHjatFdZbFxn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" alt="UserHendrix" data-type="icon fatcow-icon" {...props} />
}