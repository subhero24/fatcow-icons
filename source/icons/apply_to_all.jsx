import * as React from "react"; 
	
export default function ApplyToAllIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTcxNjM1NzYxMDlFMTFFM0JEOTU4OUU4NEM1MEYwNTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTcxNjM1NzcxMDlFMTFFM0JEOTU4OUU4NEM1MEYwNTUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBNzE2MzU3NDEwOUUxMUUzQkQ5NTg5RTg0QzUwRjA1NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBNzE2MzU3NTEwOUUxMUUzQkQ5NTg5RTg0QzUwRjA1NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkHtAOcAAATdSURBVHjavFddaFxFFP5m5t7dzQ2lXWih+FBxoeBq/QlKLISID7WmDTWJPyAIllBQECv1D4uERiz4IiLVB5GiDyIplGqC0mxQ2xiJ0BiLUmttIURoiBqliTHUZnfvj+fMvbvZzd6b7G6sswy7c+/MOd983zlnZgUqm/Fxf/+AEKLd8zx49EBgba1gg2yCbJ58uKurk4Z21Px1nwwMeNersW32UdxtCIAE75zbhYuXNOo17T5gkb+3pW9GYDtBfSEKgGCns7NzyOZyAf11gBDaKyzL0kPXdX0tUG7QqNCcuuM4+HL41JJ4dQAorGi0GpFOp7VN1/MqA456Azvv6ujA9WjHT5yAMpRG5CEcQFHz8z9f1Jr7EVuv5qjQXEqlnxMFoQBEIVcMpaCUpG8JJUUAQlSdbOzEISe24xLlLgqMs10euBEM+EFCE0yaaJoKQ99exk+TcwSiBio4dijObk0l0da8BXk48DjwqLEEYfSXAeAJ0qDd0+TJX+eRXB/zAdTAAAPgtWzDKdnx5PRfSN2wYWUArI+UNBQSTVs3YWJ6lsYCiEAeBoCnp7dupN/StxUsvXHzBhpLiJDNLElAsxVNUgRgZ3MKO0UKpVlTDQ+ujgEXtu1qW57nambXWQnkbaq8onIzsnSgWIKYwoEjw5pGHc3kWZIWLM9q3QgkZDu8puDu0tQV/Sw4CyIk4AGli0HUSZr4zBtf4J0XH8CHgz9i/MJvgRyrtzwVnLefvx+CAwJ+YduW2kys2P5uoiQQ9FIQbRz17x5so9LpEW0unmi/Dd177tCgqkhEnYa8jqezTaaB7fpdREvgkT7MAKfik68PwjSYDemzouuCXx9W7JpBFcxV8ILqpyXkLiIYYJpYHxlox8u6X/sMHxx6EEeOjeHcxIyWQFRRBfNE/dGePXCIBRlUVQYU5HRFTi1JQB8lFEWywPs9nfoZ0/nc4y1BVRRV3Tw4/7PZvF7DPWH465QyQrOpKAHrI3Tq8C64nHo6DnJ5G4tZG9cW8+GdnPH7bM7Wc23b0WyxhGzvlTMWbnnpU0zMLARlWYQzwHTp1PFKD+3Vd80GTX3aiZD9CVimwL622/HIWyN4+k4H6/Ozp3XZKYuBQh2QsiJPV2oc1IZpoOf4D+gfn/KlKpWUcJn0LE7ny/6OJhzNnMPY4X0v0OtsGYDCItapFgBK+rtm5wcfu8df6/pV1fX805APuam5RYxMXMGznU14T2W+//rVXVY5AOmHgpSirtsPpyAH6Ufjv+tgX57uzAaX476zM9j/0F00d/Cfkd7dcXqVYwDe3/Pz39BttUVfmWpkwDIYQBxxw4CViMEUqMyYYMhB3Xf2Txx4dDuBHMoOH2qLM4DF7r17n6LvjRGX1NWa2dwzmOEzoCFmUiESkVcI/1LEQVt008i/rlG/TP2POv+DJCnGECPncWLAWMaAvoh4hVTnQqfw5rFRDPfu3l6IATu4oy/Ue/HkSG+Im3QDtrT+smTH+qZdvBkZOD82zs7vpeE09atr/dfFbVPry339ZmOyhV2KkurBu3fpdLz7vlZd6L77ahSne9vZ+S8B47n/AgD/zdoSEUPmjsOZTOuuHRg5+XmFc9QZdMvbSjGU5Cv56NCpUOd1/ueqLUCp38RMBJqXOf8/AMQ41YLfV5c75/avAAMAV2pKO9rYzHkAAAAASUVORK5CYII=" alt="ApplyToAll" data-type="icon fatcow-icon" {...props} />
}