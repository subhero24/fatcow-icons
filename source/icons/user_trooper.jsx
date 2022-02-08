import * as React from "react"; 
	
export default function UserTrooperIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUJBODJEQkE1NDEzMTFFMTgxRTVCMzJERDdFODg5MTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUJBODJEQkI1NDEzMTFFMTgxRTVCMzJERDdFODg5MTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5QkE4MkRCODU0MTMxMUUxODFFNUIzMkREN0U4ODkxMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5QkE4MkRCOTU0MTMxMUUxODFFNUIzMkREN0U4ODkxMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoyHckAAAAZUSURBVHjaxBdbTFNn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" alt="UserTrooper" data-type="icon fatcow-icon" {...props} />
}