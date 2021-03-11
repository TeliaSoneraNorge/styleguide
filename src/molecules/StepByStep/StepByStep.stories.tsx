import React, { useState } from 'react';
import { Button } from '../../index';
import { StepByStep, Step, StepContent, StepDescription, StepIcon } from './index';
import img from '../../stories/sampleImages';
import { Icon } from '../../atoms/Icon';

export default {
  title: 'Component library/Molecules/StepByStep',
  component: [StepByStep, StepDescription],
};

export const Default = () => (
  <StepByStep>
    <Step>
      <StepDescription iconName="ico_buy" heading="Lorem">
        Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. Proin eget tortor
        risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta
        dapibus.
      </StepDescription>
    </Step>
    <Step>
      <StepDescription imageSrc={img.boyIpad} heading="Ipsum">
        Nulla quis lorem ut libero malesuada feugiat.
      </StepDescription>
      <StepContent>
        Ullamcorper massa in dictum consectetur. Sed eu luctus velit. Pellentesque aliquam, lectus eu aliquet suscipit,
        diam sem vulputate ex, posuere cursus mi arcu ac nunc. Vestibulum dictum metus nisi, non mattis diam porttitor
        ut. Nullam suscipit risus eget lacus gravida sagittis. Suspendisse massa augue, mollis a pretium nec, faucibus
        nec lorem. In hac habitasse platea dictumst. Integer rhoncus, massa at pretium molestie, dolor felis vulputate
        turpis, sit amet malesuada nulla odio quis neque. Praesent vel dolor tempor, posuere dolor ultrices, malesuada
        leo. Suspendisse et efficitur mi. Fusce nunc arcu, lacinia quis risus ut, sollicitudin rutrum ante. Nam arcu
        augue, feugiat eu lectus eu, bibendum cursus turpis. Duis feugiat sem a scelerisque tincidunt.
      </StepContent>
    </Step>
    <Step>
      <StepDescription iconName="ico_buy" heading="Sit dolor">
        Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta.
      </StepDescription>
      <StepContent>
        Nullam suscipit risus eget lacus gravida sagittis. Suspendisse massa augue, mollis a pretium nec, faucibus nec
        lorem. In hac habitasse platea dictumst. Integer rhoncus, massa at pretium molestie, dolor felis vulputate
        turpis, sit amet malesuada nulla odio quis neque. Praesent vel dolor tempor, posuere dolor ultrices, malesuada
        leo. Suspendisse et efficitur mi. Fusce nunc arcu, lacinia quis risus ut, sollicitudin rutrum ante. Nam arcu
        augue, feugiat eu lectus eu, bibendum cursus turpis. Duis feugiat sem a scelerisque tincidunt.
      </StepContent>
    </Step>
  </StepByStep>
);

export const Interactive = () => (
  <StepByStep interactive>
    <Step>
      <StepDescription number={1} heading="Heading 1">
        Pellentesque in ipsum id orci
      </StepDescription>
      <StepContent>
        Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. Proin eget tortor
        risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta
        dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl
        tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit
        tortor eget felis porttitor volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae;
      </StepContent>
    </Step>
    <Step>
      <StepDescription number={2} heading="Heading 2">
        Pellentesque in ipsum id orci
      </StepDescription>
      <StepContent>
        Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. Proin eget tortor
        risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta
        dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl
        tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit
        tortor eget felis porttitor volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae;
      </StepContent>
    </Step>
    <Step>
      <StepDescription number={3} heading="Heading 3">
        Pellentesque in ipsum id orci
      </StepDescription>
      <StepContent>
        Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. Proin eget tortor
        risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta
        dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl
        tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit
        tortor eget felis porttitor volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae;
      </StepContent>
    </Step>
  </StepByStep>
);

export const InteractivePebblesManually = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
  };

  const nextStep = () => {
    setSelectedIndex(selectedIndex + 1);
  };

  return (
    <StepByStep selectedIndex={selectedIndex} onSelect={handleSelect} interactive>
      <Step>
        <StepDescription heading="Heading 1" number={1} pebbles>
          This is a short descriptive text.
        </StepDescription>
        <StepContent>
          <p>
            Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. Proin eget tortor
            risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta
            dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl
            tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus
            suscipit tortor eget felis porttitor volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia Curae;
          </p>
          <Button text="Next" onClick={nextStep} />
        </StepContent>
      </Step>
      <Step>
        <StepDescription heading="Heading 2" number={2} pebbles>
          This is a short descriptive text.
        </StepDescription>
        <StepContent>
          <p>
            Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. Proin eget tortor
            risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta
            dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl
            tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus
            suscipit tortor eget felis porttitor volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia Curae;
          </p>
          <Button text="Next" onClick={nextStep} />
        </StepContent>
      </Step>
      <Step>
        <StepDescription heading="Heading 3" number={3} pebbles>
          This is a short descriptive text.
        </StepDescription>
        <StepContent>
          <p>
            Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. Proin eget tortor
            risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta
            dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl
            tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus
            suscipit tortor eget felis porttitor volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia Curae;
          </p>
        </StepContent>
      </Step>
    </StepByStep>
  );
};

