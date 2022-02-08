import * as React from "react"; 
	
export default function BabyBottleIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjA3MjRDMDM1NTgwMTFFMUJDMjBGODBFQTEzRTc5NDQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjA3MjRDMDQ1NTgwMTFFMUJDMjBGODBFQTEzRTc5NDQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCMDcyNEMwMTU1ODAxMUUxQkMyMEY4MEVBMTNFNzk0NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCMDcyNEMwMjU1ODAxMUUxQkMyMEY4MEVBMTNFNzk0NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pqyd9gYAAATISURBVHjavJbvT1tVGMe/t5RLGbA4DUQDL3QJxvnKaGIWo6h7sYxootEsGzg2FzH6xn+ATBxgjC80LvPVYhbn+LHM4MZeOIdsY6tswkCQLQrboGzSDigrhbas7f31+JzTW8IUBoWy2zw5tzfn3s/3+XGecxQ8vEut3424ZQJkAS9t//Dnp9/57u2HBj9SDor6LlLI00rhoVY6Ugbi53nONQI6xy5XN/9yoPYthzPh8RtVzfBeOQwzFkXBcxVwZMh5rrUQ4PT+tu/kqS9r39xzyA1L12GZJsb/bISpGSxGYbgTSkKAoqyBgLzD2xEqO+iGv68epm7ANAxYBiefIxGeGsNAZzt212Mzz72xFhFwCbcsTUvATUvCLcOS/trwEp7nY5t1pL3YyuAvO3AR/qtNCbie8N7kNBCPdugF3M+mpSsCatP7iGtxYMfXboz3HoWhmzbckHAIAVBkQfIVEXBxk64I5Fj3gPJvOjDR1wCdiy0JJ4uxvOAU/nW3nUD+M1vcPJ/mKjYd3u//sWPqteJhHP3oZWyprEx4K0zA+ddztlmWe/6m1y+XVp3/hN+JJV9OZRWodcda45ZF8x4RDJNQW1GK/nFg3fAhuL/6GK+W74LOEQDP/ePscVT8gFKeHGULso3Zo5GSl581nKaFLhZE3cNBCmtEPV6igfMH6ft3QYONO6l+jwz1K2wb2fLFEl1J1Ofgf3vDcuz1BGnQFyLfVJRCMUM+G/HPUpcnRN0+ntf2LTVWgJo+kAIEXF1xfpPwQV+Y/vpnmvpGgvK/ZlgU1UzyTESo8+ZdCoTj1DkUpN7RGNW09AvwNrbn2TakBz46Q1dvT9P4dJRicYNMjn3nzQBdGQpQFwv4ne8nOQ81Ta3zw75hKe8dD4DH979Xiut3IrAsCyYXVMF6FeuzMzF1T0OPJ4hNhXlcZ8QdVtQ6YfRuDBmOuUbjtYtNS1WAWj0Pzp6Co43HclXkuFRMzWrwBmLyxQFfCBsLcqVAISEzQ0kuq8hS4MUEqNX1p+M1DOeCg8aNROd2+sg6J7JVJwKROMOj4KyAS4/FAdfHQih6NIfXucLep763Of8H31WKSMzEs0W8YkR47W+aBsGZQSxGeEwyMmIUfcAkA8WPZ8MfohULuA+e68qQGwkJOCsw+BwV1xN1kISLLidSY7JIEZFAWEdWZpaMRKoCZIfbt3PrHNwQcJIBYJjJqbgfnhhtuBz5kOFQUd/Wjk/Lt4l9Xk9FQE6yvUrPrQRctFmTw6uZy4M3nrsg4HP7/HIFiCLMdNjFMxM15SP+NBffEnBaED6S3OeXK0AcD9T2nxpOKsWbK598ogiZTrGcHBx2c1G4aLAWOfhstzp4UoA4IlgXTjS2FLxQsjdLzeVUZHHFO/gwaS3oucWeT8zM4tSlrlXBkynQ7JdHqvljHdeuYTJiIBI1ZCrovznnVaFw2M/19q8anoyAXOb2IUHndLQUvliyV3XlIs/lkq3VWLzgVgVfcA9gKxKbyefHzlDfrTANj4foNneYIR49EzGqazqT3GyKVrPNLktEHYsYvBOlG2P36NZkfE3gygNEFLA99cXxX92i8ESHq9qxNe1hV5aIhBBRKHqUvcP50p1zZRnpyBHNym6vs+mEi+tfAQYAmGmHgsdCc0YAAAAASUVORK5CYII=" alt="BabyBottle" data-type="icon fatcow-icon" {...props} />
}