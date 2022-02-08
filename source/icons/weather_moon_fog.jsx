import * as React from "react"; 
	
export default function WeatherMoonFogIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0RDRjkzMjE1OUJGMTFFMjlGNzBCODFEQ0M1OEUwMEYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0RDRjkzMjI1OUJGMTFFMjlGNzBCODFEQ0M1OEUwMEYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozRENGOTMxRjU5QkYxMUUyOUY3MEI4MURDQzU4RTAwRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozRENGOTMyMDU5QkYxMUUyOUY3MEI4MURDQzU4RTAwRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqDk8HIAAAY9SURBVHjazFdbbBRl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" alt="WeatherMoonFog" data-type="icon fatcow-icon" {...props} />
}