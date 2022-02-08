import * as React from "react"; 
	
export default function BlueprintIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjFDMjk0OUVBNzNCMTFFMTg0MDBFQTM0MDQ0RDVCQzMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjFDMjk0OUZBNzNCMTFFMTg0MDBFQTM0MDQ0RDVCQzMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MUMyOTQ5Q0E3M0IxMUUxODQwMEVBMzQwNDRENUJDMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2MUMyOTQ5REE3M0IxMUUxODQwMEVBMzQwNDRENUJDMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrQK3GIAAATuSURBVHjatFdNaB1VFP7unZmXl1ihgjXUbqw10gZdVBeiiZqYiIiLUqxpiVsR27wm2rgRshQsCS5M80cLLoRGG120C8HaxgYttSaoNUWxtGIsFe0P1IVCzJu513POzOS9vsy8zCs45GTmzcw957vf/c65Z5S1FvGhlHIf7Zs6GljnBWMNYOUPCrUd5AfKBsfOjezcQT/9pHfiuG7F/XoOPvBKK/zAwhhDBjhaQevVYVgBbOX9+YvXtgXB4anz4y+/RI+CtDGVAPI88yXf4oMTPyEIDEb7OlAY/gKeq2Vm6dEpCqHtbt+MgYOn8E7PM/DNQ9uhJqfPj3V3pjGhK9kTR4SXVyAwFr4fnsWEldDKr8WsleWyVsF1FKZmr+KRB9bh+aean364cOQyPfKyMCDHEjkf6W0nJoAisTFc6EC8AkJCpA2+p3U5emBm/g+ZVb6hQUB0PdZIoPR6paYW5g903UePiqsCYFe9Y19ScIP3drehcOCUeJ8gUHtGZkRA43vb5R2ebQyKSMP2libx4OXXCKCP564LCFq+e131ye/fDe/YUA7CXalg9qXgefRImXCGFORQbxt6Rr+C6zqYKDyJwthpNNR79EgJOBYgLwUDad7UiLMnZwQAgzo39yPeerUTx89cWEc/7yD7qyoDRoXKN2TseKKnTQI6BGSspxW942eQz7n0jka5Lo2y+GHhOp5t3YLOls1gPIKP/hU5ncLUy1UTYeiIESiHTMs6FyZO06XG2J5W7J04K+w4jiv3+J3YlHbw581FfP7tZXw6u4Dntq6X82dzvxEYhcwiZOSai4mSpBBNjO5+An0Hv0Gd51BwnViceLb8hJnwyYmN/DBzNQEIYomrcAlGXmtB36HqwSuTO64ZzBKbsaiFAZKhUBri2Pf+HOrrPFK8zlSWmTceK2Wc/SgtPjMBkIwyIZ88CwbgUhUMBadq2RBiBCGTJnlPcRPgw7dh8DigFhpVZgAKZUsQ+WGfSQiSNRBRt5xjy0rPyoAtBaNsYgABatGAQcUmrMos8xrcMjb0mVEDgY2o07iFxttagmjpAptVA5IFnNBOSIWNl8DJTgBX5Gh/CFNJ114HtGSAqmAgU2yq/7x9x+kc+glqqgOlIh4JKrpWqwfnvqFI0Qa7m+WaNzYea1IqkU7PAifMhLJiUs2Yam5G/EBhqHsL9h3+OeoXtPiqLQvKCshyUanCQGnmwOCuB/HG5IVSDxmNrbEUq+XNCLa6BqQN49aNg+9sQv9HF+XdoV1N0XYc+koToU5MQxY/12+ijlfRypl+J5hPW/e/RPv+rk3oP/KLjBsiIG/StSiIl4YsyFqKOWBR6DTSknF7vuQbhH2SWjF73nb3v7gRfZOX5Plg1/14/cNLYTawH+opHeqsiiLIleugKj5M7tnaO3X18Y429HfcjcUlI4rmvs/TyRoIO+KSXGz0JSPLQrg9GpvPabw7fQNfT8/g++GuRnrjWtqHCeL6MXD0ChaLBm9v24CBY1fEUWIdsMm3GHg8Nu9prL0zn3U3VJJSOc+R63zOEUsFkPKF5BCAeGzOTd/MVgAQ9VO/V1dH1Hs0i+M3qPuti7IiOwDPlsZyg8s+dRYA1Dr8PXvi5BqbIprbOVicsimR79VEuJZOG8nuuo2P4izbxE2yX/m7II5bCcCLPhxy+H+OJbJ/WKNx3P8EGADASCI2o7zdmgAAAABJRU5ErkJggg==" alt="Blueprint" data-type="icon fatcow-icon" {...props} />
}