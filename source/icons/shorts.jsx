import * as React from "react"; 
	
export default function ShortsIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABnpJREFUeNrkV0lsG1UY/t+stmPHbtwmaSNoE0hCS6tuaUFFHEFChRTEeoMTcOOAQKoEXCqBWA6cEBIIqSdKkaA9sBQJcaEXWtSiNrRESjea1mk2O/ESeza+/81MPJPFhVMPjP38Zua997/vff9q4Xke3clL3GkAmkQhROzd2x88dIzI2e96LlGAL4SpYK4QCnkYc10X75sHwEj0bOHXX6co+FW/O/TmySdxY8cALLmSRO7+Z595Hbt6cqEiVFJUQSp6wzDok88O0muvfohhhzBKLn9cj9wAlMON7x3/WR4EoI9+/dF+Xz7NtwKQkGrB99L4r6QpGqmaih5NVck0TYwJujF5CkwAILOBj4PNbNcmx3bQO3j2m4V727apr+dhCtSdiAKQNhBRgXjxlW2Pbt3V86OCzW4VCovEeuSfhulnVnidi+ZhAwbALPmq8uR8n3JlUXld3d0S0Pkz448d/vTciXBgKQOqoom1DPSewQHqHxwkVdVIBwOjFy/QCwcO0cilo3g2SNd1Onv2DO0dGsLphunLb9+iHTt3UL1h0Zbep+nI8Xdo8L4tZDs2WWAASqC/zo+wKvO8T2gHylIA2TWJBxVVkTqVNNohnTZVq7MQZpFlWZJWm+nGc7U2I58tfrYamFeU88N13DN7Klhl+QEAWgmApmmiL5lKSQP0whbYet0uN99JfXJP1LDKPqOe/yzn8ZvoXLRkWwp2JPqizC9jwNCV3nDTWMDAx7KrRDFX80dsJ/Je+PNE1AcDhbNM3VB6WzKgm+pm00yEsvwmJUGwU13m60LEgfGv5SwEkEUMsGmYsB1lU0sG5MSEKQULxbf40EssuxY7Fb/ncderRTyJAVVi42xTPGwmEpApklEGol4ghp/r3+TCrW6OXydj0gho5EBEMJ4sLLzJgASIdvr30wg8HnV05Ml3cwGbqFE2t4YuXriwqH/uG1adWP6B5wc2Hv9qdIq1EgOQatM68rkeemr4Dfrtz8Okqwb7JazXP0mlOiEtmRYNzKWhoQcAAB5gOdLl+OJ5GzZ0U1dXN9hxpBtaToP23v8SfXPsfUqmivlAN15UBdr6ntTjRiKJyTWEUSfYBL3rnyI8tZ8PSAYhx2G3bEh3C3MDr3McTwJjV5XhGeMNq0IsH/s8EbIfA4BtcrlsF83O/03xFBS/+C2frHfjEPV07qPu/B7Jxmrzw/ez89eJ5VuW64Z2EANgJpQ9yWQGExaWWPvSy6Wk0UF9d+2l9z5+Gb6dpVQyT61Su+/GC5iXoXRGf2QlBlSoub0t3U6VhdlARSuD4H1Mo50mJi+TgbA8OX0FfaYFA74/V6rTlIJ8oXjZFQGoqrI+ncpRo1GmlgRgI1UxaOLWZWRKnW4ULqE3b1t8sA2k23LE+yxTwfahzgxTqJs6JlZvowJCQEnSfHUGQFSam5siU0u2Lr2kCmqIhLpU1fbdnZkoAGXrznX9uVwnrLZOdSAlIVY3KAwZappu3rxC7x48fWCmdAOA0i0Nl+WxXBvuyPts27VuQGbtkP782uQ+TrPsy2zhrRhQVZNcYVFtYY4fJwqF6ziV1VINLI+DkONaAGvCEI0BaXfNiOjls7k8VeuzQRkWhFF53+w5DhhaiqYnC5z7x7G2XK3WR+YrRfk+jBNyjWiuRQiW97V6EVFyLcKyIgGEkVBNprTdiq7R6OUzEoSBU2pciqk6EGvoNc7V2ESDq3iU0LgaElxaWbADbbY4QeX6DM1XpoIihCOjJe9trh8Q2BqoHaaLcwA/g2io75bpv5mEvOzGDTuhn3VUaxTJw2LEL7xuYCMbmrUlzULYlEl10tjYKFXK9h8MoFSs/1KYuDbYf+9mSqOWQPmKslFDvYeGnhQdxqbJss00c1QqTdL3P3yejTFgmOqWYu0K3SqdQ1G5gDygyyKUrVzmA02RhSnnAgHNzZVLrNki1ylgSMyXcaugMEUq9gtTV4ZiLlZlSJZh2YVMAzEkS7xf1AZU1pMGqjl1spHouhHpdTJk7zdWTQVl19Wx0k8M4OrY3IlKpSTVJOegdOfynfumHF8Wb6nqalC0NhkQ4Kx86uTPaZl4ljqT5y1zLmaiPZfQOb5ksqYxNT1JR45+sTT+xdx5sWKAQdZr7ki0LM/hnkulNXSbGBi52ACvcY4J1t2NlvmXa2FcNI12NQTAJ2lDM/7D3zpO/lyLWRwY0VKr/NFZLT3W5fr//b/jfwQYALJrJNVSKo66AAAAAElFTkSuQmCC" alt="Shorts" data-type="icon fatcow-icon" {...props} />
}