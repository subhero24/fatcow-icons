import * as React from "react"; 
	
export default function AcceptButtonIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABulJREFUeNqcV1lsXNUZ/u4yi2ccjyfxEjuOx06sJG5CUiiygowxWFAViFHSUNKgqqAQUMsDlUjLIuAFQZ4ipL5UVQUPCKGmUaMmWDYgCBICnlDSkNhphMfLjJexPV5m7PFsd+v/n1mYcSZecq3/Xs+95/zf92/n/EfCOq/2l1DhqsFJyHjGkrA/916SCsTCNcnAh0vTeP/bv2JxPXqltb4/+Bp2KBW44LRjX8fPOtBc68P2qjpYZhqxdBSJVIQkimhyAWPhEGaiUYTmkjBN9CcjOPzVaQyTHutOCCgPv4u/ORx44Y+Pvoz2Pe1Y1MahIUKz0rAsE4ZpwDAMIgOktRTmFmcQmh1GcPYmgjMxTM4Bpo5/9L2KF0mfsRECtq7TCBzcfU/dW79+D0vwI24GMRG+hun5AcxFh5FMGsLtOS0Omw0e13ZUlO+EU63H0OQV3Bi/TnOAxThCfX+Bj0Zq6yFge+gdjD73yO/rD7cdw4J5FVML13H1x3NIaSZkOTNJKjHTyt5sqopaz0PkITuuDH+JydkUJmYx+ekraFpJYqUa28OnETzeeXTrY/c+jqQygv6R/2B0sh+KAshSaeBbiFgZMpWuFnhdv8D3/l4EOCRhTPW9gsZCEkpRzN/G3/c2Nz/wm/anYDkn8N/Bf2F85ibIIChyFnwdkquKhDYPkwK4s7aLwuBHLGGUN7Sj3v8VenMOyxGQ2k5id0UdPvjDr55HuVfHQOACxsP/y1u+kcsqKNGUFqV/UmjY3IZIfJAE91Q24uzEFczxGDnnes8OnP/l3Q+gfBMwvzSIwPT1DLi8PqtZaH0giwGdbno2DBLNjyT8UNQUdm3bi/oqoKoF5xkzT6DpflTZ7Wht3e5DWZmMH0bO3Rk4Iaao2Lr39qCj+Qy0AhIzsa/RWLUP1R4Jig2tzYSZI6A0d+LE7m3bRKynIzeQ1qnElDsAJ8sPtZ5Fo+cQ9m89hS1lPuERHqNZGpELobrCBy95eceDOIFMasFuc+HpzZvccDodmCICIok2EG9a9TKW7/kndm4+lv92dN9lQYwHsb6YNooqTyPcTvK/G08zNhNwyuQSj1uGy+lGNBEULltpobWG5d2tDP7bInKh2DeZsVl9SS0Eb/lWQYAxBTbdVB6sGwlRvylDKyIgksrKCP9vlQJny73F4EMLZ3Hx5hGRS7my1OhPVRwZv2dKRc1BIUEbi27oRbXOgJxIHY1n0L2rR7iZQYvAd5cG7/nxOOxqiUResRLLuXpNpJega3p+kIgt3ba4fNhfe0ok1qFdZ0FbADQSfnbvuj24I1tFa+WSnFuPU1pmZ1vpgaN7LucH7/QeI9CPENMhnreARwh8kMDZcuU2K2cpAsi6NJFaphjZiiaIRCq4Wry/w2v3WeK5EXAOm41060aKNqmfyIh0MJIYjCWB2eg4XGpdfj3nBLo4eEQoX+0S4H4Ct61iOYlTqcNCbArLhMWYjM0E9Ng0euL0ciY6hnK1Kb+W8x5gJ4WsfChamgS/F+C53XIVom7SHY4EBQHGZGwmkLzxCT5eWALCSwE4UCdcZWW9wBaxW0uRyIOrq1vOuji0rHuWMBiLMRmbCaQXApjWEhgORywE5vpRY+/M13sRieHjGImeF+D85N9rgecIVJHOIOlmDMZiTMZWs73a8sAn+JPtGHrKXQOoqWhCpdqCiOHPLWIZEvSjd/RJUR38XoCv4XYe61FaYKYd8E8MiD6RsRiTsXP9gLk4gXjdz9Fs2bBHN4Joqe6CIS0hZUXzxjAY17YqZXaRtcA5lzYpjfDKbbjs78PIlIG5CVy8dg4f0qeFIgL8I/AdrjZ04ClJNlzxdAAtW7oIJYUE5m89A6zhcnZRBVkuwId6qWVPYGYec5fexrO8TXD8V7ZkHArTfwmfVh/EYQtp1yI1Ets8bfDYfTR6DKZk5jvJUnWe23hU2mlq1C4oWi2B9wnwsWnMfv46umnEGMli1ugiAuyxNC//Q5fwWc1BHFlOGWVRaqMcchka3J0oU7aI448pxSk8Zn6XFIuMZINLboBXOQAv2qgdH6bG5juMhAy2fJ7AnyDdoyTsTn3VtpyEuxVf55/xJvWJj9cTbnWlhKpNPupoKKbldVRW9qLjjmGkaZEJIRwNilLjbOeEWwyh9+szeIeGBEhm12rLC0l4SbbWH8C+u57Eu3YXmriT4b2cRZGLJ/DyygsMC9d5Oo7R6//GG5M/oJ8+T2WTTtvQ0YzERUL2o9pdjdq9h9FduR2PqC4033LaI016HCORMXwxcAE9y2FR53QuEt1vfKNHs8LvtiwRN0kFlzVJWUFHXVjyCZJoNsmWs8DanR5OS3nEzm1UtouSSpS9ni2v9O0sXnn9X4ABAFUK+nNCM645AAAAAElFTkSuQmCC" alt="AcceptButton" data-type="icon fatcow-icon" {...props} />
}