export const DefaultStepByStep = () => (
  <StepByStep>
    <Step>
      <StepDescription iconName="ico_buy" heading="Lorem" />
    </Step>
    <Step>
      <StepDescription imageSrc={img.boyIpad} heading="Ipsum" />
      <StepContent>
        Ullamcorper massa in dictum consectetur. Sed eu luctus velit. Pellentesque aliquam, lectus eu aliquet suscipit,
        diam sem vulputate ex, posuere cursus mi arcu ac nunc. Vestibulum dictum metus nisi, non mattis diam porttitor
        ut. Nullam suscipit risus eget lacus gravida sagittis. Suspendisse massa augue, mollis a pretium nec, faucibus
        nec lorem. In hac habitasse platea dictumst. Integer rhoncus, massa at pretium molestie, dolor felis vulputate
        turpis, sit amet malesuada nulla odio quis neque. Praesent vel dolor tempor, posuere dolor ultrices, malesuada
        leo. Suspendisse et efficitur mi. Fusce nunc arcu, lacinia quis risus ut, sollicitudin rutrum ante. Nam arcu
        augue, feugiat eu lectus eu, bibendum cursus turpis. Duis feugiat sem a scelerisque tincidunt.
      </StepContent>
    </Step>
    <Step>
      <StepDescription iconName="ico_buy" heading="Sit dolor" />
      <StepContent>
        Nullam suscipit risus eget lacus gravida sagittis. Suspendisse massa augue, mollis a pretium nec, faucibus nec
        lorem. In hac habitasse platea dictumst. Integer rhoncus, massa at pretium molestie, dolor felis vulputate
        turpis, sit amet malesuada nulla odio quis neque. Praesent vel dolor tempor, posuere dolor ultrices, malesuada
        leo. Suspendisse et efficitur mi. Fusce nunc arcu, lacinia quis risus ut, sollicitudin rutrum ante. Nam arcu
        augue, feugiat eu lectus eu, bibendum cursus turpis. Duis feugiat sem a scelerisque tincidunt.
      </StepContent>
    </Step>
  </StepByStep>
);

export const ExtraSmall = () => (
  <StepByStep size="xs">
    <Step>
      <StepDescription icon={<Icon icon="product-bedriftsnett" />} heading="Lorem">
        <div style={{ color: 'gray' }}>short description</div>
      </StepDescription>
    </Step>
    <Step>
      <StepDescription icon={<Icon icon="product-bedriftsnett" />} heading={<div>Custom heading</div>}>
        <div style={{ color: 'gray' }}>short description</div>
      </StepDescription>
    </Step>
    <Step>
      <StepDescription imageSrc={img.boyIpad} heading="Ipsum">
        Ullamcorper massa in dictum consectetur. Sed eu luctus velit. Pellentesque aliquam, lectus eu aliquet suscipit,
        diam sem vulputate ex, posuere cursus mi arcu ac nunc. Vestibulum dictum metus nisi, non mattis diam porttitor
        ut. Nullam suscipit risus eget lacus gravida sagittis. Suspendisse massa augue, mollis a pretium nec, faucibus
        nec lorem. In hac habitasse platea dictumst. Integer rhoncus, massa at pretium molestie, dolor felis vulputate
        turpis, sit amet malesuada nulla odio quis neque. Praesent vel dolor tempor, posuere dolor ultrices, malesuada
        leo. Suspendisse et efficitur mi. Fusce nunc arcu, lacinia quis risus ut, sollicitudin rutrum ante. Nam arcu
        augue, feugiat eu lectus eu, bibendum cursus turpis. Duis feugiat sem a scelerisque tincidunt.
      </StepDescription>
    </Step>
    <Step>
      <StepDescription iconName="ico_buy" heading="Sit dolor">
        Nullam suscipit risus eget lacus gravida sagittis. Suspendisse massa augue, mollis a pretium nec, faucibus nec
        lorem. In hac habitasse platea dictumst. Integer rhoncus, massa at pretium molestie, dolor felis vulputate
        turpis, sit amet malesuada nulla odio quis neque. Praesent vel dolor tempor, posuere dolor ultrices, malesuada
        leo. Suspendisse et efficitur mi. Fusce nunc arcu, lacinia quis risus ut, sollicitudin rutrum ante. Nam arcu
        augue, feugiat eu lectus eu, bibendum cursus turpis. Duis feugiat sem a scelerisque tincidunt.
      </StepDescription>
    </Step>
  </StepByStep>
);

