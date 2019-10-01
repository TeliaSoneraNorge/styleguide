import React from 'react';
import { Video } from '@telia/styleguide';

export default class DefaultVideo extends React.Component  {
    constructor() {
        super();

        this.state = {
            autoplay: false
        };

        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        this.setState({ autoplay: true });
    }
    render() {
        return (
            <Video
                autoplay={this.state.autoplay}
                img="https://images.pexels.com/photos/210647/pexels-photo-210647.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                src="https://www.youtube.com/embed/-yWZdilQQnk"
                description="Videotext here"
                videoTitle="A random video"
                onClick={this.onClick}>
            </Video>
        );
    }
}
