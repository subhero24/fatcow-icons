import * as React from "react"; 
	
export default function MatchFieldIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Rjk0RkMwQjYxMDZGMTFFMzg0RkQ5N0FEMzNGOUI0NkYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Rjk0RkMwQjcxMDZGMTFFMzg0RkQ5N0FEMzNGOUI0NkYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGOTRGQzBCNDEwNkYxMUUzODRGRDk3QUQzM0Y5QjQ2RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGOTRGQzBCNTEwNkYxMUUzODRGRDk3QUQzM0Y5QjQ2RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmCfHQ8AAAU5SURBVHjapFf/TxRXEJ/9drsH8sUSNVJSwEYxFtMAUWkjINZgFC1V0fYPIKHRpk1M01htK6etP1iMTds0aaD+1IbEgGAKHGCKBBIEv2CKKU2M9GhLAUsDiHCw92W3M3u77Xns3h3cSz55u/vevPeZeTNvZhkA4BsaG5uAYUpVRQEVwjeGwLIAqtrc1tp6rKamZgFiaDzCjig9XFa2LMHG600HcHMBH4mAUHy+7R9kn0hjqqrKoHgvdzle/whf/ZEISCigvbhGftd0ZBjzyYFpKmRmpIOqaC+iPhS/YV1i4luFm+CbrmGo3Jku1vU8OlV8ru2UPDW6qfeLikeaoEljaUdjhOd5EASCYAFem6PTMU6EGud6OPR9z6/j8O7uF2FW9sObBRshOyMFpJS0hzhus7IAG6QaLs5p4DjWFMY4LFVH7qyu+OzK51VvX7vlAp7j4Ie741CSkw7xkgBFZ65eIJLWBAw1WC4qBHE2GvnB2Ghvw0+tdbUnx6bcsHl9Atz5cxZe3ZIKrJhwgo46IgGW4xFcBPBm65CjPSUSw23fOgdHJiFrXSK4pmTIemENoLuIVgSeWY3n2VgiStUt8WRm3gMefOPQZxb/jwEuIgHDvDGS8M/JCvgVRtvcpzBWAWBCgIvJAraSCx2y3+fHzRXw0eXAC+CjvfF9z/m2xyyu33G6hI7DY0EgJgvE032Snb8NvF4v9I8ugt0mYL8A2dvzgMcwHrpzT5sXTCCgsn7z0CQO4zwcaE6wTHC7cWZv/oO+2yBJIthFG4gIiSBJQN9p3DQKWJbVfYDVYjgcOH2uIRPU5hF/dX6yv3Cg5xbY4+xgt4taf6+nF+g7jevznvEBddHt/uVaU9NLCgU3gpQj/VgmALp1Caqejhic4Pf7R0O8i8z6Nz10VZUWKmpLd/GBErjZ3AHdjlLa3KWPe0KTGyWQdESKVaiYNAUxhRihsAt1RsRaROaOs+3d/Y69lpsHW4FIrNEFg5G209FOWqaFfKe5SeTotMCPLS2CCQmS2ar3tnDp3TKsCh1O+YMjuXCxYQC6z+4TLTQQ8Pi6kWW+UU8wxsKU5lRG+6YurSdajhw69Ibl5kUOp9o4OKHmX+zR+qKqVtVCk0QsaNTlNpJB2QSzi92265xTPn4wB768OaJlM+pPlOUAt6pb7ny/MNQS4orqicCLFBpLtj2ftsuVB/PgSv8YSHiRiAjqv+sbh4rdWbD/qz55debLwYllRfWELsOEEohnMO5qWwZgcWICjuY+Dyxep+U5qeCbmYba5vvgnX0C066f7SaqLaue+E9myW12uiSPPL3Y4XS6MZlINg4W/AzYBA6cH762z4h1s0bJjGGY8NkqpJDgTW4zl9bjOh7MZEl2CTC5QbxNM5YRz/OmxQXWChH2Dy1klhDw6BBoHT+eEI+ae1FIFLX6c1qHeWpdQT3BhvkB8PwxPgXJ8XaYkQHWp66F3IpLBeHujuWUdJEI+N2PXXXDv43CqjgRTcJCQnISbN5RVJ//Xu12KxJWzheKaAgs9n19vNrj8cLQ0DAkohV8DAdZW7Jg6ysFfbs+bqw2yxtUT0SDqAggJocaLh2dnJiEwbsPYO6pGxROgIyNG4AT7Sf1PyqItZ7grY4AMTN2/8ZtRMG2ysvvzExPH0YhIRBm6rz+VzQXWk9E7Xz6XCbCfyjd/cl69lttZD89EigkZ2jsan39AJo2zagnwv/dMlhjBOqJY+XluUwUZDm9ppeCzt2j3wVePS1nIJ4LG1UW9QQDsTeySpxurWjXU3Ul3P8KMABTeRBsTaKeLAAAAABJRU5ErkJggg==" alt="MatchField" data-type="icon fatcow-icon" {...props} />
}