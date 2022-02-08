import * as React from "react"; 
	
export default function SortIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzJENkFEM0E1OTVCMTFFMkEzMjVFOEJERjYxNTFBMDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzJENkFEM0I1OTVCMTFFMkEzMjVFOEJERjYxNTFBMDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozMkQ2QUQzODU5NUIxMUUyQTMyNUU4QkRGNjE1MUEwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozMkQ2QUQzOTU5NUIxMUUyQTMyNUU4QkRGNjE1MUEwMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pq0rJkoAAAMkSURBVHjazFdbSFRBGP5nzlk2BS+ru+pDklGBdMEoDB/Mgt4t8DV6KHyLXiQICaWbRLgPLT1VJzDzKVpLzKcwd5Nok+xqZSGuFKWu7roamumeaf6zc5a9qql7bOBj/zP/zHzf/PPvXABWX2RHS2cXAm0wuMjNt53trr4BhkDbSBGSXWl3dvX0M710v3jP7IrTiT4jyO+3dbg1Yu9okA39CGg21qHvX0UQ3ahrtFuKS3bcAkpr+HgALLGxyusL8nLg+NEqGA/OwmRgVmtmtWRCQU4m3HvkhnF/ECghSZkI1qvqg2/er7X2C3WBiICTp89Zy8orfVUHdsHe0pJlVU9MzcHk9CwQGiZiKoP87Eyw5mYs2/fNZy+4Xw7A275e250bVycwceSdZeWKTj4yGoT5hdCycaMSjYSPSQT8v+bAPzO3ZDezSYpMcOHPvMJ/alBAhmwyV6NjmJOHQgwkSqMWJ8WaJThENFL5uWOBj40cyOXyDFRr3JowOZw3jKkg8dmQNGUw0ziYsLVfMwqgRbZcrRKTJ2kCrWNRo9VwShmiVBkhIH50OXrdCF/7NPMnJEnM9hmOgKH8sQIkzk42UgBGIO1L8F8LIBKAUfwsRoD4koyefrIl2BgBgpdSAwSQJAL0mRsRARLHoQn46ZsSEaCRbTndAki0gMXF8Pkvy5Qfx2p673T8HhEtBL/UmaC/+/UnL8g8B0z80iDzRjJNhCSgH1rx0P3J+uKY2ticA7mQUz8cs7ZuL6283tLJ+j8Os5WWkBpii6Ew0F5pQQ7kQk7kJmIZbJu3bNt96kx9gyW/sBLzIFkm4KXUZsmGE8cOxW0n4XC2PnSBLzCdkGh6C6wPTI71Ko6mi99Hhj7wKp/e0syRx1HEkb3EI0M+f+1m/eGDFVVHKvbEONo6nsHgl0H3pbO1TZhWKfpj/TTHKIefYz7+H5GFt2yOghQo5tjf0Ky4njx/Fwnr46evWKNdcaFPtEnV3yo4Vv2KksQg+xqbFXePeJqhjXXCl/7XkS7isuOu54qj1bMWcrKGLdzCUSi+xzgCS6z9ugvQRWwS9u/VkGP5K8AAhtSPXxYZYicAAAAASUVORK5CYII=" alt="Sort" data-type="icon fatcow-icon" {...props} />
}