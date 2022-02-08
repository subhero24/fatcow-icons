import * as React from "react"; 
	
export default function FolderSearchIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTU0MjUzMERBNzNCMTFFMUIzMkZEMTU3MzgzMTE0MUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTU0MjUzMEVBNzNCMTFFMUIzMkZEMTU3MzgzMTE0MUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1NTQyNTMwQkE3M0IxMUUxQjMyRkQxNTczODMxMTQxRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1NTQyNTMwQ0E3M0IxMUUxQjMyRkQxNTczODMxMTQxRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuYOafMAAAU9SURBVHja5FdbaBxVGP7Omdmd7W42TdIk9pLmQmO1YMmtmoq0VANijYoi4pvSB9GSotRWX3wQQQQVEQu2SEHBircHSUERqk1ipBBKmotoapqmkITUbtPmusnuzs7M8T9ndpPNZrdJsKQPDvw7c5Kz83//d77vP2eZEAJ38mJ3HACFp/dEw5iwzfXCcWgoMk5jnMOG/mPdodZn6A/W7QKgUwRk8qpXPqfX0nsFywxT19B74sAT9LSOYuZ2AvCqyim5efE9ql9LZEy9bBhlL8CKRdH1yYPTjLHV0cw1yd5PxN7T6ezp80+OBcG9NNtDkZJAroiw4Zg3UNf0NcDZalVGWTzoPf5iYyb2FgAIAsZpyPTFDKhHDuvGb2DjbWCrzQ8HWsXLyaEvOwCY9HIu+VqyBJJCTpUP9QxifCQk6cqs1SwMcH4QuuFHhrVNAmCKAabppMEFDahPKplrHEPdlymvjV2HTqnlwortK5dAR+/Jl7KKUFmMWIbu9dL0BQYk3ZKVK50DpEMHpVVlMC99SLmdFABsqWPmcwsa2vBuPwzX4tkAUJKuz45QgY5rw0Xv5CjYWozS6nI4jiCh8hR1ssWZE8N5nUiQIu7q6xY2hOyGtQePAXEzjVrmCnD0WwjVo6ghqSVaXLIgTThmDLZpwo7Ts+XAilvgXh3+IOmOOQltZQMgtTr6Hb0gjiWtmbkg1AvSJUT/E2aEijSVTjxBv7rThwIbnY1icnQMMXEmA/BUEcrKqAcw+WUhsnTsJd0FTmzWTU4OGR8OUVwjQKZaHO7xorCyDJvuq8TVP/+AkePLCGCBF01zkWcMvjhoriBH2OYcPD4NQxf68dd4Bc5W/4BfHu5EW8MFdOw+jb9vlmCgpQOba3bACKzDyaO7dqZXo6d6nXGxMnsRCGtminDoGLsSwrBei+H7P8b+LUAuNdPJmIOJWBEG8j+Cdv4I8i4OonBbGaquTb9D3/5dNZ3FDAjVBV0QywenufHZMDxk2/Ghf9BX+Qb2UvKARokjMczETMQsE0HNRqj6LYz1DSC49S4Y3Hko0Y7TNZBcAmcFDBCDpBVLql25jJQf2IggVT4RiWOOHGeSpqTx/F6BiLeAlioKGD41X25+GVzg0qoa0nIAmJxKu1vcJtFqbqMjEUraw5aA6VBycofP0CghV21FKIZ5MlNmDUDahGU7kKQhoLm2Fad9i5aN1O43r6s1j1lu5T6DU/UaMUF77/QsNC85wJJmZ9lcsBoNuE7w5OQhMjWHou3lqOz/AANhjok4AWOycjc5DZHT8TY2Vu3EzPBV3AzHO9Mr5POckKJlqKpuGR5lzdySUuX9oh2V2BzvQcX512FHphEhUudoCeamwzB+Porc2R5sIACXfj2HL84MvUuZYpk3I5/hen5F+ywjBgIIhEIY6e5H5WP7kN93Gfktj8OORtWaS9pl5Rvu3kMngAnUHXgWh7Xm5q9aRnLSW1xx9/GGQeY4OY7jrBiAPJbJ8Pi8MPwGiu/dhmDZJlK74bZt2g9myKIDZ8+h5qndpP0AWE4uur9sRu1r7UayF0gAeRQVFPmZe+7yaN58/p76R6uLnysM6lUiUYAUXGjK7Pm+ffSbpsby96sbHyAQ/iUg1LFcnozT/bmKS0t8Pz9x1+ZPskA4UWlB17F9rRIEIxBYn4feU6dR3dRqSA3Qho3J//jbQoIfS9xZyoHBTACZqH21bW8X0F7zZD0Q9SSnBdbqB5AEVkKxp+fTR4QMeq6XrDGs3SVBFFNsSYxHKa6vJYAkiCTts6m74v/31/G/AgwAKzH4t9dA2IgAAAAASUVORK5CYII=" alt="FolderSearch" data-type="icon fatcow-icon" {...props} />
}