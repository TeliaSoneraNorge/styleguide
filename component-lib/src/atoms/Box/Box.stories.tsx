import React from 'react';
import StatefulBox from './StatefulBox';


export default {
  title: 'Component library/Atoms/Box',
  component: StatefulBox,
};

export const Default = () => (
  <>
  
    {/* @ts-expect-error ts-migrate(2322) FIXME: Property 'children' does not exist on type 'Intrin... Remove this comment to see the full error message */}
    <StatefulBox color="pink" canExpand>
      Default Collapsed Box
    </StatefulBox>

    <br/>
    <br/>

    {/* @ts-expect-error ts-migrate(2322) FIXME: Property 'children' does not exist on type 'Intrin... Remove this comment to see the full error message */}
    <StatefulBox color="pink" canExpand isExpanded>
      Default Expanded Box
    </StatefulBox>

  </>
);

export const MediumBox = () => (
  <>

    {/* @ts-expect-error ts-migrate(2322) FIXME: Property 'children' does not exist on type 'Intrin... Remove this comment to see the full error message */}
    <StatefulBox color="light-orange" size="medium" canExpand>
      Medium Collapsed Box
    </StatefulBox>

    <br/>
    <br/>

    {/* @ts-expect-error ts-migrate(2322) FIXME: Property 'children' does not exist on type 'Intrin... Remove this comment to see the full error message */}
    <StatefulBox color="pink" size="medium" canExpand isExpanded>
      Medium Expanded Box
    </StatefulBox>

  </>
);

export const SmallBox = () => (
  <>

    {/* @ts-expect-error ts-migrate(2322) FIXME: Property 'children' does not exist on type 'Intrin... Remove this comment to see the full error message */}
    <StatefulBox color="teal" size="small" canExpand>
      Small Collapsed Box
    </StatefulBox>

    <br/>
    <br/>

    {/* @ts-expect-error ts-migrate(2322) FIXME: Property 'children' does not exist on type 'Intrin... Remove this comment to see the full error message */}
    <StatefulBox color="teal" size="small" canExpand isExpanded>
      Small Expanded Box
    </StatefulBox>

  </>
);

export const NotExpandable = () => (

  // @ts-expect-error ts-migrate(2322) FIXME: Property 'children' does not exist on type 'Intrin... Remove this comment to see the full error message
  <StatefulBox color="grey" canExpand={false}>
    Default Not Expandable Box
  </StatefulBox>
  
);
