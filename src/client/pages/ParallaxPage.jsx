import React from 'react';


import Heading from '../../components/atoms/Heading/Heading';
import Header from '../../components/molecules/Header/Header';
import ParallaxContainer from '../../components/atoms/ParallaxContainer/ParallaxContainer';
import ParallaxBlock from '../../components/atoms/ParallaxBlock/ParallaxBlock';
//import ParallaxBlockBackground from '../../components/atoms/ParallaxBlockBackground/ParallaxBlockBackground';
import ParallaxBlockSpacer from '../../components/atoms/ParallaxBlockSpacer/ParallaxBlockSpacer';
import ParallaxBlockTextBox from '../../components/molecules/ParallaxBlockTextBox/ParallaxBlockTextBox';

const ParallaxPage = ({ colors, children }) =>
    <div>
        <Header iconUrl="/public/ico_code-2.svg" pageTitle="Parallax Starts Below">
            <p className="paragraph">
                You will notice that this is at the top of the page and is full-width.
            </p>
        </Header>

        <ParallaxContainer>
            
            <ParallaxBlock index="0" backgroundFile="http://placekitten.com/1920/1000" backgroundType="image">
                
                <ParallaxBlockSpacer size="full">
                    <ParallaxBlockTextBox header="This is a ParallaxBlockTextBox" paragraph="You can put literally anything into a ParallaxBlockSpacer element, but you have to make sure it doesn't have a background which blocks the ParallaxBlockBackground">
                    </ParallaxBlockTextBox>
                </ParallaxBlockSpacer>
                <ParallaxBlockSpacer size="full">
                    <ParallaxBlockTextBox header="This is a ParallaxBlockTextBox" paragraph="You can put literally anything into a ParallaxBlockSpacer element, but you have to make sure it doesn't have a background which blocks the ParallaxBlockBackground">
                    </ParallaxBlockTextBox>
                </ParallaxBlockSpacer>
            </ParallaxBlock>
            <ParallaxBlock backgroundFile="https://video.telia.no/19476793/19483281/343246028c3dd0e42d5949fde807ce09/video_hd/av1-pa-konsert-med-marcus-martinus-video.mp4?referer=https%3A%2F%2Ftelia.no%2Fmagasinet%2Fsyke-barn-kan-sende-robot-til-skolen&uuid=aba86041-268f-08a1-80ea-d3d6b7de283e" backgroundType="video">
                <ParallaxBlockSpacer size="full">
                    <ParallaxBlockTextBox header="This is a ParallaxBlockTextBox" paragraph="You can put literally anything into a ParallaxBlockSpacer element, but you have to make sure it doesn't have a background which blocks the ParallaxBlockBackground">
                    </ParallaxBlockTextBox>
                </ParallaxBlockSpacer>
                <ParallaxBlockSpacer size="full">
                    <ParallaxBlockTextBox header="This is a ParallaxBlockTextBox" paragraph="You can put literally anything into a ParallaxBlockSpacer element, but you have to make sure it doesn't have a background which blocks the ParallaxBlockBackground">
                    </ParallaxBlockTextBox>
                </ParallaxBlockSpacer>
                <ParallaxBlockSpacer size="full">
                    <ParallaxBlockTextBox header="This is a ParallaxBlockTextBox" paragraph="You can put literally anything into a ParallaxBlockSpacer element, but you have to make sure it doesn't have a background which blocks the ParallaxBlockBackground">
                    </ParallaxBlockTextBox>
                </ParallaxBlockSpacer>
            </ParallaxBlock>
            <ParallaxBlock backgroundFile="http://placekitten.com/1920/1000" backgroundType="image">

                <ParallaxBlockSpacer size="full">
                    <ParallaxBlockTextBox header="This is a ParallaxBlockTextBox" paragraph="You can put literally anything into a ParallaxBlockSpacer element, but you have to make sure it doesn't have a background which blocks the ParallaxBlockBackground">
                    </ParallaxBlockTextBox>
                </ParallaxBlockSpacer>
                <ParallaxBlockSpacer size="full">
                    <ParallaxBlockTextBox header="This is a ParallaxBlockTextBox" paragraph="You can put literally anything into a ParallaxBlockSpacer element, but you have to make sure it doesn't have a background which blocks the ParallaxBlockBackground">
                    </ParallaxBlockTextBox>
                </ParallaxBlockSpacer>
            </ParallaxBlock>
    
        </ParallaxContainer>
    </div>;


export default ParallaxPage;