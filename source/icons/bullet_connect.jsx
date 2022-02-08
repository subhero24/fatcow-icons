import * as React from "react"; 
	
export default function BulletConnectIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjUzQ0JFQTU1NENEMTFFMTk3QjlDOUZENTUwQzM2OEQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjUzQ0JFQTY1NENEMTFFMTk3QjlDOUZENTUwQzM2OEQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCNTNDQkVBMzU0Q0QxMUUxOTdCOUM5RkQ1NTBDMzY4RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCNTNDQkVBNDU0Q0QxMUUxOTdCOUM5RkQ1NTBDMzY4RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pkqf52EAAAOnSURBVHja7FdbaBRnFP5mdnc2skhjEg1qEjc1XRHvFyQYTbVFaqJQkYSAbxUSUBA06ouEaLTqgzX2xWwwMYKlQpuqqZcVUxtBIkoQqXnRVmWXaLzt1d3Vzdz275lkVrLp9rKTal7yw2GY4Z/5vvOd75x/l2OMYSwXjzFe4wTGCYwTGCcw5gTM6WzmOC6d7UJzc7PI8zxqamqsdC99SAUEp9MpOmbPQVZOLhobG0Xt2fsiIKxqcLFSCh1EaHY2ibMI3Of1wuf3J/bZRl2CVOCfNrjEhurVzyQZ6h75srgt7yFmEPgrrw+BQAhvo0HU1u4sfl8mtCmKgoevM6b9HsrI316xwn2sz4Gw7wVCwQAGhsBLaV8/xZuUX9B+D/zXGJl9Sf1FdjfA2KJd7aypl7Fv7jB2/KbXvaTuCnMePai9sJIib1j9hZMnW9mptrZEuQwrMCj9oS3rccMDnNhdgZbT7TCbgNemSfaqzxb2nQ4vhp75K70DhNaWFrFwpgMTM7PeGdMoARuLM4RiQExS8atHxbEdlfjuzE+wmHjErNkF5SsXPS3d53r8LvNWAi9ywOfzkTED0BvaZpSARRsJEYlBIg9IskxKSNi/tQI/tp8lJTgMWD7KK14278nyvVfEH9qaxKJPHPBTRwwaMxLEjtra4lGZUMsgKsahqEMhE5HbTwawa/NGXDj/M8w0gFTrpPy5s4vcjZ6PEfW/RDiFMY0TIAZhnYCsk9A64rfnA6je9CU6XZcgmEywZuUW2guneb7uzYQa9WL7ELg74Y1RtCGHiKhCilOow0KRcd8bQ+XGctzodA16IjM3354zdXLfmciSkcY0XgIFpkEPKCoj+ePJISvw+EWsKVuLO12dsJIS2VPzCyzZU/rXHLz6+H8ZRF9NeYDuruuIxXkQD8o+nhxUjhcREUtXfY7e7i4QT+TmFUznwJLGMpfOHxP9NBSO00FTsWEDooGXqPq+H/NLloOLK9pU++uoJTOazBY86ukGx5vwS91azf1/UASNngU2TWYftVPQH8bhEhn1PT0oWrqM5FRTOIWHu+cmrtWvK9NBk8ayEQIWhWrcceEiFiyYh3DoLdapt3DtHg8zU6BLPIwBT+DlibYL6uCS0RIIR45+K5aVfYFzHR1QyfVxOgYPHGjQspP/5rXoSOeP5jieYLfbu8+eO79ib92eBKgG4NWvqZY8MuukpNJUYCJdZlBkUAR00H8E+NdvpklAU2yC3r4xo6DD158CDABvfeS8HcmQfwAAAABJRU5ErkJggg==" alt="BulletConnect" data-type="icon fatcow-icon" {...props} />
}