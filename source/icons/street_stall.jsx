import * as React from "react"; 
	
export default function StreetStallIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABzZJREFUeNq0V2tsXMUV/mbua/futddOlJjYIZuHbZpCCRXQECmqFKk/Sml4iF80IIpaqRIUFQkqJKApBcK/Sv1TpEqlDUX5SVWEoEggUSkQEO8G4QQ7zqsLiROniVl73/cO35l7114n5gcoucl47sw95/vOnHPmzKzC4se/b9cLDZiEr4b/FGKj0eIwSYwVcLSC57BHwq/pnJVja8VAnKRAWuQ05VRHTvG/xp8fvT3goNkhVF3k+q4Hn/lVWPr+M80VV1v6BBojM2/gnhtH0WwnVjxH1N89+z7aG2+GNnFmqAN1dB927ViLRsvYGd/V+Pu/xzFR3EYUMULBP70f1WMf3fv8H+/9CxWtqbp79UEY/czvHUDkxbaF9dNISJwol9IuDHvleIi5zMhjcynnJih4icVTmnLKsbJWh7qC0cETbOEQrvlVd16+d8NPluUK/VujFatQ4OcocODUpzG8Zjld7sFzXfieh6Mn57hog55AoxAoyir7rrnqoyerVkZkRUd0BUOwLCaxhUO4zjfA2bR1+89zy1Yh9A2BCZ5zEFfOcFUaru/D9wMEQcDeE35+1wgpF+a0fZfckG+pTGB1RFcwBEswBVs4hEs4uw0IClH/zoH1o8gzxnlaHOY8zJ2dwlUbBiywtBznDpVnbOaEgYu876RNvEU4+ZbL+fPyoisYgiUygi0cwiWcHQPUttvuG8n39gW9vQXr1ogWm9lpm93aujN1f048wV6eiKuOgrT18N1lhnueOy8jOqIrGIIVWS8oCIdwCSfsvgDctRuvf3LNFd9hMtG1vgC6qM0wAY3ClcOrrTs9utYLchg7Mm23To/EP0hdG2UekG8iI7KiI7qCIViCKdjCIVzCKdwu/+SDXLh9ZLgEhtEqOK7C3P+nbQzl8bz5pOW7wz2u0R9xz7ccu8O5WASc9zxlnRr4C/KCIVj9PawVbeoqhSK5xj8Itwu3GOBL0djzzixM3LQZDmZw/+kpm83jY/9FtdGW7Y483fjp5ClqaTy3twLTzuoJ5fumT+FEW+OzsY9Rq8fzeSIY54j13N4vxWLOsyI4PpZpW4J8mwPtZvNwWDkCx8/BpQuj2SOo12YPtOqVA/sOnkNP6KOH++jtgzNoNyoH6rXKgahyOAtLgB7KNygf85vIiKzoiK5gCJZgCrZwCJdwwpoDFNlGdj7+9Htl52qWTlBpZnL3Uzt+IQJ3P7pnt+PnS7bcNqvH/7Frx91i+i93Pr87CPIlWWqjUTv+1yfutPNfI2/ueWzPs26ud0OcKAwl+/Hk449cz/kJG1a20uv3a3Nu4mXz+v02rJvZhthWs107UPruLey3yXs2903nBWvzv35zmTFfvGRe+7UWjpJwSw4wMKhVTcj9yow1zC7MnuSfU1keVaaOjZVt0QcabNVvOe868SxazJMaQuGoCbfbyda2YeVrtdAytkDVMsPkYeXBlxlg9/NN52sty9G2XJ1n3gBJfhM3bP/wT/uuu2Fj+DLDxQMo+z5/fKr0AJbNEvMcjFmsWrJ/0/lUkN9Vqij6CfneOjx3kyG4SVKOCwyQ2bjVsMprVjp3rJ1u45qJGLwOWEydGV2VnSRbkvP/3OzB5fjwb2fgsJdrRN5Lz/iz1fSwL/awaL2Ux/qz+g7u25Sjy4IFD/AQNUmTfxMsL+pbB8cM9teUBRHxdVEq99aZdKE/7kt1NFc+WVZwmyy53P6lZSnxR0dTns0suK3RJi77OLg1Jr5wGCRLhYDuietiBsJWEhWmNMrMhBnK9nH1J6qpIVtXSbUE5s5kRtPHX5wD6oz8j0aB94+kBmxZm8rNECNekWBlFEeYTTnMUh6ANYDx4eVq8GCMCgl/OIgs4ukzy33x5gmCr+R8gROxxFRhy3peQRpKPIzrSDxF0ndoyLXcaBGNLxPr2FUNlN6kwe2vCwEDyMLBClVH4UOmMZPow7mFO5sk03Ad2MD3fcxxiXl7U5tFSOE/ky2bCyrDLbK0eQzR3uOp8b39wPQagyFW7oQcxiwVgoQJ16rjpgf+BvOg1HeFFcbMZ71RHV9k87RIc8Wacb9R+gQXPsWFHSTJ3H4oQZNlWLguMCCxbkkw9uIuDI1cgfLEOFaPjOJz9kPs7Xg064cX5j8fz8aHOO7uO9+zcXniM/YjCAevIdeCtbo7B+T67OZ7eUjn4WX9orHDPrd43g17ecDk4ZzfFxaP3bBoDyKlFpco3Z0Dih7w/JA3GS/r/YvY51lLfHtFN0t5wFgPMJv9gjXA9UJ7pbpoveDyYqNMsmgbdoWAA6ax64mlrnXbxe4dXly0NotC0FUJ5WeXg8F1l9vx0LrCJei5QF4elzwLJDnKhz7B5P53l/jVdjGedOUbNv0gvQqfb4DcP1998ZW3H3gBf5DTGZfmcf90+yu/Hyhiy/k/TlmrcHn2a0WOm/olMiDHtlyKONv/5NDsGCD36Hz2i7V2KT2Q8eiMp/mVAAMANmAW0YAUU6UAAAAASUVORK5CYII=" alt="StreetStall" data-type="icon fatcow-icon" {...props} />
}