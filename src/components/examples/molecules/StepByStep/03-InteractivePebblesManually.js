import React from 'react';
import { StepByStep, Button } from '@telia/styleguide';

const { Step, Description, Content } = StepByStep;

/**
 * If you want more control over the component, you can handle the state on your own.
 */
export default class InteractivePebblesManuallyStepByStep extends React.Component {
    state = {
        selectedIndex: 0
    };
    handleSelect = (index) => {
        this.setState({
            selectedIndex: index
        });
    };
    nextStep = () => {
        this.setState({
            selectedIndex: this.state.selectedIndex + 1
        });
    };

    render() {
        return (
            <StepByStep selectedIndex={this.state.selectedIndex} onSelect={this.handleSelect} interactive>
                <Step>
                    <Description
                        heading="Heading 1"
                        number={1}
                        pebbles>
                        This is a short descriptive text.
                    </Description>
                    <Content>
                        <p>
                            Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta.
                            Proin
                            eget tortor risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                            Pellentesque
                            in ipsum id orci porta dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                            sem.
                            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi,
                            pretium
                            ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat.
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                        </p>
                        <Button text="Next" onClick={this.nextStep} />
                    </Content>
                </Step>
                <Step>
                    <Description
                        heading="Heading 2"
                        number={2}
                        pebbles>This is a short descriptive text.</Description>
                    <Content>
                        <p>
                            Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta.
                            Proin
                            eget tortor risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                            Pellentesque
                            in ipsum id orci porta dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                            sem.
                            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi,
                            pretium
                            ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat.
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                        </p>
                        <Button text="Next" onClick={this.nextStep} />
                    </Content>
                </Step>
                <Step>
                    <Description
                        heading="Heading 3"
                        number={3}
                        pebbles>This is a short descriptive text.</Description>
                    <Content>
                        <p>
                            Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta.
                            Proin
                            eget tortor risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                            Pellentesque
                            in ipsum id orci porta dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                            sem.
                            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi,
                            pretium
                            ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat.
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                        </p>
                    </Content>
                </Step>
            </StepByStep>
        );
    }
}
