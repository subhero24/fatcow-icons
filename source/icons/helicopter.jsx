import * as React from "react"; 
	
export default function HelicopterIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjQ2QjkzMkQ1NThEMTFFMUJCRDY4ODM3QjA4OEYzRjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjQ2QjkzMkU1NThEMTFFMUJCRDY4ODM3QjA4OEYzRjMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2NDZCOTMyQjU1OEQxMUUxQkJENjg4MzdCMDg4RjNGMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2NDZCOTMyQzU1OEQxMUUxQkJENjg4MzdCMDg4RjNGMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnnqhP0AAATzSURBVHja7FddTFxFFP5m7r27/NUCumKV8l9paGolRdqEJqY00aixpLbVhz6QYFNStU0NDaQhJPgmppI+6AvdkJA0KikGpBslNiamFGJKKfQBfKHWmIZ/KD9dYHfv3vHM3WFdVyilPjRGTnIys7M7c77znZ+ZZUIIPEnheMKyAWADACN11NXV+f5aYbYKNRecw3I47JFZFnggYP/MMgwITQttCQbB/X5w0wSiq4rOqKqsdNLMvxqAeNIUNa4lRq3b3SsntceP76Yh8Ah7vKRjatTagAYDKJOG3wScNgPKuLFamL4EDruAo3HAq0wtWqTkq/c+4C4F6uhjcJX9AWU84AYOZiYmthV3dsOzMw9vA8kPzY/LQGk7sNidmyuGq6uF6LwmRF+/ELf6SPtFwOMRPYWF4krIQ+Nhhx0jY98R5oWWFiFOfyzabfx4lq0UFkKaRTHpdGVlbdnx4QdIyMgEbvXBHBi0Yy/jzJMToRUfAMvJwc2T5RjsuVlBTFxQ5PwjdK3Aby+fOZOasTUN4ttWXOnuRAmFPhoAbyavk4DGnRUVcJafwsTmFPhjYiAowbYX7kAwISGUqJR40DU4z1bAOzWNH09/BE0lVbRIRFt2F2BPTQ38NbUw4uPg+aULBwmAHmn8Ehl/weVqfPHzCxjd/xaWLGJpfp4i+ADmU4mU5T5YVqxdEbalxUWYHR1IKCvDO13d5Cexw1epbK8XZnU1ZH2xoBleXgbAvyLjaa5nGrc1t2IgLRdsdg7MJC+FZZdbQDPAArRRlqEqPxkKa2AAghjxHT4C5owBU+CoaIkoBs6WS5tDM3QwTce9sTFMA9fkCRIA+wzIlbQX1dfjh+RUiMkpcEmxzBPabOk6fDFUxhK5SaOlANBvxMiIDYjOB9c5OM2DBGx4bg6jxN7IgjccluVxAuh+HzhF0yUJwMgGLuZXVWL63jju5/hg+JbspmM7ycl7biC99XKox/gJBLfCAECsSE9BbA3PzmJ8cQEjRPcoJXEvYx0NwI2QJ2GR/FP1YkQGUQKIocgVpWRvg+/cOWip2zGdnk2HBmW0YCwtYFdzE/IvXYQZFwcRpBAEWRgAdzoQGBnG9+NjshZ/7mPsKhmlhMA8IZ5VPSCyR0gwS9K4BCMBOO3l9ja7nR4tfzdEv2qpQqNWrDtgUju2ZFIGzPAx3AzAUbwfQx4PJsn4SaCK9k3Rtw+UAZ9qwau+enSVIjA7uyAzxiS6YegRcJkdPCFDosJi5xV9oxHQ4aSn8au7ASeAs7T8B+ncWkYjRWZT3BtAIbeCGc9TBttPNKXhOXkuc8K+jEg1Up30d58ft3tuyO5z5C4wQGdNPeL98DfZRLrra+D2T2TuDtfEhKYJoRnCMhzCcjhFUKllOIVX18UdpomrjIlvgLtbgddof3o4lI9xHUu+qQqR+h6wp4gOdOXkHNo8NIRgFI8slE3zM/v2bWq5fv2EB+inpWHSyfXQHi2OT8+fF/kFBZnKk1c+cbvFS3v3UqniQJQWk75e29QkDeUp4Ma/eZBI7+Plg+JQSckXnLFjvT09loOaSEpSkrzhBle4ZhMdMzNypGaGmcf1OpLV5FKSvLy8+vCLKOI1s9LpbPnVE/H6qaqqWvXVsxaAWNLnFJ1CrTlVNvtWulqVBiIyPvLVs24AXBmMjbic1ivLrx4//mvCNv4b/u8B/CnAAG93+0aM/1ZZAAAAAElFTkSuQmCC" alt="Helicopter" data-type="icon fatcow-icon" {...props} />
}