import * as React from "react"; 
	
export default function HouseOneIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABx5JREFUeNrUVwlsVFUUPX+ZP52ZjgUpFUa0TFkMS4WipbQ1IsXQqkVKEw0S9yViXBONMRg1ghIxLkRcajBAAoEEkgIBl0oUjQol1VZb0IjaTTqlRSldp/PnL977/tAO7TSYGmOc5CVv3r3vLucu737Jtm38X3+u9fPxBy/ej1aINJo7T12JyRM01FumcyArwCkdGa/VopH+2v/EAG1DHiLxUZGI44nDcNNWZ13rsnFHko2t0T7gqjvuFzzfbfsALi/QL+Hu1VXYRkfW3zVAHfLfd0ky3bYcN2RSrsjOOS3z9QXYpZgo1XuA5W/vxLTFKwTx8uzF2PvIbfD6sZV4bn6yErcy/2gQGEtretPDOZWcnKqiYNLGIwvorGFjLmrsKAJ8YeWeE/BPmobQyR/EpcCkOegO/YIdy6Y7hmtofeQw0mkbvZAB8pD/vbROR80oDAqwScutoOu9PLTJOgLJgYtxf2UYvkA6Wn6vhm1bYvHeNyFd0JhHimBiWT70F65C8EJ5NtQAjnMP31EkGS1n2rAhBz/a/cBli5fgnn1/ore3A6GW41BcbmjeZLF4z2dMYx7m5TuTPKjfkI87E+gZ0QAnE1UXjrWcQG1jE0DJlvX0SyheX4HTHc04e+Z3KKqK2k0vYcus6WLxns+YxjzMO5fuWISnX8LW96/FbhKr/N0yTNtdqLV1deuiAnI3foRgViHO/tGEzs5TVHIqNJ8fe7NnoKXCKZdLCyWUVP0EvbcblmkgJWUCxqSmo7GmAkceu1EokVS03vXF8LyIR0Ban4vg9sVo6+vRKZbjULD7OKZmFaG1+Rg6z7aSIAlcopygKUnA0R+cxXs+YxrzMG/ryWOYknUDFu36Ed4J4yAbmEiyddYR7/g5WORNBbhzvAuHQLFLvbYAmWv3dQXGB90tzXXQqe4khuNcj6G95jqD2e/eipyvXsTld90C78w8WAY5ZzstwIj2o7f7T0wMXIHkRbd0hUPH3f2/NWCMB48XBdGwvwF1LJClqjuXoFy1sNSkeKc9sBpXLFuFZM2P0+2/IhoNk77zgIJE5Sm7NMiq04FZsRXVYZvmeY2QK0RzeZCaNhU9ejd+3leG9k3roFDTMmTsv+1TlLIB/j2F6DIMqufVOzB5Xj787hSEQj/Bsk0M+G0Pei+JJTttMkZzStI+nw/nGpqCQGAGuiOdaKz+BqF1K0E5i+UVuIg7odvW0dFxb/nYkoIShI0etLfXQ/UmOSlCgi2yzozqwnuZSk52keeyDCkWSpvVUPu0ooxExImtQEiNGWmhvaMRaWkZmF+wAltCSUjdXNrButkAo/QQisruw1GT2kD5qoVoOlBzrgWLkKYXz0PO82UkTMaRlx9F/SeHKQznlw6BhYyiPOQ++5YwqXLNQySnagAkjk76TXOwYnMlLDpjnaxbjXW/djvSJ9p328EaWN/bkCwHP5MMOflgJhZQ+fGz13zwMJbmZ5CLQ54RKr+PiZb7gka4WDh1sApGjQ0lJoeVtjw4k3XC0YV21q3G6rLPNnSY5AYjn3Y9dcLYU8IG9OlOTG0KCeed4nbj24b6geTk+F8dzBA04bItCznj4+XQcW+UI2WCdUG0OEQH3LAsGwYRvATtZ+/YcBmO5YzR3NenEt2ARc+jS+GmosLvUeIMkMQZ00wyRqLllYfIIdqcN6ZQVfWTLGv4c8yHBpWTl07OEDjuaCe3HehqMiQzQrlAllM749xQVAU+F4VJGiw5lbSrImedivAMlaP4IJv9FCl9ZAN0ss5FQlo6LLgtRZSULtscXgGdRYnBdPY2GMyMlSOXmSS81ugKly5fcOTYcXL4WIJuRKhdJzCAPYz098K/aDbWvKcMVAEbm7RwFkFnkDJLeKlqKr6qqSUeWQwtB+t6xAy06DIHAVOnVn5dJsmRB+SwTs/CmYhEwgKhYQaYVCeRcBeWvFmX8Nn87lgFQa/BxVMSIZDsYeGKQKBk/kXInp2FQxVfkndRmJTlhRtqE8o50XRE6BoeAoLJIOuO1uzH8FFdEkolOmePuAUnEcayLA+Ez2Jj2BHi4XBVVu8fNp9yyPw+n9A1HAHqLAYXGglNONaKMqQLCo9cMiWZNdiJZdoTNEyzY7yyIid8+1mHGdfFBgwwtBSYmpeanTvxYM2GaR5wF1YUF2bMuWbwUbWd8mca83DSSZaVyAeYZCXrijdK3V6APR4bxXGv6chfI4rDYyfwjttC9AKzMPNwwwpLOHD751jOCHgipPz6zHwxhCb+VLNFaaG/Gz2vVBNckcFXL9491Y3kZ+ZR2fhjrVpKgIIkkvfDum+KWTdzjFubjb0+BdeI1xSJ9YN0ep4up35Kj5g5wrRNoYFvLMKvlkJ8ykiJZ0C2tdfE189VoUTMA/xtQWv8SIPjv/DjQJ2m1SzFEpEyB0mj/FYczY8xpeEP4f/8E/svAQYArtIeA/RJ4h0AAAAASUVORK5CYII=" alt="HouseOne" data-type="icon fatcow-icon" {...props} />
}