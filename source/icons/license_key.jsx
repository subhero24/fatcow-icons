import * as React from "react"; 
	
export default function LicenseKeyIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkQwNEEzMzNBNzU4MTFFMUE3MzJGNkM1ODQ1QkUwNEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkQwNEEzMzRBNzU4MTFFMUE3MzJGNkM1ODQ1QkUwNEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGRDA0QTMzMUE3NTgxMUUxQTczMkY2QzU4NDVCRTA0QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGRDA0QTMzMkE3NTgxMUUxQTczMkY2QzU4NDVCRTA0QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pm0lqjYAAASHSURBVHja7Ffba1xFGP/NuWXbtCE3NyRKeonpxpj4oH3wQmMRBbXBmOofIL6JEISAtVLUKtQX86Ji37SIvnmhKBZsEdle9Kmk5CEvDUIrJlkbm9Ssye6ec8bv+2b27MVYCrrkpSeZnTPfmZnfb37zfd+Zo7TW2MzLwSZftwlsOgFla++nN9JfBApjjXZKRYhFrU4+9HbueWqGTMDLvp7+esfex0ZbeoeghZVqCLimP0VlbeUPXD7z2bcj7/4+7pF9S6Di0e29u5HLHsHNsFXdsxqxNDYeq6u0tvd37DuMQOlRxmYCqTgiZnEJTlDpqCMqsR1LnqJcU9fMHVf1U5W+yRxxLanyM6VLiGNhk2ICSnNDF+GUATyFuw5+iaB7nzSL82fx6zfPAdRPOXYWmp39ZfdEkdrrVGLr0wHmPkihb4JthToJmjD3YYq6FqENAcUEEAmBgqySV9S1fwqRasbMJwdkeP+T76Dr0few+MMkDYlpK5TozyvKHg5oNWY7Ilsy/WR/LSUKRFYptjPMQIYN6waT18o/sfQiBVwzUfOeFzB74hH4N2ZlXXOnXsHQiz9CnZmEikSzRNYdO61vEBkWh58EXQ8g01MSooWlGTR1DBsWjo+13y6ypgazTMDIURQFjGIaDoFvbTWdVpdnyRRi18sLIrGRM6RSqpJ3O66e2Cbjuw6ctfK7yH03gvTTWRgtAlz5uFmwdI0CvLdkdDyzk3y13j2MQm5G7tv7h2S3zh3pkhEiKeHvPzaP05PdeGJqAd8f2obBYRMq549uJYmJIpUMSX7+aEvS3pNhuokTGgKRyFEgCSkDeBrXLn2KzgensHzxLenUdv+bWJz+HH33cDS4JgJkUIsBpdUPce35NLmDvoy226RkS/sGbDzyPzsZLTaKqlIxhyHLqcj7Hd9B7udXsZ5fRcfjJ6XkV/NYvHAIynehXU+KClycO9YMdwukdqitXJrOJVCqNTmUZqeQe9u2zxnLYCY+wEwoCjxH9q29PcTlrw4i/5d5lqJt67mTVs7AyevDR/+ADKcakuNuLYMqwSrnmIoPKI4CZRzK9dGz06tkPg2bRP/tVVKG1hs80/94/zFWnQ9o8QHlUHKJS1XDPLOPibeXUwfngVJlbsezWOEG/cJkNsU2SWRFi2l9QIsCRIBCJT12QyIs/cx1crRQCKXHVhIbYroR2zL81nupXjIhQfaN+1VsmmyMwQqUw9A4YczsSpKIOF7T4wuSrdLj19GU3iurNbYC0s+uwJN8EaFt5LQksJv3C6tsf8J1Y7sF1T7Acjgh3KAJ0x+1SZZiU0j14JCL6eOdFVvMNo9sHbfQzydbe22/++hd4NRFAedll1hFfoC+waAq1do4HsR/sKVqbHwJVrUTso84XkjFTcKj3pf/N5tjsMoOzAT00lqcvTqTH+kddgwB3bgDIBO4MpMHYzKSeYsAu95/KjjemVIPN/o7hXPLtXV9YeJU8SVq/qKsCm1Uum3tNfggzImB4hTzXCenYj6f8REJaNCJtPaUyMelNUtmk78Lbn+cbjaBvwUYAICPKM7v3cvSAAAAAElFTkSuQmCC" alt="LicenseKey" data-type="icon fatcow-icon" {...props} />
}