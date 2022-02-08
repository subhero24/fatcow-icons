import * as React from "react"; 
	
export default function UseInFormulaIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTRBODczQzcxMDdBMTFFM0JCNUNGMTFGOTE4ODIzMTkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTRBODczQzgxMDdBMTFFM0JCNUNGMTFGOTE4ODIzMTkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFNEE4NzNDNTEwN0ExMUUzQkI1Q0YxMUY5MTg4MjMxOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFNEE4NzNDNjEwN0ExMUUzQkI1Q0YxMUY5MTg4MjMxOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkmcYzYAAAURSURBVHja7Fd9TJVVGH/e7wv3ci8ohJBzpNGHmoA0sFAQRaBpW7Vaa7b58Uf/WcTarGzpKtaWExb+0/rQkpaZqRTWkJoThdZGZmEgzBCCCPmQz3sv773vve/pOeeeV28GlkCjP3y2H+e8z/nd9/k4z3neg0AIgdkU4ZYDs+4AQi7/6HglEYT1pmkCkJl7syiIOJAvnt204XHUBCajRr194CvyX8mefV+Ssn2VR9GONFkG4so+PN5XtGk9NLX3gyBY6ulLZIQCSfEuKN1fBSKYx57f+sgTqA6Gc0RmjdeBKsugKRakG+DfcCQIBkzoHnBD8ZaHwSTio5iJw9dnQgx/UDUZbBEaRESoYLNpoNlU0DQFVFVmowW6bnFslMN5CvIol645HBHgsNtYMvuGx6F468RO0FzfVra/qrdo8wa4jMSyN3dCTm4ekjErCGISyFyVC9+fOYlkAVbk5MGeN16B7Ny1VzlUaAFnZK0GSRSh+ddOuNDWzV5+z6L5cO+d85l+bpTGtkMSzMqiLWw7WGFSB1jB9I/6yMi4SUZ0QobHg2TYGyRDngAZdBtXQXWhdZMMefkacq64/WRgVGd49/Na6lUhxftH68iYj5DeIQ8ZHNOZnXIs+r0HqqrpCZSpB9bJ02QRSna9CGvWWBkI6QmEIs1ZWwCvvXptnUadnbsOTp+sYbzVeYUgKwJ0trVArMtZgccwtnhjPmzxeiBoyCwLlgSMgIaDjWWglGfA6wsSA99s4NwfJMQXCMFvXntmYzCko6NucF4wdOwOfXaEOCNs5L5ly8nK7HzijIxkel/AZGPp/uOkZO/Hp9HuUoRDDi9CWRJhx/btkJe/jkVHUVBYCC+hbm3eOkyCyWoiv7AgTEfY0ZVlBVLT0uGF57bhXIUTNScgIT72WoFLApRXVINfH6vdse3pYlT1IvS/ZCCAUVA/LQTxD3X8n3SWHPzkU5IQF0dWZGT+rSG9c/gU2f3ekW/QXhqCesaCl8PbjiRe16Um6EfCJD1qUVISuMc8YLfbobO9AyIVDRJuT4C2jg5YvDgVRgZ6oH9ocNecmJhAfFx8v4Avam69oDGT4vWWpyDU0INZD7D5W6W7wWv4mG5ZSjr4PCPgipkDC5MWbkucl1Ajy1JQCtm00wwQ7+hwfXnF11lm0LzpbxGNRFFVcLpioLGxkTWj1m4PfHCsDiRJAkUST3l0b60jKmoncp80DP+3za0tJfjTUSv7UYgF4fsyFVFk2XV38l1HBFGA801ND6HK4I3GTe2kLUttoLxzjT+l49DP9R5qcBzRieibxldITExMXK9qqvWKdsQQbZAIv02zzRV5D0hakBTX0dlxnjvIIqZejnFMVVSXMzpFkhQIBIyz+DxIo1yekhb/48/nxpcuWVKNp9UtioIjOtr1WLKS3IbjxYazP2jiDF0/VE3T8mmUfsOo5dFpiqJczrw/wy8I4tymC00b6QVFU7Vn8CRc1HXfy6z5zpADiqzIC+mk6/eugzj46HVA4Gn/rf3SVl3Xu7Bi3YIkOIaHhl9vaW05RO8GM3LzwD2el56e3uP3+c80nG14ClWXEU7EHTRKRDd3KpE6xouQctzTcUBdtTLbZ31SsSd66+rrcnB6iR8xWpF2zvXyb14kv4PoHOZ0tsDOK1vGwvul/rv6zTjv4cao+DnCxT/RnXCqEsNT7OQR/4G4Yh2vm7mWT3kLeIplvr/eG129/7dy61+zWXfgTwEGAOCTFN+3ukcvAAAAAElFTkSuQmCC" alt="UseInFormula" data-type="icon fatcow-icon" {...props} />
}