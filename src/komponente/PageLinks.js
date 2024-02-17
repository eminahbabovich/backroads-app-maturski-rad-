import { pageLinks } from '../data'

const PageLinks = ({ parentClass, childClass }) => {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((pageLink) => {
        return (
          <li key={pageLink.id}>
            <a href={pageLink.href} className={childClass}>
              {pageLink.text}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
export default PageLinks
