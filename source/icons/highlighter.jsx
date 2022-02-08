import * as React from "react"; 
	
export default function HighlighterIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjA1OENCNkVBNzQ1MTFFMTgwNjNFNjM2MTk5Mzc1MUIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjA1OENCNkZBNzQ1MTFFMTgwNjNFNjM2MTk5Mzc1MUIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCMDU4Q0I2Q0E3NDUxMUUxODA2M0U2MzYxOTkzNzUxQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCMDU4Q0I2REE3NDUxMUUxODA2M0U2MzYxOTkzNzUxQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoUyZsAAAAM5SURBVHjavJdNSBRhGMf/szuOpVkJZVB6sEtfhpcowr7AwI/QzdIgMYkudVCRCLtGBJG3KIWEbtEhVksiUklLzTrlIQSTUikr3XVdd3dm1dXdfXpm3Mq1XHd1xhf+h50Z+P2fj/fd5xWICIIgwOAlPXgLHwWBIAFZ+9KaM7eMFPNzP1QDRsPrOkFKoJwGvenU59lBda9BLSPic34nGm1Agw86L1CQvtMnz0nqcSRSh8NMtxuhgpNEI+H3O+G7mFWFeHM1huSrsM90Yiboh8lMMJu0b9aJxsIrEW+qxrB8HaMzTZgOBCAw2GRmzRsQjCiBlnavv4r8wSH67C6mTpuZWkdBrWOgZ4Og2qda+g+xkvU2INV3MTx4hWv+jb54zoXB2yf+wI+yUtXv9TSgRR4kK93jLh/0FlK3XfwLd/wHri6dDKg1J89cKQ14ttHEbAPdbQe9soHabBHgOhnQ4ArXPMBp73efoC67mQaUCqp/A+pwRoDrYCC84bjmXbb5tLdw2j8q2XQnEnyVBqS6LvWQKSM/qd1eEt5wnPZl4aswEDrhyjjtw9zt/8Jro4Gv0IBWcy3tHLkKV2secatFWjEaCDVcZajmJUsdMtHBYzQQDl90wsUceYwGIsMdK4RHaUCq6zYIHoUB6WEvaIoqjIEvY0DKzTnLr8tZvNXkEv3hvExLwS0Wi+9w1kHk58zBhssYD1h5qAuo/+AQeYr40A3UFOEYfzvMsrNm9TIgFRUV+fLyCyHGmZGRuQulx5OB9TzFcIxxkn7wpQwkqmWZdLvgYU1NubA9LRk3csuRsBHo7dEPvpSBOO4MyG43FEWG4pX5lw+bt4q4mXMJ1wr0g0Mbixel/7TljC1jfybcHL2ieBHgOc7EE6R/WsHL9ie6whcbkLKPnPft2ZvB8AnIMkcvO0OXFgGNTVbd4QsNiN3jB6xCwnvcKhCQkroJXu8kGhub8vjdHEth/dAbvvAcSGr7uZse9W+ghj6Q5VTp7/29k5WiTa8r3OfRZiB+1DEGl6zA5cS75hePa/jZV0MiXrSE0OVUjTBdzQTLzRpjOY2GLzSgpjeRxXcW3nPAtHZzXYu1BrfjiOuXAAMAMqGXwcPlmicAAAAASUVORK5CYII=" alt="Highlighter" data-type="icon fatcow-icon" {...props} />
}