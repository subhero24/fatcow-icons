import * as React from "react"; 
	
export default function HeartHalfIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTY3MTE5MkFBNzQ1MTFFMTg1QzRGMDk4NEU3OTREN0QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTY3MTE5MkJBNzQ1MTFFMTg1QzRGMDk4NEU3OTREN0QiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBNjcxMTkyOEE3NDUxMUUxODVDNEYwOTg0RTc5NEQ3RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBNjcxMTkyOUE3NDUxMUUxODVDNEYwOTg0RTc5NEQ3RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvS4OmcAAAZaSURBVHjaxFd9bFNVFD/vo31dabd1bGypm4BGZcPAEpEF1GRb0EQRJAbELWqiBDHESEKUYEgUoyg6RYEI/GUixvgBEkBWJW5swMZgwvjOhrCyrWtp1491/X6vfe957uvrNubKuijxLr+9vvfuPb/fPefcc++jZFmG/7NRY+8PVZRWGGj4hJGkSiJOZzJBbHAQaJrmwwBvPHO6ay/2k9LYo+t/O/qKwWjcA7LMaTQaiMfjygtRFJuDgcC7zy199gzeyuMJYBsXlO3TZxuXlVQtAlNpKTC6rGRX7BVyOqHPchiG+vpcVW2dJfg0PoZcc6z5pM1gNBSaiwohKysLyAQoipBLEAgEYGDADZFo9OCi6soV2D8xWgBTXzFra0Fh0duzV68B0WGD2IXTIA4NJt+iIW7WHNAvqARnWwtYLRZH9ZmuGaNEaBqbjvcUF99jLsifCv6hAITD4RFlLAsGgwE4joMb3VbweDyfL1n89EbiGIZ0WDuzqPDRAtOBuevWQ/ToAQg3HAbR5wE5EgIIB0FCxG9eA77rMuShCK3BYFwmBFZ9a/fuJOIbmk/2FJuLzKbcHHC6BiCC5LIkgaQigWEggiRRhJJiMwwFQgt1Om732bN/hmhioHpq9qppj8wD/sRREDovAp2lB5rTAa3VAaVNXmlOD7J/EALf74bC+RVgmjHd3PCwudNyqv1kdrbRnJ+fD06ni8QaGJwxzTAjIPeIcDSKoQhCXl4uVFZVryLcRIDWyDK1ucUlEOs4hYQcUKwGKBxI0XQS5DcaoLQaJRzB/d/AgytrgU3E79cwTMV9M6eD2+NR+jKEEK9jwSBYtBFETxiNRsjOzq4l3Cz+03E0XTZFjkOQ1aImfERRaZIcI0YxIHt9IFzpgPl1OyBWPhdCngEQEwmFJJOmxdWh1WrLCDcRwJJUFN1OZaZJp1DpRxMSBH+mGYQ/DoGrvBKoSFhxdaYtgWLV+sOyChuFRsMhFKBJEkzUaOIJdC3HA4OzUcilzIuPLEug1j+KHa4GiTgKoBXDGZpRPEZjuAjSh2388peqwOzwE68bE0gDkynMND2ScJDhSCJTluTh/ooAmQI+Ksocx9IgZaxAHlklkxGAfQWBJ/WBVyZB6rojKlh8EUGJ5WijmSAVgkzB4hhSKR12u4VwEwGx9zt7t3rCUfQEKRy4KGgmY4y35tOBUVaKDF6vH7Z89OFWwq0IuBGKOm5F+CZXIDJcSDL2wCTISSFye3xYMR1NVmu3IyWA7EqBjVd7Nrn8IUhgdtIaNln9JgQLyQVATQgiIpEQweVywweb39tEOAl3as1FrOGYrSsY3tvt9CpKmQzzIZPZsywD5GzQbbXC9b+69vbcvGkjnKkkBNUL/tUd1+ucgYi13+3HiqyZMB9IQWImSDplD0A7/f12nL3Luu6tN+sIV+o8MLrqRBHOxW1Xa2xuHwyFoiiCJCU96ZUx7B30IoPhdHu90NtngxdfWF5DOFQuGCtARAwh7Fuu2ZZf63cAL4hqOOhJZfvopBOiAh5CumHbF3XLiW2VQxy1vd3WSEUXMB+CJpZ1mOL8k/m5JtBy2mSJVhKKToIUFTxoxJe9DHRcwHv5toQjAmJ8DM52dIDlSP2GX/bva8AhA8T+mP31H00R0eYL2mdO0YV0scgTBSYiQgNqyieJhgW8hALiyftUzHHm0VgMzrSfg1OtLR9v/2rbD6rr+XE2+PF3THLea3IPWXM1bL9JiC3KzckBvU43IoL8KQJq8ZpQBChux2x3e7zQcf48WOqPbNyx/cufVPLIePX6Tps4EcGf9gX7MCStD0nCCr1ejycZgzJTsp9S6PrE0hqgyWEEn5GlZrc7kPwC1H326cpDBw8cU8nD6TYL5o67TfLUG+uN8P5bfKJthhSvSggJfUHhNKDlZAjEJSuBxd8cHtfOdVyES5evePbs+vrVlpYT7XeaeboPk3R9OMQ0RMn+ilm7pucY55TPLgU2zoOw80fgI1FobWmFvl7bpTWvv7YW+9nUhOMn2iYzPUeJ6tqN/Wz3ND+QxUmUzzvPhB8f/qeeh+ONjdDe1rZnwzvrN2OfXoRbzfb//LuPnB/yEGVVBTk1jeX3+r/79Xf/wsceJwWmTH3H/ptvw4wOQgg9Il8NC6ju9qjxlu62gNQ4jSoEVOL43XD5XW9/CzAATQ2a4EfJX0wAAAAASUVORK5CYII=" alt="HeartHalf" data-type="icon fatcow-icon" {...props} />
}