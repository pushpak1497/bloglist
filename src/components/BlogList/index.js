import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {details} = props
  return (
    <ul className="list-container">
      {details.map(each => (
        <BlogItem details={each} key={each.id} />
      ))}
    </ul>
  )
}
export default BlogList
