import * as React from "react"; 
	
export default function WallBreackIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MERBQUNEQkI1OUJGMTFFMkFCNEZCRjlEQkI2ODk4N0UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MERBQUNEQkM1OUJGMTFFMkFCNEZCRjlEQkI2ODk4N0UiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowREFBQ0RCOTU5QkYxMUUyQUI0RkJGOURCQjY4OTg3RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowREFBQ0RCQTU5QkYxMUUyQUI0RkJGOURCQjY4OTg3RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlkGiG8AAASWSURBVHjaxFfdb1RFFD9zP/bu2qAhUUqt4cNSNEIC7/wJKMEniRpjJDaQmEYTraGAoVBI2aDRxgRQUWOqD32QmEB48E2Dz5AgEUpFCMQgvm13934P58zcuXfu7r39SrSTTGc758yZM+f85nfmMs45rGQzYIUbw24fPHryYRTHT8RxnBcyBoZhAM3PFynSwXZx4siB3TiGS3HAwt5Dm7/2+qsQRfm1pmnCt19/B2++9QbKolIjpmnB91M/7MSfNeyNpTpQodP5vg9Xrs+IkFCj8257fhNEcQSe68PVP25JGdNWc6m3/YVBFaHqchwQrdFogm2ZOQcazSYYmAYadRnkfRBrtZTCkh2gTebaHtiVirSonMI5A9NAo21XNPMMUkVOeq7Ay3JBuObA2MSDIAhknjWwkVHqFF4RYgIlzSHoOAIzpjns9D8BMXOCwCsBTOvyIJYy1BWgFREghaGhvRCGYeIA6w5o4gAB88yZL2Hfvrczh5ON0SwGhIuR9M5+8RW8tOtFWNu7Bh3mmcyy4Ny5bwRoLWmbg+cFcO3mbGkilf9bBjcKhz3Ph99nbkMBLkXbinrkYIB2r1y/hYI4k20eSEFrqVDPtdrCMzaPC7RkruUm+m6JvtRroJzS1fY8sGxLRCCz0VbpYqkDbT+AatUpBIpOQi08uYm5pdFxKlAAy1SPAOwFITg9PV02FF7IAd5qNS//fPHCjiK2Q5KCCLGRsmQCxAvnf0wBK0CIcwRKruvh/G+//pLNaQRXcZzU8VXY12F/UueFpNkjHx2/tH//UAZQ/bqlwLRgcvJzGB5+R7Jpl572A+dtTN1pBPLJsdFe2rCN/S72fwqSv1oA1A/hxuyd0ru8+dl1ECPgPEzjzT/vLnj3nxtYn0bUSopHo4xC6do0XQSobZZGgOSMGeV6RfrA8lRcWulMA/yII0CrOUNchRbteEGEaTDE6FBuk3nWEX2VdNIjMlqMAwKgP01PJwCV1YeAGSpgJkxIqJ6empKAY4oJTcmYGhOyhMx0EM7XigBqf3B4/NJ77w5DECjAdTCRAJoJ9VOfwJ49r0B/Xx/ekDiT2TZ8+tkk1I8e7F0oAkUAXU1/vMCHmb/ud9z+DDmb1j8tTh5ijblx5x5GIko0GQxu6E8jspADpQB1iZDwlGXNdSXZeJgq06mhAyx1ldZ2vQeWVkIZuAECs1KFbsTJ/70wFowZ4Pj4KkcjI5Jx9YyTb8LRsYmHYRQVvAkNge4oIhDFKS2TMdRPjYpSrEp0Miffk6ZYp8p2yoRIRHSrsBwLDPTQ5h+OvI/eBjm0Wshwx8ZPwOFDo7hhmPE5V2VFRsOyND0MuS7jOka4tGtXbKjXP87ehKK84ptw9t7f+nWFjf29wqDre3D7/gPgBaVX6VHpJWAW6XXqDzzTl2NCMUnV0DLNLFSilAayUnodsnyeFqen6+NeLPcmxEX0VqnVah3KhigcNHbJlqOXRoKJPdXhnxoeOXS+VntsRycIu95/ZXS9SD39Q6bdbl2erI+/vFA5/q8a8cu/RHIs2bSWfFSw/8kBCpObMO0Kf5yu9Of5IwEGAJT5kGzQu2HmAAAAAElFTkSuQmCC" alt="WallBreack" data-type="icon fatcow-icon" {...props} />
}