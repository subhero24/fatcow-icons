import * as React from "react"; 
	
export default function BlueprintsIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkY2RkQ3QUVBNzNDMTFFMTg4RDFCRTU3NzZCRkFDODAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkY2RkQ3QUZBNzNDMTFFMTg4RDFCRTU3NzZCRkFDODAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyRjZGRDdBQ0E3M0MxMUUxODhEMUJFNTc3NkJGQUM4MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyRjZGRDdBREE3M0MxMUUxODhEMUJFNTc3NkJGQUM4MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnQfXHQAAAaNSURBVHjapFdpbBVV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" alt="Blueprints" data-type="icon fatcow-icon" {...props} />
}