import * as React from "react"; 
	
export default function ReceiptStampIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDE1NkE4OUM1OEZFMTFFMjg3QkNCRDE4QThFRDg4NzUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDE1NkE4OUQ1OEZFMTFFMjg3QkNCRDE4QThFRDg4NzUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MTU2QTg5QTU4RkUxMUUyODdCQ0JEMThBOEVEODg3NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MTU2QTg5QjU4RkUxMUUyODdCQ0JEMThBOEVEODg3NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjsHXtYAAAYUSURBVHjazFdrbFRF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" alt="ReceiptStamp" data-type="icon fatcow-icon" {...props} />
}