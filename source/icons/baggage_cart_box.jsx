import * as React from "react"; 
	
export default function BaggageCartBoxIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTFDMjBBQkQ1NTlEMTFFMUI3NkZCMjMwNEY4NDM4NjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTFDMjBBQkU1NTlEMTFFMUI3NkZCMjMwNEY4NDM4NjYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MUMyMEFCQjU1OUQxMUUxQjc2RkIyMzA0Rjg0Mzg2NiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MUMyMEFCQzU1OUQxMUUxQjc2RkIyMzA0Rjg0Mzg2NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Prh6xkEAAAXDSURBVHja1FYJbBRVGP5mdnZ2t/e55YxKwqURbThrYmEp7iFVDg0QRQzaUgxSKod4ACJQKBTSbhGLHJXU0mKgCIECPaQRE9oipdICramkJShIW4KkFR223fF/r7tYjoVSIoRJ/rw3M2/m+/7vP94TVFXF43TJh+b1ZozlRwKelxCmtlysUtn4sElw8D/rS9SydRF8fJgkCLybeqW2WC1fb1JPbBjDR3bPnj8oCbET4MqIGRmoL1wJvd4HX+wsgt7gg3OFqzAiLgPs/f+lBIF3Vxsrc9WKjWa1cku0+s5IqGezJ6sxJqjV28arJzfZ1Maq3Spb11USwl3AlSHT1uLi8e0QBBEajQStpEXy1zuxeOZULN+YhQXTX4PDocAY/gZ+ypyHsakXdfTtdU//nDNnjsLKXhAEiKKIlJQUnegJfPCbibj08w6IkgSBTKWVrXDiw9gpWEbgi2e9hTUZuZD1BjRWfYshUxPBvvOghBwfH69ERUXBZDJxczqd7Lm3cDt4DyV8yiJcriloF0gQO8hFzDUiKSFh5ZfZWDJ7Gj5fn4lP3psCR6sDQf2icCJnBSlxoaMSHNxsNiMvLw/p6ek2euYgu0JWJ9wK/vzr83G17ihUDxHiJMR2CdmdhggttWdh0azJaGtrg/9TL6AyNxm2FB4OzI5PUKyWl5Cfn4+0tLRIevQ7WYuLxF9uBPnABz2VQRNmo+XCSYjkNYuVk8xTq2Zx5GVEa9ncqTq5rIxcYO/nULN7NXY43sVYiwkF/4HXkTV0zBPmhnx4QXclfGIcrl06BQ3Ju9y+HbJOz+eiRkNREG8zMAIMGC6iNGfrtbKE0zuTkKXEwmaOIvACj+Bujb3J+hTPDarsM2oc2ig3WMYvSdqMZR/FUpY7uLSeVOAKsawm00oizhbvQU5rLF6xmvB9wSECt3sEZ5eGTIqd+f7mU0JE35712xHS9xnyCIiKHIpPV2zC6MjBbjQO6C4h5q2GqUMhEDUCZFmDs4d3E/gMAh/dKXB3CCRvg9YWbRmFbGJeW7gLWq2GJ2Hi4rh2YFHkoWDGZdZqodPrsWTVVgqVTB1Sxq9FuchxuMEPdgrcrYChtLQ0NzQ0eIbVYkbuL0HoXpcJ44BBFA61vRo6ek4kZFmHj5duQHJiPPe+5kBOO7jN1GnPOyrwN9kfaXZ7JGPOfsJ+VpOXTd5pqRFpSQGJm4bmss6AhZ+tR/LKuVyZM/uzbgJnZekqtXuCuwlcdy2uY8zZT9jPslvjUL3vG9p4JAKVeIx1RGjholSkrplPZIBTe7ch+2bPx7nKs6Uz4O4QsIul+T+sOZSVle0xhoRMt1kpHLXB6FG7FU+GD4NepyGT8OrYF8lLASd3bXGB30i4MQkJCQcZgZKSkrWsyXSGgNRh7laCx5DifWRi9Mv4rkiL9MQC7P3hHC99VnXjRz6BsAGzMD56FPIP5nFwardFrN0WFhbe124o3XJ/g0Rqakqkl5fXkcyMr65ZrTav1Ylv01OVt47S0jJkZmxsMUhtPmn2VA5usVh4u7Xb7SNcbfbBtmOyHmFhYdnkVUSvXr1x7NgxOK47qNNpMWzYUJw//xv2799XEBMTY2a7W/5d2m1XTkTs42ZZliOGDx+O6jPV8Pb2QVBwMB+rz9RwElSSZqvVymXvCvi9jmT8Hdtg9AYv+Pn54ejRH/moNxh4Cw4MDERRURGFK7VL4HfKgVtafXsD8vf35+15wsRJREilvt++DzQ3NyMpKanL4PciwDKuorz8eHi//gNw+fJV13YrIjQ0AOXl5ZAkqYLWnO8qeMc+cEdyiqJUNDQ0Tvf19cXAgf0R4O+LgAA/VFZWori4GE1NTZNaW1vrae21rp58hbu805IZdTrd00ajcR1J/qz7QEljVUNDwzwieJrWNN5P2d0PAXaxY1UIWTcyX5dirGs2s/2DrIlMeZCzv9CJNUwJg4uM4MoNxbWJOfC4X/8KMADqhHCNzPn5UAAAAABJRU5ErkJggg==" alt="BaggageCartBox" data-type="icon fatcow-icon" {...props} />
}