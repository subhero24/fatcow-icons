import * as React from "react"; 
	
export default function DocumentProtectIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUFBRUEyMjYxMDc2MTFFMzgxMjhBMUI1REFGQjU2MzEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUFBRUEyMjcxMDc2MTFFMzgxMjhBMUI1REFGQjU2MzEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxQUFFQTIyNDEwNzYxMUUzODEyOEExQjVEQUZCNTYzMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxQUFFQTIyNTEwNzYxMUUzODEyOEExQjVEQUZCNTYzMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtNi/m4AAAUxSURBVHjatFfdT1xFFP/dj13K55aPwi4mILCFUizWlhYoxYK2aqI+qMRqo33wb9D45Iuv/gW+maalYKCliU9GUuyHFNaYECgtNmkpBhQplHZ3+7H37r2eM/feZaF3F3aDk0zm3plzZn5zzu+cmZFM0wQXSZLUwYsXh+jjXdMwYPVmWlhLgixJiMfjlz7u6emhDt1V0l5XfNg/hQTA3K6yuLhonjt//gLNq6QCwFVN6tvhoLo3e58tkvn+Sb/m5Wqc7e3FZ6dO4Y2urg96+/uHT508eTyVJeSkb8kxuyzLoiqKsuXq6IiJqF1dfQS/34+uzs5j/QMDc9Tt2QzAGhLaPU/G7VarIy/0qebm5WJ5eQWBQACvd3QEfhwcnHUDkRJAttUpOV4vCgoLEpY4dvRoJXFsfiMI1R2AnJYDbmPsf6d/dzCIc319whLsVoOi6nPiBJVdVPOprqYAYIekLLku4pg62dzO4rwIhR7C4QgOtbSIurEYFsm9qS1grnfBOl/ZpFx68ABTk9P4d2kJLMJzlu8qwyv7mlBWWorokycIR6NYSyTWR2XAbwlvKK4uUDYA4G9VVXH33ixGb4xj//5mtLUdSozPLyzgypVrOHjgNdTWVEPX44lEI9o0WU1NR8IEINr56qNHuHrtOt483o1n0acYGbkKTY/Bo3pRXx9Ee3srhocvo6SkGL6iIuEOZy7TTI3APQqYA3aVFRmqR8V46HfU1dViZfkhRsdCaGxsQMeRdtHeGBvHyspDMc5yLM96yfNkBmBdfEvCAjMzf8Ln82F6epp2exgNDUFUVJSLtrvrmOjncZazEpN7eGaRB5j1Cnbk5ePJ0+dY+GcJzc3NiBsSsVoSbX1DvejncZZjeSeUNwPgygEnpYInUShveHLwTPcihlwEquphECGlHDKzCSsSaJbiXVVinOVYXtINygMaDRqZA0ikVFqcj+a/zpxAT+w3SCEFQSLUnW9P0+6NRNplwO8oBCoEBI04yQ+g/KNLxAPSj8fSHmDuFqCd8+5lNRf3z3SjpKoCgZ6zjMhaMVUxGJSBv6/1Y77vPVSfvmwBtcFmZgHOeDT6+O4Imj78Acu/fIP52RnEaTIPucCjMjdAHDDBEcdhl1tYikDdq/C3fILZX78Q+mZc5hSYBQAmD+nqDF6LiF007u+EQovfuRVC308RLK8aKN0p4dP3i7Cn4SDiWoy8bgp51hOGtOfKCgCHr0bXCJMBkPlvTYVEUsvL80J7DpQWKYg9NynsZNyaHMeO/GJU1uyBGYsIPdY3sgLgJBAJwryIhUV/475W2wLjeKlMRjRqotwnk+tN7G1uha5pZAFSij0GZWNYnqRMiCzzAA9qzCGakO3Ju5z847rg2tsnfITOpJbSLv3fnBjD3Nw9y3q2C+QUB9uWDiPYAHQ92QKHKbQU3CYgGiHb6TGopaM4blkgrmt08bMtoFsA5OxcIFskhMUBSQuLWL89NUYuMYQbdFr4yFuF1OqCFzcnRpFfRFFQ20RKYUsvKaIyJqETOCW72zBFh0/TgT3wlQXWm1Nau0NYJx4fvRpujk0KvXQ3qM2jwD7GO78cxch3bZj4/mcRVumv5RYG/95WdH01aj9TsgVA6iaxWyEWH//6RlZvJI4OiwJbBWALsr8tk0rI/Hmy5h2LgEn3RxcgquspuInZtgxCcqC8OL8rABKNXBgaKhC3V9PEthXJerDSpiIvDCW9jndSU0O1GICE7S+80EN+evK7ILFuEgCP/Wjw4v8rfDmIcnpx1v1PgAEA38lTzqoChMcAAAAASUVORK5CYII=" alt="DocumentProtect" data-type="icon fatcow-icon" {...props} />
}