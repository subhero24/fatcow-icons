import * as React from "react"; 
	
export default function UserR2D2Icon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjFGNzE4MkI1NDEzMTFFMTg0QzNEQjA1ODY2Mjg3QkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjFGNzE4MkM1NDEzMTFFMTg0QzNEQjA1ODY2Mjg3QkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCMUY3MTgyOTU0MTMxMUUxODRDM0RCMDU4NjYyODdCRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCMUY3MTgyQTU0MTMxMUUxODRDM0RCMDU4NjYyODdCRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pvqr8CAAAAbdSURBVHjaxFdtaFtl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" alt="UserR2D2" data-type="icon fatcow-icon" {...props} />
}