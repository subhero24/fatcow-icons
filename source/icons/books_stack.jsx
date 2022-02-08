import * as React from "react"; 
	
export default function BooksStackIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDg5Q0U5N0NBNzNDMTFFMUI4NUFGQThDN0ZDOEM0NDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDg5Q0U5N0RBNzNDMTFFMUI4NUFGQThDN0ZDOEM0NDgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0ODlDRTk3QUE3M0MxMUUxQjg1QUZBOEM3RkM4QzQ0OCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0ODlDRTk3QkE3M0MxMUUxQjg1QUZBOEM3RkM4QzQ0OCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiT3HB8AAAQ0SURBVHjatJfLixRXFMbPqap2RkUSBgeRUTFmoZABQReGLAUX3TOImmDIwoUJ5B9wpwYRHyC4cKkQTEBFUPHB6AguxI2LgAqBrGJA8BlCwkSYme6uug/PObeqpx+3qroCqaaYO1117/nu9zvnVDVaawERYcgj2n7k/u3YhlOJtkBTwUK1g0NFAcAI6nvPTjf2RBXnL9cYTj06uBrGPl3Zd2lYKSjn1iMvpni9qgJGkQJ9fuFPYAeQPoZs0Ma5kXfYrovswAhZsMqFHq0qADnYnaN1MPTPlydn4fiBL2DLxMckpGCWMSI0E7KsFsGBs/ednoIc8PLWtJhSRsZBgLJongO8aoAWNq4fh8nJT0BrA7QUfL99NXx77gH8dmZqTVSdt2+rtpD55kPPYfKzTcC2WTqbJCTbcjQUb2UFnuyUTxiedy1EGKGsb8YgAhhVnKT2lAjo4b33xCzM/NAApUvyvY93GAaw7+QMXNw9Dl9ffwshi6FFMFUQFfFeiA3Uj812eDeOz+Y6kMf7u21jpMnNSFi8RWglCNjnwP/Gu0X4IhI/ffUd1JATFmBRHOgVMMrb3nE+4w3C2xhbqcN5eSt37e43a2H68htyia4ndiAH0BgNNw/Xxf59p2bg1tFpslFXahI+3i0q2Rr9bVx5BwGXMQVgAQNVwLttk9yLv85BQDfFSsGPT/+BEMqfFdILaEkvb3IgCl375UuMwCuAv2hS1vCmedzmZsOLIAr1vOLDtLezcz7ezcSQ7SjrgnGlPB/bgSSUqFyffCNzatOYS05R4JiEKdNb4447UkALy9Id+nkb+U5JDzFcpZQjxucASnbGxqlrUsSY7ubgN/ZPFCL46tobEeHlrZzdWmwkDLQhdgoGBNBdrXTXPIHZKY3U98srgdKFAubwjm0KaQl1S3sQSA6QXSpzgMbSeumz86eXotp6ms9ohLCKao/v9fJOloJ1UPscALHdUh+ADjvOZGb/8OCGQgcal15LEnp5t5cyPhPd1uCvgsXEOgfow2KYIX+/6+dXwrD/kcvB2HHmn8ebK8sxQHdaFuAeboMIYrdrvrZI7JRUBEpphTa/AzJvk8O7rV0fwSDoXIl10OktPUk4L0FRECzErifYAAALm5B7OrCAPN6IASz+8azzdZNuSubnHvP0PgcYgePoxhYCKBaQPZ4KedOCv5yo17lBZoVD599cED3vA1wexmKnK5p09aEEpHMKeL+gc65rSoun9PYBlVrInVD18ix/0S7lzcH/Gnjx7P4n1qazoIyxwqNwCN7eN98eXqprN6py/FLehQLY+2yBbFxNQjnvYgdoYmwcP7ZRxmEEWOEnVxnvIgHWquT1+9+frJOlKPD750+h8PeW52hK5tv5Sj+10l9GH9F4I51j/HIL//2w6e4Zwb9VBNRovIJ/tlUGP3jwK+lCVxIWHh8EGACzx+Zcq+Rz3QAAAABJRU5ErkJggg==" alt="BooksStack" data-type="icon fatcow-icon" {...props} />
}