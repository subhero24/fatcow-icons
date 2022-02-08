import * as React from "react"; 
	
export default function HandFuckIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Qjg3N0UyRTA1NDhCMTFFMUI3RTRBODkyNzEwODUwQTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Qjg3N0UyRTE1NDhCMTFFMUI3RTRBODkyNzEwODUwQTgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCODc3RTJERTU0OEIxMUUxQjdFNEE4OTI3MTA4NTBBOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCODc3RTJERjU0OEIxMUUxQjdFNEE4OTI3MTA4NTBBOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmi0fQUAAAVsSURBVHjavFZdbFRFFP5m7u52/2hLS/nTEggUEgoiikj8Ccbog0YgMVFJfDE+oAkaoxDioz5IYkRFEl5MMCZGHzAxEX8STZRICjbQQBBEaumWAg2Urttlt7t79/7MeM69t3RbKm63pJucnblz5875znd+5kBrjWn+jGN72g907W3XR/e0v8/P1X7o6Z4mgFDHByu/cwYOavPcbu1c+YpBHOL1agHIaVofqwuLZ5RVQulaB1yrgEgIm3i92gOmCyDKf0qV6V9Au9a49ZkAILx/5fhTZY9fnwEAvi+VFTBgT0X3nQJACjUBEARAW1P++s4wMGq58oHMOADowPeuPfMMGBH40U+WK3bBFMtKaKoO/+m99oeaE6IjEo/CMMKw7RtB+hH1NEZiCif2rh4UQntrDuQ3G944/QI9OHcCQF1TQhxe+/w7sPMDMGItOPv9u57iUQDKdbFmyw7YuRRCyVZ0/7Lv2a5P7rFtJb4u2/qLx3b98QMnbi0uEJ/vXLGROA47I5dhpY/DppHLqaYYEJyGFIRc2d3iEMzBDjg0uo6L9qdexcK7jOfmzJaHuvatHaKzwrUAkJm8Y0BIuKWr3p3jFgdIobgZA6NZ4FrD3ntNIztCmYNoXroRSze+hEidaqKlRC0ukK6rpWeplSMcrCCL5WsfoOCz/SykSsiAFK2D3isPiIQqZ1Ae/B0xIw7pZ2mkphhQWnu+E2Rl+lqW847LIEJhgXBYIhJ2sGxVm2e5IKbGANBeQYxZGWJETBqE4sieNY+SbetDhl5vCGyQQrfyC9vBpydTpbe27+8tF8uq5O8WHgOCjyOL2c+ubaGoXFZHQIqQ5GUKFixpm0dAMj5jxMTEQjUKoC4ZFb/Vz12EeMMcJBqbEE0m4cgWZC6d2xaPd27r/Ghl1/Wc6vRIoEgzDOH3HpqUai7HElJqLygtAgTbhakUGa4RkibtJy7sjBeskwGIc7DEmpdSHkfh0oflYglGuB9z2+7HglVPYjh1ZF1j6vi67PUhUuJyLPqHcRDqYFTCX5PSb3S8uHAJiwurTMzUFf6TAdl7tfwl9K8vxhrmI9myGBwtFO9odE5D1y9HQ+uDJOvhOA7c9GHwWyFUcPv5IuQYGF+II++SIkCc+pPcE4KRUlAlaX43yfzP3mx7Zc2S6NZo/VzEmhYSdSE0NkURTi6g02J0kIab/QtmqUy+dzwXMCPwXBPMlT/3n8fmdVGJ/pSJda+fnEe6rnu6AwBG0EbNIplD0sxA7l2W3JpobkUk3oBZjVHEEvWUCfCi27FsOLY1TqkOFDEYfROA/xwOaRQLDi70mV1PvH36adIxVNkT0i6MMCqSFEn3yx/37L5v+6nHe3t6TjnlHIbTeeSz/9DOES8NpSE9f/PcE1khxLQ/0j7hP4ciErkbCucvF7/l5JroglsuuaCvm02y8OiHq39csGRZM4URpZjA7JZZZJQD0zTpgAoXKPcWy70sEf54qa/E9K+gMy+RmLfripkRCllcI+l/eMeZTVf7LqSjYUot00IhX/SsMijaZWClDFiQlSL8omWEyPqsi+ERu4vOy5NY1d4FfIVS9cBFArGl/+/udDIpYRb9LljKidRPEFrjeiFJCnkb3VdMpr801duQ/ZUm6SMQm1N/dqcjEfYxFx45TuGkgChWCjmbKqrGa/t7DjL1tXREoyAuPrLzzObes+cHbwylvcPHAKBCKkCxL0dspv8ETXOV9E/1Oh4F0X/g56FdAxd6fSX/04YzIGbg/OXSLfTX0hMyiMyqxQlb3jS3iluUikfBdPsmWn+7NLxtH0rSQrIoKFzV/Djyr3DxqawBrDtUQyPMFGYDa6r9nrOpOFlj+q8AAwDJcrdmaTSbNQAAAABJRU5ErkJggg==" alt="HandFuck" data-type="icon fatcow-icon" {...props} />
}