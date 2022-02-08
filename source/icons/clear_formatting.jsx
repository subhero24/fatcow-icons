import * as React from "react"; 
	
export default function ClearFormattingIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTc4MkYyMTMxMDA5MTFFM0FEQzVCMzYzOTVBN0ZCM0QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTc4MkYyMTQxMDA5MTFFM0FEQzVCMzYzOTVBN0ZCM0QiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNzgyRjIxMTEwMDkxMUUzQURDNUIzNjM5NUE3RkIzRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxNzgyRjIxMjEwMDkxMUUzQURDNUIzNjM5NUE3RkIzRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt0vZKcAAAdiSURBVHjatFdpbFRV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" alt="ClearFormatting" data-type="icon fatcow-icon" {...props} />
}