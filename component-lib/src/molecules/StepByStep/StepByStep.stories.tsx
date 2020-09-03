import React, { useState } from 'react';
import { StepByStep, Button } from '../../index';
import img from '../../stories/sampleImages';

export default {
  title: 'Component library/Molecules/StepByStep',
  // component: StepByStep,
};

const { Step, Description, Content } = StepByStep;

export const Default = () => (
  <StepByStep>
    <Step>
      <Description iconName="ico_buy" heading="Lorem">
        Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. Proin eget tortor
        risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta
        dapibus.
      </Description>
    </Step>
    <Step>
      <Description imageSrc={img.boyIpad} heading="Ipsum">
        Nulla quis lorem ut libero malesuada feugiat.
      </Description>
      <Content>
        Ullamcorper massa in dictum consectetur. Sed eu luctus velit. Pellentesque aliquam, lectus eu aliquet suscipit,
        diam sem vulputate ex, posuere cursus mi arcu ac nunc. Vestibulum dictum metus nisi, non mattis diam porttitor
        ut. Nullam suscipit risus eget lacus gravida sagittis. Suspendisse massa augue, mollis a pretium nec, faucibus
        nec lorem. In hac habitasse platea dictumst. Integer rhoncus, massa at pretium molestie, dolor felis vulputate
        turpis, sit amet malesuada nulla odio quis neque. Praesent vel dolor tempor, posuere dolor ultrices, malesuada
        leo. Suspendisse et efficitur mi. Fusce nunc arcu, lacinia quis risus ut, sollicitudin rutrum ante. Nam arcu
        augue, feugiat eu lectus eu, bibendum cursus turpis. Duis feugiat sem a scelerisque tincidunt.
      </Content>
    </Step>
    <Step>
      <Description iconName="ico_buy" heading="Sit dolor">
        Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta.
      </Description>
      <Content>
        Nullam suscipit risus eget lacus gravida sagittis. Suspendisse massa augue, mollis a pretium nec, faucibus nec
        lorem. In hac habitasse platea dictumst. Integer rhoncus, massa at pretium molestie, dolor felis vulputate
        turpis, sit amet malesuada nulla odio quis neque. Praesent vel dolor tempor, posuere dolor ultrices, malesuada
        leo. Suspendisse et efficitur mi. Fusce nunc arcu, lacinia quis risus ut, sollicitudin rutrum ante. Nam arcu
        augue, feugiat eu lectus eu, bibendum cursus turpis. Duis feugiat sem a scelerisque tincidunt.
      </Content>
    </Step>
  </StepByStep>
);

export const InteractiveStepByStep = () => (
  <StepByStep interactive>
    <Step>
      <Description number={1} heading="Heading 1">
        Pellentesque in ipsum id orci
      </Description>
      <Content>
        Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. Proin eget tortor
        risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta
        dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl
        tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit
        tortor eget felis porttitor volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae;
      </Content>
    </Step>
    <Step>
      <Description number={2} heading="Heading 2">
        Pellentesque in ipsum id orci
      </Description>
      <Content>
        Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. Proin eget tortor
        risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta
        dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl
        tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit
        tortor eget felis porttitor volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae;
      </Content>
    </Step>
    <Step>
      <Description number={3} heading="Heading 3">
        Pellentesque in ipsum id orci
      </Description>
      <Content>
        Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. Proin eget tortor
        risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta
        dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl
        tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit
        tortor eget felis porttitor volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae;
      </Content>
    </Step>
  </StepByStep>
);

export const InteractivePebblesManuallyStepByStep = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = (index: number) => {
    setSelectedIndex(index)
  };

  const nextStep = () => {
    setSelectedIndex(selectedIndex + 1)
  };

  return (
    <StepByStep selectedIndex={selectedIndex} onSelect={handleSelect} interactive>
      <Step>
        <Description heading="Heading 1" number={1} pebbles>
          This is a short descriptive text.
        </Description>
        <Content>
          <p>
            Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. Proin eget
            tortor risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id
            orci porta dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla
            sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id
            enim. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia Curae;
          </p>
          <Button text="Next" onClick={nextStep} />
        </Content>
      </Step>
      <Step>
        <Description heading="Heading 2" number={2} pebbles>
          This is a short descriptive text.
        </Description>
        <Content>
          <p>
            Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. Proin eget
            tortor risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id
            orci porta dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla
            sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id
            enim. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia Curae;
          </p>
          <Button text="Next" onClick={nextStep} />
        </Content>
      </Step>
      <Step>
        <Description heading="Heading 3" number={3} pebbles>
          This is a short descriptive text.
        </Description>
        <Content>
          <p>
            Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. Proin eget
            tortor risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id
            orci porta dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla
            sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id
            enim. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia Curae;
          </p>
        </Content>
      </Step>
    </StepByStep>
  );
}

export const DefaultStepByStep = () => (
  <StepByStep>
    <Step>
      <Description iconName="ico_buy" heading="Lorem" />
    </Step>
    <Step>
      <Description imageSrc={img.boyIpad} heading="Ipsum" />
      <Content>
        Ullamcorper massa in dictum consectetur. Sed eu luctus velit. Pellentesque aliquam, lectus eu aliquet suscipit,
        diam sem vulputate ex, posuere cursus mi arcu ac nunc. Vestibulum dictum metus nisi, non mattis diam porttitor
        ut. Nullam suscipit risus eget lacus gravida sagittis. Suspendisse massa augue, mollis a pretium nec, faucibus
        nec lorem. In hac habitasse platea dictumst. Integer rhoncus, massa at pretium molestie, dolor felis vulputate
        turpis, sit amet malesuada nulla odio quis neque. Praesent vel dolor tempor, posuere dolor ultrices, malesuada
        leo. Suspendisse et efficitur mi. Fusce nunc arcu, lacinia quis risus ut, sollicitudin rutrum ante. Nam arcu
        augue, feugiat eu lectus eu, bibendum cursus turpis. Duis feugiat sem a scelerisque tincidunt.
      </Content>
    </Step>
    <Step>
      <Description iconName="ico_buy" heading="Sit dolor" />
      <Content>
        Nullam suscipit risus eget lacus gravida sagittis. Suspendisse massa augue, mollis a pretium nec, faucibus nec
        lorem. In hac habitasse platea dictumst. Integer rhoncus, massa at pretium molestie, dolor felis vulputate
        turpis, sit amet malesuada nulla odio quis neque. Praesent vel dolor tempor, posuere dolor ultrices, malesuada
        leo. Suspendisse et efficitur mi. Fusce nunc arcu, lacinia quis risus ut, sollicitudin rutrum ante. Nam arcu
        augue, feugiat eu lectus eu, bibendum cursus turpis. Duis feugiat sem a scelerisque tincidunt.
      </Content>
    </Step>
  </StepByStep>
);
