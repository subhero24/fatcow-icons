import * as React from "react"; 
	
export default function OrthodoxChurchIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDgwNzNFOEU1NThEMTFFMUI3OEY5QkIwNDE2RDQ0N0UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDgwNzNFOEY1NThEMTFFMUI3OEY5QkIwNDE2RDQ0N0UiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0ODA3M0U4QzU1OEQxMUUxQjc4RjlCQjA0MTZENDQ3RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0ODA3M0U4RDU1OEQxMUUxQjc4RjlCQjA0MTZENDQ3RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ppi5FdgAAAcHSURBVHjavFdpbBVV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" alt="OrthodoxChurch" data-type="icon fatcow-icon" {...props} />
}