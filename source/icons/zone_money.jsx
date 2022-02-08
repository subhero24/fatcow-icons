import * as React from "react"; 
	
export default function ZoneMoneyIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDUxQjE3REU3NkE4MTFFMjlBNzVFQzBFQkE1QkNCNjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDUxQjE3REY3NkE4MTFFMjlBNzVFQzBFQkE1QkNCNjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NTFCMTdEQzc2QTgxMUUyOUE3NUVDMEVCQTVCQ0I2NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NTFCMTdERDc2QTgxMUUyOUE3NUVDMEVCQTVCQ0I2NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrBxuFoAAAU+SURBVHjaxFfdT1xFFP/NvXcXFORDAmqjD+iLWsFX24YSjTFoU6DhwwcfNFRUNPrmc+N/oFZrqUqriYkthSChIdHECIh9MmmKpo2GktTYLpUon7t0P2Y858y97GU/8IFtnM3J3bln5pwzv/Mx5ypjDP7PoYi8cx+/N6aUPmS0xp20R5E25Tikw7nQ+9axTnqV5vf3DJ84Znhok/IpfQfIyubB+lgvK/eIyokDQ8Zc+/UiXNclS8lK/hEcis3mQVvIROEheLUTPzTnNfw/k8ng4b37wPpYL9EaG6CMXQ3Pi+CnyXHZoMkdzQcO4vLsFOMGds/B9i5Mj48IjPSC+K2F+Tw32Tkfio3d/3y76BF9/jG8wD+8wXEdcVRrRw9ZmxZLWw53i+9YABMLtSeSTTvw7by1o5vkepj6Zljks57w8IJY1AILPQkmrTOCgEBsAIMs5Kxta27hK86nuZbgy4jcsJ5gOAEWhpTy8+kjLyJITZUXxSovhXbk+3OWx3LDerYZ4K+CQ779fvRrerpwaLMqAbEclmflOsjN81AMGPGRcpQsNFqVKPetPJErMbDdgBACGRs42gZPqeqR8Q8XyGU9BRHQNqTwXO9LEjC5/txN+eOwZLlcBzSKIaBtDHx79isot7QxwPJYrsSALhIDoFRxfV+5XEhU6WKA5YlcNkAVcQElqM1hyWWUzAUiR2VrhOgpmAV+Xj/1bFvBnN6VAb5c/4oolgVa8vXid5M2bUoUA0EaWrmu6ClsAALondJlQAiF7C1aLAhNtiQXdoGyPiyY7KYAuDnlOCjBOcu2LqPglup4uV/y1eZvIIWgc2ip8vKNkOJCjY1O5xWZrTbIWLl8yVk9Kh8BLhYO5evYmU/R+Uo/NUt+5eLFbhT6yhD0jRkS5uTcRhQ7e1qgHu2jv0mo0BH5H9cB18vKVUVdIAZ4tDiCSLSc8jYtTYb0cE45krFZNPQOApkFMuhe2lkNvXoVTsVjWDr3OrymAeJp2/eF+gEOQG50uCmRICxmgASfEyVlZRj54kvb4bxwGNOTE3SMCA49UCau0LEJJBNxZOJrSCeWUb3vJO3zMHr6FHr6+jDy2QlRyv1E96tvYOTzk4Js9hYsZACbTUqSlz7CkeZFJJeu2fWXptD+IKXmn3fTEg/LP3yIzdi8H9Hs2wjM5vvAXfXo6X+T3JYgpQMhBDS6jg5IFbSXESGU00WIAQyzGyE/35hGRfcnqGCYIwSzUwPEf0fVzwmY2GnUtr5DSuYtz60hF1yxLjg/QKeMSOejEASZQVD8RKVjRJ0X8WxPGTLAxDdTc+eHBpva6ssk0nXsAsG8gUxiHUiu0pLXrFCGdnHC8sQFK6jeP0jKoxg5M0TtWSq/0FDPFpDyD7uyHp8NfMHvqsrKoo23bycbbp5tG3a0rrYy7AXiuQozv9xCy5P3IZ1MIeAFSCo6WYRO9eNcDK1NddLzBd0Ebcf1lco/mo+O8QlSvk38MbJEdD1oy+OkfIGfEdepruv6wMLs1RLMRPHfUH9/AogNoaHneIhXY7Ogci/+Hn0bdc+8i6oD5DLFVAWzdhWq4nE0zhx/iGTTJqyEonCTKBG4gC1alQ8UOZkrMKd8F5jkGr3rl96fKeCl4+t+FpzyKzoRu259DakNck/cZkjGcOphmeivYt+GwWi4Odw5Tyoq7WuHXM53ODAzt4iW5gak01zJLE/5dZW+KSXHZy7TmifITTpchjTP1/f0jj9Ck1v/ZQBhh0ai2gId925awn+IFnwUdjQgQlRBFC3xR3GSaCMUhNvGvwIMAC9m/igzz8vmAAAAAElFTkSuQmCC" alt="ZoneMoney" data-type="icon fatcow-icon" {...props} />
}