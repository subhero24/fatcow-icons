import * as React from "react"; 
	
export default function UserKnightIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NURDNjg1QTA1NDBDMTFFMTgwOUREM0EwMEY1NkU0QzQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NURDNjg1QTE1NDBDMTFFMTgwOUREM0EwMEY1NkU0QzQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1REM2ODU5RTU0MEMxMUUxODA5REQzQTAwRjU2RTRDNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1REM2ODU5RjU0MEMxMUUxODA5REQzQTAwRjU2RTRDNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PudRJRMAAAY9SURBVHjaxFdbT1xV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" alt="UserKnight" data-type="icon fatcow-icon" {...props} />
}