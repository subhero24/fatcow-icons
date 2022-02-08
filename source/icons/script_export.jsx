import * as React from "react"; 
	
export default function ScriptExportIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REU3NDVCMDc1OEZGMTFFMkIyMUU5QkUyRDI3QkEzQ0YiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REU3NDVCMDg1OEZGMTFFMkIyMUU5QkUyRDI3QkEzQ0YiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpERTc0NUIwNTU4RkYxMUUyQjIxRTlCRTJEMjdCQTNDRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpERTc0NUIwNjU4RkYxMUUyQjIxRTlCRTJEMjdCQTNDRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkVGWfUAAATKSURBVHjazFdtaFtVGH7P/cptkpomXT+ylqponXY4WS0qCqLYInNtYWX7If4pqH/mjylTkemcY1s6pz8UFMQ/ygStFHE2MvFjK2gr6JjDWlYHm6vUdnNzSz/S5N7cnHt8z8nNSGqS3nSFeuGQc+8597zPed7nfe4JYYzBal5k1QG4mCOHXhmMmCC/SG0GbJlBJImAis2jSJZixrdNH9gaxcf2Uu8qgZePHNkxOMZW4po3LdZz+GcW3PMVC3Rur1kSeGj7uw91f/gTW6lr3RvH2UzSYl+OX2TVuz4f5BtUSgBQ0/7anU/d0yRu0rYNNiufet4UWYJfpmah1q/BpYQBTaEKAE1/FIcqSgHQTVlv77qjHtKUgbU4OnEJAufxIEPn/oHJWQOeHPgVFNQCgtLwsacUAK3jthqdd1Ji94sAuGRD4kBlgO/OXobpjyNPT4wen3DejnFiiwEggd6DbdlNWwhgOdVKriEAiKcoKJXBP1MAY476LWyJYgBkRuTqR25dI24oLb/8xMYxuF/LhDiFGkiMfHYau5dyy68oAAjU3BvyahkBLmP7EibfIxN4/JOT0H9qCqpUOsWXWpw8qVj9M4+v7e61AUikbawAdq3RJZrNzYo56kcG+k9MAjvUDQtMbXB27g4AZSQQ9GmQStO8AOkSjQrRENBw57oio/Nllk9YFFKRTpBfinL6tbxAxVJgq3pL4w06TM4ZQF2mQJScxCD0QpQXv6BhS2sjzKfSEDMsSPd1YsCoSQ92eXhxlQRQqamiYyIDLKfslyp/xrBi3tma9+zc1QXgH72JmYQAoZKome7LgCgEgAR7+za2NgYcB2Qlgy4e42kYvzyfZxfZOZZNBRgL01GlHTVn9z5W0IgUUlV3f8gxSU4/Kaf8cLIt3iEiPM+enTPGmYgZKWccfAUB4CZCrQ0BYb/Udg8go3wJ/ZUIDxAMooekaOY7wj/Hfl2Btfu+BSPSeV8xDSjgC3as8XrwRQoWLiARdynIzmve+w1HIvrdGxrg9c2348kHwKvJcHPkGA/+IA5xX1gozAA68UZkIJa0MnVN3HguAhDFYsP47g7BQHPID+T5L+Ct7hZxv+7QUDb4eccRC4pQtmU1XI0umOQe4EYDTpVSIVoKRtp5FMrQ4kOp3dJ3DJIH8oMXMiIS3PLcjVw4jQEdZgzL3WePZcRlO4aUwrRVOClQ8bflzSGI79/8n+CFNEBQsTrJsUkZDYW4UB9nykLbFnaMfV3RBBAVDyNX9mwqGDwLQAvv/9rkdskFZ9p8ISpyJ6RL3NWehgL74ZkHRFC+TkBX4TzWvEKYgTP+KhQ8C8BrWDQ189om7XqO1z0fnYDTf8fhpmCFYKHaq8LA6AWQFmI/4vB8oeBZAArEr4wcPjn5cNf6ehSeLXJZjvFoSHNvWxO8PfwHvNreDFzA3A8GfpsG+/eRD4oFzwIw4/37du8K1Q7rHhnurKsUzLs9gnBH4/W/vt4P2+4KwyyWQLiyAnZEx2D0zNnv546+N4zTjJLmha2uqmfnE/KG9giqWLbLOPPxFYjDhJQrmAtnPo29/2wf9vgZcK7Yitk38JwMYWz1Tv96L075VWwXsc06J6GSTsorzuMEV1YAACcx6VBP4f98rfq/438FGAAXRcUONga9EwAAAABJRU5ErkJggg==" alt="ScriptExport" data-type="icon fatcow-icon" {...props} />
}