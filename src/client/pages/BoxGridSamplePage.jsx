import React from 'react';

import Header from '../../components/molecules/Header/Header';
import PersonBox from '../../components/molecules/PersonBox/PersonBox';

const personBoxesProps = [
    {
        "id": "person-1",
        "color": "pink",
        "isExpanded": true,
        "imagePath": "http://via.placeholder.com/165x200",
        "name": "Person Name",
        "title": "Official job title",
        "description": "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
        "linkedInProfile": "www.linkedin.com",
        "twitterProfile": "www.twitter.com"
    },
    {
        "id": "person-2",
        "color": "teal",
        "imagePath": "http://via.placeholder.com/165x200",
        "name": "Person Name",
        "title": "Official job title",
        "description": "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
        "linkedInProfile": "www.linkedin.com",
        "twitterProfile": "www.twitter.com"
    },
    {
        "id": "person-3",
        "color": "light-orange",
        "imagePath": "http://via.placeholder.com/165x200",
        "name": "Person Name",
        "title": "Official job title",
        "description": "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
        "linkedInProfile": "www.linkedin.com",
        "twitterProfile": "www.twitter.com"
    },
    {
        "id": "person-4",
        "color": "green",
        "imagePath": "http://via.placeholder.com/165x200",
        "name": "Person Name",
        "title": "Official job title",
        "description": "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
        "linkedInProfile": "www.linkedin.com",
        "twitterProfile": "www.twitter.com"
    },
    {
        "id": "person-5",
        "color": "blue",
        "imagePath": "http://via.placeholder.com/165x200",
        "name": "Person Name",
        "title": "Official job title",
        "description": "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
        "linkedInProfile": "www.linkedin.com",
        "twitterProfile": "www.twitter.com"
    }
];

export default class BoxGridSamplePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <article>
                <Header pageTitle="Box Grid" withMask={false} withContentOverlap={false}>
                    <p>On this page you can have a look at a page with Box Grid layout and how it can be used.</p>
                </Header>
                <section className="box-grid container container--medium container--extra-margin-bottom">
                    {personBoxesProps.map((personProps, i) =>
                        <PersonBox key={i} {...personProps} />)}
                </section>
            </article>
        );
    }
}