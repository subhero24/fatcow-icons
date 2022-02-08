import * as React from "react"; 
	
export default function Clock15Icon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTAwNDI0NDY1NTlEMTFFMTg0NDdENDEzODBFQUFBM0YiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTAwNDI0NDc1NTlEMTFFMTg0NDdENDEzODBFQUFBM0YiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMDA0MjQ0NDU1OUQxMUUxODQ0N0Q0MTM4MEVBQUEzRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMDA0MjQ0NTU1OUQxMUUxODQ0N0Q0MTM4MEVBQUEzRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmTLGjEAAAnJSURBVHjajFcLcFTlFf7uc3fzfieEJBAeSSSYqBShFNFBVETQMlpbcNS26jAq7VjGyozWdobq2HEYZqyok1E7CuOzUhVF0ToVSWWAUi2YAEk0b0I2j91ks++9j57z37thAafTnTl7d+/9z/ed/zz/K+HcRx56b93d+dnqC/Tbwzds2P7e4fCyhXd+1iP+/v8fqW33qtrZFTmHJEjl7r3EZMS4v/LHH7xKv63phe5VHdu79p3cuppbtOoKSIpCT4gvGoHd2YmpkH/bbTu2fJmXpd1nQ15C66tttsd2ECQHZkCCdSQUTb34zpYdP8rNK/+9VFcHZGXTOgm2aSI1MIypzv73S27+8DZab6QNkDt23XBvTX1Fiz6nBqCFkmSREWSkx8DB1mq8+EoN8osrcf2KKixsKEFttRcZ/OKrZyCOttNj+PTgICbHh3Dfz/ux4qoB2rdK5DJsWwZoY8nufvR3DG+qv+uTl9gTrO8Lvbt20ts4T5MU3osFRTUwGfLgtzuWw+udhTturcPsmhwc74jjzHAKoxPGRT4vLVAxs0JDc70Xvf1hvLanE/F4H57e8k8U5CVgGmQIyBDTRrz921Te+g/zSS2msgG2ZWl2MkX2GFDVFE51FGPrc9fgJzcvxNXLavDvk1Ec+Cootip2Ak38liS4qWFjJMgSx9enYqib5cHDD1yBA4dKcNdWL55/5BNUlU3BMDTYMhlCfMybNkDllLAiMehSEv1juXh45zo8/pvLYVgK9vw9iGRSIsNszJvZjeqyflQU+smbMrrPBNAwO5+MMnF2fAb6/DXo6J+Dzp4kes8ksOzycjz6UBE2PZ2Dp+/Zg0uqx2HYejoF1ekv27AMORJSx2Me/GrnWmzd3IQYkR5pi8K0VCxu6MTCud8RKYXHo0PxViIrS8XO7T1YuWIDIpEosrQA5lZ2486bOvGfznn4V3s9Pj8axpKFXmx9sAmP7pzCS5tfR74vJPimS48ktf1vXfeoE348/trNWHN9AxKGjMPfJKBQJfz0ukNY3DSAl/96ELnlxdBzcqBqOnlEp0IxUFaioqbKi+KySgxNLcZTLSoaagew8cYvoSq2wLEkWeAyPvMwH/OyAQp/HTwZnLA9t8+P+5bNX71yDo62x8kyC7et/oaAU/DkZuGHSxfAsmQn8wlQ11W8/X4bLl2wnO4bJDY0TcKsmhp83upBY0MYzZeM43RXGYZGTSxtLsCJziRhhz5+4o19LQQT4FJkDyRIJo/7r12xcnklTvXFEU8Ca1b2oaIS0H0+qkwyx+QE5CpRyAASSqZUgohtm8Jk09Wiq0mSwryGQirdQviybFy7oh8JwmNcxmce5nN5RQiw+ppnV1VV6NmFRT4M+U1UzYiioS6OZ1r2OYRimSx2nimmSV607fOEMpxCY6G2rhCP/c6Py66IoHpmFEMjJhifeZgvMwf0bG/JHfXzizFwlnZAdXrZwhhMycRDm9dTE6MlMu/4fKFmgVQqRZz2RWKRJ4pLNOhyFXq6LCxqjpEHbYHPPMzHvGkDPIqkLSopy8ZkhNxJbl6wIE6upB1Sn7K47iXlAlGFGMIA6UInkA4EYcVMD/bvNdHYRIlI6xifeZgvPW9EV5GgzcjJ1hHjqJCi7jOcOJPIvOMLXC/LTlvlaiJ60ZCkzEnkDDIUlfpw+oRJLKawivGZh/ncbib6gMKpnUiargvZLJUyGk7r5CQzLXKr0z2YTOWHko9izQ3KR+sIQracHEgbQes03UY0pAgufsJYzOMuUqYbkcQPEmbGxDXwwksfCQ8w+f33rhXdTrhMlkQfqK5ah+LSfGx7co3YsqpoRKgJ4zR6ruvOf4kaVu+3G0izhPAcHsk+N9nVtNMSScNxnO3MuAc33SL6vuMBU7g+/bHIqIHBjzFr1k3o69vv9pT0iM88Ntju/ZTQcTxgIDNgjgcsxzJbRFTEwEkkywkJhyKDn5KTdFJJ9PXuhZ2KCS9deF5hPQ6DLJM2t38RHsnxgHVurYC1rKQ/GIhAtpNQSKHrtI9yLLP+lfOEPWMYNoy4Ia6cHhZXTIZwdfBBhBNW4LEhdgLMw3yZBpjJ1FRbcCxGTSRJJW/j5ClKMlWGoqn0n8tOvkhscXIQNfC9z1mP9RmH8RjXpi4ZHIuD+Zh3ehiNTZx+N3B2CsloiJIJOHaMmkxcx8uv7KOCUMURTfqeZvS/7rMe6zMO4zEu4wfOhsB86WEkuQ2heuPKPe0V84v1gopyKikfdSyahBucc5dpWNNxnXadzKGR3M5nnesBbn4pqizQ33pDQkcXzRArholhP4a7xpOv/+PWRj5D8jxgDyR5OJwZ/+qpwGAEoWCQ4m+j/aSEY0clgaho5E5qvSIv3EbEO3xl10fi6hgji+dinaYIPdZnHMZjXMZnHncYJdMh4H2Fvzj+5JsTgZg/MBjGxNg4vOSX9963yX2SaCS7X6O+QLUuq+xi5yAlGhJU8d+576zj9azH+l46vwZGRjHOuIG4n3mYL102Srq0+esXaycTg73Nq2Kc1WRgflEO2tssjAwDG3/WSPGVptsxq7a1daHp0nqnFUtOxTQ1NuCtN1NobTVpHMsYPevH+HAYiZEwFl/a8sRnx747RAun0gZktvDcqf3XHRlNzL9k8x/WIb9WRWFpFmZUlVOdU/3GLSxZqqKpSUPtHNVVlaYPpT3dBk6cSOHIYQMeryzcfnbQj+BoFJM9Jl7d/ja8xuCp3NWfLnENOO/FBHeuqq5seXjRGV9zEYLfarj/kRsh5fuQXa6jpLQIufk5NH6p9lMWvzqcl5DsAa5WVZPFqWhqMoyx0QAi/iTsyThe+NM+FM5NItYWxKbtX83c/dnAUFo3HQL1vceufKagvvIyJS8XvsI41vygDYdby2gHCp2QIpiKhmnwSHwMQHaOB7pHIpGFeLw0GQ06ScWiGB7yI+SfQHQojnJ9FM9u+wB5c5khT+TGomK15Jm93R+mw+7OAngLdPlubU4Vkp39iHf7EZ4Kdzc3/PHt5969yW5IXbXFCsQ8I2MRSF5SIdLzOi/7MUG9njqjFU7BTFiJrqHWHdev3ydNdM283RjOnuOtpRNIXRUKvhm4m1ZvdhNxOgRFHX+++oOSHG1Z+2D4o7t2Hn++dyQ25saKs6vgyrm/vKay4PIbfFphvap4Si80wDATo7FUsGNo4utPjn73lwN0d8LdZe7sMl/Jrs3NDzRW5awZC6cO1f/6i3XuoXTagFySGiZyLQu414S7JouEX6Xy3N9aeo5kVBF3tihJyK3zqJuh3OhyeJPulQ3rTyeilDEVfS4wN4h4+u01w8m6C6Zl5E7mx3SNSLgYmT5ifK+LwWtiafz/CjAAv4WaPpODXjUAAAAASUVORK5CYII=" alt="Clock15" data-type="icon fatcow-icon" {...props} />
}