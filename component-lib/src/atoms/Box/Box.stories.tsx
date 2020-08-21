import React from 'react';
import StatefulBox from './StatefulBox';


export default {
  title: 'Component library/Atoms/Box',
  component: StatefulBox,
};

export const Default = () => (
  <>
  
    <StatefulBox color="pink" canExpand>
      Default Collapsed Box
    </StatefulBox>

    <br/>
    <br/>

    <StatefulBox color="pink" canExpand isExpanded>
      Default Expanded Box
    </StatefulBox>

  </>
);

export const MediumBox = () => (
  <>

    <StatefulBox color="light-orange" size="medium" canExpand>
      Medium Collapsed Box
    </StatefulBox>

    <br/>
    <br/>

    <StatefulBox color="pink" size="medium" canExpand isExpanded>
      Medium Expanded Box
    </StatefulBox>

  </>
);

export const SmallBox = () => (
  <>

    <StatefulBox color="teal" size="small" canExpand>
      Small Collapsed Box
    </StatefulBox>

    <br/>
    <br/>

    <StatefulBox color="teal" size="small" canExpand isExpanded>
      Small Expanded Box
    </StatefulBox>

  </>
);

export const NotExpandable = () => (

  <StatefulBox color="grey" canExpand={false}>
    Default Not Expandable Box
  </StatefulBox>
  
);
