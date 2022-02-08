import * as React from "react"; 
	
export default function BoxtrapperIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REU5RENGOTM3NkFDMTFFMkI0Q0FFQjUyNzA2REZCNzAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REU5RENGOTQ3NkFDMTFFMkI0Q0FFQjUyNzA2REZCNzAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpERTlEQ0Y5MTc2QUMxMUUyQjRDQUVCNTI3MDZERkI3MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpERTlEQ0Y5Mjc2QUMxMUUyQjRDQUVCNTI3MDZERkI3MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pg9Pv4QAAAabSURBVHjavFdrTBRX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" alt="Boxtrapper" data-type="icon fatcow-icon" {...props} />
}