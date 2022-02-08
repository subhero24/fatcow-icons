import * as React from "react"; 
	
export default function ScriptBinaryIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Qzk5NDZDMDc1OEZGMTFFMjlGREFEMDE1MzFDNkI0QTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Qzk5NDZDMDg1OEZGMTFFMjlGREFEMDE1MzFDNkI0QTUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOTk0NkMwNTU4RkYxMUUyOUZEQUQwMTUzMUM2QjRBNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOTk0NkMwNjU4RkYxMUUyOUZEQUQwMTUzMUM2QjRBNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr+XljMAAAZlSURBVHjazFdrbBRV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" alt="ScriptBinary" data-type="icon fatcow-icon" {...props} />
}