import * as React from "react"; 
	
export default function CompileErrorIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDgzNUU2NUNBNzNFMTFFMUI1NjlGOEQyNDkzRERBOTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDgzNUU2NURBNzNFMTFFMUI1NjlGOEQyNDkzRERBOTciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0ODM1RTY1QUE3M0UxMUUxQjU2OUY4RDI0OTNEREE5NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0ODM1RTY1QkE3M0UxMUUxQjU2OUY4RDI0OTNEREE5NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjwZvLkAAAT9SURBVHjapFfdbxtFEJ/du7NJI1ORBigqFcoDkitRgVJB2ihOlERNYqVf8HcgSgVvvCHxBm/8AfwHoY1M40hxhFO1gapPICV9AVUlTV1amsY+f98tM3t7ZnO+dRK68ti3M3s7n/vbMYPukVg9m26MfPElPP3+G2BOEoDzQOL7IFoNGPz0K/jlu29hcn0ThdCElxh2DK9ffns+cGYBMB4QDYYf4qFMWxs1wDl/fuY+Y2xIvVReXl46Rg+zs3ONcFE+vySN5zEGOIG3HjCLB8QVqTnJ9qzVHBodHVuo1+tDy8v5YaQztVo1hbwiyvpQabparQJR6KgdHxh0VaAB3ArCH0ZAIBFPeMGa7tHXbDbm1bNLi2q1Gj2fVca21LxjvG1Mjiek11IhU8oE/nJPygzjFU3BDn1pc9qkos2hpwFMoAFh/kMDKAQ4J5nptaiCiAFwMANoqUc1EKYgjAAqJh7K4jNACqqHmhsjIKgIZQoiBuBc/FeEXa+5brXIORvXI+D7oqgqiB04BRzPvMkAkhlGfXf3xdVEIpFzHKdEDKz4R81m8zOKqW3bz1zXDSoQ5a1WK2mOgPCDM99VA5aUGQa5t40K5zTn2khPyIB2u53G3zcUn3iO+RT4QtWAFakBIWWGQcr+oUggJRWPwKeqKouUPlf8FpH5FJhSILiUGUZifv5iB+1yucUQqp1sdn6Tc67QEcooI3RscRMQyRrACHRQsIOGlqqB2GPg4MZp160AkUI7O5MZX8DqH0LZMNIZlKUymYk1ku1TA3E4IHrVgAyrgtoQ7foajb3oqOQjSEfMpwBEfAqQz8FYAxTuimaAREdtvqNORjhP2uarwNfuAt2AQGYCoogC0DyOkzNzBAiKLRUB0FMQyHqNw6BhDyTEUGP+BdtrAAVD+L0NiHgsKhX3Z0THCV0eomOPGtBSsCc7TMpMxxBfKpUrFWmyZVklIcSVcnn3GqLgIs1lJbruIwSlq4QXdvwJwErXcSByT5FMxKfBQWEar4oQ7Z6FiIcKszHoWCOGvZI5fcMSIhtu7LW9AO14gANdFeoHawrnTpWw9UIbOTic/Tpa/G0ygnZthYK++o2iY5sM6MOv7Pgnl/EEt2Xj6ZMRuy8C5YxHcwM+yqY+voQ1woIIIaLfW7j+kfKwMjMzez9EPdyqnM/fJNSrzc1ld8JtlpZuJsOIHkV6F725O3n5IngPH0gDBGMaAHXlSDYlZIB18h0oXl+EiTsbZMAfI6NjPyQsfmFtrThM+yMK3vM8f/327Vt0QR3H+SZtgfIBipStbrDHU3c2xlcEFMkzsfUQxD7ttCyyEydhdeEGTK1v0P2/Taa1mo0L3iF7wqbKG0zjRiuARlzBSJS2ZSRiTwh5/uZbUEDl04HyP9UeR+uogP2PnrDbiEvzwJ7+3WUEKeeDr0Phx8WoctqD1Q/ZE/IIjj/58LXUY9q4sJgDPjAIFt5X4U1Iz8QjGa2htZryDsrpSLffPHrGmneflx+QV9NYE4XcT8BSr4KFVU5Ez8QjGa1Ra5vRnlD3kp6Jp3pCOY9GIR7RAN5GyqycOyXE159LomfiKVki5r0U0gfJZHILSSjaQt77SAPYK4qQSEZ7sH2MIEQbWh17jzyAyVu/R3Me91/zmHovinrUph2P9IR/sQNEgl44oeZbPZTrx+uIoSfs1/5PUvPiMoADpaNf62he6u94dPwrwACb8a488HnfkwAAAABJRU5ErkJggg==" alt="CompileError" data-type="icon fatcow-icon" {...props} />
}