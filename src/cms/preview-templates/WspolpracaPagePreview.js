import React from 'react'
import PropTypes from 'prop-types'
import { WspolpracaPageTemplate } from '../../templates/wspolpraca-page'

const WspolpracaPagePreview = ({ entry, widgetFor }) => (
  <WspolpracaPageTemplate
  title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
    thumbnail={entry.getIn(['data', 'thumbnail' ])}
    postPath={entry.getIn(['data', 'slug'])}
    slug={entry.getIn(['fields', 'slug'])}
    description={entry.getIn(['data', 'description'])}
    helmet={entry.getIn(['data', 'title'])}
    postNode={{
      frontmatter: {
        description: entry.getIn(['data', 'description']),
        title: entry.getIn(['data', 'title']),
        thumbnail: entry.getIn(['data', 'thumbnail' ])    

      }
      

      }}
  />
)

WspolpracaPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default WspolpracaPagePreview
