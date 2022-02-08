import * as React from "react"; 
	
export default function MoneyInEnvelopeIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABptJREFUeNq8V2tsFFUU/mZ2dreP7Wvb7UvKFqFLW1pK2QrlZSEtChEMWBGM0Zi2SEx4aPSHIcSoIZoYfwGRAGpAY0TDy0QpJH0IRChoW6EBpIVKy6PYUqAv2m53ZjxnZpZ2FwpFxGlOdube737fueec+6iAf/EsXrc1PjYluwqC4NQaVLWptaE2d+/6N67hMT9i0eaK59fuOaXc7OlX2/pUzfid27iPMY9L3FS89cgnn1eeVwdkVa1pU9Vd53Xjd27jPsYwdqSkwghx5pKvqo4vco/OnjcxAYeuAF0emqoxWlGBMAuQ9wRw4FQL9lU3135RlDuVugYe1QHhlc/2jo9OTD67Kj8F4eGhqG7VBYWAkaqqO+SOBTo7e7CxvAHtVy+mffvu4nPcPWxY75fvki2H3kl2Jv340aIMtMsWnL6hC7OQEGBaNMiu9AARIRa8lB2HMzfUlSlzlnbX/LS9ajgnhouA9Ob22tL8zKSCwsnRqCbhDo8OflDIVMMiKCVuO7C7ph3ldZfKNr+ePZ+avfdzQFq1qXCnKiiFiuLhzEKmWLMJhvMjLRj1zq8Ak6gbLw5RtEBQxd0bV+5e5nNGGjIuWDB5Cj98bRPlU6Gwig8l+kBnDM4Pvl5ZyFpkXXccmFO8LmRc7oLtGFhPQBlrv1wNq8UKRVHg8Xr9s8c5pz+RZiUYlahSBSoUKf4LxFokibAi+j39+Lh4g1aty7dV7di2PHcJIWR2wJTsnr2maG7WC9/tFyCrXjgi7TBLFsiyjDlPTaM2ZQingJ7b3TjZUI/rN29obTFRdmSluBAaYtOd8FU4zbjyt2MwmUwY8Ho0bmYgrcWeDaUlO1bP38ZxtlpDwt8LiQqiLs67l2ZvQWiwFdGRUTRIn502Q+KWZQW/VP8Oi1lC1vjxmvE7t3EfY3x4HssczMWczM0arBUcHv0pa7MDQRSi8L+7gTjnCiLoxfWOm5iSkYNMV7oRbpNmkknC6Qv1iI+JIXNoOWXjd27jPsb48DyWOZiLOZmbNViLNbkWRF8dcDYzJyxE2blgpI1Kg0yealVstsBM9SDRryiZ0XarHQ4KuSCYKLRmzfid27iPMZIxhscyB3MxJ3NnZSwcWtjSnVVAdQIrfUXGpKLhUi7yI8NwtfMvlB07jM7uboTbwjB/Vr5W10FBIVqB+u3VJMZ9ZnKg9Eg5jemiMTYUTHsaieFjUN4XhxmxqVSU/seV6FsqkqB/2IIFuFLycLAuAqPt46DIHkSFhUGl/ImipDkqGqHnVaCbqLVpfYRhLI/hscxxgLjSXHmwhwpajbCWr1T9IiAano2Os+FkZxxKT4qYPakANQ1HERwUBZ70pLHTkTXGbWwugw9vWCbFpmFi7Q709nViRkYBcYRDNjvgdtrQ0uOv4+eAifgUg1Mg99yp8dh/tJNml4OX56ai+dZFxIQmIdIZh301Mlr7HUO2GQEOaxsWTEyHZLVgcqaC0ZHJ+PkPGy53mFGUH4/2XuPMMLTu64B+xgLzprqwq7JO27gWuSfALJrxfV0fPGY73k73aAXmK+A9FxyoqO/GsqlBCAuy0ZGs4GyLguJnXNqEPLIeegznQGBotMKi7+emubCzvI5ELHQM96HDG4kVs5O0XP7ZoePSIoBlicCWyib8cOIW1YOAExc8eLUgE8lhwOmbJDrk3BUDi9DnVaCxo1FhVry1JAfdcgQ8gh1FTzvBu3MDiVsE3erpXaa2kjynhmHsmhdzMDPJimYj74Hcd68CBgWYZIK2bEqrGpEYbcOS3CR00kHZfJvaTYM4fm+itg66/ywlDGMPHG9EL6WxT7mbm7/VwAiIgr8xkHZYHDzRSKsiAjNd0eghgS6vThCI57auAd1mEdZJYzZXNMJq1rkC8fcsQl9o+IdzVlbThMwnY5GaYNOIB5TBQhruue3VcdNTohFps6KSOAomO+mcGJz1vVeBER7BmP3B6iZkj4vDKDo4egcG0zTSOwA7khpvQyhtr2W1TXjWTU4o+t3RdFcRqoOFYqaZHz51GZPHxiKRxPtlPSTiQxo70UdjmYO5mJO5WUNbBWpABDi0An39euYaZqQnUu5EzWPxEa9EzJEQFQy7LRFVZ5k7/t6rgL07eqYFU1yxCLKIfml5VOOHOZmbNVjL7yzgjYOXW8GkBC1H6mP61yqYosoavLxF4zqnp0D2tL3/TY1DUR+XdMA/HCTe19FaAWP3p40UyWTR/8EleKQPXw6vkzWzIG0VCOH7Gf6/h28z/WS9/wgwAEXDdipQlY6XAAAAAElFTkSuQmCC" alt="MoneyInEnvelope" data-type="icon fatcow-icon" {...props} />
}