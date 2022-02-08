import * as React from "react"; 
	
export default function TickRedIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkYwMjJFMkI1OThCMTFFMkIxOThEMTBGN0MyNDM1M0EiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkYwMjJFMkM1OThCMTFFMkIxOThEMTBGN0MyNDM1M0EiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCRjAyMkUyOTU5OEIxMUUyQjE5OEQxMEY3QzI0MzUzQSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCRjAyMkUyQTU5OEIxMUUyQjE5OEQxMEY3QzI0MzUzQSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnSCMV0AAAN2SURBVHja7JfpTxNBGId/sy3VeABiqaJgBBSPyDcREMvh/2LUeEQ8Eo1GIzERBcUDUeO/YfwmSNEA6gdBERUV5JRaaykWaMvu+s5s7xakAvWDTvKm785O53nm2J2WqaqKv1nYPy+QiGJoLt6m8uB5wuFNhVvU8ccPRfA8kRIC7mx8pA6WZIrgeaIkAvAB8wZ1oHyTFpRHSrBFgrt3Vt/A+MVDUJOII+m0O4oMyetFclUDXp45jrJnXUvYosCv3MTPqiNBONMwDCokRYHTq2DEo0dpS2eafmHhee6Cq7fgulQJtnQZWBicXCh3eGQMk0BZS0fRQi6BoWkXwWvqMXH5BFR9UsTI/fBpDLlklDW/KqWqXgori/3cbnXzpKz13RL68MwJXnsHk1dOEZxPuxQOlxjGprzod3pQbukIwHnfLLqzze7C2npx0X7yMCqe98wmYWjk7a81wF1zBooYeTTcMenBF8dUFDxyCQyNBdRZ3V14ak5rFaeq0V55EHtfxJQItr92FoouNtw+4UH/D1dMeKiAmMbCugZ4685TZ9relORpJFVWoe1YlISAF92462sfAWd8zSXYXVPo++4keGdMuF/A0Lx7u7vwOodfgMw3D+9MPLeKkNAfvYC2ygN+CQh43T1M37qoyUaNnOA/J9H7zYHylpnh/varms359hxjCtKSV0CmiuD5SJmsSUiHz6H1yD5RW3z7AZT6SxpcJwUmUoycw50T+Dxq/y08IECR98Sc35abkQ5jynJiKgie0qo2E9NeqPu1vcHuVwc3XAhcR9e2MRc+jthQMQd4YAkoTBTZTeZ8y+Z1a2FMXemT8FnwT1URsyEKHzULXXOmwR3j6Bn+SvDXc4KHbcJQibysDKSnpoRL+EX8w/V34IN/c4zhw8BIXPCoxzAgsSffsmVjZmyJ0C+HwN/3DaLiaXzwWK/iEIkdlq3ZWTCtToMsR0sIOC2F9bsd73oHCP4mbvhMZ0GYxLbcbJiMXEIOSGhwHaw2O7o/9f4xfLbDKChRQhJ5OVhjNNJxLmsvKIKP2mzo/vAZFc/+HM7LTMexx9ehADRBtTDa9aY1JnHTOmol+Ce61zUv+GwCERJdJAGLXq81f/u+Z0Hgcz7rKTIpzPTGVHnw3Fc37x+XLA4JPv/rfddDCzVyFudMLPflrsWe9v9/ThNWfgkwAE533WQRtyOOAAAAAElFTkSuQmCC" alt="TickRed" data-type="icon fatcow-icon" {...props} />
}