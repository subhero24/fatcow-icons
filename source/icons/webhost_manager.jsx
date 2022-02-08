import * as React from "react"; 
	
export default function WebhostManagerIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjU5M0MxNkM3NkI2MTFFMkIwQzVGMEE1NUM2ODk0RkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjU5M0MxNkQ3NkI2MTFFMkIwQzVGMEE1NUM2ODk0RkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyNTkzQzE2QTc2QjYxMUUyQjBDNUYwQTU1QzY4OTRGRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyNTkzQzE2Qjc2QjYxMUUyQjBDNUYwQTU1QzY4OTRGRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhWQ9vQAAAQuSURBVHjaxFdbixVHEK6+zJw5x3gL4g00Gxazkr8gPsSgediHuOK/CHgJCYqbhICICj5o0L8hivgQJQkE/BEhLK4JiG58MmE9Z850d76qnpkzuzurL2dwhjp1unu6vq+rqqtnVAiB3udl+UcpZWdm5+557+chnQJqrVkeLi/9cRLNwpb9fThi/tzZMxSCJ4UbrKaLDAC+ldJ066fb84wJ+bcikDFeUeR089YdstZ2gQ/7BZ07+1VlO2sSUMzM+UBpmlKSpNwxZQIBrs8Fg7EYs84BaRlN3jnS1pCxuhMCLhjBYKw1SciXYQ9gkLVWHRDA3cTYQEBpHvSiRTpIgibGRgIAZHasK5n21cTYGAJjkCBOtNbd5EATYxMPBNn/yNeyL6ZqKLfRpBW1quPbMrZubihrC2O0eiDGx5FD16hI5KHMejLag7WmYaHFSNVmmj0bq+Zo3RhfPQtLKlARFMaNsOC2hKA9BwwKRQBQQsuLvwv9Q9ePUV87GjpDf178VZaz5/IJevn9Ixmfvfa5zF26+Mtk7LtH0rf/ynEaJI5Wx4aeLz6W52euHBUMxqpLc50DWlGBDPXBlH6juBqsIGr0YcGjcSKaJcfKWKp2NZbnRM8vPaZ//uuL5jb3s23GYKz2EAQHSjBYEhz7BKvX0CZSVcxHyzjHdbXoxRzg8Oo4xvxHMFNAVn58SKvQDuMp24RtxtgkBFwJPYoQnuaFgPHrYUp/X71P289/ScJBEgsgmDUsAHD5gcwdAiSzcYznGvFoTGJTeo5SEtuMoRqFaBICE4uEYQ/AyBCTV67fp3wcNbcDG2f2KbUKjyk4JRsQ7f1hgdKdUXM7jpuIYTbzQPBShsUDLrqcn3USP5J+KdNJXPHeb07J3Bc37pbbTotF9tSOvqNPF+dF6160VWG0ekBpJQdFAuO0BYc1ZLCN6MCF06K5rSCpjQepwmm+FcZZ+D/12ItKNI/30kCDnhctBy+HQJeVsJGENQGNrREQ+EES6PD5k2Q+JJr7doH2bc9Fc/uTrxdoWwbXfEAifTzLUrW3pOV/EM04kgBizW3u71klGLqxDRWXSBSd3Uc+++LlxzMf0dLTZ3CTpQJbz2rOCRQPr8p2kN2YF5NiEwuRkV1hkXGFUxKODDWgLmLjCJiYMc3NHqCny8/oyW8/70HXytocQKA5kaxshKqcosLxaphoWXRT4+tSHQ2X75GqrtlxrhztJAuRAzmQYKi241jiw+6B1nWM1h9I72q//VnvJxituyCUe7TJcLrHMdUYrWeBC7FOd/EuUJ+4Ye1Z0HgfYBc50d0RoBqj1QMxQQx1hC9XhbExCU2ZIKY7dLa8HqMiEPLR6AnK7BHdUQJWVzEuiLGqF6mqEG3F/4OQXU2vdMUB8gryF38ZVQRs+a2WvWNzT+cTAYct5I2Qed+f5/8LMABWsNfdaJRaUwAAAABJRU5ErkJggg==" alt="WebhostManager" data-type="icon fatcow-icon" {...props} />
}