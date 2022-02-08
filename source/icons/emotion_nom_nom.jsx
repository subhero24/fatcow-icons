import * as React from "react"; 
	
export default function EmotionNomNomIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0EyMEU4QUE5NEFGMTFFMjg1MjU5OTM0QUZGMDUyNjgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0EyMEU4QUI5NEFGMTFFMjg1MjU5OTM0QUZGMDUyNjgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozQTIwRThBODk0QUYxMUUyODUyNTk5MzRBRkYwNTI2OCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozQTIwRThBOTk0QUYxMUUyODUyNTk5MzRBRkYwNTI2OCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrsGWiIAAAgCSURBVHjatFd7cFRn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" alt="EmotionNomNom" data-type="icon fatcow-icon" {...props} />
}