import * as React from "react"; 
	
export default function EditDnsZoneIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzVGQjU2MjM3NkM0MTFFMkI3MjZERDhERTU0REE5MzgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzVGQjU2MjQ3NkM0MTFFMkI3MjZERDhERTU0REE5MzgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozNUZCNTYyMTc2QzQxMUUyQjcyNkREOERFNTREQTkzOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozNUZCNTYyMjc2QzQxMUUyQjcyNkREOERFNTREQTkzOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgwGggMAAAiHSURBVHjarFcJVFNX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" alt="EditDnsZone" data-type="icon fatcow-icon" {...props} />
}