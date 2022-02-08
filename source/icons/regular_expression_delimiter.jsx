import * as React from "react"; 
	
export default function RegularExpressionDelimiterIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0Y5MjJEQUM1OEZGMTFFMkE0MjJFMDk3MzYyNjU4NUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0Y5MjJEQUQ1OEZGMTFFMkE0MjJFMDk3MzYyNjU4NUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3RjkyMkRBQTU4RkYxMUUyQTQyMkUwOTczNjI2NTg1RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3RjkyMkRBQjU4RkYxMUUyQTQyMkUwOTczNjI2NTg1RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlrdNd8AAAY5SURBVHjavFddTFRHFD5z5+4Py/5AlRUFA2q1gImooNaosbHRPjQm1arpSxOT+tD3vjQx0Rdj0sQ+1DRqG32ojW2NbZO20lqlUal/gKhgAJVGQEVgicACLuzu/ek5s3N37y4LGq2d7Nm998zM+b4zM+fMWQaJ5jz83Zmophuga1qzpsVrGIMrn+x6/3fsM+El2t7Pj/r8gfx1pglrVNXxLlfVSpUrcPTgfk/TtbpxVY7zxGKx/o+2b5qlaVrl/Z5QZfejEBw6cQZicQ0MQ282Tf2qAsrw+ETkZ5fLBbquKXYgzlUjGo1Cjtuz1QAjjzG+WlF4pdOhwuyCPCgpDsL8oiCoqgrHTp3tR3AXTksS4OHhwZaBwfDGotk4sKQIlpXPEx2maUB4ZLyyE0kxhUHnw75PGTCgT1oz6WPCvLmFYBr4i2ABfw4wluAZjsTA43JCT28ICIswSW8R0CYmxruHRiOQ/1oMekIj8Fh2uJwcxQGvlxaL96VlpdMu+WgkLn5HIlEY7A1DNKZb/KAo6AfCICzCtBOId7S1/NG1fOmuZeWl0MvJx4SXcfQmPh6DURRh5sk0p4KlHph8V1QluToBjxO6HvUBYRFm2gp4ff44YwkLCktINsMv1HCaIUkTBmFlroCBpzPpl4KDFMbgVTWJZdgJMBNbkjAenGfjs+SY1NRsuoy1M0WfaanU1ClOUeAKm5aAgv0YYiiKANJ1XeqVNJ1hGCkCJkseRju7JIGCWUULAj6PGEDLPxUB2kOK5Y57HVB3/m+MmnzYun2L6LPrtmx7D3QblimFMAgLH8/ZCXCvP1BdODMfJjBs2DQEyEOHwwEN1xpBxSRTvaJK6LjK03SWAWYzRLYJg7BkHohb2cyZ68vbUVpcAOPReDIKMoW2xoFA7W3tMDb2FLxeLyxctEDo21vtuvm45Mak+WSbMAiLMIVD9FW9en0g4Mt1e9wuiGLq5ZzJfU4XFWPa5XZC3YVLwsEVK8lTE5yYqOw62nt6ts8lm2SbMAiLMC0CfPOOnTtLimYmlyyb0DLjZQItN2/D6Oio8LR88RvomYK6lqSurGJR8vBls0ONsAhTnHdaCo8v8EHZ/Dm4RDpwmQMyReWJlHyu9rzwbs3aN0V2cTo4nLXpDE0X8ZXNBtkmDMIiTMImAm6H6qyYE5wh9z/LRDp4ePJv3LgF4fAI+Hx+WFpZIfa+qak5ofP6oXJJBZIypiSgCAJxICzCJGyKAtWwwhL3M9vp57hQ7hwOp0+fFe8bNqwDmuNwMtT9mdC9vQ40XQOTbCjTJbAElsSkmyKVpKb2nsOVy00wODQMgYAfqqsWiz67rgp15jO8z5LimZo4LFYGVCanUEniu+9/glg0Bps2vgWaZgp9mi5uCOeedYewZH6wZUI9rg0MDo8V5Ho9EItpkybpWKp9eXC/mERZF6smYShTl5l4sjWnU4Wh4TGBaYWh9iT0uOZuZw+4cEdovzPjn+5yAojHdSrFIHG7T9Zlyx3puUARGDfvdsGTgcc1hE0EoqeOHzpS39IBkQms6ZAhBWdaFktcYSi0x+bUummEbJJtwmi50w2nvjl0hLCJwMQ/d1sftDc37vultlEsqRvjnXMuWE+VmJ5XEp5zYZNsE0Z7c8M+wiRsLuPCaLp2sWtOyUK1KxRZMSPgg5n5PqDymUSxG5wuW8qMSfmB5lH00C+933/QDz/UXIab1+sPHz6w52s0Q2cgxq1zRi8Nl/5qwxK8bczMqeh4EMqfwDqQPMj1uEQm5HIfmSI2IA2c+i0wmqNjSPYODEHrvYdQe/U2NNxq6zz368ndJ45+cRKn9qJEyHn7kSXnclFmoASDhUXBbR9+vLmwuGSV1xsoQ6suyvGrliyEtdXlCday0OOygLx0vR3oLNEqYEaMjo2F7/Q96q7/8dsjv4X6ekI4hITK2qdWSZatrqU/DHlURaOUoaxEWU/JDuWd3Z99dbH2SouZ2UhHfTRGjl0v55ZJW3nS9nMXm7Q9OXIiXZVBlLkoVXsOHLtYezVFgp5JR31yTFDOyZM2+H9W0ErDy/ceOFZ3obHVJKFn0sk+Dq+4JUnsO3i8nuRlwF+0+KcUno8yS773owxZfzb+DwIWCbdVb74IOLV/BRgAmG/BreBeXwMAAAAASUVORK5CYII=" alt="RegularExpressionDelimiter" data-type="icon fatcow-icon" {...props} />
}