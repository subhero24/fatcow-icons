import * as React from "react"; 
	
export default function MailBlackIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTQ1MDVDNEM1NEM4MTFFMUE2ODBBRjY3RUJGNEU2RDAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTQ1MDVDNEQ1NEM4MTFFMUE2ODBBRjY3RUJGNEU2RDAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNDUwNUM0QTU0QzgxMUUxQTY4MEFGNjdFQkY0RTZEMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxNDUwNUM0QjU0QzgxMUUxQTY4MEFGNjdFQkY0RTZEMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pu7h46EAAARWSURBVHja7FffTxxVFP7uzJ1l2ZKVH7uAloK0JVbQEmsFapqVwqIlPMiLJtWEB6vVNKIvxvDDkIYCCyum8UeiNvpAm8ZX+tCANlb7xj/QRlMT3yHRF3ypuzOe7+7OMAiaipvy0iGHmb33nPOdOfec795RnudhNy8Lu3w9CECJ6K6urkU3nx9wXdaDVxhWJUbyEPi2LBHbvraysjKoZaQ8L+Ajo+NYW/8NLEpLWVCipEqI7cnLuZ4LpRSSFdWYzUwPEJsBRF3XRT6Xw5WvFjB5bhIff/oJtK0lUuv/Z0LQ6T+Xz+Hd4XcwcW4Cw28PmzFi6+IyiJ6HhoZ9mJmZwQcT47h48WvYtm0ipuwIW7JJkQxj+MxpTE1OGwwPQesrHShLQLFYDHsb92EuM4eR0VEsXLpkgjCZ2MFlMivgr59+TVKeMb5t8eW523SBK39aa8TKy5GorcX5qfMYGhqCdhwjkbKy/yS+HX3QF33SNzGI5V86lC8zyTeuqqoy90xmGmNj41hcvGqW4V4zwTdn6gcHX5QlLaQ9Ho+bMbOcIfbVYUNbO9IelimKqpoaOI5GdnYW74+OYXlp6Z7qwV/3k/39yGZm0NjYhIr4Q5J2t7DyytqeiDxPGUBmIchEdQ3ilZWYnZ5Cvzh0IhEj/5R2f566tKEtfdCX75cYxNqGCQtL4BQVtRjRsPnAQVQnkpibyyCd7kVZRMCciLmHxR+jDnVpQ1sDXgzA942NLggFIEGZwtGbs2BJyg+0tCCZrMV8NotUKoVIlG/qwCkrijxzjHPUoS5taBt+eyOCEeYWK2ALUXbCisUAKKnjx7G2tiZM5mF+Potjx55FNBoN3p7PHOMcdahLG98+7JMYMHXkhQLwDENvAee9q7MTFy7MQ0sHPNd9Ark/7+KjD7Po6OjE0aMdRvjMMc5Rh7q0oW3Yly/E8ldBB1uE8qRAnE0V2tbWis+EltkdqRM9kA0L3T19uPnjDbx66qVNuocebzNzrptHqqcXN3+4YWzfOnsWt27d3rwDqg0u1BuDhQz4vdrSchBffvE5mh5twmOHWg2jkQeYvZ7eNNJ9z2/pfYrRkd+96T78/NNt4+ONM2/izp1fAt8q1IpWeGcutImD/c37cXlhAU2NzWh94nBAQj4t87ff775sp0Nb+qAv+nSKRR6uQu2zIAmICrVCmd9cuYz2p45INScLu5Y43Ml+wC54sv0w6tceNj5fPvUKVldXDZbPhnpD2UJC2ufb5WW0H3kadXV1QUp3uhkVllahvr4eSnzSd98LJ01gW6jYlv3/+tI1qepnpKejhjqVKs2JjUE8srcBiZoEvr/+ndD0wN8CUAxASQt1BxsJ7NIfF52KPQaDWH4ZmAAsyxYyiZmaLHwnhI4MJTx88j+zQeIiZhCAVOb62Mh7FWy1+3EViWndD6xSpJk7MEp/Fv63c+rvIr8SkPS3RyRynz8J7or8sdvfJVAPPk53O4C/BBgAso1m3RfZa5wAAAAASUVORK5CYII=" alt="MailBlack" data-type="icon fatcow-icon" {...props} />
}