import * as React from "react"; 
	
export default function ReportTornIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjIzOERFQUM1NEMzMTFFMTkwRkVEQjE3QTQzQUNCQkQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjIzOERFQUQ1NEMzMTFFMTkwRkVEQjE3QTQzQUNCQkQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyMjM4REVBQTU0QzMxMUUxOTBGRURCMTdBNDNBQ0JCRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyMjM4REVBQjU0QzMxMUUxOTBGRURCMTdBNDNBQ0JCRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsxehW0AAAZSSURBVHjatFdrbFRV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" alt="ReportTorn" data-type="icon fatcow-icon" {...props} />
}