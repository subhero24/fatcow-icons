import * as React from "react"; 
	
export default function EyeCloseIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzdDQUEyNDRBNzQ0MTFFMUJFN0VENEI5QTVDQzA3NEYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzdDQUEyNDVBNzQ0MTFFMUJFN0VENEI5QTVDQzA3NEYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozN0NBQTI0MkE3NDQxMUUxQkU3RUQ0QjlBNUNDMDc0RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozN0NBQTI0M0E3NDQxMUUxQkU3RUQ0QjlBNUNDMDc0RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnyGhxgAAAR2SURBVHja7FdbaBxVGP7mstfsNdnNJmmixrTZtonVKg2CJQjFqq0pVGkffFCQUsEXQbEqagvVtvqmQl+KWFqUEktIQqWlBFrwSaOgsaEmMc3VzW2zm+xmZic7V/+ZbGpIsjZtKvEhZ/mYnT0z5/v+75zz/2cZwzCwlo3FGrd1AesCmJWIvPxh9BWeZV5gYGzkOOZRLLtzrKGGVd1oV3V8v+eT7vN0r69GAN92bHOj1+t60ed1w+1xguc52Gw8DPrAWDqSIquQpCwyogRhRoIoqWeePd71BvVqdyOAaX63em95xHMpHAnC0LKYTo7B6S9EMFwOp9cPN2FOwAIVDANZylgDSqkEMgRZ1pGIpzASl/bu/6znCpbKXiKAbXkv+urmqvDXmpbC6OAt+EvLEd1eD6fbA10nRw0jrwNzOhhLDMOyEKcmMRXrw6ykYGxMbN517OZBekTNJ4C5+E60oXZTsDU+2oMZIYXH6xsQCJVA01QYRG4sjvpfZtbSQSJYjkOstxOZqQRSoqO5/v2OAwun5LaAw7tLig4/F5pMjPdYK2f7zufhKvBR1JpFfs+r3BTBcsgI0+i/8TMkLdCy62jXgXkn5gXYrn+86Vc5M1Rj6AZq654my4lcI3JDX/1WIztMEZKYQs/v7RD14kP7TvSeNXcJM2d95X4/P9akE1l025NwOt3QKHLcz0JliWCRlUTc6urAQNKz5dDpkW6eupwlQbVJ0zwIhSLgSJIsCfgvqqTpBMewCBeXwu4Q/jC5LQEbquv6vX5f5cxIN7Jkk7WCVpSj7rYZlquBUDmyTnsrEHOaLP6NJfZtbV8884PLF0Rq6AY0WSINbE7I/eA1LEc5uwMOTxhN1/tPvf1V37fUM8iZCyEpaEo6Eb/5VE1gnzdShUwyBiWboUWorhIKNEWGpmbhCkbA8G58d7Xz5JFzsW+Id4Qgcrl8Lf82MJsI29JCtMJRH6yogTAxBHk2fXugf653ggxdJWJVhipnaRvyCD5QS9lxEhevDZ/84ELcrBExgmByczmTzMSgXOvMDDyxQX/Ix01Xhx5+xNr/Yvwv6IoZCQ1Og5rf84OilU3MWpYXVmyBO1CMxFAXWn8STh1tHD8/H/l8oeIWzJSZGJSW9tQvVWEbAlpsh4fyf6i6DjaX14pMzUqWnbquLoJiXe0FfhQUliHw4FYi3wpxog/J8Ql8flV+/cvLEy00/uhC8uVqgSnIRyh9s6G04aUdrk95LQl/UQjOQAktoCLYvUFwnGPZUiBNjUFIDEKcHKZCxCCtB5OvnR58OZaQ/6TuCUJmcYlm8hxSCggRQtmFt6pPlAWYnawugNXSYLTZvNXV4Aqg8z4YrAc/9mbPHDk3cDY333FCdiXVcOHvTkIgJyT40cHyPY9VenYXevgoyzKO5V6aTCsdHQNi2/HG4UvmbY44ZS7yez0RmYnKlXPEnBo6CMCdm6rF72o5i6dzpDOE2TudilaaacxpsRPMyG15zpKmvUqOVF7Jcex/0Zj1v2brAtZawN8CDAD8xVuQGH7ijwAAAABJRU5ErkJggg==" alt="EyeClose" data-type="icon fatcow-icon" {...props} />
}