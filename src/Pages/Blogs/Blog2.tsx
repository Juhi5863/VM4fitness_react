

/* This main class will handle the rendering of all routes through the
use of a switch that will determine what page will be rendered based on the
active path */
import React from "react";
// import "./Blog.css";

// Render all home elements
export default class Blog2 extends React.Component {
    render() {
        return (
            <div style={{marginTop: "90px"}}>
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-4 col-lg-3 blog-sidebar">
                                <div className="sidebar-module">
                                    <h4>Archives</h4>
                                    <ol className="list-unstyled">
                                        <li><a href="#heading">Heading</a></li>
                                        <li><a href="#">February 2014</a></li>
                                        <li><a href="#">January 2014</a></li>
                                        <li><a href="#">December 2013</a></li>
                                        <li><a href="#">November 2013</a></li>
                                        <li><a href="#">October 2013</a></li>
                                        <li><a href="#">September 2013</a></li>
                                        <li><a href="#">August 2013</a></li>
                                        <li><a href="#">July 2013</a></li>
                                        <li><a href="#">June 2013</a></li>
                                        <li><a href="#">May 2013</a></li>
                                        <li><a href="#">April 2013</a></li>
                                    </ol>
                                    <h4>Elsewhere</h4>
                                    <ol className="list-unstyled">
                                        <li><a href="#">Instagram</a></li>
                                        <li><a href="#">Twitter</a></li>
                                        <li><a href="#">Facebook</a></li>
                                        <li><a href="#">Snapchat</a></li>
                                    </ol>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-8 blog-main">
                                <div className="blog-post">
                                    <h2 className="blog-post-title">Sample blog post</h2>
                                    <p className="blog-post-meta">
                                        September 4, 2017 by <a href="#">Kain</a>
                                    </p>
                                    <p>
                                        This blog post shows a few different types of content that&#39;s
                                        supported and styled with Bootstrap. Basic typography, images, and
                                        code are all supported.
                                    </p>
                                    <hr />
                                    <p>
                                        Cum sociis natoque penatibus et magnis
                                        {" "}<a href="#">dis parturient montes</a>, nascetur ridiculus mus.
                                        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
                                        vestibulum. Sed posuere consectetur est at lobortis. Cras mattis
                                        consectetur purus sit amet fermentum.
                                    </p>
                                    <blockquote>
                                        <p>
                                            Curabitur blandit tempus porttitor.
                                            {" "}<strong>Nullam quis risus eget urna mollis</strong> ornare vel
                                            eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
                                        </p>
                                    </blockquote>
                                    <p>
                                        Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis
                                        consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
                                        sed consectetur.
                                    </p>
                                    <h2 id="heading">Heading</h2>
                                    <p>
                                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                                        lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac,
                                        vestibulum at eros.
                                    </p>
                                    <h3>Sub-heading</h3>
                                    <p>
                                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                                        ridiculus mus.
                                    </p>
                                    <pre><code>Example code block</code></pre>
                                    <p>
                                        Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem
                                        malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus
                                        commodo, tortor mauris condimentum nibh, ut fermentum massa.
                                    </p>
                                    <h3>Sub-heading</h3>
                                    <p>
                                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                                        ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam
                                        porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac
                                        cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
                                        justo sit amet risus.
                                    </p>
                                    <ul>
                                        <li>
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                        </li>
                                        <li>Donec id elit non mi porta gravida at eget metus.</li>
                                        <li>Nulla vitae elit libero, a pharetra augue.</li>
                                    </ul>
                                    <p>
                                        Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit
                                        libero, a pharetra augue.
                                    </p>
                                    <ol>
                                        <li>Vestibulum id ligula porta felis euismod semper.</li>
                                        <li>
                                            Cum sociis natoque penatibus et magnis dis parturient montes,
                                            nascetur ridiculus mus.
                                        </li>
                                        <li>
                                            Maecenas sed diam eget risus varius blandit sit amet non magna.
                                        </li>
                                    </ol>
                                    <p>
                                        Cras mattis consectetur purus sit amet fermentum. Sed posuere
                                        consectetur est at lobortis.
                                    </p>
                                </div>

                                <div className="blog-post">
                                    <h2 className="blog-post-title">Another blog post</h2>
                                    <p className="blog-post-meta">
                                        December 23, 2013 by <a href="#">Jacob</a>
                                    </p>

                                    <p>
                                        Cum sociis natoque penatibus et magnis
                                        {" "}<a href="#">dis parturient montes</a>, nascetur ridiculus mus.
                                        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
                                        vestibulum. Sed posuere consectetur est at lobortis. Cras mattis
                                        consectetur purus sit amet fermentum.
                                    </p>
                                    <blockquote>
                                        <p>
                                            Curabitur blandit tempus porttitor.
                                            {" "}<strong>Nullam quis risus eget urna mollis</strong> ornare vel
                                            eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
                                        </p>
                                    </blockquote>
                                    <p>
                                        Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis
                                        consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
                                        sed consectetur.
                                    </p>
                                    <p>
                                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                                        lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac,
                                        vestibulum at eros.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}