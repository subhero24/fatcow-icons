import * as React from "react"; 
	
export default function ClassModuleIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0ZEQzI4MDYxMDhDMTFFM0JFRDk5OTgxMEUwQTIxNTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0ZEQzI4MDcxMDhDMTFFM0JFRDk5OTgxMEUwQTIxNTciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDRkRDMjgwNDEwOEMxMUUzQkVEOTk5ODEwRTBBMjE1NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDRkRDMjgwNTEwOEMxMUUzQkVEOTk5ODEwRTBBMjE1NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoMg+4AAAAe7SURBVHjarFdtbFtX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" alt="ClassModule" data-type="icon fatcow-icon" {...props} />
}