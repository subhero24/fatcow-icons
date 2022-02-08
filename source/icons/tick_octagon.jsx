import * as React from "react"; 
	
export default function TickOctagonIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUMxNThBRkM1OThCMTFFMkIwMTQ5RDY2OTA1RUUwOTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUMxNThBRkQ1OThCMTFFMkIwMTQ5RDY2OTA1RUUwOTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBQzE1OEFGQTU5OEIxMUUyQjAxNDlENjY5MDVFRTA5NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBQzE1OEFGQjU5OEIxMUUyQjAxNDlENjY5MDVFRTA5NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt1XbKoAAATxSURBVHjanJdNbBtFFMff7iZxrDRy49jCkDjYuTTEpGr5EBVVoXHipAKBlEOl8lEkLhw4tBWXFpA4IBURCaGWAwcuSOWjlXpAAgG1nNaBUgnUVm2TGrAU2cZJaCBpRJQGbGe9w3uzu876a9bJSE9e78f8/vPemzczEti35tFxmC9q4GX4hzHxy5KEhr+KDIvR49CFl+ui95vs4EMnIfvK8AvevaF9oGmg9y5qKFCWAa4kLnvVk2ezF9+GHpEIyRY+etA30O2HG9c/BLUIDbUmBWD3o2/A9NwsnImeXxCJkETww6NjvhDCp258BBgC7t5GGoUJQwA7dx+BBIr4LPpVXRFSPfjLked9oZ5umL75MRQNt26mUbgU7H1g1+uQyM7B57Gva4qQasFfijyL8C64PfUJH/lm4ZWeCA28hiLm4YvYt1UipEr4i5EDvv6e+yFx+1Ng5PYtws2eSQR10f/wq/Br9g58GbtQJsIU0DyM8EORiK/fj/DEGdDY1kfOQ4A2+5sHJwUDf99dHo5Q6DCKWIBzsdjChCFCMub5nwfDYc+O7vsg+ftZDm804WqNnHImfasV3j/6H791/HQrBHfmoQmf9fUdguTcX3D+UnwJ68QDNMY2TBjPIzsegmTSgMuGbzZr+B3N1NSUowSnNn40B+lpB3+WTJ4DYhGT2IRqoeKmsrw+1eSNzkAxrEFBHH7LAeNHclWOoXuzCTd/R2UFMApqS6kSFjW1DMZjeNPDn/l3LfHbwMRuT1138NEK46PQu+vVpZhhUkrmSNDSVymGi/zZidNOCD6e44lUJcIc+TUxnProfSwHEqMu1NJ92ZwKGoaA1GmKCd+IIV2nrmIMZUtIjGu6R89EcJ6ET+T0WSVTkSqUpp+8MW1U/i97rbMMbk2k1C8O7h1TAF3TPTt475687j2DWrQUQ3kjBzAxFPEM4yJ+doCK75HRte3In8zzkTOEM/pVdA9AtQd0Vf49d3m8RCJmfgJuQvgphO81Rg7ls0Wr9ADdL+LUoClIagNP5XgH9doHxxg3IfzpPF8HwBIyMmJwVqUHmEUVRSK4Py8UIYTjtwpUj9w0VisHNCiU1QFyXTCc53FsGE4xD1sSTq5hisGqDAHD4iArFqWmJxoUUYILRk5GDGJVhuCfxMzfsL0joM/VShFD4nBwtw81AMe+iUEsYpoCCtE3YSQ6cWd5JvMvuDr8uidkSzjwNzhSWwSHj9ROOKtRn9Q3MYhFTGLz5RjNixYYfhe+GRp0u4OBFlhdXeAbkrKSi5aJYpU8pheqE6ecEBjFEs0E6wTomd/e7oN0pgAX48vLE+/Ac3g7g7ZY2pCg0coTJBHhQReKaIZ795b48mzNGA2/mI/qi1TXKC5SzNh91Gkyvr9tmwfh63ApvmLC02hL5oYEaonYP9juDj4ow1puBVixYqslW7Y9opGj29taXZD+Q4PJ+GoV3Mwx6y4qT3FJxeF7OVgYc22Xnd5OLL3m8imVJ6go4QjudLQhXIUfJtdqwisFVIlQguqYqwOcnd5mrN9FvZJJNmZUU0erAzIZFX6czNeFCw8mZjgiGI59g7K7t1dCEY1tFGVMjFSKweW4thwTwG2PZqaIA+/Bdzh6l93B1HpARV+uXHgLnhHB7QSAZYrSKbe9gfctR1RYRZunqbbVw6lVRBttIDe5LlHBX7M7nv8vwABxeRkXqVJtuQAAAABJRU5ErkJggg==" alt="TickOctagon" data-type="icon fatcow-icon" {...props} />
}