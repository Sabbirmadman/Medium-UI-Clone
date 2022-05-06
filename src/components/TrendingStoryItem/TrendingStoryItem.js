import React from 'react';
import { Link } from 'react-router-dom';
import './TrendingStoryItem.scss';

function TrendingStoryItem({ story }) {
	return (
		<div className='story_item_container'>
			<div className='item_left'>
				<div className='rank_text'>
					0{story.rank}
				</div>
			</div>
			<div className='item_right'>
				<Link to={story.author_link} className='link author_sec'>
					<div className='author_img_container'>
						<img src={story.author_img} alt='author_img' className='author_img' />
					</div>
					<div className='author_name'>
						{story.author_name}
					</div>
				</Link>
				<div className='title_sec'>
					<Link to="/" className='link title'>
						{story.title.substring(0, 78)}
						{story.title.length > 78 && '...'}
					</Link>
				</div>
				<div className='footer_sec'>
					<div className='created_at'>
						{story.created_at}
					</div>
					·
					<div className='reading_time'>
						{story.reading_time}
					</div>
				</div>
			</div>
		</div>
	)
}

export default TrendingStoryItem