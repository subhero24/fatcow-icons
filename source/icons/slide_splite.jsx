import * as React from "react"; 
	
export default function SlideSpliteIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEZCRjdBMzYxMDlFMTFFM0E2QzlDQkNDMjA3RDEzQkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEZCRjdBMzcxMDlFMTFFM0E2QzlDQkNDMjA3RDEzQkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4RkJGN0EzNDEwOUUxMUUzQTZDOUNCQ0MyMDdEMTNCQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4RkJGN0EzNTEwOUUxMUUzQTZDOUNCQ0MyMDdEMTNCQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiD4J5YAAAWvSURBVHja5Ffrb1RFFP/N3Ht7t7tA5WEQNOKDWlpKxdJSXiEEIhoUqI8EEw0fjIZoIiRG+eo3TdTwwfdH/wJKCUahxARtkUpBUFpoEbE8quXZXR67y32M58yd3b0L+5XywZucndm5c+b85pzfOTNXKKVwLx9xzwGQ2Nt37Oimtm28wAghIKVMt69bd79N/5Ns/IX168d15x2dnTXUpBiAW9j5sYETsCzJ6Er+oR9RVFOQegeAFPxG6XdKi0BIHRZllJXRKTRhGCIIQjQ2zIGxWWUXzOh/VQ4GCMTIyEhkWJRcxn1Wupx3cCHr4GLOwWjOxk1PYmrCx1Q3wGTXw7REgClVPgENEQ8o25s5cwYayHj8sUt7oz+2jfNk/OWX2pHLebh1y4PnB/A8H/kAyPoC2UAiF4JE4ib9dy2FJItNIkNqyaUWecjScYZFYtsWHPLszu++R1NTYxkwOw6R3R+5SuHf0VHk8x6yBCSfv4UbHnDNl8jQjrm9HlhIU9+VCpOrQtQ4AQm3ChNIHMuC7VgagEPtg7R7XjyyUYIg4x6QQhosoXE774KkEAtViilzwKJxS5pQKeNnFXEkklIYFcUfxkZFDzBBLEId9W9PR8UFA6sX1SNP6wyez2Df4EVDPl5coal2OupmTIJrC/x2tL8s5VgKjGAboQFT5gEGGrFfaQ+UIqP0zla2zUX7V3145ZuDePSBSfADRRLC90lowVnTJ6H96z48+1kfljTXc06UuZpBKmNDxLZWFgJhiRJlTSsJzLKWBjxNC7+zdh6qaI5NWq8tn43FtVOxsHYaNiythSOZfAKb183D8m2H0Da/QWdCYa1CqjM5K5OQ3SMtg7aQ84oWqsOyT37FG2vmIUe75bEPOo4j6UpsXFEHWyh8ufck0rlAv8t5Id5c04hln/Zi/9Y2HOk/qUEoDYY9YJUFt+gBfl8gYYjIUPPc2dr4prVPYeexSxi+kseGVU1YPP9x9J9La2Um49GzY1hCY/xu+Gpez2WdJR/3ornxCb1WGJRIiLACACGjFFGGsfWzH0Hrh/vx+vMt6BoaQ00ygVNXPew7nYFnFDXBTJ/H+B3P4bmsw7qtH/2CuXWPmSxQmoRsq0IdMCTU5TQqsVWpJFU8hVR1gpBHSpwgXnnk9MNjqWpXeySaJ7Sum0rGC7JO6zgJZCxfoiJhODjw59/o2TIfu/b24RFiuJtIIJFwMWFCNQJ5JwAeSyar9Ryeyzqs2735SfQP/oVCYmkbQpQDYIZGRccqAmAWHCYCdb+/ELt2H8D0yRPJQArDJ06hu/c4XKI9e4o9kqD+zzR2duiUnsNzWWf/1kU4fGwIIdcBg4BtsK1CVth31gFdCQwZJQ4cGcK+d1uwYttPWP/iaoylM/hi4wL4SuLsWF6n5LZXF8ARITZ9ewg1NSl0bt+D7vfacPD3QUo7GxIiFoLyOlA6jDgEJgu0C0QUlpDGuvsGsHtLK575vCviBh0uP/Sdw5mMr8+CWffZeK75IWRpk50dXQS4Fb1HjkPaTrGMK1Nd2YaKhaAIgCcqU4giEopiKVWk9GPvADrebqVTUWBwJIPLN/LkIVt76/L1PIZHM9jxVosuxT2HB+DQyVo8Q0QJABciUQlAZCwqxdGBIkpXBR6nne7pPYFrfBoGli5aVsivqDISsf44fQFnzv0TnYZuOdF4M8pkkRCy8n2grPYX722kqmMWHW+6z6K4mIiiK/VcfZPiGCudslxwON4FUZqwd9457XiO8tNQPwd7uvbqBYrHqrkd8bws3YiuZG1zI3L0JWUK3YamuD6JR7cj6js+zVeIX3LZeMOcunjZKQGIs3LVyhVaxuM6XqwDQsrx/x4wNtkDKpNO99C3wdLQnP13+aNAZ0cmk+nR2U8/E0keJplWiZR36fFJLpGcEcZoNUniNjrczYfdnGNO414/4n//dfyfAAMA5oBnOsAcE3sAAAAASUVORK5CYII=" alt="SlideSplite" data-type="icon fatcow-icon" {...props} />
}