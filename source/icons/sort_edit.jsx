import * as React from "react"; 
	
export default function SortEditIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEJFRTYyNDk1OTVCMTFFMkFCNUNDQ0E4QTNEMDBGQjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEJFRTYyNEE1OTVCMTFFMkFCNUNDQ0E4QTNEMDBGQjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0QkVFNjI0NzU5NUIxMUUyQUI1Q0NDQThBM0QwMEZCNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0QkVFNjI0ODU5NUIxMUUyQUI1Q0NDQThBM0QwMEZCNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtlQ/tsAAAUrSURBVHjavFd9TNRlHP/83u7SUg7uOGB5JaHOmY1y2dSdtJpb+Q+5ufVXuYlBNXmprOXcstmqWetmIkkGlAbO0IlpN3JtWSKJw3ybQnjGi5WCIpzHCRxw93v6Pr+7Hx5wMLwunu2z33PP2+f7/T7fl+eA6JpcuMdZzcH7mOImf1Zadej46QbGwftTKYTkKDtUVf3rWaa3Y6cuMkdZVRWfmwryA3uP1GjEVzs8rPm6W+vzMT4XjRCC3tnwviPeNntuCURxNZ0JsJELVRqzJsThpRcy0OnpQ+ftPm080TQdiXHTUXG4Bje7PRAFYQyDwMdU9eDfbVeyHVs2uMcIkJW70ZK+2N6Z8dSjeHz+7AklvnW7H109fRDEIBFTGcwzp8NimjbhvvNNbaipb8CF07WJXxdtvTXsUBwL0heX6eRtNzwYGgxMaDNJFKErykgQ951+uL39425RDNKwYkODA2X0WU3w6wJMkxVjpkbe4UFAVSFJYtjlRLivcWZYpCkaDARUOrtHE4IiJ5NzEry6AEZFloYP4ORCzP2Xmy14qj/4NYYLICYnmrRJ7kCiEHtugStllHF+81E8R/23iUqf1jqa1w8LEEuIkCUZRqMRXVuPw/zEQkjz0nBm04EbRGe4K4AuDakfM5CmihIkr/quHMdsLfB5fYQ+9CbaUP/GNwNciBEpVCKphVhcAWkukuayoqCyYjfsy5Yi3mJC2Z7deF5aAZ9vAIYhzo/7xfB9ohQLzSVIihHSNAVN71oww2RFXHwC/nQ1UyIzo7Lne1iuXcaSL15bgtFFhPv/f7IAaS5IBnI4AZfeTMHyglew1JaKoooTEAJeNDU0UlIQsag4J4NWXyP0jrCAJMVCcwEXOXn+WuDBHKDuE+QG1uBySwflAwGPLVuFEPlNwqAYnkF4CEYFyoyybIB8H3ChIAUZnHxWNpF/BDQ5qQ5IWNi+CzuLtmHQp2XMO5z87hUIugWF6MwuKxAV4ExeMpFnhcg/BFyHSTk/CutS8Oq3Lm15YMg/8nGhx3/4997uXNbI64n86Qjk209a8Xq5i8wfLNYqY2MFaO+8HfxBscsYm3yoUQqnD+pyibwgMnkuJ1dJOTXAnWxMmtcE8PuD1U+SRQT86iTjXNTIT05AnsfJ+dOCJBBDtUAYZWXuhKrX033s3B9tFCEiDIpEDiVqRSkyaJ5CiZbgN418bRj5Ea3KFtZZUVDuGnYvRRa0szkH5+Kc4ULMSJ0z3759j5OdbWxlk22/rE9izLWRsb4Wxn7OYuxLC2O7EljxugUR1/OzOQfn4pzhhZxfQ+Ksh9MWrsvftDnenGTnfjDaE1QmwGqOx8uZy1CbZ4WdOxyP81MUald+0Mpt6Vkb+lZ8BfS7ofp9mj8JIbO7u27UlhV+/ME/V5sv0VCn/iDRL4TX5wRCMmHmOM9saZNj38Z0y81nFiVfw5xn3wGOv0Xk1dzGKL0wF9k7alfyR0+EvZysh9BB6CYMRHzvh0xjIVgjwEZY/FPRGookLxtqqWT+6hcZKzGzkrzl3GDLCY+Ms9cSOluORBoupVd/qURohs9z5q16Mt0k4K+DELpbcanFizOX55HmJ3hub9XT672kEvFe/hdcV9Mchc5edDefQ/leJ/Y3zjy5bkedPVryid+ZowTdsn5lfn2HddtDUqtf6LmybefR9h9p3B12r4PRFNDJ/qcz3lFS30thv39avL/eyf8ehMh7Cf26R0f5ZJxUe4CQFLqynhAGRieU/1MAJRSqgVgR6+1fAQYAVJtJHdhEXdIAAAAASUVORK5CYII=" alt="SortEdit" data-type="icon fatcow-icon" {...props} />
}