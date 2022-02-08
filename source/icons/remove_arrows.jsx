import * as React from "react"; 
	
export default function RemoveArrowsIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTgyM0U5RDYxMDdCMTFFMzg0NkREQTA5M0I4M0FCNDEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTgyM0U5RDcxMDdCMTFFMzg0NkREQTA5M0I4M0FCNDEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBODIzRTlENDEwN0IxMUUzODQ2RERBMDkzQjgzQUI0MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBODIzRTlENTEwN0IxMUUzODQ2RERBMDkzQjgzQUI0MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiewrSkAAAX8SURBVHjavJd/UFRV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" alt="RemoveArrows" data-type="icon fatcow-icon" {...props} />
}