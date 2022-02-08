import * as React from "react"; 
	
export default function PerfomanceIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REFDQ0Q3QkE5ODQzMTFFMkE1NkFGRUNEMzkxODNGNTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REFDQ0Q3QkI5ODQzMTFFMkE1NkFGRUNEMzkxODNGNTUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEQUNDRDdCODk4NDMxMUUyQTU2QUZFQ0QzOTE4M0Y1NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEQUNDRDdCOTk4NDMxMUUyQTU2QUZFQ0QzOTE4M0Y1NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnQwcLsAAAZPSURBVHjavFdpbFRV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" alt="Perfomance" data-type="icon fatcow-icon" {...props} />
}