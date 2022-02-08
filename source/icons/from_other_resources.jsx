import * as React from "react"; 
	
export default function FromOtherResourcesIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTRDQ0NGODYxMDdDMTFFM0I3Q0JBRUFFMDY0OUNBRTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTRDQ0NGODcxMDdDMTFFM0I3Q0JBRUFFMDY0OUNBRTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1NENDQ0Y4NDEwN0MxMUUzQjdDQkFFQUUwNjQ5Q0FFMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1NENDQ0Y4NTEwN0MxMUUzQjdDQkFFQUUwNjQ5Q0FFMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhT8xRAAAAefSURBVHjapFcLbFPX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" alt="FromOtherResources" data-type="icon fatcow-icon" {...props} />
}