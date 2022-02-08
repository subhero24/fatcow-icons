import * as React from "react"; 
	
export default function SlideshowNextIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0M4QkNGMTg1OTVEMTFFMjg1QTVFRTFBNjJDM0I3Q0EiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0M4QkNGMTk1OTVEMTFFMjg1QTVFRTFBNjJDM0I3Q0EiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3QzhCQ0YxNjU5NUQxMUUyODVBNUVFMUE2MkMzQjdDQSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3QzhCQ0YxNzU5NUQxMUUyODVBNUVFMUE2MkMzQjdDQSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsS5LIUAAAWISURBVHjavFdbbFRVFF3nvmbaaUEiD4mFhkoiJg0qDxMlJqg8QogYPvRDggo+IMgHkhCBNtKIxUaIJX5YQGxArICilkScaECICZ9Ka4BEjfIqBWlxSh8z7Z25c9z73HOTYTrTTgA5mdW5c8+9e6+z99r7nAoAZuOefVsdx3nL8zzcjWGaJlzXrV/+ytJ1/LukYden8m4P9sm+LfoT7unuhpfycO7CRUj5/65eCGBS+USwT/bNBIxEIgHTMjH5gUm4W4N9sm8mkG5vb2/aWPXOEplOAzKNVNqjrzsbCmEIWIbJF/Qx8G8s1sS+BeeBUEYYQ4hMXfJetGbpbLAghf8q5E1XAbHCCabpLRZezb4T+K2pegHd6iN0ENo4AhyLNkIn4d5ISQmmlI1A3S8eDJjwhEMGLGXIQIquXPUtCiTAmuKn355ugW3TOEe4Tuhn32yZa69Xw3DCRSgtHYnSERIhcv2CWI8JOK2MXUIlDqGOSNGKyGwhUWACSSnIpg22TSOmF6uGlf2CHSpGhAgU0wvLUq9jPP4iV/eouQfp+lVRjSZ7FxzEaV3pIMMaQWpkRviJAGW6hOyx7eyRg0CEVk8EyOdDPS1wxShSiu2ngFYyRbageGQEYWlrAuRYsBnT5yBZyCntOiMCIxxle1gChu2AKhJFEV8qjiH84lXWhLLLc2HpQEg9ZdDnShWE2wJvwhG66SgeQTysNHc/3/YgfzmTxh2CDMfETMCNE1yNOLqMmQjRHMfEprdtMozL1fBuNCPVfxE4vwiW1HNCw7jZ9tAE9AjTTPN9e3DDrCS9dijwdfO4PYpc4NymGCZjB+DJInjpIiQTf8BM/qnmLMOHbeQXqZVvglfJ0f9m4l6/WygNQK2Ov7mnMLrO15PIwpR+JQAKvYNEZxNGVdSA+hm4tw1VLHkJMGtTaF3JDK1rwXMPbWt9HsneUzCMEu2JJqSJnqtN6O85g7KHv1LFeksEnAwCuTYUFlVv588wndGUR3FT+XmehXjncZRzYeiIFUwgeNayVGHlJABNwEMR0sl+qkJ9g9/3Uki5Ccx5tBqz7qfmRf3u1PX8zdsYKgUMLslsqPTQMzOe/h1maBIS7g2UH4srJAa6YYUm44lH1mBz82Is3izw2LgM5sOnwH8obPspyMuQ02OHMHvhURjU4FqPlqvbz758iXThG/7u12YcXrUNCzcJtNSSQKm5F0zg9JnptNIIVYIx1CZLDEkBRWEqP99Ua+sCpPp6MePx/UorHqn12zfrMZNIbJgXR3RTgSLs6/HgsIiEGGajp83WHYDs9n8OdA0QmSSdsHziaSLwY+tqHFq9Ay/uKC68CmKdHSTE+DARCJREJN/ww5u+2g4v6VLjTOiDiKG2ih9Or8TB1Y1Yai7/50SVyoWbk4AWM7Ytu3xHTkKuF4Pay4hj9OxyNK74EK+JtQM/bfRJZBOQ6UTXyUW138/iE3pwEpJq3zN02aQz7maWl39ESdGGlfIMNK6aq0SckNcUgSCTx/9ei4aV67HGrhuIrkMom0D/kdolK+h7dFZ07K21NdF1VTV8nEoOs2i7tqY2WjF+3nOz3sXhfq8D0taZojVUjn8Jq3bW4dgGTIW/pw3SRKk+H47NQAVh2vb67VKfH8fmQdn2+o/4mWmMp7ZAHm+bL3eegvykFfLE5bnymS0qUE9qO06hqXQCIh837JJ5XnQa/LmKgMyc9yGjl6bJ3Wchj7RVyjm36HwQid2Ne7NJOPpe4Fw9O78OsvnKBPnZBdy280EkmvZ/GZBw9HWmcx5jF3wA+fX1sJx3h5wPIvH5FwclI4dzHmPmbsLJhVuHdi5ugwQflUcFfYvQFTQXPVjMEwl8Fr9KuJY1f1sEAhLBMbcvh3FLOzf0Pz9uLiP/CTAA67RvXqjMJtcAAAAASUVORK5CYII=" alt="SlideshowNext" data-type="icon fatcow-icon" {...props} />
}