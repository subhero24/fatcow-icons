import * as React from "react"; 
	
export default function WiFiZoneIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjA4MjM5NTI1OUJGMTFFMkI4Q0ZENzI4OTMxRTNFMDQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjA4MjM5NTM1OUJGMTFFMkI4Q0ZENzI4OTMxRTNFMDQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MDgyMzk1MDU5QkYxMUUyQjhDRkQ3Mjg5MzFFM0UwNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2MDgyMzk1MTU5QkYxMUUyQjhDRkQ3Mjg5MzFFM0UwNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmvwl2sAAAVsSURBVHja7FfdT1RHFD/3a7+AFYFdkLLblcrypYJpNbXQJto0wSJVSps2bfHJpLF96oPBSPXJppI+9F+wmJD6IkmB1KRpTAB91lT5WmxhQWBZEBbcZffu7p2eM3vv9pZE1GjiC3Nz2Ll3Zs75ze98zCAwxuBVNmEbwDaA55wvel8rO8W0NAo7wjYpEkThpiBK3cGHs934qr1MAIKntLRcYOKIx1tmqauvh5raWrDbbNkJG/E4jNy/D3fv3IGZ4KzKBK1mZm7ubxxiLwpA9Hlf/0KR5atNHx6DSr8fpqeDEJiYgFAoBIIgALnR7XbDnooK8Ho9MIFjN36/AalUqn16dqZnKzbMAKSK3bt/SGuswxwX1FcUGT5uawOn0wn9fX0wP78AoihyYfhoaQ0SiQRsbGxASbEbmltaIBqNQu/1XkinUhwkiSRJYFGUrqmHs52oOm0GIO/xld8s85Q1vn34MOTl5fEFWRD4LIcfQX9/P6D/uSJjXNM0iKPhhvfehY7zneAudkE6jbq5QQQpiLwvigIszC3A5UuXYGhwaDg4N3sEl6cEvvPyN35yuVzfHT16FILBIIyPj0M4HMbFAl9sMEKGaddmcKqqQu3evfBLTw9EHz8m2uF/DBoBqjOQi5v7rLUVAoHAz/8Ep8/SWE61v3K5obHRGolEYHhwkE+0YYApFgtXkkwmuSFSgrEAaS3jUhn7CQy+6+gWn8/Hx0Vciwg4CGKCAJE+eic9tIYC9evTpxNTM8FC0lNY7a9i3575htVW1zCjfdr2CSv3+rhQ32glRe5sv/3Lr9guVwmLJ1W2HouyXIudFTrzWa7NwayCTJtna9EoEzJEsMXlZTYfCrGNRIJ5dpXRt0I5w6wIcdxJLBaDldUI2Bw22FlQAMdPfMR3SmMbKgZZLI4+T4O7sIjTanc4cNcMJPSzZLFCrjMXZEWBpcgKqDprZDtNjOCzFlmjoMm4UOBuQsuUZ0gRTSbKKJdBY+DCtPr+4kUu1KdvI/fucWWLy0sQQnmnoYHnF1HMBeklio0E0zTKICsU5DmhMG8HutWO82QuWLQyOc7/4A4ojSyyAmNjYzzQzp0/B44cOxfq07eR0VEdeKaRf4lcQQ80mkMMuJChHKsVrBhDVkxhe04OF5vVwmNIRuNixjTIBgPxeAIUXLQwP88XEqiBgQE+qbm5mdeCEI7JisVUREQkxhzxAgZaGsLIDn3PuICASf8VG1nviyYAkkQLE+Bw2GEyEOADZPDW8DDvnzx5gv8+mJzEOTaTMhFajjdn32PRWLayqMiokY4UW0aTJUlPaTFbCd2H3jo0g8YtlCbr61FEnlls+DOlVzMLMkO/akKFZCrJg/O3/j44cKAe40fLKk2lNJSknqoKiqgXLcYL0vr6Ohx886A6Hhj3kIV0PBH/Fak5RbSTz+122xPqdmZ7BITKbtOxJm7cYDHLjESVT8msMRUtUQ+8C50XSNk1ss0LEYoPEfUoFmX/sxyNlC1VlVVwpfvKc53lgcAEXP6xC27fuj00NjF2Bj9N8VKMshPFu39f3Vk8Bz5/2hFJ9Z/cQi4gtzF8Z0887QTuaGKCMgTnXxsbH+3CoSDKavYwQslHKUYpIJbNx7G/wv9+cXFJh1kx08vtVjeqxcVQ1+SDyT9NxzGlxSOUBZSIcRhlXYdCzrcb9cEMzlXk2lddXXOVjoOnUU1lf3R0pD28FP6LdkmGDPLo7kLFdfNxvOWFRAeG5RBKEURr/o78D6xWa93miVjM7q5GVv9A4734Okck6Ma0F76S6W5x6vFC7nLorGVjk1Je3/EKyppOOXupl1IdCDGibFpPhpL6jtVnvZS+8rb9j8k2gH8FGAAirn01Q10LFwAAAABJRU5ErkJggg==" alt="WiFiZone" data-type="icon fatcow-icon" {...props} />
}