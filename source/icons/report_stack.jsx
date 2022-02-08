import * as React from "react"; 
	
export default function ReportStackIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTJCOENEMEY1OEZGMTFFMkJGOTdCODJGM0Y4RUM2MzUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTJCOENEMTA1OEZGMTFFMkJGOTdCODJGM0Y4RUM2MzUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBMkI4Q0QwRDU4RkYxMUUyQkY5N0I4MkYzRjhFQzYzNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBMkI4Q0QwRTU4RkYxMUUyQkY5N0I4MkYzRjhFQzYzNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmGQK4kAAAWFSURBVHjarJd9aFZVHMe/59z7PJv5hlOEGC5Mohm1zWYjtgkimS63KLD/SqT+6FkRRUkvarOFIlJbC00fqz+kAiGIxHiWQ1dEm9NIcau1oJliaWprbWxzb/ee0++ce+6z+zx7nu3Z6D4ctnPPy/2ez+/7O+dehswue/Pe2DEJvkkICcZAhcGl/x0hICVmdFmcIcRl7IvtlY9lOmb+5n0n5K+DUnb2CflLv5CVtV/J7hsDcrbXo7tjSvZ8O0MB2Yxx7KqpRXfWclRUbISkn6LxeccAEZgagWpXxXEFXOq69YEcTU/Na2eK3HVdjOSUYClN8mPzGajx1R80axHTXUQcK+/MxdriuzHqiGATSydgDri1ac/zG+A6noBtDTHEaiox2+uhnV9i/YMriQBRCK40HXJOyN+oeQdXQ7ejrKwUpAG//TWA8zc1U+gbmSCnBW8tyYHiZNFKLM4RhOYLCD2x70QX4VzhI3cIuZNzLxbTDF3nOmmQRORgM+QskKsRngCvBKPgC7jNlXzFnhfWe8ip+7b3Ymh8q+r/QS59YZwEeFSSBYQdFsKbNbvxezgPFRsfpk5eryM/9NJAJYpN+1CdGZJNQu4aBJZFItzECHL18Ib6uptvrwtjaU8nSopXgzluvEOYeGbRJFnEbtpC/VT/dMiVIFtvYIgrUAJCL738SsGOk8N45PUGFBfeQ/F3vNQzqi3b+2vbgRKo6z6BfonIWRy5EkMa4+1+CMapDNkUm4ULFuK7jkvaROrSAmgCVVcoLdMgzMbDmakLqe8Jw3YSciOA03huCCEQgjEqg5KHUNewHy3ft+p4q58jPdU2lRD1rPu0CWc7LuJM+0WEqaH+M1Pv6IbNvX4pkccFe+0iyYTKAzfWrgnjw/3nkVu1C864o1eiOirFeqE0x2tbNnrxVaultlefCta99NWIk5D7mesvRgQYJHhgw/Yoiovy4TiuQetNoPcFesgo7Q2j1DbmqiIw4vh1oSf1BSQj9wRICgnVLZ5wesY9EKJUcxwHF37uSvCAbY7d0uXzsGSulTYF/x50cPbyEIUiBXKZmBUyaSvWHhDcxpFPjqLXXoTV96/SWaIJqAmoqIdHDx1EQWEhSkvLEI0eQlFhkdl2BUrLyvUYztIj59rQ+kaiB973PXCgFcsryQPOuBcCg9HfEyLVz8UHRiLVkyiwVMgF9yaie1ylqquqItEDLxoPrNt+RHtAKBOaM0etyA/J4WgUbW1taGlp0fWoqbeaut83Gbn/OMsQCO6qEx7gEtevXUfHHz1eBxV7GqoQStP/2UgkYcWRpLqdDnkgJOk9wCzEmk5iiM9Dfv5d8dTjNMIyig9T3AtM3AUZpLy8XHuhoOA+8kW57sv9JadArjYy1c6Q0gNZ+OhAM+yqWgz295nDxVsRIzr9I5IITI6774W+YaE3Kzslch54GWXaK0EB2gOVe091bNlxFOPUduqb054A4e3nIAGd1255E8vE888/VdScNm0C6ZBblP/zsiyM0yGSHYZO1yQPAO3tP+FqzwDMFq+PV72fy4nHJfl+0n9eliUi106nBz9TH9PGVvedW32tasq4B+5YZONCSxOG5y5D3rJcPaWGxxhm8trPUiBXImwicHxnZYVZsEqzHiojE2fBqhA+Pn0O2Wsep2z406w/MaaZXHxq5Jeo/GtgjlAZtv2zoIo88CR5QLE8duVyHCvnDDNBoFMvPfJetWsDKc6CLEug8etvMTrmaJdqlFyhYxAzFTAF8kkfIL4HNGrKbW1ikq0mmBNWlfC0Xz7JHlDj0iFPJUAbfGTgn1a2YHGZ36AQPv1uI71cyBm/EdtTIE+XR/Op5FFZMsXHykwuH/kVKgOZCLD15xh9EQEZvH8jgzf0CeTOVB3/E2AAb4zlcIJ/4JMAAAAASUVORK5CYII=" alt="ReportStack" data-type="icon fatcow-icon" {...props} />
}