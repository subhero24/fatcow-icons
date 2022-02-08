import * as React from "react"; 
	
export default function SavedExportsIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUVFQ0M5OTYxMDhEMTFFM0JBNEFCNkRDRUJCMDRDODAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUVFQ0M5OTcxMDhEMTFFM0JBNEFCNkRDRUJCMDRDODAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxRUVDQzk5NDEwOEQxMUUzQkE0QUI2RENFQkIwNEM4MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxRUVDQzk5NTEwOEQxMUUzQkE0QUI2RENFQkIwNEM4MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvcmT7QAAAZiSURBVHjarFdrbBRV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" alt="SavedExports" data-type="icon fatcow-icon" {...props} />
}