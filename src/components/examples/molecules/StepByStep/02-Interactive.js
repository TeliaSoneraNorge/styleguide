import React from 'react';
import { StepByStep } from '@telia/styleguide';

const { Step, Description, Content } = StepByStep;

/**
 * By specifying interactive, you let the StepByStep component handle the state.
 */
const InteractiveStepByStep = () => (
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

export default InteractiveStepByStep;
