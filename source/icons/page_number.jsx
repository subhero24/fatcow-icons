import * as React from "react"; 
	
export default function PageNumberIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODEzNTg3RDcxMDA5MTFFMzkzNkU4QjYyQjg0RUFEQzciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODEzNTg3RDgxMDA5MTFFMzkzNkU4QjYyQjg0RUFEQzciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4MTM1ODdENTEwMDkxMUUzOTM2RThCNjJCODRFQURDNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4MTM1ODdENjEwMDkxMUUzOTM2RThCNjJCODRFQURDNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqCfSt0AAAP0SURBVHjatFdLSBVRGP7Pmce92rWHFXmFLMuiTVBgQagpFS3KRYEkSG3at6iFQavaCRG0aFm7fObjtqidEBUUpQtTEcS4mroQ0zSvknpnTv8587hzrzPXGb0e+Gfm/8/r+5/nDGGMAW+EELmrpyeGH9eZroMhDdr4LAKUENA07e2turo6FCRdR5r7ig+TKUAALFdtZmaGNbe2duO6khcATrJDFrZQxccnuEWC64/zS48egdctLXC7oQEu1dTcbGlv722or7/iZQnq+CaW2SmlgiRJ8k3WHLEQvhcWFqGoqAhqqqqq2zs7f6FY2QxACglqzxfjb79kjRfzkfLy82Bubh6i0ShcrKiIdnR1jbuB8ASwVbJaSFUhUhCxLVFdWVmMMTadCUJ2B0C3FAPWnBNlZdDc1iYswd2qY1bdwZjAdhBpF9KCBwAzJSnZEgDuhqW/CThXXi4os+lGkKveFmDpLvDU1HowK/ONB2MEEivLsLScsKT2osXRIj5gw1quLpCyAEDjgCxRMSaJptVxTQmFnF/XdNBQwDILTpaqFigIeYVTMOUGp5fg9JOPEJIlUBGMzSs8HV2yg3pb0z0IPWJAaK9QGJhcgjOHd4Mk4+KoYYrHeTrKdOYWWgEAZLiAmDJuahU37RtfhAvHC5GngHvaPMXsobycEfB9lmzqAm52GTfND0kQCcughBX4ObsMZ0v2gKxiFUSZxavI56uyGE896oMvC1gl1QCDlQP9XPawFxeXIE+lwgqNb4bhftuQ6FPRDJy/1zwIK2sajDZdxuDU07IqsAucTcOF4k+vgoxW6P46Ba8+TcC7xkrh3O4vDn5dE5mwmtSF4/yUEncLEJruf+Aph4M1gB9Ti3DyUARRGb02n2Twb51hGiIs3XDdtmPA8D83uwzhkMJTAL7HF6D61AFMfjzmJTnF4zgjDWnWMyKQCyz/lzx4jyAkEQMhTMPHsRF41Dks+gTfMwKNHUOwsqrB+LNrRsn1mQbZAZj+n3peKzTsH/sNd19+g4GmWuH//rFZB48+SRr+5y4Dsh0AjsrFb4er6NgQRv6HkVkoLy0UUg4gxWPwYfRr/JrFVafE7/6b1wGhivn+PDoL54/tty+fNo+VTxd3PDCj338MUK/DiDrJ1KcvPm9orEMaz5iRKZS4kxQ4CHkhyjg6GQbD5IsbQlt+4lHstvgkr/3E2+zbLkSiGOEmhBlHrQhyls5nvT/kAoDzULO6M/kdB7DV5h+AOZBXM8ZY7gG4AJG9T8HcWiFzfVcAuGWiOxaLGKWU5dIH1v0gsaHL8Xe8F1+lSPvAdyEN/Ov8h/968v8Ce18HAMX8aVBh59oa0jLSurXvfwEGANfjy5+lIpAnAAAAAElFTkSuQmCC" alt="PageNumber" data-type="icon fatcow-icon" {...props} />
}