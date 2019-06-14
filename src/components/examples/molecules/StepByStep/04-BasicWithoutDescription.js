import React from 'react';
import { StepByStep } from '@telia/styleguide';

const { Step, Description, Content } = StepByStep;

const DefaultStepByStep = () => (
    <StepByStep>
        <Step>
            <Description iconName="ico_buy" heading="Lorem" />
        </Step>
        <Step>
            <Description imageSrc={require('../../../../assets/website-images/boy-ipad.jpg')} heading="Ipsum" />
            <Content>
                Ullamcorper massa in dictum consectetur. Sed eu luctus velit. Pellentesque aliquam, lectus eu aliquet
                suscipit, diam sem vulputate ex, posuere cursus mi arcu ac nunc. Vestibulum dictum metus nisi, non
                mattis diam porttitor ut. Nullam suscipit risus eget lacus gravida sagittis. Suspendisse massa augue,
                mollis a pretium nec, faucibus nec lorem. In hac habitasse platea dictumst. Integer rhoncus, massa at
                pretium molestie, dolor felis vulputate turpis, sit amet malesuada nulla odio quis neque. Praesent vel
                dolor tempor, posuere dolor ultrices, malesuada leo. Suspendisse et efficitur mi. Fusce nunc arcu,
                lacinia quis risus ut, sollicitudin rutrum ante. Nam arcu augue, feugiat eu lectus eu, bibendum cursus
                turpis. Duis feugiat sem a scelerisque tincidunt.
            </Content>
        </Step>
        <Step>
            <Description iconName="ico_buy" heading="Sit dolor" />
            <Content>
                Nullam suscipit risus eget lacus gravida sagittis. Suspendisse massa augue,
                mollis a pretium nec, faucibus nec lorem. In hac habitasse platea dictumst. Integer rhoncus, massa at
                pretium molestie, dolor felis vulputate turpis, sit amet malesuada nulla odio quis neque. Praesent vel
                dolor tempor, posuere dolor ultrices, malesuada leo. Suspendisse et efficitur mi. Fusce nunc arcu,
                lacinia quis risus ut, sollicitudin rutrum ante. Nam arcu augue, feugiat eu lectus eu, bibendum cursus
                turpis. Duis feugiat sem a scelerisque tincidunt.
            </Content>
        </Step>
    </StepByStep>
);

export default DefaultStepByStep;