import * as React from "react"; 
	
export default function PowerSupplyIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUIxNTc4NUE1OEZEMTFFMkFDRTNEOEI0MDIwNDY4QUUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUIxNTc4NUI1OEZEMTFFMkFDRTNEOEI0MDIwNDY4QUUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFQjE1Nzg1ODU4RkQxMUUyQUNFM0Q4QjQwMjA0NjhBRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFQjE1Nzg1OTU4RkQxMUUyQUNFM0Q4QjQwMjA0NjhBRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkWSfkQAAAXXSURBVHja3FdpbFRV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" alt="PowerSupply" data-type="icon fatcow-icon" {...props} />
}