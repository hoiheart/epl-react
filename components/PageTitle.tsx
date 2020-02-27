import * as React from 'react'

import Typography from '@material-ui/core/Typography';

interface PageTitleComponent {
  html: React.ReactElement | String
}

const PageTitle: React.FunctionComponent<PageTitleComponent> = ({ html }) => {
  return (
    <Typography variant="h5" component={'h2'} gutterBottom>{ html }</Typography>
  )
}

export default PageTitle
