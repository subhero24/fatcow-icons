import * as React from "react"; 
	
export default function CandleIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjEzRDc4QkE5ODQzMTFFMkE2QjhDMjk2QzMwNkYzNDciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjEzRDc4QkI5ODQzMTFFMkE2QjhDMjk2QzMwNkYzNDciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGMTNENzhCODk4NDMxMUUyQTZCOEMyOTZDMzA2RjM0NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGMTNENzhCOTk4NDMxMUUyQTZCOEMyOTZDMzA2RjM0NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkhDM30AAAUbSURBVHjavFdbaBxVGP7O3PaSbO5pgq20YBqTFtomfdBKbRGlJtSaRiOiIgj2zRehgkRfCgotfSmCPpSiT4I+CCUhaRAplNWmxWJSxTZ4CbZJGtNtm6SbndmZncvxnzObZCPbZrNdMuy/58zMOfN/8//ffxlwzpErazgU64+eIevK/iF/vpaNufokFHdIidHDR7WQ1qHJvCPR33rUv1bUg4rZ1PtOdW19zDwBxsR5fZlzove1aO16AVCPvc3iAMu5xHCsR43799YDQFST7RYBgAuHCtGY0+LfWw8AmtglR+h9NeCxZpKthIcH99Z4KMX4LYnweMVc4gnwmcATsoIkV8aLonMRYVhJ0n5rcNMIP1/DfbnV1zDiX8veW5NO9n+ljLG8luoP4TvJQZfrAvSDt4KCWUNkhavoO2Sjh6bOgwAs7S0AgHJWw9kXjhx5SamsgFZTBammgjRJ4FUeWCtBUTOAacLT0zBu6kjesPBz75mBbhvd+UCsFUBsgNx+8N8voX9C+WZsAyJl9eARGQYpTC8YcOttRHbYCG824CXvIdp1Gue2vIuDACHFwsMAFELCsPh3Ugjv08BeqQabqQb/3QEfzQgCWlM25sdcOLKH2A6GLS/quXsXHjUKmO/gTJzeLkFxVk+nzWHIrSqiexn4BY70RQtMYrBJ79Q5ItcuHcwngwtWmjxAD7P+1HH/pA3ztA7+m+n7ClJMQvmBMDZ+VI66Lg1aHQFyGVxDB2MlzgOebhAQevikC28gBX4+DWe7B7nFEwk4tlNFebOG1F8K7DqyFi8lAIq7yjdNyBlaPhakYO5yZIZNpL8nZZscRNtchBooFzdKCLelV8bpIwMQb5NC5FkF7HAF2HQMIBJi1CBfM1jjDuZ/NeFIGcR2cTy+XQ8SAy8VAFql9xlQajnUGspezSEiYTmRkHRcmCUSmsLnts4xNeQh6eiQ/LpolQiAz+j0VR3uLzZiz+iIHCCF7doSCcv2u5i/5GLmB0pE8+Qx0wBKTUKuB+Z+KAmfDEEfVzE/a2CmQA4UFIbcpq7nAxNl3SpY+UoSzn6WxN1v0zBvumJtpEHC5ufS4E4JLeCJtzEQ9kn4cmVAwmukcCSdQ0KLMmEGFe0eGp83wEsZBT6Z586kUN4hQYlRJmyKkOk1lFEmBJHQvJgRNYSyNaYGOSZ+0gtuBx5UjNj1T/G07cEeug5l94+41NJQBZmWRnbXItK5kSYqPJtM7QtPY+FyCneGU8iYFmwtAmN6Flf2Yk/nNjiqBHXbx7i8GJirVUP17+O4zV1Ui2QiBVHACZfnBsWVuzkxnr3PlKxIWMoBggfLj5/b2gtKVbBXq4ZllPmqm977KnC+pIja71c9yER3mbQ5VAvsFET1EULzTCoYLSp+dpL6g0WhuLTuY3rCqBbPBuZX44Am8C1cAyY/B0IbqKjWkdQEo0Zdl0NhYROIDIljBfPFczG3Vo6uvdzQFkBCfkdHPBQf3BdtfAp8epjCfBIKvbxGq1UygOcE7nC97Jg9d9xgFNfcwID+WpvahtuziOdLzvk4QDGGLadex1vde8IfxpqbEJITkN0ENDXwyCIPfMVCkbMMxM0B4BvHIg/1j+Dk+9/ga9p5w7ftaiT0VfggGg7tRNvxV/FFWCFC8nzwF/fkuUZiUnroPIU3Ju7hHzpNZLsjp5Ce0OcyfXmAnI7GLHkY1nZwUUIB+njAXR/PYjNdaFPKst960WK+eLJHRqTQYMzblP4nwACbiIrEARTPngAAAABJRU5ErkJggg==" alt="Candle" data-type="icon fatcow-icon" {...props} />
}