import * as React from "react"; 
	
export default function ChikenLegIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTkxRjQyOTg1NThEMTFFMUExMDNFQjFFRURDRjBGQkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTkxRjQyOTk1NThEMTFFMUExMDNFQjFFRURDRjBGQkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBOTFGNDI5NjU1OEQxMUUxQTEwM0VCMUVFRENGMEZCRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBOTFGNDI5NzU1OEQxMUUxQTEwM0VCMUVFRENGMEZCRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv+M6ncAAAWPSURBVHjatFZ7bFNVGP/uvWu7dQ7HY8AWCQzELDwyBDHggwRj+GNhUUwMYszQAMIS2R+wP4xPwMVtiBMQgeAjEgkrEl5GJEPUgRmgCKPC3HtlOLpu7bp2t7ft7X0cv9Oesg62uJbtS7+ce27vOd/3+32PczgYWeF3vjm/wCjoHxNdywQgwHE8cDwPOiQda3UE1lQcr/PCKIlh74Zcxw+7NhBH29/krmgqkZzt5KKlhHy16RnyeeHCYupodBE3Usb3rJ/bvmxNWebMhXngt/8DzvpqUCQPaKoCvMEMY7Lngxryw/mT+6HH5dpRtO/Pt3GdNhIOGL7YkFv7RN762U/mF0Lbj6Xg67YBIRzoRANdQ9U1IGoIUjJmgHFsFtRUWeD7C7ZJVVfvdAsPaFyoWDuvNHv24hefK9gC9ZWbQRZ7IsTijxCaBTqOJDwJ9XWDJvsBkkyQkablnLly5yj/AMa5TStyHhuTZi7OL9oHttPbQUGKqVB7uqajqmxE1akCBD12GJ+aDCkGIR8/TUl6EOqzM0xHn19XAe4bZ0DsagXCC0B0xKyrd6kPO0FDQOfhkKAjkgvdD0fflCgDfOnruQXT5jw1e8q0HOi4cgIIlhuEUUaNq3eNR5hg7+kYCkbzn0+UAdPDyfDl0tXbwPbznv5Ya/qg6OmcsDkdCY0Fk0QcEHasnffRrGdfAsXREMl4RE+pJUMYp06RaDXge39IA1UjLohtCHFIstlANi9Y9gZ0XLYgbi5iSI+hWBv4TNgzYc/ekA4NHZ49uJcSLwPCp+se35azKB+kW3+BEvTTZssyvB/lYOgJS0RR0cEn6+5dx+ssuF+Qjx89t2nu0/nQdaMKs5oMRD+I8Wj8aXh6ZB0ckt5TuLsmD/eiDUOOhwHu/VVzl0+ZMQeCjiZEL8Wg70+wew1jLwYVR2eAQK+k3irae+lV3Os2Kj2U9HgcMKanJr02a1EeuFtqIs2GDMx6MiDrVdqNwCtr4AkRaLH3WUorrZ8x4xS9Em8VmCakpy4X1CCEfG40RCIOxGZ5FDXOQ6oGLr8GbkmxHfql5d0rjc4buIeDIVcSKUPjpPR0CHgcEaOUgZiYA77DEwcUnLslFUQsNTRafuCnxuO4tgvVjUp7tRa76XAd4Ku+/WDdmGAnBHrtYfR40EfQIgscNYyonaIMIlLeYhct5Ues+3BdN6oTVWSoyX2JNZzkq/rmnfys8Q+dEtuuRRawzhdSFPAFZPCgSrIq2xy+k2UW634WYyejW6bJNtTm/8cAd7C8cObkcamn0rNmgbvuPEhIrd3dBzJ2vqQkAzi98u917d6zlb+1XmA0U+N9tMbvpTsRB4y5MzOvZy9eBWkZUyF9cgaoqgpdzVawNnYcXrlx+9cMpZcZlYZreDgOGGqPbW0ZP31BStrEbJDdN8HncYHTVg9nL9aVFZd9V4nf0H7uYzSHBovxcBzgL1m2rjEnCwfCHSt6o8DkQuPwSG4eyL0NYK+/CmKPHTaXH37l3MWb11lJ+eJBO5SYrSdLiKbIZDCRextJ++VD5PKRLTSplqBOQ01N8CAblIEUY+pYvBnwSHNT5P5GYQV78T4vhOu8p6MtsGjllhfwdTujPSG6h3JACPm90PfvH2AwmcNNJrw33lV4wQDdtgY4f7X5E9ZCu2O72EgIvRUn5+ZMVdJAXOLtbIe0CZlo2wA8oldkCTqbrfKKjTvfwu86WbKNuJhRH0Vdaj1RQoguEb/jGgk4raTp1/1k93urP8T/Jo5UzO9rsaxu7ZRi7DFuR905EAzG8HEbEHuhqOTgEdZK9dFwQGDJFO7TohS4OX/6uJddt5s4r+M21NQ2l56urq1mTYaMhgOxZ4EJdRJqFiszmdW6nZ1iMNoO0GcjywkDazABFiJ9tBz4T4ABAMAU2Qeh3ZjxAAAAAElFTkSuQmCC" alt="ChikenLeg" data-type="icon fatcow-icon" {...props} />
}