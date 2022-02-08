import * as React from "react"; 
	
export default function AlignIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RURDMEQ4NDExMDEyMTFFM0EzOTVENTAyNUZERkQxMTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RURDMEQ4NDIxMDEyMTFFM0EzOTVENTAyNUZERkQxMTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFREMwRDgzRjEwMTIxMUUzQTM5NUQ1MDI1RkRGRDExNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFREMwRDg0MDEwMTIxMUUzQTM5NUQ1MDI1RkRGRDExNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ph8ZrSQAAAOFSURBVHjavFfdS1RBFD8z90Ndi7LVXuzrIXqIepOIhM2gHmxlay0ItMee+oAggqDIFSQKiiJC+gNK8iUk3FCErAVDhSCI6kWwzJA2U2Fd2q97pzNz5153V1fd3WsHzs7snTtzfmfmnN89QxhjQAjR29vaks97ejwv+/peMIAAM03AdlUhXCkFYCx8Jhg8jX8zUKSosq2WbR2iCbQGAkUtgqD92FShxkoFoMl2M/ecy7fvU5aXhKw4ke8clz27d9n9ynIA2ELtjq7rlvECANCqA0K2BEoQtdCAA2AVsQGUIwUBVCCA/yGFAVToa3ro7BAhLgCQixBFdY5gvUKoWj4AQkT8mXOx5Nve/jdNJg+ydfAAxXkLsXSEh0R5O6AIjxMX2s9exrZ2tePJE04+s3xuWQAyVjc9fW/vowpitDDTKHIpAmzNWMBxqkAatPCO618FczoADCYma5UKa/FeeoVDKbmrxKV4l2upOkSfBB3mVHNPFCqZgZ5nkvBzvNeKCxftM2ZC/aFzGGmGw5wrMKF4E/Rqr0gz4hICHtIirUVqLzGnWohmtaotMjPd2wLLNsvJlwIATFA9W1wznR0FfO11MCHBI6iRL7sYBIJrSM6Sah4+i9W0StC37uS5kUc75QoPMUOk4jIAChEAzGicRFh3q48aKRzMYKimxXgCS4YUqlkWEJyrKBCNKyO2xw4AjYqzSewPTVwskgmLlRzmdIyo1g78RY1K5a7q27qGf/Czm7t5lJ9JyqVYTEhbSwCoBSAjy6qYMN45kLx2vAEeD73nY3HU+Q2rB0hueui1na+TN5qPgInPTYu5tA0tSOhS8aF70XjXKR88HPsNVxq8kEZ6rg2Ff2WXaBT7lJnhmQ5/SeX4CgAyluddQ8n7wUZ4+uEPeD0KPPu8AHdbm9AgBjD+cMMaqq5ReDA46p8psRwvRETifuDRFKipopi1THwL+icW88ouAqpCYWohUXI5vgyASazu7K0Th+9sGh49uO8AfrQMoHjzGRgfQ4NKFhcR60O1OD/iWgyYloc80uMfrx7zTYfCkfNNjRZJofGZ2yebecHiViW07CLCrJowJTlgcjbk9/W8G4G6al3UffwZ6qcs/YI6Zeezm2W5DQKiHX5ftzIYUagAMG8/d1OIvB3jpw9qpBGbbHiVuh21Xm795EYQkQ1Al0STzqNbPevmHHeJinPknwADAC5AN0q9o0EEAAAAAElFTkSuQmCC" alt="Align" data-type="icon fatcow-icon" {...props} />
}