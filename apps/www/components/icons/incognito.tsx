import * as React from 'react'
import { SVGProps } from 'react'
const Incognito = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fillRule="nonzero"
      d="M17.5 12a4.5 4.5 0 1 1-4.388 5.502h-2.224A4.502 4.502 0 0 1 2 16.5a4.5 4.5 0 0 1 8.973-.5h2.054a4.5 4.5 0 0 1 4.473-4Zm-11 1.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm11 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM12 9.25c3.39 0 6.53.34 9.422 1.02a.75.75 0 0 1-.344 1.46c-2.775-.653-5.8-.98-9.078-.98-3.277 0-6.303.327-9.078.98a.75.75 0 0 1-.344-1.46C5.47 9.59 8.611 9.25 12 9.25Zm3.7-6a2.75 2.75 0 0 1 2.43 1.462l.083.171 1.472 3.312a.75.75 0 0 1-1.323.7l-.047-.09-1.472-3.313a1.25 1.25 0 0 0-1.01-.735L15.7 4.75H8.3c-.45 0-.86.24-1.082.623l-.06.12-1.473 3.312A.75.75 0 0 1 4.28 8.29l.035-.096 1.472-3.312a2.75 2.75 0 0 1 2.322-1.626l.19-.007H15.7Z"
    />
  </svg>
)
export default Incognito