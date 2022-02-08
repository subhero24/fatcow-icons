import * as React from "react"; 
	
export default function FruitGrapeIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUNEQjY0OTBBNzQ0MTFFMThEMDVCQUU1NTUxQkZGMDUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUNEQjY0OTFBNzQ0MTFFMThEMDVCQUU1NTUxQkZGMDUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1Q0RCNjQ4RUE3NDQxMUUxOEQwNUJBRTU1NTFCRkYwNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1Q0RCNjQ4RkE3NDQxMUUxOEQwNUJBRTU1NTFCRkYwNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlfjWOYAAAh4SURBVHjatFcJbFTX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" alt="FruitGrape" data-type="icon fatcow-icon" {...props} />
}