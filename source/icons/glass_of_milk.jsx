import * as React from "react"; 
	
export default function GlassOfMilkIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzlGQkJBMkU1OEY5MTFFMkE5MDRFOTY1NkQxNDE4OUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzlGQkJBMkY1OEY5MTFFMkE5MDRFOTY1NkQxNDE4OUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOUZCQkEyQzU4RjkxMUUyQTkwNEU5NjU2RDE0MTg5RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOUZCQkEyRDU4RjkxMUUyQTkwNEU5NjU2RDE0MTg5RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmOlQOwAAAPvSURBVHjaxFdLi1xFFP6q7qtvv8bpzGReNiSTYTYSXARcKBJ0mYWCBLJyoyvBhUv/gGsFJbusgkgQhGyyVMSNBLIQNzEOITq0MxNi+jHd911VnqruGTtJz+2euQOp5nTd211V56tzvjp1DlNKYVJjjB0+Xv/+9vrcfOPjiu9fKXne667jwLMdlFzHjIuSBHGWIUkzRHH0WxCGdzrtpzc+ufreQ5p/qGCSLpYDgH1x4+bmarP5+8bKsnN++SzqFR81v4S81otC7PdjPNp7jK2d3XR3+++Ln3/04YOh/hd12TlruQsrq/evXX4TPu201Qmwsx/j3yCBa3GURsI5QywkEpIok0ipLzke3nptE5c2zjk3fxL3aS2NOp6kJA9AWSMOBcevD3bJIgoVx0LZ4ZAuTVMcFuNwYCEh84eJRJAJhCStboCtJz1cXFs4MHv5JAAcPbnhW3hncxlRKtEJYuoTOJw9M1CrcAkY4xyNqo853yOO8HG/O0cpyQMATgR71A7x15MumvNVLFQ8LNd9Ishzphp77kcpdrsDbLcDNM/UzRp5LReAIaMhVoo/9tr4kxaz6AebLODQs96kYzHzngqFRJIIIJXS9Npt09pUAHqxkm2h2ahgrV4mQlqwLT5xbEZjY9L8Ty8wFiCvFQMgyX9L5NMLjTIk7c58FO2O2A416egOubB+poaNxTr6iaI1CgDQc2seRxhnyIR80TfPDx5fmKxU82wDupALdPPNQqBIJ5DR7gWZeujeZ1FYmg/kLtfmOUiPA4CUPG13TXB5pV6B57rwKBbktYziQHd/gE6vjyodRxSxgKTJ+sinFGiCMDZx33Vsw3gNSggd+cgqUkCk+l27KoMwVhKocd9Yq5ALlGJG8VAOTKrMt37X51yLIqSKoiMnkUwNf1PTjyGfDkDhuO0w9pwGAHl8/f+Dl9MoOIsFIE8OwFiAFXVBAQvMMGYqgCI+KEzCId8LAMBLJuEs2Pm0y1gVIIFU8hQ4UOQUnAYJT2oAwx/tP1YUgCzigqKBiKEQB07lGGJ02bAZ7vbxecPKqmAk1Io7gwCOrfNAEj4czqk/uAX56KY0z3QjWvSfRdmQHt8JgkJZcfrt119elZ9+dmuu5Vvnzi7iwsoilhrzJjO2KDER0iKFElxyCCYRRlQ7DAbYa/ew026jF0biu2++uqbXOtJaObWhTmeWSNYuvX154933P7iyuPrqG361un54vth4N8wXgn7/4ePW9t0fb/9w594vP2/RHy2SPV0ZHbs41QUPSYWkSlLXOeqozuM5QSMi2dflhK5TSAY6nTyqOGWzlOc63yTxRoDsHGbpxbKRQl0Limnl+X8CDAAJabzjX2EyXgAAAABJRU5ErkJggg==" alt="GlassOfMilk" data-type="icon fatcow-icon" {...props} />
}