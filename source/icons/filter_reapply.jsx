import * as React from "react"; 
	
export default function FilterReapplyIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODFFRDY0NzYxMDdDMTFFMzg2QjhGMkNCRUNCM0MxRUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODFFRDY0NzcxMDdDMTFFMzg2QjhGMkNCRUNCM0MxRUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4MUVENjQ3NDEwN0MxMUUzODZCOEYyQ0JFQ0IzQzFFRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4MUVENjQ3NTEwN0MxMUUzODZCOEYyQ0JFQ0IzQzFFRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmR+m00AAAhxSURBVHjarFdrcFXV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" alt="FilterReapply" data-type="icon fatcow-icon" {...props} />
}