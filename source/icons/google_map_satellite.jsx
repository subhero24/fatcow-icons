import * as React from "react"; 
	
export default function GoogleMapSatelliteIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDdBNkNENDA1NThFMTFFMUFFRDVFQjdCNDA4ODkwM0IiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDdBNkNENDE1NThFMTFFMUFFRDVFQjdCNDA4ODkwM0IiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEN0E2Q0QzRTU1OEUxMUUxQUVENUVCN0I0MDg4OTAzQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEN0E2Q0QzRjU1OEUxMUUxQUVENUVCN0I0MDg4OTAzQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ps9+TlsAAAjVSURBVHjavFd7cFRn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" alt="GoogleMapSatellite" data-type="icon fatcow-icon" {...props} />
}