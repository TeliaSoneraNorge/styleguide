import React from 'react';

import { Header, SvgIcon, StepByStep } from '../../../component-lib/src/index';
const { Step, Description, Content } = StepByStep;

const InformationArticleSample3 = () =>
    <div>
        <Header pageTitle="Information Article" withMask={false} withContentOverlap={false}>
            <p>
                On this page you can have a look at a template for an Information Article Page
                and some of the components in the styleguide combined with each other.
            </p>
        </Header>
        <div className="full-width-image full-width-image--with-mask full-width-image--with-content-overlap">
            <img className="full-width-image__image" src="https://placekitten.com/1440/440" />
        </div>
        <div className="container container--medium container--no-padding container--extra-margin-bottom container--white-bg container--extra-padding-top container--overlapping-full-width-image">
            <div className="container container--small">
                <p className="paragraph">
                    Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh. Sed porttitor lectus nibh.
                </p>
            </div>
            <div className="container container--small">
                <ul className="step-by-step">
                    <li className="step-by-step__step-wrapper">
                        <div className="step-by-step__step step-by-step__circle">
                            <SvgIcon className="step-by-step__icon" iconName="ico_buy" alt="" />
                        </div>
                        <div className="step-by-step__text">
                            <h2 className="step-by-step__heading heading heading--level-2">Lorem</h2>
                            <div className="step-by-step__description">
                                Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. Proin eget tortor risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus.
                            </div>
                        </div>
                        <div className="step-by-step__content">
                            Ullamcorper massa in dictum consectetur. Sed eu luctus velit. Pellentesque aliquam, lectus eu aliquet suscipit, diam sem vulputate ex, posuere cursus mi arcu ac nunc. Vestibulum dictum metus nisi, non mattis diam porttitor ut. Nullam suscipit risus eget lacus gravida sagittis. Suspendisse massa augue, mollis a pretium nec, faucibus nec lorem. In hac habitasse platea dictumst. Integer rhoncus, massa at pretium molestie, dolor felis vulputate turpis, sit amet malesuada nulla odio quis neque. Praesent vel dolor tempor, posuere dolor ultrices, malesuada leo. Suspendisse et efficitur mi. Fusce nunc arcu, lacinia quis risus ut, sollicitudin rutrum ante. Nam arcu augue, feugiat eu lectus eu, bibendum cursus turpis. Duis feugiat sem a scelerisque tincidunt.
                        </div>
                    </li>
                    <li className="step-by-step__step-wrapper">
                        <div className="step-by-step__step step-by-step__circle step-by-step__step--no-border">
                            <img className="step-by-step__image" src="/public/website-images/boy-ipad.jpg" alt="" />
                        </div>
                        <div className="step-by-step__text">
                            <h2 className="step-by-step__heading heading heading--level-2">Ipsum</h2>
                            <div className="step-by-step__description">Nulla quis lorem ut libero malesuada feugiat.</div>
                        </div>
                    </li>
                    <li className="step-by-step__step-wrapper">
                        <div className="step-by-step__step step-by-step__circle">
                            <span className="step-by-step__number">3</span>
                        </div>
                        <div className="step-by-step__text">
                            <h2 className="step-by-step__heading heading heading--level-2">Sit dolor</h2>
                            <div className="step-by-step__description">
                                Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. Proin eget tortor risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus.
                                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                                Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
                            </div>
                        </div>
                    </li>
                </ul>
                
                <ul className="step-by-step">
                    <li className="step-by-step__step-wrapper">
                        <a className="step-by-step__step step-by-step__pebbles step-by-step__step--interactive">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 72">
                                <path d="M65.259 17.572c-.033-.575-.058-1.15-.105-1.726a23.573 23.573 0 0 0-.265-2.062l-.016-.008a18.79 18.79 0 0 0-.464-2.118l-.021-.008a16.77 16.77 0 0 0-.896-2.43l-.001-.018c-.29-.63-.625-1.237-1.001-1.819l-.023-.031-.15-.236h-.007a13.303 13.303 0 0 0-1.199-1.54l-.008.001c-.368-.41-.762-.796-1.18-1.155h-.01a13.278 13.278 0 0 0-1.679-1.254l-.012.001c-.467-.29-.948-.553-1.443-.79l-.02-.023a17.511 17.511 0 0 0-3.084-1.12l-.064-.033a22.443 22.443 0 0 0-3.46-.619l-.015.012a29.229 29.229 0 0 0-4.64-.09c-.263.013-.53.026-.792.047a52.03 52.03 0 0 0-5.67.793c-1.289.251-2.577.55-3.864.894l-.04.004c-.179.048-.36.1-.538.149a62.577 62.577 0 0 0-6.214 2.081l-.03.013c-6.142 2.42-11.927 5.803-16.633 9.825-.09.076-.176.154-.265.23l-.16.137c-.135.119-.27.238-.404.359l-.037.033a41.13 41.13 0 0 0-3.642 3.7l-.027.037c-.95 1.1-1.829 2.26-2.63 3.474-.11.16-.208.32-.31.48l-.05.077v.009c-.506.81-.971 1.645-1.392 2.504a23.602 23.602 0 0 0-1.157 2.79h-.008c-.329.954-.59 1.931-.778 2.923l.004.05c-.18.976-.287 1.966-.316 2.96v.015a17.436 17.436 0 0 0 .043 2.023c.089.995.257 1.98.503 2.949.126.516.277 1.042.445 1.574.365 1.18.798 2.337 1.297 3.466a44.224 44.224 0 0 0 1.828 3.602l.013.013c.245.429.499.86.76 1.292l.046.074.174.285c.384.615.785 1.23 1.203 1.843.051.078.105.154.159.235l.075.111c.153.222.309.445.465.666l.001.007a60.483 60.483 0 0 0 1.546 2.067l.029.038c.09.116.18.233.273.349l.008.006a63.49 63.49 0 0 0 2.696 3.192l.018.012c.437.484.878.963 1.328 1.432l.018.01c.424.442.854.876 1.291 1.304l.362.342.052.052c.374.36.75.716 1.132 1.062l.037.023c.819.746 1.651 1.46 2.497 2.142l.015.008c.184.148.37.295.555.441l.176.135a45.645 45.645 0 0 0 2.172 1.586v.006c.485.332.971.648 1.457.95.98.63 1.99 1.21 3.028 1.737v.01a27.1 27.1 0 0 0 3.179 1.343h.012a20.3 20.3 0 0 0 2.476.69.03.03 0 0 1 0 .01c1.368.304 2.772.408 4.168.31 5.44-.443 11.687-4.668 17.015-11.58l.05-.056a53.28 53.28 0 0 0 4.396-6.768v-.007c.44-.799.866-1.618 1.279-2.458a61.654 61.654 0 0 0 2.51-5.91l-.011.01.301-.824s.005-.013.009-.018a65.13 65.13 0 0 0 1.26-3.98l-.002-.008c.2-.705.387-1.418.563-2.138v-.006c.228-.97.44-1.951.634-2.942l.024-.067c.154-.788.298-1.582.42-2.388l-.011-.007c.15-.95.282-1.91.393-2.882-.002-.013.008-.026.012-.04.083-.728.156-1.461.218-2.2l-.008-.005a64.67 64.67 0 0 0 .18-2.812l-.008-.007a74.95 74.95 0 0 0 .052-2.009 65.7 65.7 0 0 0-.037-3.545l-.011-.006a70.25 70.25 0 0 0-.062-1.25.036.036 0 0 1 .013-.012z" />
                            </svg>
                            <span className="step-by-step__number">1</span>
                        </a>
                        <div className="step-by-step__text">
                            <h2 className="step-by-step__heading heading heading--level-2">Lorem</h2>
                            <div className="step-by-step__description">
                                Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. Proin eget tortor risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus.
                            </div>
                        </div>
                    </li>
                    <li className="step-by-step__step-wrapper">
                        <a className="step-by-step__step step-by-step__pebbles step-by-step__step--highlighted">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 72">
                                <path d="M65.259 17.572c-.033-.575-.058-1.15-.105-1.726a23.573 23.573 0 0 0-.265-2.062l-.016-.008a18.79 18.79 0 0 0-.464-2.118l-.021-.008a16.77 16.77 0 0 0-.896-2.43l-.001-.018c-.29-.63-.625-1.237-1.001-1.819l-.023-.031-.15-.236h-.007a13.303 13.303 0 0 0-1.199-1.54l-.008.001c-.368-.41-.762-.796-1.18-1.155h-.01a13.278 13.278 0 0 0-1.679-1.254l-.012.001c-.467-.29-.948-.553-1.443-.79l-.02-.023a17.511 17.511 0 0 0-3.084-1.12l-.064-.033a22.443 22.443 0 0 0-3.46-.619l-.015.012a29.229 29.229 0 0 0-4.64-.09c-.263.013-.53.026-.792.047a52.03 52.03 0 0 0-5.67.793c-1.289.251-2.577.55-3.864.894l-.04.004c-.179.048-.36.1-.538.149a62.577 62.577 0 0 0-6.214 2.081l-.03.013c-6.142 2.42-11.927 5.803-16.633 9.825-.09.076-.176.154-.265.23l-.16.137c-.135.119-.27.238-.404.359l-.037.033a41.13 41.13 0 0 0-3.642 3.7l-.027.037c-.95 1.1-1.829 2.26-2.63 3.474-.11.16-.208.32-.31.48l-.05.077v.009c-.506.81-.971 1.645-1.392 2.504a23.602 23.602 0 0 0-1.157 2.79h-.008c-.329.954-.59 1.931-.778 2.923l.004.05c-.18.976-.287 1.966-.316 2.96v.015a17.436 17.436 0 0 0 .043 2.023c.089.995.257 1.98.503 2.949.126.516.277 1.042.445 1.574.365 1.18.798 2.337 1.297 3.466a44.224 44.224 0 0 0 1.828 3.602l.013.013c.245.429.499.86.76 1.292l.046.074.174.285c.384.615.785 1.23 1.203 1.843.051.078.105.154.159.235l.075.111c.153.222.309.445.465.666l.001.007a60.483 60.483 0 0 0 1.546 2.067l.029.038c.09.116.18.233.273.349l.008.006a63.49 63.49 0 0 0 2.696 3.192l.018.012c.437.484.878.963 1.328 1.432l.018.01c.424.442.854.876 1.291 1.304l.362.342.052.052c.374.36.75.716 1.132 1.062l.037.023c.819.746 1.651 1.46 2.497 2.142l.015.008c.184.148.37.295.555.441l.176.135a45.645 45.645 0 0 0 2.172 1.586v.006c.485.332.971.648 1.457.95.98.63 1.99 1.21 3.028 1.737v.01a27.1 27.1 0 0 0 3.179 1.343h.012a20.3 20.3 0 0 0 2.476.69.03.03 0 0 1 0 .01c1.368.304 2.772.408 4.168.31 5.44-.443 11.687-4.668 17.015-11.58l.05-.056a53.28 53.28 0 0 0 4.396-6.768v-.007c.44-.799.866-1.618 1.279-2.458a61.654 61.654 0 0 0 2.51-5.91l-.011.01.301-.824s.005-.013.009-.018a65.13 65.13 0 0 0 1.26-3.98l-.002-.008c.2-.705.387-1.418.563-2.138v-.006c.228-.97.44-1.951.634-2.942l.024-.067c.154-.788.298-1.582.42-2.388l-.011-.007c.15-.95.282-1.91.393-2.882-.002-.013.008-.026.012-.04.083-.728.156-1.461.218-2.2l-.008-.005a64.67 64.67 0 0 0 .18-2.812l-.008-.007a74.95 74.95 0 0 0 .052-2.009 65.7 65.7 0 0 0-.037-3.545l-.011-.006a70.25 70.25 0 0 0-.062-1.25.036.036 0 0 1 .013-.012z" />
                            </svg>
                            <span className="step-by-step__number">2</span>
                        </a>
                        <div className="step-by-step__text">
                            <h2 className="step-by-step__heading heading heading--level-2">Ipsum</h2>
                            <div className="step-by-step__description">Nulla quis lorem ut libero malesuada feugiat.</div>
                        </div>
                    </li>
                    <li className="step-by-step__step-wrapper">
                        <a className="step-by-step__step step-by-step__pebbles step-by-step__step--interactive">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 72">
                                <path d="M65.259 17.572c-.033-.575-.058-1.15-.105-1.726a23.573 23.573 0 0 0-.265-2.062l-.016-.008a18.79 18.79 0 0 0-.464-2.118l-.021-.008a16.77 16.77 0 0 0-.896-2.43l-.001-.018c-.29-.63-.625-1.237-1.001-1.819l-.023-.031-.15-.236h-.007a13.303 13.303 0 0 0-1.199-1.54l-.008.001c-.368-.41-.762-.796-1.18-1.155h-.01a13.278 13.278 0 0 0-1.679-1.254l-.012.001c-.467-.29-.948-.553-1.443-.79l-.02-.023a17.511 17.511 0 0 0-3.084-1.12l-.064-.033a22.443 22.443 0 0 0-3.46-.619l-.015.012a29.229 29.229 0 0 0-4.64-.09c-.263.013-.53.026-.792.047a52.03 52.03 0 0 0-5.67.793c-1.289.251-2.577.55-3.864.894l-.04.004c-.179.048-.36.1-.538.149a62.577 62.577 0 0 0-6.214 2.081l-.03.013c-6.142 2.42-11.927 5.803-16.633 9.825-.09.076-.176.154-.265.23l-.16.137c-.135.119-.27.238-.404.359l-.037.033a41.13 41.13 0 0 0-3.642 3.7l-.027.037c-.95 1.1-1.829 2.26-2.63 3.474-.11.16-.208.32-.31.48l-.05.077v.009c-.506.81-.971 1.645-1.392 2.504a23.602 23.602 0 0 0-1.157 2.79h-.008c-.329.954-.59 1.931-.778 2.923l.004.05c-.18.976-.287 1.966-.316 2.96v.015a17.436 17.436 0 0 0 .043 2.023c.089.995.257 1.98.503 2.949.126.516.277 1.042.445 1.574.365 1.18.798 2.337 1.297 3.466a44.224 44.224 0 0 0 1.828 3.602l.013.013c.245.429.499.86.76 1.292l.046.074.174.285c.384.615.785 1.23 1.203 1.843.051.078.105.154.159.235l.075.111c.153.222.309.445.465.666l.001.007a60.483 60.483 0 0 0 1.546 2.067l.029.038c.09.116.18.233.273.349l.008.006a63.49 63.49 0 0 0 2.696 3.192l.018.012c.437.484.878.963 1.328 1.432l.018.01c.424.442.854.876 1.291 1.304l.362.342.052.052c.374.36.75.716 1.132 1.062l.037.023c.819.746 1.651 1.46 2.497 2.142l.015.008c.184.148.37.295.555.441l.176.135a45.645 45.645 0 0 0 2.172 1.586v.006c.485.332.971.648 1.457.95.98.63 1.99 1.21 3.028 1.737v.01a27.1 27.1 0 0 0 3.179 1.343h.012a20.3 20.3 0 0 0 2.476.69.03.03 0 0 1 0 .01c1.368.304 2.772.408 4.168.31 5.44-.443 11.687-4.668 17.015-11.58l.05-.056a53.28 53.28 0 0 0 4.396-6.768v-.007c.44-.799.866-1.618 1.279-2.458a61.654 61.654 0 0 0 2.51-5.91l-.011.01.301-.824s.005-.013.009-.018a65.13 65.13 0 0 0 1.26-3.98l-.002-.008c.2-.705.387-1.418.563-2.138v-.006c.228-.97.44-1.951.634-2.942l.024-.067c.154-.788.298-1.582.42-2.388l-.011-.007c.15-.95.282-1.91.393-2.882-.002-.013.008-.026.012-.04.083-.728.156-1.461.218-2.2l-.008-.005a64.67 64.67 0 0 0 .18-2.812l-.008-.007a74.95 74.95 0 0 0 .052-2.009 65.7 65.7 0 0 0-.037-3.545l-.011-.006a70.25 70.25 0 0 0-.062-1.25.036.036 0 0 1 .013-.012z" />
                            </svg>
                            <span className="step-by-step__number">3</span>
                        </a>
                        <div className="step-by-step__text">
                            <h2 className="step-by-step__heading heading heading--level-2">Sit dolor</h2>
                            <div className="step-by-step__description">
                                Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. Proin eget tortor risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus.
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>;

export default InformationArticleSample3;