import React from "react";
import "./LandingPage.scss";
import { BLOGS, TRENDING_STORIES } from "../../utils/data";
import LandingPageImg from "../../media/img/landing_page_img.png";
import TrendingStoryItem from "../../components/TrendingStoryItem/TrendingStoryItem";
import { Link } from "react-router-dom";
import BlogItem from "../../components/BlogItem/BlogItem";

function LandingPage() {
    return (
        <div className="container">
            <div className="top_sec">
                <div className="top_sec_left">
                    <span className="top_sec_title">Stay curious.</span>
                    <span className="top_sec_subtitle">
                        Discover stories, thinking, and
                        <br />
                        expertise from writers on any topic.
                    </span>
                    <Link to="/" className="link black_btn">
                        Start reading
                    </Link>
                </div>
                <div className="top_sec_right">
                    <img
                        src={LandingPageImg}
                        alt="landing_page_img"
                        className="top_sec_img"
                    />
                </div>
            </div>

            <div className="trending_sec">
                <div className="trending_sec_title">Trending on Medium</div>
                <div className="trending_stories">
                    {TRENDING_STORIES.map((story, index) => {
                        return <TrendingStoryItem story={story} key={index} />;
                    })}
                </div>
            </div>

            <div className="blog_sec">
                <div className="blog_sec_left">
                    {BLOGS.map((blog, index) => {
                        return <BlogItem blog={blog} key={index} />;
                    })}
                </div>
                <div className="blog_sec_right">
                    <div className="blog_sec_right_sticky">
                        <div className="blog_sec_right_title">
                            DISCOVER MORE OF WHAT MATTERS TO YOU
                        </div>

                        <div className="categories">
                            <div className="category">
                                <Link to="/" className="link">
                                    Self
                                </Link>
                            </div>
                            <div className="category">
                                <Link to="/" className="link">
                                    Relationships
                                </Link>
                            </div>
                            <div className="category">
                                <Link to="/" className="link">
                                    Data Science
                                </Link>
                            </div>
                            <div className="category">
                                <Link to="/" className="link">
                                    Programming
                                </Link>
                            </div>
                            <div className="category">
                                <Link to="/" className="link">
                                    Productivity
                                </Link>
                            </div>
                            <div className="category">
                                <Link to="/" className="link">
                                    JavaScript
                                </Link>
                            </div>
                            <div className="category">
                                <Link to="/" className="link">
                                    Machine Learning
                                </Link>
                            </div>
                            <div className="category">
                                <Link to="/" className="link">
                                    Politics
                                </Link>
                            </div>
                            <div className="category">
                                <Link to="/" className="link">
                                    Health
                                </Link>
                            </div>
                        </div>

                        <hr />

                        <div className="footer">
                            <Link to="/" className="link footer_link">
                                Help
                            </Link>
                            <Link to="/" className="link footer_link">
                                Status
                            </Link>
                            <Link to="/" className="link footer_link">
                                Writers
                            </Link>
                            <Link to="/" className="link footer_link">
                                Blog
                            </Link>
                            <Link to="/" className="link footer_link">
                                Careers
                            </Link>
                            <Link to="/" className="link footer_link">
                                Privacy
                            </Link>
                            <Link to="/" className="link footer_link">
                                Terms
                            </Link>
                            <Link to="/" className="link footer_link">
                                About
                            </Link>
                            <Link to="/" className="link footer_link">
                                Knowable
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
