import * as React from "react"; 
	
export default function InboxDocumentTextIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDkxQkVCQTBBNzQ1MTFFMUEzNTU4MzM3OTQ5ODgxMzIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDkxQkVCQTFBNzQ1MTFFMUEzNTU4MzM3OTQ5ODgxMzIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEOTFCRUI5RUE3NDUxMUUxQTM1NTgzMzc5NDk4ODEzMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEOTFCRUI5RkE3NDUxMUUxQTM1NTgzMzc5NDk4ODEzMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pp6eq2YAAAYBSURBVHjavFdrbFNl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" alt="InboxDocumentText" data-type="icon fatcow-icon" {...props} />
}