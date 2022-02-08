import * as React from "react"; 
	
export default function SlideshowFullScreenIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTAzNTgzN0M1OTVEMTFFMjgwNjk4OEU5Q0E3OEUzNEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTAzNTgzN0Q1OTVEMTFFMjgwNjk4OEU5Q0E3OEUzNEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MDM1ODM3QTU5NUQxMUUyODA2OTg4RTlDQTc4RTM0QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MDM1ODM3QjU5NUQxMUUyODA2OTg4RTlDQTc4RTM0QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ptr+XNQAAAbLSURBVHjaxFd9bBRV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" alt="SlideshowFullScreen" data-type="icon fatcow-icon" {...props} />
}