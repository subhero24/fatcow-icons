import * as React from "react"; 
	
export default function BulletLightningIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0NBODZEMUY1NENEMTFFMTkyREJFRTI2QjM3QTY1QTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0NBODZEMjA1NENEMTFFMTkyREJFRTI2QjM3QTY1QTYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3Q0E4NkQxRDU0Q0QxMUUxOTJEQkVFMjZCMzdBNjVBNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3Q0E4NkQxRTU0Q0QxMUUxOTJEQkVFMjZCMzdBNjVBNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsXDrgcAAANySURBVHja7FZbSBRRGP7OzM7O7roW2yay9tAFulBEF7stFUEvlRUV0eUxeqnoAt3r1cB6qSjoIaggCQLpBhWUhaaFkpFpRJaXVbNcUVdbl3VnZ9yZ/rOOFUIX8IAvDns47Jn/nO/7b98ZZlkWRvORMMrPGIExAmMExgiMOgHHSA9gjKWnigt5q/xepdQyU4DF/WLpH7jUs0E7SZbJZQnTd99R6Y0uhMCQI5qWXOkProJ/8RboXcX20fyeSUFy+mFabjTfvYHapuhpWhROQHE6zKVqVoDAK6C13SWXbQKSA5lzryD86Cii/XrTjrNlD9KsBNeAkqFIC11ZU2FEa/g/cs0DyC6ogW2IN99ArF1D0cvWfLLtpqEJq4Ghc9xeKeBwepHQQmCSiyedZhWS6kVPRTXav2ul5+/VvSLbGA1TJAF27eCiXCUzCwOJVjDZZYefDs+YhmRHCWLhFHZdfM1zHxnKvUgCjhyfM+jJmggz0Zj2mlhQAPjQ0Pn+G6oaIpe/RRJfyTZuV+Yv9iP9IqL2cpcXrCiau271BrdvAKlkZ7oFGVVXd10XIp8iFBCJZ4SvUl1I6XZk1I5z9j1VRURAcTtZrjpehZXqG0xB+jERCG5CznJbKxiXAInakSH08DY6w/ESMnILIeCUpYA6zkJKUyjACizTJDIGBvqqB6PB8QmcB7ul5CNCrdHyvPzXRzhLEQRkyBZCTysJ1CIQE6ahY8b2YzD6amEN9FBU5LQiNhdXI/Ql+nJ9ftVh2tdOIyGCgDHvUHkuzT7u7tGNU5bt3TnrjORdAPSWQVbc0GP9aCl9i0eV4bOnCj8VkR0vyF4uSCII8Mputg91bV7qv+SbMR9WXznpkAd6NIHGJ5UoftddcKrw8y2y6bC1ICWqDfWh3t4azA54FHP2hJlBWEYjea6j4XEZimsi507crC+0wx4XLUQ/a2HPmpzjLv8EMFVDMhJD/cPnOHK9fkfph17SZ4SHg4sm4PJlSPuy5+VCj7Sh7v5jnLzZxMHf0DsuDonh4CIJsKv7Zy6jdnP1d3egoexF15nbTQee1fZU2TlPDldA0QSUWZM8xyTq97aa9z3LT9dsobU22/M/ggsjsGR6ZqZXZWuNlBkn8I201GJfu8bfwEXdBXwaT2MyDadd6V02+L/3CyLAgT2/6YLxv/t/CDAAaKRML5EDhPAAAAAASUVORK5CYII=" alt="BulletLightning" data-type="icon fatcow-icon" {...props} />
}