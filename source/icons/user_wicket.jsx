import * as React from "react"; 
	
export default function UserWicketIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTNDMkY0MUY1NDEzMTFFMUJCOEFCRTdBQ0NENjc0Q0QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTNDMkY0MjA1NDEzMTFFMUJCOEFCRTdBQ0NENjc0Q0QiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFM0MyRjQxRDU0MTMxMUUxQkI4QUJFN0FDQ0Q2NzRDRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFM0MyRjQxRTU0MTMxMUUxQkI4QUJFN0FDQ0Q2NzRDRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiWP4O4AAAdVSURBVHjaxFdrbJtn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" alt="UserWicket" data-type="icon fatcow-icon" {...props} />
}