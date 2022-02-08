import * as React from "react"; 
	
export default function NameManagerIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDZCODk3MzMxMDdBMTFFM0JFOEZEQ0ZBMzdDRDk3MzIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDZCODk3MzQxMDdBMTFFM0JFOEZEQ0ZBMzdDRDk3MzIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpENkI4OTczMTEwN0ExMUUzQkU4RkRDRkEzN0NEOTczMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpENkI4OTczMjEwN0ExMUUzQkU4RkRDRkEzN0NEOTczMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlVFkVMAAAZVSURBVHjavFd9UFRV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" alt="NameManager" data-type="icon fatcow-icon" {...props} />
}