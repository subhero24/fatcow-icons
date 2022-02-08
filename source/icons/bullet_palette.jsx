import * as React from "react"; 
	
export default function BulletPaletteIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTFCQjlGREY1NENEMTFFMUEzQzJDM0U2QkU1NUYwNUIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTFCQjlGRTA1NENEMTFFMUEzQzJDM0U2QkU1NUYwNUIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFMUJCOUZERDU0Q0QxMUUxQTNDMkMzRTZCRTU1RjA1QiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFMUJCOUZERTU0Q0QxMUUxQTNDMkMzRTZCRTU1RjA1QiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqCAWBgAAAOCSURBVHja7FZbaBRXGP7mvrNGY7JZmwupJvEC0XUtWNMKgcQigkULDVJaFYU8SMUWr6D40IL42oJS24feSBtobZNCW6EaX3ww0KbWwiZeoru2sVmzG2dd3cvszM7M6T+bCJHSF2fBlz3Dx8wczuX7///7/3M4xhieZePxjFuFQIVAhUCFQIVAhUCFgPi0EzmOe+L3q70rO1QJh0UOPe4dQ5R9kBQV+qMUmcnHTZv78I3Tox/QWOeJiU97IZlDQBo8sPLPmsbW9oYVHVjQsALK/Dowm5W24ujJpf7B5OhFJG6NIGNyW3eeGfuZ5rFyEJAGD62aWP5KT31TuBv55AQaiwcAQ4OZ90FYT6hKA2YttBv91JfAH4OnkM4bvTs+GvvS9YYXDYhn968aaOvcUt9y+msIXV0Q36bNec01G7JUmNncppFyCvcvfw6lkMVLPUdQW+X/bFdnQ8CrCFWZZ1uawuvgxGJgqgpF02E5fkAAirYfxUcz30j7cb7jJ5xp2oeB4DtoDW/Eq2sCn7pGiB4IKL4FARiJq+AXVUNM5mDX1+D25EZwJqPYkiPOERwOsi0gs74PPtJEit1Hy+oOjI/8uNU1wgsBXl0YBG/kkD66CUwgU0l4imWBiQxTd6ahZw0I1L+4uQHPmSIKqoWgTsJJj0Ca0aDihQCy8Sis5QqtIsPVMuPJclnA3VgcVyL3hgZ+S3y7ob325Q08691Rtw3PR/dguhjAu4ECzvLflYzwQsAeiWVO2s61447DIIg8/PNVtIaaoecKGIpon1y6/mC02i9qXS809go+C9NWNUU9h2TOD4ln3goRNf3976NuKv3iutK15sS2trdkRdjtr1uKTaHk2lCz+veyRcqbNUvCsPgkqpUkHppBVDlxGEwwvBIoEOKEB5jRuhxLFi50WtbuUPdrcMz8sfZ87tjCxsVo69wMPdqPRKgPisThzvUpDGcx7NYBLwTckpqfRakofXFpcvj1FwNQhCTWbj+IkjBsA9mJITiSAp2SLlOwcGNcw3s//HWc5hhiGc8Vy13QpkxwsmMwU1dJ56xUigVegFQ1D/duTeHmlSh+HX94MprQJ9wwlpMAK5VWSrvfL0TgWHapg6eSnUllYBUdpHU7cj6iffzN8NTF2dBZ5TiM5rYaQsvs+z9Z42YuYZqgzYbOKTcBmTDP1cP/eMh03U4oPj4N/xVgALIcYdJASO/eAAAAAElFTkSuQmCC" alt="BulletPalette" data-type="icon fatcow-icon" {...props} />
}