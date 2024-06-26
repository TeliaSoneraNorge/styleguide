import React from 'react';
import ExpandableTextContainer from './ExpandableTextContainer';
import Container from '../../atoms/Container';

export default {
  title: 'Component library/Molecules/ExpandableTextContainer',
  component: ExpandableTextContainer,
};

const textBlocks = [
  {
    id: 'block1',
    heading: 'Heading',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar dolor sapien. Maecenas tristique leo a ligula aliquet dictum. Etiam varius eros risus, sed luctus purus rutrum et. Nulla feugiat nisi a nisi varius efficitur. Sed a efficitur ex. Aliquam tincidunt, ante imperdiet vulputate sodales, risus purus laoreet orci, finibus tempor nulla lectus vel turpis. Phasellus feugiat tincidunt turpis, quis ornare elit sodales sed. Ut feugiat nulla id nulla ultrices, et consectetur nulla tempor. Donec fermentum libero lacus, ac imperdiet ligula aliquam et. Praesent placerat metus diam, sit amet finibus ligula aliquam a. Sed sollicitudin hendrerit gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla non vestibulum ex. Pellentesque nec arcu pellentesque, fringilla risus interdum, rutrum risus. Donec sollicitudin libero in erat dignissim, sit amet hendrerit ante convallis. Ut suscipit hendrerit est, vel consequat lorem fermentum a. In bibendum, sem non lacinia tincidunt, sapien risus vestibulum turpis, sit amet convallis magna elit id odio. Suspendisse feugiat convallis massa ac scelerisque. Donec a laoreet erat, sit amet hendrerit elit. In bibendum arcu sed ex porta dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur a vehicula metus. Mauris et mauris at tortor suscipit ultricies vel ut est. Nulla pretium nisi eu ligula elementum, non facilisis risus lobortis. Nullam commodo nisi eget auctor posuere. Cras ut magna eget metus interdum scelerisque eget id erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae',
  },
  {
    id: 'block2',
    heading: 'Heading',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar dolor sapien. Maecenas tristique leo a ligula aliquet dictum. Etiam varius eros risus, sed luctus purus rutrum et. Nulla feugiat nisi a nisi varius efficitur. Sed a efficitur ex. Aliquam tincidunt, ante imperdiet vulputate sodales, risus purus laoreet orci, finibus tempor nulla lectus vel turpis. Phasellus feugiat tincidunt turpis, quis ornare elit sodales sed. Ut feugiat nulla id nulla ultrices, et consectetur nulla tempor. Donec fermentum libero lacus, ac imperdiet ligula aliquam et. Praesent placerat metus diam, sit amet finibus ligula aliquam a. Sed sollicitudin hendrerit gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla non vestibulum ex. Pellentesque nec arcu pellentesque, fringilla risus interdum, rutrum risus. Donec sollicitudin libero in erat dignissim, sit amet hendrerit ante convallis. Ut suscipit hendrerit est, vel consequat lorem fermentum a. In bibendum, sem non lacinia tincidunt, sapien risus vestibulum turpis, sit amet convallis magna elit id odio. Suspendisse feugiat convallis massa ac scelerisque. Donec a laoreet erat, sit amet hendrerit elit. In bibendum arcu sed ex porta dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur a vehicula metus. Mauris et mauris at tortor suscipit ultricies vel ut est. Nulla pretium nisi eu ligula elementum, non facilisis risus lobortis. Nullam commodo nisi eget auctor posuere. Cras ut magna eget metus interdum scelerisque eget id erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae',
  },
  {
    id: 'block3',
    heading: 'Heading',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar dolor sapien. Maecenas tristique leo a ligula aliquet dictum. Etiam varius eros risus, sed luctus purus rutrum et. Nulla feugiat nisi a nisi varius efficitur. Sed a efficitur ex. Aliquam tincidunt, ante imperdiet vulputate sodales, risus purus laoreet orci, finibus tempor nulla lectus vel turpis. Phasellus feugiat tincidunt turpis, quis ornare elit sodales sed. Ut feugiat nulla id nulla ultrices, et consectetur nulla tempor. Donec fermentum libero lacus, ac imperdiet ligula aliquam et. Praesent placerat metus diam, sit amet finibus ligula aliquam a. Sed sollicitudin hendrerit gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla non vestibulum ex. Pellentesque nec arcu pellentesque, fringilla risus interdum, rutrum risus. Donec sollicitudin libero in erat dignissim, sit amet hendrerit ante convallis. Ut suscipit hendrerit est, vel consequat lorem fermentum a. In bibendum, sem non lacinia tincidunt, sapien risus vestibulum turpis, sit amet convallis magna elit id odio. Suspendisse feugiat convallis massa ac scelerisque. Donec a laoreet erat, sit amet hendrerit elit. In bibendum arcu sed ex porta dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur a vehicula metus. Mauris et mauris at tortor suscipit ultricies vel ut est. Nulla pretium nisi eu ligula elementum, non facilisis risus lobortis. Nullam commodo nisi eget auctor posuere. Cras ut magna eget metus interdum scelerisque eget id erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae',
  },
  {
    id: 'block4',
    heading: 'Heading',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar dolor sapien. Maecenas tristique leo a ligula aliquet dictum. Etiam varius eros risus, sed luctus purus rutrum et. Nulla feugiat nisi a nisi varius efficitur. Sed a efficitur ex. Aliquam tincidunt, ante imperdiet vulputate sodales, risus purus laoreet orci, finibus tempor nulla lectus vel turpis. Phasellus feugiat tincidunt turpis, quis ornare elit sodales sed. Ut feugiat nulla id nulla ultrices, et consectetur nulla tempor. Donec fermentum libero lacus, ac imperdiet ligula aliquam et. Praesent placerat metus diam, sit amet finibus ligula aliquam a. Sed sollicitudin hendrerit gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla non vestibulum ex. Pellentesque nec arcu pellentesque, fringilla risus interdum, rutrum risus. Donec sollicitudin libero in erat dignissim, sit amet hendrerit ante convallis. Ut suscipit hendrerit est, vel consequat lorem fermentum a. In bibendum, sem non lacinia tincidunt, sapien risus vestibulum turpis, sit amet convallis magna elit id odio. Suspendisse feugiat convallis massa ac scelerisque. Donec a laoreet erat, sit amet hendrerit elit. In bibendum arcu sed ex porta dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur a vehicula metus. Mauris et mauris at tortor suscipit ultricies vel ut est. Nulla pretium nisi eu ligula elementum, non facilisis risus lobortis. Nullam commodo nisi eget auctor posuere. Cras ut magna eget metus interdum scelerisque eget id erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae',
  },
  {
    id: 'block5',
    heading: 'Heading',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar dolor sapien. Maecenas tristique leo a ligula aliquet dictum. Etiam varius eros risus, sed luctus purus rutrum et. Nulla feugiat nisi a nisi varius efficitur. Sed a efficitur ex. Aliquam tincidunt, ante imperdiet vulputate sodales, risus purus laoreet orci, finibus tempor nulla lectus vel turpis. Phasellus feugiat tincidunt turpis, quis ornare elit sodales sed. Ut feugiat nulla id nulla ultrices, et consectetur nulla tempor. Donec fermentum libero lacus, ac imperdiet ligula aliquam et. Praesent placerat metus diam, sit amet finibus ligula aliquam a. Sed sollicitudin hendrerit gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla non vestibulum ex. Pellentesque nec arcu pellentesque, fringilla risus interdum, rutrum risus. Donec sollicitudin libero in erat dignissim, sit amet hendrerit ante convallis. Ut suscipit hendrerit est, vel consequat lorem fermentum a. In bibendum, sem non lacinia tincidunt, sapien risus vestibulum turpis, sit amet convallis magna elit id odio. Suspendisse feugiat convallis massa ac scelerisque. Donec a laoreet erat, sit amet hendrerit elit. In bibendum arcu sed ex porta dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur a vehicula metus. Mauris et mauris at tortor suscipit ultricies vel ut est. Nulla pretium nisi eu ligula elementum, non facilisis risus lobortis. Nullam commodo nisi eget auctor posuere. Cras ut magna eget metus interdum scelerisque eget id erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae',
  },
  {
    id: 'block6',
    heading: 'Heading',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar dolor sapien. Maecenas tristique leo a ligula aliquet dictum. Etiam varius eros risus, sed luctus purus rutrum et. Nulla feugiat nisi a nisi varius efficitur. Sed a efficitur ex. Aliquam tincidunt, ante imperdiet vulputate sodales, risus purus laoreet orci, finibus tempor nulla lectus vel turpis. Phasellus feugiat tincidunt turpis, quis ornare elit sodales sed. Ut feugiat nulla id nulla ultrices, et consectetur nulla tempor. Donec fermentum libero lacus, ac imperdiet ligula aliquam et. Praesent placerat metus diam, sit amet finibus ligula aliquam a. Sed sollicitudin hendrerit gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla non vestibulum ex. Pellentesque nec arcu pellentesque, fringilla risus interdum, rutrum risus. Donec sollicitudin libero in erat dignissim, sit amet hendrerit ante convallis. Ut suscipit hendrerit est, vel consequat lorem fermentum a. In bibendum, sem non lacinia tincidunt, sapien risus vestibulum turpis, sit amet convallis magna elit id odio. Suspendisse feugiat convallis massa ac scelerisque. Donec a laoreet erat, sit amet hendrerit elit. In bibendum arcu sed ex porta dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur a vehicula metus. Mauris et mauris at tortor suscipit ultricies vel ut est. Nulla pretium nisi eu ligula elementum, non facilisis risus lobortis. Nullam commodo nisi eget auctor posuere. Cras ut magna eget metus interdum scelerisque eget id erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae',
  },
];

export const GrayBg = () => {
  return (
    <Container>
      <ExpandableTextContainer textBlocks={textBlocks} />
    </Container>
  );
};

export const WhiteBg = () => {
  return (
    <Container>
      <ExpandableTextContainer whiteBg textBlocks={textBlocks} />
    </Container>
  );
};
