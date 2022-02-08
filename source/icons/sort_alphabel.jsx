import * as React from "react"; 
	
export default function SortAlphabelIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTg3Q0Q0RUE1OTVCMTFFMkE1MkFBN0REMDVEMjYyNjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTg3Q0Q0RUI1OTVCMTFFMkE1MkFBN0REMDVEMjYyNjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1ODdDRDRFODU5NUIxMUUyQTUyQUE3REQwNUQyNjI2MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1ODdDRDRFOTU5NUIxMUUyQTUyQUE3REQwNUQyNjI2MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpxeNjcAAAYgSURBVHjavFcLbBRV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" alt="SortAlphabel" data-type="icon fatcow-icon" {...props} />
}