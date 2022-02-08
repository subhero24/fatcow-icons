import * as React from "react"; 
	
export default function SlideRandomIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTYzQjJEMDYxMDlFMTFFM0E0QjVDNUIzOENFN0E4REQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTYzQjJEMDcxMDlFMTFFM0E0QjVDNUIzOENFN0E4REQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5NjNCMkQwNDEwOUUxMUUzQTRCNUM1QjM4Q0U3QThERCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5NjNCMkQwNTEwOUUxMUUzQTRCNUM1QjM4Q0U3QThERCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgBAl+wAAAR3SURBVHja5FfNbhxFEK6q7plNQpwEJ1hxgkICGDv+wRIgOOQdnER5AF4ChHJF3OA9uMQmuSEEPpEzlnaFAgdLBCkbUIB4L/nxejr117Oz9vho+8BIvdW9Vd319VfV1TOYUoKjfPDIAXCLa3fv/szyk8MCg4hARFs3VlbeiDw+Ic5vXr9+qDv/7t690yxeEwCdvPPerw8ghMDoEAIxNWjGQycmjyunTh425b4ZVAlVZ/3RHOnusGK7qmBnWMHi/By4zzI21oKyLOD33x7A34/7UAaAb7rn9f/Plx6r/NrHt5f78NXGBfh05h/4dnMSAib1MmQAX7zfhy9Zd5sl+hxx9dliHyanpmFm9uoYEzF3xCjGCH+x8/n5JeiEBLcmTqpu4dI5lTKWRRcvn4VbJ07BxxemYPv8cd6lbfdlhbD4FuuOnYKFK2fVVubIZmWNjW4Pri4sQWoDIFZBeOdpyGH44+EmrPde1/EyPlWT9e4ZTiCAj8K/3J+EN18MYH1zAooGgA/pP/ipNwkfhKcanvXuaaV75coZtVEfjWQfY4AoWFy5FUXQkID3LURRFxUpOmmdIkKR12QAZeE6noNoYa1YSTln2EcrAxUnSCAyKDwzBl7YGYnRABSSoLxoZCm6yK1gXUFJASQGEGTMepFiK3YCQNEIA+xDfO0BgIqOzD+gIg2RdCKhAQi8VWK6kaL2QzCbIABEvyO2ojMptqInBoDqIakP3C8JkdGqlInMgOxUAIgjNVYGko61TyajA6gAa11wW+kn25Vt1H3sTUKnR7hM4lR2Fi0ElpyWQAaArEWXmQG3zS0zkGxXKi3MbQAqKSqGjjDvJAPIDFDNQBGottnLADUYsLCS54D4gKoFAPIi5I7QFwqafCMAllip1gXK0hnA0bwMQNfwvFIg/L/4aqkDQg82L4v6FKDTJmPJD9lFdJp3M4A+T5ONbYs6r0BzQX2kthCIU9mpZKzcA5yEtvMGA4I+M9BsYzkw+j/bKgAy3skTewyAVCrZtSSIobUFYszJZzgj3yzoQKMeP1KZGUg5dyI5AKjX0AhItVVmMF9GbXUg6W2ITnFdPl3KoqNMj2OnoNp1CrKtVcDkcr86oAUnM8AxjHaeM/W5DtiiXgcCatWrGdhVBxDzHNRw5FOQdocA/Ohh8KNCch9YtWsCkDH62GpAHKuEVX0KRiGwOaisah0IFsbWQiQ71xDIIprB7phifRfoojwuJPbRJTYS2XXE4Ghsjt0z6mO/SpgTUi8i1pSd0m7BzrbLUt9+yk6h/bIcQlGWGgIrZmi6ssNt225OXyPECtreOWO+B/IzOzcHP/7wvb4Rrfam9b+3l/oqV7vTGoKZ5UewunERTr77BO7wG1F+7RoygHdYt/bLRXjvz0cKQOaI38v8RjQ7O9csO/UzdWdtLR32Iz7FN1kZpsP/HnCfEoI02Nq6z98G1/TF4aC/DfS4IwwGg/t6+vlngtslbufakvKAniG3J9weojs9zu1Y8xX9gB+h+Tm3Z3DUD/7vv45fCTAAkAu6iNRZSRQAAAAASUVORK5CYII=" alt="SlideRandom" data-type="icon fatcow-icon" {...props} />
}