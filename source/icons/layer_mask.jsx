import * as React from "react"; 
	
export default function LayerMaskIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjM2MDQyQjVBNzRCMTFFMTgyMzM5NUIwNzhBQkZGNDQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjM2MDQyQjZBNzRCMTFFMTgyMzM5NUIwNzhBQkZGNDQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCMzYwNDJCM0E3NEIxMUUxODIzMzk1QjA3OEFCRkY0NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCMzYwNDJCNEE3NEIxMUUxODIzMzk1QjA3OEFCRkY0NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoMjpYgAAAU0SURBVHjaxFddTBxVFD53dnZgl5+FpQuFAgWs2to2tOkDGkxjY9La1KSkicEHH2x8UBOjra9q4qMvGk18q6mmbyaN2igxFUm00ki1MRWRaKVSYbsUFrr8dmF3Z8ZzZs7dO0sdoGDTm727O+een++ev3tH2LYN93Po9CWE0F//Kv6FpQWPmNa9MyYEgEbTyna993R9B5JyOq+FyPi7h6shawKQT5APAsIVIieZHkdthK5rACe/njhCNnHOSQDFtPN0DuC3cTaOjL2jLmILBR9vcH/peb10AvXyPpdONr0AyCbkcPea5j4Q0mDARW8ycvql5/XQHdeTZ1SIRT4HZHwIWRAF8eMIOBy2CoekaSyjMVCNefz4JR0KAUABAMnTF3cF6f/+BpUPvXFl+ECTAnBh1P1P4J9odHdN9B/irpzUQ+tkO+MHQLCSQMCNv4WMFnuFdqMH3GkjfWA8DfGZDCasDfNZWhcQNgzI2aE8+AC7XeohYERf0QMmb5eyNV8ywgVkIOf0QgZuTM9AcuSv7/++1H0+PZ2cJf5wRay8pe3gUxPz2/a3b43A9mrDkfOWnnSfZa8AgErwsTqOM371Jdxf2nl8ag4mUlMTXe+8dGKo7/xVZJklj7Ko8d2pt78JR6pi6Y8vn/l1rCr2bGuZk9Q0SI8M8eEWzonlAKR7bFvFnYwbaPwW7hyNJz/oaD6G5Bs4UziXSESWOoG4PTM1+eGx5o5XPhv+/I9kUfWDUcPRJZOavL+8z2kFOcDudjJbY9fhHE3NwEfH257Bp2GcCd79IjmN5yLTaO169/snXuwdnnGMkT4hlA1zpRCQxC/j3LXwsb0eoP9mGm4l/ulZSE1cR1KSDfoNWpv888K5K6njb/R8e630yVh5CB7domKfy63BA86Uu5/OQGLwp7Ps9uwaWj7xpBKDP5+dW8q4FcU7p5kDHw8QQCoZ4cleXYBTarZl3vQk3GqDVC1ZZm7MxG1rrIdCmm8MvlWAi/tqXCYSvIxmqc5nx0cJQO4uDj7TKA5nS4MAbZsBfkyohdYanxAAe4CqgOJl5/u4gIbW9ua7PXqLyqMRA2XzejR32nZhGd6RAxq7S3DsKsIGRBu3d3KprXUEYs07OxsrsQw5lyxZ6rCCB2gMTAH8jrN/EmBvNcDBlhCURKJHj755uhkKwfveOzreOt1EMkIPwRWsm73o9lbUtadmtTLkrge2OjwCyHFgWwSWMoe68fGBNSRjsKntUPeO2ggEUTabyx+EbqLbhXlY4AGbW5W8Jmqc07s3G1AXLat/7cvE0AunLjb5eELQ2smuxNAW5K2NGE4rlp2Q8sC5Gdk+rdhpEmh8d8xFKTgcgkvyuT1leAoWNfQE9eFXz418ai4ufCKENuXszLKq9FDJ84ZR3LmrLgJ1FQY8XKlOPq+e2tKV7gNCuUoIdakgjxC4HTEDHorFoOdaunNyvrwzi0hLMGRGUMBWTLgiI+Q0HjrUZAg1jx4hVJ/xvZBo3lLRGJAHGClrqApB06aQw7QzquI6MMmGOfPztyrWIyvLFwDF52pKKdwVVSfjYEo1skcqVbfsT6obL9H/i1/qIUBjt1erAqGy1fEKX050UIbkxULj5uDtsH78+fcfvzIU7LaAJwROQ2KFdMUSnjCth+6EV/MBoPH1ORTkeONXfEHtKBxUO9oIvTjIB9MyAHY6NX7xzCVot22Pu+7BIOOLaEsGQ9DLKb4bluF/vFTDpjvy4v8fdKpivcAIvRlJADq/qxWvsd9vZNh8hUs7YO736/m/AgwAzKJN1KqeAwAAAAAASUVORK5CYII=" alt="LayerMask" data-type="icon fatcow-icon" {...props} />
}