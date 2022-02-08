import * as React from "react"; 
	
export default function ClockAddIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACgVJREFUeNqsV3twVNUZ/93HvpLdkIRNNg+SAAkJARUlCJJUVByIVJ4RKlUEnDqKBWq1Umttq44drdbRgBQQoUVstVoFJUaNr1FTAigophBIIAnZZCEJ2ZB39nX39vvO3oUVnGn/8E6+3LPnnO/9vBIuPPLpt+etGBGvbqa1RZIATQ+97ZhVsYR+h/D/P2r/R/P+pUjqQl0Xv/29g6F7MxZWvEzr8MWXpShS1565bzrGZS8wZaVBMikkDmF3tmPg2OE3Zj92ywPpqbm/gyTPJZRROuhMj2BLgoTeBj387pnOxj9++Nhbz9kLr/wJUtOInQQ9qCHY2o7+E+53nPPfXXyxMowtN+wsvSsrP+1F85hMSGENkqQBZg0NJ0Zi+ys56OjLQdlNY3BZgRNjcqyI4S/+Nbf4cKS+C7s+aIYroQU/u6MF+eO8QECBrhPICgLNHrQ2tN+Tv7xqW6wlmIat7+15vZaCHJOsylCkECSzHy/+swiffjUJty3KxYxrXDjeFESTxw9PZ/ASm2emmjA204LxY034Yn8HXt3diJlXf4t7lh6CHrCQK1WEQ2H461uCCQsrRhDKcKwAyX27b/aaRo+CiqC4uPaFucjMGo+VtxaiviWAoyd98BNfXZcNlCjo50GSwrCYgIl5VhTkmLFpRy3OdTXihbXvghULwYTgqTYkLKocSQjd5wOGQQ8RgcEBqMoQ7t54GzKyC7B8yXh8UNOHnt4wwqSBK+ksJow5DldiBzEKQpZk2ietgiZ09LhQ1zweHedS8E3dEJo9PqxafgV2vK5iTbmOrWtehabFgfkYPM8/CrvgzplpU53WwOitH16HsGM6bi/LR8UX/RgY0mGzBlB6zQFMmXASSSN1xCXaYUtMwpZXazDjhiKYbRYkJvhRkNWCdGcn2s660Dco44Tbh7LZ6Whqk9DQ4MPVriNoPTP42cZK9xvEc+h86nGaFNxbfd+b1Sn7P2+cjkVzcsj3/fAFdCTaB7G0dD9yx0nYvusg7M4kKFYbVLMFsqKKN/+2JY3A5tcPIHt0GEtm1WAE4TE+02F6TJfpMx/mF2sB2QiIsy8fvMUxewZJfCaEvoEw4q1+LLnpCEak2vHSa4cQ70iFhRiqsknEQlijFAsTuljLeGDNAqg2G+zJcVhSekTgMx2mx3SZPvOJDcCoANq0yQ+40pz2ifn5yWjxhBAKyZhzgxuOZNKQmGpaGFWfHsXGrZ/BFm+lcqDg/rXzKbpJCIoFiiCKBwYZMt1nPMZnOkyP6TJ95sP8LhZAzUyZfP9Vk1xobQ8gQIEyKn0QuWNCKN/ygdDu/tWluL4kD5VVh/HcxipYSVNJUgW6JCkCOJwkAplirHzL+wKf6TA9psv0mc/3BWHc5fnLyicXZTm6+00YJgPNmtmLxMRhTL26MKIZlY1rSybgTLuXhPganZ19uO76K8gFutCeJKA/0oVAkmVMn1ZIawrYeAV1x2zkMh0jKfsbjnenHj35Opf6QGwamknydLvdDDcVL03TMXZsgJjKwtdczzUyWsCnYd2vFpNZNbxTsQ8avR9+eCkw6BN7scWVcagKCzpMb4CUyk41s4XSmd93GocAQvD5QoRIFYswzfESNJ/FEEAXMaDRO+Qnpr9dThkg4a3d1WQtPx7/wx1kpaC4J5P2isJukURhUqwR6/EZ04eOS+qA+CHRBb9fQ/QGb29+aY/wLTO/9665RCh83tcmxYxQIEhnIRELzIxxFUXBlm2VVNC4B4Tx8zVlwjVkE7IgOUuXLm2dUbP5A0FBRBc9NIDVqxZ+xwIKdUjFasHzz7+BXXuqsWDBtXj00bsR8g0Lv3NXlEmYtatvJRktRnhpMOmJUChWgqSgHIr/fgEkuuATFmBZdYQDasSPHGQ6hBaqqmL9ht14v+pLzLu5GA89dCfd8wmXSURGpcIkq3E42lqNnTXP4pP6w2QRwESy0BFGB4oQst/5/QKEw4HOc97hVNMIPyGZ0HTKjLxcMnmIczsiBGsUpoCafeMUPLhuOfV5vwhOTj1VNdEMYcf6qtWo/M8uzJ+6GOXFK2GzxHGCwBccIsFq8JFjDW6cjKc+eRR3R+sB28mSl3nDlba4xEKbg8SVzeg5J+HKImAr+XNKUaExeUgoLr4cxSWTqKmEhGCCPQksmx144p3bsa+5Co8sXo+w2o79rZtQ3bwLX3sq0NFfjdHOyzBn0iocbz9wVdo1Q5mNn6KSfS6iirx3NtkycZk92QyTNR5nz8ooLNBx/cxCUWqjNUvnWNN0sZapGsoUlLJqQV1bDbZ+8TQeuuUp7Gt9Hg1dezFAMfWX+Trmjn8Mu+oeQftALbzDtSgrWodvW2omOwsDn7Tsg1s0o+PuimM+30DjufZ++Af7YKZM/ftritCQC56iKgJkSjHiDNmkYscr75HZaQCQbXh5759QNn0patt3oHu4jfqFMNiFykBr3vMOteKb09sxp+hWWJLxJB2ZZGNG669vrXq8+/Qwuju7SdMABgeBjS/okTChBrRjJzHkQJMVsacyczBY8XHdQWS7kuDpPw5u+X6yVCBm/OQ17/FZa38d0lPiWbESHgVUI/mHDjfu3DsuY0pVd1t+qT/kwei8bHi9Ep59RsPyFTJWrlwUuSpHXCDJkhFCZqFdp++gGPT+PFu/JNI3z7uw95uPJXQMfxWdhs1RB3Nt7t32+JujUm1e9LiH0XCsSVhieFjHhvU+/G2bH6eawwZTGctuW2iMZZwFVJGDbiHI/3rYiwMBd1SAC55aMiMj4x+/n+wxFaThvl/MhMebhLh0BSkZI5FIAwfnezCgi9puzPsiBS1SMj4fmYhZP4Iouzw7BunNlbe8NHLxl1USrGrE4Tw3sqDVe4H3fg1XVGbl6RUTnpRcNMvH2bD+r1WYX1KLIXcQnc0dOHWyGT3dXhLXB0eCgoQEWYCDwObQkBKcBm9vhHgcZbKdIC6m5fBa7Fkid7w0klJp+Jp9Gm0MtkSzvELNHYVgvZum13b8eGJD45e1h6o8nnmljp743HO9fvSwx6zKhZbBWaJbyZHL0OQ8gAxnxKncHC0xZmemlDhULUWXRmMz4DmEcnZ91AXJ9Ruuq3DGm4qPegbeu33D4U2tXb4uIzYsOc6SvMuzyn7qsLimqorFidg4Ix00n7mje8baHkdhU0HxlEhoBMkFQaNL84cWC8BRuu8rCthT2PPZM+D58HRUAJ7XsgkSCQYIaDLAoJGinGt244zvWWI+6WB85fA9+dp1eDAlC3ML8gAXDV+qYV8qnOjoAOpPEOFWVH7+LB6m7RZOfymmJ9gMZgFjcNRiPl5Ug7H54n4eIwTjpoybhZLsaVhlTsAV5y1FFAJ9qHUfwJYTH+HftOPhrGMeEn64h/OT+20ygdOwmmKcaYZlu4yvosGogj+kAFF6JsOa5hj6eoxlgzGTD/4rwADydzCAjSbtjAAAAABJRU5ErkJggg==" alt="ClockAdd" data-type="icon fatcow-icon" {...props} />
}