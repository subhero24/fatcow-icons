import * as React from "react"; 
	
export default function XmlExportsIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUNEQ0RFRTYxMDk5MTFFMzk1RDdBMEQzNkZEQTIyQjAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUNEQ0RFRTcxMDk5MTFFMzk1RDdBMEQzNkZEQTIyQjAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxQ0RDREVFNDEwOTkxMUUzOTVEN0EwRDM2RkRBMjJCMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxQ0RDREVFNTEwOTkxMUUzOTVEN0EwRDM2RkRBMjJCMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrP7KW0AAAbnSURBVHjatFdpbFRV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" alt="XmlExports" data-type="icon fatcow-icon" {...props} />
}