export const Small = () => (
  <StepByStep size="sm">
    <Step>
      <StepDescription icon={<Icon icon="product-bedriftsnett" />} heading="Lorem">
        <div style={{ color: 'gray' }}>short description</div>
      </StepDescription>
    </Step>
    <Step>
      <StepDescription icon={<Icon icon="product-bedriftsnett" />} heading={<div>Custom heading</div>}>
        <div style={{ color: 'gray' }}>short description</div>
      </StepDescription>
    </Step>
    <Step>
      <StepDescription imageSrc={img.boyIpad} heading="Ipsum">
        Ullamcorper massa in dictum consectetur. Sed eu luctus velit. Pellentesque aliquam, lectus eu aliquet suscipit,
        diam sem vulputate ex, posuere cursus mi arcu ac nunc. Vestibulum dictum metus nisi, non mattis diam porttitor
        ut. Nullam suscipit risus eget lacus gravida sagittis. Suspendisse massa augue, mollis a pretium nec, faucibus
        nec lorem. In hac habitasse platea dictumst. Integer rhoncus, massa at pretium molestie, dolor felis vulputate
        turpis, sit amet malesuada nulla odio quis neque. Praesent vel dolor tempor, posuere dolor ultrices, malesuada
        leo. Suspendisse et efficitur mi. Fusce nunc arcu, lacinia quis risus ut, sollicitudin rutrum ante. Nam arcu
        augue, feugiat eu lectus eu, bibendum cursus turpis. Duis feugiat sem a scelerisque tincidunt.
      </StepDescription>
    </Step>
    <Step>
      <StepDescription iconName="ico_buy" heading="Sit dolor">
        Nullam suscipit risus eget lacus gravida sagittis. Suspendisse massa augue, mollis a pretium nec, faucibus nec
        lorem. In hac habitasse platea dictumst. Integer rhoncus, massa at pretium molestie, dolor felis vulputate
        turpis, sit amet malesuada nulla odio quis neque. Praesent vel dolor tempor, posuere dolor ultrices, malesuada
        leo. Suspendisse et efficitur mi. Fusce nunc arcu, lacinia quis risus ut, sollicitudin rutrum ante. Nam arcu
        augue, feugiat eu lectus eu, bibendum cursus turpis. Duis feugiat sem a scelerisque tincidunt.
      </StepDescription>
    </Step>
  </StepByStep>
);

export const Medium = () => (
  <StepByStep size="md">
    <Step>
      <StepDescription icon={<Icon icon="product-bedriftsnett" />} heading="Lorem">
        <div style={{ color: 'gray' }}>short description</div>
      </StepDescription>
    </Step>
    <Step>
      <StepDescription icon={<Icon icon="product-bedriftsnett" />} heading={<div>Custom heading</div>}>
        <div style={{ color: 'gray' }}>short description</div>
      </StepDescription>
    </Step>
    <Step>
      <StepDescription imageSrc={img.boyIpad}>
        Ullamcorper massa in dictum consectetur. Sed eu luctus velit. Pellentesque aliquam, lectus eu aliquet suscipit,
        diam sem vulputate ex, posuere cursus mi arcu ac nunc. Vestibulum dictum metus nisi, non mattis diam porttitor
        ut. Nullam suscipit risus eget lacus gravida sagittis. Suspendisse massa augue, mollis a pretium nec, faucibus
        nec lorem. In hac habitasse platea dictumst. Integer rhoncus, massa at pretium molestie, dolor felis vulputate
        turpis, sit amet malesuada nulla odio quis neque. Praesent vel dolor tempor, posuere dolor ultrices, malesuada
        leo. Suspendisse et efficitur mi. Fusce nunc arcu, lacinia quis risus ut, sollicitudin rutrum ante. Nam arcu
        augue, feugiat eu lectus eu, bibendum cursus turpis. Duis feugiat sem a scelerisque tincidunt.
      </StepDescription>
    </Step>
    <Step>
      <StepDescription iconName="ico_buy" heading="Sit dolor">
        Nullam suscipit risus eget lacus gravida sagittis. Suspendisse massa augue, mollis a pretium nec, faucibus nec
        lorem. In hac habitasse platea dictumst. Integer rhoncus, massa at pretium molestie, dolor felis vulputate
        turpis, sit amet malesuada nulla odio quis neque. Praesent vel dolor tempor, posuere dolor ultrices, malesuada
        leo. Suspendisse et efficitur mi. Fusce nunc arcu, lacinia quis risus ut, sollicitudin rutrum ante. Nam arcu
        augue, feugiat eu lectus eu, bibendum cursus turpis. Duis feugiat sem a scelerisque tincidunt.
      </StepDescription>
    </Step>
  </StepByStep>
);
