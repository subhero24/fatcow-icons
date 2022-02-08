import * as React from "react"; 
	
export default function HttpStatusNotFoundIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTM1QkQ2NThBQjM1MTFFMUE2REQ5Njc1MzBGNTBEMzEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTM1QkQ2NTlBQjM1MTFFMUE2REQ5Njc1MzBGNTBEMzEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MzVCRDY1NkFCMzUxMUUxQTZERDk2NzUzMEY1MEQzMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1MzVCRDY1N0FCMzUxMUUxQTZERDk2NzUzMEY1MEQzMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmMYxYUAAAV+SURBVHjaxFdrbBRVFP7uPHZn9tF23ZZSKKUtKkqFgg2llBIF9Qcoz2hioiAEDAoRecQEI/6SHyYoSFCiPILBRxQkEf9oCKCmtlCUIA8fUagIApZSoCywS7u74zn3TmUpbXGxwCQnc+be75x73jMjHMfB7bzEbTfgBuW0nfPxkk/H6/xwKYFFw5djKbHJW2L1zArkHHwZjnP8C0nM89qtioC560VsLx75xMicXOVwY4OG+upN1RUr8BA9tqYVynQN/ngqhgdDvpE5ZWOBQ5slMc9rvJeuU+ka4Okfxid9R88Bfl5GT6Yi4nmN9xhzswzQvpyFqVl9ivL82UHg/G+AYSkintcyaY8x6ehNxwBvnh+r8yqfpLCvoSc6OGAoYv73NSgYNROMYWx3G6B/PQevhQcMhe1pBuIRwDaQNbtEEvNIRGAmDuEOwjCWZbrNgNlVCGdnYGHvciq841tU2Cn3AW9SkqwDXju5FfnljyI7Qyxkme4ywHj6fqzOHfwIROxXNWsM8tjQoQtHEvNyjfZE7BfkDn4YLMOy/9cAsXEaKjND1oScgcOo4WtIgtKrUaFrJhJkCxPzas0rMYxlGZa9XltezwBPYSZW5VeMA87WUlY9ylOdPBY6opchiXm5Jvc8EtubZFj2em3ZlQHaV7PwTGaPUElGYQEN/KNKOXsr6CDHRNPnZyQxL9d4jzGEzSSZcJ9eJayjq3O6MsDbw4cVBQ9MJo9+IMWs3PWec+7RkTU+JIl5ucZ7EkPYpp3IqxgD1tFVW3ZmgP7NHCwJFRdZVohS2HLGzbFxhYSJZNKRxPxVe4ylVrVJlnWwrs7asrMC8e+djwul016AuLSHKi1KSLKVPx0c12zD9YufuQ7iLt+mVVB16jYcuwz73l+JIcsRoNWL13jakfe1c/Fp4YjKe/y5dEJrIx1kqDBzsWma4i3VinKNLXI0ZaRB5OUU0X4yDuG1oVtBTMo7VrKuDptSzOwwBeKdx3F30MaEnEFl5NkxioUHb3wYgxh6ingKte3Bjt1xZI1uhChrQNaoRuyoI/ct2jPNdnhKRewYtWUZAqTzbdLdPurtDTDL8/FZ3vAHKewnZHyi5wQWr7sAj0+oSFg6Ziw9j3FVFpz6QnnnZxkR2o82O4SPKDxPSB5UpKvvqDEYli8jYHZmgNjwFCp8GeaA8JBSEqLC83sx8dUzGF9lq8hxn5PSIyda8cpUqv6YLu9HTtI3iE16AyYmLk7Fu23Z0oSM/v1Auku2zMBjqVFINcAzMBdbi8dOoj7+U+bw2+ootu2OYuObvRCPk0LTzTt9yMYdIUtI3blUHNRUx67GG257cmdE/wLrLsjER6lt2WaAtu15LAj2yvZaPbOoeKisvR5MX3IK7y3KBYr8Ug9iBDc90n7DVNGQd/LWvNNP+Iar8ZddPA+oxGWwbjrDorPmt53dFgrf3nm4WPrcTAjRRAZQSH0aRNGPVMEadNZjCFyMJOA0lKHfsIOoHOTHBxuKMWXKYdQeuITD398H0WMPRTwF30z4+sHkfVLVPqXEccLY9+5aDHkLfv6glnGsmYs1xeUl03tWlZOXZ913IG1Zmrp7BURoF5zGCspnEju2n8PkeX+gORJHRkDHgc33ouAuW7mTij9FL7BIUsr8Ox+sEP7+bjfq635aP2IlnuWlwL4FiAxaMJsSSd4nEgopcIV0oShBbvDk40PIU6k8oKkDOOdOB/hWJ6XzHTWuzTD2L1uF0mUIcgItZXkLEUXFSXY8MEVKxQh3nATdu9H25neuxZvt/rx4WKEFhi2VcPNCnI6hZv/StSOcRLsxdZN+xXh48pnMCtcPet8i+798wXTTxW+O00RHhXuoLVNx4/+K6V4c6BhRFLf7+keAAQDPWrG9S6Wq+gAAAABJRU5ErkJggg==" alt="HttpStatusNotFound" data-type="icon fatcow-icon" {...props} />
}