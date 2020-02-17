import React from 'react'

import { Card, CardContent, Typography } from '@material-ui/core'

export const Panel = ({ header, children }) =>
  <Card>
    <CardContent>
      <Typography color="textSecondary" gutterBottom>
        {header}
      </Typography>
      <Typography variant="body2" component="p">
        {children}
      </Typography>
    </CardContent>
  </Card>
