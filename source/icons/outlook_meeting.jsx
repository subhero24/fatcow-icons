import * as React from "react"; 
	
export default function OutlookMeetingIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEMwMjk1OTYxMEEwMTFFMzk2MTM5NTE2MEJGODBDRTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEMwMjk1OTcxMEEwMTFFMzk2MTM5NTE2MEJGODBDRTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowQzAyOTU5NDEwQTAxMUUzOTYxMzk1MTYwQkY4MENFMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowQzAyOTU5NTEwQTAxMUUzOTYxMzk1MTYwQkY4MENFMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrUR9+AAAAT6SURBVHjaxFdNbBtFFP5mdnYdJ20cIeiBcoFyARH1QPgRlFIoKm1M29BUQiCqCi6ReqoESEiorXqHQ4WExIEiVRxCk9j5qRvHsZuQqIiiQiouvRRVAolSLpDmx4nt3eG92bUTO7YJwShrjb3fen7e+9733swKrTU28xKbbYAyVgihlj99aNCRbhTwgEbaJPhLQgs1K0/8+gCB/BoD6Ao7Mh9Fx/u0uFsc1aCLvBEWxPWPIwRaqP1VzYAmFO4Bd6aBWyM0QDZwfWL00UOAe4+RUzUE7HLvI5dxsHMPFpaIsAYSwBJromUTyUlCL6GWAXDcOTjU+8sL5yGlNAMFGcL3nudtGLPI337rDTjefG0R+lrxyHMNZQkcPXLITCKlhdjgMI52HybsbggPxIdobk0y9OobUCZa7VMn+KMlfUvzgH99LFDK3uCmFhZmRl0/DVcWF7AsC8q2IF1JbIQQUhE0O20gh0AOGWyrkE+3xf0VlJIGW5asgmXgll4HA9SvtbUVY6kJ09+xWpGUXUjFfDFzcnjUtqbTyJGqGUfaIkiNTwQhk2VYUAeej+pMTQ7WMLC4mEX366wBgbBqQX8f8MrTKIlq/Hsgun8vsoUFw0gsPowj1N91XcNeOZaER8h4b30hoAD7GWDsXWXzQgDL0tOflL3je80UsQsVWEpRt6ypVfWK1hfGapvi6NFEyvIXFUtBQRM+5udK28SAhkVAUX8WqIn5akzOSGJFo7YOVVnFCDSQukJFg4xxZCu4MKd+XiHApa+xzLfIeaQBYqwtEsF4ZpJCpo23lThC81lK1qtUxrRtA/G45qv34oBezi3rxeySzue0jvVntC4QoXTPv4z5Of/P/Xr7YkH/bBnOEs7ncvpif1zPzc3p2OAgL7Ttn+sAa4DDRx54Mo8C5pEnQbmuZyhm7Om8+Z9jYiLMG6jnM8gaIGKgOITkedimUIja5X2NAZzHNtUBzxKmkjF9lhIm5ZhSxoriLA3mmqFMMzWBsKNovKPMFvz4ByOmz0+vArZcpwGKRDN8aYwc9PPaVjaGE8lSntfCnGrM0Jawgy/6Ujj3QwE90SfwVfompCPQYq/TAFb64YOdhlJBHo8kRtG1DlxU6fnYGD674eHEazuNaIk8PHP6G5rXwa4zo3ctGsPhoL0hkTnd2VXFABGkpceFedWxoj42gacn567lcLK7Axe++wUv7LgP73a2kwakHz6jBQ6hwOcjN6J8EKqiAX9Sjl1RE/WwUqUjBR57L44P33wOX8/8jq3NTZi5s4gff1soy/QCtWMdDxazr6msEPkTSyRTGVMNhVGyheR4xgyohacmJ9BzaQ4fHduN/pm7aHFs4zEqChCPyRNmkRc3y5IBMqB+/769Gzr52MkEwiGbRBgy5wpR/XQI5WoSrlWyrGiAnp2dvRofGnreq7NxVD30kuEhiunJJy180nsV7R07SaDuygYkimcCnwGq3qUwrjZg6Z3jx3vo9/5qmfFviAifvTza/uxTcAuFUmEzxSnwmQhAs2FJrLyY8HsBK9Kcjv/bmXwLte0vn01MdezZZVL1+uS02ZDMKcoY4WcLhWk+fapzR9GARh2CnaDeP8xGvBjdh+nRNNKnDhyoeCFhK/6kdluhsVeO2h98c+VMdLdlJaeCdL0dLFjZd6HRDFQysT3wvJoBZRr4P947neBVrHimytU7D2za9bcAAwC4fU1YMBkiDwAAAABJRU5ErkJggg==" alt="OutlookMeeting" data-type="icon fatcow-icon" {...props} />
}