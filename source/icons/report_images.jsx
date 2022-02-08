import * as React from "react"; 
	
export default function ReportImagesIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTg2OTJGNDk1OEZGMTFFMjkwMDZFQjZDRTc3QkI2MDAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTg2OTJGNEE1OEZGMTFFMjkwMDZFQjZDRTc3QkI2MDAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5ODY5MkY0NzU4RkYxMUUyOTAwNkVCNkNFNzdCQjYwMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5ODY5MkY0ODU4RkYxMUUyOTAwNkVCNkNFNzdCQjYwMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pos+cPEAAAdlSURBVHjatFdrbBRV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" alt="ReportImages" data-type="icon fatcow-icon" {...props} />
}