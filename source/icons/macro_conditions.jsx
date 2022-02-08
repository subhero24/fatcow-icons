import * as React from "react"; 
	
export default function MacroConditionsIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkNDN0VDMzQ2OUFDMTFFM0EyM0JGRkNGQjk2MzIzMDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkNDN0VDMzU2OUFDMTFFM0EyM0JGRkNGQjk2MzIzMDgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2Q0M3RUMzMjY5QUMxMUUzQTIzQkZGQ0ZCOTYzMjMwOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2Q0M3RUMzMzY5QUMxMUUzQTIzQkZGQ0ZCOTYzMjMwOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Prkp1tUAAAQxSURBVHjavFffT9NXFD/3+6MF2aJExIG2bg9CXLKYCSpYhbn4srjpltgsYdFMzR72oAkP8Cr8A5JAfDC+siK2UeKPmCV7ENStGsXgi8ZphC9SBTFFu42u/fZ7PafcZndtv+Vb03rDyeV7zrn3fO7nnnvvKQP7pt3pbwtpCuw3LRhpPj7mR50J76mp4ZO+81O/dnGefMypHx/YFUG9XupAmk3w4EebWr/z7joIqekLQD23eN14P5/ccvzGx+iTtJsvEAiMMMb2cs4BeB4Phn+MAdqvdHR0fJsNQLvV5/utbpOv3dN+CJJGAPi/82BNR2HDFz+CwpT68X4oBKKSgh/w+2ExGV8CwCSr+K7UKyAUDO4lfxmAPt6/c6qmobXOg8HMZ2eBm2+Qj8p0b86cA9LjLIVAVCBTYJomzEbmgEhgEoDM9/p19cRo2l+Tgk+ubthR59l9OB2MgjLNLZagLYGIBMGz+wguhNmBYBytRL/b5bJlgOx8aX8YAdDvnWqPrG5orfG0H4ZU5JxYuStrtJrWp56HwPvlUVBUVj8xkJrcfOyPHCZoj3XdPl+ZRAsBqGKc13j2/AzWDNKeigHLCS6BQLs1NwLr0X/h4Wj9xeEzibi2FhSexJVZkEgkQFEUcCED6UTME5zsMgA9xZXXxqWuld6mT5GTCrAsboteUXScZBGMS92waGrz+77/iZJpUZhXDA4OhlVVRQY0WwBkz9gISrLp2LU9E3eN61N3HwFzVyIIZEDRcoT0ZCe/509ezG/rvLEfx8+hzApZSPMkGHC53bmCejWLgb9Rpvf1hjsv98JJhbE2z/bNCMtEJixp5TgIVzV9awJePHn2qqVzjII/RZmXcyBDbzoJC7SMnyYG0ySpr08giB7o4wjCu+NzYAiCjgtTWDq48fs9mHpgPG3rvv4D+k9mB6c8j8ViN4eGhnwy+HzByY/8/5/mANUo3ss9LX2fbd3Y5vU1I6wUWlQwbt6B+7f/HPumN9yFPgbKqzz3wIc0HqVGumX1YDB41e/3fyX5mwK8kZvmS4O3IIhR4+ohzuOnOfX0jfomlNoCb4ImQKwRfiSNoVCIMq5R0q0Rflreh+g/ENtG7w/4OPX0LfRqke9NrQBQW9RrKII1D164RoOb3zH4sgA0m0G48RClc61bMRBHLSr0JW1KARsFi6s8Qf/HyxF8OQDSC1K+tiyAfNdpuSoifXh4+CVeICvlaiaZSELgl8BsvmqmFDWiDKCKghdTzaDESgnAVWw1U2oAUGw1U5aquJhqpiwAnFYz+MDMlgKMln3knFYz+Lq1oOofBzFW4FUcdsxAppqx+U0hVzML4nperlU7ZqDIaiYq3ojSbQFS/BdWMx84rWZKkYRyFq1C+URQVii75Gom5nALqgVj0UIA6OxV0YXk4HWKi1LcyVXsEnNTOZbINr4VYAAjn/C7/Qa5ggAAAABJRU5ErkJggg==" alt="MacroConditions" data-type="icon fatcow-icon" {...props} />
}