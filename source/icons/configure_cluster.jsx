import * as React from "react"; 
	
export default function ConfigureClusterIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Njk4NzRGRjM3NkI2MTFFMkI1RDdEMzlFMEY4RTU2REMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Njk4NzRGRjQ3NkI2MTFFMkI1RDdEMzlFMEY4RTU2REMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2OTg3NEZGMTc2QjYxMUUyQjVEN0QzOUUwRjhFNTZEQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2OTg3NEZGMjc2QjYxMUUyQjVEN0QzOUUwRjhFNTZEQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ppg//ikAAAelSURBVHjapFcLUFTX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" alt="ConfigureCluster" data-type="icon fatcow-icon" {...props} />
}