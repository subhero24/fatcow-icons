import * as React from "react"; 
	
export default function InboxTableIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODQ2NDcxNDdBNzRCMTFFMTg1NTNCNjZDMUZBNkI5NDkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODQ2NDcxNDhBNzRCMTFFMTg1NTNCNjZDMUZBNkI5NDkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4NDY0NzE0NUE3NEIxMUUxODU1M0I2NkMxRkE2Qjk0OSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4NDY0NzE0NkE3NEIxMUUxODU1M0I2NkMxRkE2Qjk0OSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsktOFgAAAVwSURBVHjaxFd9iFVFFP/NzL133z6/ECuFYk0RlU03C4OVgrTaEDTIIATRPyIUoYKMMIgy0uiP/ijrH2FREgoylN0CzSB3daFFU6moXD/aZXPXysTFVlfXffdjOmfm3rfv6/oeITXL7NxzZ+45Z87vfD2B8uHMePvAFzdCscKPgEiXHxDmvzZPugotiHAlkFX6wMW3VjxNLwNUGZMmb/lK3+7BPJl32W0rKJDhm5vx7VOAzNBFZME288nh9SuteHfqBnp2afop9HogDIFH9iPmScxwrZoCQidml2Q/JUsUiAztOfSOpxbptBKWZrV1AXpVFIiRBN4c+hBSuoTj+HdCaOIbISOu452h7Qi1TKW3DX2EHFlgWwHPmhRAfHj1slnGiWSJB/Ll2jrOYPXj8xFG1khptB8W86xJgQQCySuHgSiUbz1b6IgmrYxIGk3PMirmWaMF7KhT4wILQ1DRe0fZ/YgtJFNo4q6qhFxlH4gF7uv4xTATEEV7kpzTITvv6+xBFCUCK9AdPQRBhNdWLii6RM0QrGlZYERXssDnhPGaJxrzAivSLY0Iwn8BgY5vLHTlj01Ukm/wvo4xT6PzPCBqVyCM495zURa8/Mz4OvSl51iP55lGS1HMsyYFAuGZdc+hU3EYFmuvSIJLcw+ZOaKbsk9UpA+dJggivLT8vjzPakN9tqm5DW8cMfn771DrK4FdkzlM8zrttX7TY9arUTo9ou15HszT8C4JjEK7qN2bW/Zm69xVidepGEMT25HNwiYTx35hHDSFTpjLgvBh3iyjUIlkX+16tWVvvStX/dB3mYCx4NfTsSyBlHFsTCeTjekqu3qqnM4Y/3FQT+uERALxZN4sg2UlShifat30WDs5zMqzA0M4+mM/jjRtwbGXl+CTI2eRzWYxd0ETOZ5D+IYmo9o8IAhfTc5OmAtLh4R/ZIR7ON97Gpcu/kW1QWDto3PRvP0olv60FUsWzcK8hmnIBdi/4YPOVazApF2vLLu6ePlaMoc2eR6hDz/wKaQiqEnTcVHOxKKmhZg2ZWIeL1Zu3dJ543TXOawjQTxO/9qLnV8ew/pmD7nhP8n65LRsVeUi4CaH7n3y60/x/PuHJ3MUZMIwwPRZ9+Pwx5vJw11jF/YbBlaTMguXv4jvTvqYPfMezJ8zO44Et9h7pQ2oU2fP4cIfl7C6ycHPB3dAm3PCVlTN7YGPZc+9R+tu0x84xm/Isv7YNXgU+MrxjMY2edBf5OFMxw7Mf/IFDAwqnP9t0MT28RP9uDM3mA+74yf7cZd/gcq/gwbvMs507YSXnRjzSnqCCHRXIyuyGVI4SaEMx0aMmaRTXP85VWjCv6+zFXOanyGFAsNu44P0XdBjlBRUgTY+YGkIhd7uNngZEi5VURpjqzLMLEsXJiK2dpS7QZlLQZoOqCRt0jtNewPfHzC3EEnMaYw3ock/unFdXZYWWd4AaXZSZWQl6b1AgesUKQ4poCp1TnE3xlFANoyCcemFwtkP2KgyrQiTAtRksKxiBXiSVi7d0mBWsXZq+3rus/DufshWnYSLsDfP/X4CONcObQqAqFhmNUHEssoggE8KuI7BME17SQd7x2ZA9fVZBUpKZChmYA5lpEjcworcpPqlEPBlglHKZqqkAy5xBdob6dqKIAjK2DM/h0qg19hgkk/q0FZWon/eAjIcNWGY0j3nu/TFjfdieORmSaRYD58yMUN+pGwvibROQxlZRRZggS792JiQ8aBvUSpZZJbOTJ1cX6SmLuykGOcqPFhW8jUroK+N+t3tB088rCONmoeo2MnX9imZcmQ06I49wvxea6B5R7Uu+TYOjmMquxgQsdD6+Heb+I8UYHvdpDmK/3v8I8AAFFTZnQegpkoAAAAASUVORK5CYII=" alt="InboxTable" data-type="icon fatcow-icon" {...props} />
}