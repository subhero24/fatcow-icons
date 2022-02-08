import * as React from "react"; 
	
export default function SpectrumAbsorptionIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjNEMTU4MzA1OTVEMTFFMjg4MEU4NUI0MDdBQzVCRkMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjNEMTU4MzE1OTVEMTFFMjg4MEU4NUI0MDdBQzVCRkMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyM0QxNTgyRTU5NUQxMUUyODgwRTg1QjQwN0FDNUJGQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyM0QxNTgyRjU5NUQxMUUyODgwRTg1QjQwN0FDNUJGQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiLY49UAAAbOSURBVHjatFdNiBxFFP6qu2dmN0YjIRovgqLgQQOSgyDBgCKK+AOeVAQPKngMInowguhNUBEhkYAePCgi+ANCggcvoggRjD/gzxKySJCE7GZns5OZ6Z6urvJ9r6p/dmevmaFmurqr6n3vfd97VW0QP+/s27l7/57sq8WrzMGd12Y41rtP779wx0mMd6bwuxP0rs/w0ed3wnmDg89VGCa78ctHObz08eg+XLjQx8X1HVgdXY3JcACMFnFg/AXggR/+ehLZbB0L6er3dvrr42eW3l/j+hl/XrtpsGd/mq/c8vTruPHxZ4GBQf/N9yCWcPuL/HdAanT4p9+8DeM9ntr/hvQHeHnwKoyp8OaDhzCVO5UYq2R4xdEp8O4rJ4AE+ODoPXBy89PP/jh45Mjo4s03P33d8vInqwTQu3tQfn3Tc4ex9/4ncOnkCSxUq5gNz2sEylNHMe5X8LsMFvb2MS1WxKDBMo5jjN0YlRvq4bfTM7i45rEx6cu9AcbFIhbynTg/LPT5l8cddu0Y4rFHboWvJvjw2PBrWf5ewYbFfukO7H34GQx//g6j07+j3FgNXkgEKnGJ19YalNL3Eg1nHaysWkGuxS1XSSvljtyXhxwMI/c8JzJ63mFtfYa/ljbw40/n8dADt3HNA7RNAAPP0M1yTM+dlfFeQ+VoSEYZGxb2NCILVY6tEuM2NF5Ls/yvpG8rnVdVRrE4+QlriRFvcf7cWKDL12uAB6TAkN2qLJEPV7C4q6dG6ZWQDZ1p5b804NfKYtQAjZcEQNIFGGNi5dpyuF1gEJDKtT6HCxGVcReHY3lWBaNiIauzwM1KcLaxohx64uXa0bANQKgkmeXkmVyIcRJAr2WceKRgKMCyz+naSqGNzzmXFFbiiBVk5azSNZos4LW3M0T40sRQGSPAPokS9BxIishrGwF64+m/fFMQni4jLS0ZAc7zEZRR72d0Nn46ESgCbOGOABguw7n0gEYRKFBqeDuaJP8EUBmSkAUALuJWCoK3ZQRFSmZCd6SgjQCKMnqfiIITDTULjCEF/ZoCqOqZVobhl69nFnhGwGjuN81FfyhkAlfvgwlSMAfAMwJdCphGrHBcRQc7HUq1Gx9UoIGPgNTzbpN7SQdAWYalqIXZzG7RAFkqCwk5ZyQRgAu0e82fZgKBqSYVUKlpyX61BYD2mYaksqalCmWhKP02ESiKlrwqqlcN2QjR6EI1BTROMwQKpQCbKGA/8UbrAitnVTMsbVa4zSLk0gGAjS4EAOqpiQAI2YQIhBoSWNdISTRKM09DEsdzrgrQBk3PijkNSMiLNgsMq5h6aqK0oggRikktwtAPEWE1mKMAMQ1NqAO1xIqZ30YDRR5FaBoRhkE1BSFsjmNMoMCgFpnbnAF1BAiTpPO5rUUoALaLgJ/lkX8EDdRcmy0ibDQQCxMBMCrbUaDpGCJWe68izF1crQtgWsS6L9NcqRWPpTgEtqWAAMJG0gEUAc5RYOrxsQZEEHnh6umdSlhToBHO4kQf1a76j+lUhQoZM4MeJt43HtUUlHUEmFkxC+o6kOd+GwryPIzwPqjdVrptBnlFj+tK6ExjkBS4mBd1cpYxCqlSEK6si5lQRQ3MUZBPhW7bCK+NgI22k8ZgbS/UBdcIVOtJjICWKRMONcyYcB2oYAS2UEAN5GHHMzXibh1oKWjrgGkBxSiZTt40FOh2negeV8USnVOE85VwEqd63YbrXa/O9xAGrx77RkM8oFhZ3qNZMXpvY8xUI/Ch2MVlcm5Gm+sAd6tcva29CKHrijAJcOL+3lDASmhaDWCLGBXwpiekYWsWaASmcUo4QvEsVx/cupPbOoAmDY2fB+AajbSnn0ao1m09kMiAchJkq1PTIEI3t244E7puHXDbAG0F4azbBKDXk6151i6c1JuRswWStNfxzIXFO9yazn3TqQOhb7DdR8d3POFyZdmKUE976x6nJtMhTCohSDPZO4zWgdZQi8DpMdx1tudwVA8DTdw1TeM1I0bdJLJmmskbV5bh0sa6lJziFG0TQHF4uTh0udiQt5mJvIHJwCSFlhcqOEuQyaS0J00Aehe231TYS9GTvp7ykfVSpP1M/nvI+myZhDscZjm+J+sY2RXXxfjGaA1LSx8fom1qYPr3uDrz/G+jB96+q/9OseD2TfsLoV4Ltaf/9ViXVzOseOxYyzC9bNXB5T/PysvpGMVkrCI899NJXPjPYO3SAtZHV6HYkHeD6TXy/LK6uXT6Z5jJihx+l//495+3XpqMz56h7TrC8iqLPdJukHZ1rKJX4sOUGEnji+cqI9ClmAFbjGDMFQLAdCnoeSww+F+AAQCUhRBektcBPAAAAABJRU5ErkJggg==" alt="SpectrumAbsorption" data-type="icon fatcow-icon" {...props} />
}