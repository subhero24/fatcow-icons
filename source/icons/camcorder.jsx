import * as React from "react"; 
	
export default function CamcorderIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEEzMDBGRDhBNzNDMTFFMUE1QjdDMjY1NjZFMkU2MUIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEEzMDBGRDlBNzNDMTFFMUE1QjdDMjY1NjZFMkU2MUIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4QTMwMEZENkE3M0MxMUUxQTVCN0MyNjU2NkUyRTYxQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4QTMwMEZEN0E3M0MxMUUxQTVCN0MyNjU2NkUyRTYxQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrGE7wsAAAVLSURBVHjarFdbaBxVGP5ns7vmfqm9gOmDESIUbbXqQ0ESrSJo+yLSIGZDJE9i1SJYqm2VGtPos4iPaQhKE0OwtRokEWuL+CTBYt+0kNpSSHazySbdZHdmZ+b4f/9cMptsls0mB86ec2bmnPP9339djda3cFdX1++maR7CIhKJUEVFBWmaRkopGXlChNFr/ppH0siyLNJ1nfgMCoVCsh+d59O8vwVbeBwfGhp6NVQAQHUmkzk0PDxM6NlsltraXyCLD2t/7kUZ2zBaJu1/4qCMbe7zdvc59oyMjNDY2BiNjo7SyQ9O0enTZymXy7V0xrrojdibEOYo31UFAOHu7u6fYrFO1dFxTH178btFHOA1SPPb1Uk68NQzPE7QgYOr442pP/PWV3+dpP1PPi2SB9tFBrGQWhAGJyYmqbIyynMbryrDQGHb1tFPe/sZeYYef2wffTN0IbBd0cMtrXTzxhSPj+aNex7am//8kVb6+6+p9ZzaSgQJsZqYBVpIJkVV+AEDlTZ/kGKEV34cd7637QADNt2e/ofqGnbQf7dvUX2jO/I6PnNPRv/59C2qq2+UyxzTUO79Npn8TGN7MAydkvMLbA+ODYV9KIyupraGvLl3wOHDz9O1a9cpk3HUsry8nDem0/nrpaUl2eOpAcYHgSzTknMNZmBubo7nIR+AtBB/WFtT49ixCyCb1en48XfpxIn384y+WIPQuFzXDfYgRz47qAJ+nojPinfkAbD5A7icYeT8l2AgZxiiN/KoKnZ5AAX24hyMUIGcwQB0NvCZmRmqqnpgFQAkTrJhJBIJBmBQOBymy1fG6e7dO4Jc0eaaq1PavWsndRx7jZTLAFpDQ518sbKy8gegCgAgjSdmKR6Ps7GYrLeQgHnvnbdpK+3Lr74m2LNSls/iwMCFV3jIcJ+Dln0AyURSPCHHKoCBmKazAfr0rLlkBlh6sIi9kFyMEF7gvJ7mPo/LAcRXwVI6zfrRRQVYm7LJFmMKumUpzdE9yRm2AFC+DXBb4J7w475sAIDFRQmhujDAtFkwHMcAywEgucNi3YsObN8G1iUeJxyFKMUAECQMlhiALNsSMDoDUJsEgPPAt8W6x8UAAUG0jQCgpebnKZvJUI6NUAtx8LAcFzQ5q9mbtAEIEIIrWo7ktmUHVbAOgIJLsHs8W1tbRd9f+oHC7AVAj6glDJRhhMplEXYEFcIgN2Igy2n3LR53uutILBb7WVmrQagcAJoENyUgbLs4A/DJO9zjbgxpghFZbDiQ3iiXATcJeV6wNkUHAeDNfbe7B8ALLIkJ6OUAAAJcDhUoVYIRrg2msFyD3XArDFhuCOZ6o6gKCsZyZ5NZdiR0cpLl24AXWUtkAIUIo4f0ZSQj2e8zYEoyyrkBriQA8PuG+joau3R5NQaoQD7Om6s8gF4mFGtuamQWHRYMwyyY0AsD4A1HjrxM6ftpqWi82iBYKXmuZrrJRp65YbiCE5FyawLTDeUI6yUzAKERkpGa+/t6RaIzH39Cn5/vk/eYf+HOX++MUfPeZqFZDuTL+/s/E5Y+PHNWhBYgYgNa4dphTdvNf0xmT576SOpA1Ab4DK7k1XH+XPNczcpLRB5rkDzMVVbvuXP0YNMOZkbjemBgjxtzNmYApdn5vj5ULetoLzQP2oGoJvAOgMAKckw4Ei1NBfJXDECiUdJoO5omYb26MlqqEdopLkwaQaGmbR0CmNCRmOzqVCk20Mi9taen5xemroG2qXFAWxwcHHyJp/8i+xcDEOG+i3sz97oSqvGSSHBzzT23HMsVA+CBwN+kKG1fM/AHKng52v8CDADg/oZGgSq4kQAAAABJRU5ErkJggg==" alt="Camcorder" data-type="icon fatcow-icon" {...props} />
}