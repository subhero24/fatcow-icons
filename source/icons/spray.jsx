import * as React from "react"; 
	
export default function SprayIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzA1MDg4NTg1OTVEMTFFMjgzMUE4NDhEMEIxRDc3RTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzA1MDg4NTk1OTVEMTFFMjgzMUE4NDhEMEIxRDc3RTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozMDUwODg1NjU5NUQxMUUyODMxQTg0OEQwQjFENzdFMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozMDUwODg1NzU5NUQxMUUyODMxQTg0OEQwQjFENzdFMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmT2k4AAAARQSURBVHjarFdbaBxVGP7OnHNmJrvZblKD11KrUG1JGwwVBEWqvolBDFIQSh+kRaR59E3xSWhVtG9V6Iv6oBQCBkTj5UF9MPigSNWKEW81lcS2a3Pd3dm5nPE/ZyZrqpu9zOSEP2f2MJdvvu8///8Ni+MYrQZjrNWy+PahfWdZdflxxMos6KuZ+UfnDwx9MPLJucfoV9jq4lbPEug87PMH72iYI6XAIh87T70FVa1BLS0CFgcvl8H6C7j43MQjdFYfxSq6HN0AcM6ves/vK7kvJG/MUD33FWozn0JedwMsacOvXELh3geQvp+71QCiJ76ZO0vz5xT9Pzy490Nv9jswx4VlOwaAPvZmvwfj3KiHHgbrIges9K22zR7cvRB6Xqpl3Jz1M/X5OmShhDs/+9GhRX+rckBnW01LYa+t4Objz2J1+l2IwSHY5UEwIREsX0WwWMG2hx/FldMv6muKrQBkZUAP/sprJyaVsMc9P0QQRAh9hUYjNJvBtl04jgNbOnBdBywIp56ZePqQlq8TA90A4KfPnJzcv2d4fHT0flRrddTrDdQbATwvRKRiSEEPd2z0uS76iwV88eXXWJj/der4U0evAZEFAD/zxkuTB0ZGx2/fNYzllRXMzy/Aa0QUoZmDkABQInIuKWzs2HETyqUSfv7tAi7+8dPU0SePNEH0CkC8+fapqbv3j4xdP3QLFpeWsFb10fD1g5UBUCcGwiiGIOq5JSFEAsIhJgbKA3TNVcz/+cv7Rw4fGtfFqdck7JM2Hxveew/WalXaYv0olgKjvwbhkwSNQBkJhBQQXAOwDRvSlnBovm3XjahcnhtrV5zaAXBjvcUYR+XSBdI8uob6hAFKxkjRQx0jgQagw0rlOHDXbsRJeXKzAGCJblFzj1uWlUaczlSaY2vD+nrQ+RQa3MZ7tRpWx42q91kKoBVGtkkCM9M6VMfbdwQQxQpZR8IAywdAS5BtMGIgzssAIwVUr/0llYEYCCMwllMCqCizBFvAgJYgbw5sAQCWmQGVPweUCrOloMkBlT8H8kiQOwc0eqWTkGUTIVRx/jpA7bJZiv8faLm+XjlV2Jk90Z4Bqv90P0FmU3DqepxRkEmgmdNv7UEV/VlkzTcGT2cVb1bCuwQQq7j6zvR7RY8cUEAWLPAjk1i6JUfUin36nVgyx1gy3RWlTX5AupDkkBynoNerORhA8djhCXj1WtL/tQ+g0LP2g4kfUMSESFuxNH7AIT8gCZC2aB99PF3MzgDpH1MSXvnrd+N+tA+o/8cPBFRs7A1+gIt/7dnwnltT254RgEUiK3+FaHTpNuSAGVHOqC6wyHz+KWpUPDUkliWbLFgUggD8vewZf5AVQLy6VJ15+fVX79Na+9qA+pHJBd9fPw715yIB7EvygEKQLXeldsmUB5QL27cPzrSjoZ0pLdG0k2Koyw+YlqWAokIxpy1Zz644NZNupn6M5te7R1HfzBX/I8AAc7IRYQ8kBzMAAAAASUVORK5CYII=" alt="Spray" data-type="icon fatcow-icon" {...props} />
}