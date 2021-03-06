import * as React from "react"; 
	
export default function FormattingDublicateValueIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjRCMjdBMUY2OTlEMTFFM0I2QUNGRUQxOUQ3NTcwRjgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjRCMjdBMjA2OTlEMTFFM0I2QUNGRUQxOUQ3NTcwRjgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2NEIyN0ExRDY5OUQxMUUzQjZBQ0ZFRDE5RDc1NzBGOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2NEIyN0ExRTY5OUQxMUUzQjZBQ0ZFRDE5RDc1NzBGOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Por9PtYAAASeSURBVHjaxFdLaF1FGP7+mbkPbuJrE12I0m2TunDrLo0PqEixRaFKBd0EjAWhD1Bo6dalDxBctbRQjYYuEruwVSjWpaAkCkIRSguurGiapu05M/7/zHnMnHPvbbOwDpkzQ+7878c3QwDMY8dXzm7ktOtObuEc6kH+rxqu+owZd6Eh/rGjFQbarfxxbNdu+d8DDx792t3vITJFtuFPXyyX8eNfoq1LtDWKsPTdKvbOzcCJdao2zTWsdDZMJsHShVW8PDuDzLqGVwlPPwwUMvuiAFUHZMOTCh+SE2YEzRy1Bj47fADdXh/GGD+10TC6XDW7nrBz/qBXgL3sV4qk11sq92SQKufjVynAG/8/MZsJ3vrgwzrArh3n0gOBRvtVKRHmqnOO0pQxiASKpaoQWuQTWyefASx7wHvNjU4+x2dYLksVzoNAK9YWWose1tXGVgqU4+y3q951VJopljOjHZdfx6+X+8gdpfEcpoe4n2O3A5v4CqeAbCO4xevuvBFP7Z5JPVCOvTtnfNwq+bJ2gNXfCHueeTT4b5wCroyjxZc/XMGeuSc526LYRx5IFCgPSKxyGyUhe0CyJM+YS3arILFpEsQMXREHJTRZyOlc+No6CYniJEw9oAseFLlTPOJEuL2J+eWX0OsSOpz1WpuiGsJeJnQP72//hM+ygGyTQ+G3tYGNJtVSQOlgIEUh8HXvbrMrM3z6/NJoD7giEzMduqG9zRUQeDgVlaEao0CXzSVVV4EwEqV0vsk+vcmyVbPJtktBgs45oO0mekxrRUKhgXNtKlPR8Vi8sBa0jqqAOpPYll3H4qVbW6qCjt3A4vmrcHfWkyqwvD304nQl08TG7Ht2OqlRFH3gDH7Cq3OPIx+R+Bhi1ecsfN8s02QY0glrQtPkJpXgEHVC6e35OowLSVoq1xTsm0yEBZSte1rfHRN8odE5QK4BndLDXEhjw8vRhXfQEyzodEIFcP/XVSVo79X97x7yfIglh9U1eI5JQumCLsFu8qVEKjSg4x9/1Mb6aC/W2jzwIU4mX4YRFjTD264Ck+oY4JhnZ+CZZeOhwJeYnJdQme7A81PeKBqZtEkVnP5mrUBEijrhAFNrr+HcaoEFd78Q+SqYYiw45U5zQ9qoOyHC3WDhhRFV8MZz0/5A3IjE+8s/E14psWAcDqDGgi8uXcH+2Sd8769bfRSCoVVg21WgSizIt4AFEi6hQciJVhWoJhjFyrv2BcWJcO6E8yv3iAVCyPhRXW4aPGOZaRWUGR93NW/G1rFA8KMENxfxVENvRBUWpB5VxaywwKkx/a+BBUzTRagKi3YfoGFVcOL8L8nFXqpAdScxkf2JM4IF9h6rQHHjsjdw4vtr7Lz1qgrKy+Obc9uTjjTVf2957B3+5MVrW773n7x4dezvIlNkm6ZDm+7yimb/YKvDo2DZIRthbSVhnBhqqFuDWm8vHEC/woLoTSBvBO3TFUcOHyxo8tSIxohlTv2PT7MQggmD9YeOnZuU51Lz1krRhwgj7IlfPwX6Ufp8iy2Xx6nI/Ls4xi81bOP5yAju/8UQva7z/L24+WNC2gDu7+Duhhv/CjAAsGIxmlf8uzoAAAAASUVORK5CYII=" alt="FormattingDublicateValue" data-type="icon fatcow-icon" {...props} />
}