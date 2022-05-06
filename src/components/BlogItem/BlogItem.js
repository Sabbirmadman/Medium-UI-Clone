import React from 'react';
import { Link } from 'react-router-dom';
import './BlogItem.scss';

function BlogItem({ blog }) {
	return (
		<div className='blog_item_container'>
			<div className='blog_item_left_sec'>
				<Link to={blog.author_link} className='link author_sec'>
					<div className='author_img_container'>
						<img src={blog.author_img} alt='author' className='author_img' />
					</div>
					<div className='author_info_container'>
						<Link to='/' className='link info'>{blog.author_name}</Link>
						{
							blog.publication && (
								<>
									<span className='no_Style'>in</span>
									<Link to="/" className='link info'>{blog.publication}</Link>
								</>
							)
						}
					</div>
				</Link>
				<div className='content_sec'>
					<div className='content_title'>
						<Link to="/" className='link content_title'>
							{blog.title}
						</Link>
					</div>

					<div className='content_subtitle'>
						{blog.subtitle}
					</div>
				</div>
				<div className='blog_footer_sec'>
					<div className='footer_item'>{blog.created_at}</div>
					<div className='footer_item'>{blog.reading_time}</div>
					<Link to="/" className='footer_item link category'>{blog.category}</Link>
				</div>
			</div>
			<div className='blog_item_right_sec'>
				<img src={blog.image} alt='blog' className='blog_img' />
			</div>
		</div>
	)
}

export default BlogItem