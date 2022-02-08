import * as React from "react"; 
	
export default function EmotionShameIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzU2MTM5M0Y1NTcwMTFFMUJCNkVDRTc3MzVCNTY5MUEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzU2MTM5NDA1NTcwMTFFMUJCNkVDRTc3MzVCNTY5MUEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDNTYxMzkzRDU1NzAxMUUxQkI2RUNFNzczNUI1NjkxQSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDNTYxMzkzRTU1NzAxMUUxQkI2RUNFNzczNUI1NjkxQSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtjRi1QAAAfqSURBVHjanFcLbFzFFT3vt7tes/6s13acNHVsgo0t0iaIWI0RJQoJQS0gUqpCoxaktJSqqOpHJUGq1IpWSEkoLRWiUqBF4lPUVtBQnAho3FD3QyS3IgkEp46DndT52PF61/ba+3m/6b0zb521MU7Sla92/WbmnDN37r1zn4bL/Dy7DRVNNfi6qeF+HfiUEPRQBIMa/ZH5wHuuwPND4/j1A89h6nJwtUuN//4hNNeX4zUzjOuW3XAnqprXomplBxCpmCMA+SlMnOzFxOC/cPbfr8Mt4NjoDO6652kMlki9IgHGwe34VTiMb7Tc/n0krt8AZP9M1g3YfYA3fzZZqB2IbiS7Fcl3D+LEvp+jUMAzG3bjW/joikUFWD07cLq2ZXVD2xd/TIQvEfGrRJKgnW8GzDX0u27uGXgXAPcweeIt+p0kEXeToK/g+CuPYuzEkfM370IjTXQuR4D11+041br5vqVLOj4LTG4nnhRQ/R0aaSNwm2BsCN+bGwM6ucAKkTAy5ziQ/iU9jAOVuzHS+zf0v/XCufW7sWK+CG2Bnf/3mk1blzSs+TSQ2YH+I8Chd9ZgIpUjUgeu4+Lhp74K4boQgQAOQM008fi3X4RpmSTGQlW8DOs6D6N1NU2I7cL5w0cxcODlEfLEJ0tFlAow3vwB9ixvbf9a+10P0M6/h753ifxQK26+fTVWdiynMKc498hcDz5/l3x0g3LDJC/wt67jZO8wevYdwbp1/Wi/niZU/gJ9rz2L4f6+39z2MzxYjImiAO3xe3Ft5zXo63jwaejTP6LhcSJfiRu/cAvpLdD/vGMh3S6ERl9znacFqcgjcsgw5HH8c+/b5ImT9LsG/lU/Qe+eh/DOANof/h3+w0FkFl1/QyNevXr9Vmj5vfDy4xLjxs+togA8S+Q5EuFAIw8I0A4RhtBCQegzn08eoA2Z5BU6JtAxyfOhOZ2b2+CmSIAzDt3cC+aw7ZcposGHYzMa7l6LRCiMtrqWVfAy3dLT0GMEMoV7ttXhUOaPGKrrwQeVf8fhaA+SuAmaPQ7hTErT3BQy4U3Ycn8NeiZekXNPVFHgVRFWfgxCr1KnR9jMwVzMKY+Ot/Hlz2BbfWsH3Jle+CyeDVfRijSSw8fx6JfWofu5PainRzVlFAKR9RD22KwA2EmI2EZMDh/FY/d2qrlUpxI0V+RHKXjDEpOxmYO5mBMqYhCqjGBrrGEF/OwRCM4u9qSdoZwel27nY33xiZ+imrxeTaBW7U2UjWny9qQ0z07BLFtFax3akZBzKwm5iua7zoTEYkzGZg7mYk7m5hiIRAy0VdR9AiLzBzmRP76YhpsR6D52ak6wVVhAIfUGgeZVoHE4+zmEp7rx9on+jxRH25mW6VusGaIwhIq6LWBO5mYBJo9R5nB2yYly07TGnZ6B3qOBa4zGz4sXkB4sYJ/yI/Kv/d6m2bzg+OMhLyi+VBYoANVSrl+mPqvHNIupKLyCdJE9zcS0OK+ADJphUjxaMa52gQAGlpFqX9yuUEj85ZZiQBVHk+InFFPimauYvWaxHAk/D5su0DyVcf72soGACJHn1I7C1Yvda0ogeRyFhTBiKkMj1SwgP1uBzGIR8Qs5FCigC2kSQeZk1GIzSos8JdUkID38MSIYgxxiM8YEYaQWwODrgjCMix64KMCZpogmYW5Wqc+NqXSM1KgztAjEJU+ELMwG6kICeNeLYTC3V8hIzmIdEDM2BqYuUMXTqqWrpXEQOkGceSp4ZI3wLm2e8/EYAjVgrixxMjcLcIeS6JpJX4AeSpApV4ergLKEch8/4yNgFy4mQjrCwEUMOu+yeIBhKQw9VIvM2HlQ29bF3Cwg/9QB/DY9eo6iNI4QRWu4khbWKNeFSIhVrgA5I2RBWchYBLnVoEIVipZg1AYYhGvRmBGNY/zMWTAnc3MM2B+cwWgmi8GpqQvNZTX1BDQqVcsIDqkdcBrJ+99dvMM0aK7lqCpklitxRYxwfAkmzo2AuZiTuY0gpo30DPrW1E1srW9uhmGlaZGvwAgkVK4CldteiEXMD25iyhTTUunHxLw+FLPo/0Z8eLQfT7yB+wZG8CFNzRmBdp8eZDe0oyksZq6NL11GQGmpXJudoUi0+T0A5qZlMUM01Q5I02UKN+F0/zAGhp0/7dyH52lKmkNTK+mMyMlo+ssjONjYHK+provAmzk3J+V1TVVgWZpL2xmhjoebJFnGxdyez4guRXosj9ODqfFbdoLaawyRTUOFzZy7g8IGzd070NXYVJmoTpAIKmsiKOo2ne371G++f0z1HMVcZsJycnVrC7B2dVClpRcMOo4E0kkiH5pMbtyFO+gxvyeMz2/JZptSMm4UmrofQVcibsUbGmOysggnLwkv5QEReECzVACcP51BMuWkNu6U5LzzZGlTaswTwNq5Ttov/AP7O6/2G7RsriUcNhEpD6vmi65E3xPypvPcwIqup7qmGxblfATTUwLDgxkcP+Pv3/IkvkmLT80nX/TFhIyvniUUmNdt/zweq4hiRSV1GdGohrIyXbYCpW05C8rlfGSzApOTPqayOLV7P354sA90YBgJgs65olczsmgQF7XL46j/7m24o30ZNsUiaFpoQSaPob6zOPDkm+gaTsk8HwvOO3ulr2al41YgpJwbIu7wycqCe2T+8dF1BboP5ZvxTEDs/L8vpwt5hHvxSHCLzl9brJP5oFPxLgf0fwIMADdRt1pM6f4GAAAAAElFTkSuQmCC" alt="EmotionShame" data-type="icon fatcow-icon" {...props} />
}