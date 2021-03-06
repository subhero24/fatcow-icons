import * as React from "react"; 
	
export default function BoxSearchIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUZGN0NDNzBBNzNDMTFFMUJFMEY4MTZFQTgzODFGMkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUZGN0NDNzFBNzNDMTFFMUJFMEY4MTZFQTgzODFGMkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1RkY3Q0M2RUE3M0MxMUUxQkUwRjgxNkVBODM4MUYyQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1RkY3Q0M2RkE3M0MxMUUxQkUwRjgxNkVBODM4MUYyQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlprqwwAAAUjSURBVHjaxFddTBxVFP7uzOzM8rPoLl0oFEux0BqplNY2YAFNFdCoNWniT2Ligw/qixqNiX1BEDUx1RdjH0xq4osP/iVa29gYaNNKqa0p2tqatkGgsJEof132B3Zndn48d3bAdbvASgne5GR37ty55zvnfOfcc5llWfg/B8swJ33f0filJLK9mV9nMyzohvXNQ529T9KDvthKKe1Z7uq4R619/HmEhk85+Nh/Vs7llg1Ne7tgJFo7zyg0oWXjAbmrvV7d+cw+BAe6l6n83yC8lS049+l+tL51dkEQLNXyxufewfX+I/QpnxZuMrom7WLBt2kPej9uw0Ke4Jpc3Z1Nozsea/HrqookKdkKUYxMYQySoqDvcPdES8epdTSZSOdAHoPpD814YegG6WZgKwTA4qEgg0RdBNfBdZFMpwOQ+VJP8R0YPP4emCCtqAcsU8fGB153eMF1ZcwChngoANGl2ABWTj2JKdp7L2RUEgAToIVGIYiCvY6tKAeSe3MdCwJgAoMWGUVB6V0rWtHmBt+b61i0EI2cv5iy1TI8wG702xwJ6RUESVoYgGUYaHjhQwR+eJ+QitnXAJaEqus64vEYNC1hK7RT2WKQXS4obhcqW9tw+uDLiwCwTOha2KENy9LgpMWRaJTrhH99BTw+nz1vmXQWJBIIT01iYngEgb6vlyAhV63HIBBROGlsn2UBIErKmSiifHM1JgZ+x7XeXqr+ajKIsow1FRtRXrMFgcsXIJEnMg3hHwD0IWUBE5lNmEWF1nC36xS6ii1b0d9zEpeDhbjYcgi/PfUrrj59CYOPHMXwbCmGzpxF2eYqyDluHHylbne6K6Q5AoEACAIBEIQlw8CtD81Mw19Wjr+uXMGfOTWINB/Aw6WAhwydVk0EVT+GCj+AeOxVTA0Nw7u2CLeFYy/R54dI1Bs8YBpxiERADmIpEcnt8dk4xbwQ4wP9GN22D42kPFcgxTEVEVWDqmvIEwzEGttxPRBAbkE+clysgVS5M1ZCZpIHaONkwVjcAxwEZ7pJZ4eh0QHmKbUtD8YSmKX2Q6MM4F1IrsuC6vPCJF7YWyabLzkjAMvQiITighUrdYi0xjJNAmHYzy7iDnd7VLegmaScQuRWRNLHOeVwzF5vITMH+KztASGrGsDXUeaCsg3MJUOOjdkxV/Wk5W5FQB4BSND7RHiGEMqUlrqdnhmzwJ4mAMwm4dJZwEmb78lHeHIS/orbUdz3LoZmyQu6BJNxyx3lFBarux0FJSWYCUYQjCbOzQciFYDdAZiaTa5shHPAX+zHxEgA3g3l8IV+xq3EdiMWhipKiFOaRiMziH/xGsTRH1FafSfGBkdw8tLYR+ld0fxhJBFjoShZl34lR0F4OkxF5irW77wbU9eGEfy8mQjnNDxUhj0la7FmRy1lGMP2Rx+kya5PDhwZ+Cr9EPN/29ZwIk+RqnlJzuaawJxKyX9FWYTsluEtKbZTje9omgYBMRCdjmB88A9U7doGl+KGOy8fv3zXhdY3T8/3h3ynApJykkJO8OWcxC/u2VS3u6boCZ/HtTV5AFp2pMdD6oXDP41+9uz96/dX1qeC6CYQvTYI5oQhl3t1mb2Y6PR6Xud3zgieo1HHUh81vicq62sJRA5yiMDnjx5D8xs9iuTcXMI3ebvixWXC+WUpHZnmAAlSR3xvdyd6qnZthxaf7zvzVusKyIGVkTQdf/s+iwv9r+NeY1i9wUEUkaxznqlRxPhqApgDMef2mcXujKs2/hZgAEkB8io0INh7AAAAAElFTkSuQmCC" alt="BoxSearch" data-type="icon fatcow-icon" {...props} />
}