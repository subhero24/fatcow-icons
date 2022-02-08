import * as React from "react"; 
	
export default function OutlookChangeViewIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkY0NjA3QzYxMEExMTFFM0I0OEU5NjNDNDdDOUY5QTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkY0NjA3QzcxMEExMTFFM0I0OEU5NjNDNDdDOUY5QTgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyRjQ2MDdDNDEwQTExMUUzQjQ4RTk2M0M0N0M5RjlBOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyRjQ2MDdDNTEwQTExMUUzQjQ4RTk2M0M0N0M5RjlBOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pn1XB7EAAAaHSURBVHjarFcLTFNX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" alt="OutlookChangeView" data-type="icon fatcow-icon" {...props} />
}